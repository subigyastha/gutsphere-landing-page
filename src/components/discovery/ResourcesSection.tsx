import { RESOURCE_PLACEHOLDERS } from './constants'

export function ResourcesSection() {
  return (
    <div className="discovery-embedded-section" id="resources">
      <p className="text-xs leading-relaxed text-gs-text-secondary sm:text-sm">
        Explore practical guides for understanding symptoms, preparing for visits, managing flare
        days, and organizing your digestive-health journey.
      </p>
      <ul className="mt-3 grid gap-2 sm:grid-cols-3" role="list">
        {RESOURCE_PLACEHOLDERS.map((resource) => (
          <li
            key={resource.title}
            className="rounded-xl border border-dashed border-gs-border bg-gs-sand-light px-3 py-3"
          >
            <p className="text-sm font-medium text-gs-text-primary">{resource.title}</p>
            <p className="mt-1 text-xs leading-relaxed text-gs-text-muted">{resource.detail}</p>
            <p className="mt-2 text-[10px] font-medium uppercase tracking-wide text-gs-text-hint">
              Coming soon
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
