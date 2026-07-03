const cards = [
  {
    label: 'Understand',
    example: 'Why symptoms can change day to day.',
  },
  {
    label: 'Ask',
    example: 'What should I bring up at my next GI visit?',
    highlight: true,
  },
  {
    label: 'Try',
    example: 'What small habit could I test this week?',
  },
]

export function RecordV2DailyValue() {
  return (
    <section className="section-pad bg-gs-card" aria-labelledby="record-v2-daily-heading">
      <div className="container-narrow">
        <h2 id="record-v2-daily-heading" className="section-heading max-w-2xl">
          One useful thing to understand, ask, or try today
        </h2>
        <p className="body-lg mt-4 max-w-2xl">
          Gutsphere is not another app asking you to do more work. Each visit should help you
          learn something, notice a pattern, prepare a question, or take one small step.
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.label}
              className={`card-surface p-6 ${card.highlight ? 'gs-insight-section' : ''}`}
            >
              <span className="text-xs font-medium text-gs-coral">{card.label}</span>
              <p className="mt-3 font-display text-base font-medium text-gs-text-primary">
                &ldquo;{card.example}&rdquo;
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
