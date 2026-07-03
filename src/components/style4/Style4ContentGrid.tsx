import { Style4Section } from './Style4Section'
import { Style4Reveal } from './Style4Reveal'
import { curatedContent, prepareContent, NEWSLETTER_ARCHIVE_URL, SIGNUP_URL } from '../../constants'

export function Style4ContentGrid() {
  const guides = curatedContent.filter((item) => item.format === 'guide').slice(0, 3)

  return (
    <Style4Section
      id="content"
      eyebrow="Resources"
      heading="Free guides &amp; videos"
      headingId="style4-content-heading"
      intro="Been googling symptoms? Start with trusted guides — then track what you learn in Gutsphere to see if it matches your body."
      background="sand-light"
    >
      <Style4Reveal>
        <a
          href={prepareContent.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${prepareContent.title} — opens in new tab`}
          className="style4-card style4-card-interactive group mt-8 flex flex-col overflow-hidden sm:mt-10 lg:flex-row lg:items-stretch"
        >
          <div className="flex items-center justify-center bg-gradient-to-br from-gs-insight-bg to-gs-coral/10 p-6 sm:p-10 lg:w-1/3">
            <span className="rounded-full bg-gs-coral px-4 py-2 text-sm font-semibold text-white">
              Prepare
            </span>
          </div>
          <div className="flex flex-col justify-center p-5 sm:p-6 lg:w-2/3 lg:py-8 lg:pr-8">
            <p className="text-sm font-medium text-gs-coral">Featured for your next visit</p>
            <h3 className="mt-2 font-display text-lg font-semibold text-gs-text-primary group-hover:text-gs-coral sm:text-2xl">
              {prepareContent.title}
            </h3>
            <p className="mt-2 text-sm text-gs-text-secondary sm:text-base">
              Colonoscopy prep, questions for your GI, and visit-ready checklists — free in the
              archive.
            </p>
            <span className="mt-4 inline-flex min-h-12 items-center text-sm font-semibold text-gs-coral">
              Open archive &rarr;
            </span>
          </div>
        </a>
      </Style4Reveal>

      <div className="mt-6 grid style4-cell-gap sm:mt-8 sm:grid-cols-3">
        {guides.map((item, index) => (
          <Style4Reveal key={item.id} delay={index * 60} as="article">
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${item.title} — opens in new tab`}
              className="style4-card style4-card-interactive group flex min-h-[120px] flex-col p-5"
            >
              <p className="text-sm text-gs-text-muted">{item.duration}</p>
              <h3 className="mt-2 font-display text-base font-semibold text-gs-text-primary group-hover:text-gs-coral sm:text-lg">
                {item.title}
              </h3>
              <span className="mt-auto inline-flex min-h-12 items-center pt-3 text-sm font-semibold text-gs-coral">
                Read guide &rarr;
              </span>
            </a>
          </Style4Reveal>
        ))}
      </div>

      <Style4Reveal delay={80}>
        <p className="mt-6 sm:mt-8">
          <a
            href={NEWSLETTER_ARCHIVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center text-base font-medium text-gs-text-secondary transition-colors hover:text-gs-coral"
          >
            Explore all guides &rarr;
          </a>
        </p>
        <p className="mt-2">
          <a
            href={SIGNUP_URL}
            className="inline-flex min-h-12 items-center text-base font-semibold text-gs-coral hover:underline"
            data-cta="primary"
          >
            Track this in Gutsphere &rarr;
          </a>
        </p>
      </Style4Reveal>
    </Style4Section>
  )
}
