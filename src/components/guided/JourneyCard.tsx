import { useEffect, useRef } from 'react'
import { Button } from '../Button'
import { ABOUT_URL, SIGNUP_URL } from '../../constants'
import type { JourneyCardData } from './constants'
import {
  GUIDED_EXPLORE_AGAIN_CTA,
  GUIDED_PRIMARY_CTA,
  GUIDED_SECONDARY_CTA,
} from './constants'
import { useGuided } from './GuidedContext'
import { CardScene } from './CardScene'

interface JourneyCardProps {
  card: JourneyCardData
}

export function JourneyCard({ card }: JourneyCardProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const { registerCard, cardProgress, scrollToCard } = useGuided()
  const progress = cardProgress[card.id] ?? 0
  const isHero = card.cardType === 'hero'
  const isClarity = card.theme === 'clarity'
  const isFounder = card.theme === 'founder'
  const heroTakeoff = isHero ? Math.min(1, Math.max(0, 1 - progress)) : 0
  const HeadingTag = isHero ? 'h1' : 'h2'

  useEffect(() => {
    registerCard(card.id, card.index, sectionRef.current)
    return () => registerCard(card.id, card.index, null)
  }, [card.id, card.index, registerCard])

  return (
    <section
      ref={sectionRef}
      id={`guided-card-${card.id}`}
      data-card-id={card.id}
      data-card-index={card.index}
      {...(isHero ? { 'data-landing-hero': true } : {})}
      className={`journey-card journey-card--${card.theme} journey-card--${card.cardType} ${progress > 0.2 ? 'is-active' : ''}`}
      aria-labelledby={`guided-heading-${card.id}`}
    >
      <div className="journey-card-shell">
        <div className="journey-card-grid">
          <div className="journey-card-copy">
            <p className="journey-card-eyebrow">{card.eyebrow}</p>
            <HeadingTag id={`guided-heading-${card.id}`} className="journey-card-heading">
              {card.heading}
            </HeadingTag>
            <p className="journey-card-supporting">{card.supporting}</p>

            {card.bullets && card.bullets.length > 0 && (
              <ul className="journey-card-bullets" role="list">
                {card.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}

            {card.shiftPairs && card.shiftPairs.length > 0 && (
              <ul className="journey-card-shifts" role="list">
                {card.shiftPairs.map((pair) => (
                  <li key={pair.from}>
                    <span className="journey-card-shift-from">&ldquo;{pair.from}&rdquo;</span>
                    <span className="journey-card-shift-arrow" aria-hidden="true">
                      →
                    </span>
                    <span className="journey-card-shift-to">&ldquo;{pair.to}&rdquo;</span>
                  </li>
                ))}
              </ul>
            )}

            {card.sectionCta && (
              <div className="journey-card-ctas journey-card-ctas--mid">
                <Button href={SIGNUP_URL} data-cta="primary">
                  {card.sectionCta}
                </Button>
              </div>
            )}

            {card.safetyNote && (
              <p className="journey-card-safety">{card.safetyNote}</p>
            )}

            {card.showPrimaryCta && (
              <div className="journey-card-ctas">
                <Button
                  href={SIGNUP_URL}
                  data-cta="primary"
                  className={isClarity ? '!bg-white !text-gs-coral hover:!opacity-90' : ''}
                >
                  {GUIDED_PRIMARY_CTA}
                </Button>
                {isHero ? (
                  <Button variant="secondary" onClick={() => scrollToCard(1)}>
                    {GUIDED_SECONDARY_CTA}
                  </Button>
                ) : (
                  <Button
                    variant="ghost"
                    className="journey-card-cta-ghost"
                    onClick={() => {
                      scrollToCard(0)
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                  >
                    {GUIDED_EXPLORE_AGAIN_CTA}
                  </Button>
                )}
              </div>
            )}

            {card.showMidCta && (
              <div className="journey-card-ctas journey-card-ctas--mid">
                <Button href={SIGNUP_URL} data-cta="primary">
                  {GUIDED_PRIMARY_CTA}
                </Button>
              </div>
            )}

            {isFounder && (
              <div className="journey-card-ctas journey-card-ctas--mid">
                <Button variant="secondary" href={ABOUT_URL} className="w-full sm:w-auto">
                  Why We Built GutSphere
                </Button>
              </div>
            )}

            <p className="journey-card-meaning">{card.productMeaning}</p>
          </div>

          <div className="journey-card-visual">
            <CardScene
              theme={card.theme}
              progress={progress}
              obstacles={card.obstacles}
              planePosition={card.planePosition}
              heroTakeoff={heroTakeoff}
            />
          </div>
        </div>

        <aside className="journey-card-hud" aria-label="GutSphere copilot message">
          <span className="journey-card-hud-label">GutSphere Copilot</span>
          <p className="journey-card-hud-message">{card.hudMessage}</p>
        </aside>
      </div>
    </section>
  )
}
