import type { CSSProperties } from 'react'
import type { BillboardSlideData } from './BillboardSlide'
import { BillboardSlide } from './BillboardSlide'

interface ScrollyCardStackProps {
  slides: readonly BillboardSlideData[]
  activeStep: number
  hint?: 'scroll' | 'button' | 'none'
  className?: string
}

function stackStyle(cardIndex: number, activeStep: number): CSSProperties {
  const offset = cardIndex - activeStep

  if (offset < 0) {
    const depth = Math.abs(offset)
    return {
      zIndex: 10 + cardIndex,
      opacity: 0,
      transform: `translate3d(${-48 * depth}px, ${-72 * depth}px, 0) scale(0.9) rotate(-6deg)`,
      pointerEvents: 'none',
    }
  }

  if (offset === 0) {
    return {
      zIndex: 40,
      opacity: 1,
      transform: 'translate3d(0, 0, 0) scale(1) rotate(0deg)',
    }
  }

  return {
    zIndex: 40 - offset,
    opacity: Math.max(0.55, 1 - offset * 0.14),
    transform: `translate3d(${offset * 12}px, ${offset * 14}px, 0) scale(${1 - offset * 0.045}) rotate(${offset * 1.25}deg)`,
    pointerEvents: 'none',
  }
}

export function ScrollyCardStack({
  slides,
  activeStep,
  hint = 'scroll',
  className = '',
}: ScrollyCardStackProps) {
  const total = slides.length
  const remaining = Math.max(0, total - activeStep - 1)
  const activeSlide = slides[activeStep]

  if (!activeSlide) return null

  return (
    <div className={`reel-card-stack ${className}`.trim()} aria-live="polite">
      <div className="reel-card-stack-shadow" aria-hidden="true" />

      {slides.map((slide, i) => {
        const offset = i - activeStep
        const stateClass =
          offset < 0 ? 'is-past' : offset === 0 ? 'is-front' : offset === 1 ? 'is-behind is-next' : 'is-behind'

        return (
          <div
            key={slide.id}
            className={`reel-card-stack-item ${stateClass}`}
            style={stackStyle(i, activeStep)}
            aria-hidden={offset !== 0}
          >
            <BillboardSlide slide={slide} variant="compact" />
          </div>
        )
      })}

      {total > 1 && hint !== 'none' && (
        <div className="reel-card-stack-meta">
          <span className="reel-card-stack-count">
            {activeStep + 1} / {total}
          </span>
          {remaining > 0 && hint === 'scroll' && (
            <span className="reel-card-stack-more">+{remaining} more — keep scrolling</span>
          )}
          {remaining > 0 && hint === 'button' && (
            <span className="reel-card-stack-more reel-card-stack-more--button">
              +{remaining} more — tap Next
            </span>
          )}
        </div>
      )}

      <p className="sr-only">
        Card {activeStep + 1} of {total}: {activeSlide.headline}
      </p>
    </div>
  )
}
