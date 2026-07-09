import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { GutsphereLogoLink } from '../GutsphereLogo'
import {
  ABOUT_URL,
  CONTACT_URL,
  INSTAGRAM_URL,
  NEWSLETTER_URL,
  PRIVACY_URL,
  SIGNUP_URL,
  YOUTUBE_CHANNEL_URL,
  conditionHub,
  conditionHubConditions,
  conditionHubSymptoms,
  footerIntegrations,
  productFeatureGroups,
  productFeatures,
} from '../../constants'

const EXPLORE_LINKS = [
  { href: '/#system', label: 'How it works' },
  { href: '/#walkthrough', label: 'One flare, start to finish' },
  { href: '/#honest', label: 'Our promise' },
  { href: '/for', label: 'Who it\u2019s for', blurb: 'Four stages, one copilot' },
] as const

const COMPARE_LINKS = [
  { href: '/#compare', label: 'Why one system', blurb: 'Trackers, telehealth, AI & test kits — compared' },
  { href: '/#difference', label: 'The difference', blurb: 'Four claims only Gutsphere can make' },
] as const

const EXPLORE_SECTION_IDS = ['system', 'walkthrough', 'compare', 'difference', 'honest']
const SECTION_IDS = [...EXPLORE_SECTION_IDS, 'journey', 'pricing', 'faq']

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

