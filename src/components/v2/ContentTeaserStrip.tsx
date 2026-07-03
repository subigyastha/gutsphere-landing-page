import { curatedContent, SIGNUP_URL } from '../../constants'

const teaserIds = ['stool-color', 'yellow-poop'] as const

export function ContentTeaserStrip() {
  const items = curatedContent.filter((item) =>
    (teaserIds as readonly string[]).includes(item.id),
  )

  return (
    <section id="content" className="section-pad bg-gs-card" aria-labelledby="content-teaser-heading">
      <div className="container-narrow">
        <p className="text-xs font-medium text-gs-coral">Free guides</p>
        <h2 id="content-teaser-heading" className="section-heading mt-3 max-w-2xl">
          Start learning before you sign up
        </h2>
        <p className="body-lg mt-4 max-w-2xl">
          Real articles from the Gutsphere newsletter — no account required.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {items.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${item.title} — opens in new tab`}
              className="card-surface group flex flex-col p-6 transition-shadow hover:shadow-[0_4px_20px_rgba(239,83,80,0.12)]"
            >
              <p className="text-xs font-medium text-gs-text-muted">{item.duration} read</p>
              <h3 className="mt-2 font-display text-lg font-semibold text-gs-text-primary group-hover:text-gs-coral">
                {item.title}
              </h3>
            </a>
          ))}
        </div>

        <p className="mt-8">
          <a href={SIGNUP_URL} className="text-sm font-semibold text-gs-coral hover:underline">
            Track this in Gutsphere &rarr;
          </a>
        </p>
      </div>
    </section>
  )
}
