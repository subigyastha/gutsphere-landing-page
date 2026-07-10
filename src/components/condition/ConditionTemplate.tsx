import { Link } from 'react-router-dom'
import { CopilotFooter, CopilotNav } from '../copilot-v2/CopilotChrome'
import { StickyCTA } from '../copilot-v2/StickyCTA'
import { useReveal } from '../copilot-v2/useReveal'
import { FaqAccordion } from '../marketing/FaqAccordion'
import { MarketingFinalCta } from '../marketing/MarketingFinalCta'
import { CONDITION_PAGES, type ConditionPageData } from './conditionPages'
import '../../styles/copilot-v2.css'
import '../../styles/marketing-pages.css'

interface ConditionTemplateProps {
  data: ConditionPageData
}

export function ConditionTemplate({ data }: ConditionTemplateProps) {
  useReveal()

  const related = (data.relatedSlugs ?? [])
    .map((slug) => CONDITION_PAGES[slug])
    .filter(Boolean)

  return (
    <div className="copilot-v2 mp-page" id="top">
      <CopilotNav />
      <main>
        <section className="mp-hero">
          <div className="cp2-wrap">
            <p className="cp2-eyebrow cp2-reveal">{data.eyebrow}</p>
            <h1 className="mp-hero-title cp2-reveal">{data.title}</h1>
            <p className="mp-hero-lead cp2-reveal">{data.lead}</p>
            <div className="mp-hero-actions cp2-reveal">
              <a href="/#start" className="cp2-btn">
                Start free
              </a>
              <a href="#faqs" className="cp2-btn ghost">
                Read FAQs
              </a>
            </div>
          </div>
        </section>

        <section className="cp2-band">
          <div className="cp2-wrap">
            <div className="cp2-sec-head cp2-reveal">
              <p className="cp2-eyebrow">Outcomes</p>
              <h2>What you get with Gutsphere</h2>
              <p>Built for real days with {data.label} — not a one-time report or a guilt-driven streak app.</p>
            </div>
            <div className="mp-outcome-grid cp2-reveal">
              {data.outcomes.map((outcome) => (
                <article key={outcome.title} className="mp-outcome-card">
                  <h3>{outcome.title}</h3>
                  <p>{outcome.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mp-helps">
          <div className="cp2-wrap">
            <div className="mp-helps-in cp2-reveal">
              <div>
                <p className="cp2-eyebrow">How it helps</p>
                <h2>A calmer system for {data.label} days</h2>
              </div>
              <ul className="mp-helps-list">
                {data.howItHelps.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="cp2-band" id="faqs">
          <div className="cp2-wrap cp2-faq-wrap">
            <div className="cp2-sec-head cp2-reveal">
              <p className="cp2-eyebrow">FAQs</p>
              <h2>{data.label} and Gutsphere</h2>
              <p>Plain answers. Non-diagnostic. Built to complement your care team.</p>
            </div>
            <div className="cp2-reveal">
              <FaqAccordion items={data.faqs} />
            </div>
            <p className="mp-faq-more cp2-reveal">
              <Link to="/faq">Browse all FAQs</Link>
              {' · '}
              <Link to="/for">Who it&apos;s for</Link>
            </p>
          </div>
        </section>

        {related.length > 0 ? (
          <section className="mp-related">
            <div className="cp2-wrap cp2-reveal">
              <p className="cp2-eyebrow">Related</p>
              <h2>Also explore</h2>
              <div className="mp-related-grid">
                {related.map((item) => (
                  <Link key={item.slug} to={`/conditions/${item.slug}`} className="mp-related-card">
                    <span className="mp-related-kind">{item.kind}</span>
                    <span className="mp-related-label">{item.label}</span>
                    <span className="mp-related-arrow" aria-hidden="true">
                      →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <MarketingFinalCta title={`Start tracking ${data.label} with less guesswork.`} />
      </main>
      <StickyCTA />
      <CopilotFooter />
    </div>
  )
}
