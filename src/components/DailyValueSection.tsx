const cards = [
  {
    label: 'Understand',
    example: 'Why symptoms can change day to day.',
    className: 'bg-gs-sand-light text-gs-text-secondary',
  },
  {
    label: 'Ask',
    example: 'What should I bring up at my next GI visit?',
    className: 'bg-gs-insight-bg text-gs-coral border border-gs-insight-border',
  },
  {
    label: 'Try',
    example: 'What small habit could I test this week?',
    className: 'bg-gs-sand-light text-gs-text-secondary',
  },
]

export function DailyValueSection() {
  return (
    <section className="section-pad bg-gs-card" aria-labelledby="daily-value-heading">
      <div className="container-narrow">
        <div className="max-w-3xl">
          <h2 id="daily-value-heading" className="section-heading mb-5">
            One useful thing to understand, ask, or try today.
          </h2>
          <p className="body-lg">
            Gutsphere is not another app asking you to do more work. Each visit should help you
            learn something, notice a pattern, prepare a question, or take one small step.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {cards.map((card) => (
            <article key={card.label} className="card-surface p-6">
              <span
                className={`mb-4 inline-block rounded-full px-4 py-1.5 text-xs font-semibold ${card.className}`}
              >
                {card.label}
              </span>
              <p className="font-display text-base font-medium text-gs-text-primary">
                &ldquo;{card.example}&rdquo;
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
