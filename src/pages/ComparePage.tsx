import { Link, useParams } from 'react-router-dom'
import { CompareTemplate } from '../components/compare/CompareTemplate'
import { COMPARE_PAGE_LIST, getComparePage } from '../components/compare/comparePages'
import { CopilotFooter, CopilotNav } from '../components/copilot-v2/CopilotChrome'
import '../styles/copilot-v2.css'
import '../styles/marketing-pages.css'

export function ComparePage() {
  const { slug } = useParams<{ slug: string }>()
  const data = getComparePage(slug)

  if (!data) {
    return (
      <div className="copilot-v2 mp-page" id="top">
        <CopilotNav />
        <main className="mp-not-found">
          <div className="cp2-wrap">
            <h1>Comparison not found</h1>
            <p>Try one of these:</p>
            <ul className="mp-not-found-list">
              {COMPARE_PAGE_LIST.map((page) => (
                <li key={page.slug}>
                  <Link to={`/compare/${page.slug}`}>Gutsphere vs {page.competitor}</Link>
                </li>
              ))}
            </ul>
          </div>
        </main>
        <CopilotFooter />
      </div>
    )
  }

  return <CompareTemplate data={data} />
}
