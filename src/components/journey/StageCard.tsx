import type { JourneyStage } from './constants'

interface StageCardProps {
  stage: JourneyStage
  stageIndex: number
  totalStages: number
  onPrevious: () => void
  onNext: () => void
  canGoPrevious: boolean
  canGoNext: boolean
}

export function StageCard({
  stage,
  stageIndex,
  totalStages,
  onPrevious,
  onNext,
  canGoPrevious,
  canGoNext,
}: StageCardProps) {
  return (
    <article
      className="journey-stage-card card-surface p-5 sm:p-6"
      aria-labelledby={`stage-title-${stage.id}`}
      aria-live="polite"
    >
      <div className="mb-3 flex items-center justify-between gap-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-gs-green">
          Stage {stage.id} · {stage.name}
        </p>
        <p className="text-xs text-gs-text-muted" aria-hidden="true">
          {stageIndex + 1} / {totalStages}
        </p>
      </div>
      <h3
        id={`stage-title-${stage.id}`}
        className="font-display text-lg font-semibold leading-snug text-gs-text-primary sm:text-xl"
      >
        {stage.title}
      </h3>
      <p className="mt-3 text-base leading-relaxed text-gs-text-secondary">{stage.text}</p>

      <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="button"
          onClick={onPrevious}
          disabled={!canGoPrevious}
          className="journey-nav-btn journey-nav-btn--secondary min-h-12 rounded-xl border border-gs-border bg-gs-card px-5 py-2.5 text-sm font-semibold text-gs-text-primary transition-colors hover:bg-gs-sand-light disabled:cursor-not-allowed disabled:opacity-40"
          aria-label="Go to previous stage"
        >
          Previous stage
        </button>
        <button
          type="button"
          onClick={onNext}
          disabled={!canGoNext}
          className="journey-nav-btn journey-nav-btn--primary min-h-12 rounded-xl bg-gs-coral px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
          aria-label={canGoNext ? 'Go to next stage' : 'Final stage reached'}
        >
          {canGoNext ? 'Next stage' : 'Journey complete'}
        </button>
      </div>
    </article>
  )
}
