import { Link } from 'react-router-dom'
import { CopilotFooter, CopilotNav } from '../components/copilot-v2/CopilotChrome'
import '../styles/copilot-v2.css'
import '../styles/marketing-pages.css'

export function NotFoundPage() {
  return (
    <div className="copilot-v2 mp-page" id="top">
      <CopilotNav />
      <main>
        <section className="mp-hero">
          <div className="cp2-wrap">
            <p className="cp2-eyebrow">404</p>
            <h1 className="mp-hero-title">Page not found</h1>
            <p className="mp-hero-lead">
              That link does not match a page on this site. Head home or pick a hub below.
            </p>
            <div className="mp-hero-actions">
              <Link to="/" className="cp2-btn">
                Back to home
              </Link>
              <Link to="/for" className="cp2-btn ghost">
                Who it is for
              </Link>
            </div>
          </div>
        </section>
      </main>
      <CopilotFooter />
    </div>
  )
}
