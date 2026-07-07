import { useLocation } from 'react-router-dom'
import { usePastHero } from '../hooks/usePastHero'
import { PRIMARY_CTA_LABEL, SIGNUP_URL, getConditionFrom } from '../constants'

type NavLink = { href: string; label: string }

function clarityHomePrefix(pathname: string): string {
  if (pathname.startsWith('/clarity-v4')) return '/clarity-v4'
  if (pathname.startsWith('/clarity-v2')) return '/clarity-v2'
  if (pathname.startsWith('/conditions')) {
    return getConditionFrom() === 'style-4' ? '/clarity-v4' : '/clarity-v2'
  }
  return ''
}

function getNavLinks(pathname: string): NavLink[] {
  const prefix = clarityHomePrefix(pathname)

  if (
    pathname.startsWith('/clarity-v2') ||
    pathname.startsWith('/clarity-v4') ||
    pathname.startsWith('/conditions')
  ) {
    return [
      { href: `${prefix}#the-problem`, label: 'The problem' },
      { href: `${prefix}#pillars`, label: 'How it helps' },
      { href: `${prefix}#why-different`, label: 'Why different' },
      { href: `${prefix}#prepare-visit`, label: 'Upcoming visit' },
      { href: `${prefix}#how-it-works`, label: 'How it works' },
      { href: `${prefix}#privacy`, label: 'Privacy' },
      { href: `${prefix}#faq`, label: 'FAQ' },
    ]
  }

  if (pathname.startsWith('/navigators')) {
    return [
      { href: '#founder', label: 'Our story' },
      { href: '#no-diagnosis', label: 'Is this for me?' },
      { href: '#content', label: 'Guides' },
      { href: '#how-it-works', label: 'How it works' },
      { href: '#privacy', label: 'Privacy' },
      { href: '#faq', label: 'FAQ' },
    ]
  }

  if (pathname.startsWith('/discovery')) {
    return [
      { href: '#how-it-helps', label: 'How it helps' },
      { href: '#self-care', label: 'Self Care' },
      { href: '#clinical-navigation', label: 'Clinical Navigation' },
      { href: '#clinical-intelligence', label: 'Clinical Intelligence' },
      { href: '#resources', label: 'Resources' },
    ]
  }

  return [
    { href: '#founder', label: 'Our story' },
    { href: '#undiagnosed', label: 'Is this for me?' },
    { href: '#content', label: 'Guides' },
    { href: '#how-it-works', label: 'How it works' },
    { href: '#privacy', label: 'Privacy' },
    { href: '#faq', label: 'FAQ' },
  ]
}

function homeHref(pathname: string): string {
  if (pathname.startsWith('/discovery')) return '/discovery'
  if (pathname.startsWith('/clarity-v4')) return '/clarity-v4'
  if (pathname.startsWith('/clarity-v2')) return '/clarity-v2'
  if (pathname.startsWith('/conditions')) {
    return getConditionFrom() === 'style-4' ? '/clarity-v4' : '/clarity-v2'
  }
  if (pathname.startsWith('/navigators')) return '/navigators'
  return '/'
}

export function Header() {
  const { pathname } = useLocation()
  const pastHero = usePastHero()
  const navLinks = getNavLinks(pathname)
  const logoHref = homeHref(pathname)
  const isDiscovery = pathname.startsWith('/discovery')
  const ctaLabel = isDiscovery ? 'Start Your Gut Check-In' : PRIMARY_CTA_LABEL
  const showNav = pastHero

  return (
    <header
      className={`landing-glass-header ${showNav ? 'landing-glass-header--expanded' : 'landing-glass-header--collapsed'}`}
      data-past-hero={showNav ? 'true' : 'false'}
    >
      <div className="landing-glass-header-inner">
        <a href={logoHref} className="landing-glass-logo">
          <span className="landing-glass-logo-mark" aria-hidden="true">
            G
          </span>
          <span className="landing-glass-logo-text">
            {isDiscovery ? 'GutSphere' : 'Gutsphere'}
          </span>
        </a>

        <nav
          className="landing-glass-nav"
          aria-label="Primary"
          aria-hidden={!showNav}
        >
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="landing-glass-nav-link" tabIndex={showNav ? 0 : -1}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="landing-glass-actions">
          {showNav && (
            <details className="landing-glass-menu lg:hidden">
              <summary className="landing-glass-menu-btn" aria-label="Open menu">
                <svg
                  className="h-5 w-5"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              </summary>
              <nav className="landing-glass-menu-panel" aria-label="Mobile">
                {navLinks.map((link) => (
                  <a key={link.href} href={link.href} className="landing-glass-menu-link">
                    {link.label}
                  </a>
                ))}
                <a href={SIGNUP_URL} className="landing-glass-menu-cta" data-cta="primary">
                  {ctaLabel}
                </a>
              </nav>
            </details>
          )}

          <a
            href={SIGNUP_URL}
            className={`landing-glass-cta ${showNav ? '' : 'landing-glass-cta--compact'}`}
            data-cta="primary"
          >
            <span className="landing-glass-cta-full">{ctaLabel}</span>
            <span className="landing-glass-cta-short" aria-hidden="true">
              Start
            </span>
          </a>
        </div>
      </div>
    </header>
  )
}
