import { Button } from '../Button'
import { SIGNUP_URL } from '../../constants'
import { SCROLL_GUT_HERO } from './constants'

export function ScrollGutHero() {
  return (
    <section className="scroll-gut-hero" aria-labelledby="scroll-gut-hero-title" data-landing-hero>
      <div className="scroll-gut-hero-copy">
        <p className="scroll-gut-eyebrow">
          <span aria-hidden="true">✦</span>
          {SCROLL_GUT_HERO.eyebrow}
        </p>
        <h1 id="scroll-gut-hero-title" className="scroll-gut-hero-title">
          {SCROLL_GUT_HERO.title}
        </h1>
        <p className="scroll-gut-hero-text">{SCROLL_GUT_HERO.text}</p>
        <p className="scroll-gut-hero-safety">{SCROLL_GUT_HERO.safety}</p>
        <div className="scroll-gut-hero-actions" aria-label="Primary actions">
          <Button href={SIGNUP_URL} data-cta="primary">
            Start Your Gut Check-In
          </Button>
          <Button href="#scroll-gut-journey" variant="secondary">
            Explore the Journey
          </Button>
        </div>
      </div>

      <aside className="scroll-gut-hero-panel" aria-label="GutSphere snapshot">
        <div className="scroll-gut-orb scroll-gut-orb--one" />
        <div className="scroll-gut-orb scroll-gut-orb--two" />
        <p className="scroll-gut-panel-label">{SCROLL_GUT_HERO.panelLabel}</p>
        <strong>{SCROLL_GUT_HERO.panelStat}</strong>
        <span>{SCROLL_GUT_HERO.panelHint}</span>
        <ul className="scroll-gut-hero-moments" role="list">
          {SCROLL_GUT_HERO.moments.map((moment) => (
            <li key={moment.title}>
              <strong>{moment.title}</strong>
              <span>{moment.detail}</span>
            </li>
          ))}
        </ul>
        <div className="scroll-gut-panel-meter" aria-hidden="true">
          <span />
        </div>
      </aside>
    </section>
  )
}
