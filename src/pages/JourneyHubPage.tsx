import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { CopilotFooter, CopilotNav } from '../components/copilot-v2/CopilotChrome'
import { StickyCTA } from '../components/copilot-v2/StickyCTA'
import { useReveal } from '../components/copilot-v2/useReveal'
import { MarketingFinalCta } from '../components/marketing/MarketingFinalCta'
import {
  JOURNEY_HUB,
  WHO_FOR_PHASES,
  WHO_FOR_SYSTEM,
  type WhoForPhaseId,
} from '../components/who-for/whoForAudiences'
import { NAVIGATOR_COUNT, SIGNUP_URL } from '../constants'
import '../styles/copilot-v2.css'
import '../styles/marketing-pages.css'
import '../styles/who-for.css'

const DEFAULT_PHASE: WhoForPhaseId = 'finding-answers'

export function JourneyHubPage() {
  useReveal()
  const [selectedId, setSelectedId] = useState<WhoForPhaseId>(DEFAULT_PHASE)
  const selected = useMemo(
    () => WHO_FOR_PHASES.find((p) => p.id === selectedId) ?? WHO_FOR_PHASES[0],
    [selectedId],
  )

  return (
    <div className="copilot-v2 mp-page mp-hub-page who-for journey-hub" id="top">
      <CopilotNav />
      <main>
        <section className="mp-hero wf-jh-hero">
          <div className="cp2-wrap">
            <p className="cp2-eyebrow cp2-reveal">{JOURNEY_HUB.eyebrow}</p>
            <h1 className="mp-hero-title cp2-reveal">{JOURNEY_HUB.title}</h1>
            <p className="mp-hero-lead cp2-reveal">{JOURNEY_HUB.lead}</p>
            <p className="mp-hub-trust cp2-reveal">Trusted by {NAVIGATOR_COUNT} navigators</p>
            <div className="mp-hero-actions cp2-reveal">
              <a href="#starting-points" className="cp2-btn">
                {JOURNEY_HUB.primaryCta}
              </a>
              <Link to="/for" className="cp2-btn ghost">
                Full situation guide
              </Link>
            </div>

            <div className="wf-jh-landscape cp2-reveal" aria-hidden="true">
              <div className="wf-jh-landscape-path" />
              <div className="wf-jh-landscape-scenes">
                {WHO_FOR_PHASES.map((phase, i) => (
                  <span key={phase.id} className={`wf-jh-scene${i === 4 ? ' is-side' : ''}`}>
                    <span className="wf-jh-scene-dot" />
                    <span className="wf-jh-scene-label">{phase.title}</span>
                  </span>
                ))}
              </div>
              <p className="wf-jh-landscape-caption">One coral path. Five places to drop in.</p>
            </div>
          </div>
        </section>

        <section className="mp-hub-library" id="starting-points">
          <div className="cp2-wrap">
            <div className="mp-hub-section-head cp2-reveal">
              <p className="cp2-eyebrow">Five starting points</p>
              <h2>Choose the place that feels closest right now</h2>
              <p>Hover or select a phase. The preview updates with what that starting point looks like.</p>
            </div>

            <div className="wf-jh-selector cp2-reveal">
              <div className="wf-jh-cards" role="list">
                {WHO_FOR_PHASES.map((phase) => {
                  const active = phase.id === selected.id
                  return (
                    <button
                      key={phase.id}
                      type="button"
                      role="listitem"
                      className={`wf-jh-card${active ? ' is-active' : ''}`}
                      aria-pressed={active}
                      onMouseEnter={() => setSelectedId(phase.id)}
                      onFocus={() => setSelectedId(phase.id)}
                      onClick={() => setSelectedId(phase.id)}
                    >
                      <p className="wf-jh-card-prompt">{phase.prompt}</p>
                      <p className="wf-jh-card-outcome">{phase.outcome}</p>
                      <Link
                        to={`/for#${phase.id}`}
                        className="wf-jh-card-link"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {phase.journeyExplore}
                      </Link>
                    </button>
                  )
                })}
              </div>

              <aside className="wf-jh-preview" aria-live="polite">
                <p className="wf-jh-preview-phase">{selected.title}</p>
                <div className="wf-jh-preview-block">
                  <p className="wf-jh-preview-label">What may feel hard now</p>
                  <p>{selected.hardNow}</p>
                </div>
                <div className="wf-jh-preview-block">
                  <p className="wf-jh-preview-label">What Gutsphere helps you build</p>
                  <p>{selected.helpsBuild}</p>
                </div>
                <div className="wf-jh-preview-block">
                  <p className="wf-jh-preview-label">What becomes easier</p>
                  <p>{selected.becomesEasier}</p>
                </div>
                <div className={`wf-jh-preview-scene scene-${selected.id}`} aria-hidden="true">
                  <span className="wf-jh-preview-scene-label">Product scene</span>
                  <span className="wf-jh-preview-scene-title">
                    {selected.id === 'finding-answers' && 'Connected symptom timeline'}
                    {selected.id === 'in-treatment' && 'Treatment-response view'}
                    {selected.id === 'living-with-it' && 'Daily routine and flare view'}
                    {selected.id === 'getting-ahead' && 'Baseline and early-drift view'}
                    {selected.id === 'caregiver' && 'Shared care summary'}
                  </span>
                </div>
                <Link to={`/for#${selected.id}`} className="cp2-btn wf-jh-preview-cta">
                  Continue to {selected.title.toLowerCase()}
                </Link>
              </aside>
            </div>
          </div>
        </section>

        <section className="wf-jh-nonlinear">
          <div className="cp2-wrap cp2-reveal">
            <p className="cp2-eyebrow">Not a fixed ladder</p>
            <h2>{JOURNEY_HUB.nonLinear.heading}</h2>
            <p>{JOURNEY_HUB.nonLinear.copy}</p>
            <p className="wf-jh-nonlinear-close">{JOURNEY_HUB.nonLinear.closing}</p>
            <div className="wf-jh-loop" aria-hidden="true">
              <span>Forward</span>
              <span>Back</span>
              <span>Two places at once</span>
              <span className="wf-jh-loop-thread">History stays</span>
            </div>
          </div>
        </section>

        <section className="mp-hub-band wf-jh-travels">
          <div className="cp2-wrap mp-hub-band-in cp2-reveal">
            <div>
              <p className="cp2-eyebrow">What travels with you</p>
              <h2>{JOURNEY_HUB.travels.heading}</h2>
              <ul className="wf-jh-travels-list">
                {JOURNEY_HUB.travels.objects.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="wf-jh-system-row" aria-label="Connected system">
                {WHO_FOR_SYSTEM.columns.map((col) => (
                  <span key={col}>{col}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="wf-jh-bridge">
          <div className="cp2-wrap cp2-reveal">
            <p className="cp2-eyebrow">Next</p>
            <h2>{JOURNEY_HUB.bridge.heading}</h2>
            <p>{JOURNEY_HUB.bridge.copy}</p>
            <Link to={`/for#${selected.id}`} className="cp2-btn">
              {JOURNEY_HUB.bridge.cta}
            </Link>
          </div>
        </section>

        <MarketingFinalCta
          title="Start from where you are today."
          primaryHref={SIGNUP_URL}
          primaryLabel="Start free"
          secondaryHref={`/for#${selected.id}`}
          secondaryLabel="See situations in this phase"
        />
      </main>
      <StickyCTA />
      <CopilotFooter />
    </div>
  )
}
