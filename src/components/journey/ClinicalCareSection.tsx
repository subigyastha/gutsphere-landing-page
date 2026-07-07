import { Button } from '../Button'
import { SIGNUP_URL } from '../../constants'
import { CLINICAL_CARE_CAPABILITIES } from './constants'
import { JourneyCapabilityList, JourneyMockShell } from './JourneyPillarLayout'
import { JourneyLandingSection } from './JourneyLandingSection'

const visitItems = [
  'Recent symptom trend',
  'Stool-change summary',
  'Flare-up timeline',
  'Treatment changes',
  'Test results added',
  'Questions to discuss',
] as const

interface ClinicalCareSectionProps {
  embedded?: boolean
}

export function ClinicalCareSection({ embedded = false }: ClinicalCareSectionProps) {
  return (
    <JourneyLandingSection
      embedded={embedded}
      id="clinical-navigation"
      eyebrow="Clinical navigation"
      heading='Clinical navigation for the moments between "something is wrong" and "what should I do next?"'
      headingId="journey-clinical-nav-heading"
      intro="Digestive health care can be confusing, especially when you are undiagnosed, waiting for appointments, trying new treatments, or managing changing symptoms. GutSphere helps you stay oriented before, during, and after clinical care."
      background="white"
      microcopy="Less scattered memory. More useful context."
      actions={
        <Button href={SIGNUP_URL} data-cta="primary" className={embedded ? 'w-full sm:w-auto' : ''}>
          Prepare for Your Next Visit
        </Button>
      }
    >
      <p className={`text-gs-text-secondary ${embedded ? 'mt-2 text-xs' : 'mt-4 text-base'}`}>
        When your appointment arrives, you should not have to explain weeks or months of symptoms from
        memory.
      </p>
      <div className={`grid gap-3 ${embedded ? 'mt-2 lg:grid-cols-2' : 'mt-8 gap-8 lg:grid-cols-2'}`}>
        <JourneyCapabilityList items={CLINICAL_CARE_CAPABILITIES} limit={embedded ? 3 : undefined} />
        <JourneyMockShell
          label="Visit Prep"
          footer={
            embedded ? undefined : (
              <p className="text-xs text-gs-text-muted">
                GutSphere helps you prepare for care conversations. It does not make medical decisions
                or replace clinical advice.
              </p>
            )
          }
        >
          <ul className="space-y-1.5" role="list">
            {visitItems.slice(0, embedded ? 4 : 6).map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 rounded-lg border border-gs-border/60 bg-gs-sand-light px-2.5 py-1.5 text-xs text-gs-text-secondary"
              >
                <span className="h-2.5 w-2.5 shrink-0 rounded border border-gs-coral/40" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </JourneyMockShell>
      </div>
    </JourneyLandingSection>
  )
}
