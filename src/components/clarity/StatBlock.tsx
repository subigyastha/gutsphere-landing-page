import type { ReactNode } from 'react'

interface StatBlockProps {
  value: string
  label: string
  icon?: ReactNode
  className?: string
}

export function StatBlock({ value, label, icon, className = '' }: StatBlockProps) {
  return (
    <div className={`card-surface flex flex-col items-center p-6 text-center ${className}`}>
      {icon && <div className="mb-3 text-gs-coral">{icon}</div>}
      <p className="font-display text-4xl font-semibold tracking-tight text-gs-coral sm:text-5xl">
        {value}
      </p>
      <p className="mt-2 text-lg leading-relaxed text-gs-text-primary">{label}</p>
    </div>
  )
}
