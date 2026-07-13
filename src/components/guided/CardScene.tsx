import type { CardTheme } from './constants'
import {
  CHECKIN_FIELDS,
  COPILOT_ROUTE,
  DAILY_NEXT_STEPS,
  JOURNEY_MOMENTS,
  PATTERN_INTELLIGENCE_FLOW,
  TRACKER_COMPARISON,
  VISIT_PREP_ITEMS,
} from './constants'
import { PlaneCraft } from './PlaneCraft'

interface CardSceneProps {
  theme: CardTheme
  progress: number
  obstacles?: readonly string[]
  planePosition: 'center' | 'bottom' | 'none'
  heroTakeoff?: number
}

export function CardScene({
  theme,
  progress,
  obstacles = [],
  planePosition,
  heroTakeoff = 0,
}: CardSceneProps) {
  const organized = progress > 0.45
  const active = progress > 0.2

  return (
    <div className={`journey-scene journey-scene--${theme} ${active ? 'is-active' : ''} ${organized ? 'is-organized' : ''}`}>
      {theme === 'boarding' && <BoardingScene />}
      {theme === 'turbulence' && <TurbulenceScene obstacles={obstacles} organized={organized} />}
      {theme === 'shift' && <ShiftScene organized={organized} />}
      {theme === 'self-care' && <SelfCareScene organized={organized} />}
      {theme === 'clinical-navigation' && <ClinicalNavigationScene organized={organized} />}
      {theme === 'clinical-intelligence' && <ClinicalIntelligenceScene organized={organized} />}
      {theme === 'comparison' && <ComparisonScene organized={organized} />}
      {theme === 'founder' && <FounderScene organized={organized} />}
      {theme === 'moments' && <MomentsScene organized={organized} progress={progress} />}
      {theme === 'daily-value' && <DailyValueScene organized={organized} />}
      {theme === 'clarity' && <ClarityScene organized={organized} />}

      {planePosition === 'center' && (
        <PlaneCraft
          variant={heroTakeoff > 0.08 ? 'takeoff' : 'hero'}
          takeoffProgress={heroTakeoff}
        />
      )}
      {planePosition === 'bottom' && <PlaneCraft variant="enter" />}
    </div>
  )
}

function BoardingScene() {
  return (
    <>
      <div className="journey-scene-route" aria-hidden="true">
        <svg viewBox="0 0 200 160" className="journey-scene-route-svg">
          <path
            d="M30 140 Q 80 100, 120 70 T 170 30"
            fill="none"
            stroke="var(--gs-coral)"
            strokeWidth="2"
            strokeDasharray="5 8"
            opacity="0.5"
          />
          <circle cx="30" cy="140" r="5" fill="var(--gs-coral)" opacity="0.4" />
          <circle cx="170" cy="30" r="7" fill="var(--gs-coral)" opacity="0.8" />
        </svg>
      </div>
      <div className="journey-scene-hud-mini">
        <span className="journey-scene-hud-label">Flight Path</span>
        <span className="journey-scene-hud-value">{COPILOT_ROUTE}</span>
      </div>
    </>
  )
}

function TurbulenceScene({
  obstacles,
  organized,
}: {
  obstacles: readonly string[]
  organized: boolean
}) {
  return (
    <>
      <div className="journey-scene-clouds journey-scene-clouds--storm" aria-hidden="true" />
      <div className="journey-scene-lightning" aria-hidden="true" />
      <div className="journey-scene-chips">
        {obstacles.map((label, i) => (
          <SceneChip key={label} label={label} index={i} organized={organized} variant="storm" />
        ))}
      </div>
    </>
  )
}

function ShiftScene({ organized }: { organized: boolean }) {
  return (
    <>
      <div className={`journey-scene-clouds journey-scene-clouds--clearing ${organized ? 'is-clear' : ''}`} aria-hidden="true" />
      <div className={`journey-scene-route-hud ${organized ? 'is-lit' : ''}`}>
        <span className="journey-scene-route-hud-label">Copilot route</span>
        <span className="journey-scene-route-hud-steps">{COPILOT_ROUTE}</span>
      </div>
    </>
  )
}

