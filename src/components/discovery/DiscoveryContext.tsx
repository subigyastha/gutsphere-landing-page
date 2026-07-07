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
import { DISCOVERY_STAGES } from './constants'

interface DiscoveryContextValue {
  activeStage: number
  journeyStarted: boolean
  maxReachedStage: number
  startJourney: () => void
  goToStage: (index: number) => void
  registerCheckpoint: (index: number, el: HTMLElement | null) => void
  registerScrollContainer: (el: HTMLElement | null) => void
}

const DiscoveryContext = createContext<DiscoveryContextValue | null>(null)

export function useDiscovery() {
  const ctx = useContext(DiscoveryContext)
  if (!ctx) throw new Error('useDiscovery must be used within DiscoveryProvider')
  return ctx
}

export function DiscoveryProvider({ children }: { children: ReactNode }) {
  const [activeStage, setActiveStage] = useState(0)
  const [journeyStarted, setJourneyStarted] = useState(false)
  const [maxReachedStage, setMaxReachedStage] = useState(0)
  const [checkpointCount, setCheckpointCount] = useState(0)
  const [scrollRootReady, setScrollRootReady] = useState(false)
  const checkpointsRef = useRef<Map<number, HTMLElement>>(new Map())
  const scrollContainerRef = useRef<HTMLElement | null>(null)
  const scrollLockRef = useRef(false)

  const registerScrollContainer = useCallback((el: HTMLElement | null) => {
    scrollContainerRef.current = el
    setScrollRootReady(Boolean(el))
  }, [])

  const registerCheckpoint = useCallback((index: number, el: HTMLElement | null) => {
    if (el) checkpointsRef.current.set(index, el)
    else checkpointsRef.current.delete(index)
    setCheckpointCount(checkpointsRef.current.size)
  }, [])

  const scrollToCheckpoint = useCallback((index: number) => {
    const el = checkpointsRef.current.get(index)
    const container = scrollContainerRef.current
    if (!el || !container) return

    scrollLockRef.current = true
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    window.setTimeout(() => {
      scrollLockRef.current = false
    }, 700)
  }, [])

  const goToStage = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(index, DISCOVERY_STAGES.length - 1))
      setJourneyStarted(true)
      setActiveStage(clamped)
      setMaxReachedStage((prev) => Math.max(prev, clamped))
      scrollToCheckpoint(clamped)
    },
    [scrollToCheckpoint],
  )

  const startJourney = useCallback(() => {
    setJourneyStarted(true)
    goToStage(0)
  }, [goToStage])

  useEffect(() => {
    document.documentElement.classList.add('journey-scroll-lock')
    return () => document.documentElement.classList.remove('journey-scroll-lock')
  }, [])

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container || !scrollRootReady) return

    const elements = () =>
      [...checkpointsRef.current.entries()]
        .sort(([a], [b]) => a - b)
        .map(([, el]) => el)

    const observer = new IntersectionObserver(
      (entries) => {
        if (scrollLockRef.current) return

        let bestIndex = -1
        let bestRatio = 0

        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          const index = Number((entry.target as HTMLElement).dataset.discoveryStage)
          if (Number.isNaN(index)) continue
          if (entry.intersectionRatio >= bestRatio) {
            bestRatio = entry.intersectionRatio
            bestIndex = index
          }
        }

        if (bestIndex >= 0 && bestRatio >= 0.45) {
          setActiveStage(bestIndex)
          setMaxReachedStage((prev) => Math.max(prev, bestIndex))
          if (bestIndex > 0 || bestRatio > 0.6) setJourneyStarted(true)
        }
      },
      {
        root: container,
        threshold: [0.45, 0.6, 0.75, 0.9],
        rootMargin: '0px',
      },
    )

    const observeAll = () => elements().forEach((el) => observer.observe(el))
    observeAll()
    const timer = window.setTimeout(observeAll, 150)

    return () => {
      window.clearTimeout(timer)
      observer.disconnect()
    }
  }, [checkpointCount, scrollRootReady])

  const value = useMemo(
    () => ({
      activeStage,
      journeyStarted,
      maxReachedStage,
      startJourney,
      goToStage,
      registerCheckpoint,
      registerScrollContainer,
    }),
    [
      activeStage,
      journeyStarted,
      maxReachedStage,
      startJourney,
      goToStage,
      registerCheckpoint,
      registerScrollContainer,
    ],
  )

  return <DiscoveryContext.Provider value={value}>{children}</DiscoveryContext.Provider>
}
