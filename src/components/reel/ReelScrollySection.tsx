import { useEffect, type CSSProperties, type ReactNode } from 'react'
import { ScrollyCardStack } from './ScrollyCardStack'
import type { BillboardSlideData } from './BillboardSlide'
import { useReel } from './ReelContext'
import { useScrollyStep } from './useScrollyStep'

type ReelBackground = 'white' | 'sand' | 'sand-light' | 'coral'

interface ReelScrollySectionProps {
  index: number
  id: string
  eyebrow?: string
  title: string
  titleAs?: 'h1' | 'h2'
  intro?: string
  microcopy?: string
  slides: readonly BillboardSlideData[]
  background?: ReelBackground
  actions?: ReactNode
  isLast?: boolean
}

const bgMap: Record<ReelBackground, string> = {
  white: 'reel-section--white',
  sand: 'reel-section--sand',
  'sand-light': 'reel-section--sand-light',
  coral: 'reel-section--coral',
}

export function ReelScrollySection({
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
  isLast = false,
}: ReelScrollySectionProps) {
  const { registerReel, viewportEl } = useReel()
  const stepCount = slides.length
  const { sectionRef, sentinelRefs, activeStep } = useScrollyStep(stepCount, viewportEl)
  const Heading = titleAs
  const headingOnRight = index % 2 === 1

  useEffect(() => {
    registerReel(index, sectionRef.current)
    return () => registerReel(index, null)
  }, [index, registerReel, sectionRef])

  return (
    <section
      ref={sectionRef}
      id={id}
      data-reel-index={index}
      data-scrolly-steps={stepCount}
      className={`reel-scrolly-section reel-section--billboard ${bgMap[background]} ${headingOnRight ? 'reel-scrolly-section--heading-right' : ''} ${isLast ? 'reel-section--last' : ''}`}
      style={{ '--scrolly-steps': stepCount } as CSSProperties}
      aria-labelledby={`${id}-title`}
    >
      {/* Sticky stage: standard scrollytelling pin (graphic + narrative) */}
      <div className="reel-scrolly-sticky">
        <div className="reel-scrolly-frame">
          <aside className="reel-scrolly-heading">
            {eyebrow && <p className="reel-section-eyebrow">{eyebrow}</p>}
            <Heading id={`${id}-title`} className="reel-section-heading-title">
              {title}
            </Heading>
            {intro && <p className="reel-section-heading-intro">{intro}</p>}
            {microcopy && <p className="reel-section-heading-micro">{microcopy}</p>}
            {actions && <div className="reel-section-heading-actions">{actions}</div>}
            {stepCount > 1 && (
              <div className="reel-scrolly-progress" aria-hidden="true">
                {slides.map((slide, i) => (
                  <span
                    key={slide.id}
                    className={`reel-scrolly-progress-dot ${i === activeStep ? 'is-active' : ''} ${i < activeStep ? 'is-past' : ''}`}
                  />
                ))}
              </div>
            )}
          </aside>

          <div className="reel-scrolly-stage">
            <ScrollyCardStack slides={slides} activeStep={activeStep} />
          </div>
        </div>
      </div>

      {/* Step sentinels: drive active index while sticky panel stays pinned */}
      {slides.map((slide, i) => (
        <div
          key={`sentinel-${slide.id}`}
          ref={(el) => {
            sentinelRefs.current[i] = el
          }}
          data-step={i}
          className="reel-scrolly-sentinel"
          style={{ top: `calc(${i} * var(--reel-section-h))` }}
          aria-hidden="true"
        />
      ))}
    </section>
  )
}
