import { JourneyLandingSection } from './JourneyLandingSection'

const supportingPoints = [
  'Symptoms change day by day',
  'Food reactions are hard to confirm',
  'Stool changes are difficult to summarize',
  'Flare-ups seem to come out of nowhere',
  'Medication and supplement changes are hard to evaluate',
  'Doctor visits feel too short for the full story',
  'Test results, notes, and symptoms live in different places',
] as const

interface InvestigationSectionProps {
  embedded?: boolean
}

export function InvestigationSection({ embedded = false }: InvestigationSectionProps) {
  return (
    <JourneyLandingSection
      embedded={embedded}
      id="the-problem"
      eyebrow="The problem"
      heading="Digestive health can feel like a full-time investigation."
      headingId="journey-problem-heading"
      intro="You are trying to remember what you ate, when symptoms started, how your stool changed, whether stress or sleep played a role, what medication you took, what your test results said, and what to ask your doctor next."
      background="sand-light"
      microcopy="GutSphere helps turn scattered digestive clues into a clearer journey."
    >
      <p className={`text-sm font-medium text-gs-text-primary ${embedded ? 'mt-2' : 'mt-4 text-base'}`}>
        The problem is not that you are not paying attention. The clues are scattered.
      </p>
      <ul
        className={`grid gap-2 ${embedded ? 'mt-2 max-h-[38vh] overflow-y-auto' : 'mt-6 gap-3 sm:grid-cols-2'}`}
        role="list"
      >
        {supportingPoints.map((point) => (
          <li
            key={point}
            className="flex gap-2 rounded-xl border border-gs-border bg-gs-card px-3 py-2 text-xs leading-relaxed text-gs-text-secondary sm:text-sm"
          >
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gs-coral" aria-hidden="true" />
            {point}
          </li>
        ))}
      </ul>
    </JourneyLandingSection>
  )
}
