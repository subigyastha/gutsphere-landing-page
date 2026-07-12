import { Link } from 'react-router-dom'
import { CopilotFooter, CopilotNav } from '../components/copilot-v2/CopilotChrome'
import { StickyCTA } from '../components/copilot-v2/StickyCTA'
import { useReveal } from '../components/copilot-v2/useReveal'
import { HubCard } from '../components/marketing/HubCard'
import { MarketingFinalCta } from '../components/marketing/MarketingFinalCta'
import { WHO_FOR_AUDIENCES, WHO_FOR_HERO } from '../components/who-for/whoForAudiences'
import { NAVIGATOR_COUNT } from '../constants'
import '../styles/copilot-v2.css'
import '../styles/marketing-pages.css'

const STAGE_OUTCOMES: Record<string, string> = {
  'finding-answers': 'Walk into appointments with a timeline — not a fuzzy story from memory.',
  'in-treatment': 'See what is actually helping before the next specialist visit.',
  'living-with-it': 'Catch triggers early and get calm support on hard days.',
  'staying-ahead': 'Hold a history that compounds — and stay appointment-ready.',
}

const FEATURED_STAGE_ID = 'finding-answers'

export function JourneyHubPage() {
  useReveal()

  const featured = WHO_FOR_AUDIENCES.find((a) => a.id === FEATURED_STAGE_ID)!
  const rest = WHO_FOR_AUDIENCES.filter((a) => a.id !== FEATURED_STAGE_ID)

  return (
    <div className="copilot-v2 mp-page mp-hub-page" id="top">
      <CopilotNav />
      <main>
        <section className="mp-hero">
          <div className="cp2-wrap">
            <p className="cp2-eyebrow cp2-reveal">Your journey</p>
            <h1 className="mp-hero-title cp2-reveal">{WHO_FOR_HERO.title}</h1>
            <p className="mp-hero-lead cp2-reveal">{WHO_FOR_HERO.lead}</p>
            <p className="mp-hub-trust cp2-reveal">Trusted by {NAVIGATOR_COUNT} navigators</p>
            <div className="mp-hero-actions cp2-reveal">
              <a href="/#start" className="cp2-btn">
                Start free
              </a>
              <Link to="/for" className="cp2-btn ghost">
                Full stage guide
              </Link>
            </div>
          </div>
        </section>

        <section className="mp-hub-library">
          <div className="cp2-wrap">
            <div className="mp-hub-section-head cp2-reveal">
              <p className="cp2-eyebrow">Journey library</p>
              <h2>Find where you are today</h2>
              <p>
                Four stages, one connected system. Pick the card that sounds like your situation — then
                dive into outcomes, proof, and how Gutsphere fits.
              </p>
            </div>

            <div className="mp-hub-featured cp2-reveal">
              <p className="mp-hub-featured-label">Featured</p>
              <HubCard
                featured
                href={`/for#${featured.id}`}
                kind={featured.stage}
                title={featured.title}
                blurb={STAGE_OUTCOMES[featured.id] ?? featured.tagline}
              />
            </div>

            <div className="mp-hub-grid cp2-reveal">
              {rest.map((stage) => (
                <HubCard
                  key={stage.id}
                  href={`/for#${stage.id}`}
                  kind={stage.stage}
                  title={stage.title}
                  blurb={STAGE_OUTCOMES[stage.id] ?? stage.tagline}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="mp-hub-band">
          <div className="cp2-wrap mp-hub-band-in cp2-reveal">
            <div>
              <p className="cp2-eyebrow">One system</p>
              <h2>Not a tool for a single moment</h2>
              <p>
                Track what happened. Get responsive care on hard days. Know when to see someone and how to
                prepare. Turn patterns into appointment-ready evidence — all in one place you own.
              </p>
            </div>
            <Link to="/for" className="cp2-btn">
              Explore the full guide
            </Link>
          </div>
        </section>

        <MarketingFinalCta title="Find your stage. Start free." />
      </main>
      <StickyCTA />
      <CopilotFooter />
    </div>
  )
}
