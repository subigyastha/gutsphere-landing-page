import { Button } from '../Button'
import { useEffect, useRef } from 'react'
import { SIGNUP_URL } from '../../constants'
import {
  FLIGHT_EXPLORE_AGAIN_CTA,
  FLIGHT_PRIMARY_CTA,
  FLIGHT_SECONDARY_CTA,
} from './constants'
import { useFlight } from './FlightContext'
import { ZoneVisual } from './ZoneVisual'

export function FlightHero() {
  const { scrollToZone, setHoveringInteractive, registerZone, zoneProximity } = useFlight()
  const sectionRef = useRef<HTMLElement>(null)
  const proximity = zoneProximity.boarding ?? 0

  useEffect(() => {
    registerZone('boarding', 0, sectionRef.current)
    return () => registerZone('boarding', 0, null)
  }, [registerZone])

  return (
    <header ref={sectionRef} id="flight-zone-boarding" data-zone-index={0} data-landing-hero className="flight-hero">
      <div className="container-narrow flight-hero-inner flight-hero-grid">
        <div>
          <p className="flight-hero-badge">Welcome aboard</p>
          <h1 className="flight-hero-title">
            Your digestive health copilot — before diagnosis, between visits, and beyond treatment.
          </h1>
          <p className="flight-hero-subtitle">
            Digestive symptoms are hard to navigate when every day brings different clues. GutSphere
            helps you organize symptoms, stool changes, food reactions, flare-ups, treatment updates,
            test results, and doctor-visit questions into one guided digestive-health journey.
          </p>
          <div className="flight-hero-ctas">
            <Button
              href={SIGNUP_URL}
              data-cta="primary"
              onMouseEnter={() => setHoveringInteractive(true)}
              onMouseLeave={() => setHoveringInteractive(false)}
              onFocus={() => setHoveringInteractive(true)}
              onBlur={() => setHoveringInteractive(false)}
            >
              {FLIGHT_PRIMARY_CTA}
            </Button>
            <Button
              variant="secondary"
              onClick={() => scrollToZone(1)}
              onMouseEnter={() => setHoveringInteractive(true)}
              onMouseLeave={() => setHoveringInteractive(false)}
              onFocus={() => setHoveringInteractive(true)}
              onBlur={() => setHoveringInteractive(false)}
            >
              {FLIGHT_SECONDARY_CTA}
            </Button>
          </div>
          <p className="flight-hero-hint">
            GutSphere does not diagnose, treat, or replace your doctor. It helps you organize your
            journey, understand patterns, and prepare for better care conversations.
          </p>
        </div>
        <div className="flight-hero-visual-wrap">
          <ZoneVisual theme="boarding" proximity={proximity} />
        </div>
      </div>
    </header>
  )
}

export function FlightFinalCTA() {
  const { scrollToZone, setHoveringInteractive, zoneProximity, registerZone } = useFlight()
  const proximity = zoneProximity['clarity-point'] ?? 0

  useEffect(() => {
    const el = document.getElementById('flight-zone-clarity-point')
    registerZone('clarity-point', 10, el)
    return () => registerZone('clarity-point', 10, null)
  }, [registerZone])

  return (
    <div className="flight-final-cta">
      <div className="container-narrow flight-final-cta-grid">
        <div className="flight-final-cta-inner">
        <h2 id="flight-final-cta-heading" className="flight-final-cta-title">Ready for your first gut check-in?</h2>
        <p className="flight-final-cta-sub">
          Start with one simple check-in and begin building a clearer digestive-health journey —
          before diagnosis, between visits, and beyond treatment.
        </p>
        <div className="flight-final-cta-actions">
          <Button
            href={SIGNUP_URL}
            className="!bg-white !text-gs-coral hover:!opacity-90"
            data-cta="primary"
            onMouseEnter={() => setHoveringInteractive(true)}
            onMouseLeave={() => setHoveringInteractive(false)}
            onFocus={() => setHoveringInteractive(true)}
            onBlur={() => setHoveringInteractive(false)}
          >
            {FLIGHT_PRIMARY_CTA}
          </Button>
          <Button
            variant="ghost"
            className="!text-white hover:!bg-white/10"
            onClick={() => {
              scrollToZone(0)
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            onMouseEnter={() => setHoveringInteractive(true)}
            onMouseLeave={() => setHoveringInteractive(false)}
            onFocus={() => setHoveringInteractive(true)}
            onBlur={() => setHoveringInteractive(false)}
          >
            {FLIGHT_EXPLORE_AGAIN_CTA}
          </Button>
        </div>
        <p className="flight-final-cta-note">
          GutSphere helps you organize and understand your digestive-health journey. It does not
          diagnose, treat, or replace clinical care.
        </p>
        </div>
        <div className="flight-final-visual-wrap" aria-hidden="true">
          <ZoneVisual theme="clarity" proximity={proximity} />
        </div>
      </div>
    </div>
  )
}
