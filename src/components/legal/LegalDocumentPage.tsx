import { Link } from 'react-router-dom'
import { CopilotFooter, CopilotNav } from '../copilot-v2/CopilotChrome'
import { useReveal } from '../copilot-v2/useReveal'
import type { LegalBlock, LegalDocument } from './legalContent'
import '../../styles/copilot-v2.css'
import '../../styles/marketing-pages.css'

function LegalBlockView({ block }: { block: LegalBlock }) {
  switch (block.type) {
    case 'p':
      return <p>{block.text}</p>
    case 'list':
      return (
        <ul>
          {block.items.map((item) => (
            <li key={item.slice(0, 64)}>{item}</li>
          ))}
        </ul>
      )
    case 'subhead':
      return <h3>{block.text}</h3>
    case 'callout':
      return <p className="mp-legal-callout">{block.text}</p>
    default:
      return null
  }
}

export function LegalDocumentPage({ doc }: { doc: LegalDocument }) {
  useReveal()

  return (
    <div className="copilot-v2 mp-page mp-legal-page" id="top">
      <CopilotNav />
      <main>
        <section className="mp-hero mp-legal-hero">
          <div className="cp2-wrap">
            <p className="cp2-eyebrow cp2-reveal">{doc.eyebrow}</p>
            <h1 className="mp-hero-title cp2-reveal">{doc.title}</h1>
            <p className="mp-legal-updated cp2-reveal">Last updated: {doc.lastUpdated}</p>
            <p className="mp-hero-lead cp2-reveal">{doc.lead}</p>
          </div>
        </section>

        <section className="mp-legal-body" aria-label={doc.title}>
          <div className="cp2-wrap mp-legal-layout">
            <nav className="mp-legal-toc cp2-reveal" aria-label="On this page">
              <p className="cp2-eyebrow">On this page</p>
              <ol>
                {doc.sections.map((section) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`}>{section.title}</a>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="mp-legal-content">
              {doc.sections.map((section) => (
                <article key={section.id} id={section.id} className="mp-legal-section cp2-reveal">
                  <h2>{section.title}</h2>
                  {section.blocks.map((block, index) => (
                    <LegalBlockView key={`${section.id}-${index}`} block={block} />
                  ))}
                </article>
              ))}

              <p className="mp-legal-related cp2-reveal">
                Also see: <Link to={doc.related.href}>{doc.related.label}</Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      <CopilotFooter />
    </div>
  )
}
