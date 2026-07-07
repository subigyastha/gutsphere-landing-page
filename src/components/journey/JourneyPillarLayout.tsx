import type { ReactNode } from 'react'

interface JourneyPillarHeaderProps {
  pillar: string
  title: string
  description: string
  accent?: 'green' | 'coral' | 'neutral'
}

const accentClass = {
  green: 'text-gs-green',
  coral: 'text-gs-coral',
  neutral: 'text-gs-text-muted',
} as const

export function JourneyPillarHeader({
  pillar,
  title,
  description,
  accent = 'neutral',
}: JourneyPillarHeaderProps) {
  return (
    <header className="journey-pillar-header">
      <p className={`text-[10px] font-semibold uppercase tracking-widest ${accentClass[accent]}`}>
        {pillar}
      </p>
      <h2 className="font-display mt-1 font-semibold leading-snug text-gs-text-primary">{title}</h2>
      <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-gs-text-secondary">{description}</p>
    </header>
  )
}

interface CapabilityListProps {
  items: readonly { label: string; detail: string }[]
  limit?: number
}

export function JourneyCapabilityList({ items, limit }: CapabilityListProps) {
  const visible = limit != null && limit > 0 ? items.slice(0, limit) : items

  return (
    <ul className="space-y-3" role="list">
      {visible.map((item) => (
        <li key={item.label} className="rounded-xl border border-gs-border bg-gs-card px-4 py-3">
          <p className="text-sm font-medium text-gs-text-primary">{item.label}</p>
          <p className="mt-1 text-sm leading-relaxed text-gs-text-secondary">{item.detail}</p>
        </li>
      ))}
    </ul>
  )
}

export function JourneyMockShell({
  label,
  children,
  footer,
}: {
  label: string
  children: ReactNode
  footer?: ReactNode
}) {
  return (
    <div className="journey-compact-mock">
      <div className="journey-compact-mock-header">{label}</div>
      <div className="journey-compact-mock-body min-h-0 overflow-hidden">{children}</div>
      {footer && (
        <div className="shrink-0 border-t border-gs-border bg-gs-sand-light px-3 py-1.5">{footer}</div>
      )}
    </div>
  )
}
