import { FounderBridge } from './FounderBridge'

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

export function HiddenLaborSection() {
  return (
    <section className="section-pad bg-gs-sand" aria-labelledby="hidden-labor-heading">
      <div className="container-narrow">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <FounderBridge>
              Like most patients, he became the historian, detective, and advocate — while still
              feeling sick.
            </FounderBridge>
            <h2 id="hidden-labor-heading" className="section-heading mb-5">
              Digestive disease turns patients into detectives.
            </h2>
            <p className="body-lg mb-6">
              You remember the timeline. You test the foods. You compare symptoms. You search
              late at night. You explain everything again at the next visit. You try to notice
              what changed before things got worse.
            </p>
            <p className="gs-callout-amber">
              <strong className="font-semibold text-gs-amber-text">
                The patient becomes the unpaid integrator
              </strong>{' '}
              — medical historian, pattern analyst, food detective, appointment prepper, and
              advocate — while feeling sick.
            </p>
          </div>

          <div className="space-y-4">
            {roles.map((item, i) => (
              <div key={item.role} className="card-surface flex min-h-12 gap-5 p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gs-sand-light font-display text-lg font-semibold text-gs-text-secondary">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-gs-text-primary">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-sm text-gs-text-secondary">{item.task}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
