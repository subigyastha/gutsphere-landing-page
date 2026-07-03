import { SectionShell } from '../../clarity/SectionShell'
import { curatedContent, prepareContent, NEWSLETTER_ARCHIVE_URL, SIGNUP_URL } from '../../../constants'

export function ClarityV2ContentLibrary() {
  const guides = curatedContent.filter((item) => item.format === 'guide').slice(0, 3)

  return (
    <SectionShell id="content" background="sand-light" ariaLabelledBy="clarity-v2-content-heading">
      <h2 id="clarity-v2-content-heading" className="section-heading max-w-2xl">
        Free guides &amp; videos
      </h2>
      <p className="body-lg mt-3 max-w-2xl sm:mt-4">
        Been googling symptoms? Start with trusted guides — then track what you learn in
        Gutsphere to see if it matches your body.
      </p>

      <div className="mt-8 sm:mt-10">
        <a
          href={prepareContent.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${prepareContent.title} — opens in new tab`}
          className="card-surface group flex flex-col overflow-hidden transition-shadow active:shadow-[0_4px_20px_rgba(0,0,0,0.08)] sm:hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] lg:flex-row lg:items-stretch"
        >
          <div className="flex items-center justify-center bg-gs-insight-bg p-6 sm:p-10 lg:w-1/3">
            <span className="rounded-full bg-gs-coral px-4 py-2 text-sm font-semibold text-white">
              Prepare
            </span>
          </div>
          <div className="flex flex-col justify-center p-5 sm:p-6 lg:w-2/3 lg:py-8 lg:pr-8">
            <p className="text-sm font-medium text-gs-coral">Featured for your next visit</p>
            <h3 className="mt-2 font-display text-lg font-semibold text-gs-text-primary group-hover:text-gs-coral sm:text-2xl">
              {prepareContent.title}
            </h3>
            <p className="mt-2 clarity-body text-base sm:mt-3 sm:text-lg">
              Colonoscopy prep, questions for your GI, and visit-ready checklists — free in the
              archive.
            </p>
            <span className="mt-4 inline-flex min-h-12 items-center text-sm font-semibold text-gs-coral">
              Open archive &rarr;
            </span>
          </div>
        </a>
      </div>

      <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-3 sm:gap-4">
        {guides.map((item) => (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${item.title} — opens in new tab`}
            className="card-surface group flex min-h-[120px] flex-col p-5 transition-shadow active:shadow-[0_4px_20px_rgba(0,0,0,0.08)] sm:hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
          >
            <p className="text-sm text-gs-text-muted">{item.duration}</p>
            <h3 className="mt-2 font-display text-base font-semibold text-gs-text-primary group-hover:text-gs-coral sm:text-lg">
              {item.title}
            </h3>
            <span className="mt-auto inline-flex min-h-12 items-center pt-3 text-sm font-semibold text-gs-coral">
              Read guide &rarr;
            </span>
          </a>
        ))}
      </div>

      <p className="mt-6 sm:mt-8">
        <a
          href={NEWSLETTER_ARCHIVE_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Explore all guides — opens in new tab"
          className="inline-flex min-h-12 items-center text-base font-medium text-gs-text-secondary hover:text-gs-coral"
        >
          Explore all guides &rarr;
        </a>
      </p>

      <p className="mt-2">
        <a
          href={SIGNUP_URL}
          className="inline-flex min-h-12 items-center text-base font-semibold text-gs-coral hover:underline sm:text-lg"
          data-cta="primary"
        >
          Track this in Gutsphere &rarr;
        </a>
      </p>
    </SectionShell>
  )
}
