type Style4MetricCardProps = {
  value: string
  label: string
  placeholder?: boolean
}

export function Style4MetricCard({ value, label, placeholder }: Style4MetricCardProps) {
  return (
    <div className="style4-card flex flex-col justify-center p-5 text-center sm:p-6">
      <p
        className={`font-display text-4xl font-semibold tracking-tight sm:text-5xl ${
          placeholder ? 'text-gs-text-muted' : 'style4-gradient-text'
        }`}
      >
        {value}
      </p>
      <p className="mt-2 text-sm text-gs-text-secondary sm:text-base">{label}</p>
    </div>
  )
}
