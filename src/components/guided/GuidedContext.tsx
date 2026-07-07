import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import { JOURNEY_CARDS } from './constants'

interface GuidedContextValue {
  reducedMotion: boolean
  scrollProgress: number
  activeCardIndex: number
  cardProgress: Record<string, number>
  hudMessage: string
  showStickyCta: boolean
  registerCard: (id: string, index: number, el: HTMLElement | null) => void
  scrollToCard: (index: number) => void
}

const GuidedContext = createContext<GuidedContextValue | null>(null)

export function GuidedProvider({ children }: { children: ReactNode }) {
  const [reducedMotion, setReducedMotion] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeCardIndex, setActiveCardIndex] = useState(0)
  const [cardProgress, setCardProgress] = useState<Record<string, number>>({})
  const cardsRef = useRef<Map<string, { index: number; el: HTMLElement }>>(new Map())
  const observerRef = useRef<IntersectionObserver | null>(null)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReducedMotion(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const next: Record<string, number> = {}
        let bestIndex = -1
        let bestRatio = 0

        entries.forEach((entry) => {
          const id = (entry.target as HTMLElement).dataset.cardId
          if (!id) return
          next[id] = entry.intersectionRatio

          const index = Number((entry.target as HTMLElement).dataset.cardIndex)
          if (!Number.isNaN(index) && entry.intersectionRatio > bestRatio) {
            bestRatio = entry.intersectionRatio
            bestIndex = index
          }
        })

        setCardProgress((prev) => ({ ...prev, ...next }))
        if (bestRatio > 0.2 && bestIndex >= 0) setActiveCardIndex(bestIndex)
      },
      { threshold: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1], rootMargin: '-10% 0px -10% 0px' },
    )

    cardsRef.current.forEach(({ el }) => observerRef.current?.observe(el))
    return () => observerRef.current?.disconnect()
  }, [])

  const registerCard = useCallback((id: string, index: number, el: HTMLElement | null) => {
    if (el) {
      cardsRef.current.set(id, { index, el })
      observerRef.current?.observe(el)
    } else {
      const existing = cardsRef.current.get(id)
      if (existing) observerRef.current?.unobserve(existing.el)
      cardsRef.current.delete(id)
    }
  }, [])

  const scrollToCard = useCallback((index: number) => {
    const card = JOURNEY_CARDS[index]
    if (!card) return
    document.getElementById(`guided-card-${card.id}`)?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  useEffect(() => {
    const updateScrollProgress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      const progress = max > 0 ? window.scrollY / max : 0
      setScrollProgress(Math.min(1, Math.max(0, progress)))
    }

    const onScroll = () => {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(updateScrollProgress)
    }

    updateScrollProgress()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  const hudMessage = JOURNEY_CARDS[activeCardIndex]?.hudMessage ?? JOURNEY_CARDS[0].hudMessage
  const showStickyCta = activeCardIndex >= 6 && activeCardIndex < JOURNEY_CARDS.length - 1

  const value = useMemo<GuidedContextValue>(
    () => ({
      reducedMotion,
      scrollProgress,
      activeCardIndex,
      cardProgress,
      hudMessage,
      showStickyCta,
      registerCard,
      scrollToCard,
    }),
    [
      reducedMotion,
      scrollProgress,
      activeCardIndex,
      cardProgress,
      hudMessage,
      showStickyCta,
      registerCard,
      scrollToCard,
    ],
  )

  return <GuidedContext.Provider value={value}>{children}</GuidedContext.Provider>
}

export function useGuided() {
  const ctx = useContext(GuidedContext)
  if (!ctx) throw new Error('useGuided must be used within GuidedProvider')
  return ctx
}
