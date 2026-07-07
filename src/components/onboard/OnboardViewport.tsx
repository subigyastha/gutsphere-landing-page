import { useEffect, useRef, type ReactNode } from 'react'
import { useOnboard } from './OnboardContext'

interface OnboardViewportProps {
  children: ReactNode
  sectionLabels?: readonly string[]
}

export function OnboardViewport({ children, sectionLabels = [] }: OnboardViewportProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { registerViewport, activeSection, sectionCount } = useOnboard()

  useEffect(() => {
    registerViewport(ref.current)
    return () => registerViewport(null)
  }, [registerViewport])

  return (
    <div className="onboard-shell">
      <header className="onboard-app-header" aria-label="Onboard app header">
        <div className="onboard-app-header-bar">
          <div className="onboard-app-brand" aria-label="GutSphere">
            <span className="onboard-app-brand-mark" aria-hidden="true">
              G
            </span>
            <span className="onboard-app-brand-text">GutSphere</span>
          </div>

          <div className="onboard-app-header-meta">
            <p className="onboard-app-header-subtitle">
              {sectionLabels[activeSection] ?? `Section ${activeSection + 1}`}
            </p>
            <p className="onboard-app-header-count" aria-hidden="true">
              {activeSection + 1}/{sectionCount}
            </p>
          </div>

          <button type="button" className="onboard-app-header-menu" aria-label="Open menu">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </header>

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
