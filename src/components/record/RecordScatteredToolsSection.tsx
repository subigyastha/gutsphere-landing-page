const roles = [
  {
    role: 'Historian',
    task: 'Remember months of symptoms and stool changes.',
  },
  {
    role: 'Detective',
    task: 'Look for patterns across food, stress, sleep, medication, and flare-ups.',
  },
  {
    role: 'Advocate',
    task: 'Bring the right questions to doctors, tests, and procedures.',
  },
]

const rows = [
  {
    tracker: 'Logs what happened today',
    gutsphere: 'Builds a timeline of what keeps happening',
  },
  {
    tracker: 'Tracks symptoms separately',
    gutsphere: 'Connects symptoms with stool, food, stress, sleep, and meds',
  },
  {
    tracker: 'Gives charts',
    gutsphere: 'Helps you understand what may matter',
  },
  {
    tracker: 'Stores data',
    gutsphere: 'Turns history into doctor questions and next steps',
  },
]

export function RecordScatteredToolsSection() {
  return (
    <section
      id="why-scattered"
      className="section-pad bg-gs-sand"
      aria-labelledby="record-scattered-heading"
    >
      <div className="container-narrow">
        <h2 id="record-scattered-heading" className="section-heading max-w-2xl">
          Why scattered tools fail at pattern-finding
        </h2>
        <p className="body-lg mt-3 max-w-2xl sm:mt-4">
          Notes, memory, and generic trackers can&apos;t hold the full story your care depends
          on. Digestive disease turns patients into unpaid integrators.
        </p>

        <div className="mt-8 space-y-3 sm:mt-10">
          {roles.map((item, i) => (
            <div key={item.role} className="card-surface flex min-h-12 gap-4 p-5 sm:gap-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gs-sand-light font-display text-base font-semibold text-gs-text-secondary sm:h-12 sm:w-12">
                {i + 1}
              </div>
              <div>
                <h3 className="font-display text-base font-semibold text-gs-text-primary sm:text-lg">
                  {item.role}
                </h3>
                <p className="mt-1 text-sm text-gs-text-secondary sm:text-base">{item.task}</p>
              </div>
            </div>
          ))}
        </div>

        <details id="not-a-tracker" className="group mt-8 sm:mt-10">
          <summary className="flex min-h-12 cursor-pointer list-none items-center text-base font-medium text-gs-coral hover:underline sm:text-lg [&::-webkit-details-marker]:hidden">
            Compare Gutsphere to a symptom tracker
            <span
              className="ml-2 inline-block transition-transform group-open:rotate-180"
              aria-hidden="true"
            >
              &#9662;
            </span>
          </summary>

          <div className="mt-4 overflow-hidden rounded-2xl border border-gs-border bg-gs-card shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
            <div className="hidden grid-cols-2 border-b border-gs-border bg-gs-sand-light text-sm font-semibold sm:grid">
              <div className="px-5 py-3 text-gs-text-muted sm:px-6 sm:py-4">Symptom tracker</div>
              <div className="border-l border-gs-border px-5 py-3 text-gs-coral sm:px-6 sm:py-4">
                Gutsphere
              </div>
            </div>

            {rows.map((row, i) => (
              <div
                key={row.tracker}
                className={`grid sm:grid-cols-2 ${i < rows.length - 1 ? 'border-b border-gs-border' : ''}`}
              >
                <div className="px-5 py-4 text-sm text-gs-text-muted sm:px-6 sm:py-5">
                  <span className="mb-1 block font-semibold text-gs-text-hint sm:hidden">
                    Symptom tracker
                  </span>
                  {row.tracker}
                </div>
                <div className="border-t border-gs-border bg-gs-insight-bg px-5 py-4 text-sm font-medium text-gs-text-primary sm:border-t-0 sm:border-l sm:px-6 sm:py-5">
                  <span className="mb-1 block font-semibold text-gs-coral sm:hidden">Gutsphere</span>
                  {row.gutsphere}
                </div>
              </div>
            ))}
          </div>
        </details>
      </div>
    </section>
  )
}
