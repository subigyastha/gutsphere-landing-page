import { useEffect, useId, useRef, useState } from 'react'
import { SIGNUP_URL } from '../../constants'
import {
  NAME_NO_NAME_DEFAULT_ID,
  NAME_NO_NAME_STATES,
  type NameNoNameState,
  type NameNoNameStateId,
} from './nameNoNameStates'

type DiscoveryMode = 'quiz' | 'flip'

function StateIllustration({
  state,
  compact = false,
}: {
  state: NameNoNameState
  compact?: boolean
}) {
  const pose =
    state.id === 'symptoms-no-name'
      ? 'search'
      : state.id === 'told-normal'
        ? 'tired'
        : state.id === 'diagnosis-doesnt-fit'
          ? 'question'
          : 'grounded'

  return (
    <div
      className={`nnn-illu${compact ? ' is-compact' : ''}`}
      data-pose={pose}
      aria-hidden="true"
    >
      <div className="nnn-illu-frame">
        <svg className="nnn-illu-art" viewBox="0 0 200 160" fill="none">
          <ellipse cx="100" cy="148" rx="54" ry="8" fill="var(--gs-coral)" opacity="0.12" />
          {/* soft character silhouette */}
          <circle cx="100" cy="52" r="22" fill="var(--gs-sand)" stroke="var(--gs-coral)" strokeWidth="2" />
          <path
            d="M68 118c4-28 18-42 32-42s28 14 32 42"
            fill="var(--gs-coral)"
            opacity="0.85"
          />
          <path
            d="M78 88c6 10 14 16 22 16s16-6 22-16"
            stroke="var(--gs-sand-light)"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.5"
          />
          {pose === 'search' && (
            <>
              <circle cx="148" cy="40" r="14" stroke="var(--gs-coral)" strokeWidth="2" opacity="0.7" />
              <path d="M158 50l10 10" stroke="var(--gs-coral)" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
            </>
          )}
          {pose === 'tired' && (
            <path
              d="M40 36c12-8 24-4 28 6"
              stroke="var(--gs-text-muted)"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.6"
            />
          )}
          {pose === 'question' && (
            <text
              x="152"
              y="44"
              fill="var(--gs-coral)"
              fontSize="28"
              fontFamily="var(--font-display)"
              fontWeight="600"
              opacity="0.75"
            >
              ?
            </text>
          )}
          {pose === 'grounded' && (
            <path
              d="M42 70c10 0 16-8 22-8s12 8 22 8 16-8 22-8 12 8 22 8"
              stroke="var(--gs-coral)"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.45"
            />
          )}
          {/* floating UI fragment */}
          <rect
            x="24"
            y="96"
            width="36"
            height="22"
            rx="8"
            fill="var(--gs-card)"
            stroke="var(--gs-border)"
            strokeWidth="1.5"
          />
          <rect x="30" y="103" width="18" height="3" rx="1.5" fill="var(--gs-coral)" opacity="0.55" />
          <rect x="30" y="110" width="24" height="2.5" rx="1.25" fill="var(--gs-border)" />
        </svg>
        <span className="nnn-illu-label">{state.label}</span>
      </div>
      {/* data-ready hook for final art */}
      <span className="nnn-illu-src" data-image={state.image} hidden />
    </div>
  )
}

function BottomBar() {
  return (
    <div className="nnn-bottom-bar">
      <div className="nnn-bottom-bar-copy">
        <span className="nnn-bottom-dot" aria-hidden="true" />
        <p>Wherever you start, your history comes with you.</p>
      </div>
      <a href="/for" className="cp2-btn nnn-bottom-cta">
        See who GutSphere is for
      </a>
    </div>
  )
}

