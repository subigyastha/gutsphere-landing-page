import { Link } from 'react-router-dom'
import { CopilotFooter, CopilotNav } from '../components/copilot-v2/CopilotChrome'
import { StickyCTA } from '../components/copilot-v2/StickyCTA'
import { useReveal } from '../components/copilot-v2/useReveal'
import { ABOUT_STORY } from '../components/about/aboutContent'
import { MarketingFinalCta } from '../components/marketing/MarketingFinalCta'
import '../styles/copilot-v2.css'
import '../styles/marketing-pages.css'

export function AboutPage() {
  useReveal()
  const { hero, chapters, mission, vision, values, quote, join } = ABOUT_STORY

  return (
    <div className="copilot-v2 mp-page about-page" id="top">
      <CopilotNav />
      <main>
        <section className="mp-hero about-hero">
          <div className="cp2-wrap">
            <p className="cp2-eyebrow cp2-reveal">{hero.eyebrow}</p>
            <h1 className="mp-hero-title cp2-reveal">{hero.title}</h1>
            <p className="mp-hero-lead cp2-reveal">{hero.lead}</p>
            <div className="mp-hero-actions cp2-reveal">
              <a href="#story" className="cp2-btn">
                Read the story
              </a>
              <Link to="/for" className="cp2-btn ghost">
                Who it&apos;s for
              </Link>
            </div>
          </div>
        </section>

        <section className="about-quote-band">
          <div className="cp2-wrap cp2-reveal">
            <blockquote className="about-quote">
              <p>“{quote.text}”</p>
              <footer>
                <cite>{quote.name}</cite>
                <span>{quote.role}</span>
              </footer>
            </blockquote>
          </div>
        </section>

        <section className="about-story" id="story">
          <div className="cp2-wrap">
            <div className="cp2-sec-head cp2-reveal">
              <p className="cp2-eyebrow">Founder story</p>
              <h2>A journey of resilience, learning, and building</h2>
              <p>
                Adapted from the Gutsphere founder narrative — told as chapters, not a résumé dump.
              </p>
            </div>

            <ol className="about-chapters">
              {chapters.map((chapter, index) => (
                <li key={chapter.id} className="about-chapter cp2-reveal">
                  <div className="about-chapter-rail" aria-hidden="true">
                    <span className="about-chapter-num">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <div className="about-chapter-body">
                    <p className="about-chapter-eyebrow">{chapter.eyebrow}</p>
                    <h3>{chapter.title}</h3>
                    {chapter.body.map((para) => (
                      <p key={para.slice(0, 48)}>{para}</p>
                    ))}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="cp2-band about-mission">
          <div className="cp2-wrap">
            <div className="about-mission-grid cp2-reveal">
              <article>
                <p className="cp2-eyebrow">{mission.title}</p>
                <h2>{mission.body}</h2>
              </article>
              <article>
                <p className="cp2-eyebrow">{vision.title}</p>
                <h2>{vision.body}</h2>
              </article>
            </div>
          </div>
        </section>

        <section className="about-values">
          <div className="cp2-wrap">
            <div className="cp2-sec-head cp2-reveal">
              <p className="cp2-eyebrow">Values</p>
              <h2>How we try to build</h2>
            </div>
            <ul className="about-values-list cp2-reveal">
              {values.map((value) => (
                <li key={value}>{value}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="about-join">
          <div className="cp2-wrap cp2-reveal">
            <p className="cp2-eyebrow">Open invitation</p>
            <h2>{join.title}</h2>
            <p>{join.body}</p>
            <div className="mp-hero-actions">
              <a href="/#start" className="cp2-btn">
                Start free
              </a>
              <Link to="/faq" className="cp2-btn ghost">
                Read FAQs
              </Link>
            </div>
          </div>
        </section>

        <MarketingFinalCta title="Make GI health a shared ikigai." secondaryHref="/for" secondaryLabel="Who it's for" />
      </main>
      <StickyCTA />
      <CopilotFooter />
    </div>
  )
}
