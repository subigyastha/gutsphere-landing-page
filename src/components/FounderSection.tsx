import { Button } from './Button'
import { ABOUT_URL } from '../constants'

const BIMAL_PHOTO = '/bimal-maharjan.png'

const familiarMoments = [
  'Appointments that feel rushed',
  'Bills that arrive without context',
  'Details you meant to mention — but forgot',
]

const storyBeats = [
  {
    marker: '1',
    title: 'A lifelong fight for answers',
    detail: 'GI issues since infancy in Nepal — a body that never fully settled.',
  },
  {
    marker: '2',
    title: 'Rushed care and $3,700 in bills',
    detail: 'Fear, a fast colonoscopy recommendation, and a system that saw a procedure — not a person.',
  },
  {
    marker: '3',
    title: 'He became the scientist of his own body',
    detail: 'Food experiments, research, and eventually a record that could hold the full story.',
  },
] as const

const gapColumns = [
  { label: 'Healthcare sees', items: ['Appointments', 'Tests', 'Prescriptions'] },
  { label: 'You live daily', items: ['Flare-ups', 'Food reactions', 'Forgotten questions'] },
] as const

export function FounderSection() {
  return (
    <section id="founder" className="section-pad bg-gs-card" aria-labelledby="founder-heading">
      <div className="container-narrow">
        <p className="text-xs font-medium text-gs-coral">Why Gutsphere exists</p>
        <h2 id="founder-heading" className="section-heading mt-3 max-w-3xl">
          Bimal&apos;s story — and maybe yours too
        </h2>
        <p className="body-lg mt-3 max-w-2xl sm:mt-4">
          If you&apos;ve ever left a visit feeling unheard, you&apos;re not alone. Gutsphere began
          with one patient learning to carry what the system couldn&apos;t hold.
        </p>

        <div className="mt-8 flex flex-wrap gap-2 sm:mt-10">
          {familiarMoments.map((moment) => (
            <span
              key={moment}
              className="inline-flex items-center gap-2 rounded-full border border-gs-border bg-gs-sand-light px-4 py-2 text-sm text-gs-text-secondary"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gs-coral" aria-hidden="true" />
              {moment}
            </span>
          ))}
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <div className="card-surface overflow-hidden p-5 sm:p-6 lg:sticky lg:top-24">
              <img
                src={BIMAL_PHOTO}
                alt="Bimal Maharjan, Founder and CEO of Gutsphere"
                width={320}
                height={320}
                loading="lazy"
                className="mx-auto h-44 w-44 rounded-2xl border border-gs-border object-cover object-top sm:h-52 sm:w-52"
              />
              <div className="mt-5 text-center">
                <p className="font-display text-lg font-semibold text-gs-text-primary">
                  Bimal Maharjan
                </p>
                <p className="text-sm text-gs-text-muted">Founder &amp; CEO, Gutsphere</p>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-gs-sand-light px-3 py-3 text-center">
                  <p className="font-display text-lg font-semibold text-gs-coral">Decades</p>
                  <p className="mt-1 text-xs text-gs-text-muted">Living with GI issues</p>
                </div>
                <div className="rounded-xl bg-gs-sand-light px-3 py-3 text-center">
                  <p className="font-display text-lg font-semibold text-gs-coral">Patient-built</p>
                  <p className="mt-1 text-xs text-gs-text-muted">Not a generic tracker</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 lg:col-span-8">
            <ol className="grid gap-4 sm:gap-5">
              {storyBeats.map((beat) => (
                <li key={beat.marker} className="card-surface flex gap-4 p-5 sm:p-6">
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gs-coral text-sm font-bold text-white"
                    aria-hidden="true"
                  >
                    {beat.marker}
                  </span>
                  <div>
                    <h3 className="font-display text-base font-semibold text-gs-text-primary sm:text-lg">
                      {beat.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-gs-text-secondary sm:text-base">
                      {beat.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="gs-insight-section rounded-2xl p-5 sm:p-6">
              <p className="font-display text-base font-semibold text-gs-text-primary sm:text-lg">
                What was missing?
              </p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {gapColumns.map((column) => (
                  <div key={column.label} className="rounded-xl bg-gs-card/80 px-4 py-4">
                    <p className="text-xs font-semibold uppercase tracking-widest text-gs-coral">
                      {column.label}
                    </p>
                    <ul className="mt-3 space-y-2">
                      {column.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-gs-text-secondary">
                          <span
                            className="h-1.5 w-1.5 shrink-0 rounded-full bg-gs-text-hint"
                            aria-hidden="true"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-gs-text-secondary sm:text-base">
                Gutsphere holds{' '}
                <strong className="font-semibold text-gs-text-primary">
                  the missing record between symptoms and answers
                </strong>{' '}
                — for everything that happens between visits.
              </p>
            </div>

            <figure className="rounded-2xl border border-gs-border bg-gs-sand-light p-5 sm:p-6">
              <blockquote className="font-display text-base font-medium leading-relaxed text-gs-text-primary sm:text-lg">
                &ldquo;I couldn&apos;t depend on the healthcare system alone. Gutsphere exists so
                you don&apos;t have to carry that whole story in your head.&rdquo;
              </blockquote>
              <figcaption className="mt-3 text-sm text-gs-text-muted">
                Bimal Maharjan, Founder of Gutsphere
              </figcaption>
            </figure>

            <Button variant="secondary" href={ABOUT_URL} className="w-full sm:w-auto">
              Read Bimal&apos;s full story &rarr;
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
