import { useCallback, useEffect, useRef, useState, type RefObject } from 'react'
import type { ScrollGutStop } from './constants'
import { SCROLL_GUT_CARD_REVEAL_OFFSET, SCROLL_GUT_STOP_REACH_OFFSET } from './constants'

const clamp = (value: number, min = 0, max = 1) => Math.min(Math.max(value, min), max)

export interface PlaneState {
  x: number
  y: number
  angle: number
  progress: number
}

export interface StopPosition {
  x: number
  y: number
}

export interface StopVisibility {
  stopIndex: number
  isReached: boolean
  isActive: boolean
  visibleCardCount: number
  activeCardIndex: number
}

export function useScrollGutJourney(
  canvasRef: RefObject<HTMLElement | null>,
  svgRef: RefObject<SVGSVGElement | null>,
  pathRef: RefObject<SVGPathElement | null>,
  stops: readonly ScrollGutStop[],
) {
  const pathLengthRef = useRef(0)
  const tickingRef = useRef(false)
  const [rawProgress, setRawProgress] = useState(0)
  const [activeStopIndex, setActiveStopIndex] = useState(-1)
  const [stopVisibilities, setStopVisibilities] = useState<StopVisibility[]>([])
  const [plane, setPlane] = useState<PlaneState>({ x: 510, y: 0, angle: 0, progress: 0 })
  const [positions, setPositions] = useState<StopPosition[]>([])

  const getPathPoint = useCallback(
    (progress: number) => {
      const path = pathRef.current
      if (!path || pathLengthRef.current === 0) return { x: 510, y: 0 }
      const point = path.getPointAtLength(pathLengthRef.current * clamp(progress))
      return { x: point.x, y: point.y }
    },
    [pathRef],
  )

  const getPathAngle = useCallback(
    (progress: number) => {
      const offset = 0.003
      const before = getPathPoint(clamp(progress - offset))
      const after = getPathPoint(clamp(progress + offset))
      return (Math.atan2(after.y - before.y, after.x - before.x) * 180) / Math.PI
    },
    [getPathPoint],
  )

  const getScrollProgress = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return 0

    const rect = canvas.getBoundingClientRect()
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight
    const startLine = viewportHeight * 0.56
    const travelDistance = rect.height - viewportHeight * 0.44
    return clamp((startLine - rect.top) / travelDistance)
  }, [canvasRef])

  const magnetizeToCheckpoint = useCallback(
    (progress: number) => {
      const holdDistance = 0.014
      const stop = stops.find((item) => Math.abs(progress - item.progress) < holdDistance)
      return stop ? stop.progress : progress
    },
    [stops],
  )

  const computeStopVisibilities = useCallback(
    (progress: number): StopVisibility[] => {
      let activeIndex = -1

      return stops.map((stop, stopIndex) => {
        const isReached = progress >= stop.progress - SCROLL_GUT_STOP_REACH_OFFSET
        if (isReached) activeIndex = stopIndex

        let visibleCardCount = 0
        let activeCardIndex = -1

        stop.cards.forEach((_, cardIndex) => {
          const cardThreshold =
            stop.progress - SCROLL_GUT_STOP_REACH_OFFSET + cardIndex * SCROLL_GUT_CARD_REVEAL_OFFSET
          if (progress >= cardThreshold) {
            visibleCardCount = cardIndex + 1
            activeCardIndex = cardIndex
          }
        })

        return {
          stopIndex,
          isReached,
          isActive: false,
          visibleCardCount,
          activeCardIndex,
        }
      }).map((item, index) => ({
        ...item,
        isActive: index === activeIndex,
      }))
    },
    [stops],
  )

  const updateStopPositions = useCallback(() => {
    const canvas = canvasRef.current
    const svg = svgRef.current
    if (!canvas || !svg) return

    const canvasRect = canvas.getBoundingClientRect()
    const svgRect = svg.getBoundingClientRect()
    const viewBox = svg.viewBox.baseVal

    const nextPositions = stops.map((stop) => {
      const point = getPathPoint(stop.progress)
      return {
        x: svgRect.left - canvasRect.left + (point.x / viewBox.width) * svgRect.width,
        y: svgRect.top - canvasRect.top + (point.y / viewBox.height) * svgRect.height,
      }
    })

    setPositions(nextPositions)
  }, [canvasRef, svgRef, stops, getPathPoint])

  const update = useCallback(() => {
    const nextRawProgress = getScrollProgress()
    const progress = magnetizeToCheckpoint(nextRawProgress)
    const point = getPathPoint(progress)
    const angle = getPathAngle(progress)
    const visibilities = computeStopVisibilities(nextRawProgress)

    setRawProgress(nextRawProgress)
    setPlane({ x: point.x, y: point.y, angle, progress })
    setStopVisibilities(visibilities)
    setActiveStopIndex(visibilities.findIndex((item) => item.isActive))

    tickingRef.current = false
  }, [computeStopVisibilities, getPathAngle, getPathPoint, getScrollProgress, magnetizeToCheckpoint])

  const requestUpdate = useCallback(() => {
    if (tickingRef.current) return
    tickingRef.current = true
    window.requestAnimationFrame(update)
  }, [update])

  const scrollToProgress = useCallback(
    (targetProgress: number) => {
      const canvas = canvasRef.current
      if (!canvas) return

      const rect = canvas.getBoundingClientRect()
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight
      const startLine = viewportHeight * 0.56
      const travelDistance = rect.height - viewportHeight * 0.44
      const absoluteTop = window.scrollY + rect.top
      const targetY = absoluteTop + startLine * -1 + travelDistance * targetProgress

      window.scrollTo({ top: targetY, behavior: 'smooth' })
    },
    [canvasRef],
  )

  useEffect(() => {
    const path = pathRef.current
    if (!path) return

    pathLengthRef.current = path.getTotalLength()
    updateStopPositions()
    update()
  }, [pathRef, update, updateStopPositions, stops])

  useEffect(() => {
    const handleResize = () => {
      updateStopPositions()
      requestUpdate()
    }

    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', handleResize)
    window.addEventListener('orientationchange', handleResize)

    return () => {
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('orientationchange', handleResize)
    }
  }, [requestUpdate, updateStopPositions])

  return {
    activeStopIndex,
    rawProgress,
    plane,
    positions,
    stopVisibilities,
    scrollToProgress,
    requestUpdate,
  }
}
