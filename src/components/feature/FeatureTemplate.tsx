import { Link } from 'react-router-dom'
import { CopilotFooter, CopilotNav } from '../copilot-v2/CopilotChrome'
import { StickyCTA } from '../copilot-v2/StickyCTA'
import { useReveal } from '../copilot-v2/useReveal'
import { FaqAccordion } from '../marketing/FaqAccordion'
import { MarketingFinalCta } from '../marketing/MarketingFinalCta'
import { FEATURE_PAGE_LIST, type FeaturePageData } from './featurePages'
import '../../styles/copilot-v2.css'
import '../../styles/marketing-pages.css'

interface FeatureTemplateProps {
  data: FeaturePageData
}

export function FeatureTemplate({ data }: FeatureTemplateProps) {
  useReveal()

  const related = (data.relatedSlugs ?? [])
    .map((slug) => FEATURE_PAGE_LIST.find((page) => page.slug === slug))
    .filter((page): page is FeaturePageData => Boolean(page))

  const others = FEATURE_PAGE_LIST.filter((page) => page.slug !== data.slug)

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
              <a href="#capabilities" className="cp2-btn ghost">
                See what&apos;s included
              </a>
            </div>
          </div>
        </section>

        <section className="cp2-band">
          <div className="cp2-wrap">
            <div className="cp2-sec-head cp2-reveal">
              <p className="cp2-eyebrow">Outcomes</p>
              <h2>What {data.label.toLowerCase()} does for you</h2>
              <p>One job, done clearly — then connected to the rest of the system.</p>
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

        <section className="mp-feat-caps" id="capabilities">
          <div className="cp2-wrap">
            <div className="cp2-sec-head cp2-reveal">
              <p className="cp2-eyebrow">Inside {data.label}</p>
              <h2>Capabilities that earn their place</h2>
              <p>Not a feature dump — the pieces people actually use day to day.</p>
            </div>
            <div className="mp-feat-grid cp2-reveal">
              {data.capabilities.map((cap, index) => (
                <article key={cap.title} className="mp-feat-card">
                  <span className="mp-feat-num" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3>{cap.title}</h3>
                  <p>{cap.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mp-helps">
          <div className="cp2-wrap">
            <div className="mp-helps-in cp2-reveal">
              <div>
                <p className="cp2-eyebrow">How it connects</p>
                <h2>{data.label} in the operating system</h2>
              </div>
              <ul className="mp-helps-list">
                {data.systemFit.map((item) => (
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
              <h2>{data.label} questions</h2>
            </div>
            <div className="cp2-reveal">
              <FaqAccordion items={data.faqs} />
            </div>
            <p className="mp-faq-more cp2-reveal">
              <Link to="/faq">Browse all FAQs</Link>
              {' · '}
              <Link to="/#system">See how it connects</Link>
            </p>
          </div>
        </section>

        {(related.length > 0 || others.length > 0) && (
          <section className="mp-related">
            <div className="cp2-wrap cp2-reveal">
              <p className="cp2-eyebrow">More features</p>
              <h2>Explore the rest of the system</h2>
              <div className="mp-related-grid">
                {(related.length > 0 ? related : others).map((page) => (
                  <Link key={page.slug} to={`/features/${page.slug}`} className="mp-related-card">
                    <span className="mp-related-kind">Feature</span>
                    <span className="mp-related-label">{page.label}</span>
                    <span className="mp-related-arrow" aria-hidden="true">
                      →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <MarketingFinalCta title={data.ctaTitle} />
      </main>
      <StickyCTA />
      <CopilotFooter />
    </div>
  )
}
