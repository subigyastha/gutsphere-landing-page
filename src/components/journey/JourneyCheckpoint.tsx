import { JourneyNextOverlay } from './JourneyNextOverlay'
import { JourneyNav } from './JourneyNav'
import { JourneyStageBanner } from './JourneyStageBanner'
import type { JourneyStage } from './constants'
import { useJourney } from './JourneyContext'
import { useEffect, useRef, type ReactNode } from 'react'

interface JourneyCheckpointProps {
  stageIndex: number
  stage: JourneyStage
  children: ReactNode
  className?: string
  id?: string
  hideBanner?: boolean
  hideScrollHint?: boolean
  compactBanner?: boolean
}

export function JourneyCheckpoint({
  stageIndex,
  stage,
  children,
  className = '',
  id,
  hideBanner = false,
  hideScrollHint = false,
  compactBanner = true,
}: JourneyCheckpointProps) {
  const ref = useRef<HTMLElement>(null)
  const { registerCheckpoint, activeStage } = useJourney()
  const isActive = activeStage === stageIndex

  useEffect(() => {
    registerCheckpoint(stageIndex, ref.current)
    return () => registerCheckpoint(stageIndex, null)
  }, [stageIndex, registerCheckpoint])

  return (
    <section
      ref={ref}
      id={id ?? `journey-stage-${stage.id}`}
      data-journey-stage={stageIndex}
      {...(stageIndex === 0 ? { 'data-landing-hero': true } : {})}
      className={`journey-checkpoint ${isActive ? 'journey-checkpoint--active' : ''} ${className}`}
      aria-labelledby={hideBanner ? undefined : `stage-heading-${stage.id}`}
    >
      <div className="journey-checkpoint-card relative">
        <div className="journey-checkpoint-body">
          <div className="journey-checkpoint-inner pr-14">
            {!hideBanner && (
              <JourneyStageBanner stage={stage} stageIndex={stageIndex} compact={compactBanner} />
            )}
            <div className="journey-checkpoint-content">{children}</div>
          </div>
        </div>

        <JourneyNav />

        {!hideScrollHint && <JourneyNextOverlay stageIndex={stageIndex} />}
      </div>
    </section>
  )
}
