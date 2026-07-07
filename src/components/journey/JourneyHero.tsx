import { Button } from '../Button'
import { SIGNUP_URL } from '../../constants'
import { COPILOT_ROUTE } from './constants'
import { JourneyRouteMap } from './JourneyRouteMap'
import { useJourney } from './JourneyContext'

export function JourneyHeroIntro() {
  const { journeyStarted, startJourney, activeStage, goToStage } = useJourney()

  return (
    <div className="journey-hero-layout">
      <div className="journey-hero-copy">
        <p className="journey-hero-eyebrow">Welcome aboard.</p>
        <h1 id="journey-hero-heading" className="journey-hero-title">
          Your digestive health copilot — before diagnosis, between visits, and beyond treatment.
        </h1>
        <p className="journey-hero-sub">
          Digestive symptoms are hard to navigate when every day brings different clues. GutSphere
          helps you organize symptoms, stool changes, food reactions, flare-ups, treatment updates,
          test results, and doctor-visit questions into one guided digestive-health journey.
        </p>
        <div className="journey-hero-actions">
          <Button href={SIGNUP_URL} className="w-full sm:w-auto" data-cta="primary">
            Start Your Gut Check-In
          </Button>
          <Button variant="secondary" onClick={() => goToStage(1)} className="w-full sm:w-auto">
            Explore the Journey
          </Button>
        </div>
        <p className="journey-hero-trust">
          GutSphere does not diagnose, treat, or replace your doctor. It helps you organize your
          journey, understand patterns, and prepare for better care conversations.
        </p>
        <p className="journey-hero-hint">
          {journeyStarted
            ? 'Scroll to the next waypoint — one stage per screen.'
            : 'Tap Begin takeoff or scroll — each screen is one stage of the journey.'}
        </p>
        {!journeyStarted && (
          <Button onClick={startJourney} variant="ghost" className="mt-2 w-full sm:w-auto">
            Begin takeoff
          </Button>
        )}
      </div>

      <div className="journey-hero-map-panel">
        <JourneyRouteMap variant="hero" className="journey-hero-map-svg" />
        <p className="journey-hero-map-caption">
          <span className="font-medium text-gs-coral">Waypoint {activeStage + 1}</span>
          <span className="text-gs-text-muted"> · {COPILOT_ROUTE}</span>
        </p>
      </div>
    </div>
  )
}
