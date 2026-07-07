import { useGuided } from './GuidedContext'
import { JOURNEY_CARDS } from './constants'

export function GuidedHUD() {
  const { hudMessage, activeCardIndex } = useGuided()
  const card = JOURNEY_CARDS[activeCardIndex]

  return (
    <div className="guided-hud" role="status" aria-live="polite" aria-atomic="true">
      <div className="guided-hud-inner">
        <div className="guided-hud-top">
          <span className="guided-hud-label">GutSphere Copilot</span>
          <span className="guided-hud-zone">
            Card {activeCardIndex + 1} of {JOURNEY_CARDS.length}
          </span>
        </div>
        <span className="guided-hud-message">{hudMessage}</span>
        <span className="guided-hud-stage">{card?.eyebrow}</span>
      </div>
    </div>
  )
}
