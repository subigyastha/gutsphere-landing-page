import { useState } from 'react'
import { SectionShell } from './SectionShell'
import {
  curatedContent,
  NEWSLETTER_ARCHIVE_URL,
  type ContentFormat,
  type CuratedContentItem,
} from '../../constants'

const formatAccent: Record<ContentFormat, string> = {
  guide: 'from-gs-coral/20 to-gs-sand-light',
  video: 'from-gs-text-primary/10 to-gs-sand-light',
  tip: 'from-gs-insight-bg to-gs-sand-light',
}

function FormatIcon({ format }: { format: ContentFormat }) {
  if (format === 'tip') {
    return (
      <svg className="h-8 w-8 text-gs-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  }
  return (
    <svg className="h-10 w-10 text-gs-coral" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8 5v14l11-7L8 5z" />
    </svg>
  )
}

function ContentThumbnail({ item }: { item: CuratedContentItem }) {
  const [failed, setFailed] = useState(false)

  if (item.thumbnail && !failed) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-gs-sand-light">
        <img
          src={item.thumbnail}
          alt=""
          className="h-full w-full object-cover"
          onError={() => setFailed(true)}
        />
        {item.format !== 'tip' && (
          <span className="absolute inset-0 flex items-center justify-center bg-black/10">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow-sm">
              <svg className="ml-0.5 h-5 w-5 text-gs-coral" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8 5v14l11-7L8 5z" />
              </svg>
            </span>
          </span>
        )}
      </div>
    )
  }

  return (
    <div
      className={`flex aspect-video w-full items-center justify-center rounded-xl bg-gradient-to-br ${formatAccent[item.format]}`}
    >
      <FormatIcon format={item.format} />
    </div>
  )
}

function ContentCard({ item, featured = false }: { item: CuratedContentItem; featured?: boolean }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex shrink-0 flex-col overflow-hidden rounded-2xl border border-gs-border bg-gs-card shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] ${
        featured ? 'w-full lg:flex-row lg:items-stretch' : 'w-[280px] sm:w-[300px]'
      }`}
    >
      <div className={featured ? 'lg:w-1/2 lg:shrink-0' : ''}>
        <div className={featured ? 'p-4 pb-0 lg:p-5 lg:pb-5' : 'p-4 pb-0'}>
          <ContentThumbnail item={item} />
        </div>
      </div>
      <div className={`flex flex-col justify-center p-5 ${featured ? 'lg:w-1/2 lg:py-8 lg:pr-8' : ''}`}>
        <p className="text-sm font-medium text-gs-text-muted">{item.duration}</p>
        <h3
          className={`mt-1 font-display font-semibold leading-snug text-gs-text-primary group-hover:text-gs-coral ${
            featured ? 'text-xl sm:text-2xl' : 'text-lg'
          }`}
        >
          {item.title}
        </h3>
        {featured && (
          <p className="mt-3 clarity-body line-clamp-2">
            Practical, evidence-based answers — free to watch or read.
          </p>
        )}
        <span className="mt-4 text-sm font-semibold text-gs-coral">
          {featured ? 'Open guide' : 'Open'} &rarr;
        </span>
      </div>
    </a>
  )
}

export function ContentLibrarySection() {
  const [featured, ...rest] = curatedContent

  return (
    <SectionShell id="content" background="sand-light" ariaLabelledBy="content-heading">
      <h2 id="content-heading" className="section-heading text-center">
        Free guides &amp; videos
      </h2>
      <p className="body-lg mx-auto mt-4 max-w-2xl text-center">
        Practical answers about symptoms, stool changes, and doctor visits.
      </p>

      <div className="mt-10">
        <ContentCard item={featured} featured />
      </div>

      <div className="mt-8 -mx-4 overflow-x-auto px-4 pb-2 sm:-mx-8 sm:px-8 lg:mx-0 lg:px-0">
        <div className="flex gap-4 lg:grid lg:grid-cols-3 lg:gap-5">
          {rest.map((item) => (
            <ContentCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      <p className="mt-10 text-center">
        <a
          href={NEWSLETTER_ARCHIVE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-semibold text-gs-coral hover:underline"
        >
          Explore all guides &rarr;
        </a>
      </p>
    </SectionShell>
  )
}
