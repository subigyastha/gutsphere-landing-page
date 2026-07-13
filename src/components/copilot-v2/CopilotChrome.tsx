import { useEffect, useRef, useState } from 'react'
import type { ProductSolutionGroupId } from '../../constants'
import type { ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import { GutsphereLogoLink } from '../GutsphereLogo'
import {
  CONTACT_URL,
  INSTAGRAM_URL,
  NEWSLETTER_URL,
  PRIVACY_URL,
  TERMS_URL,
  SIGNUP_URL,
  YOUTUBE_CHANNEL_URL,
  conditionHubConditions,
  conditionHubSymptoms,
  footerIntegrations,
  procedurePrepItems,
  productSolutionGroups,
  productSolutionItems,
  PROCEDURE_PREP_NAV_LABEL,
  SOLUTIONS_NAV_LABEL,
} from '../../constants'

const EXPLORE_LINKS = [
  { href: '/journey', label: 'Your journey', blurb: 'Five phases — pick where you are today' },
  { href: '/for', label: 'Who it\u2019s for', blurb: 'Eighteen situations, one platform' },
  { href: '/compare', label: 'Compare', blurb: 'How Gutsphere fits your stack' },
  { href: '/about', label: 'About', blurb: 'Our story and why we built this' },
  { href: '/faq', label: 'FAQ', blurb: 'Plain answers before you start' },
] as const

const COMPARE_LINKS = [
  { href: '/compare/symptom-trackers', label: 'vs Symptom trackers' },
  { href: '/compare/ai-chat', label: 'vs ChatGPT & AI chat' },
  { href: '/compare/telehealth', label: 'vs Telehealth' },
  { href: '/compare/test-kits', label: 'vs Test kits' },
] as const

const CONDITION_SLUGS = new Set<string>(conditionHubConditions.map((c) => c.slug))
const SYMPTOM_SLUGS = new Set<string>(conditionHubSymptoms.map((c) => c.slug))

function useActiveSection(ids: string[]): string | null {
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length) setActive(visible[0].target.id)
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.join(',')])

  return active
}

function NavDropdown({
  label,
  active,
  className = '',
  children,
}: {
  label: string
  active: boolean
  className?: string
  children: ReactNode
}) {
  const ref = useRef<HTMLDetailsElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const closeOnOutside = (e: MouseEvent) => {
      if (el.open && !el.contains(e.target as Node)) el.open = false
    }
    document.addEventListener('click', closeOnOutside)
    return () => document.removeEventListener('click', closeOnOutside)
  }, [])

  return (
    <details ref={ref} className={`cp2-nav-dd ${className}`.trim()}>
      <summary className={active ? 'is-active' : ''}>
        {label}
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </summary>
      <div
        className="cp2-nav-dd-panel"
        onClick={() => {
          if (ref.current) ref.current.open = false
        }}
      >
        {children}
      </div>
    </details>
  )
}

function SolutionsNavDropdown({ active }: { active: boolean }) {
  const ref = useRef<HTMLDetailsElement>(null)
  const [activeGroup, setActiveGroup] = useState<ProductSolutionGroupId>('trackers')

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const closeOnOutside = (e: MouseEvent) => {
      if (el.open && !el.contains(e.target as Node)) el.open = false
    }
    document.addEventListener('click', closeOnOutside)
    return () => document.removeEventListener('click', closeOnOutside)
  }, [])

  const activeItems = productSolutionItems.filter((item) => item.group === activeGroup)
  const activeMeta = productSolutionGroups.find((group) => group.id === activeGroup)

  return (
    <details ref={ref} className="cp2-nav-dd cp2-nav-dd--solutions">
      <summary className={active ? 'is-active' : ''}>
        {SOLUTIONS_NAV_LABEL}
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </summary>
      <div
        className="cp2-nav-dd-panel cp2-nav-solutions-panel"
        onClick={(e) => {
          if ((e.target as HTMLElement).closest('a')) {
            if (ref.current) ref.current.open = false
          }
        }}
      >
        <div className="cp2-nav-solutions-cols">
          <div className="cp2-nav-solutions-left">
            <div className="cp2-nav-solutions-groups" role="tablist" aria-label="Solution categories">
              {productSolutionGroups.map((group) => (
                <button
                  key={group.id}
                  type="button"
                  role="tab"
                  aria-selected={activeGroup === group.id}
                  className={activeGroup === group.id ? 'is-active' : ''}
                  onMouseEnter={() => setActiveGroup(group.id)}
                  onFocus={() => setActiveGroup(group.id)}
                  onClick={() => setActiveGroup(group.id)}
                >
                  <span className="cp2-nav-solutions-group-label">{group.label}</span>
                  <span className="cp2-nav-solutions-group-summary">{group.summary}</span>
                </button>
              ))}
            </div>
            <a href="/features" className="cp2-nav-solutions-cta">
              Browse all features
            </a>
          </div>
          <div className="cp2-nav-solutions-items" role="tabpanel">
            {activeMeta && (
              <a href={activeMeta.href} className="cp2-nav-solutions-overview">
                All {activeMeta.label.toLowerCase()}
                <small>{activeMeta.summary}</small>
              </a>
            )}
            {activeItems.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
                <small>{item.blurb}</small>
              </a>
            ))}
          </div>
        </div>
      </div>
    </details>
  )
}

