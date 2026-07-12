import { useId, useState } from 'react'
import {
  NAME_NO_NAME_CLOSING,
  NAME_NO_NAME_DEFAULT_ID,
  NAME_NO_NAME_STATES,
  type NameNoNameState,
  type NameNoNameStateId,
} from './nameNoNameStates'

function CalmIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function UnderstandIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="7" cy="12" r="2.2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17" cy="7" r="2.2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17" cy="17" r="2.2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9 11.2 14.8 8.2M9 12.8l5.8 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function NextIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 8v4l3 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 4v1.5M12 18.5V20M4 12h1.5M18.5 12H20" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

function PathwayIllustration({ state, selected }: { state: NameNoNameState; selected: boolean }) {
  return (
    <div
      className={`nnn-path-illu${selected ? ' is-active' : ''}`}
      data-accent={state.accent}
    >
      <span className="nnn-path-illu-halo" aria-hidden="true" />
      <img
        className="nnn-path-illu-img"
        src={state.image}
        alt={state.imageAlt}
        width={160}
        height={160}
        loading="lazy"
        decoding="async"
      />
    </div>
  )
}

function PathwayRow({
  state,
  index,
  selected,
  onSelect,
}: {
  state: NameNoNameState
  index: number
  selected: boolean
  onSelect: (id: NameNoNameStateId) => void
}) {
  const panelId = useId()
  const titleId = useId()

  return (
    <div
      className={`nnn-path-row${selected ? ' is-selected' : ''}`}
      data-accent={state.accent}
      data-index={index}
      style={{ ['--nnn-blend' as string]: state.blend }}
    >
      <div className="nnn-path-rail" aria-hidden="true">
        <span className="nnn-path-rail-line" />
        <span className={`nnn-path-node${selected ? ' is-active' : ''}`}>
          <span className="nnn-path-node-dot" />
        </span>
      </div>

      <div className="nnn-path-card">
        <button
          type="button"
          className="nnn-path-header"
          aria-expanded={selected}
          aria-controls={panelId}
          aria-labelledby={titleId}
          onClick={() => onSelect(state.id)}
        >
          <PathwayIllustration state={state} selected={selected} />

          <span className="nnn-path-copy">
            <span className="nnn-path-selected-label" aria-hidden={!selected}>
              Selected
            </span>
            <h3 id={titleId} className="nnn-path-title">
              {state.title}
            </h3>
            <p className="nnn-path-desc">{state.description}</p>
          </span>

          <span className={`nnn-path-arrow${selected ? ' is-open' : ''}`} aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M9 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>

        <div
          id={panelId}
          className={`nnn-path-panel${selected ? ' is-open' : ''}`}
          role="region"
          aria-labelledby={titleId}
          aria-hidden={!selected}
          inert={selected ? undefined : true}
        >
          <div className="nnn-path-panel-inner">
            <p className="nnn-path-outcome-headline">{state.outcomeHeadline}</p>

            <div className="nnn-path-outcomes">
              <div className="nnn-path-outcome">
                <span className="nnn-path-outcome-icon">
                  <CalmIcon />
                </span>
                <p className="nnn-path-outcome-label">Calm</p>
                <p className="nnn-path-outcome-text">{state.outcomes.calm}</p>
              </div>
              <div className="nnn-path-outcome">
                <span className="nnn-path-outcome-icon">
                  <UnderstandIcon />
                </span>
                <p className="nnn-path-outcome-label">Understand</p>
                <p className="nnn-path-outcome-text">{state.outcomes.understand}</p>
              </div>
              <div className="nnn-path-outcome">
                <span className="nnn-path-outcome-icon">
                  <NextIcon />
                </span>
                <p className="nnn-path-outcome-label">What comes next</p>
                <p className="nnn-path-outcome-text">{state.outcomes.next}</p>
              </div>
            </div>

            <div className="nnn-path-actions">
              <a
                href={state.ctaHref}
                className="cp2-btn nnn-path-cta"
                data-cta="primary"
                data-pathway={state.id}
              >
                {state.cta}
                <span aria-hidden="true">→</span>
              </a>
              {state.secondaryHref && state.secondaryLabel ? (
                <a href={state.secondaryHref} className="nnn-path-secondary">
                  {state.secondaryLabel}
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ClosingNote() {
  return (
    <div className="nnn-closing cp2-reveal">
      <p className="cp2-pilot nnn-closing-pilot">
        Whatever the name becomes, <span>your history stays with you.</span>
      </p>
      <p className="nnn-closing-support">{NAME_NO_NAME_CLOSING.support}</p>
      <a href={NAME_NO_NAME_CLOSING.linkHref} className="nnn-closing-link">
        {NAME_NO_NAME_CLOSING.linkLabel}
      </a>
    </div>
  )
}

export function NameNoNameInteractiveSection() {
  const [selectedId, setSelectedId] = useState<NameNoNameStateId>(NAME_NO_NAME_DEFAULT_ID)

  return (
    <section id="both" className="cp2-band" aria-labelledby="nnn-heading">
      <div className="cp2-wrap">
        <div className="cp2-sec-head nnn-head cp2-reveal">
          <p className="cp2-eyebrow">Name or no name</p>
          <h2 id="nnn-heading">A name can help. You don’t need one to start.</h2>
          <p>
            Choose what feels closest today. Gutsphere helps you feel calmer, understand what is
            happening, and know what to do next—while keeping your history connected if the label
            changes.
          </p>
        </div>

        <div className="nnn-pathways cp2-reveal" role="list" aria-label="Starting situations">
          {NAME_NO_NAME_STATES.map((state, index) => (
            <div key={state.id} role="listitem">
              <PathwayRow
                state={state}
                index={index}
                selected={selectedId === state.id}
                onSelect={setSelectedId}
              />
            </div>
          ))}
        </div>

        <ClosingNote />
      </div>
    </section>
  )
}
