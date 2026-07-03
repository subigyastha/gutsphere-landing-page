import type { ReactNode } from 'react'

type Style4CardVariant = 'default' | 'gradient' | 'coral' | 'insight' | 'muted'

const variantClasses: Record<Style4CardVariant, string> = {
  default: 'style4-card',
  gradient: 'style4-card style4-gradient-cell',
  coral: 'style4-card border-gs-coral/25 bg-gradient-to-br from-gs-coral to-gs-coral/90 text-white',
  insight: 'style4-card border-gs-insight-border bg-gs-insight-bg',
  muted: 'style4-card bg-gs-sand-light',
}

type Style4CardProps = {
  children: ReactNode
  className?: string
  variant?: Style4CardVariant
  as?: 'div' | 'article' | 'a'
  href?: string
  interactive?: boolean
}

export function Style4Card({
  children,
  className = '',
  variant = 'default',
  as: Tag = 'div',
  href,
  interactive = false,
}: Style4CardProps) {
  const classes = `${variantClasses[variant]} ${interactive ? 'style4-card-interactive' : ''} ${className}`

  if (Tag === 'a' && href) {
    return (
      <a href={href} className={`${classes} block`}>
        {children}
      </a>
    )
  }

  return <Tag className={classes}>{children}</Tag>
}
