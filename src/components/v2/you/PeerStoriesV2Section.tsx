import { testimonials } from '../../../constants'

const featured = [testimonials[1], testimonials[0], testimonials[2]]

const labels = ['Finding patterns', 'Prepared for care', 'Simple to use'] as const

export function PeerStoriesV2Section() {
  return (
    <section className="section-pad bg-gs-card" aria-labelledby="peer-stories-v2-heading">
      <div className="container-narrow">
        <p className="text-xs font-medium text-gs-coral">You&apos;re not alone in this</p>
        <h2 id="peer-stories-v2-heading" className="section-heading mt-3 max-w-2xl">
          Sound familiar?
        </h2>
        <p className="body-lg mt-3 max-w-2xl sm:mt-4">
          Real people with real symptoms — including pattern-finders and visit-preppers like you.
        </p>

        <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-4">
          {featured.map((t, i) => (
            <figure key={t.name} className="card-surface flex flex-col p-5 sm:p-6">
              <p className="text-xs font-medium text-gs-coral">{labels[i]}</p>
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-gs-text-primary sm:text-base">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-gs-border pt-4">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gs-sand-light text-xs font-semibold text-gs-text-secondary"
                  aria-hidden="true"
                >
                  {t.initials}
                </span>
                <div>
                  <p className="text-sm font-medium text-gs-text-primary">{t.name}</p>
                  <p className="text-xs text-gs-text-muted sm:text-sm">{t.detail}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
