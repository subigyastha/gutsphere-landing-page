import { Button } from '../Button'
import { GutsphereLogo } from '../GutsphereLogo'
import { SIGNUP_URL } from '../../constants'
import { ChapterProgress } from './ChapterProgress'
import { COPILOT_PRIMARY_CTA } from './constants'
import { useCopilot } from './CopilotContext'

export function LandingAppShell({ children }: { children: React.ReactNode }) {
  const {
    activeChapter,
    chapterIndex,
    cardIndex,
    totalChapters,
    skipToCta,
    nextCard,
    prevCard,
    nextChapter,
    prevChapter,
  } = useCopilot()

  const chapter = activeChapter

  const atFirst = chapterIndex === 0 && cardIndex === 0
  const atLast =
    chapterIndex === totalChapters - 1 &&
    cardIndex === chapter.cards.length - 1

  return (
    <div className="copilot-app-shell">
      <header className="copilot-top-bar">
        <div className="copilot-top-bar-brand">
          <GutsphereLogo height={28} />
        </div>
        <div className="copilot-top-bar-meta">
          <span className="copilot-top-bar-chapter">{activeChapter.label}</span>
          <span className="copilot-top-bar-card-count">
            {cardIndex + 1}/{activeChapter.cards.length}
          </span>
        </div>
        <button type="button" className="copilot-skip-link" onClick={skipToCta}>
          Skip to check-in
        </button>
      </header>

      <ChapterProgress />

      <div className="copilot-app-body">{children}</div>

      <div className="copilot-nav-controls" aria-label="Chapter and card navigation">
        <button
          type="button"
          className="copilot-nav-btn"
          disabled={atFirst}
          aria-label="Previous"
          onClick={() => {
            if (cardIndex > 0) prevCard()
            else prevChapter()
          }}
        >
          ←
        </button>
        <button
          type="button"
          className="copilot-nav-btn"
          disabled={atLast}
          aria-label="Next"
          onClick={() => {
            if (cardIndex < chapter.cards.length - 1) nextCard()
            else nextChapter()
          }}
        >
          →
        </button>
      </div>

      <noscript>
        <div className="copilot-noscript-cta">
          <p>JavaScript is required for the full journey experience.</p>
          <Button href={SIGNUP_URL}>{COPILOT_PRIMARY_CTA}</Button>
        </div>
      </noscript>
    </div>
  )
}
