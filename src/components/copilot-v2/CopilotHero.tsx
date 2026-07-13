import { Fragment, useEffect, useId, useState, type CSSProperties } from 'react'
import {
  Activity,
  AlertTriangle,
  Brain,
  ChartNoAxesCombined,
  Check,
  Compass,
  Goal,
  Heart,
  Leaf,
  Moon,
  Pill,
  Sparkle,
  Sparkles,
  Target,
  UserRound,
  Waves,
} from 'lucide-react'
import { SIGNUP_URL } from '../../constants'
import { DX_CHIPS, EXPERT_PERSPECTIVES, FLAG_CHIPS, SYMPTOM_CHIPS, type ExpertPerspectiveId, type SystemPillarId } from './constants'
import { HeroDemoEmbed } from './HeroDemoEmbed'
import { PlatformFineprint } from './PlatformPills'
import type { SystemPreview, useCopilotPicker } from './useCopilotPicker'

type Picker = ReturnType<typeof useCopilotPicker>

const ICON = { size: 22, strokeWidth: 1.8, 'aria-hidden': true as const }
const ICON_SM = { size: 15, strokeWidth: 1.9, 'aria-hidden': true as const }
const ICON_XS = { size: 12, strokeWidth: 2, 'aria-hidden': true as const }

function StageIcon({ id }: { id: SystemPillarId }) {
  switch (id) {
    case 'track':
      return <ChartNoAxesCombined {...ICON} />
    case 'understand':
      return <Target {...ICON} />
    case 'care':
      return <Heart {...ICON} />
    case 'navigate':
      return <Compass {...ICON} />
  }
}

/** Simplified digestive-organ outline for gastroenterology. */
function StomachIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width={22}
      height={22}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M9.2 4.2c0-1.2.9-2 2.2-2h1.2c1.2 0 2.1.8 2.1 2v1.1c0 .9.4 1.6 1.1 2.1 1.6 1.2 2.9 2.9 2.9 5.3 0 3.4-2.6 5.8-6.1 5.8-2.9 0-4.9-1.5-5.7-3.6-.4-1.1-.6-2.3-.6-3.6V8.8c0-2 .7-3.3 1.6-4 .4-.3.8-.5 1.3-.6" />
      <path d="M9.5 10.2c1.4.45 2.9.45 4.3 0" />
    </svg>
  )
}

function ExpertIcon({ id }: { id: ExpertPerspectiveId }) {
  switch (id) {
    case 'gi':
      return <StomachIcon />
    case 'nutrition':
      return <Leaf {...ICON} />
    case 'gut-brain':
      return <Brain {...ICON} />
    case 'whole-person':
      return <UserRound {...ICON} />
    case 'sleep':
      return <Moon {...ICON} />
    case 'movement':
      return <Activity {...ICON} />
    case 'pharmacy':
      return <Pill {...ICON} />
    case 'pelvic':
      return <Waves {...ICON} />
  }
}

/** Decorative four-point starburst beside the intro headline. */
function SparkleMark() {
  const uid = useId().replace(/:/g, '')
  const glowId = `cp2-spark-glow-${uid}`
  const fillId = `cp2-spark-fill-${uid}`

  return (
    <svg className="cp2-vr-spark" viewBox="0 0 56 56" fill="none" aria-hidden="true">
      <defs>
        <radialGradient id={glowId} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#EF5350" stopOpacity="0.35" />
          <stop offset="70%" stopColor="#EF5350" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#EF5350" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={fillId} x1="14" y1="10" x2="42" y2="46" gradientUnits="userSpaceOnUse">
          <stop stopColor="#EF5350" />
          <stop offset="1" stopColor="#F4A58A" />
        </linearGradient>
      </defs>
      <circle cx="28" cy="28" r="18" fill={`url(#${glowId})`} />
      <path
        d="M28 10c.7 4.6 2.8 7.2 7.4 8.4-4.6 1.2-6.7 3.8-7.4 8.4-.7-4.6-2.8-7.2-7.4-8.4 4.6-1.2 6.7-3.8 7.4-8.4Z"
        fill={`url(#${fillId})`}
      />
      <path
        d="M28 6v4M28 46v4M6 28h4M46 28h4M13.2 13.2l2.6 2.6M40.2 40.2l2.6 2.6M40.2 13.2l-2.6 2.6M13.2 40.2l2.6-2.6"
        stroke="#EF5350"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M42 18c.35 2 1.2 3.1 3.2 3.6-2 .5-2.85 1.6-3.2 3.6-.35-2-1.2-3.1-3.2-3.6 2-.5 2.85-1.6 3.2-3.6Z"
        fill="#F4A58A"
        opacity="0.85"
      />
    </svg>
  )
}

