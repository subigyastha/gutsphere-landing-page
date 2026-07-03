const steps = [
  {
    number: 1,
    title: 'Start with one clue',
    body: 'Log a symptom, stool change, meal, or question — whatever you already remember.',
  },
  {
    number: 2,
    title: 'Connect what keeps happening',
    body: 'Gutsphere links symptoms with food, stress, sleep, meds, and flare patterns over time.',
  },
  {
    number: 3,
    title: 'Prepare your next step',
    body: 'Get visit-ready summaries, questions for your GI, and one small thing to try or notice today.',
  },
]

export function RecordV2HowItWorks() {
  return (
    <section id="how-it-works" className="section-pad bg-gs-card-elevated" aria-labelledby="record-v2-steps-heading">
      <div className="container-narrow">
        <h2 id="record-v2-steps-heading" className="section-heading text-center">
          Build your record in three low-friction steps
        </h2>

        <ol className="mt-12 grid gap-4 sm:grid-cols-3">
          {steps.map((step) => (
            <li key={step.number} className="card-surface p-6">
              <span
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gs-coral text-sm font-semibold text-white"
                aria-hidden="true"
              >
                {step.number}
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-gs-text-primary">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gs-text-secondary">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
