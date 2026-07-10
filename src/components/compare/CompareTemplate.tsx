import { Link } from 'react-router-dom'
import { CopilotFooter, CopilotNav } from '../copilot-v2/CopilotChrome'
import { StickyCTA } from '../copilot-v2/StickyCTA'
import { useReveal } from '../copilot-v2/useReveal'
import { FaqAccordion } from '../marketing/FaqAccordion'
import { MarketingFinalCta } from '../marketing/MarketingFinalCta'
import { COMPARE_PAGE_LIST, type ComparePageData } from './comparePages'
import '../../styles/copilot-v2.css'
import '../../styles/marketing-pages.css'

interface CompareTemplateProps {
  data: ComparePageData
}

export function CompareTemplate({ data }: CompareTemplateProps) {
  useReveal()

  const others = COMPARE_PAGE_LIST.filter((page) => page.slug !== data.slug)

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
              <a href="#comparison" className="cp2-btn ghost">
                See the comparison
              </a>
            </div>
          </div>
        </section>

        <section className="cp2-band" id="comparison">
          <div className="cp2-wrap">
            <div className="cp2-sec-head cp2-reveal">
              <p className="cp2-eyebrow">Side by side</p>
              <h2>Where each approach leaves you</h2>
              <p>
                Honest tradeoffs — not a feature dump. Use this to decide what belongs in your stack.
              </p>
            </div>
            <div className="mp-cmp cp2-reveal">
              <table>
                <thead>
                  <tr>
                    <th>Dimension</th>
                    <th>{data.competitor}</th>
                    <th className="gs">Gutsphere</th>
                  </tr>
                </thead>
                <tbody>
                  {data.rows.map((row) => (
                    <tr key={row.dimension}>
                      <td className="dim">{row.dimension}</td>
                      <td>{row.them}</td>
                      <td className="gs">{row.gutsphere}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="mp-win">
          <div className="cp2-wrap">
            <div className="cp2-sec-head cp2-reveal">
              <p className="cp2-eyebrow">Who wins when</p>
              <h2>Pick the right tool for the job</h2>
            </div>
            <div className="mp-win-grid cp2-reveal">
              {data.winWhen.map((item) => (
                <article key={item.title} className="mp-win-card">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cp2-band" id="faqs">
          <div className="cp2-wrap cp2-faq-wrap">
            <div className="cp2-sec-head cp2-reveal">
              <p className="cp2-eyebrow">FAQs</p>
              <h2>Common questions</h2>
            </div>
            <div className="cp2-reveal">
              <FaqAccordion items={data.faqs} />
            </div>
          </div>
        </section>

        {others.length > 0 ? (
          <section className="mp-related">
            <div className="cp2-wrap cp2-reveal">
              <p className="cp2-eyebrow">More comparisons</p>
              <h2>Gutsphere vs other approaches</h2>
              <div className="mp-related-grid">
                {others.map((page) => (
                  <Link key={page.slug} to={`/compare/${page.slug}`} className="mp-related-card">
                    <span className="mp-related-kind">Compare</span>
                    <span className="mp-related-label">vs {page.competitor}</span>
                    <span className="mp-related-arrow" aria-hidden="true">
                      →
                    </span>
                  </Link>
                ))}
              </div>
              <p className="mp-faq-more">
                <Link to="/#compare">See the full stack comparison on the homepage</Link>
              </p>
            </div>
          </section>
        ) : null}

        <MarketingFinalCta title="Replace the stack with one connected system." />
      </main>
      <StickyCTA />
      <CopilotFooter />
    </div>
  )
}
