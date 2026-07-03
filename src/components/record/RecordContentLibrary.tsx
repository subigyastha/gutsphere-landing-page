import { curatedContent, prepareContent, NEWSLETTER_ARCHIVE_URL, SIGNUP_URL } from '../../constants'

const guideIds = ['stool-color', 'gut-inflamed', 'yellow-poop'] as const
const videoId = 'rectal-signal'

export function RecordContentLibrary() {
  const guides = curatedContent.filter((item) =>
    (guideIds as readonly string[]).includes(item.id),
  )
  const video = curatedContent.find((item) => item.id === videoId)

  return (
    <section id="content" className="section-pad bg-gs-sand-light" aria-labelledby="record-content-heading">
      <div className="container-narrow">
        <p className="text-xs font-medium text-gs-coral">Free guides &amp; videos</p>
        <h2 id="record-content-heading" className="section-heading mt-3 max-w-2xl">
          Learn what to watch for — then track it in one place
        </h2>
        <p className="body-lg mt-3 max-w-2xl sm:mt-4">
          Pattern-finding starts with knowing what matters. Read trusted guides on stool changes,
          inflammation, and triggers — then log what matches your body in Gutsphere.
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
              <p className="text-sm font-medium text-gs-coral">For your next visit</p>
              <h3 className="mt-2 font-display text-lg font-semibold text-gs-text-primary group-hover:text-gs-coral sm:text-2xl">
                {prepareContent.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gs-text-secondary sm:mt-3 sm:text-base">
                Visit-ready questions and prep checklists — free in the archive.
              </p>
              <span className="mt-4 inline-flex min-h-12 items-center text-sm font-semibold text-gs-coral">
                Open archive &rarr;
              </span>
            </div>
          </a>
        </div>

        <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4 sm:gap-4">
          {guides.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${item.title} — opens in new tab`}
              className="card-surface group flex min-h-[120px] flex-col p-5 transition-shadow active:shadow-[0_4px_20px_rgba(0,0,0,0.08)] sm:hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
            >
              <p className="text-xs font-medium text-gs-text-muted">Guide &middot; {item.duration}</p>
              <h3 className="mt-2 font-display text-base font-semibold text-gs-text-primary group-hover:text-gs-coral sm:text-lg">
                {item.title}
              </h3>
              <span className="mt-auto inline-flex min-h-12 items-center pt-3 text-sm font-semibold text-gs-coral">
                Read guide &rarr;
              </span>
            </a>
          ))}

          {video && (
            <a
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${video.title} — opens in new tab`}
              className="card-surface group flex min-h-[120px] flex-col overflow-hidden transition-shadow active:shadow-[0_4px_20px_rgba(0,0,0,0.08)] sm:hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
            >
              {video.thumbnail && (
                <div className="relative -mx-5 -mt-5 mb-3 aspect-video overflow-hidden bg-gs-sand">
                  <img
                    src={video.thumbnail}
                    alt=""
                    className="h-full w-full object-cover opacity-90"
                    loading="lazy"
                  />
                  <span className="absolute bottom-2 left-2 rounded-md bg-gs-text-primary/80 px-2 py-0.5 text-xs font-medium text-white">
                    Video &middot; {video.duration}
                  </span>
                </div>
              )}
              <h3 className="font-display text-base font-semibold text-gs-text-primary group-hover:text-gs-coral sm:text-lg">
                {video.title}
              </h3>
              <span className="mt-auto inline-flex min-h-12 items-center pt-3 text-sm font-semibold text-gs-coral">
                Watch video &rarr;
              </span>
            </a>
          )}
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
      </div>
    </section>
  )
}
