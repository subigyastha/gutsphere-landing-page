import { Link } from 'react-router-dom'
import { CopilotFooter, CopilotNav } from '../components/copilot-v2/CopilotChrome'
import { StickyCTA } from '../components/copilot-v2/StickyCTA'
import { useReveal } from '../components/copilot-v2/useReveal'
import { COMPARE_PAGE_LIST } from '../components/compare/comparePages'
import { HubCard } from '../components/marketing/HubCard'
import { MarketingFinalCta } from '../components/marketing/MarketingFinalCta'
import '../styles/copilot-v2.css'
import '../styles/marketing-pages.css'

const COMPARE_HUB = {
  eyebrow: 'Compare',
  title: 'How Gutsphere fits your stack',
  lead: 'Trackers, AI chat, telehealth, and test kits each solve one slice. See where a connected gut copilot adds what they cannot — with honest side-by-side breakdowns.',
} as const

const FEATURED_SLUG = 'symptom-trackers'

function compareCardTitle(page: (typeof COMPARE_PAGE_LIST)[number]) {
  return `vs ${page.competitor.charAt(0).toUpperCase()}${page.competitor.slice(1)}`
}

export function CompareHubPage() {
  useReveal()

  const featured = COMPARE_PAGE_LIST.find((p) => p.slug === FEATURED_SLUG) ?? COMPARE_PAGE_LIST[0]
  const rest = COMPARE_PAGE_LIST.filter((p) => p.slug !== featured.slug)

  return (
    <div className="copilot-v2 mp-page mp-hub-page" id="top">
      <CopilotNav />
      <main>
        <section className="mp-hero">
          <div className="cp2-wrap">
            <p className="cp2-eyebrow cp2-reveal">{COMPARE_HUB.eyebrow}</p>
            <h1 className="mp-hero-title cp2-reveal">{COMPARE_HUB.title}</h1>
            <p className="mp-hero-lead cp2-reveal">{COMPARE_HUB.lead}</p>
            <div className="mp-hero-actions cp2-reveal">
              <Link to={`/compare/${featured.slug}`} className="cp2-btn">
                Start with trackers
              </Link>
              <a href="/#compare" className="cp2-btn ghost">
                Why one system
              </a>
            </div>
          </div>
        </section>

        <section className="mp-hub-library">
          <div className="cp2-wrap">
            <div className="mp-hub-section-head cp2-reveal">
              <p className="cp2-eyebrow">Comparison library</p>
              <h2>Pick the alternative you are weighing</h2>
              <p>
                Each guide covers what the other option does well, where Gutsphere is different, and when
                each might be the right fit — no hype, no fake wins.
              </p>
            </div>

            <div className="mp-hub-featured cp2-reveal">
              <p className="mp-hub-featured-label">Featured</p>
              <HubCard
                featured
                href={`/compare/${featured.slug}`}
                kind={featured.eyebrow.replace('Compare · ', '')}
                title={compareCardTitle(featured)}
                blurb={featured.lead}
              />
            </div>

            <div className="mp-hub-grid cp2-reveal">
              {rest.map((page) => (
                <HubCard
                  key={page.slug}
                  href={`/compare/${page.slug}`}
                  kind={page.eyebrow.replace('Compare · ', '')}
                  title={compareCardTitle(page)}
                  blurb={page.lead}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="mp-hub-band">
          <div className="cp2-wrap mp-hub-band-in cp2-reveal">
            <div>
              <p className="cp2-eyebrow">The bigger picture</p>
              <h2>One system, not another app</h2>
              <p>
                Most people already use something — a tracker, ChatGPT, telehealth, or a kit. Gutsphere is
                the layer that connects daily life to care, so nothing you learn gets stranded.
              </p>
            </div>
            <a href="/#compare" className="cp2-btn">
              See on the homepage
            </a>
          </div>
        </section>

        <MarketingFinalCta title="Ready to see how it fits you? Start free." />
      </main>
      <StickyCTA />
      <CopilotFooter />
    </div>
  )
}
