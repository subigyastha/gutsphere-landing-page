import { JOURNEY_STAGES } from './constants'
import { useJourney } from './JourneyContext'

interface JourneyScrollHintProps {
  stageIndex: number
}

export function JourneyScrollHint({ stageIndex }: JourneyScrollHintProps) {
  const { activeStage, goToStage } = useJourney()
  const isLast = stageIndex >= JOURNEY_STAGES.length - 1
  const isVisible = activeStage === stageIndex && !isLast

  if (!isVisible) return null

  const nextStage = JOURNEY_STAGES[stageIndex + 1]

  return (
    <button
      type="button"
      className="journey-scroll-hint"
      onClick={() => goToStage(stageIndex + 1)}
      aria-label={`Continue to stage ${stageIndex + 2}: ${nextStage?.name}`}
    >
      <span className="journey-scroll-hint-label">Scroll for next stage</span>
      <span className="journey-scroll-hint-arrow" aria-hidden="true">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </button>
  )
}
