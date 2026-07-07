import { DiscoveryNextOverlay } from './DiscoveryNextOverlay'
import { DiscoveryNav } from './DiscoveryNav'
import { DiscoveryStageBanner } from './DiscoveryStageBanner'
import type { DiscoveryStage } from './constants'
import { useDiscovery } from './DiscoveryContext'
import { useEffect, useRef, type ReactNode } from 'react'

interface DiscoveryCheckpointProps {
  stageIndex: number
  stage: DiscoveryStage
  children: ReactNode
  className?: string
  id?: string
  hideBanner?: boolean
  hideScrollHint?: boolean
  compactBanner?: boolean
}

export function DiscoveryCheckpoint({
  stageIndex,
  stage,
  children,
  className = '',
  id,
  hideBanner = false,
  hideScrollHint = false,
  compactBanner = true,
}: DiscoveryCheckpointProps) {
  const ref = useRef<HTMLElement>(null)
  const { registerCheckpoint, activeStage } = useDiscovery()
  const isActive = activeStage === stageIndex

  useEffect(() => {
    registerCheckpoint(stageIndex, ref.current)
    return () => registerCheckpoint(stageIndex, null)
  }, [stageIndex, registerCheckpoint])

  return (
    <section
      ref={ref}
      id={id ?? `discovery-stage-${stage.id}`}
      data-discovery-stage={stageIndex}
      {...(stageIndex === 0 ? { 'data-landing-hero': true } : {})}
      className={`journey-checkpoint ${isActive ? 'journey-checkpoint--active' : ''} ${className}`}
      aria-labelledby={hideBanner ? undefined : `discovery-heading-${stage.id}`}
    >
      <div className="journey-checkpoint-card relative">
        <div className="journey-checkpoint-body">
          <div className="journey-checkpoint-inner pr-14">
            {!hideBanner && (
              <DiscoveryStageBanner stage={stage} stageIndex={stageIndex} compact={compactBanner} />
            )}
            <div className="journey-checkpoint-content">{children}</div>
          </div>
        </div>

        <DiscoveryNav />

        {!hideScrollHint && <DiscoveryNextOverlay stageIndex={stageIndex} />}
      </div>
    </section>
  )
}
