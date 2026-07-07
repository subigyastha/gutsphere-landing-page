import { Fragment } from 'react'
import { SIGNUP_URL } from '../../constants'
import { DX_CHIPS, FLAG_CHIPS, SYMPTOM_CHIPS } from './constants'
import type { useCopilotPicker } from './useCopilotPicker'

type Picker = ReturnType<typeof useCopilotPicker>

/** Horizontal link bridge — symptoms tied by shared factors, not a vertical slider. */
function ConnectionBridge({ labels, shared }: { labels: string[]; shared: string[] }) {
  if (!labels.length) return null

  if (labels.length === 1) {
    return (
      <div className="cp2-bridge" aria-label="How your copilot connects this">
        <div className="cp2-bridge-row">
          <span className="cp2-bridge-sym">{labels[0]}</span>
          <span className="cp2-bridge-link" aria-hidden="true">
            <svg viewBox="0 0 48 12" fill="none">
              <path d="M0 6h16M32 6h16M16 6h16" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
              <circle cx="24" cy="6" r="3" fill="currentColor" />
            </svg>
          </span>
          <div className="cp2-bridge-factors">
            {(shared.length ? shared : ['meals', 'sleep', 'stress']).slice(0, 2).map((f) => (
              <span key={f} className="cp2-bridge-factor">
                {f}
              </span>
            ))}
          </div>
        </div>
        <p className="cp2-bridge-cap">Your copilot links this to what you eat, how you sleep, and your day</p>
      </div>
    )
  }

  return (
    <div className="cp2-bridge cp2-bridge--multi" aria-label="How your symptoms connect">
      <div className="cp2-bridge-row">
        {labels.map((label, i) => (
          <Fragment key={label + i}>
            {i > 0 && (
              <span className="cp2-bridge-join" aria-hidden="true">
                <svg viewBox="0 0 28 12" fill="none">
                  <path d="M0 6h10M18 6h10M10 6h8" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
                  <circle cx="14" cy="6" r="2.5" fill="currentColor" />
                </svg>
              </span>
            )}
            <span className="cp2-bridge-sym">{label}</span>
          </Fragment>
        ))}
      </div>
      {shared.length > 0 && (
        <p className="cp2-bridge-cap">
          Shared thread: <strong>{shared.join(' · ')}</strong> — your copilot ties these into one pattern
        </p>
      )}
      {!shared.length && labels.length > 1 && (
        <p className="cp2-bridge-cap">Your copilot ties these into one pattern — not separate problems</p>
      )}
    </div>
  )
}

export function CopilotHero({ picker }: { picker: Picker }) {
  const { toggleChip, isSelected, threadLabels, sharedLinks, preview } = picker

  return (
    <section className="cp2-hero">
      <div className="cp2-wrap">
        <div className="cp2-hero-grid">
          <div className="cp2-hero-copy">
            <p className="cp2-eyebrow cp2-reveal">You&apos;re the pilot · Gutsphere is the copilot</p>
            <h1 className="cp2-reveal" style={{ marginTop: 16 }}>
              From gut anxiety to gut <span className="cp2-em">confidence</span>.
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
            <p className="cp2-fineprint cp2-reveal">Free to start · no card · web, iOS or Android</p>
          </div>
          <div className="cp2-hero-media cp2-reveal" aria-hidden="true">
            <div className="cp2-phone">
              <span className="cp2-phone-island" />
              <div className="cp2-screen">
                <div className="cp2-scr-top">
                  <span>9:41</span>
                  <span className="cp2-scr-dots" />
                </div>
                <div className="cp2-scr-head">
                  <div>
                    <p className="cp2-scr-day">Today · Tue</p>
                    <p className="cp2-scr-title">How&apos;s your gut?</p>
                  </div>
                  <span className="cp2-scr-av" />
                </div>
                <div className="cp2-scr-pills">
                  <span className="cp2-sp on">Bloating</span>
                  <span className="cp2-sp">Reflux</span>
                  <span className="cp2-sp">Nausea</span>
                </div>
                <p className="cp2-scr-lbl">Severity</p>
                <div className="cp2-scr-sev">
                  <span />
                  <span />
                  <span className="on" />
                  <span />
                  <span />
                </div>
                <div className="cp2-scr-insight">
                  <span className="cp2-scr-dot" />
                  <p>Linked to a late meal + two short nights</p>
                </div>
                <div className="cp2-scr-cta">Log today · 12s</div>
                <div className="cp2-scr-tabs">
                  <span className="on" />
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`cp2-picker${preview ? ' cp2-picker--live' : ''}`} id="start">
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
                I&apos;m still figuring it out
                <small>No diagnosis needed — most people start here</small>
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
                <summary>Something that worries you?</summary>
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
              {threadLabels.length > 0 && !preview?.care && (
                <ConnectionBridge labels={threadLabels} shared={sharedLinks} />
              )}

              {preview ? (
                <div className={`cp2-copilot${preview.care ? ' care' : ''}`}>
                  <div className="cp2-cp-head">
                    <span className="cp2-cp-dot" />
                    {preview.care
                      ? 'Your copilot · let’s take this seriously'
                      : 'Your copilot · already on it'}
                  </div>
                  <p className="cp2-cp-intro">{preview.intro}</p>
                  {preview.care ? (
                    <>
                      <div className="cp2-cp-row">
                        <span className="cp2-cp-k">Right now</span>
                        <p>
                          Please reach out to a doctor or clinic about this. If it&apos;s severe, heavy, or came
                          on suddenly, use urgent or emergency care.
                        </p>
                      </div>
                      <div className="cp2-cp-row">
                        <span className="cp2-cp-k">How I help</span>
                        <p>
                          I&apos;ll keep a clear, dated record of what you&apos;re noticing, so you can hand it
                          straight to whoever you see.
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="cp2-cp-row">
                        <span className="cp2-cp-k">I&apos;d track</span>
                        <p>{preview.track}.</p>
                      </div>
                      <div className="cp2-cp-row">
                        <span className="cp2-cp-k">I&apos;d connect it to</span>
                        <p>{preview.connect} — to find what&apos;s really driving it.</p>
                      </div>
                      <div className="cp2-cp-row">
                        <span className="cp2-cp-k">I&apos;d help you ask</span>
                        <p>&ldquo;{preview.ask}&rdquo;</p>
                      </div>
                    </>
                  )}
                  <p className="cp2-cp-foot">{preview.foot}</p>
                  <p className="cp2-cp-note">{preview.note}</p>
                  <div className="cp2-cp-cta">
                    <a href={SIGNUP_URL} className="cp2-btn" data-cta="primary">
                      {preview.ctaLabel}
                    </a>
                    <p className="cp2-cp-cta-fine">Free to start · no card · web, iOS or Android</p>
                  </div>
                </div>
              ) : (
                <div className="cp2-cp-empty">
                  <span className="cp2-cp-dot" />
                  <p className="cp2-cp-empty-title">Your copilot is standing by</p>
                  <p>
                    Tap a symptom above and watch how your copilot responds to <em>you</em>.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
