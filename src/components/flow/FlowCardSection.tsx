import { useState, type ReactNode } from 'react'
import type { BillboardSlideData } from '../reel/BillboardSlide'
import { BillboardSlide } from '../reel/BillboardSlide'
import { ScrollyCardStack } from '../reel/ScrollyCardStack'
import { Button } from '../Button'

type FlowBackground = 'white' | 'sand' | 'sand-light' | 'coral'

interface FlowCardSectionProps {
  id: string
  index: number
  eyebrow?: string
  title: string
  titleAs?: 'h1' | 'h2'
  intro?: string
  microcopy?: string
  slides: readonly BillboardSlideData[]
  background?: FlowBackground
  actions?: ReactNode
  isHero?: boolean
}

const bgMap: Record<FlowBackground, string> = {
  white: 'flow-section--white',
  sand: 'flow-section--sand',
  'sand-light': 'flow-section--sand-light',
  coral: 'flow-section--coral',
}

export function FlowCardSection({
  id,
  index,
  eyebrow,
  title,
  titleAs = 'h2',
  intro,
  microcopy,
  slides,
  background = 'white',
  actions,
  isHero = false,
}: FlowCardSectionProps) {
  const [activeStep, setActiveStep] = useState(0)
  const Heading = titleAs
  const headingOnRight = index % 2 === 1
  const stepCount = slides.length
  const isLastStep = activeStep >= stepCount - 1
  const singleSlide = stepCount === 1

  return (
    <section
      id={id}
      {...(isHero ? { 'data-landing-hero': true } : {})}
      className={`flow-section ${bgMap[background]} ${headingOnRight ? 'flow-section--heading-right' : ''} ${isHero ? 'flow-section--hero' : ''}`}
      aria-labelledby={`${id}-title`}
    >
      <div className="flow-section-inner">
        <div className="flow-section-grid">
          <header className="flow-section-heading">
            {eyebrow && <p className="flow-section-eyebrow">{eyebrow}</p>}
            <Heading id={`${id}-title`} className="flow-section-title">
              {title}
            </Heading>
            {intro && <p className="flow-section-intro">{intro}</p>}
            {microcopy && <p className="flow-section-micro">{microcopy}</p>}
          </header>

          <div className="flow-section-stage">
            {singleSlide ? (
              <BillboardSlide slide={slides[0]} variant="compact" isHero={isHero} />
            ) : (
              <>
                <ScrollyCardStack
                  slides={slides}
                  activeStep={activeStep}
                  hint="button"
                  className="reel-card-stack--flow"
                />
                <div className="flow-card-nav">
                  {activeStep > 0 && (
                    <Button variant="secondary" onClick={() => setActiveStep((s) => s - 1)}>
                      Previous
                    </Button>
                  )}
                  {!isLastStep ? (
                    <Button onClick={() => setActiveStep((s) => s + 1)}>Next card</Button>
                  ) : (
                    <Button variant="ghost" onClick={() => setActiveStep(0)}>
                      Review cards
                    </Button>
                  )}
                </div>
              </>
            )}
          </div>
        </div>

        {actions && <div className="flow-section-actions">{actions}</div>}
      </div>
    </section>
  )
}
