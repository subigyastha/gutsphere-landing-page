import { Style4Section } from './Style4Section'
import { Style4Card } from './Style4Card'
import { Style4Reveal } from './Style4Reveal'

const pains = [
  {
    title: 'Confusing symptoms',
    body: 'Bloating, pain, stool changes, and fatigue that feel random — with or without a diagnosis.',
    icon: '?',
  },
  {
    title: 'Diagnosis limbo',
    body: 'Trial and error, misdiagnosis, underdiagnosis, and months of not knowing what matters.',
    icon: '…',
  },
  {
    title: 'No clear next step',
    body: 'Unclear test decisions, forgotten doctor questions, and no way to tell if treatment is working.',
    icon: '!',
  },
]

export function Style4WhyCards() {
  return (
    <Style4Section
      id="the-problem"
      eyebrow="The problem"
      heading="Digestive health often feels like a full-time investigation"
      headingId="style4-problem-heading"
      intro="Many people living with GI symptoms go through confusion, limbo, and fear of flare-ups — without a system that understands the full journey."
      background="sand-light"
    >
      <div className="mt-8 grid style4-cell-gap sm:mt-10 sm:grid-cols-3">
        {pains.map((pain, index) => (
          <Style4Reveal key={pain.title} delay={index * 80} as="article">
            <Style4Card interactive className="h-full p-5 sm:p-6">
              <span
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gs-sand text-sm font-bold text-gs-text-secondary"
                aria-hidden="true"
              >
                {pain.icon}
              </span>
              <h3 className="mt-4 font-display text-base font-semibold text-gs-text-primary sm:text-lg">
                {pain.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gs-text-secondary sm:text-base">
                {pain.body}
              </p>
            </Style4Card>
          </Style4Reveal>
        ))}
      </div>
    </Style4Section>
  )
}
