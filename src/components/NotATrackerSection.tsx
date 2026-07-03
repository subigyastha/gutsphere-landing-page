import { FounderBridge } from './FounderBridge'

const rows = [
  {
    tracker: 'Logs what happened today',
    gutsphere: 'Builds a timeline of what keeps happening',
  },
  {
    tracker: 'Tracks symptoms separately',
    gutsphere: 'Connects symptoms with stool, food, stress, sleep, medication, and routines',
  },
  {
    tracker: 'Gives charts',
    gutsphere: 'Helps you understand what may matter',
  },
  {
    tracker: 'Stores data',
    gutsphere: 'Turns history into doctor questions and next steps',
  },
  {
    tracker: 'Works like a diary',
    gutsphere: 'Works like a living record for your digestive disease journey',
  },
]

export function NotATrackerSection() {
  return (
    <section id="not-a-tracker" className="section-pad bg-gs-sand" aria-labelledby="not-tracker-heading">
      <div className="container-narrow">
        <div className="max-w-3xl">
          <FounderBridge>
            Notes, memory, and generic trackers couldn&apos;t hold the full story his future care
            would depend on.
          </FounderBridge>
          <h2 id="not-tracker-heading" className="section-heading mb-5">
            A tracker records entries. Gutsphere builds your digestive health story.
          </h2>
          <p className="body-lg">
            Trackers ask you to remember what happened. Gutsphere helps you build the story
            your future care depends on.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-gs-border bg-gs-card shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
          <div className="hidden grid-cols-2 border-b border-gs-border bg-gs-sand-light text-sm font-semibold sm:grid">
            <div className="px-6 py-4 text-gs-text-muted">Symptom tracker</div>
            <div className="border-l border-gs-border px-6 py-4 text-gs-coral">Gutsphere</div>
          </div>

          {rows.map((row, i) => (
            <div
              key={row.tracker}
              className={`grid sm:grid-cols-2 ${i < rows.length - 1 ? 'border-b border-gs-border' : ''}`}
            >
              <div className="px-6 py-5 text-sm text-gs-text-muted">
                <span className="mb-1 block font-semibold text-gs-text-hint sm:hidden">
                  Symptom tracker
                </span>
                {row.tracker}
              </div>
              <div className="border-t border-gs-border bg-gs-insight-bg px-6 py-5 text-sm font-medium text-gs-text-primary sm:border-t-0 sm:border-l sm:border-gs-border">
                <span className="mb-1 block font-semibold text-gs-coral sm:hidden">Gutsphere</span>
                {row.gutsphere}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
