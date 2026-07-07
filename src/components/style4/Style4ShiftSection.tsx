import { Style4Section } from './Style4Section'
import { Style4Card } from './Style4Card'
import { Style4Reveal } from './Style4Reveal'

const shifts = [
  {
    from: 'Symptoms',
    to: 'Patterns',
    body: 'Scattered signals become connections you can act on.',
  },
  {
    from: 'Patterns',
    to: 'Better questions',
    body: 'What repeats turns into what to ask your care team.',
  },
  {
    from: 'Questions',
    to: 'Clinical navigation',
    body: 'Walk into visits prepared — not reconstructing from memory.',
  },
  {
    from: 'Treatment',
    to: 'Adherence & progress',
    body: 'See whether routines and treatment are actually helping.',
  },
  {
    from: 'Flare-ups',
    to: 'Long-term control',
    body: 'Build a structured path for lifelong digestive health.',
  },
]

export function Style4ShiftSection() {
  return (
    <Style4Section
      id="the-shift"
      eyebrow="The shift"
      heading="From guessing alone to moving with a copilot"
      headingId="style4-shift-heading"
      intro="Gutsphere turns scattered digestive signals into a guided path — not another log of what happened."
      background="white"
    >
      <Style4Reveal>
        <Style4Card variant="insight" className="mt-8 p-6 text-center sm:mt-10 sm:p-8">
          <p className="font-display text-lg font-semibold text-gs-text-primary sm:text-xl">
            Most trackers record what happened. Gutsphere helps you understand what it means and
            what to do next.
          </p>
        </Style4Card>
      </Style4Reveal>

      <ol className="mt-6 space-y-3 sm:mt-8">
        {shifts.map((step, index) => (
          <Style4Reveal key={step.from} delay={index * 60} as="li">
            <Style4Card interactive className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:gap-6 sm:p-6">
              <div className="flex shrink-0 items-center gap-2 font-display text-sm font-semibold text-gs-text-primary sm:text-base">
                <span className="rounded-full bg-gs-sand-light px-3 py-1">{step.from}</span>
                <span className="text-gs-coral" aria-hidden="true">
                  &rarr;
                </span>
                <span className="rounded-full bg-gs-coral/10 px-3 py-1 text-gs-coral">
                  {step.to}
                </span>
              </div>
              <p className="text-sm text-gs-text-secondary sm:text-base">{step.body}</p>
            </Style4Card>
          </Style4Reveal>
        ))}
      </ol>
    </Style4Section>
  )
}
