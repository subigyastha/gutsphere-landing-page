import { SectionShell } from './SectionShell'

const withoutItems = [
  { label: 'Scattered tools', detail: 'Notes, apps, and memory — nothing connects' },
  { label: 'You give up', detail: 'Tracking feels like too much work' },
  { label: 'Longer limbo', detail: 'Harder to get answers or a clear plan' },
]

const withItems = [
  { label: 'One record', detail: 'Symptoms, food, meds — in one place' },
  { label: 'Clear next step', detail: 'Know what to try or watch today' },
  { label: 'Better questions', detail: 'Walk into visits prepared' },
]

export function StakesCompareSection() {
  return (
    <SectionShell background="sand-light" ariaLabelledBy="stakes-heading">
      <h2 id="stakes-heading" className="section-heading text-center">
        Life without a record vs. with Gutsphere
      </h2>
      <p className="body-lg mx-auto mt-4 max-w-2xl text-center">
        The difference is calm, clarity, and action — not more guesswork.
      </p>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <div className="card-surface border-gs-border p-6 sm:p-8">
          <p className="mb-6 text-sm font-semibold tracking-wide text-gs-text-muted">
            Without Gutsphere
          </p>
          <ul className="space-y-5">
            {withoutItems.map((item) => (
              <li key={item.label} className="flex gap-4">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gs-sand text-lg text-gs-text-muted"
                  aria-hidden="true"
                >
                  &times;
                </span>
                <div>
                  <p className="text-lg font-semibold text-gs-text-primary">{item.label}</p>
                  <p className="mt-1 clarity-body">{item.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="card-surface border-gs-insight-border bg-gs-insight-bg p-6 sm:p-8">
          <p className="mb-6 text-sm font-semibold uppercase tracking-widest text-gs-coral">
            With Gutsphere
          </p>
          <ul className="space-y-5">
            {withItems.map((item) => (
              <li key={item.label} className="flex gap-4">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gs-coral text-lg font-bold text-white"
                  aria-hidden="true"
                >
                  &#10003;
                </span>
                <div>
                  <p className="text-lg font-semibold text-gs-text-primary">{item.label}</p>
                  <p className="mt-1 clarity-body">{item.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionShell>
  )
}
