import { GUIDANCE_CHIPS, GUIDE_CARDS } from './constants'

export function GuidanceSection() {
  return (
    <div className="discovery-embedded-section" id="guidance">
      <p className="text-xs leading-relaxed text-gs-text-secondary sm:text-sm">
        Digestive health is rarely one-dimensional. GutSphere gives you personalized support across
        self-care, clinical preparation, treatment support, and pattern review — available when
        questions come up.
      </p>
      <ul className="mt-3 grid gap-2 sm:grid-cols-2" role="list">
        {GUIDE_CARDS.map((guide) => (
          <li
            key={guide.title}
            className="rounded-xl border border-gs-border bg-gs-card px-3 py-2.5"
          >
            <p className="text-sm font-medium text-gs-text-primary">{guide.title}</p>
            <p className="mt-1 text-xs leading-relaxed text-gs-text-secondary">{guide.detail}</p>
          </li>
        ))}
      </ul>
      <ul className="discovery-value-chips mt-3" role="list">
        {GUIDANCE_CHIPS.map((chip) => (
          <li key={chip} className="discovery-value-chip">
            {chip}
          </li>
        ))}
      </ul>
    </div>
  )
}
