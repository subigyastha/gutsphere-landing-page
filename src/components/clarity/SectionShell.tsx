import type { ReactNode } from 'react'

interface SectionShellProps {
  id?: string
  children: ReactNode
  className?: string
  background?: 'sand' | 'sand-light' | 'card' | 'card-elevated' | 'insight'
  ariaLabelledBy?: string
}

const bgMap = {
  sand: 'bg-gs-sand',
  'sand-light': 'bg-gs-sand-light',
  card: 'bg-gs-card',
  'card-elevated': 'bg-gs-card-elevated',
  insight: 'gs-insight-section',
}

export function SectionShell({
  id,
  children,
  className = '',
  background = 'sand',
  ariaLabelledBy,
}: SectionShellProps) {
  const bg = bgMap[background]
  const isInsight = background === 'insight'

  return (
    <section
      id={id}
      className={`section-pad ${isInsight ? '' : bg} ${className}`}
      aria-labelledby={ariaLabelledBy}
    >
      <div className={`container-narrow ${isInsight ? `${bg} rounded-3xl px-6 py-12 sm:px-10 sm:py-14` : ''}`}>
        {children}
      </div>
    </section>
  )
}
