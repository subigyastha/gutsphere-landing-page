import { useCallback, useEffect, useRef, useState } from 'react'
import { JOURNEY_FRAC, JOURNEY_SHORT_LABELS, JOURNEY_STAGES } from './constants'

export interface JourneyMapState {
  state: number
  mapShown: boolean
}

const COHORTS = [
  { i: 0, title: 'Still finding answers', sub: 'Symptoms, no clear diagnosis yet' },
  { i: 1, title: 'Newly diagnosed · in treatment', sub: 'You have a plan — is it working?' },
  { i: 2, title: 'Living with it', sub: 'Managing flares and triggers day to day' },
  { i: 3, title: 'Staying ahead', sub: 'Prevention, monitoring, the long game' },
] as const

export function useJourneyMap() {
  const routeRef = useRef<SVGPathElement>(null)
  const contrailRef = useRef<SVGPathElement>(null)
  const planeRef = useRef<SVGGElement>(null)
  const fxRef = useRef<SVGGElement>(null)
  const [routeLen, setRouteLen] = useState(0)
  const [points, setPoints] = useState<{ x: number; y: number }[]>([])
  const [journey, setJourney] = useState<JourneyMapState>({ state: -1, mapShown: false })
  const [pingIndex, setPingIndex] = useState<number | null>(null)

  useEffect(() => {
    const route = routeRef.current
    if (!route) return
    const L = route.getTotalLength()
    setRouteLen(L)
    setPoints(JOURNEY_FRAC.map((f) => route.getPointAtLength(f * L)))
    if (contrailRef.current) {
      contrailRef.current.style.strokeDasharray = `${L}`
    }
  }, [])

  const planeAt = useCallback(
    (f: number) => {
      const route = routeRef.current
      const plane = planeRef.current
      if (!route || !plane || !routeLen) return
      const p = route.getPointAtLength(f * routeLen)
      const a = route.getPointAtLength(Math.max(0, f - 0.012) * routeLen)
      const b = route.getPointAtLength(Math.min(1, f + 0.012) * routeLen)
      const ang = (Math.atan2(b.y - a.y, b.x - a.x) * 180) / Math.PI
      plane.setAttribute(
        'transform',
        `translate(${(p.x - 12).toFixed(1)},${(p.y - 12).toFixed(1)}) rotate(${ang.toFixed(1)} 12 12)`,
      )
    },
    [routeLen],
  )

  const setContrail = useCallback(
    (f: number) => {
      if (contrailRef.current && routeLen) {
        contrailRef.current.style.strokeDashoffset = `${routeLen - f * routeLen}`
      }
    },
    [routeLen],
  )

  const celebrate = useCallback(
    (i: number) => {
      const fx = fxRef.current
      const p = points[i]
      if (!fx || !p) return
      const ring = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
      ring.setAttribute('cx', `${p.x}`)
      ring.setAttribute('cy', `${p.y}`)
      ring.setAttribute('r', '14')
      ring.setAttribute('class', 'cp2-spark-ring')
      fx.appendChild(ring)
      setTimeout(() => ring.remove(), 720)
      setPingIndex(i)
      setTimeout(() => setPingIndex(null), 620)
    },
    [points],
  )

  const go = useCallback(
    (i: number, showMap = false) => {
      setJourney({ state: i, mapShown: showMap })
    },
    [],
  )

  const primary = useCallback(() => {
    setJourney((prev) => {
      if (prev.state === -1) return { state: 0, mapShown: false }
      if (prev.state < JOURNEY_STAGES.length) {
        if (!prev.mapShown) {
          celebrate(prev.state)
          return { state: prev.state, mapShown: true }
        }
        return { state: prev.state + 1, mapShown: false }
      }
      return prev
    })
  }, [celebrate])

  const back = useCallback(() => {
    setJourney((prev) => {
      if (prev.mapShown) return { ...prev, mapShown: false }
      if (prev.state <= 0) return { state: -1, mapShown: false }
      return { state: prev.state - 1, mapShown: true }
    })
  }, [])

  const replay = useCallback(() => {
    setJourney({ state: -1, mapShown: false })
  }, [])

  useEffect(() => {
    const { state } = journey
    if (state === -1) {
      planeAt(0.02)
      setContrail(0.02)
    } else if (state === 4) {
      planeAt(1)
      setContrail(1)
    } else if (state >= 0) {
      planeAt(JOURNEY_FRAC[state])
      setContrail(JOURNEY_FRAC[state])
    }
  }, [journey, planeAt, setContrail])

  return {
    routeRef,
    contrailRef,
    planeRef,
    fxRef,
    points,
    journey,
    pingIndex,
    go,
    primary,
    back,
    replay,
    cohorts: COHORTS,
    stages: JOURNEY_STAGES,
    shortLabels: JOURNEY_SHORT_LABELS,
  }
}
