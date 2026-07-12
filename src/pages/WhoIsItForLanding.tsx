import { useEffect, useId, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { CopilotNav, CopilotFooter } from '../components/copilot-v2/CopilotChrome'
import { useReveal } from '../components/copilot-v2/useReveal'
import { StickyCTA } from '../components/copilot-v2/StickyCTA'
import {
  WHO_FOR_ALSO,
  WHO_FOR_BRIDGE,
  WHO_FOR_FINAL,
  WHO_FOR_HERO,
  WHO_FOR_NOT,
  WHO_FOR_PERSONALIZATION,
  WHO_FOR_PHASE_SELECTOR,
  WHO_FOR_PHASES,
  WHO_FOR_SYSTEM,
  getWhoForPhase,
  type WhoForPhase,
  type WhoForPhaseId,
  type WhoForSituation,
} from '../components/who-for/whoForAudiences'
import { MarketingFinalCta } from '../components/marketing/MarketingFinalCta'
import { NAVIGATOR_COUNT, SIGNUP_URL } from '../constants'
import { ChevronDown } from 'lucide-react'
import '../styles/copilot-v2.css'
import '../styles/who-for.css'
import '../styles/marketing-pages.css'

function SituationRow({
  situation,
  open,
  onToggle,
}: {
  situation: WhoForSituation
  open: boolean
  onToggle: () => void
}) {
  const panelId = useId()
  return (
    <div className={`wf-situation${open ? ' is-open' : ''}`} id={`cohort-${situation.id}`}>
      <button
        type="button"
        className="wf-situation-trigger"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <span className="wf-situation-num" aria-hidden="true">
          {String(situation.number).padStart(2, '0')}
        </span>
        <span className="wf-situation-title">{situation.title}</span>
        <ChevronDown className="wf-situation-chevron" size={18} aria-hidden="true" />
      </button>
      <div id={panelId} className="wf-situation-panel" hidden={!open}>
        <p>
          <strong>You may be here if:</strong> {situation.mayBeHereIf}
        </p>
        <p>
          <strong>Gutsphere helps you:</strong> {situation.helps}
        </p>
        {situation.outcome && situation.outcome !== situation.helps ? (
          <p>
            <strong>Outcome:</strong> {situation.outcome}
          </p>
        ) : null}
      </div>
    </div>
  )
}

function PhaseChapter({
  phase,
  defaultOpenId,
}: {
  phase: WhoForPhase
  defaultOpenId?: string | null
}) {
  const [openId, setOpenId] = useState<string | null>(
    defaultOpenId && phase.situations.some((s) => s.id === defaultOpenId)
      ? defaultOpenId
      : phase.situations[0]?.id ?? null,
  )

  return (
    <article id={phase.id} className="wf-chapter">
      <div className="wf-chapter-copy">
        <p className="cp2-eyebrow">{phase.title}</p>
        <h3>{phase.chapterHeading}</h3>
        <p className="wf-chapter-support">{phase.chapterSupport}</p>
        <p className="wf-card-outcome">{phase.outcome}</p>
      </div>

      <div className={`wf-chapter-scene scene-${phase.id}`} aria-hidden="true">
        <p className="wf-chapter-scene-label">Product scene</p>
        <p className="wf-chapter-scene-title">
          {phase.id === 'finding-answers' && 'Fragments → timeline → next step'}
          {phase.id === 'in-treatment' && 'Plan → response · side effects · follow-up'}
          {phase.id === 'living-with-it' && 'Daily life with flare support layered in'}
          {phase.id === 'getting-ahead' && 'Baseline disrupted, then stabilized'}
          {phase.id === 'caregiver' && 'Two perspectives · one timeline'}
        </p>
      </div>

      <div className="wf-situation-list">
        {phase.situations.map((situation) => (
          <SituationRow
            key={situation.id}
            situation={situation}
            open={openId === situation.id}
            onToggle={() => setOpenId((prev) => (prev === situation.id ? null : situation.id))}
          />
        ))}
      </div>

      <div className="wf-chapter-actions">
        <a href={SIGNUP_URL} className="cp2-btn" data-cta="primary">
          {phase.chapterCta}
        </a>
      </div>
    </article>
  )
}

export function WhoIsItForLanding() {
  useReveal()
  const location = useLocation()
  const hashId = location.hash.replace('#', '')
  const hashPhase = getWhoForPhase(hashId)

  const [systemPhaseId, setSystemPhaseId] = useState<WhoForPhaseId>('finding-answers')
  const systemPhase = useMemo(
    () => WHO_FOR_PHASES.find((p) => p.id === systemPhaseId) ?? WHO_FOR_PHASES[0],
    [systemPhaseId],
  )

  useEffect(() => {
    if (!hashId) return
    const el = document.getElementById(hashId)
    if (el) {
      window.requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    }
    if (hashPhase) setSystemPhaseId(hashPhase.id)
  }, [hashId, hashPhase])

  return (
    <div className="copilot-v2 who-for mp-page" id="top">
      <CopilotNav />
      <main>
        {/* Section 1 — Hero */}
        <section className="wf-hero">
          <div className="cp2-wrap">
            <p className="cp2-eyebrow cp2-reveal">{WHO_FOR_HERO.eyebrow}</p>
            <h1 className="wf-hero-title cp2-reveal">{WHO_FOR_HERO.title}</h1>
            <p className="wf-hero-lead cp2-reveal">{WHO_FOR_HERO.lead}</p>
            <p className="wf-hero-trust cp2-reveal">Trusted by {NAVIGATOR_COUNT} navigators</p>
            <div className="wf-hero-actions cp2-reveal">
              <a href="#phase-selector" className="cp2-btn">
                {WHO_FOR_HERO.primaryCta}
              </a>
              <a href="#audience-guide" className="cp2-btn ghost">
                {WHO_FOR_HERO.secondaryCta}
              </a>
            </div>

            <div className="wf-hero-scene cp2-reveal" aria-hidden="true">
              <div className="wf-hero-scene-path" />
              <div className="wf-hero-scene-moments">
                <span>Scattered clues</span>
                <span>Treatment &amp; care</span>
                <span>Clearer control</span>
              </div>
              <p className="wf-hero-scene-caption">Different moments. One connected history.</p>
            </div>
          </div>
        </section>

        {/* Section 2 — Fast phase selector */}
        <section className="cp2-band wf-phase-selector" id="phase-selector">
          <div className="cp2-wrap">
            <div className="cp2-sec-head cp2-reveal">
              <p className="cp2-eyebrow">Start here</p>
              <h2>{WHO_FOR_PHASE_SELECTOR.heading}</h2>
              <p>{WHO_FOR_PHASE_SELECTOR.support}</p>
            </div>

            <div className="wf-phase-card-grid cp2-reveal">
              {WHO_FOR_PHASES.map((phase) => (
                <a key={phase.id} href={`#${phase.id}`} className="wf-phase-card">
                  <p className="wf-phase-card-prompt">{phase.prompt}</p>
                  <h3>{phase.title}</h3>
                  <p className="wf-phase-card-outcome">{phase.outcome}</p>
                  <span className="wf-phase-card-cta">{phase.cta}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3 — Bridge */}
        <section className="wf-bridge">
          <div className="cp2-wrap cp2-reveal">
            <p className="cp2-eyebrow">One platform, different starting points</p>
            <h2>{WHO_FOR_BRIDGE.heading}</h2>
            <p>{WHO_FOR_BRIDGE.copy}</p>
            <div className="wf-bridge-path" aria-label="Journey path">
              {WHO_FOR_BRIDGE.path.map((step) => (
                <span key={step}>{step}</span>
              ))}
            </div>
            <div className="wf-bridge-layers">
              {WHO_FOR_BRIDGE.layers.map((layer) => (
                <span key={layer}>{layer}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4 — Full audience guide */}
        <section className="cp2-band wf-audiences" id="audience-guide">
          <div className="cp2-wrap">
            <div className="cp2-sec-head cp2-reveal">
              <p className="cp2-eyebrow">Full audience guide</p>
              <h2>Drop into the situation that sounds like you</h2>
              <p>
                Five chapters. Eighteen situations as expandable rows—not a wall of identical cards.
              </p>
            </div>

            <div className="wf-chapters cp2-reveal">
              {WHO_FOR_PHASES.map((phase) => (
                <PhaseChapter
                  key={phase.id}
                  phase={phase}
                  defaultOpenId={hashId.startsWith('cohort-') ? hashId.replace('cohort-', '') : null}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Section 5 — Personalization */}
        <section className="wf-personalization">
          <div className="cp2-wrap cp2-reveal">
            <p className="cp2-eyebrow">Beyond the five phases</p>
            <h2>{WHO_FOR_PERSONALIZATION.heading}</h2>
            <p>{WHO_FOR_PERSONALIZATION.copy}</p>
            <div className="wf-orbit">
              <div className="wf-orbit-core">Your current context</div>
              <div className="wf-orbit-chips">
                {WHO_FOR_PERSONALIZATION.chips.map((chip) => (
                  <span key={chip} className="wf-orbit-chip">
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 6 — Same connected system */}
        <section className="wf-platform" id="system-by-phase">
          <div className="cp2-wrap">
            <div className="wf-platform-in cp2-reveal">
              <div className="wf-platform-copy">
                <p className="cp2-eyebrow">In every situation</p>
                <h2>{WHO_FOR_SYSTEM.heading}</h2>
                <p>Select a phase to see how Track, Care, Navigate and Understand show up there.</p>
                <div className="wf-system-phase-tabs" role="tablist" aria-label="Phase for system examples">
                  {WHO_FOR_PHASES.map((phase) => (
                    <button
                      key={phase.id}
                      type="button"
                      role="tab"
                      aria-selected={systemPhaseId === phase.id}
                      className={`wf-system-phase-tab${systemPhaseId === phase.id ? ' is-active' : ''}`}
                      onClick={() => setSystemPhaseId(phase.id)}
                    >
                      {phase.title}
                    </button>
                  ))}
                </div>
              </div>
              <div className="wf-platform-steps" aria-label="Connected system">
                {WHO_FOR_SYSTEM.columns.map((col, i) => (
                  <div key={col} className="wf-platform-step">
                    <span className="wf-platform-num">{String(i + 1).padStart(2, '0')}</span>
                    <span className="wf-platform-name">{col}</span>
                    <span className="wf-platform-example">{systemPhase.systemExamples[i]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 7 — Fit and boundaries */}
        <section className="cp2-band wf-fit">
          <div className="cp2-wrap">
            <div className="wf-fit-grid cp2-reveal">
              <div className="wf-fit-col wf-fit-yes">
                <h2>{WHO_FOR_ALSO.title}</h2>
                <ul>
                  {WHO_FOR_ALSO.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="wf-fit-col wf-fit-no">
                <h2>{WHO_FOR_NOT.title}</h2>
                <ul>
                  {WHO_FOR_NOT.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8 — Final CTA */}
        <MarketingFinalCta
          title={WHO_FOR_FINAL.title}
          lead={WHO_FOR_FINAL.lead}
          primaryHref={SIGNUP_URL}
          primaryLabel="Start free"
          secondaryHref="#phase-selector"
          secondaryLabel={WHO_FOR_FINAL.primaryCta}
        />
      </main>
      <StickyCTA />
      <CopilotFooter />
    </div>
  )
}
