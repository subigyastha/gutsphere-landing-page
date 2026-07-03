import type { ReactNode } from 'react'

export function Style4Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-widest text-gs-coral">{children}</p>
  )
}
