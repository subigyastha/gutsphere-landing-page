const careSees = ['Appointment', 'Test', 'Prescription', 'Procedure']

const youLive = [
  'Flare-up',
  'Stool change',
  'Food reaction',
  'Stress week',
  'Medication change',
  'Bathroom urgency',
  'Sleep disruption',
  'Doctor question',
]

export function MissingRecordSection() {
  return (
    <section id="missing-record" className="section-pad bg-gs-card" aria-labelledby="missing-record-heading">
      <div className="container-narrow">
        <div className="max-w-3xl">
          <p className="mb-3 text-xs font-medium text-gs-coral">The core idea</p>
          <h2 id="missing-record-heading" className="section-heading mb-5">
            The missing record between symptoms and answers.
          </h2>
          <p className="body-lg">
            Medical care sees appointments, tests, prescriptions, and procedures. But digestive
            disease is lived in the daily details: what you ate, how your stool changed, when
            the pain started, what stress looked like that week, what medication changed, what
            helped, and what made things worse.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gs-border bg-gs-sand p-6 sm:p-8">
            <h3 className="mb-6 font-display text-lg font-semibold text-gs-text-muted">
              Care sees
            </h3>
            <ul className="space-y-3">
              {careSees.map((item) => (
                <li
                  key={item}
                  className="flex min-h-12 items-center gap-3 rounded-xl bg-gs-card/60 px-4 py-3 text-sm text-gs-text-muted"
                >
                  <span className="h-2 w-2 rounded-full bg-gs-text-hint" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="gs-insight-section rounded-2xl p-6 sm:p-8">
            <h3 className="mb-6 font-display text-lg font-semibold text-gs-coral">You live</h3>
            <ul className="space-y-3">
              {youLive.map((item) => (
                <li
                  key={item}
                  className="flex min-h-12 items-center gap-3 rounded-xl bg-gs-card px-4 py-3 text-sm font-medium text-gs-text-primary"
                >
                  <span className="h-2 w-2 rounded-full bg-gs-coral" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
