import { useGuided } from './GuidedContext'
import { CARD_NAV_LABELS, JOURNEY_CARDS } from './constants'

export function GuidedProgressRail() {
  const { activeCardIndex, scrollToCard } = useGuided()

  return (
    <>
      <nav className="guided-desktop-rail" aria-label="Journey progress">
        <ol className="guided-desktop-rail-list">
          {JOURNEY_CARDS.map((card, i) => (
            <li key={card.id}>
              <button
                type="button"
                className={`guided-desktop-rail-step ${activeCardIndex === i ? 'is-active' : ''} ${activeCardIndex > i ? 'is-complete' : ''}`}
                onClick={() => scrollToCard(i)}
                aria-current={activeCardIndex === i ? 'step' : undefined}
              >
                <span className="guided-desktop-rail-dot" aria-hidden="true" />
                <span className="guided-desktop-rail-label">{CARD_NAV_LABELS[i]}</span>
              </button>
            </li>
          ))}
        </ol>
      </nav>

      <div className="guided-mobile-pill" aria-live="polite">
        <span className="guided-mobile-pill-text">
          Card {activeCardIndex + 1} of {JOURNEY_CARDS.length}
        </span>
        <span className="guided-mobile-pill-stage">{CARD_NAV_LABELS[activeCardIndex]}</span>
      </div>
    </>
  )
}
