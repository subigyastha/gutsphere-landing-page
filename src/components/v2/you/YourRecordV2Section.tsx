import { ProductMockup } from '../../ProductMockup'

const pillars = [
  {
    title: 'What you feel',
    body: 'Log bloating, pain, stool changes, and fatigue — without needing a label first.',
    highlight: false,
  },
  {
    title: 'What connects over time',
    body: 'See how your symptoms link to food, stress, sleep, and medications.',
    highlight: true,
  },
  {
    title: 'What you bring to your doctor',
    body: 'Walk in with a clear timeline, visit-ready summaries, and questions you\u2019d otherwise forget.',
    highlight: false,
  },
]

export function YourRecordV2Section() {
  return (
    <section className="section-pad bg-gs-sand" aria-labelledby="your-record-v2-heading">
      <div className="container-narrow">
        <p className="text-xs font-medium text-gs-coral">Built for your care, not a streak counter</p>
        <h2 id="your-record-v2-heading" className="section-heading mt-3 max-w-2xl">
          Your record holds what your appointments keep missing
        </h2>

        <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-6 lg:grid-cols-3">
          {pillars.map((item) => (
            <div
              key={item.title}
              className={`rounded-2xl p-5 sm:p-6 ${item.highlight ? 'gs-insight-section' : 'card-surface'}`}
            >
              <h3 className="font-display text-base font-semibold text-gs-text-primary sm:text-lg">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gs-text-secondary sm:mt-3 sm:text-base">
                {item.body}
              </p>
              {item.highlight && (
                <div className="mt-4">
                  <ProductMockup variant="hero" compact />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
