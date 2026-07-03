import { PhoneScreenshot } from '../../clarity/PhoneScreenshot'
import { SectionShell } from '../../clarity/SectionShell'

const features = [
  {
    title: 'Visit-ready summary',
    body: 'Bring a clear timeline and questions to your next appointment.',
    screenshot: '/screenshots/visit-brief.png',
    label: 'Visit brief',
    priority: true,
  },
  {
    title: 'Track your patterns',
    body: 'Log symptoms, food, and bowel changes at your pace. No streak pressure.',
    screenshot: '/screenshots/track-symptom.png',
    label: 'Symptom tracking',
  },
  {
    title: 'Daily guidance',
    body: 'Open the app and get something useful — a tip, insight, or small action for today.',
    screenshot: '/screenshots/daily-feed.png',
    label: 'Daily feed',
  },
]

export function ClarityV2AppShowcase() {
  return (
    <SectionShell background="sand" ariaLabelledBy="clarity-v2-showcase-heading">
      <h2 id="clarity-v2-showcase-heading" className="section-heading max-w-2xl">
        Your GI health, in your pocket
      </h2>
      <p className="body-lg mt-3 max-w-2xl sm:mt-4">
        Three things Gutsphere does for you every day.
      </p>

      <div className="mt-10 space-y-12 sm:mt-14 sm:space-y-16 lg:space-y-20">
        {features.map((feature, i) => (
          <div
            key={feature.title}
            className={`grid items-center gap-6 sm:gap-10 lg:grid-cols-2 lg:gap-16 ${
              i % 2 === 1 ? '[&>*:first-child]:lg:order-2' : ''
            }`}
          >
            <div className="mx-auto w-full max-w-[220px] sm:max-w-none">
              <PhoneScreenshot
                src={feature.screenshot}
                alt={feature.title}
                label={`[App preview] ${feature.label}`}
                fetchPriority={feature.priority ? 'high' : undefined}
                className="max-w-[220px] sm:max-w-[260px]"
              />
            </div>
            <div>
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gs-coral text-base font-bold text-white sm:h-12 sm:w-12 sm:text-lg">
                {i + 1}
              </span>
              <h3 className="mt-3 font-display text-xl font-semibold text-gs-text-primary sm:mt-4 sm:text-2xl">
                {feature.title}
              </h3>
              <p className="body-lg mt-2 sm:mt-3">{feature.body}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  )
}
