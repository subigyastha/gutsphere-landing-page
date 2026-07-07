import { Button } from '../Button'
import { ABOUT_URL } from '../../constants'

const TRUST_POINTS = [
  'Patient-sided',
  'Medically responsible',
  'Built for real digestive-health journeys',
  'Designed to support care conversations',
  'Clear about what it does and does not do',
] as const

export function FounderSection() {
  return (
    <div className="discovery-embedded-section" id="founder">
      <p className="text-xs leading-relaxed text-gs-text-secondary sm:text-sm">
        Digestive symptoms are personal, complex, and hard to summarize in a short appointment.
        GutSphere was built around a simple belief: patients need more than scattered logs — they
        need a guided system that helps them organize their journey, prepare for care, and stay
        supported between visits.
      </p>
      <blockquote className="mt-3 rounded-xl border border-gs-border bg-gs-card p-3 text-xs leading-relaxed text-gs-text-primary sm:text-sm">
        We built GutSphere to complement clinical care, not replace it. Our goal is to help people
        bring clearer context to their care team and feel less alone while navigating symptoms,
        treatment changes, flare-ups, and long-term digestive health.
      </blockquote>
      <ul className="mt-3 flex flex-wrap gap-2" role="list">
        {TRUST_POINTS.map((point) => (
          <li
            key={point}
            className="rounded-full border border-gs-border bg-gs-sand-light px-2.5 py-1 text-[10px] font-medium text-gs-text-secondary sm:text-xs"
          >
            {point}
          </li>
        ))}
      </ul>
      <div className="mt-3">
        <Button variant="secondary" href={ABOUT_URL} className="w-full sm:w-auto">
          Read Our Story
        </Button>
      </div>
    </div>
  )
}
