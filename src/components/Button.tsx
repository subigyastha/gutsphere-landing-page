import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  href?: string
  children: ReactNode
}

const styles: Record<Variant, string> = {
  primary:
    'bg-gs-coral text-white hover:opacity-90 shadow-[0_1px_3px_rgba(0,0,0,0.08)] min-h-12',
  secondary:
    'bg-gs-card text-gs-text-primary border border-gs-border hover:bg-gs-sand-light min-h-12',
  ghost: 'text-gs-coral hover:bg-gs-coral-glow min-h-12',
}

export function Button({
  variant = 'primary',
  href,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-opacity duration-200 ${styles[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} {...(props as object)}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}
