import { useCallback, useEffect, useRef, useState } from 'react'
import type { BillboardSlideData } from './BillboardSlide'
import { BillboardSlide } from './BillboardSlide'

interface BillboardCarouselProps {
  slides: readonly BillboardSlideData[]
  ariaLabel: string
  isHero?: boolean
  layout?: 'carousel' | 'row'
}

function ChevronLeft() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ChevronRight() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function BillboardCarousel({ slides, ariaLabel, isHero = false, layout = 'carousel' }: BillboardCarouselProps) {
  const [index, setIndex] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])
  const total = slides.length
  const isCarousel = layout === 'carousel'

  const scrollToIndex = useCallback((next: number) => {
    const clamped = Math.max(0, Math.min(total - 1, next))
    itemRefs.current[clamped]?.scrollIntoView({
      behavior: 'smooth',
      inline: 'start',
      block: 'nearest',
    })
    setIndex(clamped)
  }, [total])

  const goPrev = useCallback(() => scrollToIndex(index - 1), [index, scrollToIndex])
  const goNext = useCallback(() => scrollToIndex(index + 1), [index, scrollToIndex])

  useEffect(() => {
    if (!isCarousel) return
    const track = trackRef.current
    if (!track) return

    const onScroll = () => {
      const items = itemRefs.current.filter(Boolean) as HTMLDivElement[]
      if (!items.length) return

      const trackLeft = track.getBoundingClientRect().left
      let closest = 0
      let closestDist = Infinity

      items.forEach((item, i) => {
        const dist = Math.abs(item.getBoundingClientRect().left - trackLeft)
        if (dist < closestDist) {
          closestDist = dist
          closest = i
        }
      })

      setIndex(closest)
    }

    track.addEventListener('scroll', onScroll, { passive: true })
    return () => track.removeEventListener('scroll', onScroll)
  }, [isCarousel, slides.length])

  useEffect(() => {
    if (!isCarousel) return
    const track = trackRef.current
    if (!track) return

    const onWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return
      const canScrollLeft = track.scrollLeft > 0
      const canScrollRight = track.scrollLeft + track.clientWidth < track.scrollWidth - 1
      const scrollingDown = event.deltaY > 0
      const shouldConsume = (scrollingDown && canScrollRight) || (!scrollingDown && canScrollLeft)
      if (!shouldConsume) return
      event.preventDefault()
      track.scrollBy({ left: event.deltaY * 1.1, behavior: 'smooth' })
    }

    track.addEventListener('wheel', onWheel, { passive: false })
    return () => track.removeEventListener('wheel', onWheel)
  }, [isCarousel])

  if (!slides.length) return null

  const showNav = isCarousel && total > 1

  return (
    <div
      className="billboard-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
    >
      <div ref={trackRef} className={`billboard-carousel-viewport ${isCarousel ? '' : 'is-row'}`} tabIndex={0} aria-live="polite">
        <div className={`billboard-carousel-track ${isCarousel ? '' : 'is-row'}`}>
          {slides.map((slide, i) => (
            <div
              key={slide.id}
              ref={(el) => {
                itemRefs.current[i] = el
              }}
              className={`billboard-carousel-item ${isCarousel ? '' : 'is-row'} ${i === index ? 'is-active' : ''} ${i === index + 1 ? 'is-peek' : ''}`}
              aria-hidden={isCarousel ? i !== index : undefined}
            >
              <BillboardSlide slide={slide} isHero={isHero && i === 0} />
            </div>
          ))}
        </div>
      </div>

      {showNav && (
        <div className="billboard-carousel-controls">
          <button
            type="button"
            className="billboard-carousel-arrow"
            onClick={goPrev}
            disabled={index === 0}
            aria-label="Previous card"
          >
            <ChevronLeft />
          </button>

          <p className="billboard-carousel-counter">
            <span className="billboard-carousel-counter-current">{index + 1}</span>
            <span className="billboard-carousel-counter-sep">/</span>
            <span className="billboard-carousel-counter-total">{total}</span>
          </p>

          <button
            type="button"
            className="billboard-carousel-arrow"
            onClick={goNext}
            disabled={index === total - 1}
            aria-label="Next card"
          >
            <ChevronRight />
          </button>
        </div>
      )}
    </div>
  )
}
