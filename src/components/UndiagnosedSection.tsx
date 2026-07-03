import { FounderBridge } from './FounderBridge'

const cards = [
  {
    title: 'Something is wrong, but the name is unclear',
    body: 'Start with what you can observe — bloating, pain, stool changes, fatigue — without needing a label first.',
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

export function UndiagnosedSection() {
  return (
    <section id="undiagnosed" className="section-pad bg-gs-card" aria-labelledby="undiagnosed-heading">
      <div className="container-narrow">
        <div className="max-w-3xl">
          <FounderBridge>
            He didn&apos;t always have a name for what was wrong. He still needed a record for
            what was happening.
          </FounderBridge>
          <h2 id="undiagnosed-heading" className="section-heading mb-5">
            No diagnosis yet? Your symptoms still deserve a record.
          </h2>
          <p className="body-lg">
            You may not know whether it is IBS, IBD, GERD, SIBO, food sensitivity, stress,
            medication, or something else. But you do know what you are living through:
            bloating, constipation, diarrhea, reflux, pain, nausea, urgency, stool changes,
            fatigue, flare-ups, and unanswered questions.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {cards.map((card) => (
            <article key={card.title} className="card-surface p-6">
              <h3 className="mb-3 font-display text-lg font-semibold text-gs-text-primary">
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed text-gs-text-secondary">{card.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
