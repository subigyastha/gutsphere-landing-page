const steps = [
  {
    number: 1,
    title: 'Log one thing you remember',
    body: 'A flare, a meal, a stool change, a question for your doctor — whatever is clearest right now. That\u2019s enough to start.',
  },
  {
    number: 2,
    title: 'Let Gutsphere connect the dots',
    body: 'Your entries link symptoms with food, stress, sleep, meds, and flare-ups over time — the way you actually live, not how a form expects.',
  },
  {
    number: 3,
    title: 'Walk in prepared',
    body: 'Get visit-ready summaries and questions for your next appointment. No more reconstructing three months from memory in the parking lot.',
  },
]

export function CommunityHowItWorks() {
  return (
    <section id="how-it-works" className="section-pad bg-gs-card-elevated" aria-labelledby="community-steps-heading">
      <div className="container-narrow">
        <h2 id="community-steps-heading" className="section-heading max-w-2xl">
          How you build your record — in three low-friction steps
        </h2>
        <p className="body-lg mt-3 max-w-2xl sm:mt-4">
          No streak pressure. No shame on missed days. You set the pace.
        </p>

        <ol className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-3">
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
