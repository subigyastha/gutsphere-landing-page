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
import { MarketingFinalCta } from '../components/marketing/MarketingFinalCta'
import { NAVIGATOR_COUNT, SIGNUP_URL } from '../constants'
import { ArrowRight, Compass, HeartPulse, Search, Shield } from 'lucide-react'
import '../styles/copilot-v2.css'
import '../styles/who-for.css'
import '../styles/marketing-pages.css'

function StageIcon({ id }: { id: string }) {
  const props = { size: 22, strokeWidth: 2, 'aria-hidden': true as const }
  switch (id) {
    case 'finding-answers':
      return <Search {...props} />
    case 'in-treatment':
      return <Shield {...props} />
    case 'living-with-it':
      return <HeartPulse {...props} />
    default:
      return <Compass {...props} />
  }
}

const OUTCOMES_BY_STAGE: Record<string, string> = {
  'finding-answers': 'Walk into appointments with a timeline — not a fuzzy story.',
  'in-treatment': 'See what is actually helping before the next specialist visit.',
  'living-with-it': 'Catch triggers early and get calm support on hard days.',
  'staying-ahead': 'Hold a history that compounds — and stay appointment-ready.',
}

export function WhoIsItForLanding() {
  useReveal()

  return (
    <div className="copilot-v2 who-for mp-page" id="top">
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
              <a href="#audiences" className="cp2-btn ghost">
                Find your stage
              </a>
            </div>
          </div>
        </section>

        <section className="wf-outcome-strip">
          <div className="cp2-wrap">
            <div className="wf-outcome-strip-in cp2-reveal">
              <p className="cp2-eyebrow">The outcome</p>
              <h2>One copilot across the whole GI journey — not a tool for a single moment.</h2>
              <p>
                Most products pick one job: log symptoms, book a visit, or mail a kit. Gutsphere connects
                tracking, care, navigation, and understanding so nothing you learn gets stranded in another app.
              </p>
            </div>
          </div>
        </section>

        <section className="cp2-band wf-audiences" id="audiences">
          <div className="cp2-wrap">
            <div className="cp2-sec-head cp2-reveal">
              <p className="cp2-eyebrow">Four stages, one system</p>
              <h2>Drop in where you are. Keep the thread.</h2>
              <p>
                Pick the stage that sounds like today. Each one has a clear outcome — and the same place to
                continue when your situation changes.
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
                  <p className="wf-card-outcome">{OUTCOMES_BY_STAGE[audience.id]}</p>
                  <p className="wf-card-intro">{audience.intro}</p>
                  <ul className="wf-card-list">
                    {audience.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                  <div className="wf-card-actions">
                    <a href={audience.exploreHref} className="wf-card-link">
                      {audience.exploreLabel} <ArrowRight size={16} aria-hidden="true" />
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
                  See how it works <ArrowRight size={16} aria-hidden="true" />
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

        <section className="cp2-band wf-proof">
          <div className="cp2-wrap">
            <div className="wf-proof-in cp2-reveal">
              <div>
                <p className="cp2-eyebrow">Built for real journeys</p>
                <h2>Works with or without a diagnosis.</h2>
                <p>
                  IBS, IBD, GERD, constipation, bloating, diarrhea — or an unclear mix. Start where you are.
                  Nothing you track is lost if the label changes later.
                </p>
              </div>
              <div className="wf-proof-links">
                <Link to="/conditions/ibs">IBS FAQs →</Link>
                <Link to="/conditions/constipation">Constipation FAQs →</Link>
                <Link to="/faq">All FAQs →</Link>
                <Link to="/compare/symptom-trackers">vs symptom trackers →</Link>
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

        <MarketingFinalCta
          title="Find your stage. Start free."
          secondaryHref={SIGNUP_URL}
          secondaryLabel="Log in"
        />
      </main>
      <StickyCTA />
      <CopilotFooter />
    </div>
  )
}
