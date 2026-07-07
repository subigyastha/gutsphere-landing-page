import { Style4Section } from './Style4Section'
import { Style4Card } from './Style4Card'
import { Style4Reveal } from './Style4Reveal'

const steps = [
  {
    number: 1,
    title: 'Start where you are',
    body: 'Confusing symptoms, diagnosis limbo, or treatment — share what is real for you today.',
  },
  {
    number: 2,
    title: 'Connect the signals',
    body: 'Gutsphere links symptoms, meals, stress, sleep, and routines into patterns you can use.',
  },
  {
    number: 3,
    title: 'Move with guidance',
    body: 'Get daily direction, clinical preparation, and long-term support for your gut health.',
  },
]

export function Style4StepCards() {
  return (
    <Style4Section
      id="how-it-works"
      eyebrow="How it works"
      heading="Your copilot for the full digestive health journey"
      headingId="style4-steps-heading"
      intro="Three steps. You set the pace. Gutsphere guides — you stay in control."
      background="sand-light"
    >
      <ol className="mt-8 grid style4-cell-gap sm:mt-10 lg:grid-cols-3">
        {steps.map((step, index) => (
          <Style4Reveal key={step.number} delay={index * 80} as="li">
            <Style4Card interactive className="flex h-full flex-col p-5 sm:p-6">
              <span
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gs-coral text-sm font-bold text-white"
                aria-hidden="true"
              >
                {step.number}
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-gs-text-primary">
                {step.title}
              </h3>
              <p className="mt-2 flex-1 text-sm text-gs-text-secondary sm:text-base">{step.body}</p>
            </Style4Card>
          </Style4Reveal>
        ))}
      </ol>
    </Style4Section>
  )
}
