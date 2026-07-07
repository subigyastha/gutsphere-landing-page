import type { ImgHTMLAttributes } from 'react'

const LOGO_FULL = '/gutsphere-logo.png'
const LOGO_MARK = '/gutsphere-icon.png'

export type GutsphereLogoProps = {
  variant?: 'full' | 'mark'
  height?: number
} & Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt' | 'height'>

export function GutsphereLogo({
  variant = 'full',
  height = 30,
  className = '',
  ...rest
}: GutsphereLogoProps) {
  const src = variant === 'mark' ? LOGO_MARK : LOGO_FULL

  return (
    <img
      src={src}
      alt="Gutsphere"
      height={height}
      width={variant === 'mark' ? height : undefined}
      className={`gs-logo${className ? ` ${className}` : ''}`}
      decoding="async"
      {...rest}
    />
  )
}

export function GutsphereLogoLink({
  href = '#top',
  variant = 'full',
  height = 30,
  className = '',
}: {
  href?: string
  variant?: 'full' | 'mark'
  height?: number
  className?: string
}) {
  return (
    <a href={href} className={`gs-logo-link${className ? ` ${className}` : ''}`} aria-label="Gutsphere home">
      <GutsphereLogo variant={variant} height={height} />
    </a>
  )
}
