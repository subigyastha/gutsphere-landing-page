import { useLocation } from 'react-router-dom'
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
      { href: `${prefix}#conditions`, label: 'Your condition' },
      { href: `${prefix}#validation`, label: 'Is this for me?' },
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
  const navLinks = getNavLinks(pathname)
  const logoHref = homeHref(pathname)

  return (
    <header className="border-b border-gs-border bg-gs-sand/95 backdrop-blur-md">
      <div className="container-wide flex items-center justify-between px-4 py-4 sm:px-8 lg:px-12">
        <a href={logoHref} className="flex items-center gap-2.5">
          <span
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-gs-coral text-sm font-bold text-white"
            aria-hidden="true"
          >
            G
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-gs-text-primary">
            Gutsphere
          </span>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium text-gs-text-secondary lg:flex lg:gap-8" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-gs-coral">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <details className="relative lg:hidden">
            <summary
              className="list-none cursor-pointer rounded-lg p-2"
              aria-label="Open menu"
            >
              <svg
                className="h-6 w-6 text-gs-text-primary"
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </summary>
            <nav
              className="absolute right-0 mt-2 flex w-52 flex-col gap-2 rounded-xl border border-gs-border bg-gs-card p-4 shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
              aria-label="Mobile"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="min-h-12 rounded-lg px-3 py-2 text-sm text-gs-text-secondary hover:bg-gs-sand-light"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={SIGNUP_URL}
                className="mt-1 rounded-xl bg-gs-coral px-4 py-3 text-center text-sm font-semibold text-white"
                data-cta="primary"
              >
                {PRIMARY_CTA_LABEL}
              </a>
            </nav>
          </details>

          <a
            href={SIGNUP_URL}
            className="rounded-xl bg-gs-coral px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 min-h-12 inline-flex items-center"
            data-cta="primary"
          >
            {PRIMARY_CTA_LABEL}
          </a>
        </div>
      </div>
    </header>
  )
}
