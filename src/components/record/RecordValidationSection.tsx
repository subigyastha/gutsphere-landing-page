const beats = [
  {
    title: 'Something is wrong, but the name is unclear',
    body: 'Start with what you observe — bloating, pain, stool changes, fatigue — without needing a label like IBS or IBD first.',
  },
  {
    title: 'Appointments are far apart',
    body: 'Keep the details you might forget between visits: flare timing, food reactions, and what you meant to mention.',
  },
  {
    title: 'You are trying things on your own',
    body: 'Track food experiments, routines, supplements, and what actually changed — not just what you hoped would help.',
  },
]

export function RecordValidationSection() {
  return (
    <section
      id="undiagnosed"
      className="section-pad bg-gs-sand-light"
      aria-labelledby="record-validation-heading"
    >
      <div className="container-narrow">
        <p className="text-xs font-medium text-gs-coral">No diagnosis required</p>
        <h2 id="record-validation-heading" className="section-heading mt-3 max-w-2xl">
          Your symptoms still deserve a record — even without a label
        </h2>
        <p className="body-lg mt-3 max-w-2xl sm:mt-4">
          You may not know whether it is IBS, GERD, SIBO, or something else. You do know what
          you live with: bloating, stool changes, flare-ups, fatigue, and unanswered questions.
        </p>

        <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-4">
          {beats.map((beat) => (
            <article key={beat.title} className="card-surface p-5 sm:p-6">
              <h3 className="font-display text-base font-semibold text-gs-text-primary sm:text-lg">
                {beat.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gs-text-secondary sm:mt-3 sm:text-base">
                {beat.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
