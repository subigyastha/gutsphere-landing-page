import { Style4Section } from './Style4Section'
import { Style4Card } from './Style4Card'
import { Style4Reveal } from './Style4Reveal'

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

export function Style4StakesCards() {
  return (
    <Style4Section
      eyebrow="Overview"
      heading="Life without a record vs. with Gutsphere"
      headingId="style4-stakes-heading"
      intro="The difference is calm, clarity, and action — not more guesswork."
      background="sand-light"
    >
      <div className="mt-8 grid style4-cell-gap sm:mt-10 lg:grid-cols-2">
        <Style4Reveal>
          <Style4Card variant="muted" interactive className="h-full p-6 sm:p-8">
          <p className="mb-6 text-sm font-medium text-gs-text-muted">Without Gutsphere</p>
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
                  <p className="mt-1 text-sm text-gs-text-secondary sm:text-base">{item.detail}</p>
                </div>
              </li>
            ))}
          </ul>
          </Style4Card>
        </Style4Reveal>

        <Style4Reveal delay={100}>
          <Style4Card variant="insight" interactive className="h-full p-6 sm:p-8">
          <p className="mb-6 text-sm font-medium text-gs-coral">With Gutsphere</p>
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
                  <p className="mt-1 text-sm text-gs-text-secondary sm:text-base">{item.detail}</p>
                </div>
              </li>
            ))}
          </ul>
          </Style4Card>
        </Style4Reveal>
      </div>
    </Style4Section>
  )
}
