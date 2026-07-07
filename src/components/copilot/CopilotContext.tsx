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
import { CHAPTERS } from './constants'

interface CopilotContextValue {
  reducedMotion: boolean
  isDesktop: boolean
  chapterIndex: number
  cardIndex: number
  totalChapters: number
  activeChapter: (typeof CHAPTERS)[number]
  activeCard: (typeof CHAPTERS)[number]['cards'][number]
  showStickyCta: boolean
  heroTakeoff: boolean
  goToChapter: (index: number) => void
  goToCard: (index: number) => void
  nextChapter: () => void
  prevChapter: () => void
  nextCard: () => void
  prevCard: () => void
  skipToCta: () => void
  restartJourney: () => void
}

const CopilotContext = createContext<CopilotContextValue | null>(null)

const DESKTOP_MQ = '(min-width: 1024px)'

export function CopilotProvider({ children }: { children: ReactNode }) {
  const [reducedMotion, setReducedMotion] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)
  const [chapterIndex, setChapterIndex] = useState(0)
  const [cardIndex, setCardIndex] = useState(0)
  const wheelLock = useRef(false)
  const wheelTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const motionMq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const desktopMq = window.matchMedia(DESKTOP_MQ)
    const updateMotion = () => setReducedMotion(motionMq.matches)
    const updateDesktop = () => setIsDesktop(desktopMq.matches)
    updateMotion()
    updateDesktop()
    motionMq.addEventListener('change', updateMotion)
    desktopMq.addEventListener('change', updateDesktop)
    return () => {
      motionMq.removeEventListener('change', updateMotion)
      desktopMq.removeEventListener('change', updateDesktop)
    }
  }, [])

  const activeChapter = CHAPTERS[chapterIndex]
  const activeCard = activeChapter.cards[cardIndex]
  const showStickyCta = chapterIndex >= 2
  const heroTakeoff = chapterIndex > 0

  const goToChapter = useCallback((index: number) => {
    const clamped = Math.max(0, Math.min(CHAPTERS.length - 1, index))
    setChapterIndex(clamped)
    setCardIndex(0)
  }, [])

  const goToCard = useCallback(
    (index: number) => {
      const max = CHAPTERS[chapterIndex].cards.length - 1
      setCardIndex(Math.max(0, Math.min(max, index)))
    },
    [chapterIndex],
  )

  const nextCard = useCallback(() => {
    const chapter = CHAPTERS[chapterIndex]
    if (cardIndex < chapter.cards.length - 1) {
      setCardIndex((c) => c + 1)
      return true
    }
    return false
  }, [chapterIndex, cardIndex])

  const prevCard = useCallback(() => {
    if (cardIndex > 0) {
      setCardIndex((c) => c - 1)
      return true
    }
    return false
  }, [cardIndex])

  const nextChapter = useCallback(() => {
    if (chapterIndex < CHAPTERS.length - 1) {
      setChapterIndex((c) => c + 1)
      setCardIndex(0)
    }
  }, [chapterIndex])

  const prevChapter = useCallback(() => {
    if (chapterIndex > 0) {
      setChapterIndex((c) => c - 1)
      setCardIndex(0)
    }
  }, [chapterIndex])

  const skipToCta = useCallback(() => {
    goToChapter(CHAPTERS.length - 1)
  }, [goToChapter])

  const restartJourney = useCallback(() => {
    setChapterIndex(0)
    setCardIndex(0)
  }, [])

  const advance = useCallback(() => {
    if (!nextCard()) nextChapter()
  }, [nextCard, nextChapter])

  const retreat = useCallback(() => {
    if (!prevCard()) prevChapter()
  }, [prevCard, prevChapter])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return
      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault()
          advance()
          break
        case 'ArrowUp':
          e.preventDefault()
          retreat()
          break
        case 'ArrowRight':
          e.preventDefault()
          nextCard()
          break
        case 'ArrowLeft':
          e.preventDefault()
          prevCard()
          break
        default:
          break
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [advance, retreat, nextCard, prevCard])

  useEffect(() => {
    if (!isDesktop) return

    const onWheel = (e: Event) => {
      const wheel = e as WheelEvent
      const target = wheel.target as HTMLElement
      if (target.closest('a, button, [role="tablist"]')) return
      if (Math.abs(wheel.deltaY) < 12) return

      wheel.preventDefault()
      if (wheelLock.current) return

      wheelLock.current = true
      if (wheelTimer.current) clearTimeout(wheelTimer.current)
      wheelTimer.current = setTimeout(() => {
        wheelLock.current = false
      }, reducedMotion ? 200 : 450)

      if (wheel.deltaY > 0) advance()
      else retreat()
    }

    const stage = document.querySelector('.copilot-stage')
    stage?.addEventListener('wheel', onWheel, { passive: false })
    return () => stage?.removeEventListener('wheel', onWheel)
  }, [isDesktop, advance, retreat, reducedMotion])

  const value = useMemo<CopilotContextValue>(
    () => ({
      reducedMotion,
      isDesktop,
      chapterIndex,
      cardIndex,
      totalChapters: CHAPTERS.length,
      activeChapter,
      activeCard,
      showStickyCta,
      heroTakeoff,
      goToChapter,
      goToCard,
      nextChapter,
      prevChapter,
      nextCard,
      prevCard,
      skipToCta,
      restartJourney,
    }),
    [
      reducedMotion,
      isDesktop,
      chapterIndex,
      cardIndex,
      activeChapter,
      activeCard,
      showStickyCta,
      heroTakeoff,
      goToChapter,
      goToCard,
      nextChapter,
      prevChapter,
      nextCard,
      prevCard,
      skipToCta,
      restartJourney,
    ],
  )

  return <CopilotContext.Provider value={value}>{children}</CopilotContext.Provider>
}

export function useCopilot() {
  const ctx = useContext(CopilotContext)
  if (!ctx) throw new Error('useCopilot must be used within CopilotProvider')
  return ctx
}
