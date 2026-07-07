import { Style4Section } from './Style4Section'
import { Style4Card } from './Style4Card'
import { Style4Reveal } from './Style4Reveal'

const pillars = [
  {
    title: 'Self-care',
    subtitle: 'Daily signals & routines',
    items: [
      'Track symptoms and daily digestive signals',
      'Understand patterns and possible triggers',
      'Build routines that support daily gut health decisions',
    ],
  },
  {
    title: 'Clinical navigation',
    subtitle: 'Prepare for care',
    items: [
      'Know what questions to ask doctors',
      'Prepare for appointments with clear summaries',
      'Reduce confusion during diagnosis limbo',
    ],
  },
  {
    title: 'Clinical intelligence',
    subtitle: 'Treatment & long-term control',
    items: [
      'Understand whether treatment is working',
      'Support treatment adherence and consistency',
      'Complement clinical care — not replace it',
    ],
  },
]

export function Style4PillarsSection() {
  return (
    <Style4Section
      id="pillars"
      eyebrow="How Gutsphere helps"
      heading="More than tracking — three pillars for your full GI journey"
      headingId="style4-pillars-heading"
      intro="Tracking is only the starting point. Gutsphere helps you turn signals into decisions, routines, and better clinical conversations."
      background="sand"
    >
      <div className="mt-8 grid style4-cell-gap sm:mt-10 lg:grid-cols-3">
        {pillars.map((pillar, index) => (
          <Style4Reveal key={pillar.title} delay={index * 80} as="article">
            <Style4Card interactive className="flex h-full flex-col p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-gs-coral">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold text-gs-text-primary">
                {pillar.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-gs-text-muted">{pillar.subtitle}</p>
              <ul className="mt-4 flex-1 space-y-2.5 border-t border-gs-border pt-4 text-sm text-gs-text-secondary sm:text-base">
                {pillar.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-gs-coral" aria-hidden="true">
                      &bull;
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Style4Card>
          </Style4Reveal>
        ))}
      </div>
    </Style4Section>
  )
}
