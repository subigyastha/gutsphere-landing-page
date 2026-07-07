import { DISCOVERY_STAGES } from './constants'
import { useDiscovery } from './DiscoveryContext'

export function DiscoveryNav() {
  const { activeStage, goToStage } = useDiscovery()

  return (
    <div className="journey-nav">
      <button
        type="button"
        onClick={() => goToStage(activeStage - 1)}
        disabled={activeStage <= 0}
        className="journey-nav-btn journey-nav-btn--back"
        aria-label="Previous section"
      >
        ←
      </button>
      <span className="journey-nav-count">
        {activeStage + 1} / {DISCOVERY_STAGES.length}
      </span>
      <button
        type="button"
        onClick={() => goToStage(activeStage + 1)}
        disabled={activeStage >= DISCOVERY_STAGES.length - 1}
        className="journey-nav-btn journey-nav-btn--next"
        aria-label="Next section"
      >
        →
      </button>
    </div>
  )
}
