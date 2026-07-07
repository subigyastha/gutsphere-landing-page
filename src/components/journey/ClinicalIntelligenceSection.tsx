import { Button } from '../Button'
import { SIGNUP_URL } from '../../constants'
import { CLINICAL_INTELLIGENCE_CAPABILITIES } from './constants'
import { JourneyCapabilityList, JourneyMockShell } from './JourneyPillarLayout'
import { JourneyLandingSection } from './JourneyLandingSection'

const flowSteps = [
  'Daily check-ins',
  'Timeline',
  'Pattern review',
  'Visit summary',
  'Treatment support',
] as const

interface ClinicalIntelligenceSectionProps {
  embedded?: boolean
}

export function ClinicalIntelligenceSection({ embedded = false }: ClinicalIntelligenceSectionProps) {
  return (
    <JourneyLandingSection
      embedded={embedded}
      id="clinical-intelligence"
      eyebrow="Clinical intelligence"
      heading="Clinical intelligence built from your digestive-health journey."
      headingId="journey-clinical-intel-heading"
      intro="GutSphere helps turn daily check-ins, flare-up notes, treatment changes, and care records into a more useful digestive-health picture over time."
      background="sand-light"
      microcopy="From scattered clues to clearer clinical context."
      actions={
        <Button href={SIGNUP_URL} data-cta="primary" className={embedded ? 'w-full sm:w-auto' : ''}>
          See Your Gut Patterns
        </Button>
      }
    >
      <div className={`grid gap-3 ${embedded ? 'mt-2 lg:grid-cols-2' : 'mt-8 gap-8 lg:grid-cols-2'}`}>
        <JourneyCapabilityList
          items={CLINICAL_INTELLIGENCE_CAPABILITIES}
          limit={embedded ? 3 : undefined}
        />
        <JourneyMockShell label="Pattern Intelligence">
          <div className="flex flex-wrap gap-1.5">
            {flowSteps.map((step) => (
              <span
                key={step}
                className="rounded-full border border-gs-coral/25 bg-gs-coral/10 px-2 py-0.5 text-[10px] font-medium text-gs-coral"
              >
                {step}
              </span>
            ))}
          </div>
          <p className="mt-2 rounded-lg border border-gs-border bg-gs-card px-2.5 py-2 text-xs text-gs-text-primary">
            Bloating may be connected to late dinners — worth reviewing
          </p>
        </JourneyMockShell>
      </div>
    </JourneyLandingSection>
  )
}
