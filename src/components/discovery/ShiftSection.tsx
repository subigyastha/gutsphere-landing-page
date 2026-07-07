import { SHIFT_ROUTE, SHIFT_STEPS } from './constants'

export function ShiftSection() {
  return (
    <div className="discovery-embedded-section">
      <p className="text-xs leading-relaxed text-gs-text-secondary sm:text-sm">
        Recording what happened is only the beginning. GutSphere helps you organize what may matter,
        review patterns over time, and prepare clearer next steps.
      </p>
      <ul className="mt-3 space-y-2" role="list">
        {SHIFT_STEPS.map((step) => (
          <li
            key={step.label}
            className="rounded-xl border border-gs-border bg-gs-sand-light px-3 py-2.5"
          >
            <p className="text-sm font-medium text-gs-text-primary">{step.label}</p>
            <p className="mt-0.5 text-xs leading-relaxed text-gs-text-secondary">{step.detail}</p>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-sm font-semibold text-gs-text-primary">
        Each check-in helps build your digestive-health story.
      </p>
      <div className="discovery-shift-route mt-3">
        {SHIFT_ROUTE.map((step, i) => (
          <div key={step} className="discovery-shift-route-step">
            {i > 0 && <span className="discovery-shift-route-arrow" aria-hidden="true">→</span>}
            <span className="discovery-shift-route-label">{step}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
