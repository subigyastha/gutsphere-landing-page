import { Button } from '../Button'
import { SIGNUP_URL } from '../../constants'
import { HERO_VALUE_CHIPS } from './constants'
import { DiscoveryHeroVisual } from './DiscoveryHeroVisual'
import { useDiscovery } from './DiscoveryContext'

export function DiscoveryHero() {
  const { goToStage } = useDiscovery()

  return (
    <div className="discovery-hero-layout">
      <div className="discovery-hero-copy">
        <p className="journey-hero-eyebrow">For the questions that come before answers</p>
        <h1 id="discovery-hero-heading" className="journey-hero-title">
          Your copilot for digestive discovery.
        </h1>
        <p className="journey-hero-sub">
          GutSphere guides your journey before diagnosis, between visits, and beyond treatment —
          helping you organize symptoms, stool changes, food reactions, flare-ups, treatment updates,
          test results, and care questions into one clearer path.
        </p>
        <ul className="discovery-value-chips" role="list">
          {HERO_VALUE_CHIPS.map((chip) => (
            <li key={chip} className="discovery-value-chip">
              {chip}
            </li>
          ))}
        </ul>
        <div className="journey-hero-actions">
          <Button href={SIGNUP_URL} className="w-full sm:w-auto" data-cta="primary">
            Start Your Gut Check-In
          </Button>
          <Button variant="ghost" onClick={() => goToStage(1)} className="w-full sm:w-auto">
            See how it works
          </Button>
        </div>
        <p className="journey-hero-trust">
          Built to support your care journey — not replace clinical care.
        </p>
      </div>
      <div className="discovery-hero-visual-wrap">
        <DiscoveryHeroVisual />
      </div>
    </div>
  )
}
