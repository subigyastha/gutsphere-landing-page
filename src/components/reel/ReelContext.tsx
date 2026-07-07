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

interface ReelContextValue {
  activeReel: number
  reelCount: number
  viewportEl: HTMLElement | null
  setReelCount: (n: number) => void
  registerViewport: (el: HTMLElement | null) => void
  registerReel: (index: number, el: HTMLElement | null) => void
  scrollToReel: (index: number) => void
}

const ReelContext = createContext<ReelContextValue | null>(null)

export function ReelProvider({ children }: { children: ReactNode }) {
  const [activeReel, setActiveReel] = useState(0)
  const [reelCount, setReelCount] = useState(0)
  const [viewportEl, setViewportEl] = useState<HTMLElement | null>(null)
  const viewportRef = useRef<HTMLElement | null>(null)
  const reelsRef = useRef<Map<number, HTMLElement>>(new Map())
  const lockRef = useRef(false)

  const registerViewport = useCallback((el: HTMLElement | null) => {
    viewportRef.current = el
    setViewportEl(el)
  }, [])

  const registerReel = useCallback((index: number, el: HTMLElement | null) => {
    if (el) reelsRef.current.set(index, el)
    else reelsRef.current.delete(index)
    setReelCount(reelsRef.current.size)
  }, [])

  const scrollToReel = useCallback((index: number) => {
    const el = reelsRef.current.get(index)
    const viewport = viewportRef.current
    if (!el || !viewport) return
    lockRef.current = true
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    window.setTimeout(() => {
      lockRef.current = false
    }, 600)
  }, [])

  useEffect(() => {
    const viewport = viewportRef.current
    if (!viewport) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (lockRef.current) return
        let best = -1
        let bestRatio = 0
        for (const entry of entries) {
          const index = Number((entry.target as HTMLElement).dataset.reelIndex)
          if (Number.isNaN(index)) continue
          if (entry.intersectionRatio > bestRatio) {
            bestRatio = entry.intersectionRatio
            best = index
          }
        }
        if (best >= 0 && bestRatio >= 0.35) setActiveReel(best)
      },
      { root: viewport, threshold: [0.35, 0.5, 0.65, 0.8] },
    )

    reelsRef.current.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [reelCount])

  const value = useMemo(
    () => ({
      activeReel,
      reelCount,
      viewportEl,
      setReelCount,
      registerViewport,
      registerReel,
      scrollToReel,
    }),
    [activeReel, reelCount, viewportEl, registerViewport, registerReel, scrollToReel],
  )

  return <ReelContext.Provider value={value}>{children}</ReelContext.Provider>
}

export function useReel() {
  const ctx = useContext(ReelContext)
  if (!ctx) throw new Error('useReel must be used within ReelProvider')
  return ctx
}
