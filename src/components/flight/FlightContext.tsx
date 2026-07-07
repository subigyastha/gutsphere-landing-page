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
import { FLIGHT_ZONES } from './constants'

export interface PlanePosition {
  x: number
  y: number
  rotation: number
  visible: boolean
}

interface ZoneRect {
  id: string
  index: number
  rect: DOMRect
}

interface FlightContextValue {
  planeEnabled: boolean
  reducedMotion: boolean
  isCoarsePointer: boolean
  plane: PlanePosition
  activeZoneIndex: number
  hudMessage: string
  zoneProximity: Record<string, number>
  obstacleProximity: Record<string, number>
  hoveringInteractive: boolean
  hasMoved: boolean
  registerZone: (id: string, index: number, el: HTMLElement | null) => void
  registerObstacle: (id: string, el: HTMLElement | null) => void
  setHoveringInteractive: (hovering: boolean) => void
  scrollToZone: (index: number) => void
}

const FlightContext = createContext<FlightContextValue | null>(null)

const LERP = 0.14
const PROXIMITY_RADIUS = 180

function useMediaQueries() {
  const [reducedMotion, setReducedMotion] = useState(false)
  const [isCoarsePointer, setIsCoarsePointer] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const motionMq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const pointerMq = window.matchMedia('(pointer: coarse)')
    const desktopMq = window.matchMedia('(min-width: 1024px)')

    const update = () => {
      setReducedMotion(motionMq.matches)
      setIsCoarsePointer(pointerMq.matches)
      setIsDesktop(desktopMq.matches)
    }

    update()
    motionMq.addEventListener('change', update)
    pointerMq.addEventListener('change', update)
    desktopMq.addEventListener('change', update)
    return () => {
      motionMq.removeEventListener('change', update)
      pointerMq.removeEventListener('change', update)
      desktopMq.removeEventListener('change', update)
    }
  }, [])

  return { reducedMotion, isCoarsePointer, isDesktop }
}

