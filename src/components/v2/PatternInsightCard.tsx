type PatternInsightCardProps = {
  className?: string
  variant?: 'default' | 'on-primary'
}

export function PatternInsightCard({
  className = '',
  variant = 'default',
}: PatternInsightCardProps) {
  const surface =
    variant === 'on-primary'
      ? 'rounded-2xl border border-white/25 bg-white/10 px-5 py-4'
      : 'gs-insight-section rounded-2xl px-5 py-4'

  const eyebrowClass =
    variant === 'on-primary'
      ? 'text-xs font-semibold uppercase tracking-wider text-white'
      : 'text-xs font-semibold uppercase tracking-wider text-gs-coral'
  const titleClass =
    variant === 'on-primary'
      ? 'mt-2 font-display text-base font-semibold text-white sm:text-lg'
      : 'mt-2 font-display text-base font-semibold text-gs-text-primary sm:text-lg'
  const bodyClass =
    variant === 'on-primary' ? 'mt-2 text-sm text-white' : 'mt-2 text-sm text-gs-text-secondary'
  const footnoteClass =
    variant === 'on-primary' ? 'mt-3 text-xs text-white' : 'mt-3 text-xs text-gs-text-muted'

  return (
    <div
      className={`${surface} ${className}`}
      role="complementary"
      aria-label="Example pattern insight"
    >
      <p className={eyebrowClass}>Pattern noticed</p>
      <p className={titleClass}>Coffee in the morning &rarr; bloating later</p>
      <p className={bodyClass}>
        Logged 3 of the last 5 days — same timing after breakfast.
      </p>
      <p className={footnoteClass}>Example from a Gutsphere record</p>
    </div>
  )
}
