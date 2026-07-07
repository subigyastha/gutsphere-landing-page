import { useEffect, useRef } from 'react'
import type { BillboardSlideData } from './BillboardSlide'
import { BillboardSlide } from './BillboardSlide'
import { useReel } from './ReelContext'

type ReelBackground = 'white' | 'sand' | 'sand-light' | 'coral'

interface ReelFocusedRowSectionProps {
  index: number
  id: string
  eyebrow?: string
  title: string
  intro?: string
  slides: readonly BillboardSlideData[]
  background?: ReelBackground
}

const bgMap: Record<ReelBackground, string> = {
  white: 'reel-section--white',
  sand: 'reel-section--sand',
  'sand-light': 'reel-section--sand-light',
  coral: 'reel-section--coral',
}

export function ReelFocusedRowSection({
  index,
  id,
  eyebrow,
  title,
  intro,
  slides,
  background = 'white',
}: ReelFocusedRowSectionProps) {
  const ref = useRef<HTMLElement>(null)
  const { registerReel } = useReel()

  useEffect(() => {
    registerReel(index, ref.current)
    return () => registerReel(index, null)
  }, [index, registerReel])

  return (
    <section
      ref={ref}
      id={id}
      data-reel-index={index}
      className={`reel-section reel-section--focused-row ${bgMap[background]}`}
      aria-labelledby={`${id}-title`}
    >
      <div className="reel-section-frame reel-focused-row-frame">
        <header className="reel-focused-row-header">
          {eyebrow && <p className="reel-section-eyebrow">{eyebrow}</p>}
          <h2 id={`${id}-title`} className="reel-focused-row-title">
            {title}
          </h2>
          {intro && <p className="reel-focused-row-intro">{intro}</p>}
        </header>

        <div className="reel-focused-row-cards" role="list">
          {slides.map((slide) => (
            <div key={slide.id} className="reel-focused-row-card" role="listitem">
              <BillboardSlide slide={slide} variant="compact" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
