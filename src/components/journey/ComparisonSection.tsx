import { JourneyLandingSection } from './JourneyLandingSection'

const trackerItems = [
  'Record symptoms',
  'Store logs',
  'Show dashboards',
  'Track isolated habits',
  'End at data entry',
] as const

const gutsphereItems = [
  'Guides digestive-health check-ins',
  'Builds a digestive-health timeline',
  'Helps prepare for care conversations',
  'Connects symptoms, stool, food, stress, sleep, medication, and flare-ups',
  'Supports self-care, clinical navigation, and clinical intelligence',
] as const

interface ComparisonSectionProps {
  embedded?: boolean
}

export function ComparisonSection({ embedded = false }: ComparisonSectionProps) {
  return (
    <JourneyLandingSection
      embedded={embedded}
      id="differentiation"
      eyebrow="Why GutSphere"
      heading="GutSphere is not another symptom tracker."
      headingId="journey-compare-heading"
      intro="Most trackers record what happened. GutSphere helps you move through the full digestive-health journey."
      background="white"
    >
      <p className={`font-semibold text-gs-text-primary ${embedded ? 'mt-2 text-sm' : 'mt-4 text-lg'}`}>
        Tracking is where GutSphere begins. Guidance is where it becomes useful.
      </p>
      <div
        className={`journey-compact-split ${embedded ? 'mt-2' : 'mt-8 grid gap-6 lg:grid-cols-2'}`}
      >
        <div className="journey-compact-mock">
          <div className="journey-compact-mock-header">Generic trackers</div>
          <ul className="journey-compact-mock-body journey-compact-list text-xs" role="list">
            {trackerItems.map((item) => (
              <li key={item} className="journey-compact-list-item">
                <span className="text-gs-text-muted" aria-hidden="true">
                  —
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="journey-compact-mock border-gs-coral/25 ring-1 ring-gs-coral/15">
          <div className="journey-compact-mock-header bg-gs-insight-bg text-gs-coral">GutSphere</div>
          <ul className="journey-compact-mock-body journey-compact-list text-xs" role="list">
            {gutsphereItems.map((item) => (
              <li key={item} className="journey-compact-list-item text-gs-text-primary">
                <span className="text-gs-green" aria-hidden="true">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </JourneyLandingSection>
  )
}
