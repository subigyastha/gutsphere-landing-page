import { Style4Section } from './Style4Section'
import { Style4Card } from './Style4Card'
import { Style4Reveal } from './Style4Reveal'

const beats = [
  {
    title: 'You\u2019re not imagining it.',
    body: 'Bloating, pain, stool changes, and fatigue you live with are real — even without a diagnosis label.',
    icon: '✦',
  },
  {
    title: 'Conflicting advice is exhausting.',
    body: 'Free guides and tracking in one place beat another late-night search spiral.',
    icon: '◎',
  },
  {
    title: 'Start with what feels off.',
    body: 'Pick a condition below or log one symptom. You don\u2019t need the full picture today.',
    icon: '→',
  },
]

export function Style4WhyCards() {
  return (
    <Style4Section
      id="validation"
      eyebrow="Why it works"
      heading="We build products people can use on real days"
      headingId="style4-validation-heading"
      background="sand-light"
    >
      <div className="mt-8 grid style4-cell-gap sm:mt-10 sm:grid-cols-3">
        {beats.map((beat, index) => (
          <Style4Reveal key={beat.title} delay={index * 80} as="article">
            <Style4Card interactive className="h-full p-5 sm:p-6">
              <span
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-gs-coral to-gs-coral/80 text-sm font-bold text-white"
                aria-hidden="true"
              >
                {beat.icon}
              </span>
              <h3 className="mt-4 font-display text-base font-semibold text-gs-text-primary sm:text-lg">
                {beat.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gs-text-secondary sm:text-base">
                {beat.body}
              </p>
            </Style4Card>
          </Style4Reveal>
        ))}
      </div>
    </Style4Section>
  )
}
