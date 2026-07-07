import type { VisualType, ChapterTheme } from './constants'
import {
  CHECKIN_FIELDS,
  CONFUSION_OBSTACLES,
  COPILOT_ROUTE,
  PATTERN_FLOW,
  VISIT_PREP_ITEMS,
} from './constants'

interface ChapterSceneProps {
  theme: ChapterTheme
  visualType?: VisualType
  cardProgress: number
  cardCount: number
  cardIndex: number
}

export function ChapterScene({
  theme,
  visualType,
  cardProgress,
  cardCount,
  cardIndex,
}: ChapterSceneProps) {
  const organized = cardProgress > 0.35 || cardIndex > 0
  const clearing = cardIndex >= Math.floor(cardCount / 2)

  return (
    <div
      className={`copilot-scene copilot-scene--${theme} ${organized ? 'is-organized' : ''} ${clearing ? 'is-clearing' : ''}`}
      aria-hidden="true"
    >
      {theme === 'confusion' && <ConfusionScene organized={organized} cardIndex={cardIndex} />}
      {theme === 'boarding' && visualType === 'route' && <RouteScene />}
      {theme === 'boarding' && visualType === 'pilot' && <PilotScene />}
      {theme === 'boarding' && visualType === 'tracker-diff' && <TrackerDiffScene />}
      {theme === 'self-care' && <CheckinScene organized={clearing} />}
      {theme === 'clinical-navigation' && <VisitPrepScene organized={organized} />}
      {theme === 'clinical-intelligence' && <PatternScene organized={organized} cardIndex={cardIndex} />}
      {theme === 'trust' && <TrustScene />}
      {theme === 'clarity' && <ClarityScene organized={organized} />}
      {theme === 'confusion' && visualType === 'route' && cardIndex === cardCount - 1 && (
        <RouteScene />
      )}
    </div>
  )
}

function RouteScene() {
  return (
    <div className="copilot-scene-route">
      <svg viewBox="0 0 200 120" className="copilot-scene-route-svg">
        <path
          d="M20 100 Q 70 70, 110 50 T 180 20"
          fill="none"
          stroke="var(--gs-coral)"
          strokeWidth="2"
          strokeDasharray="5 8"
          opacity="0.55"
        />
        <circle cx="20" cy="100" r="4" fill="var(--gs-coral)" opacity="0.5" />
        <circle cx="180" cy="20" r="6" fill="var(--gs-coral)" opacity="0.85" />
      </svg>
      <p className="copilot-scene-route-label">{COPILOT_ROUTE}</p>
    </div>
  )
}

function PilotScene() {
  return (
    <div className="copilot-scene-pilot">
      <div className="copilot-scene-pilot-role">
        <span className="copilot-scene-pilot-you">You</span>
        <span className="copilot-scene-pilot-divider">+</span>
        <span className="copilot-scene-pilot-copilot">GutSphere</span>
      </div>
      <p className="copilot-scene-pilot-caption">Pilot &amp; copilot</p>
    </div>
  )
}

function TrackerDiffScene() {
  return (
    <div className="copilot-scene-tracker-diff">
      <div className="copilot-scene-tracker-col">
        <span className="copilot-scene-tracker-label">Trackers</span>
        <span className="copilot-scene-tracker-value">Record what happened</span>
      </div>
      <span className="copilot-scene-tracker-arrow" aria-hidden="true">
        →
      </span>
      <div className="copilot-scene-tracker-col copilot-scene-tracker-col--gutsphere">
        <span className="copilot-scene-tracker-label">GutSphere</span>
        <span className="copilot-scene-tracker-value">Guide what may matter next</span>
      </div>
    </div>
  )
}

function ConfusionScene({
  organized,
  cardIndex,
}: {
  organized: boolean
  cardIndex: number
}) {
  return (
    <>
      <div className={`copilot-scene-clouds ${organized ? 'is-organizing' : ''}`} />
      <div className="copilot-scene-chips">
        {CONFUSION_OBSTACLES.map((label, i) => {
          const angle = (i / CONFUSION_OBSTACLES.length) * Math.PI * 2
          const scatter = organized ? 8 : 22 + (i % 3) * 8
          const x = Math.cos(angle) * scatter
          const y = Math.sin(angle) * (scatter * 0.7)
          return (
            <span
              key={label}
              className={`copilot-scene-chip ${organized ? 'is-organized' : ''}`}
              style={{
                transform: `translate(${x}px, ${y}px)`,
                opacity: organized ? 0.9 : 0.5 + (i % 3) * 0.12,
                transitionDelay: organized ? `${i * 50}ms` : '0ms',
              }}
            >
              {label}
            </span>
          )
        })}
      </div>
      {cardIndex >= 2 && (
        <p className="copilot-scene-uncertainty">
          Food? Stress? Medication? Sleep? Flare-up?
        </p>
      )}
    </>
  )
}

function CheckinScene({ organized }: { organized: boolean }) {
  return (
    <div className={`copilot-checkin-preview ${organized ? 'is-clear' : ''}`}>
      <p className="copilot-checkin-preview-title">Today&apos;s Gut Check-In</p>
      <ul className="copilot-checkin-preview-list">
        {CHECKIN_FIELDS.map((field) => (
          <li key={field}>
            <span className="copilot-checkin-preview-dot" />
            {field}
          </li>
        ))}
      </ul>
    </div>
  )
}

function VisitPrepScene({ organized }: { organized: boolean }) {
  return (
    <div className={`copilot-visit-prep ${organized ? 'is-organized' : ''}`}>
      <p className="copilot-visit-prep-title">Visit Prep</p>
      <ul className="copilot-visit-prep-list">
        {VISIT_PREP_ITEMS.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

function PatternScene({ organized, cardIndex }: { organized: boolean; cardIndex: number }) {
  return (
    <div className={`copilot-pattern-flow ${organized ? 'is-active' : ''}`}>
      <p className="copilot-pattern-flow-title">Pattern Intelligence</p>
      <div className="copilot-pattern-flow-steps">
        {PATTERN_FLOW.map((step, i) => (
          <span
            key={step}
            className={`copilot-pattern-flow-step ${cardIndex >= i ? 'is-lit' : ''}`}
          >
            {step}
          </span>
        ))}
      </div>
      <p className="copilot-pattern-flow-note">Patterns worth reviewing with your care team</p>
    </div>
  )
}

function TrustScene() {
  return (
    <div className="copilot-trust-panel">
      <div className="copilot-trust-portrait" aria-hidden="true">
        <span>GS</span>
      </div>
      <blockquote className="copilot-trust-quote">
        &ldquo;Built to help patients bring better context to care conversations — not replace
        them.&rdquo;
      </blockquote>
    </div>
  )
}

function ClarityScene({ organized }: { organized: boolean }) {
  return (
    <div className={`copilot-clarity-scene ${organized ? 'is-active' : ''}`}>
      <div className="copilot-clarity-beacon">
        <span className="copilot-clarity-ring copilot-clarity-ring--1" />
        <span className="copilot-clarity-ring copilot-clarity-ring--2" />
        <span className="copilot-clarity-core" />
      </div>
      <p className="copilot-clarity-dest">Clarity Point</p>
    </div>
  )
}
