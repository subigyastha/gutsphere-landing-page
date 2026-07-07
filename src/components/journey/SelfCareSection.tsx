import { Button } from '../Button'
import { SIGNUP_URL } from '../../constants'
import { SELF_CARE_CAPABILITIES } from './constants'
import { JourneyCapabilityList, JourneyMockShell } from './JourneyPillarLayout'
import { JourneyLandingSection } from './JourneyLandingSection'

const checkinFields = [
  'Symptoms today',
  'Bowel movement / stool changes',
  'Food or possible reaction',
  'Stress and sleep',
  'Medication or supplement taken',
  'Notes',
] as const

interface SelfCareSectionProps {
  embedded?: boolean
}

export function SelfCareSection({ embedded = false }: SelfCareSectionProps) {
  const cta = (
    <Button href={SIGNUP_URL} data-cta="primary" className={embedded ? 'w-full sm:w-auto' : ''}>
      Start Your Gut Check-In
    </Button>
  )

  return (
    <JourneyLandingSection
      embedded={embedded}
      id="self-care"
      eyebrow="Self-care"
      heading="Self-care that starts with what happened today."
      headingId="journey-self-care-heading"
      intro="Digestive health changes in small daily moments: meals, stress, sleep, stool changes, medications, symptoms, movement, and routines. GutSphere helps you capture those signals without turning your life into a spreadsheet."
      background="sand"
      microcopy="Your first check-in is the first signal."
      actions={cta}
    >
      <p className={`text-gs-text-secondary ${embedded ? 'mt-2 text-xs' : 'mt-4 text-base'}`}>
        You do not need to remember everything perfectly. Start with one useful check-in and let your
        digestive-health story build over time.
      </p>
      <div
        className={`grid gap-3 ${embedded ? 'mt-2 lg:grid-cols-2' : 'mt-8 gap-8 lg:grid-cols-2 lg:items-start'}`}
      >
        <JourneyCapabilityList items={SELF_CARE_CAPABILITIES} limit={embedded ? 3 : undefined} />
        <JourneyMockShell label="Today's Gut Check-In">
          <div className="space-y-1.5">
            {checkinFields.slice(0, embedded ? 4 : 6).map((field) => (
              <div
                key={field}
                className="flex items-center justify-between rounded-lg border border-gs-border bg-gs-card px-2.5 py-1.5"
              >
                <span className="text-xs text-gs-text-secondary">{field}</span>
                <span className="rounded-full bg-gs-green/10 px-1.5 py-0.5 text-[10px] font-medium text-gs-green">
                  Log
                </span>
              </div>
            ))}
          </div>
        </JourneyMockShell>
      </div>
    </JourneyLandingSection>
  )
}
