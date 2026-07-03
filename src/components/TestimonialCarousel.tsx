import { useCallback, useEffect, useId, useState } from 'react'
import { testimonials, type Testimonial } from '../constants'

type TestimonialCarouselProps = {
  items?: readonly Testimonial[]
  className?: string
}

function ChevronIcon({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {direction === 'left' ? (
        <path
          d="M15 18L9 12L15 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ) : (
        <path
          d="M9 18L15 12L9 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  )
}

export function TestimonialCarousel({ items = testimonials, className = '' }: TestimonialCarouselProps) {
  const carouselId = useId()
  const [index, setIndex] = useState(0)
  const count = items.length

  const goTo = useCallback(
    (next: number) => {
      setIndex((next + count) % count)
    },
    [count],
  )

  const goPrev = useCallback(() => goTo(index - 1), [goTo, index])
  const goNext = useCallback(() => goTo(index + 1), [goTo, index])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') goPrev()
      if (event.key === 'ArrowRight') goNext()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [goNext, goPrev])

  const current = items[index]

  return (
    <div className={className}>
      <div
        className="relative"
        role="region"
        aria-roledescription="carousel"
        aria-label="Patient stories"
      >
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            type="button"
            onClick={goPrev}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gs-border bg-gs-card text-gs-text-secondary transition-colors hover:border-gs-coral hover:text-gs-coral"
            aria-label="Previous review"
            aria-controls={carouselId}
          >
            <ChevronIcon direction="left" />
          </button>

          <div className="min-w-0 flex-1 overflow-hidden" id={carouselId}>
            <figure
              key={current.name}
              className="rounded-2xl bg-[rgba(242,244,247,0.52)] px-6 py-8 text-center sm:px-12 sm:py-10 lg:px-16"
              aria-live="polite"
              aria-atomic="true"
              aria-label={`${index + 1} of ${count}`}
            >
              <blockquote className="text-base font-medium leading-relaxed text-gs-text-primary sm:text-lg sm:leading-8">
                &ldquo;{current.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8 flex flex-col items-center gap-3">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gs-coral text-xs font-semibold text-white"
                  aria-hidden="true"
                >
                  {current.initials}
                </span>
                <div>
                  <p className="text-base font-semibold text-gs-text-primary">{current.name}</p>
                  <p className="mt-1 text-sm text-gs-text-muted">{current.detail}</p>
                </div>
              </figcaption>
            </figure>
          </div>

          <button
            type="button"
            onClick={goNext}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gs-border bg-gs-card text-gs-text-secondary transition-colors hover:border-gs-coral hover:text-gs-coral"
            aria-label="Next review"
            aria-controls={carouselId}
          >
            <ChevronIcon direction="right" />
          </button>
        </div>

        <div
          className="mt-6 flex flex-wrap items-center justify-center gap-2"
          role="tablist"
          aria-label="Choose review"
        >
          {items.map((item, i) => (
            <button
              key={item.name}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show review ${i + 1} of ${count}`}
              onClick={() => setIndex(i)}
              className={`h-2 w-2 rounded-full transition-colors ${
                i === index ? 'bg-gs-coral' : 'bg-gs-border hover:bg-gs-text-hint'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