function SelfCareScene({ organized }: { organized: boolean }) {
  return (
    <div className={`journey-daily-value-scene ${organized ? 'is-organized' : ''}`}>
      <div className="journey-checkin-card">
        <p className="journey-checkin-title">Today&apos;s Gut Check-In</p>
        <ul className="journey-checkin-fields">
          {CHECKIN_FIELDS.map((field) => (
            <li key={field} className="journey-checkin-field">
              <span className="journey-checkin-field-dot" aria-hidden="true" />
              {field}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function ClinicalNavigationScene({ organized }: { organized: boolean }) {
  return (
    <div className={`journey-scene-visit-prep ${organized ? 'is-organized' : ''}`}>
      <p className="journey-scene-visit-prep-title">Visit Prep</p>
      <ul className="journey-scene-visit-prep-list">
        {VISIT_PREP_ITEMS.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

function ClinicalIntelligenceScene({ organized }: { organized: boolean }) {
  return (
    <div className={`journey-scene-pattern-flow ${organized ? 'is-active' : ''}`}>
      <p className="journey-scene-pattern-flow-title">Pattern Intelligence</p>
      <div className="journey-scene-pattern-flow-steps">
        {PATTERN_INTELLIGENCE_FLOW.map((step, i) => (
          <span
            key={step}
            className={`journey-scene-pattern-flow-step ${organized && i <= 2 ? 'is-lit' : ''}`}
          >
            {step}
          </span>
        ))}
      </div>
    </div>
  )
}

function ComparisonScene({ organized }: { organized: boolean }) {
  return (
    <div className={`journey-scene-comparison ${organized ? 'is-organized' : ''}`}>
      <div className="journey-scene-comparison-col">
        <p className="journey-scene-comparison-header">Generic trackers</p>
        <ul>
          {TRACKER_COMPARISON.map((row) => (
            <li key={row.tracker}>{row.tracker}</li>
          ))}
        </ul>
      </div>
      <div className="journey-scene-comparison-col journey-scene-comparison-col--gutsphere">
        <p className="journey-scene-comparison-header">GutSphere</p>
        <ul>
          {TRACKER_COMPARISON.map((row) => (
            <li key={row.gutsphere}>{row.gutsphere}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function FounderScene({ organized }: { organized: boolean }) {
  return (
    <div className={`journey-scene-founder ${organized ? 'is-active' : ''}`}>
      <div className="journey-scene-founder-portrait" aria-hidden="true">
        <span>BM</span>
      </div>
      <blockquote className="journey-scene-founder-quote">
        &ldquo;Patients need more than a place to record symptoms. They need a guided system that
        helps them organize their journey, prepare for care, and stay supported between
        visits.&rdquo;
      </blockquote>
      <p className="journey-scene-founder-name">GutSphere team</p>
    </div>
  )
}

function MomentsScene({
  organized,
  progress,
}: {
  organized: boolean
  progress: number
}) {
  const highlight = organized ? Math.min(4, Math.floor(progress * 6)) : -1

  return (
    <div className={`journey-scene-moments ${organized ? 'is-active' : ''}`}>
      {JOURNEY_MOMENTS.map((moment, i) => (
        <div
          key={moment.title}
          className={`journey-scene-moment ${highlight >= i ? 'is-highlighted' : ''}`}
          style={{ transitionDelay: organized ? `${i * 40}ms` : '0ms' }}
        >
          <span className="journey-scene-moment-title">{moment.title}</span>
        </div>
      ))}
    </div>
  )
}

function DailyValueScene({ organized }: { organized: boolean }) {
  const stepIndex = organized ? 2 : 0

  return (
    <div className={`journey-daily-value-scene ${organized ? 'is-organized' : ''}`}>
      <div className="journey-checkin-card">
        <p className="journey-checkin-title">Today&apos;s Gut Check-In</p>
        <div className="journey-daily-flow">
          {['Symptoms logged', 'Context connected', 'Next step suggested'].map((step, i) => (
            <span
              key={step}
              className={`journey-daily-flow-step ${i <= stepIndex ? 'is-lit' : ''}`}
            >
              {step}
            </span>
          ))}
        </div>
        <ul className="journey-checkin-fields">
          {CHECKIN_FIELDS.slice(0, 4).map((field) => (
            <li key={field} className="journey-checkin-field">
              <span className="journey-checkin-field-dot" aria-hidden="true" />
              {field}
            </li>
          ))}
        </ul>
        {organized && (
          <p className="journey-daily-next-step">
            Next: {DAILY_NEXT_STEPS[0]}
          </p>
        )}
      </div>
    </div>
  )
}

function ClarityScene({ organized }: { organized: boolean }) {
  return (
    <div className={`journey-clarity-scene ${organized ? 'is-active' : ''}`}>
      <div className="journey-clarity-beacon" aria-hidden="true">
        <span className="journey-clarity-ring journey-clarity-ring--1" />
        <span className="journey-clarity-ring journey-clarity-ring--2" />
        <span className="journey-clarity-core" />
      </div>
      <div className="journey-clarity-mark">
        <span className="journey-clarity-logo">G</span>
        <span className="journey-clarity-name">GutSphere Copilot</span>
      </div>
      <p className="journey-clarity-dest">Clarity Point</p>
      <p className="journey-clarity-route">{COPILOT_ROUTE}</p>
    </div>
  )
}

function SceneChip({
  label,
  index,
  organized,
  variant,
}: {
  label: string
  index: number
  organized: boolean
  variant: 'storm' | 'fog' | 'treatment'
}) {
  const angle = (index / 8) * Math.PI * 2
  const scatterX = Math.cos(angle) * (organized ? 6 : 20 + (index % 3) * 10)
  const scatterY = Math.sin(angle) * (organized ? 3 : 14 + (index % 2) * 10)

  return (
    <span
      className={`journey-scene-chip journey-scene-chip--${variant} ${organized ? 'is-organized' : ''}`}
      style={{
        transform: `translate(${scatterX}px, ${scatterY}px)`,
        opacity: organized ? 1 : 0.55 + (index % 3) * 0.1,
      }}
    >
      {label}
    </span>
  )
}
