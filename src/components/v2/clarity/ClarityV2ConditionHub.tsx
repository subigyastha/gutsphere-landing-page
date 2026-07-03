import { Link } from 'react-router-dom'
import { SectionShell } from '../../clarity/SectionShell'
import { ConditionIcon } from '../ConditionIcon'
import { SIGNUP_URL, conditionHub, setConditionFrom } from '../../../constants'

const featuredSlugs = ['ibs', 'bloating', 'gerd'] as const

export function ClarityV2ConditionHub() {
  const featured = conditionHub.filter((item) =>
    (featuredSlugs as readonly string[]).includes(item.slug),
  )
  const more = conditionHub.filter(
    (item) => !(featuredSlugs as readonly string[]).includes(item.slug),
  )

  return (
    <SectionShell
      id="conditions"
      background="card"
      ariaLabelledBy="clarity-v2-conditions-heading"
      className="!pt-8 sm:!pt-16"
    >
      <h2 id="clarity-v2-conditions-heading" className="section-heading max-w-2xl">
        What feels closest to you right now?
      </h2>
      <p className="body-lg mt-3 max-w-2xl sm:mt-4">
        You do not need a diagnosis to start. Tap what sounds familiar.
      </p>

      <div className="mt-8 grid gap-3 sm:mt-12 sm:grid-cols-3 sm:gap-4">
        {featured.map((item) => (
          <Link
            key={item.slug}
            to={`/conditions/${item.slug}`}
            onClick={() => setConditionFrom('style-3')}
            className="card-surface group flex min-h-[88px] flex-col justify-center p-5 transition-shadow active:shadow-[0_4px_20px_rgba(239,83,80,0.12)] sm:min-h-[120px] sm:p-6 sm:hover:shadow-[0_4px_20px_rgba(239,83,80,0.12)]"
          >
            <span
              className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-gs-sand-light text-gs-text-secondary transition-colors group-hover:text-gs-coral sm:h-12 sm:w-12"
              aria-hidden="true"
            >
              <ConditionIcon name={item.icon} className="h-6 w-6" />
            </span>
            <p className="font-display text-lg font-semibold text-gs-text-primary sm:text-xl">
              {item.label}
            </p>
            <p className="mt-1 clarity-body text-base sm:text-lg">{item.blurb}</p>
          </Link>
        ))}
      </div>

      <details id="all-conditions" className="group mt-8 sm:mt-10">
        <summary className="flex min-h-12 cursor-pointer list-none items-center text-base font-medium text-gs-coral hover:underline sm:text-lg [&::-webkit-details-marker]:hidden">
          See all conditions
          <span
            className="ml-2 inline-block transition-transform group-open:rotate-180"
            aria-hidden="true"
          >
            &#9662;
          </span>
        </summary>
        <div className="mt-4 grid gap-2 sm:mt-6 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3">
          {more.map((item) => (
            <Link
              key={item.slug}
              to={`/conditions/${item.slug}`}
              onClick={() => setConditionFrom('style-3')}
              className="flex min-h-12 items-center gap-3 rounded-xl border border-gs-border bg-gs-sand-light px-4 py-3 text-base text-gs-text-primary active:border-gs-coral sm:hover:border-gs-coral"
            >
              <ConditionIcon name={item.icon} className="h-5 w-5 shrink-0 text-gs-text-secondary" />
              {item.label}
            </Link>
          ))}
        </div>
      </details>

      <p className="mt-6 sm:mt-8">
        <a
          href={SIGNUP_URL}
          className="inline-flex min-h-12 items-center text-base font-medium text-gs-coral hover:underline sm:text-lg"
        >
          Not sure? Start with one symptom anyway &rarr;
        </a>
      </p>
    </SectionShell>
  )
}
