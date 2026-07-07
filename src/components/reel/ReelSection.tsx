import { useEffect, useRef, type ReactNode } from 'react'
import type { BillboardSlideData } from './BillboardSlide'
import { BillboardCarousel } from './BillboardCarousel'
import { useReel } from './ReelContext'

type ReelBackground = 'white' | 'sand' | 'sand-light' | 'coral'

interface ReelSectionProps {
  index: number
  id: string
  eyebrow?: string
  title: string
  titleAs?: 'h1' | 'h2'
  intro?: string
  microcopy?: string
  slides: readonly BillboardSlideData[]
  carouselLabel: string
  background?: ReelBackground
  actions?: ReactNode
  isLast?: boolean
  isHero?: boolean
  cardLayout?: 'carousel' | 'row'
}

const bgMap: Record<ReelBackground, string> = {
  white: 'reel-section--white',
  sand: 'reel-section--sand',
  'sand-light': 'reel-section--sand-light',
  coral: 'reel-section--coral',
}

export function ReelSection({
  index,
  id,
  eyebrow,
  title,
  titleAs = 'h2',
  intro,
  microcopy,
  slides,
  carouselLabel,
  background = 'white',
  actions,
  isLast = false,
  isHero = false,
  cardLayout = 'carousel',
}: ReelSectionProps) {
  const ref = useRef<HTMLElement>(null)
  const { registerReel } = useReel()
  const Heading = titleAs
  const headingOnRight = index % 2 === 1
  const hasMultipleCards = slides.length > 1 && cardLayout === 'carousel'

  useEffect(() => {
    registerReel(index, ref.current)
    return () => registerReel(index, null)
  }, [index, registerReel])

  return (
    <section
      ref={ref}
      id={id}
      data-reel-index={index}
      {...(isHero ? { 'data-landing-hero': true } : {})}
      className={`reel-section reel-section--billboard ${bgMap[background]} ${headingOnRight ? 'reel-section--heading-right' : ''} ${isLast ? 'reel-section--last' : ''}`}
      aria-labelledby={`${id}-title`}
    >
      <div className="reel-section-frame">
        <div className="reel-section-split">
          <header className="reel-section-heading">
            {eyebrow && <p className="reel-section-eyebrow">{eyebrow}</p>}
            <Heading id={`${id}-title`} className="reel-section-heading-title">
              {title}
            </Heading>
            {intro && <p className="reel-section-heading-intro">{intro}</p>}
            {microcopy && <p className="reel-section-heading-micro">{microcopy}</p>}
            {hasMultipleCards && (
              <p className="reel-section-swipe-hint">
                <span className="reel-section-swipe-hint-arrows" aria-hidden="true">
                  ← →
                </span>
                Swipe or use arrows to explore cards
              </p>
            )}
            {actions && <div className="reel-section-heading-actions">{actions}</div>}
          </header>

          <div className="reel-section-carousel-col">
            <BillboardCarousel slides={slides} ariaLabel={carouselLabel} isHero={isHero} layout={cardLayout} />
          </div>
        </div>
      </div>
    </section>
  )
}
