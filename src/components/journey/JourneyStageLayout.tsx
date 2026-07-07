import type { ReactNode } from 'react'
import type { JourneyZone } from './constants'
import { JOURNEY_ZONES } from './constants'

interface JourneyStageLayoutProps {
  zone?: JourneyZone
  heading?: string
  children: ReactNode
}

export function JourneyStageLayout({ zone, heading, children }: JourneyStageLayoutProps) {
  const zoneMeta = zone ? JOURNEY_ZONES[zone] : null

  return (
    <div className="journey-stage-layout">
      {zoneMeta && (
        <p className="journey-zone-chip">
          <span className="font-semibold text-gs-coral">{zoneMeta.label}</span>
          <span className="text-gs-text-muted"> — {zoneMeta.description}</span>
        </p>
      )}
      {heading && <h2 className="journey-compact-heading">{heading}</h2>}
      <div className="journey-stage-layout-body">{children}</div>
    </div>
  )
}