export function FlightProvider({ children }: { children: ReactNode }) {
  const { reducedMotion, isCoarsePointer, isDesktop } = useMediaQueries()
  const planeEnabled = isDesktop && !isCoarsePointer

  const [plane, setPlane] = useState<PlanePosition>({
    x: -100,
    y: -100,
    rotation: 0,
    visible: false,
  })
  const [activeZoneIndex, setActiveZoneIndex] = useState(0)
  const [zoneProximity, setZoneProximity] = useState<Record<string, number>>({})
  const [obstacleProximity, setObstacleProximity] = useState<Record<string, number>>({})
  const [hoveringInteractive, setHoveringInteractive] = useState(false)
  const [hasMoved, setHasMoved] = useState(false)

  const targetRef = useRef({ x: 0, y: 0 })
  const currentRef = useRef({ x: 0, y: 0 })
  const prevRef = useRef({ x: 0, y: 0 })
  const rotationRef = useRef(0)
  const rafRef = useRef<number>(0)
  const zonesRef = useRef<Map<string, ZoneRect>>(new Map())
  const obstaclesRef = useRef<Map<string, HTMLElement>>(new Map())

  const registerZone = useCallback((id: string, index: number, el: HTMLElement | null) => {
    if (el) {
      zonesRef.current.set(id, { id, index, rect: el.getBoundingClientRect() })
    } else {
      zonesRef.current.delete(id)
    }
  }, [])

  const registerObstacle = useCallback((id: string, el: HTMLElement | null) => {
    if (el) obstaclesRef.current.set(id, el)
    else obstaclesRef.current.delete(id)
  }, [])

  const scrollToZone = useCallback((index: number) => {
    const zone = FLIGHT_ZONES[index]
    if (!zone) return
    document.getElementById(`flight-zone-${zone.id}`)?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  const hudMessage = FLIGHT_ZONES[activeZoneIndex]?.hudMessage ?? FLIGHT_ZONES[0].hudMessage

  useEffect(() => {
    if (!planeEnabled) {
      document.documentElement.classList.remove('flight-cursor-active')
      return
    }

    document.documentElement.classList.add('flight-cursor-active')

    const onMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY }
      if (!hasMoved) setHasMoved(true)
    }

    const tick = () => {
      const target = targetRef.current
      const current = currentRef.current
      const lerpFactor = reducedMotion ? 0.35 : LERP

      current.x += (target.x - current.x) * lerpFactor
      current.y += (target.y - current.y) * lerpFactor

      const dx = current.x - prevRef.current.x
      const dy = current.y - prevRef.current.y
      const speed = Math.hypot(dx, dy)
      const rotation =
        speed > 0.5 ? (Math.atan2(dy, dx) * 180) / Math.PI + 90 : rotationRef.current
      rotationRef.current = rotation

      prevRef.current = { x: current.x, y: current.y }

      setPlane({
        x: current.x,
        y: current.y,
        rotation: reducedMotion ? 0 : rotation,
        visible: hasMoved,
      })

      // Proximity calculations
      const newZoneProx: Record<string, number> = {}
      let bestZone = 0
      let bestDist = Infinity

      zonesRef.current.forEach((zone) => {
        const rect = zone.rect
        const cx = rect.left + rect.width / 2
        const cy = rect.top + rect.height / 2
        const dist = Math.hypot(current.x - cx, current.y - cy)
        const prox = Math.max(0, 1 - dist / (PROXIMITY_RADIUS * 2.5))
        newZoneProx[zone.id] = prox

        if (dist < bestDist) {
          bestDist = dist
          bestZone = zone.index
        }
      })

      setZoneProximity(newZoneProx)
      setActiveZoneIndex(bestZone)

      const newObsProx: Record<string, number> = {}
      obstaclesRef.current.forEach((el, id) => {
        const rect = el.getBoundingClientRect()
        const cx = rect.left + rect.width / 2
        const cy = rect.top + rect.height / 2
        const dist = Math.hypot(current.x - cx, current.y - cy)
        newObsProx[id] = Math.max(0, 1 - dist / PROXIMITY_RADIUS)
      })
      setObstacleProximity(newObsProx)

      rafRef.current = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    rafRef.current = requestAnimationFrame(tick)

    const refreshRects = () => {
      zonesRef.current.forEach((zone, id) => {
        const el = document.getElementById(`flight-zone-${id}`)
        if (el) zonesRef.current.set(id, { ...zone, rect: el.getBoundingClientRect() })
      })
    }

    window.addEventListener('scroll', refreshRects, { passive: true })
    window.addEventListener('resize', refreshRects, { passive: true })

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('scroll', refreshRects)
      window.removeEventListener('resize', refreshRects)
      cancelAnimationFrame(rafRef.current)
      document.documentElement.classList.remove('flight-cursor-active')
    }
  }, [planeEnabled, reducedMotion, hasMoved])

  // Mobile scroll-based zone tracking
  useEffect(() => {
    if (planeEnabled) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.4) {
            const index = Number((entry.target as HTMLElement).dataset.zoneIndex)
            if (!Number.isNaN(index)) setActiveZoneIndex(index)
          }
        })
      },
      { threshold: [0.4, 0.6] },
    )

    FLIGHT_ZONES.forEach((zone) => {
      const el = document.getElementById(`flight-zone-${zone.id}`)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [planeEnabled])

  const value = useMemo<FlightContextValue>(
    () => ({
      planeEnabled,
      reducedMotion,
      isCoarsePointer,
      plane,
      activeZoneIndex,
      hudMessage,
      zoneProximity,
      obstacleProximity,
      hoveringInteractive,
      hasMoved,
      registerZone,
      registerObstacle,
      setHoveringInteractive,
      scrollToZone,
    }),
    [
      planeEnabled,
      reducedMotion,
      isCoarsePointer,
      plane,
      activeZoneIndex,
      hudMessage,
      zoneProximity,
      obstacleProximity,
      hoveringInteractive,
      hasMoved,
      registerZone,
      registerObstacle,
      scrollToZone,
    ],
  )

  return <FlightContext.Provider value={value}>{children}</FlightContext.Provider>
}

export function useFlight() {
  const ctx = useContext(FlightContext)
  if (!ctx) throw new Error('useFlight must be used within FlightProvider')
  return ctx
}
