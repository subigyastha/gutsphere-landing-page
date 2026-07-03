import { Link } from 'react-router-dom'
import { SIGNUP_URL } from '../../constants'

const forks = [
  { slug: 'bloating', label: 'Bloating' },
  { slug: 'ibs', label: 'Irregular / changing' },
] as const

interface SymptomEntryForkProps {
  intro?: string
  conditionBase?: string
}

export function SymptomEntryFork({
  intro = 'Not sure where to start?',
  conditionBase = '/conditions',
}: SymptomEntryForkProps) {
  return (
    <div className="card-surface p-5 sm:p-6">
      <p className="text-sm font-medium text-gs-text-primary">{intro}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {forks.map((item) => (
          <Link
            key={item.slug}
            to={`${conditionBase}/${item.slug}`}
            className="min-h-12 rounded-xl border border-gs-border bg-gs-sand-light px-4 py-2.5 text-sm font-medium text-gs-text-primary transition-colors hover:border-gs-coral hover:text-gs-coral"
          >
            {item.label}
          </Link>
        ))}
        <a
          href={SIGNUP_URL}
          className="min-h-12 rounded-xl px-4 py-2.5 text-sm font-medium text-gs-coral hover:underline"
        >
          Not sure — start anyway
        </a>
      </div>
    </div>
  )
}
