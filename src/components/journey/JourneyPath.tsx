import type { KeyboardEvent } from 'react'
import { JOURNEY_STAGES, STAGE_PATH_POSITIONS } from './constants'

interface JourneyPathProps {
  activeStage: number
  journeyStarted: boolean
  onStageSelect: (index: number) => void
}

const PATH_D =
  'M 32 520 C 80 480, 60 420, 110 380 C 160 340, 140 280, 200 240 C 260 200, 240 140, 300 100 C 340 75, 360 50, 368 32'

function StageMarker({
  cx,
  cy,
  index,
  stage,
  isActive,
  isPast,
  onSelect,
}: {
  cx: number
  cy: number
  index: number
  stage: (typeof JOURNEY_STAGES)[number]
  isActive: boolean
  isPast: boolean
  onSelect: (index: number) => void
}) {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onSelect(index)
    }
  }

  return (
    <g
      role="button"
      tabIndex={0}
      aria-label={`Stage ${stage.id}: ${stage.name}${isActive ? ' (current)' : ''}`}
      aria-current={isActive ? 'step' : undefined}
      className="cursor-pointer outline-none"
      onClick={() => onSelect(index)}
      onKeyDown={handleKeyDown}
    >
      <circle
        cx={cx}
        cy={cy}
        r={isActive ? 14 : 10}
        className="transition-all duration-500"
        fill={isActive ? 'var(--gs-coral)' : isPast ? 'rgba(46, 125, 50, 0.85)' : 'var(--gs-card)'}
        stroke={isActive || isPast ? 'white' : 'var(--gs-border)'}
        strokeWidth="3"
      />
      <text
        x={cx}
        y={cy - 22}
        textAnchor="middle"
        fill="var(--gs-text-secondary)"
        fontSize="10"
        fontWeight="500"
        opacity={isActive ? 1 : 0.7}
        style={{ fontFamily: 'var(--font-body)', pointerEvents: 'none' }}
      >
        {stage.name}
      </text>
    </g>
  )
}

export function JourneyPath({ activeStage, journeyStarted, onStageSelect }: JourneyPathProps) {
  const marker = STAGE_PATH_POSITIONS[activeStage]
  const mx = marker.x * 400
  const my = marker.y * 560

  return (
    <div className="journey-path-wrap relative w-full">
      <div className="hidden lg:block">
        <svg
          viewBox="0 0 400 560"
          className="h-auto max-h-[420px] w-full"
          role="img"
          aria-label="Digestive health journey path with eight stages"
        >
          <defs>
            <linearGradient id="journey-path-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--gs-green)" stopOpacity="0.35" />
              <stop offset="50%" stopColor="#6B8F9E" stopOpacity="0.4" />
              <stop offset="100%" stopColor="var(--gs-coral)" stopOpacity="0.45" />
            </linearGradient>
            <filter id="journey-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <path
            d={PATH_D}
            fill="none"
            stroke="url(#journey-path-gradient)"
            strokeWidth="6"
            strokeLinecap="round"
            className="journey-path-line"
            opacity={journeyStarted ? 1 : 0.5}
          />

          {JOURNEY_STAGES.map((stage, index) => {
            const pos = STAGE_PATH_POSITIONS[index]
            return (
              <StageMarker
                key={stage.id}
                cx={pos.x * 400}
                cy={pos.y * 560}
                index={index}
                stage={stage}
                isActive={index === activeStage}
                isPast={index < activeStage}
                onSelect={onStageSelect}
              />
            )
          })}

          <g className="journey-patient-marker" filter="url(#journey-glow)" opacity={journeyStarted ? 1 : 0.6}>
            <circle
              cx={mx}
              cy={my}
              r="16"
              fill="var(--gs-coral)"
              stroke="white"
              strokeWidth="3"
              className="transition-all duration-700 ease-out"
            />
            <circle cx={mx} cy={my} r="6" fill="white" opacity="0.9" className="transition-all duration-700 ease-out" />
          </g>
        </svg>
      </div>

      <div
        className="journey-stage-scroll flex gap-2 overflow-x-auto pb-2 lg:hidden"
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
              aria-selected={isActive}
              aria-controls={`stage-panel-${stage.id}`}
              onClick={() => onStageSelect(index)}
              className={`journey-stage-pill shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? 'border-gs-coral bg-gs-coral text-white'
                  : 'border-gs-border bg-gs-card text-gs-text-secondary hover:border-gs-coral/40'
              }`}
            >
              <span className="mr-1.5 text-xs opacity-80">{stage.id}.</span>
              {stage.name}
            </button>
          )
        })}
      </div>
    </div>
  )
}
