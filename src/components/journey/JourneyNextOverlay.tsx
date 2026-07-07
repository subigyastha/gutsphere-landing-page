import { JOURNEY_STAGES } from './constants'
import { useJourney } from './JourneyContext'

interface JourneyNextOverlayProps {
  stageIndex: number
}

export function JourneyNextOverlay({ stageIndex }: JourneyNextOverlayProps) {
  const { activeStage, goToStage } = useJourney()
  const isLast = stageIndex >= JOURNEY_STAGES.length - 1
  const isVisible = activeStage === stageIndex && !isLast

  if (!isVisible) return null

  const nextStage = JOURNEY_STAGES[stageIndex + 1]

  return (
    <div className="journey-next-overlay">
      <button
        type="button"
        className="journey-next-overlay-btn"
        onClick={() => goToStage(stageIndex + 1)}
        aria-label={`Continue to waypoint ${stageIndex + 2}: ${nextStage?.name}`}
      >
        <span className="journey-next-overlay-text">Scroll to next waypoint</span>
        <span className="journey-next-overlay-arrow" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <span className="journey-next-overlay-stage">
          {nextStage?.name} · {nextStage?.metaphor}
        </span>
      </button>
    </div>
  )
}
