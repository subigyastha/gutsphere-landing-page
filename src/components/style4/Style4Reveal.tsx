import type { ReactNode } from 'react'
import { useReveal } from '../../hooks/useReveal'

type Style4RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'section' | 'article' | 'li'
}

export function Style4Reveal({
  children,
  className = '',
  delay = 0,
  as: Tag = 'div',
}: Style4RevealProps) {
  const { ref, visible } = useReveal<HTMLElement>()

  return (
    <Tag
      ref={ref as never}
      className={`style4-reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}
