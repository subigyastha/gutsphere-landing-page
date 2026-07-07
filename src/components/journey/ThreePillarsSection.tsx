const pillars = [
  {
    title: 'Daily Self-Care',
    description:
      'Understand symptoms, stool changes, food, stress, sleep, hydration, movement, and flare-up patterns.',
    accent: 'green' as const,
  },
  {
    title: 'Care Navigation',
    description:
      'Prepare for doctor visits, tests, reports, diagnosis limbo, colonoscopy or endoscopy prep, and follow-ups.',
    accent: 'slate' as const,
  },
  {
    title: 'Treatment Support',
    description:
      'Follow medications, supplements, routines, side effects, adherence, progress, and long-term gut health rebuilding.',
    accent: 'coral' as const,
  },
] as const

const accentStyles = {
  green: 'border-t-gs-green bg-gradient-to-b from-gs-green/5 to-gs-card',
  slate: 'border-t-[#6B8F9E] bg-gradient-to-b from-[#6B8F9E]/8 to-gs-card',
  coral: 'border-t-gs-coral bg-gradient-to-b from-gs-coral/5 to-gs-card',
}

export function ThreePillarsSection() {
  return (
    <>
      <h2 className="section-heading mx-auto max-w-3xl text-center">
        Three ways GutSphere guides your journey.
      </h2>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {pillars.map((pillar) => (
          <article
            key={pillar.title}
            className={`card-surface border-t-4 p-6 sm:p-8 ${accentStyles[pillar.accent]}`}
          >
            <h3 className="font-display text-xl font-semibold text-gs-text-primary">
              {pillar.title}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-gs-text-secondary">
              {pillar.description}
            </p>
          </article>
        ))}
      </div>
    </>
  )
}
