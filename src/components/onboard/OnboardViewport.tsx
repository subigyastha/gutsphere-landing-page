import { useEffect, useRef, type ReactNode } from 'react'
import { useOnboard } from './OnboardContext'

export function OnboardViewport({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const { registerViewport, activeSection, sectionCount } = useOnboard()

  useEffect(() => {
    registerViewport(ref.current)
    return () => registerViewport(null)
  }, [registerViewport])

  return (
    <div className="onboard-shell">
      <div ref={ref} className="onboard-viewport">
        {children}
      </div>

      <nav className="onboard-rail" aria-label="Section progress">
        {Array.from({ length: sectionCount }, (_, i) => (
          <span
            key={i}
            className={`onboard-rail-dot ${activeSection === i ? 'is-active' : ''} ${i < activeSection ? 'is-past' : ''}`}
            aria-hidden="true"
          />
        ))}
        <span className="sr-only">
          Section {activeSection + 1} of {sectionCount}
        </span>
      </nav>
    </div>
  )
}