export function CopilotNav() {
  const active = useActiveSection(SECTION_IDS)

  return (
    <header className="cp2-nav">
      <div className="cp2-nav-in">
        <div className="cp2-nav-pill">
          <GutsphereLogoLink href="#top" className="cp2-brand" height={28} />

          <nav className="cp2-nav-links" aria-label="Primary">
            <NavDropdown label="Explore" active={EXPLORE_SECTION_IDS.includes(active ?? '')}>
              {EXPLORE_LINKS.map((link) => (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}
              <span className="cp2-nav-dd-group">Compare</span>
              {COMPARE_LINKS.map((link) => (
                <a key={link.href} href={link.href}>
                  {link.label}
                  <small>{link.blurb}</small>
                </a>
              ))}
            </NavDropdown>
            <NavDropdown label="Conditions" active={false}>
              {conditionHubConditions.map((c) => (
                <a key={c.slug} href={`/conditions/${c.slug}`}>
                  {c.label}
                  <small>{c.blurb}</small>
                </a>
              ))}
              <a href="#start" className="cp2-nav-dd-cta">
                Not sure? Start here
              </a>
            </NavDropdown>
            <NavDropdown label="Symptoms" active={false}>
              {conditionHubSymptoms.map((c) => (
                <a key={c.slug} href={`/conditions/${c.slug}`}>
                  {c.label}
                  <small>{c.blurb}</small>
                </a>
              ))}
              <a href="#start" className="cp2-nav-dd-cta">
                Not sure? Start here
              </a>
            </NavDropdown>
            <NavDropdown label="Features" active={false} className="cp2-nav-dd--features">
              {productFeatureGroups.map((group) => (
                <span key={group.id}>
                  <span className="cp2-nav-dd-group">{group.label}</span>
                  {productFeatures
                    .filter((f) => f.group === group.id)
                    .map((f) => (
                      <a key={f.label} href={f.href}>
                        {f.label}
                        <small>{f.blurb}</small>
                      </a>
                    ))}
                </span>
              ))}
              <a href="#system" className="cp2-nav-dd-cta">
                See how it connects
              </a>
            </NavDropdown>
            <a href="#journey" className={active === 'journey' ? 'is-active' : ''}>
              Your journey
            </a>
            <a href="#pricing" className={active === 'pricing' ? 'is-active' : ''}>
              Pricing
            </a>
          </nav>

          <details className="cp2-nav-mobile">
            <summary className="cp2-nav-menu-btn" aria-label="Open menu">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </summary>
            <nav className="cp2-nav-menu-panel" aria-label="Menu">
              <span className="cp2-nav-menu-group">How it works</span>
              {EXPLORE_LINKS.map((link) => (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}
              <span className="cp2-nav-menu-group">Compare</span>
              {COMPARE_LINKS.map((link) => (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}
              <span className="cp2-nav-menu-group">More</span>
              <a href="#journey">Your journey</a>
              <a href="#pricing">Pricing</a>
              <a href="#faq">FAQ</a>
              <span className="cp2-nav-menu-group">Conditions</span>
              <div className="cp2-nav-menu-conditions">
                {conditionHubConditions.map((c) => (
                  <a key={c.slug} href={`/conditions/${c.slug}`}>
                    {c.label}
                  </a>
                ))}
              </div>
              <span className="cp2-nav-menu-group">Symptoms</span>
              <div className="cp2-nav-menu-conditions">
                {conditionHubSymptoms.map((c) => (
                  <a key={c.slug} href={`/conditions/${c.slug}`}>
                    {c.label}
                  </a>
                ))}
              </div>
              <span className="cp2-nav-menu-group">Features</span>
              {productFeatureGroups.map((group) => (
                <span key={group.id}>
                  <span className="cp2-nav-menu-subgroup">{group.label}</span>
                  {productFeatures
                    .filter((f) => f.group === group.id)
                    .map((f) => (
                      <a key={f.label} href={f.href}>
                        {f.label}
                      </a>
                    ))}
                </span>
              ))}
              <a href="#start" className="cp2-btn cp2-nav-cta-mobile">
                Start free
              </a>
            </nav>
          </details>
        </div>

        <div className="cp2-nav-actions">
          <a href={SIGNUP_URL} className="cp2-nav-login">
            Log in
          </a>
          <a href="#start" className="cp2-btn cp2-nav-cta">
            Start free
          </a>
        </div>
      </div>
    </header>
  )
}

export function CopilotFooter() {
  return (
    <footer className="cp2-footer">
      <div className="cp2-footer-shell">
        <div className="cp2-foot-top">
          <div className="cp2-foot-brand">
            <GutsphereLogoLink href="#top" className="cp2-brand cp2-brand--footer" height={32} />
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
          <div className="cp2-foot-col-features">
            <h4>Features</h4>
            {productFeatureGroups.map((group) => (
              <div key={group.id} className="cp2-foot-feature-group">
                <p className="cp2-foot-col-group">{group.label}</p>
                {productFeatures
                  .filter((f) => f.group === group.id)
                  .map((f) => (
                    <a key={f.label} href={f.href}>
                      {f.label}
                    </a>
                  ))}
              </div>
            ))}
          </div>
          <div>
            <h4>Compare</h4>
            <a href="#compare">Why one system</a>
            <a href="#compare">vs Symptom trackers</a>
            <a href="#compare">vs ChatGPT &amp; AI chat</a>
            <a href="#compare">vs Telehealth</a>
            <a href="#compare">vs Test kits</a>
            <a href="#difference">The difference</a>
          </div>
          <div>
            <h4>Your journey</h4>
            <a href="#journey">Finding answers</a>
            <a href="#journey">In treatment</a>
            <a href="#journey">Living with it</a>
            <a href="#journey">Getting ahead of it</a>
          </div>
          <div>
            <h4>Company</h4>
            <a href="/for">Who it&apos;s for</a>
            <a href="/#pricing">Pricing</a>
            <a href="/#faq">FAQ</a>
            <a href="/#honest">Our promise</a>
            <a href={ABOUT_URL}>About</a>
            <a href={CONTACT_URL}>Contact</a>
            <a href={NEWSLETTER_URL}>Newsletter</a>
            <a href={YOUTUBE_CHANNEL_URL}>YouTube</a>
            <a href={INSTAGRAM_URL}>Instagram</a>
          </div>
        </div>

        <nav className="cp2-foot-conditions" aria-label="Works alongside">
          <h4>Works alongside</h4>
          <p>
            {conditionHub.map((c, i) => (
              <span key={c.slug}>
                <a href={`/conditions/${c.slug}`}>{c.label}</a>
                {i < conditionHub.length - 1 && (
                  <span className="cp2-foot-sep" aria-hidden="true">
                    {' '}
                    ·{' '}
                  </span>
                )}
              </span>
            ))}
            <span className="cp2-foot-sep" aria-hidden="true"> · </span>
            <span className="cp2-foot-more">celiac, SIBO, gastroparesis &amp; more</span>
          </p>
        </nav>

        <nav className="cp2-foot-integrations" aria-label="Integrations">
          <h4>
            Integrations <span className="cp2-soon-chip">Soon</span>
          </h4>
          <p>
            {footerIntegrations.map((item, i) => (
              <span key={item}>
                <span className="cp2-foot-soon-inline">{item}</span>
                {i < footerIntegrations.length - 1 && (
                  <span className="cp2-foot-sep" aria-hidden="true">
                    {' '}
                    ·{' '}
                  </span>
                )}
              </span>
            ))}
          </p>
        </nav>

        <p className="cp2-disc">
          Gutsphere helps you understand and organize your own digestive health. It is not a medical device
          and does not diagnose, treat or replace care from a qualified professional. If something feels
          urgent, contact a doctor.
        </p>

        <div className="cp2-foot-bottom">
          <span>© 2026 Gutsphere</span>
          <div className="cp2-foot-legal">
            <a href={PRIVACY_URL}>Privacy</a>
            <a href={CONTACT_URL}>Terms</a>
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
    </footer>
  )
}
