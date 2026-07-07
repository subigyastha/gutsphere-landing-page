import { useEffect, useRef, useState, type ReactNode } from 'react'

export interface ReelCarouselSlide {
  id: string
  label?: string
  content: ReactNode
}

interface ReelCarouselProps {
  slides: readonly ReelCarouselSlide[]
  ariaLabel: string
}

export function ReelCarousel({ slides, ariaLabel }: ReelCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const track = trackRef.current
    if (!track || slides.length < 2) return

    const observer = new IntersectionObserver(
      (entries) => {
        let best = -1
        let bestRatio = 0
        for (const entry of entries) {
          const index = Number((entry.target as HTMLElement).dataset.slideIndex)
          if (Number.isNaN(index)) continue
          if (entry.intersectionRatio > bestRatio) {
            bestRatio = entry.intersectionRatio
            best = index
          }
        }
        if (best >= 0 && bestRatio >= 0.5) setActiveSlide(best)
      },
      { root: track, threshold: [0.5, 0.75] },
    )

    track.querySelectorAll('[data-slide-index]').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [slides.length])

  const scrollToSlide = (index: number) => {
    const track = trackRef.current
    const slide = track?.querySelector(`[data-slide-index="${index}"]`)
    slide?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
  }

  if (slides.length === 0) return null

  return (
    <div className="reel-carousel" aria-roledescription="carousel" aria-label={ariaLabel}>
      {slides.length > 1 && (
        <p className="reel-carousel-hint" aria-hidden="true">
          Swipe to explore
          <span className="reel-carousel-hint-arrow">→</span>
        </p>
      )}

      <div ref={trackRef} className="reel-carousel-track" tabIndex={0}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            data-slide-index={index}
            className="reel-carousel-slide"
            aria-roledescription="slide"
            aria-label={slide.label ?? `Slide ${index + 1} of ${slides.length}`}
          >
            <div className="reel-carousel-slide-inner">{slide.content}</div>
          </div>
        ))}
      </div>

      {slides.length > 1 && (
        <div className="reel-carousel-dots" role="tablist" aria-label={`${ariaLabel} slides`}>
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              role="tab"
              aria-selected={activeSlide === index}
              aria-label={slide.label ?? `Slide ${index + 1}`}
              className={`reel-carousel-dot ${activeSlide === index ? 'is-active' : ''}`}
              onClick={() => scrollToSlide(index)}
            />
          ))}
        </div>
      )}
    </div>
  )
}
