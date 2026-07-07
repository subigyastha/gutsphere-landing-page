import { JOURNEY_STAGES } from './constants'
import { useJourney } from './JourneyContext'

export function JourneyNav() {
  const { activeStage, goToStage } = useJourney()

  return (
    <div className="journey-nav">
      <button
        type="button"
        onClick={() => goToStage(activeStage - 1)}
        disabled={activeStage <= 0}
        className="journey-nav-btn journey-nav-btn--back"
        aria-label="Previous waypoint"
      >
        ←
      </button>
      <span className="journey-nav-count">
        {activeStage + 1} / {JOURNEY_STAGES.length}
      </span>
      <button
        type="button"
        onClick={() => goToStage(activeStage + 1)}
        disabled={activeStage >= JOURNEY_STAGES.length - 1}
        className="journey-nav-btn journey-nav-btn--next"
        aria-label={`Next waypoint`}
      >
        →
      </button>
    </div>
  )
}