function ExploreMenuContent() {
  return (
    <>
      {EXPLORE_LINKS.map((link) => (
        <a key={link.href} href={link.href}>
          {link.label}
          <small>{link.blurb}</small>
        </a>
      ))}
    </>
  )
}

function MobileChevron() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function MobileNavPanel({ onClose }: { onClose: () => void }) {
  const handleLinkClick = () => onClose()

  return (
    <div
      id="cp2-mobile-menu"
      className="cp2-nav-mobile-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
    >
      <nav className="cp2-nav-mobile-scroll" aria-label="Menu">
        <div className="cp2-nav-mobile-stack">
          <details className="cp2-nav-mobile-topacc" open>
            <summary>
              Explore
              <MobileChevron />
            </summary>
            <div className="cp2-nav-mobile-topacc-panel">
              {EXPLORE_LINKS.map((link) => (
                <a key={link.href} href={link.href} className="cp2-nav-mobile-link" onClick={handleLinkClick}>
                  {link.label}
                  <small>{link.blurb}</small>
                </a>
              ))}
            </div>
          </details>

          <details className="cp2-nav-mobile-topacc">
            <summary>
              Conditions
              <MobileChevron />
            </summary>
            <div className="cp2-nav-mobile-topacc-panel">
              {conditionHubConditions.map((c) => (
                <a
                  key={c.slug}
                  href={`/conditions/${c.slug}`}
                  className="cp2-nav-mobile-link"
                  onClick={handleLinkClick}
                >
                  {c.label}
                  <small>{c.blurb}</small>
                </a>
              ))}
              <a href="/#start" className="cp2-nav-mobile-link cp2-nav-mobile-cta" onClick={handleLinkClick}>
                Not sure? Start here
              </a>
            </div>
          </details>

          <details className="cp2-nav-mobile-topacc">
            <summary>
              Symptoms
              <MobileChevron />
            </summary>
            <div className="cp2-nav-mobile-topacc-panel">
              {conditionHubSymptoms.map((c) => (
                <a
                  key={c.slug}
                  href={`/conditions/${c.slug}`}
                  className="cp2-nav-mobile-link"
                  onClick={handleLinkClick}
                >
                  {c.label}
                  <small>{c.blurb}</small>
                </a>
              ))}
              <a href="/#start" className="cp2-nav-mobile-link cp2-nav-mobile-cta" onClick={handleLinkClick}>
                Not sure? Start here
              </a>
            </div>
          </details>

          <details className="cp2-nav-mobile-topacc">
            <summary>
              {SOLUTIONS_NAV_LABEL}
              <MobileChevron />
            </summary>
            <div className="cp2-nav-mobile-topacc-panel">
              <div className="cp2-nav-mobile-accordions">
                {productSolutionGroups.map((group) => {
                  const items = productSolutionItems.filter((item) => item.group === group.id)
                  return (
                    <details key={group.id} className="cp2-nav-mobile-acc">
                      <summary>
                        {group.label}
                        <MobileChevron />
                      </summary>
                      <div className="cp2-nav-mobile-acc-panel">
                        <a
                          href={group.href}
                          className="cp2-nav-mobile-link cp2-nav-mobile-overview"
                          onClick={handleLinkClick}
                        >
                          All {group.label.toLowerCase()}
                          <small>{group.summary}</small>
                        </a>
                        {items.map((item) => (
                          <a
                            key={item.label}
                            href={item.href}
                            className="cp2-nav-mobile-link"
                            onClick={handleLinkClick}
                          >
                            {item.label}
                            <small>{item.blurb}</small>
                          </a>
                        ))}
                      </div>
                    </details>
                  )
                })}
              </div>
              <a href="/features" className="cp2-nav-mobile-link cp2-nav-mobile-cta" onClick={handleLinkClick}>
                Browse all features
              </a>
            </div>
          </details>

          <details className="cp2-nav-mobile-topacc">
            <summary>
              More
              <MobileChevron />
            </summary>
            <div className="cp2-nav-mobile-topacc-panel">
              <a href="/#pricing" className="cp2-nav-mobile-link" onClick={handleLinkClick}>
                Pricing
              </a>
            </div>
          </details>
        </div>
      </nav>

      <div className="cp2-nav-mobile-actions">
        <a href={SIGNUP_URL} className="cp2-nav-mobile-login" onClick={handleLinkClick}>
          Log in
        </a>
        <a href="/#start" className="cp2-btn cp2-nav-mobile-start" onClick={handleLinkClick}>
          Start free
        </a>
      </div>
    </div>
  )
}

