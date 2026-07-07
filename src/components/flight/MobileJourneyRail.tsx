import { useFlight } from './FlightContext'
import { FLIGHT_ZONES } from './constants'
import { FlightPlaneGraphic } from './FlightPlaneGraphic'

export function MobileJourneyRail() {
  const { activeZoneIndex, isCoarsePointer, planeEnabled, scrollToZone } = useFlight()

  if (planeEnabled) return null

  return (
    <nav className="flight-mobile-rail" aria-label="Journey progress">
      <div className="flight-mobile-rail-inner">
        <div className="flight-mobile-craft" aria-hidden="true">
          <FlightPlaneGraphic size={28} />
        </div>
        <div className="flight-mobile-rail-track">
          {FLIGHT_ZONES.map((zone) => (
            <button
              key={zone.id}
              type="button"
              className={`flight-mobile-rail-dot ${activeZoneIndex === zone.index ? 'is-active' : ''}`}
              onClick={() => scrollToZone(zone.index)}
              aria-label={`${zone.eyebrow}: ${zone.heading}`}
              aria-current={activeZoneIndex === zone.index ? 'step' : undefined}
            />
          ))}
        </div>
        {!isCoarsePointer && (
          <span className="flight-mobile-rail-label">{FLIGHT_ZONES[activeZoneIndex]?.eyebrow}</span>
        )}
      </div>
    </nav>
  )
}
