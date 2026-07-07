import type { JourneyStage } from './constants'
import { JourneyStageIcon } from './JourneyMapIcons'
import { useJourney } from './JourneyContext'

interface JourneyStageBannerProps {
  stage: JourneyStage
  stageIndex: number
  compact?: boolean
}

export function JourneyStageBanner({ stage, stageIndex, compact = false }: JourneyStageBannerProps) {
  const { activeStage } = useJourney()
  const isActive = activeStage === stageIndex
  const isPast = stageIndex < activeStage

  return (
    <header
      className={`journey-stage-banner shrink-0 ${
        isActive ? 'journey-stage-banner--active gs-insight-section' : ''
      } ${isPast ? 'journey-stage-banner--past' : ''}`}
    >
      <div className="flex items-start gap-2.5">
        <span
          className={`journey-stage-icon-well ${
            isActive ? 'bg-gs-coral text-white' : isPast ? 'bg-gs-green/10 text-gs-green' : ''
          }`}
          aria-hidden="true"
        >
          <JourneyStageIcon icon={stage.icon} size={14} />
        </span>
        <div className="min-w-0 flex-1">
          <p className="journey-stage-meta">
            {stage.zoneLabel} · {stage.metaphor}
          </p>
          <h2
            id={`stage-heading-${stage.id}`}
            className={`font-display font-semibold text-gs-text-primary ${compact ? 'text-base leading-snug' : 'text-lg leading-snug'}`}
          >
            {stage.title}
          </h2>
          <p className="mt-1 text-xs leading-relaxed text-gs-text-secondary">{stage.outcome}</p>
        </div>
      </div>
      {!compact && <p className="journey-stage-desc line-clamp-2">{stage.text}</p>}
    </header>
  )
}
