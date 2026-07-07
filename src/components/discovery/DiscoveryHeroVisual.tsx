import type { CSSProperties } from 'react'
import { FlightPlaneGraphic } from '../flight/FlightPlaneGraphic'
import { SCATTERED_CLUES } from './constants'

export function DiscoveryHeroVisual() {
  return (
    <div className="discovery-hero-visual" aria-hidden="true">
      <div className="discovery-hero-sky">
        <div className="discovery-cloud discovery-cloud--1" />
        <div className="discovery-cloud discovery-cloud--2" />
        <div className="discovery-cloud discovery-cloud--3" />
        <svg className="discovery-hero-route" viewBox="0 0 240 160">
          <path
            d="M20 130 Q 80 100, 120 70 T 220 30"
            fill="none"
            stroke="var(--gs-coral)"
            strokeWidth="2"
            strokeDasharray="5 7"
            opacity="0.5"
          />
          <circle cx="20" cy="130" r="5" fill="var(--gs-coral)" opacity="0.35" />
          <circle cx="220" cy="30" r="7" fill="var(--gs-coral)" opacity="0.8" />
        </svg>
        <div className="discovery-hero-craft">
          <FlightPlaneGraphic size={36} />
        </div>
        <div className="discovery-scattered-clues">
          {SCATTERED_CLUES.slice(0, 6).map((clue, i) => (
            <span
              key={clue}
              className="discovery-clue-chip"
              style={{ '--clue-i': i } as CSSProperties}
            >
              {clue}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
