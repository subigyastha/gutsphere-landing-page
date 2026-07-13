import { TestimonialCarousel } from '../TestimonialCarousel'
import { Style4Section } from './Style4Section'
import { Style4MetricMarquee } from './Style4MetricMarquee'
import { Style4Card } from './Style4Card'
import { Style4Reveal } from './Style4Reveal'
import { NAVIGATOR_COUNT } from '../../constants'

const metrics: { value: string; label: string; placeholder?: boolean }[] = [
  { value: NAVIGATOR_COUNT, label: 'People building their record' },
  { value: '6', label: 'Common GI conditions in the hub', placeholder: true },
  { value: '1 app', label: 'Replaces scattered notes & tools' },
  { value: '24/7', label: 'Support between visits', placeholder: true },
]

export function Style4ProofBand() {
  return (
    <Style4Section
      eyebrow="Social proof"
      heading="People navigating real digestive health journeys"
      headingId="style4-proof-heading"
      intro="Not just logging — building clarity, preparation, and long-term control."
      background="white"
      centered
    >
      <Style4Reveal className="mt-8 sm:mt-10">
        <Style4MetricMarquee metrics={metrics} />
      </Style4Reveal>

      <Style4Reveal delay={100}>
        <Style4Card interactive className="mx-auto mt-8 max-w-4xl p-6 sm:mt-10 sm:p-8">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-gs-coral">
            Trusted by {NAVIGATOR_COUNT} people
          </p>
          <h3 className="section-heading mt-3 text-center style4-gradient-text">
            A copilot, not another tracker
          </h3>
          <p className="body-lg mx-auto mt-3 max-w-2xl text-center sm:mt-4">
            What it feels like to move through digestive health with guidance — not guesswork alone.
          </p>
          <div className="mt-8">
            <TestimonialCarousel />
          </div>
        </Style4Card>
      </Style4Reveal>
    </Style4Section>
  )
}
