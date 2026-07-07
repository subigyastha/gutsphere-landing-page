import { FlightProvider } from '../components/flight/FlightContext'
import { CursorPlane } from '../components/flight/CursorPlane'
import { FlightHUD } from '../components/flight/FlightHUD'
import { FlightRoutePath } from '../components/flight/FlightRoutePath'
import { FlightZoneSection } from '../components/flight/FlightZoneSection'
import { FlightHero, FlightFinalCTA } from '../components/flight/FlightHero'
import { MobileJourneyRail } from '../components/flight/MobileJourneyRail'
import { FLIGHT_ZONES } from '../components/flight/constants'

export function FlightLanding() {
  return (
    <FlightProvider>
      <div className="flight-landing">
        <a href="#flight-zone-symptom-turbulence" className="flight-skip-link">
          Skip the flight
        </a>

        <CursorPlane />
        <FlightHUD />
        <MobileJourneyRail />
        <FlightRoutePath />

        <FlightHero />

        {FLIGHT_ZONES.slice(1, -1).map((zone) => (
          <FlightZoneSection key={zone.id} zone={zone} />
        ))}

        <section
          id="flight-zone-clarity-point"
          data-zone-index={10}
          className="flight-zone flight-zone--clarity flight-zone--final"
          aria-labelledby="flight-final-cta-heading"
        >
          <FlightFinalCTA />
        </section>
      </div>
    </FlightProvider>
  )
}
