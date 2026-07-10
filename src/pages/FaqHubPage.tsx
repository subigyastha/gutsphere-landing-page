import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { CopilotFooter, CopilotNav } from '../components/copilot-v2/CopilotChrome'
import { StickyCTA } from '../components/copilot-v2/StickyCTA'
import { useReveal } from '../components/copilot-v2/useReveal'
import { FAQ_CATEGORIES, FAQ_TOPIC_LINKS } from '../components/faq/faqContent'
import { FaqAccordion } from '../components/marketing/FaqAccordion'
import { MarketingFinalCta } from '../components/marketing/MarketingFinalCta'
import { Search } from 'lucide-react'
import '../styles/copilot-v2.css'
import '../styles/marketing-pages.css'

export function FaqHubPage() {
  useReveal()
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const filteredCategories = useMemo(() => {
    const q = query.trim().toLowerCase()
    return FAQ_CATEGORIES.map((category) => {
      const items = category.items.filter((item) => {
        if (!q) return true
        return item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q)
      })
      return { ...category, items }
    }).filter((category) => {
      if (activeCategory !== 'all' && category.id !== activeCategory) return false
      return category.items.length > 0
    })
  }, [query, activeCategory])

  const totalMatches = filteredCategories.reduce((sum, c) => sum + c.items.length, 0)

  return (
    <div className="copilot-v2 mp-page" id="top">
      <CopilotNav />
      <main>
        <section className="mp-hero">
          <div className="cp2-wrap">
            <p className="cp2-eyebrow cp2-reveal">Help center</p>
            <h1 className="mp-hero-title cp2-reveal">Frequently asked questions</h1>
            <p className="mp-hero-lead cp2-reveal">
              Plain answers about Gutsphere — then deeper FAQs by condition and symptom when you need
              them.
            </p>

            <label className="mp-search cp2-reveal" htmlFor="faq-search">
              <Search aria-hidden="true" size={18} strokeWidth={2} />
              <input
                id="faq-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search questions…"
                autoComplete="off"
              />
            </label>

            <div className="mp-faq-tabs cp2-reveal" role="tablist" aria-label="FAQ categories">
              <button
                type="button"
                role="tab"
                aria-selected={activeCategory === 'all'}
                className={`mp-faq-tab ${activeCategory === 'all' ? 'is-active' : ''}`}
                onClick={() => setActiveCategory('all')}
              >
                All
              </button>
              {FAQ_CATEGORIES.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  aria-selected={activeCategory === category.id}
                  className={`mp-faq-tab ${activeCategory === category.id ? 'is-active' : ''}`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="cp2-band">
          <div className="cp2-wrap">
            {totalMatches === 0 ? (
              <p className="mp-empty cp2-reveal">
                No matches for “{query}”. Try another word, or browse topics below.
              </p>
            ) : (
              filteredCategories.map((category) => (
                <div key={category.id} className="mp-faq-category cp2-reveal" id={category.id}>
                  <div className="cp2-sec-head">
                    <h2>{category.label}</h2>
                    <p>{category.description}</p>
                  </div>
                  <FaqAccordion items={category.items} />
                </div>
              ))
            )}
          </div>
        </section>

        <section className="mp-related">
          <div className="cp2-wrap cp2-reveal">
            <div className="cp2-sec-head">
              <p className="cp2-eyebrow">By condition &amp; symptom</p>
              <h2>Topic FAQs</h2>
              <p>Deeper pages for what you are dealing with — each with outcomes and focused Q&amp;A.</p>
            </div>
            <div className="mp-topic-grid">
              <div className="mp-topic-block">
                <h3>Conditions</h3>
                {FAQ_TOPIC_LINKS.conditions.map((item) => (
                  <Link key={item.slug} to={`/conditions/${item.slug}`} className="mp-topic-link">
                    <span className="mp-topic-label">{item.label}</span>
                    <span className="mp-topic-blurb">{item.blurb}</span>
                  </Link>
                ))}
              </div>
              <div className="mp-topic-block">
                <h3>Symptoms</h3>
                {FAQ_TOPIC_LINKS.symptoms.map((item) => (
                  <Link key={item.slug} to={`/conditions/${item.slug}`} className="mp-topic-link">
                    <span className="mp-topic-label">{item.label}</span>
                    <span className="mp-topic-blurb">{item.blurb}</span>
                  </Link>
                ))}
              </div>
            </div>
            <p className="mp-faq-more">
              <Link to="/for">Who it&apos;s for</Link>
              {' · '}
              <Link to="/about">About the founder</Link>
              {' · '}
              <Link to="/#faq">Homepage FAQ section</Link>
            </p>
          </div>
        </section>

        <MarketingFinalCta title="Still figuring things out? Start free." />
      </main>
      <StickyCTA />
      <CopilotFooter />
    </div>
  )
}