function QuizDiscovery({
  selectedId,
  onSelect,
}: {
  selectedId: NameNoNameStateId
  onSelect: (id: NameNoNameStateId) => void
}) {
  const resultRef = useRef<HTMLDivElement>(null)
  const selected = NAME_NO_NAME_STATES.find((s) => s.id === selectedId) ?? NAME_NO_NAME_STATES[0]
  const [resultKey, setResultKey] = useState(selectedId)

  useEffect(() => {
    setResultKey(selectedId)
  }, [selectedId])

  const handleSelect = (id: NameNoNameStateId) => {
    onSelect(id)
    if (typeof window !== 'undefined' && window.matchMedia('(max-width: 900px)').matches) {
      window.requestAnimationFrame(() => {
        resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
      })
    }
  }

  return (
    <div className="nnn-quiz">
      <div className="nnn-quiz-left">
        <h3 className="nnn-quiz-q">What sounds most like you right now?</h3>
        <p className="nnn-quiz-intro">
          Pick the starting point that feels closest. No labels required.
        </p>
        <div className="nnn-quiz-options" role="radiogroup" aria-label="Starting points">
          {NAME_NO_NAME_STATES.map((state, index) => {
            const isSelected = state.id === selectedId
            return (
              <button
                key={state.id}
                type="button"
                role="radio"
                aria-checked={isSelected}
                className={`nnn-quiz-option${isSelected ? ' is-selected' : ''}`}
                onClick={() => handleSelect(state.id)}
              >
                <span className="nnn-quiz-num" aria-hidden="true">
                  {index + 1}
                </span>
                <span className="nnn-quiz-option-text">{state.option}</span>
              </button>
            )
          })}
        </div>
      </div>

      <div className="nnn-quiz-right" ref={resultRef}>
        <div key={resultKey} className="nnn-result-card nnn-result-enter">
          <StateIllustration state={selected} />
          <p className="nnn-result-micro">This may be a good starting point.</p>
          <p className="nnn-result-label">{selected.label}</p>
          <h3 className="nnn-result-title">{selected.title}</h3>
          <p className="nnn-result-desc">{selected.description}</p>

          <div className="nnn-helps">
            <p className="nnn-helps-heading">GutSphere can help you:</p>
            <ul>
              {selected.helps.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="nnn-chips" aria-label="Related topics">
            {selected.chips.map((chip) => (
              <span key={chip} className="nnn-chip">
                {chip}
              </span>
            ))}
          </div>

          <a href={SIGNUP_URL} className="cp2-btn nnn-cta" data-cta="primary">
            {selected.cta}
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  )
}

function FlipCard({
  state,
  flipped,
  onToggle,
}: {
  state: NameNoNameState
  flipped: boolean
  onToggle: () => void
}) {
  const titleId = useId()

  return (
    <div className={`nnn-flip-scene${flipped ? ' is-flipped' : ''}`}>
      <div
        className="nnn-flip-card"
        role="button"
        tabIndex={0}
        aria-pressed={flipped}
        aria-expanded={flipped}
        aria-labelledby={titleId}
        onClick={onToggle}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            onToggle()
          }
        }}
      >
        <div className="nnn-flip-face nnn-flip-front">
          <StateIllustration state={state} compact />
          <p className="nnn-result-label">{state.label}</p>
          <h3 id={titleId} className="nnn-flip-title">
            {state.title}
          </h3>
          <p className="nnn-flip-desc">{state.description}</p>
          <p className="nnn-flip-hint">Tap to see how GutSphere helps</p>
        </div>

        <div className="nnn-flip-face nnn-flip-back" aria-hidden={!flipped}>
          <div className="nnn-flip-back-inner">
            <p className="nnn-helps-heading">What this can feel like</p>
            <ul className="nnn-feel-list">
              {state.feelLike.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p className="nnn-helps-heading">GutSphere helps you</p>
            <ul>
              {state.flipHelps.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="nnn-chips">
              {state.chips.map((chip) => (
                <span key={chip} className="nnn-chip">
                  {chip}
                </span>
              ))}
            </div>

            <a
              href={SIGNUP_URL}
              className="cp2-btn nnn-cta nnn-cta-sm"
              data-cta="primary"
              tabIndex={flipped ? 0 : -1}
              onClick={(e) => e.stopPropagation()}
              onKeyDown={(e) => e.stopPropagation()}
            >
              {state.cta}
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

function FlipDiscovery({
  flippedCardId,
  onFlip,
}: {
  flippedCardId: NameNoNameStateId | null
  onFlip: (id: NameNoNameStateId) => void
}) {
  return (
    <div className="nnn-flip-grid">
      {NAME_NO_NAME_STATES.map((state) => (
        <FlipCard
          key={state.id}
          state={state}
          flipped={flippedCardId === state.id}
          onToggle={() => onFlip(state.id)}
        />
      ))}
    </div>
  )
}

export function NameNoNameInteractiveSection() {
  const [activeMode, setActiveMode] = useState<DiscoveryMode>('quiz')
  const [selectedState, setSelectedState] = useState<NameNoNameStateId>(NAME_NO_NAME_DEFAULT_ID)
  const [flippedCardId, setFlippedCardId] = useState<NameNoNameStateId | null>(null)
  const [panelVisible, setPanelVisible] = useState(true)
  const [renderedMode, setRenderedMode] = useState<DiscoveryMode>('quiz')
  const switchTimer = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (switchTimer.current) window.clearTimeout(switchTimer.current)
    }
  }, [])

  const switchMode = (mode: DiscoveryMode) => {
    if (mode === activeMode) return
    setActiveMode(mode)
    setPanelVisible(false)
    if (switchTimer.current) window.clearTimeout(switchTimer.current)
    switchTimer.current = window.setTimeout(() => {
      setRenderedMode(mode)
      setFlippedCardId(null)
      setPanelVisible(true)
    }, 180)
  }

  const handleFlip = (id: NameNoNameStateId) => {
    setFlippedCardId((prev) => (prev === id ? null : id))
  }

  return (
    <section id="both" className="nnn-section" aria-labelledby="nnn-heading">
      <div className="cp2-wrap nnn-wrap">
        <div className="cp2-sec-head nnn-head cp2-reveal">
          <p className="cp2-eyebrow">Name or no name</p>
          <h2 id="nnn-heading">Name, no name, or not the right name yet.</h2>
          <p>
            Gut symptoms don&apos;t always arrive with a label. GutSphere keeps your evidence together at
            every stage.
          </p>
        </div>

        <div
          className="nnn-mode-toggle cp2-reveal"
          role="tablist"
          aria-label="Discovery style"
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeMode === 'quiz'}
            className={`nnn-mode-btn${activeMode === 'quiz' ? ' is-active' : ''}`}
            onClick={() => switchMode('quiz')}
          >
            Quiz discovery
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeMode === 'flip'}
            className={`nnn-mode-btn${activeMode === 'flip' ? ' is-active' : ''}`}
            onClick={() => switchMode('flip')}
          >
            Flip discovery
          </button>
        </div>

        <div
          className={`nnn-panel${panelVisible ? ' is-visible' : ''}`}
          role="tabpanel"
          aria-label={renderedMode === 'quiz' ? 'Quiz discovery' : 'Flip discovery'}
        >
          {renderedMode === 'quiz' ? (
            <QuizDiscovery selectedId={selectedState} onSelect={setSelectedState} />
          ) : (
            <FlipDiscovery flippedCardId={flippedCardId} onFlip={handleFlip} />
          )}
          <BottomBar />
        </div>
      </div>
    </section>
  )
}
