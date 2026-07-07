import { useEffect, useRef } from 'react'
import type { ReactNode } from 'react'
import type { FlightZone } from './constants'
import { useFlight } from './FlightContext'
import { ObstacleField } from './ObstacleField'
import { ZoneVisual } from './ZoneVisual'

interface FlightZoneSectionProps {
  zone: FlightZone
  children?: ReactNode
}

export function FlightZoneSection({ zone, children }: FlightZoneSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const { registerZone, zoneProximity, planeEnabled } = useFlight()
  const proximity = zoneProximity[zone.id] ?? 0
  const isActive = proximity > 0.15

  useEffect(() => {
    registerZone(zone.id, zone.index, sectionRef.current)
    return () => registerZone(zone.id, zone.index, null)
  }, [zone.id, zone.index, registerZone])

  return (
    <section
      ref={sectionRef}
      id={`flight-zone-${zone.id}`}
      data-zone-index={zone.index}
      className={`flight-zone flight-zone--${zone.theme} ${isActive ? 'flight-zone--active' : ''}`}
      aria-labelledby={`flight-heading-${zone.id}`}
    >
      <div className="flight-zone-inner container-narrow">
        <div className="flight-zone-content">
          <p className="flight-zone-eyebrow">{zone.eyebrow}</p>
          <h2 id={`flight-heading-${zone.id}`} className="flight-zone-heading">
            {zone.heading}
          </h2>
          <p className="flight-zone-supporting">{zone.supporting}</p>
          {children}
        </div>

        <div className="flight-zone-visual">
          {zone.obstacles.length > 0 ? (
            <ObstacleField zoneId={zone.id} obstacles={zone.obstacles} theme={zone.theme} />
          ) : (
            <ZoneVisual theme={zone.theme} proximity={proximity} />
          )}
        </div>
      </div>

      {!planeEnabled && (
        <div className="flight-mobile-marker" aria-hidden="true">
          <span className="flight-mobile-marker-dot" />
        </div>
      )}
    </section>
  )
}
