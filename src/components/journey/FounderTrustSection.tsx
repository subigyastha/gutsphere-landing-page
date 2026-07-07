import { Button } from '../Button'
import { ABOUT_URL } from '../../constants'
import { JourneyLandingSection } from './JourneyLandingSection'

interface FounderTrustSectionProps {
  embedded?: boolean
}

export function FounderTrustSection({ embedded = false }: FounderTrustSectionProps) {
  return (
    <JourneyLandingSection
      embedded={embedded}
      id="founder"
      eyebrow="Why we built this"
      heading="Built for people who are tired of explaining their gut story from memory."
      headingId="journey-founder-heading"
      intro="Digestive symptoms are personal, complex, and often difficult to summarize in a short appointment."
      background="sand"
    >
      <blockquote
        className={`rounded-xl border border-gs-border bg-gs-card leading-relaxed text-gs-text-primary ${embedded ? 'mt-2 p-3 text-xs' : 'mt-8 p-6 text-base sm:p-8'}`}
      >
        We are building GutSphere to complement clinical care, not replace it. The goal is to help
        patients bring clearer context to their care team and feel less alone while navigating
        digestive symptoms, treatment changes, and long-term gut health.
      </blockquote>
      <p className={`font-medium text-gs-text-muted ${embedded ? 'mt-2 text-xs' : 'mt-4 text-sm'}`}>
        Patient-sided. Medically responsible. Built for real digestive-health journeys.
      </p>
      <div className={embedded ? 'mt-2' : 'mt-6'}>
        <Button variant="secondary" href={ABOUT_URL} className={embedded ? 'w-full sm:w-auto' : ''}>
          Why We Built GutSphere
        </Button>
      </div>
    </JourneyLandingSection>
  )
}
