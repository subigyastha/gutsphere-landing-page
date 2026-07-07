import { SHIFT_PAIRS } from './constants'
import { JourneyLandingSection } from './JourneyLandingSection'

interface ShiftSectionProps {
  embedded?: boolean
}

export function ShiftSection({ embedded = false }: ShiftSectionProps) {
  return (
    <JourneyLandingSection
      embedded={embedded}
      id="the-shift"
      eyebrow="The shift"
      heading="From guessing alone to moving with a copilot."
      headingId="journey-shift-heading"
      intro="Most tools stop at logging. GutSphere goes further. It helps you move from scattered daily records to guided self-care, clearer clinical navigation, and deeper digestive-health intelligence over time."
      background="white"
    >
      <ul className={`space-y-2 ${embedded ? 'mt-2 max-h-[42vh] overflow-y-auto' : 'mt-8 space-y-4'}`} role="list">
        {SHIFT_PAIRS.map((pair) => (
          <li
            key={pair.from}
            className={`rounded-xl border border-gs-border bg-gs-sand-light ${embedded ? 'p-3' : 'rounded-2xl p-5 sm:p-6'}`}
          >
            <p className="text-xs text-gs-text-muted sm:text-sm">&ldquo;{pair.from}&rdquo;</p>
            <p className="mt-1 font-display text-sm font-semibold text-gs-text-primary sm:text-base">
              &ldquo;{pair.to}&rdquo;
            </p>
          </li>
        ))}
      </ul>
      <p className={`font-semibold text-gs-text-primary ${embedded ? 'mt-2 text-sm' : 'mt-8 text-lg'}`}>
        Tracking is the input. Guidance is the product.
      </p>
    </JourneyLandingSection>
  )
}
