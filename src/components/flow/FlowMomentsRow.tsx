import type { BillboardSlideData } from '../reel/BillboardSlide'
import { BillboardSlide } from '../reel/BillboardSlide'

type FlowBackground = 'white' | 'sand' | 'sand-light'

interface FlowMomentsRowProps {
  id: string
  eyebrow?: string
  title: string
  intro?: string
  slides: readonly BillboardSlideData[]
  background?: FlowBackground
}

const bgMap: Record<FlowBackground, string> = {
  white: 'flow-section--white',
  sand: 'flow-section--sand',
  'sand-light': 'flow-section--sand-light',
}

export function FlowMomentsRow({
  id,
  eyebrow,
  title,
  intro,
  slides,
  background = 'sand-light',
}: FlowMomentsRowProps) {
  return (
    <section
      id={id}
      className={`flow-section flow-section--moments ${bgMap[background]}`}
      aria-labelledby={`${id}-title`}
    >
      <div className="flow-section-inner">
        <header className="flow-moments-header">
          {eyebrow && <p className="flow-section-eyebrow">{eyebrow}</p>}
          <h2 id={`${id}-title`} className="flow-section-title">
            {title}
          </h2>
          {intro && <p className="flow-section-intro">{intro}</p>}
        </header>

        <div className="flow-moments-row" role="list">
          {slides.map((slide) => (
            <div key={slide.id} className="flow-moments-card" role="listitem">
              <BillboardSlide slide={slide} variant="compact" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