function LiveContextStrip({
  labels,
  bridge,
}: {
  labels: string[]
  bridge: string
}) {
  if (!labels.length) return null

  return (
    <div className="cp2-vr-context" aria-label="Current selections">
      <div className="cp2-vr-pills">
        {labels.map((label, i) => (
          <Fragment key={`${label}-${i}`}>
            {i > 0 && (
              <span className="cp2-vr-connector" aria-hidden="true">
                <span className="cp2-vr-connector-dots" />
              </span>
            )}
            <span className="cp2-vr-pill">
              <span className="cp2-vr-pill-check" aria-hidden="true">
                <Check size={11} strokeWidth={2.6} />
              </span>
              {label}
            </span>
          </Fragment>
        ))}
      </div>
      <p className="cp2-vr-bridge">
        <Sparkles className="cp2-vr-bridge-icon" {...ICON_SM} />
        <span>{bridge}</span>
      </p>
    </div>
  )
}

function FlowRail({
  pillars,
  care,
}: {
  pillars: SystemPreview['pillars']
  care: boolean
}) {
  return (
    <ol className={`cp2-vr-rail${care ? ' is-care' : ''}`} aria-label="How your copilots respond">
      {pillars.map((pillar, index) => (
        <li
          key={pillar.id}
          className={`cp2-vr-step${pillar.primary ? ' is-primary' : ''}`}
          data-pillar={pillar.id}
          style={{ '--cp2-step-i': index } as CSSProperties}
        >
          <div className="cp2-vr-step-rail" aria-hidden="true">
            <span className="cp2-vr-step-icon">
              <StageIcon id={pillar.id} />
            </span>
            {index < pillars.length - 1 && <span className="cp2-vr-step-line" />}
          </div>
          <div className="cp2-vr-step-body">
            <div className="cp2-vr-step-meta">
              <span className="cp2-vr-stage">{pillar.stage}</span>
              {pillar.primary && (
                <span className="cp2-vr-badge">
                  <Sparkle {...ICON_XS} />
                  {care ? 'Priority right now' : 'Most relevant right now'}
                </span>
              )}
            </div>
            <p className="cp2-vr-action">{pillar.label}</p>
            <p className="cp2-vr-copy">{pillar.body}{pillar.body.endsWith('?') || pillar.body.endsWith('.') ? '' : '.'}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}

function LensBand({
  note,
  care,
  relevantExperts,
}: {
  note: string
  care: boolean
  relevantExperts: ExpertPerspectiveId[]
}) {
  const [showMore, setShowMore] = useState(false)
  const expertKey = relevantExperts.join(',')

  useEffect(() => {
    setShowMore(false)
  }, [expertKey])

  if (care) {
    return (
      <div className="cp2-vr-lenses is-care" aria-label="Care priority">
        <p className="cp2-vr-lenses-kicker">Priority · clinical attention</p>
        <p className="cp2-vr-lenses-note">{note}</p>
      </div>
    )
  }

  const ordered = relevantExperts
    .map((id) => EXPERT_PERSPECTIVES.find((e) => e.id === id))
    .filter((e): e is (typeof EXPERT_PERSPECTIVES)[number] => Boolean(e))
  const hiddenCount = Math.max(0, ordered.length - 3)
  const visible = showMore ? ordered : ordered.slice(0, 3)

  return (
    <div className="cp2-vr-lenses" aria-label="Multiple perspectives">
      <p className="cp2-vr-lenses-kicker">One story · multiple perspectives</p>
      <ul className="cp2-vr-lens-grid">
        {visible.map((expert) => (
          <li key={expert.id} className={`cp2-vr-lens tone-${expert.tone}`}>
            <span className="cp2-vr-lens-icon" aria-hidden="true">
              <ExpertIcon id={expert.id} />
            </span>
            <span className="cp2-vr-lens-title">{expert.label}</span>
          </li>
        ))}
        {!showMore && hiddenCount > 0 && (
          <li>
            <button
              type="button"
              className="cp2-vr-lens cp2-vr-lens-more"
              aria-expanded={false}
              aria-label={`Show ${hiddenCount} more perspectives`}
              onClick={() => setShowMore(true)}
            >
              <span className="cp2-vr-lens-more-mark" aria-hidden="true">
                +{hiddenCount}
              </span>
            </button>
          </li>
        )}
      </ul>
      <p className="cp2-vr-lenses-note">{note}</p>
    </div>
  )
}

function SystemPreviewPanel({
  preview,
  labels,
  relevantExperts,
}: {
  preview: SystemPreview
  labels: string[]
  relevantExperts: ExpertPerspectiveId[]
}) {
  const liveId = useId()

  return (
    <article
      className={`cp2-vr${preview.care ? ' is-care' : ''}`}
      aria-labelledby={liveId}
      aria-live="polite"
    >
      <LiveContextStrip labels={labels} bridge={preview.bridge} />

      <header className="cp2-vr-intro">
        <p className="cp2-vr-eyebrow">
          <span className="cp2-cp-dot" />
          {preview.care ? 'Your copilots · let’s take this seriously' : 'Your copilots · already on it'}
        </p>
        <div className="cp2-vr-headline">
          <h3 id={liveId}>{preview.intro}</h3>
          <SparkleMark />
        </div>
        <p className="cp2-vr-support">{preview.support}</p>
      </header>

      <FlowRail pillars={preview.pillars} care={preview.care} />

      <LensBand note={preview.lensesNote} care={preview.care} relevantExperts={relevantExperts} />

      <footer className="cp2-vr-foot">
        <div className="cp2-vr-outcome-row">
          <span className="cp2-vr-outcome-icon" aria-hidden="true">
            <Goal size={24} strokeWidth={1.85} />
          </span>
          <p className="cp2-vr-outcome">{preview.foot}</p>
        </div>
        <p className="cp2-vr-note">{preview.note}</p>
        <div className="cp2-vr-cta">
          <a href={SIGNUP_URL} className="cp2-btn" data-cta="primary">
            {preview.ctaLabel}
          </a>
          <PlatformFineprint className="cp2-platform-link--compact" placement="hero-picker" />
        </div>
      </footer>
    </article>
  )
}

function SystemEmptyState() {
  const stages: SystemPillarId[] = ['track', 'understand', 'care', 'navigate']

  return (
    <div className="cp2-vr cp2-vr--empty" aria-live="polite">
      <div className="cp2-vr-empty-visual" aria-hidden="true">
        <SparkleMark />
      </div>
      <p className="cp2-vr-eyebrow">
        <span className="cp2-cp-dot" />
        Your copilots · standing by
      </p>
      <h3 className="cp2-vr-empty-title">Your copilots are standing by</h3>
      <p className="cp2-vr-support">
        Select a symptom, diagnosis, or where you are — and watch a connected response take shape.
      </p>
      <ol className="cp2-vr-rail cp2-vr-rail--ghost" aria-hidden="true">
        {stages.map((id, index) => (
          <li key={id} className="cp2-vr-step">
            <div className="cp2-vr-step-rail">
              <span className="cp2-vr-step-icon">
                <StageIcon id={id} />
              </span>
              {index < stages.length - 1 && <span className="cp2-vr-step-line" />}
            </div>
            <div className="cp2-vr-step-body">
              <span className="cp2-vr-stage">
                {id === 'track' && 'Track'}
                {id === 'understand' && 'Understand'}
                {id === 'care' && 'Care'}
                {id === 'navigate' && 'Navigate'}
              </span>
              <p className="cp2-vr-action">
                {id === 'track' && "I'd track"}
                {id === 'understand' && "I'd connect it to"}
                {id === 'care' && "I'd support your daily care"}
                {id === 'navigate' && "I'd help you prepare and ask"}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}

export function CopilotHero({ picker }: { picker: Picker }) {
  const { toggleChip, isSelected, threadLabels, systemPreview, relevantExperts } = picker

  return (
    <section className="cp2-hero">
      <div className="cp2-wrap">
        <div className="cp2-hero-grid">
          <div className="cp2-hero-copy">
            <p className="cp2-eyebrow cp2-reveal">You&apos;re the pilot · Gutsphere is the copilot</p>
            <h1 className="cp2-reveal" style={{ marginTop: 16 }}>
              From gut <span className="cp2-em">anxiety</span> to gut <span className="cp2-em">confidence</span>.
            </h1>
            <p className="cp2-sub cp2-reveal">
              Know what&apos;s wrong. Know what to do. Gutsphere is the copilot that helps you make sense of
              your symptoms, act on them, and walk into every appointment prepared — so the guessing and the
              2am spirals stop.
            </p>
            <div className="cp2-hero-actions cp2-reveal">
              <a href={SIGNUP_URL} className="cp2-btn" data-cta="primary">
                Start free
              </a>
              <a href="#system" className="cp2-hero-secondary">
                See how it works <span aria-hidden="true">→</span>
              </a>
            </div>
            <PlatformFineprint className="cp2-reveal" />
          </div>
          <div className="cp2-hero-media cp2-reveal">
            <HeroDemoEmbed />
          </div>
        </div>

        <div className={`cp2-picker${systemPreview ? ' cp2-picker--live' : ''}`} id="start">
          <p className="cp2-q">Where are you right now?</p>

          <div className="cp2-picker-grid">
            <div className="cp2-picker-chips">
              <div className="cp2-chip-group">
                <p className="cp2-chip-group-lbl">Your symptoms</p>
                <div className="cp2-chips">
                  {SYMPTOM_CHIPS.map((chip) => (
                    <button
                      key={chip.key}
                      type="button"
                      className="cp2-chip"
                      aria-pressed={isSelected({ kind: 'symptom', key: chip.key, label: chip.label })}
                      onClick={() => toggleChip({ kind: 'symptom', key: chip.key, label: chip.label })}
                    >
                      {chip.label}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="button"
                className="cp2-chip cp2-chip-lead"
                aria-pressed={isSelected({ kind: 'figuring', label: "I'm still figuring it out" })}
                onClick={() => toggleChip({ kind: 'figuring', label: "I'm still figuring it out" })}
              >
                <span className="cp2-chip-lead-icon" aria-hidden="true">
                  <Brain size={22} strokeWidth={1.8} />
                </span>
                <span className="cp2-chip-lead-copy">
                  I&apos;m still figuring it out
                  <small>No diagnosis needed — most people start here</small>
                </span>
              </button>

              <details className="cp2-chip-fold">
                <summary>Already have a diagnosis?</summary>
                <div className="cp2-chips cp2-chips-dx">
                  {DX_CHIPS.map((label) => (
                    <button
                      key={label}
                      type="button"
                      className="cp2-chip cp2-dxchip"
                      aria-pressed={isSelected({ kind: 'dx', label })}
                      onClick={() => toggleChip({ kind: 'dx', label })}
                    >
                      {label}
                    </button>
                  ))}
                  <p className="cp2-dx-more">
                    Also EoE · microscopic colitis · diverticular disease · bile acid malabsorption ·
                    non-celiac gluten sensitivity · post-surgical guts &amp; more
                  </p>
                </div>
              </details>

              <details className="cp2-chip-fold cp2-chip-fold--care">
                <summary>
                  <span className="cp2-chip-fold-icon cp2-chip-fold-icon--closed" aria-hidden="true">
                    <Heart size={18} strokeWidth={1.8} />
                  </span>
                  <span className="cp2-chip-fold-icon cp2-chip-fold-icon--open" aria-hidden="true">
                    <AlertTriangle size={18} strokeWidth={1.8} />
                  </span>
                  Something that worries you?
                </summary>
                <div className="cp2-chips">
                  {FLAG_CHIPS.map((label) => (
                    <button
                      key={label}
                      type="button"
                      className="cp2-chip cp2-flagchip"
                      aria-pressed={isSelected({ kind: 'flag', label })}
                      onClick={() => toggleChip({ kind: 'flag', label })}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </details>
            </div>

            <div className="cp2-picker-panel">
              {systemPreview ? (
                <SystemPreviewPanel
                  preview={systemPreview}
                  labels={threadLabels}
                  relevantExperts={relevantExperts}
                />
              ) : (
                <SystemEmptyState />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
