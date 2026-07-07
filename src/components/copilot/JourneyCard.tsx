import { Button } from '../Button'
import { SIGNUP_URL } from '../../constants'
import type { ChapterCard } from './constants'
import { COPILOT_PRIMARY_CTA } from './constants'
import { useCopilot } from './CopilotContext'

interface JourneyCardProps {
  card: ChapterCard
  isFirstInChapter: boolean
  isHero?: boolean
}

export function JourneyCard({ card, isFirstInChapter, isHero = false }: JourneyCardProps) {
  const { nextChapter, restartJourney } = useCopilot()
  const HeadingTag = isHero ? 'h1' : 'h2'

  return (
    <article className="copilot-journey-card">
      <div className="copilot-journey-card-inner">
        {card.eyebrow && <p className="copilot-journey-card-eyebrow">{card.eyebrow}</p>}
        <HeadingTag className="copilot-journey-card-headline">{card.headline}</HeadingTag>
        <p className="copilot-journey-card-subcopy">{card.subcopy}</p>

        {card.sectionCta && (
          <div className="copilot-journey-card-ctas">
            <Button href={SIGNUP_URL} data-cta="primary">
              {card.sectionCta}
            </Button>
          </div>
        )}

        {card.safetyNote && <p className="copilot-journey-card-safety">{card.safetyNote}</p>}

        {card.showPrimaryCta && (
          <div className="copilot-journey-card-ctas">
            <Button href={SIGNUP_URL} data-cta="primary">
              {COPILOT_PRIMARY_CTA}
            </Button>
            {card.showSecondaryCta && (
              <Button
                variant="secondary"
                onClick={isHero ? () => nextChapter() : () => restartJourney()}
              >
                {card.secondaryCtaLabel ?? 'Explore Again'}
              </Button>
            )}
          </div>
        )}

        {isFirstInChapter && !card.showPrimaryCta && !card.sectionCta && (
          <p className="copilot-journey-card-stand-alone-hint sr-only">
            Core chapter message — additional cards deepen this topic.
          </p>
        )}
      </div>
    </article>
  )
}
