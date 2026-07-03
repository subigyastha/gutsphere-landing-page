const problems = [
  {
    title: 'The missing record',
    body: 'Care sees appointments and tests. You live flare-ups, stool changes, food reactions, and forgotten questions in the gaps between visits.',
  },
  {
    title: 'The hidden labor',
    body: 'You become the historian, detective, and advocate — remembering timelines, testing foods, and explaining everything again at every visit.',
  },
  {
    title: 'Not another tracker',
    body: 'Diaries log today. Gutsphere builds a connected timeline — linking symptoms, stool, food, stress, and meds into visit-ready summaries.',
  },
]

export function RecordV2ProblemSection() {
  return (
    <section id="why-scattered-fails" className="section-pad bg-gs-card" aria-labelledby="record-v2-problem-heading">
      <div className="container-narrow">
        <h2 id="record-v2-problem-heading" className="section-heading max-w-2xl">
          Why scattered tools fail at pattern-finding
        </h2>
        <p className="body-lg mt-4 max-w-2xl">
          Notes, memory, and generic trackers can&apos;t hold the full story your care depends on.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {problems.map((item) => (
            <div key={item.title} className="card-surface p-6">
              <h3 className="font-display text-lg font-semibold text-gs-text-primary">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gs-text-secondary">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
