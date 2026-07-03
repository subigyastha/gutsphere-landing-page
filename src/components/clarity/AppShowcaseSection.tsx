import { PhoneScreenshot } from './PhoneScreenshot'
import { SectionShell } from './SectionShell'

const features = [
  {
    title: 'Daily guidance',
    body: 'Open the app and get something useful — a tip, insight, or small action for today.',
    screenshot: '/screenshots/daily-feed.png',
    label: 'Daily feed',
  },
  {
    title: 'Track your patterns',
    body: 'Log symptoms, food, and bowel changes at your pace. No streak pressure.',
    screenshot: '/screenshots/track-symptom.png',
    label: 'Symptom tracking',
  },
  {
    title: 'Visit-ready summary',
    body: 'Bring a clear timeline and questions to your next appointment.',
    screenshot: '/screenshots/visit-brief.png',
    label: 'Visit brief',
  },
]

export function AppShowcaseSection() {
  return (
    <SectionShell background="sand" ariaLabelledBy="app-showcase-heading">
      <h2 id="app-showcase-heading" className="section-heading text-center">
        Your GI health, in your pocket
      </h2>
      <p className="body-lg mx-auto mt-4 max-w-2xl text-center">
        Three things Gutsphere does for you every day.
      </p>

      <div className="mt-14 space-y-20">
        {features.map((feature, i) => (
          <div
            key={feature.title}
            className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
              i % 2 === 1 ? '[&>*:first-child]:lg:order-2' : ''
            }`}
          >
            <PhoneScreenshot
              src={feature.screenshot}
              alt={feature.title}
              label={feature.label}
            />
            <div>
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gs-coral text-lg font-bold text-white">
                {i + 1}
              </span>
              <h3 className="section-heading mt-4 text-2xl">{feature.title}</h3>
              <p className="body-lg mt-3">{feature.body}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  )
}
