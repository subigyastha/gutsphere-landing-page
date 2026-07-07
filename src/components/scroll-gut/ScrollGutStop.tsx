import { Button } from '../Button'
import { SIGNUP_URL } from '../../constants'
import type { ScrollGutCard, ScrollGutStop } from './constants'
import type { StopPosition, StopVisibility } from './useScrollGutJourney'

interface ScrollGutStopProps {
  stop: ScrollGutStop
  position?: StopPosition
  visibility: StopVisibility
  onSelect: () => void
}

function ScrollGutCardPanel({
  card,
  isActive,
  isVisible,
  stop,
}: {
  card: ScrollGutCard
  isActive: boolean
  isVisible: boolean
  stop: ScrollGutStop
}) {
  const variant = card.variant ?? 'default'

  return (
    <article
      className={`scroll-gut-card scroll-gut-card--${variant} ${isVisible ? 'is-visible' : ''} ${isActive ? 'is-active' : ''}`}
      aria-label={card.title}
      aria-hidden={!isVisible}
    >
      {(card.eyebrow || stop.sectionEyebrow) && card.eyebrow && (
        <p className="scroll-gut-card-eyebrow">{card.eyebrow}</p>
      )}

      {card.label && <p className="scroll-gut-card-label">{card.label}</p>}

      <h3 className="scroll-gut-card-title">{card.title}</h3>
      <p className="scroll-gut-card-detail">{card.detail}</p>

      {card.routeChip && <p className="scroll-gut-card-route">{card.routeChip}</p>}

      {card.safetyNote && <p className="scroll-gut-card-safety">{card.safetyNote}</p>}

      {card.cta && (
        <div className="scroll-gut-card-cta">
          <Button
            href={card.ctaHref ?? SIGNUP_URL}
            variant={card.ctaVariant ?? 'primary'}
            data-cta="primary"
          >
            {card.cta}
          </Button>
        </div>
      )}
    </article>
  )
}

export function ScrollGutStopMarker({ stop, position, visibility, onSelect }: ScrollGutStopProps) {
  if (!position) return null

  const { isReached, isActive, visibleCardCount, activeCardIndex } = visibility
  const showSectionHeader = Boolean(stop.sectionTitle) && isReached
  const visibleCards = stop.cards.slice(0, visibleCardCount)

  return (
    <div
      className={`scroll-gut-stop ${isReached ? 'is-reached' : ''} ${isActive ? 'is-active' : ''} ${stop.isStomach ? 'is-stomach' : ''}`}
      data-side={stop.side}
      style={{ left: position.x, top: position.y }}
    >
      <button
        type="button"
        className="scroll-gut-checkpoint-dot"
        aria-label={`Go to stop ${stop.step}: ${stop.sectionTitle ?? stop.cards[0]?.title ?? stop.id}`}
        onClick={onSelect}
      >
        <span className="scroll-gut-checkpoint-step">{stop.step}</span>
      </button>

      <div className="scroll-gut-stop-cards">
        {showSectionHeader && (
          <div className="scroll-gut-stop-header">
            {stop.sectionEyebrow && <p className="scroll-gut-card-eyebrow">{stop.sectionEyebrow}</p>}
            {stop.sectionTitle && <h3 className="scroll-gut-stop-title">{stop.sectionTitle}</h3>}
            {stop.sectionMicrocopy && (
              <p className="scroll-gut-stop-micro">{stop.sectionMicrocopy}</p>
            )}
          </div>
        )}

        {visibleCards.map((card, cardIndex) => (
          <ScrollGutCardPanel
            key={card.id}
            card={card}
            stop={stop}
            isVisible
            isActive={isActive && cardIndex === activeCardIndex}
          />
        ))}
      </div>
    </div>
  )
}
