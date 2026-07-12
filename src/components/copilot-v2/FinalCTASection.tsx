import { platformUrl } from '../../constants'

const CTA_IMAGE = '/images/cta.jpg'

const APPLE_BADGES = {
  black: {
    src: '/images/badges/app-store-black.svg',
    alt: 'Download on the App Store',
  },
  white: {
    src: '/images/badges/app-store-white.svg',
    alt: 'Download on the App Store',
  },
} as const

const GOOGLE_BADGES = {
  black: {
    src: '/images/badges/google-play-black.svg',
    alt: 'Get it on Google Play',
  },
  white: {
    src: '/images/badges/google-play-white.svg',
    alt: 'Get it on Google Play',
  },
} as const

function AppBadges() {
  return (
    <div className="cp2-final-app">
      <p className="cp2-lbl">Prefer the app?</p>
      <div className="cp2-badges">
        <a
          className="cp2-store-badge"
          href={platformUrl('ios', 'footer-cta')}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download on the App Store"
        >
          <img
            className="cp2-store-badge-img cp2-store-badge-img--desktop"
            src={APPLE_BADGES.black.src}
            alt=""
            height={40}
            width={120}
            loading="lazy"
            decoding="async"
          />
          <img
            className="cp2-store-badge-img cp2-store-badge-img--mobile"
            src={APPLE_BADGES.white.src}
            alt=""
            height={40}
            width={120}
            loading="lazy"
            decoding="async"
          />
        </a>
        <a
          className="cp2-store-badge"
          href={platformUrl('android', 'footer-cta')}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Get it on Google Play"
        >
          <img
            className="cp2-store-badge-img cp2-store-badge-img--desktop"
            src={GOOGLE_BADGES.black.src}
            alt=""
            height={40}
            width={135}
            loading="lazy"
            decoding="async"
          />
          <img
            className="cp2-store-badge-img cp2-store-badge-img--mobile"
            src={GOOGLE_BADGES.white.src}
            alt=""
            height={40}
            width={135}
            loading="lazy"
            decoding="async"
          />
        </a>
      </div>
    </div>
  )
}

function CtaCopy() {
  return (
    <div className="cp2-final-content">
      <p className="cp2-final-eyebrow">Ready when you are</p>
      <h2 id="cp2-final-heading" className="cp2-final-title">
        Stop managing your gut in five places.
      </h2>
      <p className="cp2-final-lead">
        Start free on web, iOS, or Android — one copilot for tracking, care, and visit prep.
      </p>
      <a href={platformUrl('web', 'footer-cta')} className="cp2-btn cp2-final-btn" data-cta="primary">
        Start free
      </a>
      <p className="cp2-final-trust">No card required · cancel anytime · not medical advice</p>
      <AppBadges />
    </div>
  )
}

export function FinalCTASection() {
  return (
    <section className="cp2-final cp2-final--split" id="cta" aria-labelledby="cp2-final-heading">
      <div className="cp2-final-split cp2-final-split--blend">
        <div className="cp2-final-split-bg" aria-hidden="true">
          <img src={CTA_IMAGE} alt="" loading="lazy" decoding="async" />
        </div>
        <div className="cp2-wrap cp2-final-split-inner">
          <div className="cp2-final-split-content cp2-final-on-light">
            <CtaCopy />
          </div>
        </div>
      </div>
    </section>
  )
}
