import type { Chapter } from './constants'
import { CardDots } from './CardDots'
import { ChapterScene } from './ChapterScene'
import { JourneyCard } from './JourneyCard'
import { PlaneAnchor } from './PlaneAnchor'
import { SwipeableCards } from './SwipeableCards'
import { useCopilot } from './CopilotContext'

interface JourneyChapterProps {
  chapter: Chapter
  chapterIndex: number
}

export function JourneyChapter({ chapter, chapterIndex }: JourneyChapterProps) {
  const { cardIndex } = useCopilot()
  const cardProgress = chapter.cards.length > 1 ? cardIndex / (chapter.cards.length - 1) : 1
  const isHero = chapterIndex === 0

  return (
    <section
      id={`copilot-chapter-${chapter.id}`}
      className={`copilot-chapter copilot-chapter--${chapter.theme} is-active`}
      aria-labelledby={`copilot-chapter-heading-${chapter.id}`}
    >
      <h2 id={`copilot-chapter-heading-${chapter.id}`} className="sr-only">
        {chapter.label}
      </h2>

      <div className="copilot-chapter-visual">
        <ChapterScene
          theme={chapter.theme}
          visualType={chapter.cards[cardIndex]?.visualType}
          cardProgress={cardProgress}
          cardCount={chapter.cards.length}
          cardIndex={cardIndex}
        />
        <PlaneAnchor theme={chapter.theme} planePosition={chapter.planePosition} />
      </div>

      <div className="copilot-chapter-content">
        <SwipeableCards cardCount={chapter.cards.length}>
          {chapter.cards.map((card, i) => (
            <div key={card.id} className="copilot-card-slide" aria-hidden={i !== cardIndex}>
              <JourneyCard
                card={card}
                isFirstInChapter={i === 0}
                isHero={isHero && i === 0}
              />
            </div>
          ))}
        </SwipeableCards>

        <div className="copilot-chapter-controls">
          <CardDots count={chapter.cards.length} />
          {chapter.safetyMicrocopy && (
            <p className="copilot-chapter-safety">{chapter.safetyMicrocopy}</p>
          )}
        </div>
      </div>
    </section>
  )
}
