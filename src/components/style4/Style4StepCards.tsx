import { PhoneScreenshot } from '../clarity/PhoneScreenshot'
import { Style4Section } from './Style4Section'
import { Style4Card } from './Style4Card'
import { Style4Reveal } from './Style4Reveal'

const steps = [
  {
    number: 1,
    title: 'Log one thing',
    body: 'A symptom, meal, or question. That is enough to start.',
    screenshot: '/screenshots/track-symptom.png',
    label: 'Step 1',
  },
  {
    number: 2,
    title: 'See what connects',
    body: 'Gutsphere links food, stress, sleep, and symptoms over time.',
    screenshot: '/screenshots/hero-home.png',
    label: 'Patterns view',
  },
  {
    number: 3,
    title: 'Walk in prepared',
    body: 'Get a summary and questions for your next visit.',
    screenshot: '/screenshots/visit-brief.png',
    label: 'Visit brief',
  },
]

export function Style4StepCards() {
  return (
    <Style4Section
      id="how-it-works"
      eyebrow="How it works"
      heading="Get started in 3 steps"
      headingId="style4-steps-heading"
      intro="Three simple steps. You set the pace."
      background="white"
    >
      <ol className="mt-8 grid style4-cell-gap sm:mt-10 lg:grid-cols-3">
        {steps.map((step, index) => (
          <Style4Reveal key={step.number} delay={index * 80} as="li">
            <Style4Card interactive className="flex h-full flex-col p-5 sm:p-6">
              <PhoneScreenshot
                src={step.screenshot}
                alt={step.title}
                label={step.label}
                className="mb-5 max-w-[180px] sm:max-w-[200px]"
              />
              <span
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gs-coral text-sm font-bold text-white"
                aria-hidden="true"
              >
                {step.number}
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold text-gs-text-primary">
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
