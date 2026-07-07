import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import type { BillboardSlideData } from '../reel/BillboardSlide'
import { BillboardSlide } from '../reel/BillboardSlide'
import { useOnboard } from './OnboardContext'

type OnboardBackground = 'white' | 'sand' | 'sand-light' | 'coral'

interface OnboardSectionProps {
  index: number
  id: string
  eyebrow?: string
  title: string
  titleAs?: 'h1' | 'h2'
  intro?: string
  microcopy?: string
  slides: readonly BillboardSlideData[]
  background?: OnboardBackground
  actions?: ReactNode
  isHero?: boolean
}

const bgMap: Record<OnboardBackground, string> = {
  white: 'onboard-section--white',
  sand: 'onboard-section--sand',
  'sand-light': 'onboard-section--sand-light',
  coral: 'onboard-section--coral',
}

export function OnboardSection({
  index,
  id,
  eyebrow,
  title,
  titleAs = 'h2',
  intro,
  microcopy,
  slides,
  background = 'white',
  actions,
  isHero = false,
}: OnboardSectionProps) {
  const ref = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const slideRefs = useRef<(HTMLDivElement | null)[]>([])
  const { registerSection, getCardIndex, setCardIndex } = useOnboard()
  const Heading = titleAs
  const cardIndex = getCardIndex(index)
  const cardCount = slides.length
  const hasMultiple = cardCount > 1
  const [slideStride, setSlideStride] = useState(0)

  const measureStride = useCallback(() => {
    const slide = slideRefs.current[0]
    const track = trackRef.current
    if (!slide || !track) return
    const gap = Number.parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap) || 12
    setSlideStride(slide.offsetWidth + gap)
  }, [])

  useEffect(() => {
    registerSection(index, ref.current)
    return () => registerSection(index, null)
  }, [index, registerSection])

  useEffect(() => {
    measureStride()
    const track = trackRef.current
    if (!track) return
    const observer = new ResizeObserver(measureStride)
    observer.observe(track)
    return () => observer.disconnect()
  }, [measureStride, slides.length])

  return (
    <section
      ref={ref}
      id={id}
      data-onboard-index={index}
      data-card-count={cardCount}
      {...(isHero ? { 'data-landing-hero': true } : {})}
      className={`onboard-section ${bgMap[background]}`}
      aria-labelledby={`${id}-title`}
    >
      <div className="onboard-section-inner">
        <header className="onboard-section-header">
          {eyebrow && <p className="onboard-section-eyebrow">{eyebrow}</p>}
          <Heading id={`${id}-title`} className="onboard-section-title">
            {title}
          </Heading>
          {intro && <p className="onboard-section-intro">{intro}</p>}
          {microcopy && <p className="onboard-section-micro">{microcopy}</p>}
        </header>

        <div className="onboard-section-stage" aria-live="polite">
          <div className="onboard-swipe-viewport">
            <div
              ref={trackRef}
              className="onboard-swipe-track"
              style={
                slideStride > 0
                  ? { transform: `translate3d(-${cardIndex * slideStride}px, 0, 0)` }
                  : undefined
              }
            >
              {slides.map((slide, i) => (
                <div
                  key={slide.id}
                  ref={(el) => {
                    slideRefs.current[i] = el
                  }}
                  className={`onboard-swipe-slide ${i === cardIndex ? 'is-active' : ''} ${i === cardIndex + 1 ? 'is-peek' : ''}`}
                  aria-hidden={i !== cardIndex}
                >
                  <BillboardSlide slide={slide} isHero={isHero && i === 0} />
                </div>
              ))}
            </div>
          </div>

          {hasMultiple && (
            <div className="onboard-card-dots" aria-hidden="true">
              {slides.map((slide, i) => (
                <button
                  key={slide.id}
                  type="button"
                  className={`onboard-card-dot ${i === cardIndex ? 'is-active' : ''}`}
                  onClick={() => setCardIndex(index, i)}
                  aria-label={`Show card ${i + 1}: ${slide.headline}`}
                />
              ))}
            </div>
          )}
        </div>

        {actions && <div className="onboard-section-actions">{actions}</div>}
      </div>
    </section>
  )
}
