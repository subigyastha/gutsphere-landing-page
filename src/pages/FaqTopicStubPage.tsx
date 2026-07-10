import { Link, useParams } from 'react-router-dom'
import { CopilotFooter, CopilotNav } from '../components/copilot-v2/CopilotChrome'
import { conditionHub } from '../constants'
import '../styles/copilot-v2.css'

export function FaqTopicStubPage() {
  const { slug } = useParams<{ slug: string }>()
  const topic = conditionHub.find((item) => item.slug === slug)

  return (
    <div className="copilot-v2" id="top">
      <CopilotNav />
      <main className="cp2-faq-hub-page">
        <div className="cp2-wrap">
          {!topic ? (
            <>
              <h1>FAQ topic not found</h1>
              <p className="cp2-sub">
                <Link to="/faq" className="cp2-hero-secondary">
                  ← Browse all FAQ topics
                </Link>
              </p>
            </>
          ) : (
            <>
              <div className="cp2-sec-head">
                <p className="cp2-eyebrow">Condition &amp; symptom FAQs</p>
                <h1>{topic.label}</h1>
                <p>{topic.blurb}</p>
              </div>
              <p className="cp2-sub" style={{ marginTop: 24 }}>
                Topic-specific FAQs for {topic.label} are coming soon. For now, see our{' '}
                <Link to="/#faq" className="cp2-hero-secondary">
                  general questions
                </Link>{' '}
                or{' '}
                <Link to="/faq" className="cp2-hero-secondary">
                  browse all topics
                </Link>
                .
              </p>
            </>
          )}
        </div>
      </main>
      <CopilotFooter />
    </div>
  )
}
