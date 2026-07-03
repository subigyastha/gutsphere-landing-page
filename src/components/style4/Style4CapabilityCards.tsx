import { PhoneScreenshot } from '../clarity/PhoneScreenshot'
import { Style4Section } from './Style4Section'
import { Style4Card } from './Style4Card'
import { Style4Reveal } from './Style4Reveal'

const features = [
  {
    title: 'Visit-ready summary',
    body: 'Bring a clear timeline and questions to your next appointment.',
    screenshot: '/screenshots/visit-brief.png',
    label: 'Visit brief',
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

export function Style4CapabilityCards() {
  return (
    <Style4Section
      eyebrow="Product"
      heading="Your GI health, in your pocket"
      headingId="style4-capabilities-heading"
      intro="Three things Gutsphere does for you every day."
      background="sand"
    >
      <div className="mt-8 grid style4-cell-gap sm:mt-10 lg:grid-cols-3">
        {features.map((feature, i) => (
          <Style4Reveal key={feature.title} delay={i * 80} as="article">
            <Style4Card interactive className="flex h-full flex-col p-5 sm:p-6">
            <PhoneScreenshot
              src={feature.screenshot}
              alt={feature.title}
              label={`[App preview] ${feature.label}`}
              className="mb-5 max-w-[180px] sm:max-w-[200px]"
            />
            <span
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gs-coral text-sm font-bold text-white"
              aria-hidden="true"
            >
              {i + 1}
            </span>
            <h3 className="mt-3 font-display text-lg font-semibold text-gs-text-primary">
              {feature.title}
            </h3>
            <p className="mt-2 flex-1 text-sm text-gs-text-secondary sm:text-base">
              {feature.body}
            </p>
            </Style4Card>
          </Style4Reveal>
        ))}
      </div>
    </Style4Section>
  )
}
