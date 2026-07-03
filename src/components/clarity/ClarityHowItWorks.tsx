import { PhoneScreenshot } from './PhoneScreenshot'
import { SectionShell } from './SectionShell'

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

export function ClarityHowItWorks() {
  return (
    <SectionShell id="how-it-works" background="card-elevated" ariaLabelledBy="clarity-steps-heading">
      <h2 id="clarity-steps-heading" className="section-heading text-center">
        How it works
      </h2>
      <p className="body-lg mx-auto mt-4 max-w-xl text-center">
        Three simple steps. You set the pace.
      </p>

      <ol className="mt-12 grid gap-8 lg:grid-cols-3">
        {steps.map((step) => (
          <li key={step.number} className="card-surface flex flex-col p-6">
            <PhoneScreenshot
              src={step.screenshot}
              alt={step.title}
              label={step.label}
              className="mb-6 max-w-[200px]"
            />
            <span
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gs-coral text-sm font-bold text-white"
              aria-hidden="true"
            >
              {step.number}
            </span>
            <h3 className="mt-4 font-display text-xl font-semibold text-gs-text-primary">
              {step.title}
            </h3>
            <p className="mt-2 clarity-body flex-1">{step.body}</p>
          </li>
        ))}
      </ol>
    </SectionShell>
  )
}
