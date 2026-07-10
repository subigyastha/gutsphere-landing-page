import { Link, useParams } from 'react-router-dom'
import { ConditionTemplate } from '../components/condition/ConditionTemplate'
import { getConditionPage } from '../components/condition/conditionPages'
import { CopilotFooter, CopilotNav } from '../components/copilot-v2/CopilotChrome'
import '../styles/copilot-v2.css'
import '../styles/marketing-pages.css'

export function ConditionPage() {
  const { slug } = useParams<{ slug: string }>()
  const data = getConditionPage(slug)

  if (!data) {
    return (
      <div className="copilot-v2 mp-page" id="top">
        <CopilotNav />
        <main className="mp-not-found">
          <div className="cp2-wrap">
            <h1>Condition not found</h1>
            <p>
              <Link to="/faq">Browse FAQs by condition &amp; symptom</Link>
            </p>
          </div>
        </main>
        <CopilotFooter />
      </div>
    )
  }

  return <ConditionTemplate data={data} />
}
