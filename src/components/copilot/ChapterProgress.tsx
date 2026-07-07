import { useCopilot } from './CopilotContext'
import { CHAPTERS } from './constants'

export function ChapterProgress() {
  const { chapterIndex, goToChapter } = useCopilot()

  return (
    <div className="copilot-chapter-progress" role="tablist" aria-label="Journey chapters">
      {CHAPTERS.map((chapter, i) => (
        <button
          key={chapter.id}
          type="button"
          role="tab"
          aria-selected={i === chapterIndex}
          aria-label={`${chapter.label} chapter`}
          className={`copilot-chapter-progress-segment ${i === chapterIndex ? 'is-active' : ''} ${i < chapterIndex ? 'is-complete' : ''}`}
          onClick={() => goToChapter(i)}
        >
          <span className="copilot-chapter-progress-bar" />
          <span className="sr-only">{chapter.label}</span>
        </button>
      ))}
    </div>
  )
}

export function ChapterRail() {
  const { chapterIndex, goToChapter } = useCopilot()

  return (
    <nav className="copilot-chapter-rail" aria-label="Chapter navigation">
      <ol className="copilot-chapter-rail-list">
        {CHAPTERS.map((chapter, i) => (
          <li key={chapter.id}>
            <button
              type="button"
              className={`copilot-chapter-rail-btn ${i === chapterIndex ? 'is-active' : ''} ${i < chapterIndex ? 'is-complete' : ''}`}
              aria-current={i === chapterIndex ? 'step' : undefined}
              onClick={() => goToChapter(i)}
            >
              <span className="copilot-chapter-rail-dot" aria-hidden="true" />
              <span className="copilot-chapter-rail-label">{chapter.label}</span>
            </button>
          </li>
        ))}
      </ol>
    </nav>
  )
}
