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

const SWIPE_THRESHOLD = 52

interface OnboardContextValue {
  sectionCount: number
  activeSection: number
  getCardIndex: (sectionIndex: number) => number
  setCardIndex: (sectionIndex: number, cardIndex: number) => void
  nextCard: (sectionIndex: number, cardCount: number) => void
  prevCard: (sectionIndex: number) => void
  nextSection: () => void
  prevSection: () => void
  scrollToSection: (index: number) => void
  registerSection: (index: number, el: HTMLElement | null) => void
  registerViewport: (el: HTMLElement | null) => void
}

const OnboardContext = createContext<OnboardContextValue | null>(null)

export function useOnboard() {
  const ctx = useContext(OnboardContext)
  if (!ctx) throw new Error('useOnboard must be used within OnboardProvider')
  return ctx
}

export function OnboardProvider({
  sectionCount,
  children,
}: {
  sectionCount: number
  children: ReactNode
}) {
  const [activeSection, setActiveSection] = useState(0)
  const [cardIndices, setCardIndices] = useState<Record<number, number>>({})
  const viewportRef = useRef<HTMLElement | null>(null)
  const sectionRefs = useRef<Map<number, HTMLElement>>(new Map())
  const observerRef = useRef<IntersectionObserver | null>(null)
  const touchStart = useRef<{ x: number; y: number } | null>(null)

  const registerViewport = useCallback((el: HTMLElement | null) => {
    viewportRef.current = el
  }, [])

  const registerSection = useCallback((index: number, el: HTMLElement | null) => {
    const existing = sectionRefs.current.get(index)
    if (existing) observerRef.current?.unobserve(existing)
    if (el) {
      sectionRefs.current.set(index, el)
      observerRef.current?.observe(el)
    } else {
      sectionRefs.current.delete(index)
    }
  }, [])

  const scrollToSection = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(sectionCount - 1, index))
      const el = sectionRefs.current.get(clamped)
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setActiveSection(clamped)
    },
    [sectionCount],
  )

  const getCardIndex = useCallback(
    (sectionIndex: number) => cardIndices[sectionIndex] ?? 0,
    [cardIndices],
  )

  const setCardIndex = useCallback((sectionIndex: number, cardIndex: number) => {
    setCardIndices((prev) => ({ ...prev, [sectionIndex]: cardIndex }))
  }, [])

  const nextSection = useCallback(() => {
    scrollToSection(activeSection + 1)
  }, [activeSection, scrollToSection])

  const prevSection = useCallback(() => {
    scrollToSection(activeSection - 1)
  }, [activeSection, scrollToSection])

  const nextCard = useCallback(
    (sectionIndex: number, cardCount: number) => {
      const current = cardIndices[sectionIndex] ?? 0
      if (current < cardCount - 1) {
        setCardIndex(sectionIndex, current + 1)
        return
      }
      if (sectionIndex === activeSection) nextSection()
    },
    [activeSection, cardIndices, nextSection, setCardIndex],
  )

  const prevCard = useCallback(
    (sectionIndex: number) => {
      const current = cardIndices[sectionIndex] ?? 0
      if (current > 0) {
        setCardIndex(sectionIndex, current - 1)
        return
      }
      if (sectionIndex === activeSection) prevSection()
    },
    [activeSection, cardIndices, prevSection, setCardIndex],
  )

  useEffect(() => {
    const viewport = viewportRef.current
    if (!viewport) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (!visible) return
        const index = Number((visible.target as HTMLElement).dataset.onboardIndex)
        if (!Number.isNaN(index)) setActiveSection(index)
      },
      { root: viewport, threshold: [0.45, 0.6, 0.75] },
    )

    observerRef.current = observer
    sectionRefs.current.forEach((el) => observer.observe(el))

    return () => {
      observer.disconnect()
      observerRef.current = null
    }
  }, [])

  useEffect(() => {
    const viewport = viewportRef.current
    if (!viewport) return

    const onTouchStart = (e: TouchEvent) => {
      const t = e.touches[0]
      touchStart.current = { x: t.clientX, y: t.clientY }
    }

    const onTouchEnd = (e: TouchEvent) => {
      if (!touchStart.current) return
      const t = e.changedTouches[0]
      const dx = t.clientX - touchStart.current.x
      const dy = t.clientY - touchStart.current.y
      touchStart.current = null

      if (Math.abs(dx) < SWIPE_THRESHOLD && Math.abs(dy) < SWIPE_THRESHOLD) return

      const sectionEl = sectionRefs.current.get(activeSection)
      const cardCount = Number(sectionEl?.dataset.cardCount ?? 1)

      if (Math.abs(dx) > Math.abs(dy)) {
        if (dx < 0) nextCard(activeSection, cardCount)
        else prevCard(activeSection)
        return
      }

      if (dy > 0) nextSection()
      else prevSection()
    }

    viewport.addEventListener('touchstart', onTouchStart, { passive: true })
    viewport.addEventListener('touchend', onTouchEnd, { passive: true })
    return () => {
      viewport.removeEventListener('touchstart', onTouchStart)
      viewport.removeEventListener('touchend', onTouchEnd)
    }
  }, [activeSection, cardIndices, nextCard, prevCard, nextSection, prevSection])

  useEffect(() => {
    document.documentElement.classList.add('onboard-mode')
    return () => document.documentElement.classList.remove('onboard-mode')
  }, [])

  const value = useMemo<OnboardContextValue>(
    () => ({
      sectionCount,
      activeSection,
      getCardIndex,
      setCardIndex,
      nextCard,
      prevCard,
      nextSection,
      prevSection,
      scrollToSection,
      registerSection,
      registerViewport,
    }),
    [
      sectionCount,
      activeSection,
      getCardIndex,
      setCardIndex,
      nextCard,
      prevCard,
      nextSection,
      prevSection,
      scrollToSection,
      registerSection,
      registerViewport,
    ],
  )

  return <OnboardContext.Provider value={value}>{children}</OnboardContext.Provider>
}
