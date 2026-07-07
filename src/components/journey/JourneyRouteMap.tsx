import { useEffect, useId, useRef, useState, type KeyboardEvent } from 'react'
import { JOURNEY_STAGES } from './constants'
import {
  ROUTE_DECOR_CLOUDS,
  ROUTE_MAP_VIEWBOX,
  ROUTE_PATH_D,
  ROUTE_WAYPOINTS,
} from './journeyMapConstants'
import { IconCloud, IconPlane, JourneyStageIcon } from './JourneyMapIcons'
import { useJourney } from './JourneyContext'

interface JourneyRouteMapProps {
  variant?: 'rail' | 'hero'
  className?: string
}

function WaypointNode({
  x,
  y,
  index,
  isActive,
  isPast,
  onSelect,
  compact,
}: {
  x: number
  y: number
  index: number
  isActive: boolean
  isPast: boolean
  onSelect: (index: number) => void
  compact: boolean
}) {
  const stage = JOURNEY_STAGES[index]
  if (!stage) return null

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onSelect(index)
    }
  }

  const r = compact ? 9 : 11
  const iconSize = compact ? 10 : 12

  return (
    <g
      role="button"
      tabIndex={0}
      className="journey-route-node outline-none"
      aria-label={`Waypoint ${index + 1}: ${stage.name} — ${stage.metaphor}${isActive ? ' (you are here)' : ''}`}
      aria-current={isActive ? 'step' : undefined}
      onClick={() => onSelect(index)}
      onKeyDown={handleKeyDown}
    >
      {isActive && (
        <circle
          cx={x}
          cy={y}
          r={r + 4}
          className="journey-route-node-pulse"
          fill="var(--gs-coral-glow)"
        />
      )}
      <circle
        cx={x}
        cy={y}
        r={r}
        fill={isActive ? 'var(--gs-coral)' : isPast ? 'var(--gs-green)' : 'var(--gs-card)'}
        stroke={isActive || isPast ? 'var(--gs-card)' : 'var(--gs-border)'}
        strokeWidth={1.5}
      />
      <foreignObject x={x - iconSize / 2} y={y - iconSize / 2} width={iconSize} height={iconSize}>
        <div
          className={`flex h-full w-full items-center justify-center ${
            isActive ? 'text-white' : isPast ? 'text-white' : 'text-gs-text-muted'
          }`}
        >
          <JourneyStageIcon icon={stage.icon} size={iconSize} />
        </div>
      </foreignObject>
    </g>
  )
}

export function JourneyRouteMap({ variant = 'rail', className = '' }: JourneyRouteMapProps) {
  const { activeStage, journeyStarted, goToStage } = useJourney()
  const pathRef = useRef<SVGPathElement>(null)
  const [pathLength, setPathLength] = useState(0)
  const uid = useId().replace(/:/g, '')

  const progress =
    JOURNEY_STAGES.length > 1 ? activeStage / (JOURNEY_STAGES.length - 1) : 0
  const dashOffset = pathLength > 0 ? pathLength * (1 - (journeyStarted ? progress : 0)) : 0

  const planePos = ROUTE_WAYPOINTS[activeStage] ?? ROUTE_WAYPOINTS[0]
  const compact = variant === 'rail'

  useEffect(() => {
    if (pathRef.current) setPathLength(pathRef.current.getTotalLength())
  }, [])

  const vb = `0 0 ${ROUTE_MAP_VIEWBOX.width} ${ROUTE_MAP_VIEWBOX.height}`

  return (
    <svg
      viewBox={vb}
      className={`journey-route-map journey-route-map--${variant} ${className}`}
      role="img"
      aria-label="Flight route map. Start at top, progress downward through each waypoint."
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id={`${uid}-route-progress`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="var(--gs-coral)" stopOpacity="0.95" />
          <stop offset="100%" stopColor="var(--gs-green)" stopOpacity="0.85" />
        </linearGradient>
      </defs>

      <text
        x={ROUTE_MAP_VIEWBOX.width / 2}
        y={14}
        textAnchor="middle"
        fill="var(--gs-text-muted)"
        style={{ fontFamily: 'var(--font-body)', fontSize: 7, fontWeight: 600, letterSpacing: '0.1em' }}
      >
        TAKEOFF
      </text>

      {ROUTE_DECOR_CLOUDS.map((cloud, i) => (
        <g key={i} transform={`translate(${cloud.x}, ${cloud.y}) scale(${cloud.scale})`} opacity={0.55}>
          <foreignObject width="28" height="16" aria-hidden="true">
            <IconCloud size={28} className="text-gs-text-muted" />
          </foreignObject>
        </g>
      ))}

      <path
        d={ROUTE_PATH_D}
        fill="none"
        stroke="var(--gs-border)"
        strokeWidth={compact ? 4 : 5}
        strokeLinecap="round"
        opacity={0.5}
      />

      <path
        ref={pathRef}
        d={ROUTE_PATH_D}
        fill="none"
        stroke={`url(#${uid}-route-progress)`}
        strokeWidth={compact ? 3 : 4}
        strokeLinecap="round"
        strokeDasharray={pathLength || undefined}
        strokeDashoffset={dashOffset}
        className="journey-route-progress"
      />

      {JOURNEY_STAGES.map((stage, index) => {
        const node = ROUTE_WAYPOINTS[index]
        if (!node) return null
        return (
          <WaypointNode
            key={stage.id}
            x={node.x}
            y={node.y}
            index={index}
            isActive={index === activeStage}
            isPast={index < activeStage}
            onSelect={goToStage}
            compact={compact}
          />
        )
      })}

      <g
        className="journey-route-plane"
        transform={`translate(${planePos.x + 14}, ${planePos.y - 8})`}
        opacity={journeyStarted ? 1 : 0.65}
      >
        <foreignObject width="18" height="18" aria-hidden="true">
          <IconPlane size={18} className="journey-route-plane-icon" />
        </foreignObject>
      </g>

      <text
        x={ROUTE_MAP_VIEWBOX.width / 2}
        y={392}
        textAnchor="middle"
        fill="var(--gs-text-muted)"
        style={{ fontFamily: 'var(--font-body)', fontSize: 7, fontWeight: 600, letterSpacing: '0.1em' }}
      >
        LANDING
      </text>
    </svg>
  )
}
