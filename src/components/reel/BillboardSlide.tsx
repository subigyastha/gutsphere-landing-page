import type { ReactNode } from 'react'
import type { BillboardVisualKind } from './BillboardVisual'
import { BillboardVisual } from './BillboardVisual'

export interface BillboardSlideData {
  id: string
  label: string
  visual: BillboardVisualKind
  visualLabel?: string
  headline: string
  tagline?: string
  children?: ReactNode
}

interface BillboardSlideProps {
  slide: BillboardSlideData
  isHero?: boolean
  variant?: 'default' | 'compact'
}

export function BillboardSlide({ slide, isHero = false, variant = 'default' }: BillboardSlideProps) {
  const Heading = isHero ? 'h1' : 'h3'

  return (
    <article className={`billboard-slide billboard-slide--card ${variant === 'compact' ? 'billboard-slide--compact' : ''}`}>
      <BillboardVisual kind={slide.visual} label={slide.visualLabel} />
      <Heading className="billboard-slide-headline">{slide.headline}</Heading>
      {slide.tagline && <p className="billboard-slide-tagline">{slide.tagline}</p>}
      {slide.children && <div className="billboard-slide-extra">{slide.children}</div>}
    </article>
  )
}
