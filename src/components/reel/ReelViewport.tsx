import { useEffect, useRef, type ReactNode } from 'react'
import { REEL_SECTION_COUNT } from '../journey/constants'
import { useReel } from './ReelContext'

export function ReelViewport({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const { registerViewport, activeReel, scrollToReel } = useReel()

  useEffect(() => {
    registerViewport(ref.current)
    return () => registerViewport(null)
  }, [registerViewport])

  useEffect(() => {
    document.documentElement.classList.add('reel-mode')
    return () => document.documentElement.classList.remove('reel-mode')
  }, [])

  return (
    <div className="reel-landing-shell">
      <div ref={ref} className="reel-viewport">
        {children}
      </div>

      <nav className="reel-rail" aria-label="Section progress">
        {Array.from({ length: REEL_SECTION_COUNT }, (_, i) => (
          <button
            key={i}
            type="button"
            className={`reel-rail-dot ${activeReel === i ? 'is-active' : ''} ${i < activeReel ? 'is-past' : ''}`}
            aria-label={`Go to section ${i + 1}`}
            aria-current={activeReel === i ? 'step' : undefined}
            onClick={() => scrollToReel(i)}
          />
        ))}
        <span className="sr-only">
          Section {activeReel + 1} of {REEL_SECTION_COUNT}
        </span>
      </nav>

      {activeReel < REEL_SECTION_COUNT - 1 && (
        <div className="reel-scroll-cue" aria-hidden="true">
          <span className="reel-scroll-cue-line" />
        </div>
      )}
    </div>
  )
}
