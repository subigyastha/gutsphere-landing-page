import { Style4Section } from './Style4Section'
import { Style4Card } from './Style4Card'
import { Style4Reveal } from './Style4Reveal'

const beforeItems = [
  'Symptoms feel random',
  'Notes are scattered across apps and memory',
  'You do not know what matters',
  'You forget what to tell your doctor',
  'Treatment progress feels unclear',
  'Flare-ups feel unpredictable',
]

const afterItems = [
  'Symptoms become patterns',
  'Patterns become questions',
  'Questions become better clinical conversations',
  'Treatment becomes trackable',
  'Habits become easier to follow',
  'Your GI health journey becomes structured',
]

const comparison = [
  { tracker: 'Log symptoms', gutsphere: 'Turn symptoms into patterns' },
  { tracker: 'Store data', gutsphere: 'Help you understand what matters' },
  { tracker: 'Show charts', gutsphere: 'Prepare you for clinical conversations' },
  { tracker: 'Focus on tracking', gutsphere: 'Support self-care, navigation & treatment' },
  { tracker: 'One-time utility', gutsphere: 'Lifelong GI health companion' },
]

export function Style4DifferentiationSection() {
  return (
    <Style4Section
      id="why-different"
      eyebrow="Why Gutsphere is different"
      heading="Trackers record what happened. Gutsphere guides what happens next."
      headingId="style4-different-heading"
      intro="Gutsphere does not simply help you log symptoms. It helps you understand what those symptoms mean, what to do next, how to prepare for care, and how to rebuild your gut health over time."
      background="white"
    >
      <div className="mt-8 grid style4-cell-gap sm:mt-10 lg:grid-cols-2">
        <Style4Reveal>
          <Style4Card variant="muted" interactive className="h-full p-6 sm:p-8">
            <p className="mb-6 text-sm font-semibold uppercase tracking-widest text-gs-text-muted">
              Before Gutsphere
            </p>
            <ul className="space-y-3">
              {beforeItems.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-gs-text-secondary sm:text-base">
                  <span className="text-gs-text-muted" aria-hidden="true">
                    &times;
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Style4Card>
        </Style4Reveal>

        <Style4Reveal delay={100}>
          <Style4Card variant="insight" interactive className="h-full p-6 sm:p-8">
            <p className="mb-6 text-sm font-semibold uppercase tracking-widest text-gs-coral">
              With Gutsphere
            </p>
            <ul className="space-y-3">
              {afterItems.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-gs-text-secondary sm:text-base">
                  <span className="font-bold text-gs-coral" aria-hidden="true">
                    &#10003;
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Style4Card>
        </Style4Reveal>
      </div>

      <Style4Reveal delay={120}>
        <div className="style4-card mt-8 overflow-hidden sm:mt-10">
          <div className="hidden sm:grid sm:grid-cols-[1fr_1fr] sm:border-b sm:border-gs-border">
            <p className="bg-gs-sand-light px-6 py-3 text-sm font-semibold text-gs-text-muted">
              Regular trackers
            </p>
            <p className="bg-gs-coral/5 px-6 py-3 text-sm font-semibold text-gs-coral">
              Gutsphere
            </p>
          </div>
          <dl className="divide-y divide-gs-border">
            {comparison.map((row) => (
              <div key={row.tracker} className="grid sm:grid-cols-2">
                <div className="px-5 py-4 sm:px-6">
                  <dt className="text-xs font-semibold uppercase tracking-wider text-gs-text-muted sm:sr-only">
                    Regular trackers
                  </dt>
                  <dd className="text-sm text-gs-text-secondary sm:text-base">{row.tracker}</dd>
                </div>
                <div className="border-t border-gs-border bg-gs-coral/[0.03] px-5 py-4 sm:border-t-0 sm:px-6">
                  <dt className="text-xs font-semibold uppercase tracking-wider text-gs-coral sm:sr-only">
                    Gutsphere
                  </dt>
                  <dd className="text-sm font-medium text-gs-text-primary sm:text-base">
                    {row.gutsphere}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </Style4Reveal>
    </Style4Section>
  )
}
