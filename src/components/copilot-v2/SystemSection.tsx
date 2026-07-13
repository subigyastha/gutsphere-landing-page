import { useEffect, useId, useRef, useState, type KeyboardEvent, type ReactNode } from 'react'
import {
  SYSTEM_FLYWHEEL_COPY,
  SYSTEM_FLYWHEEL_DEFAULT_ID,
  SYSTEM_FLYWHEEL_PERSPECTIVES,
  SYSTEM_FLYWHEEL_STAGES,
  getNextStageId,
  getPrevStageId,
  type SystemFlywheelStage,
  type SystemFlywheelStageId,
} from './systemFlywheelStages'

const AUTOPLAY_MS = 5500
const MANUAL_PAUSE_MS = 12000

function TrackIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 16.5 8.2 12l3.2 3.1L20 7"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M15.5 7H20v4.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CareIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function NavigateIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.7" />
      <path d="m15.4 8.6-2.1 5.3-5.3 2.1 2.1-5.3 5.3-2.1Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  )
}

function UnderstandIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.7" />
      <path d="m16 16 3.5 3.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}

const STAGE_ICONS: Record<SystemFlywheelStageId, () => ReactNode> = {
  track: TrackIcon,
  care: CareIcon,
  navigate: NavigateIcon,
  understand: UnderstandIcon,
}

/** Arc paths for Track→Care, Care→Navigate, Navigate→Understand, Understand→Track */
const ARC_PATHS: Record<SystemFlywheelStageId, string> = {
  track:
    'M 248.5 86.3 A 132 132 0 0 1 313.7 151.5',
  care:
    'M 313.7 248.5 A 132 132 0 0 1 248.5 313.7',
  navigate:
    'M 151.5 313.7 A 132 132 0 0 1 86.3 248.5',
  understand:
    'M 86.3 151.5 A 132 132 0 0 1 151.5 86.3',
}

function FlywheelArcs({ activeId }: { activeId: SystemFlywheelStageId }) {
  return (
    <svg className="sys-fly-arcs" viewBox="0 0 400 400" aria-hidden="true">
      <defs>
        <marker
          id="sys-fly-arrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="5"
          markerHeight="5"
          orient="auto-start-reverse"
        >
          <path d="M 1 1 L 9 5 L 1 9 z" fill="#EF5350" />
        </marker>
      </defs>
      {SYSTEM_FLYWHEEL_STAGES.map((stage) => {
        const active = stage.id === activeId
        return (
          <path
            key={stage.id}
            className={`sys-fly-arc${active ? ' is-active' : ''}`}
            d={ARC_PATHS[stage.id]}
            fill="none"
            markerEnd="url(#sys-fly-arrow)"
          />
        )
      })}
    </svg>
  )
}

function FlywheelStageButton({
  stage,
  selected,
  onSelect,
  onKeyNav,
}: {
  stage: SystemFlywheelStage
  selected: boolean
  onSelect: (id: SystemFlywheelStageId) => void
  onKeyNav: (id: SystemFlywheelStageId, key: string, event: KeyboardEvent<HTMLButtonElement>) => void
}) {
  const Icon = STAGE_ICONS[stage.id]

  return (
    <button
      type="button"
      className={`sys-fly-stage sys-fly-stage--${stage.id}${selected ? ' is-active' : ''}`}
      data-accent={stage.accent}
      aria-pressed={selected}
      aria-label={`${stage.label}: ${stage.shortLabel}`}
      onClick={() => onSelect(stage.id)}
      onKeyDown={(e) => onKeyNav(stage.id, e.key, e)}
    >
      <span className="sys-fly-stage-icon">
        <Icon />
      </span>
      <span className="sys-fly-stage-copy">
        <span className="sys-fly-stage-name">{stage.label}</span>
        <span className="sys-fly-stage-desc">{stage.shortLabel}</span>
      </span>
    </button>
  )
}

