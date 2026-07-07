import type { FlightZoneTheme } from './constants'
import { FlightPlaneGraphic } from './FlightPlaneGraphic'
import {
  CARE_REPORT_ITEMS,
  COPILOT_ROUTE,
  DASHBOARD_PANELS,
  PATTERN_FLOW_STEPS,
} from './constants'

interface ZoneVisualProps {
  theme: FlightZoneTheme
  proximity: number
}

export function ZoneVisual({ theme, proximity }: ZoneVisualProps) {
  const active = proximity > 0.2

  switch (theme) {
    case 'boarding':
      return <BoardingVisual active={active} />
    case 'copilot':
      return <DashboardVisual active={active} />
    case 'pattern':
      return <PatternMapVisual active={active} proximity={proximity} />
    case 'care':
      return <CareReportVisual active={active} />
    case 'clarity':
      return <ClarityPointVisual active={active} />
    default:
      return null
  }
}

function BoardingVisual({ active }: { active: boolean }) {
  return (
    <div className={`flight-boarding-visual ${active ? 'is-active' : ''}`}>
      <div className="flight-cockpit-frame">
        <div className="flight-hud-mini">
          <span className="flight-hud-mini-label">Flight Path</span>
          <span className="flight-hud-mini-value">{COPILOT_ROUTE}</span>
        </div>
        <svg viewBox="0 0 200 120" className="flight-route-preview" aria-hidden="true">
          <path
            d="M20 100 Q 60 80, 100 60 T 180 20"
            fill="none"
            stroke="var(--gs-coral)"
            strokeWidth="2"
            strokeDasharray="4 6"
            opacity="0.6"
          />
          <circle cx="20" cy="100" r="6" fill="var(--gs-coral)" opacity="0.4" />
          <circle cx="180" cy="20" r="8" fill="var(--gs-coral)" />
        </svg>
        <div className="flight-takeoff-craft" aria-hidden="true">
          <FlightPlaneGraphic size={32} />
        </div>
      </div>
    </div>
  )
}

function DashboardVisual({ active }: { active: boolean }) {
  return (
    <div className={`flight-dashboard ${active ? 'is-active' : ''}`}>
      <div className="flight-dashboard-grid">
        {DASHBOARD_PANELS.map((panel, i) => (
          <div
            key={panel}
            className="flight-dashboard-panel"
            style={{
              transitionDelay: active ? `${i * 40}ms` : '0ms',
              opacity: active ? 1 : 0.5,
              transform: active ? 'translateY(0)' : `translateY(${8 + (i % 3) * 4}px)`,
            }}
          >
            <span className="flight-dashboard-panel-label">{panel}</span>
            <div className="flight-dashboard-panel-bar" />
          </div>
        ))}
      </div>
    </div>
  )
}

function PatternMapVisual({ active, proximity }: { active: boolean; proximity: number }) {
  const highlightIndex = active ? Math.min(4, Math.floor(proximity * 6)) : -1

  return (
    <div className={`flight-pattern-map ${active ? 'is-active' : ''}`}>
      <div className="flight-pattern-flow">
        {PATTERN_FLOW_STEPS.map((step, i) => (
          <div key={step} className="flight-pattern-step-wrap">
            {i > 0 && (
              <div
                className={`flight-pattern-connector ${highlightIndex >= i ? 'is-lit' : ''}`}
                aria-hidden="true"
              />
            )}
            <div
              className={`flight-pattern-step ${highlightIndex >= i ? 'is-highlighted' : ''}`}
            >
              <span className="flight-pattern-step-num">{i + 1}</span>
              <span className="flight-pattern-step-label">{step}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function CareReportVisual({ active }: { active: boolean }) {
  return (
    <div className={`flight-care-report ${active ? 'is-active' : ''}`}>
      <div className="flight-care-report-header">
        <span>Visit summary preview</span>
      </div>
      <ul className="flight-care-report-list">
        {CARE_REPORT_ITEMS.map((item, i) => (
          <li
            key={item}
            className="flight-care-report-item"
            style={{
              opacity: active ? 1 : 0.45,
              transform: active ? 'translateX(0)' : 'translateX(-8px)',
              transitionDelay: active ? `${i * 50}ms` : '0ms',
            }}
          >
            <span className="flight-care-report-dot" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

function ClarityPointVisual({ active }: { active: boolean }) {
  return (
    <div className={`flight-clarity-point ${active ? 'is-active' : ''}`}>
      <div className="flight-clarity-beacon" aria-hidden="true">
        <span className="flight-clarity-ring flight-clarity-ring--1" />
        <span className="flight-clarity-ring flight-clarity-ring--2" />
        <span className="flight-clarity-core" />
      </div>
      <p className="flight-clarity-label">Clarity Point</p>
      <p className="flight-clarity-sub">{COPILOT_ROUTE}</p>
    </div>
  )
}