export function CopilotNav() {
  const { pathname } = useLocation()
  const pricingActive = useActiveSection(['pricing'])
  const [mobileOpen, setMobileOpen] = useState(false)
  const menuBtnRef = useRef<HTMLButtonElement>(null)

  const conditionSlug = pathname.startsWith('/conditions/') ? pathname.split('/')[2] : null
  const exploreActive =
    pathname === '/journey' ||
    pathname === '/for' ||
    pathname === '/compare' ||
    pathname === '/about' ||
    pathname === '/faq' ||
    pathname.startsWith('/compare/')
  const solutionsActive = pathname.startsWith('/features')
  const conditionsActive = Boolean(conditionSlug && CONDITION_SLUGS.has(conditionSlug))
  const symptomsActive = Boolean(conditionSlug && SYMPTOM_SLUGS.has(conditionSlug))

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!mobileOpen) return

    const html = document.documentElement
    const body = document.body
    const prevHtmlOverflow = html.style.overflow
    const prevBodyOverflow = body.style.overflow
    html.style.overflow = 'hidden'
    body.style.overflow = 'hidden'

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)

    return () => {
      html.style.overflow = prevHtmlOverflow
      body.style.overflow = prevBodyOverflow
      document.removeEventListener('keydown', onKeyDown)
      menuBtnRef.current?.focus({ preventScroll: true })
    }
  }, [mobileOpen])

  const closeMobile = () => setMobileOpen(false)

  return (
    <header className={`cp2-nav${mobileOpen ? ' is-menu-open' : ''}`}>
      <div className="cp2-nav-in">
        <div className="cp2-nav-pill">
          <GutsphereLogoLink href="/" className="cp2-brand" height={28} />

          <nav className="cp2-nav-links" aria-label="Primary">
            <NavDropdown label="Explore" active={exploreActive}>
              <ExploreMenuContent />
            </NavDropdown>
            <NavDropdown label="Conditions" active={conditionsActive}>
              {conditionHubConditions.map((c) => (
                <a key={c.slug} href={`/conditions/${c.slug}`}>
                  {c.label}
                  <small>{c.blurb}</small>
                </a>
              ))}
              <a href="/#start" className="cp2-nav-dd-cta">
                Not sure? Start here
              </a>
            </NavDropdown>
            <NavDropdown label="Symptoms" active={symptomsActive}>
              {conditionHubSymptoms.map((c) => (
                <a key={c.slug} href={`/conditions/${c.slug}`}>
                  {c.label}
                  <small>{c.blurb}</small>
                </a>
              ))}
              <a href="/#start" className="cp2-nav-dd-cta">
                Not sure? Start here
              </a>
            </NavDropdown>
            <SolutionsNavDropdown active={solutionsActive} />
            <a href="/#pricing" className={pricingActive === 'pricing' ? 'is-active' : ''}>
              Pricing
            </a>
          </nav>

          <div className="cp2-nav-mobile">
            <button
              ref={menuBtnRef}
              type="button"
              className={`cp2-nav-menu-btn${mobileOpen ? ' is-open' : ''}`}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="cp2-mobile-menu"
              onClick={() => setMobileOpen((open) => !open)}
            >
              {mobileOpen ? (
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                </svg>
              ) : (
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div className="cp2-nav-actions">
          <a href={SIGNUP_URL} className="cp2-nav-login">
            Log in
          </a>
          <a href="/#start" className="cp2-btn cp2-nav-cta">
            Start free
          </a>
        </div>
      </div>

      {mobileOpen ? <MobileNavPanel onClose={closeMobile} /> : null}
    </header>
  )
}

export function CopilotFooter() {
  return (
    <footer className="cp2-footer">
      <div className="cp2-footer-shell">
        <div className="cp2-wrap">
        <div className="cp2-foot-top">
          <div className="cp2-foot-brand">
            <GutsphereLogoLink href="/" className="cp2-brand cp2-brand--footer" height={32} />
            <p className="cp2-foot-tagline">
              Your copilot from the first confusing symptom to long-term confidence.
            </p>
          </div>

          <div className="cp2-foot-top-actions">
            <form
              className="cp2-foot-news"
              action={`${NEWSLETTER_URL}subscribe`}
              method="get"
              target="_blank"
            >
              <label htmlFor="cp2-news-email" className="cp2-foot-news-label">
                Gut health, explained weekly
              </label>
              <div className="cp2-foot-news-row">
                <input
                  id="cp2-news-email"
                  type="email"
                  name="email"
                  placeholder="you@email.com"
                  required
                />
                <button type="submit">Subscribe</button>
              </div>
            </form>
            <a className="cp2-foot-contact" href={CONTACT_URL}>
              <span aria-hidden="true">→</span> Contact us
            </a>
          </div>
        </div>

        <div className="cp2-foot-cols">
          <div>
            <h4>Conditions</h4>
            {conditionHubConditions.map((c) => (
              <a key={c.slug} href={`/conditions/${c.slug}`}>
                {c.label}
              </a>
            ))}
          </div>
          <div>
            <h4>Symptoms</h4>
            {conditionHubSymptoms.map((c) => (
              <a key={c.slug} href={`/conditions/${c.slug}`}>
                {c.label}
              </a>
            ))}
          </div>
          <div className="cp2-foot-col-solutions">
            <h4>{SOLUTIONS_NAV_LABEL}</h4>
            {productSolutionGroups.map((group) => (
              <a key={group.id} href={group.href}>
                {group.label}
              </a>
            ))}
            <a href="/features">All features</a>
            <p className="cp2-foot-col-group">{PROCEDURE_PREP_NAV_LABEL}</p>
            {procedurePrepItems.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
          <div>
            <h4>Compare</h4>
            <a href="/compare">All comparisons</a>
            {COMPARE_LINKS.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
          <div>
            <h4>Company</h4>
            <a href="/journey">Your journey</a>
            <a href="/for">Who it&apos;s for</a>
            <a href="/#pricing">Pricing</a>
            <a href="/faq">FAQ</a>
            <a href="/about">About</a>
            <a href={CONTACT_URL}>Contact</a>
            <a href={NEWSLETTER_URL}>Newsletter</a>
            <a href={YOUTUBE_CHANNEL_URL}>YouTube</a>
            <a href={INSTAGRAM_URL}>Instagram</a>
          </div>
        </div>

        <div className="cp2-foot-conditions">
          <h4>Works alongside</h4>
          <p>
            {[...conditionHubConditions, ...conditionHubSymptoms].map((item, index, arr) => (
              <span key={item.slug}>
                <a href={`/conditions/${item.slug}`}>{item.label}</a>
                {index < arr.length - 1 ? <span className="cp2-foot-sep"> · </span> : null}
              </span>
            ))}
            <span className="cp2-foot-sep"> · </span>
            <span className="cp2-foot-more">celiac, SIBO, gastroparesis &amp; more</span>
          </p>
        </div>

        <div className="cp2-foot-integrations">
          <h4>
            Integrations
            <span className="cp2-soon-chip">Soon</span>
          </h4>
          <p>
            {footerIntegrations.map((name, index) => (
              <span key={name}>
                <span className="cp2-foot-soon-inline">{name}</span>
                {index < footerIntegrations.length - 1 ? <span className="cp2-foot-sep"> · </span> : null}
              </span>
            ))}
          </p>
        </div>

        <p className="cp2-disc">
          Gutsphere helps you understand and organize your own digestive health. It is not a medical device
          and does not diagnose, treat or replace care from a qualified professional. If something feels
          urgent, contact a doctor.
        </p>

        <div className="cp2-foot-bottom">
          <span>© 2026 Gutsphere</span>
          <div className="cp2-foot-legal">
            <a href={PRIVACY_URL}>Privacy</a>
            <a href={TERMS_URL}>Terms</a>
          </div>
          <div className="cp2-foot-social">
            <a href={YOUTUBE_CHANNEL_URL} aria-label="Gutsphere on YouTube">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M23 7.5s-.2-1.6-.9-2.3c-.9-.9-1.9-.9-2.3-1C16.6 4 12 4 12 4s-4.6 0-7.8.2c-.4.1-1.4.1-2.3 1-.7.7-.9 2.3-.9 2.3S.8 9.4.8 11.3v1.4c0 1.9.2 3.8.2 3.8s.2 1.6.9 2.3c.9.9 2 .9 2.5 1 1.8.2 7.6.2 7.6.2s4.6 0 7.8-.2c.4-.1 1.4-.1 2.3-1 .7-.7.9-2.3.9-2.3s.2-1.9.2-3.8v-1.4c0-1.9-.2-3.8-.2-3.8zM9.8 14.9V8.7l6.2 3.1-6.2 3.1z" />
              </svg>
            </a>
            <a href={INSTAGRAM_URL} aria-label="Gutsphere on Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4.2" />
                <circle cx="17.4" cy="6.6" r="1.2" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a href={NEWSLETTER_URL} aria-label="Gutsphere newsletter">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2.5" />
                <path d="M3.5 7l8.5 6 8.5-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
        </div>
      </div>
    </footer>
  )
}
