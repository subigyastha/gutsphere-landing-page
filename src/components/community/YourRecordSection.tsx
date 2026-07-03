import { PhoneScreenshot } from '../clarity/PhoneScreenshot'

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
    screenshot: '/screenshots/track-symptom.png',
    screenshotLabel: 'Symptom tracking',
  },
  {
    title: 'What you bring to your doctor',
    body: 'Walk in with a clear timeline, visit-ready summaries, and questions you\u2019d otherwise forget.',
    highlight: false,
  },
]

export function YourRecordSection() {
  return (
    <section className="section-pad bg-gs-sand" aria-labelledby="your-record-heading">
      <div className="container-narrow">
        <p className="text-xs font-medium text-gs-coral">Built for your care, not a streak counter</p>
        <h2 id="your-record-heading" className="section-heading mt-3 max-w-2xl">
          Your record holds what your appointments keep missing
        </h2>
        <p className="body-lg mt-3 max-w-2xl sm:mt-4">
          Trackers log today. You need a story that survives three months, a new specialist, and
          the moment someone asks &ldquo;when did this start?&rdquo;
        </p>

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
              {item.highlight && item.screenshot && (
                <div className="mt-4 flex justify-center lg:justify-start">
                  <PhoneScreenshot
                    src={item.screenshot}
                    alt="Gutsphere symptom tracking screen"
                    label={`[App preview] ${item.screenshotLabel}`}
                    className="max-w-[180px] sm:max-w-[200px]"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-gs-text-secondary sm:mt-10 sm:text-base">
          You own this record. It travels with you — from a GP who doesn&apos;t have time, to a
          specialist who needs the full picture, to the visit where you finally get heard.
        </p>
      </div>
    </section>
  )
}
