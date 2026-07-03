import { NAVIGATOR_COUNT, testimonials } from '../../../constants'

const featured = testimonials[1]

export function RecordV2SocialProof() {
  return (
    <section
      className="border-y border-gs-border bg-gs-sand-light py-12 sm:py-14"
      aria-labelledby="record-v2-proof-heading"
    >
      <div className="container-narrow px-4 sm:px-8 lg:px-12">
        <h2
          id="record-v2-proof-heading"
          className="text-center font-display text-base font-semibold text-gs-text-secondary sm:text-lg"
        >
          Trusted by {NAVIGATOR_COUNT} people building their digestive health record
        </h2>

        <figure className="card-surface mx-auto mt-8 max-w-2xl p-6">
          <blockquote className="text-base leading-relaxed text-gs-text-primary">
            &ldquo;{featured.quote}&rdquo;
          </blockquote>
          <figcaption className="mt-5 flex items-center gap-3 border-t border-gs-border pt-5">
            <span
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gs-sand-light text-xs font-semibold text-gs-text-secondary"
              aria-hidden="true"
            >
              {featured.initials}
            </span>
            <div>
              <p className="text-sm font-medium text-gs-text-primary">{featured.name}</p>
              <p className="text-xs text-gs-text-muted">{featured.detail}</p>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
