import { CHAPTERS, SEO_DESCRIPTION, SEO_TITLE } from './constants'

/** Semantic HTML fallback for SEO and no-JS readers */
export function CopilotSEOFallback() {
  return (
    <div className="copilot-seo-fallback">
      <h1>{SEO_TITLE}</h1>
      <p>{SEO_DESCRIPTION}</p>
      <nav aria-label="Chapter contents">
        {CHAPTERS.map((chapter) => (
          <section key={chapter.id} id={`seo-${chapter.id}`}>
            <h2>
              <a href={`#seo-${chapter.id}`}>{chapter.label}</a>
            </h2>
            {chapter.cards.map((card) => (
              <article key={card.id}>
                <h3>{card.headline}</h3>
                <p>{card.subcopy}</p>
              </article>
            ))}
          </section>
        ))}
      </nav>
    </div>
  )
}
