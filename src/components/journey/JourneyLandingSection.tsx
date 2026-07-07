import type { ReactNode } from 'react'

type JourneyLandingSectionProps = {
  id?: string
  eyebrow?: string
  heading: string
  headingId: string
  intro?: string
  microcopy?: string
  children?: ReactNode
  actions?: ReactNode
  className?: string
  background?: 'white' | 'sand' | 'sand-light'
  embedded?: boolean
}

const bgMap = {
  white: 'bg-white',
  sand: 'bg-gs-sand',
  'sand-light': 'bg-gs-sand-light',
}

export function JourneyLandingSection({
  id,
  eyebrow,
  heading,
  headingId,
  intro,
  microcopy,
  children,
  actions,
  className = '',
  background = 'white',
  embedded = false,
}: JourneyLandingSectionProps) {
  if (embedded) {
    return (
      <div className={`journey-embedded-section ${className}`}>
        {intro && (
          <p className="text-xs leading-relaxed text-gs-text-secondary sm:text-sm">{intro}</p>
        )}
        {children}
        {actions && <div className="mt-3">{actions}</div>}
        {microcopy && (
          <p className="mt-3 text-xs font-medium text-gs-coral sm:text-sm">{microcopy}</p>
        )}
      </div>
    )
  }

  return (
    <section
      id={id}
      className={`section-pad scroll-mt-28 ${bgMap[background]} ${className}`}
      aria-labelledby={headingId}
    >
      <div className="container-narrow">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-widest text-gs-coral">{eyebrow}</p>
        )}
        <h2
          id={headingId}
          className="section-heading mt-3 max-w-3xl font-display font-semibold text-gs-text-primary"
        >
          {heading}
        </h2>
        {intro && (
          <p className="body-lg mt-4 max-w-2xl leading-relaxed text-gs-text-secondary">{intro}</p>
        )}
        {children}
        {actions && <div className="mt-8">{actions}</div>}
        {microcopy && (
          <p className="mt-6 text-sm font-medium text-gs-coral">{microcopy}</p>
        )}
      </div>
    </section>
  )
}
