import { useEffect, useId, useRef, useState } from 'react'
import { JOURNEY_STAGES } from './constants'
import {
  ROUTE_MOBILE_PATH_D,
  ROUTE_MOBILE_VIEWBOX,
  ROUTE_MOBILE_WAYPOINTS,
} from './journeyMapConstants'
import { IconPlane, JourneyStageIcon } from './JourneyMapIcons'
import { useJourney } from './JourneyContext'

export function JourneyRouteMapMobile() {
  const { activeStage, journeyStarted, goToStage } = useJourney()
  const pathRef = useRef<SVGPathElement>(null)
  const [pathLength, setPathLength] = useState(0)
  const uid = useId().replace(/:/g, '')

  const progress =
    JOURNEY_STAGES.length > 1 ? activeStage / (JOURNEY_STAGES.length - 1) : 0
  const dashOffset = pathLength > 0 ? pathLength * (1 - (journeyStarted ? progress : 0)) : 0

  const planePos = ROUTE_MOBILE_WAYPOINTS[activeStage] ?? ROUTE_MOBILE_WAYPOINTS[0]

  useEffect(() => {
    if (pathRef.current) setPathLength(pathRef.current.getTotalLength())
  }, [])

  return (
    <div className="journey-route-mobile px-3 pt-2">
      <p className="mb-1 text-[9px] font-semibold uppercase tracking-widest text-gs-text-muted">
        Takeoff → Landing
      </p>
      <svg
        viewBox={`0 0 ${ROUTE_MOBILE_VIEWBOX.width} ${ROUTE_MOBILE_VIEWBOX.height}`}
        className="journey-route-map journey-route-map--mobile h-12 w-full"
        aria-hidden="true"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id={`${uid}-mobile-progress`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--gs-coral)" />
            <stop offset="100%" stopColor="var(--gs-green)" />
          </linearGradient>
        </defs>
        <path
          d={ROUTE_MOBILE_PATH_D}
          fill="none"
          stroke="var(--gs-border)"
          strokeWidth="4"
          strokeLinecap="round"
          opacity={0.45}
        />
        <path
          ref={pathRef}
          d={ROUTE_MOBILE_PATH_D}
          fill="none"
          stroke={`url(#${uid}-mobile-progress)`}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray={pathLength || undefined}
          strokeDashoffset={dashOffset}
          className="journey-route-progress"
        />
        {ROUTE_MOBILE_WAYPOINTS.map((node, index) => {
          const isActive = index === activeStage
          const isPast = index < activeStage
          const stage = JOURNEY_STAGES[index]
          if (!stage) return null
          return (
            <g key={index}>
              <circle
                cx={node.x}
                cy={node.y}
                r={isActive ? 7 : 5}
                fill={isActive ? 'var(--gs-coral)' : isPast ? 'var(--gs-green)' : 'var(--gs-card)'}
                stroke="var(--gs-border)"
                strokeWidth="1"
              />
              {isActive && (
                <foreignObject x={node.x - 5} y={node.y - 5} width="10" height="10">
                  <div className="flex h-full w-full items-center justify-center text-white">
                    <JourneyStageIcon icon={stage.icon} size={8} />
                  </div>
                </foreignObject>
              )}
            </g>
          )
        })}
        <g transform={`translate(${planePos.x - 9}, ${planePos.y - 14})`}>
          <foreignObject width="14" height="14">
            <IconPlane size={14} />
          </foreignObject>
        </g>
      </svg>

      <div
        className="journey-rail-mobile-scroll mt-1 flex gap-2 overflow-x-auto pb-2"
        role="tablist"
        aria-label="Journey waypoints"
      >
        {JOURNEY_STAGES.map((stage, index) => {
          const isActive = index === activeStage
          return (
            <button
              key={stage.id}
              type="button"
              role="tab"
              onClick={() => goToStage(index)}
              className={`flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-medium transition-colors ${
                isActive
                  ? 'border-gs-coral bg-gs-coral text-white'
                  : 'border-gs-border bg-gs-card text-gs-text-secondary'
              }`}
              aria-current={isActive ? 'step' : undefined}
            >
              <JourneyStageIcon icon={stage.icon} size={10} />
              {stage.name}
            </button>
          )
        })}
      </div>
    </div>
  )
}
