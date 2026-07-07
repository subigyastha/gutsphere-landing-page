import { useEffect, useId, useRef, useState, type KeyboardEvent } from 'react'
import { JOURNEY_STAGES } from './constants'
import {
  GUT_MAP_FLIP,
  GUT_MAP_NODES,
  GUT_MAP_VIEWBOX,
  GUT_PATH_D,
} from './gutMapConstants'
import { useJourney } from './JourneyContext'

interface JourneyGutMapProps {
  variant?: 'rail' | 'mini' | 'hero'
  className?: string
}

function GutNode({
  cx,
  cy,
  index,
  stageName,
  isActive,
  isPast,
  onSelect,
  size,
}: {
  cx: number
  cy: number
  index: number
  stageName: string
  isActive: boolean
  isPast: boolean
  onSelect: (index: number) => void
  size: 'sm' | 'md' | 'lg'
}) {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onSelect(index)
    }
  }

  const r = size === 'sm' ? (isActive ? 4 : 3) : size === 'lg' ? (isActive ? 8 : 5.5) : isActive ? 6 : 4.5

  return (
    <g
      role="button"
      tabIndex={0}
      className="journey-gut-node outline-none"
      aria-label={`Stage ${index + 1}: ${stageName}${isActive ? ' (current)' : ''}`}
      aria-current={isActive ? 'step' : undefined}
      onClick={() => onSelect(index)}
      onKeyDown={handleKeyDown}
    >
      {isActive && (
        <circle cx={cx} cy={cy} r={r + 5} className="journey-gut-node-pulse" fill="var(--gs-coral-glow)" />
      )}
      <circle
        cx={cx}
        cy={cy}
        r={r}
        fill={isActive ? 'var(--gs-coral)' : isPast ? 'var(--gs-green)' : 'var(--gs-card-elevated)'}
        stroke={isActive || isPast ? 'var(--gs-card)' : 'var(--gs-border)'}
        strokeWidth={size === 'sm' ? 1.5 : 2}
      />
    </g>
  )
}

export function JourneyGutMap({ variant = 'rail', className = '' }: JourneyGutMapProps) {
  const { activeStage, journeyStarted, goToStage } = useJourney()
  const pathRef = useRef<SVGPathElement>(null)
  const [pathLength, setPathLength] = useState(0)
  const uid = useId().replace(/:/g, '')

  const progress =
    JOURNEY_STAGES.length > 1 ? activeStage / (JOURNEY_STAGES.length - 1) : 0
  const dashOffset = pathLength > 0 ? pathLength * (1 - (journeyStarted ? progress : 0)) : 0

  const traveler = GUT_MAP_NODES[activeStage] ?? GUT_MAP_NODES[0]
  const nodeSize = variant === 'mini' ? 'sm' : variant === 'hero' ? 'lg' : 'md'

  useEffect(() => {
    if (pathRef.current) setPathLength(pathRef.current.getTotalLength())
  }, [])

  const vb = `0 0 ${GUT_MAP_VIEWBOX.width} ${GUT_MAP_VIEWBOX.height}`

  return (
    <svg
      viewBox={vb}
      className={`journey-gut-map journey-gut-map--${variant} ${className}`}
      role="img"
      aria-label="Gut-shaped journey map. Start at top, progress downward through each stage."
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id={`${uid}-gut-progress`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="var(--gs-coral)" stopOpacity="0.9" />
          <stop offset="50%" stopColor="var(--gs-coral)" stopOpacity="0.55" />
          <stop offset="100%" stopColor="var(--gs-green)" stopOpacity="0.85" />
        </linearGradient>
        <filter id={`${uid}-gut-glow`} x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <text
        x={GUT_MAP_VIEWBOX.width / 2}
        y={12}
        textAnchor="middle"
        fill="var(--gs-text-muted)"
        style={{ fontFamily: 'var(--font-body)', fontSize: 7, fontWeight: 600, letterSpacing: '0.08em' }}
      >
        START
      </text>

      <g transform={GUT_MAP_FLIP}>
        <path
          d={GUT_PATH_D}
          fill="none"
          stroke="var(--gs-border)"
          strokeWidth={variant === 'mini' ? 12 : 16}
          strokeLinecap="round"
          opacity={0.45}
        />

        <path
          d={GUT_PATH_D}
          fill="none"
          stroke="var(--gs-sand-light)"
          strokeWidth={variant === 'mini' ? 3 : 5}
          strokeLinecap="round"
        />

        <path
          ref={pathRef}
          d={GUT_PATH_D}
          fill="none"
          stroke={`url(#${uid}-gut-progress)`}
          strokeWidth={variant === 'mini' ? 3 : 5}
          strokeLinecap="round"
          strokeDasharray={pathLength || undefined}
          strokeDashoffset={dashOffset}
          className="journey-gut-progress"
        />

        {JOURNEY_STAGES.map((stage, index) => {
          const node = GUT_MAP_NODES[index]
          if (!node) return null
          return (
            <GutNode
              key={stage.id}
              cx={node.x}
              cy={node.y}
              index={index}
              stageName={stage.name}
              isActive={index === activeStage}
              isPast={index < activeStage}
              onSelect={goToStage}
              size={nodeSize}
            />
          )
        })}

        <g filter={variant === 'mini' ? undefined : `url(#${uid}-gut-glow)`} opacity={journeyStarted ? 1 : 0.5}>
          <circle
            cx={traveler.x}
            cy={traveler.y}
            r={variant === 'mini' ? 4 : 6}
            fill="var(--gs-coral)"
            stroke="var(--gs-card)"
            strokeWidth={2}
            className="journey-gut-traveler-dot"
          />
        </g>
      </g>
    </svg>
  )
}