function StageDetail({ stage }: { stage: SystemFlywheelStage }) {
  const headingId = useId()

  return (
    <div
      className="sys-fly-detail"
      data-accent={stage.accent}
      style={{ ['--sys-accent' as string]: stage.color }}
      aria-live="polite"
      aria-labelledby={headingId}
    >
      <p className="sys-fly-detail-label">{stage.stageLabel}</p>
      <h3 id={headingId} className="sys-fly-detail-headline">
        {stage.headline}
      </h3>
      <p className="sys-fly-detail-desc">{stage.description}</p>

      <ul className="sys-fly-signals" aria-label="Signals in this stage">
        {stage.signals.map((signal) => (
          <li key={signal}>{signal}</li>
        ))}
      </ul>

      <div className="sys-fly-feeds">
        <p className="sys-fly-feeds-label">{stage.feedsLabel}</p>
        <p className="sys-fly-feeds-copy">{stage.feedsCopy}</p>
      </div>

      <div className="sys-fly-multi">
        <p className="sys-fly-multi-heading">{SYSTEM_FLYWHEEL_COPY.multidisciplinaryHeading}</p>
        <ul className="sys-fly-multi-list">
          {SYSTEM_FLYWHEEL_PERSPECTIVES.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function ClosingNotes() {
  const [lead, trail] = SYSTEM_FLYWHEEL_COPY.closingNote.split(' — ')

  return (
    <>
      <p className="sys-fly-note cp2-reveal">
        <strong>{lead}</strong>
        {trail ? <> — {trail}</> : null}
      </p>
      <div className="sys-fly-loopnote cp2-reveal">
        <span className="sys-fly-rule" aria-hidden="true" />
        {SYSTEM_FLYWHEEL_COPY.loopNote}
        <span className="sys-fly-rule" aria-hidden="true" />
      </div>
    </>
  )
}

export function SystemSection() {
  const [activeId, setActiveId] = useState<SystemFlywheelStageId>(SYSTEM_FLYWHEEL_DEFAULT_ID)
  const [panelKey, setPanelKey] = useState(0)
  const cardRef = useRef<HTMLDivElement>(null)
  const pausedRef = useRef(false)
  const manualUntilRef = useRef(0)
  const visibleRef = useRef(false)
  const reduceMotionRef = useRef(false)

  const activeStage =
    SYSTEM_FLYWHEEL_STAGES.find((stage) => stage.id === activeId) ?? SYSTEM_FLYWHEEL_STAGES[0]

  const selectStage = (id: SystemFlywheelStageId, manual = false) => {
    setActiveId(id)
    setPanelKey((k) => k + 1)
    if (manual) {
      manualUntilRef.current = Date.now() + MANUAL_PAUSE_MS
    }
  }

  const focusStage = (id: SystemFlywheelStageId) => {
    const btn = cardRef.current?.querySelector<HTMLButtonElement>(
      `.sys-fly-stage--${id}`,
    )
    btn?.focus()
  }

  const onKeyNav = (
    id: SystemFlywheelStageId,
    key: string,
    event: KeyboardEvent<HTMLButtonElement>,
  ) => {
    const navKeys = ['ArrowRight', 'ArrowDown', 'ArrowLeft', 'ArrowUp', 'Home', 'End']
    if (!navKeys.includes(key)) return
    event.preventDefault()
    let nextId = id
    if (key === 'ArrowRight' || key === 'ArrowDown') {
      nextId = getNextStageId(id)
    } else if (key === 'ArrowLeft' || key === 'ArrowUp') {
      nextId = getPrevStageId(id)
    } else if (key === 'Home') {
      nextId = SYSTEM_FLYWHEEL_DEFAULT_ID
    } else if (key === 'End') {
      nextId = SYSTEM_FLYWHEEL_STAGES[SYSTEM_FLYWHEEL_STAGES.length - 1].id
    }
    selectStage(nextId, true)
    focusStage(nextId)
  }

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    reduceMotionRef.current = mq.matches
    const onChange = () => {
      reduceMotionRef.current = mq.matches
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    const el = cardRef.current
    if (!el) return

    const io = new IntersectionObserver(
      (entries) => {
        visibleRef.current = entries.some((e) => e.isIntersecting)
      },
      { threshold: 0.35 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    const el = cardRef.current
    if (!el) return

    const pause = () => {
      pausedRef.current = true
    }
    const resume = () => {
      pausedRef.current = false
    }
    const onFocusOut = (e: FocusEvent) => {
      if (!el.contains(e.relatedTarget as Node | null)) resume()
    }

    el.addEventListener('mouseenter', pause)
    el.addEventListener('mouseleave', resume)
    el.addEventListener('focusin', pause)
    el.addEventListener('focusout', onFocusOut)

    return () => {
      el.removeEventListener('mouseenter', pause)
      el.removeEventListener('mouseleave', resume)
      el.removeEventListener('focusin', pause)
      el.removeEventListener('focusout', onFocusOut)
    }
  }, [])

  useEffect(() => {
    const tick = window.setInterval(() => {
      if (reduceMotionRef.current) return
      if (!visibleRef.current) return
      if (pausedRef.current) return
      if (Date.now() < manualUntilRef.current) return
      setActiveId((prev) => getNextStageId(prev))
      setPanelKey((k) => k + 1)
    }, AUTOPLAY_MS)

    return () => window.clearInterval(tick)
  }, [])

  return (
    <section id="system" aria-labelledby="sys-heading">
      <div className="cp2-wrap">
        <div className="cp2-sec-head sys-fly-head cp2-reveal">
          <p className="cp2-eyebrow">{SYSTEM_FLYWHEEL_COPY.eyebrow}</p>
          <h2 id="sys-heading">{SYSTEM_FLYWHEEL_COPY.headline}</h2>
          <p className="sys-fly-supporting">{SYSTEM_FLYWHEEL_COPY.supporting}</p>
        </div>

        <div
          ref={cardRef}
          className="sys-fly-card cp2-reveal"
          data-accent={activeStage.accent}
          style={{ ['--sys-accent' as string]: activeStage.color }}
        >
          <div className="sys-fly-layout">
            <div className="sys-fly-wheel" role="group" aria-label="Connected operating loop">
              <FlywheelArcs activeId={activeId} />

              <div className="sys-fly-core">
                <p className="sys-fly-core-eyebrow">{SYSTEM_FLYWHEEL_COPY.coreEyebrow}</p>
                <p className="sys-fly-core-headline">{SYSTEM_FLYWHEEL_COPY.coreHeadline}</p>
                <p className="sys-fly-core-support">{SYSTEM_FLYWHEEL_COPY.coreSupport}</p>
              </div>

              {SYSTEM_FLYWHEEL_STAGES.map((stage) => (
                <FlywheelStageButton
                  key={stage.id}
                  stage={stage}
                  selected={activeId === stage.id}
                  onSelect={(id) => selectStage(id, true)}
                  onKeyNav={onKeyNav}
                />
              ))}
            </div>

            <div key={panelKey} className="sys-fly-panel-anim">
              <StageDetail stage={activeStage} />
            </div>
          </div>
        </div>

        <ClosingNotes />

        <p className="cp2-pilot cp2-reveal">
          You pilot your health. <span>Gutsphere keeps the map.</span>
        </p>
      </div>
    </section>
  )
}
