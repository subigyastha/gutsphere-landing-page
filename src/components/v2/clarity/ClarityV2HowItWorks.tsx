import { PhoneScreenshot } from '../../clarity/PhoneScreenshot'
import { SectionShell } from '../../clarity/SectionShell'

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

export function ClarityV2HowItWorks() {
  return (
    <SectionShell id="how-it-works" background="card-elevated" ariaLabelledBy="clarity-v2-steps-heading">
      <h2 id="clarity-v2-steps-heading" className="section-heading max-w-2xl">
        How it works
      </h2>
      <p className="body-lg mt-3 max-w-xl sm:mt-4">
        Three simple steps. You set the pace.
      </p>

      <ol className="mt-8 grid gap-6 sm:mt-12 sm:gap-8 lg:grid-cols-3">
        {steps.map((step) => (
          <li key={step.number} className="card-surface flex flex-col p-5 sm:p-6">
            <PhoneScreenshot
              src={step.screenshot}
              alt={step.title}
              label={step.label}
              className="mb-5 max-w-[180px] sm:mb-6 sm:max-w-[200px]"
            />
            <span
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gs-coral text-sm font-bold text-white"
              aria-hidden="true"
            >
              {step.number}
            </span>
            <h3 className="mt-3 font-display text-lg font-semibold text-gs-text-primary sm:mt-4 sm:text-xl">
              {step.title}
            </h3>
            <p className="mt-2 clarity-body flex-1 text-base sm:text-lg">{step.body}</p>
          </li>
        ))}
      </ol>
    </SectionShell>
  )
}
