import { useState } from 'react'
import { SIGNUP_URL } from '../../constants'

export type CtaStyleVariant = 'split' | 'stack'

const CTA_IMAGE = '/images/cta.png'

const VARIANT_OPTIONS: { id: CtaStyleVariant; label: string }[] = [
  { id: 'split', label: 'Split' },
  { id: 'stack', label: 'Stack' },
]

function AppBadges() {
  return (
    <div className="cp2-final-app">
      <p className="cp2-lbl">Prefer the app?</p>
      <div className="cp2-badges">
        <a className="cp2-store" href={SIGNUP_URL}>
          <span aria-hidden="true">&#63743;</span>
          <span>
            Download on the <b>App Store</b>
          </span>
        </a>
        <a className="cp2-store" href={SIGNUP_URL}>
          <span aria-hidden="true">&#9654;</span>
          <span>
            Get it on <b>Google Play</b>
          </span>
        </a>
      </div>
    </div>
  )
}

function CtaCopy({ ghost = false }: { ghost?: boolean }) {
  const buttonClass = ghost ? 'cp2-final-btn cp2-final-btn--ghost' : 'cp2-final-btn'

  return (
    <div className="cp2-final-content">
      <p className="cp2-final-eyebrow">Ready when you are</p>
      <h2 id="cp2-final-heading" className="cp2-final-title">
        Stop managing your gut in five places.
      </h2>
      <p className="cp2-final-lead">
        Start free on web, iOS, or Android — one copilot for tracking, care, and visit prep.
      </p>
      <a href={SIGNUP_URL} className={`cp2-btn ${buttonClass}`} data-cta="primary">
        Start free
      </a>
      <p className="cp2-final-trust">No card required · cancel anytime · not medical advice</p>
      <AppBadges />
    </div>
  )
}

export function FinalCTASection() {
  const [variant, setVariant] = useState<CtaStyleVariant>('split')

  return (
    <section
      className={`cp2-final cp2-final--${variant}`}
      id="cta"
      aria-labelledby="cp2-final-heading"
    >
      <div
        className="cp2-final-style-toggle"
        role="group"
        aria-label="CTA section layout style"
      >
        <div className="cp2-final-style-toggle-in">
          {VARIANT_OPTIONS.map((option) => (
            <button
              key={option.id}
              type="button"
              className={variant === option.id ? 'is-active' : ''}
              aria-pressed={variant === option.id}
              onClick={() => setVariant(option.id)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {variant === 'split' && (
        <div className="cp2-final-split">
          <div className="cp2-final-split-bg" aria-hidden="true">
            <img src={CTA_IMAGE} alt="" loading="lazy" decoding="async" />
          </div>
          <div className="cp2-wrap cp2-final-split-inner">
            <div className="cp2-final-split-content cp2-final-on-coral">
              <CtaCopy ghost />
            </div>
          </div>
        </div>
      )}

      {variant === 'stack' && (
        <div className="cp2-final-stack">
          <div className="cp2-final-stack-hero" aria-hidden="true">
            <img src={CTA_IMAGE} alt="" loading="lazy" decoding="async" />
          </div>
          <div className="cp2-final-stack-body cp2-final-on-coral">
            <div className="cp2-wrap cp2-final-stack-inner">
              <CtaCopy ghost />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
