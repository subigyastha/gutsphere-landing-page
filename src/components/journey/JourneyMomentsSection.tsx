import { JOURNEY_MOMENTS } from './constants'
import { JourneyLandingSection } from './JourneyLandingSection'

interface JourneyMomentsSectionProps {
  embedded?: boolean
}

export function JourneyMomentsSection({ embedded = false }: JourneyMomentsSectionProps) {
  return (
    <JourneyLandingSection
      embedded={embedded}
      id="journey-moments"
      eyebrow="Journey moments"
      heading="Built for every stage of the digestive-health journey."
      headingId="journey-moments-heading"
      intro="Digestive health is not one moment. It is a journey through symptoms, appointments, treatment changes, flare-ups, and long-term management."
      background="white"
    >
      <div
        className={`grid gap-2 ${embedded ? 'mt-2 max-h-[42vh] overflow-y-auto sm:grid-cols-2' : 'mt-8 gap-4 sm:grid-cols-2 lg:grid-cols-3'}`}
      >
        {JOURNEY_MOMENTS.map((moment) => (
          <article
            key={moment.title}
            className="rounded-xl border border-gs-border bg-gs-sand-light p-3"
          >
            <p className="text-[10px] font-semibold uppercase tracking-wider text-gs-coral">
              {moment.title}
            </p>
            <h3 className="mt-1 font-display text-sm font-semibold text-gs-text-primary">
              {moment.heading}
            </h3>
            <p className="mt-1 text-xs leading-relaxed text-gs-text-secondary">{moment.copy}</p>
          </article>
        ))}
      </div>
    </JourneyLandingSection>
  )
}
