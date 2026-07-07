import { useEffect, useId, useRef, useState } from 'react'
import { JOURNEY_STAGES } from './constants'
import { GUT_MAP_NODES_MOBILE, GUT_PATH_MOBILE_D } from './gutMapConstants'
import { useJourney } from './JourneyContext'

export function JourneyGutMapMobile() {
  const { activeStage, journeyStarted, goToStage } = useJourney()
  const pathRef = useRef<SVGPathElement>(null)
  const [pathLength, setPathLength] = useState(0)
  const uid = useId().replace(/:/g, '')

  const progress =
    JOURNEY_STAGES.length > 1 ? activeStage / (JOURNEY_STAGES.length - 1) : 0
  const dashOffset = pathLength > 0 ? pathLength * (1 - (journeyStarted ? progress : 0)) : 0

  useEffect(() => {
    if (pathRef.current) setPathLength(pathRef.current.getTotalLength())
  }, [])

  return (
    <div className="journey-gut-mobile px-3 pt-2">
      <p className="mb-1 text-[9px] font-semibold uppercase tracking-widest text-gs-text-muted">Start →</p>
      <svg
        viewBox="0 0 360 40"
        className="journey-gut-map journey-gut-map--mobile h-10 w-full"
        aria-hidden="true"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id={`${uid}-mobile-progress`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--gs-green)" />
            <stop offset="100%" stopColor="var(--gs-coral)" />
          </linearGradient>
        </defs>
        <path
          d={GUT_PATH_MOBILE_D}
          fill="none"
          stroke="var(--gs-border)"
          strokeWidth="6"
          strokeLinecap="round"
          opacity={0.4}
        />
        <path
          d={GUT_PATH_MOBILE_D}
          fill="none"
          stroke="var(--gs-border)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          ref={pathRef}
          d={GUT_PATH_MOBILE_D}
          fill="none"
          stroke={`url(#${uid}-mobile-progress)`}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray={pathLength || undefined}
          strokeDashoffset={dashOffset}
          className="journey-gut-progress"
        />
        {GUT_MAP_NODES_MOBILE.map((node, index) => {
          const isActive = index === activeStage
          const isPast = index < activeStage
          return (
            <circle
              key={index}
              cx={node.x}
              cy={node.y}
              r={isActive ? 4 : 2.5}
              fill={isActive ? 'var(--gs-coral)' : isPast ? 'var(--gs-green)' : 'var(--gs-card)'}
              stroke="var(--gs-border)"
              strokeWidth="1"
            />
          )
        })}
      </svg>

      <div
        className="journey-rail-mobile-scroll mt-1 flex gap-2 overflow-x-auto pb-2"
        role="tablist"
        aria-label="Journey stages"
      >
        {JOURNEY_STAGES.map((stage, index) => {
          const isActive = index === activeStage
          return (
            <button
              key={stage.id}
              type="button"
              role="tab"
              onClick={() => goToStage(index)}
              className={`shrink-0 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                isActive
                  ? 'border-gs-coral bg-gs-coral text-white'
                  : 'border-gs-border bg-gs-card text-gs-text-secondary'
              }`}
              aria-current={isActive ? 'step' : undefined}
            >
              {stage.id}. {stage.name}
            </button>
          )
        })}
      </div>
    </div>
  )
}
