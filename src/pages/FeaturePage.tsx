import { Link, useParams } from 'react-router-dom'
import { FeatureTemplate } from '../components/feature/FeatureTemplate'
import { FEATURE_PAGE_LIST, getFeaturePage } from '../components/feature/featurePages'
import { CopilotFooter, CopilotNav } from '../components/copilot-v2/CopilotChrome'
import '../styles/copilot-v2.css'
import '../styles/marketing-pages.css'

export function FeaturePage() {
  const { slug } = useParams<{ slug: string }>()
  const data = getFeaturePage(slug)

  if (!data) {
    return (
      <div className="copilot-v2 mp-page" id="top">
        <CopilotNav />
        <main className="mp-not-found">
          <div className="cp2-wrap">
            <h1>Feature not found</h1>
            <p>Try one of these:</p>
            <ul className="mp-not-found-list">
              {FEATURE_PAGE_LIST.map((page) => (
                <li key={page.slug}>
                  <Link to={`/features/${page.slug}`}>{page.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </main>
        <CopilotFooter />
      </div>
    )
  }

  return <FeatureTemplate data={data} />
}
