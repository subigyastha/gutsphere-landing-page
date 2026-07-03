const beats = [
  {
    title: 'Your symptoms aren\u2019t background noise.',
    body: 'The bloating, pain, stool changes, and fatigue you live with are real. You don\u2019t need a diagnosis label to start paying attention.',
  },
  {
    title: 'You don\u2019t need a perfect memory.',
    body: 'Appointments move fast. Details fade. What happened three weeks ago shouldn\u2019t vanish just because no one wrote it down for you.',
  },
  {
    title: 'You\u2019re not broken \u2014 the record is missing.',
    body: 'Healthcare sees visits and tests. Your daily life \u2014 food, stress, medications, patterns \u2014 lives somewhere else. Gutsphere holds that gap for you.',
  },
]

export function ValidationSection() {
  return (
    <section
      id="no-diagnosis"
      className="section-pad bg-gs-sand-light"
      aria-labelledby="validation-heading"
    >
      <div className="container-narrow">
        <p className="text-xs font-medium text-gs-coral">
          No diagnosis required. No perfect memory required.
        </p>
        <h2 id="validation-heading" className="section-heading mt-3 max-w-2xl">
          If you&apos;ve been piecing this together alone, you&apos;re not imagining it.
        </h2>
        <p className="body-lg mt-3 max-w-2xl sm:mt-4">
          Whether you&apos;re undiagnosed, between tests, or managing a condition for years — you
          deserve more than scattered notes and a racing mind before each visit.
        </p>

        <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-4">
          {beats.map((beat) => (
            <div key={beat.title} className="card-surface p-5 sm:p-6">
              <h3 className="font-display text-base font-semibold text-gs-text-primary sm:text-lg">
                {beat.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gs-text-secondary sm:mt-3 sm:text-base">
                {beat.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
