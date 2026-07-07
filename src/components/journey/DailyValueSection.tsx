import { LANDING_VALUE_CARDS } from './constants'
import { JourneyLandingSection } from './JourneyLandingSection'

interface DailyValueSectionProps {
  embedded?: boolean
}

export function DailyValueSection({ embedded = false }: DailyValueSectionProps) {
  return (
    <JourneyLandingSection
      embedded={embedded}
      id="daily-value"
      eyebrow="Daily value"
      heading="Every check-in should move you one step forward."
      headingId="journey-daily-value-heading"
      intro="GutSphere is designed so daily tracking does not feel like empty data entry."
      background="sand-light"
      microcopy="Small check-ins. Clearer context. Better continuity between visits."
    >
      <div
        className={`grid gap-2 ${embedded ? 'mt-2 sm:grid-cols-2' : 'mt-8 gap-4 sm:grid-cols-2 lg:grid-cols-3'}`}
      >
        {LANDING_VALUE_CARDS.map((item) => (
          <article key={item.label} className="rounded-xl border border-gs-border bg-gs-card p-3">
            <span className="inline-flex rounded-full bg-gs-coral/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-gs-coral">
              {item.label}
            </span>
            <p className="mt-2 text-xs leading-relaxed text-gs-text-secondary">{item.text}</p>
          </article>
        ))}
      </div>
    </JourneyLandingSection>
  )
}
