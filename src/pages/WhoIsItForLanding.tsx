import { Link } from 'react-router-dom'
import { CopilotNav, CopilotFooter } from '../components/copilot-v2/CopilotChrome'
import { useReveal } from '../components/copilot-v2/useReveal'
import { StickyCTA } from '../components/copilot-v2/StickyCTA'
import {
  WHO_FOR_ALSO,
  WHO_FOR_AUDIENCES,
  WHO_FOR_HERO,
  WHO_FOR_NOT,
} from '../components/who-for/whoForAudiences'
import { NAVIGATOR_COUNT, SIGNUP_URL } from '../constants'
import '../styles/copilot-v2.css'
import '../styles/who-for.css'

function StageIcon({ id }: { id: string }) {
  switch (id) {
    case 'finding-answers':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <circle cx="11" cy="11" r="7" />
          <path d="M16 16l4 4" strokeLinecap="round" />
        </svg>
      )
    case 'in-treatment':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M12 3l7 3v5c0 4.6-3 7-7 9-4-2-7-4.4-7-9V6z" strokeLinejoin="round" />
          <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'living-with-it':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M4 14c2-4 6-6 8-6s6 2 8 6" strokeLinecap="round" />
          <path d="M12 8V4M8 6l-2-2M16 6l2-2" strokeLinecap="round" />
        </svg>
      )
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M12 3v3M12 18v3M4.2 7.2l2.1 2.1M17.7 14.7l2.1 2.1M3 12h3M18 12h3M4.2 16.8l2.1-2.1M17.7 9.3l2.1-2.1" strokeLinecap="round" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      )
  }
}

export function WhoIsItForLanding() {
  useReveal()

  return (
    <div className="copilot-v2 who-for" id="top">
      <CopilotNav />
      <main>
        <section className="wf-hero">
          <div className="cp2-wrap">
            <p className="cp2-eyebrow cp2-reveal">{WHO_FOR_HERO.eyebrow}</p>
            <h1 className="wf-hero-title cp2-reveal">{WHO_FOR_HERO.title}</h1>
            <p className="wf-hero-lead cp2-reveal">{WHO_FOR_HERO.lead}</p>
            <p className="wf-hero-trust cp2-reveal">Trusted by {NAVIGATOR_COUNT} navigators</p>
            <div className="wf-hero-actions cp2-reveal">
              <a href="/#start" className="cp2-btn">
                Start free
              </a>
              <Link to="/" className="cp2-btn ghost">
                See the full story
              </Link>
            </div>
          </div>
        </section>

        <section className="cp2-band wf-audiences" id="audiences">
          <div className="cp2-wrap">
            <div className="cp2-sec-head cp2-reveal">
              <p className="cp2-eyebrow">Four stages, one copilot</p>
              <h2>Drop in where you are. Nothing you track gets lost.</h2>
              <p>
                Plenty of tools do a piece of this. Gutsphere connects tracking, care, navigation and
                understanding — for as long as you need it.
              </p>
            </div>

            <div className="wf-grid cp2-reveal">
              {WHO_FOR_AUDIENCES.map((audience) => (
                <article key={audience.id} className="wf-card">
                  <div className="wf-card-top">
                    <span className="wf-card-ic">
                      <StageIcon id={audience.id} />
                    </span>
                    <span className="wf-card-stage">{audience.stage}</span>
                  </div>
                  <h3>{audience.title}</h3>
                  <p className="wf-card-tag">{audience.tagline}</p>
                  <p className="wf-card-intro">{audience.intro}</p>
                  <ul className="wf-card-list">
                    {audience.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                  <div className="wf-card-actions">
                    <a href={audience.exploreHref} className="wf-card-link">
                      {audience.exploreLabel} <span aria-hidden="true">→</span>
                    </a>
                    <a href="/#start" className="wf-card-cta">
                      Start free
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="wf-platform">
          <div className="cp2-wrap">
            <div className="wf-platform-in cp2-reveal">
              <div className="wf-platform-copy">
                <p className="cp2-eyebrow">One system</p>
                <h2>Not another tracker. The thread that connects your whole journey.</h2>
                <p>
                  Track what happened. Get responsive care on hard days. Know when to see someone and how to
                  prepare. Turn patterns into appointment-ready evidence — all in one place you own.
                </p>
                <a href="/#system" className="wf-card-link">
                  See how it works <span aria-hidden="true">→</span>
                </a>
              </div>
              <div className="wf-platform-steps" aria-label="Four connected stages">
                {['Track', 'Care', 'Navigate', 'Understand'].map((step, i) => (
                  <div key={step} className="wf-platform-step">
                    <span className="wf-platform-num">{String(i + 1).padStart(2, '0')}</span>
                    <span className="wf-platform-name">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="cp2-band wf-fit">
          <div className="cp2-wrap">
            <div className="wf-fit-grid cp2-reveal">
              <div className="wf-fit-col wf-fit-yes">
                <h2>{WHO_FOR_ALSO.title}</h2>
                <ul>
                  {WHO_FOR_ALSO.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="wf-fit-col wf-fit-no">
                <h2>{WHO_FOR_NOT.title}</h2>
                <ul>
                  {WHO_FOR_NOT.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="wf-final">
          <div className="cp2-wrap cp2-reveal">
            <h2>Find your stage. Start free.</h2>
            <p>Free to start · no card · web, iOS or Android</p>
            <div className="wf-hero-actions">
              <a href="/#start" className="cp2-btn">
                Start free
              </a>
              <a href={SIGNUP_URL} className="cp2-btn ghost">
                Log in
              </a>
            </div>
          </div>
        </section>
      </main>
      <StickyCTA />
      <CopilotFooter />
    </div>
  )
}
