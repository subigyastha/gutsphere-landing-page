import { Button } from '../Button'
import { CONTACT_URL, PRIVACY_URL } from '../../constants'

const pillars = [
  {
    title: 'Private by default',
    icon: 'lock',
    points: ['Logs stay on your account', 'Not built for a social feed'],
  },
  {
    title: 'You control sharing',
    icon: 'share',
    points: ['Choose what to export', 'Share only when you mean to'],
  },
  {
    title: 'Encrypted & yours',
    icon: 'shield',
    points: ['HIPAA/GDPR-aligned handling', 'Never sold to third parties', 'Delete or export anytime'],
  },
] as const

const badges = [
  { label: 'HIPAA aligned', icon: 'hipaa' },
  { label: 'GDPR compliant', icon: 'gdpr' },
  { label: 'No ad targeting', icon: 'block' },
  { label: 'Your data, your call', icon: 'user' },
] as const

function CheckIcon() {
  return (
    <svg className="h-4 w-4 shrink-0 text-gs-coral" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
      <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05" />
    </svg>
  )
}

function PillarIcon({ type }: { type: (typeof pillars)[number]['icon'] }) {
  const className = 'h-9 w-9 text-gs-coral'

  if (type === 'lock') {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V7.875a4.875 4.875 0 10-9.75 0V10.5m11.25 0H4.125A1.125 1.125 0 003 11.625v7.875A1.125 1.125 0 004.125 20.625h15.75A1.125 1.125 0 0021 19.5v-7.875a1.125 1.125 0 00-1.125-1.125z" />
      </svg>
    )
  }

  if (type === 'share') {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
      </svg>
    )
  }

  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  )
}

function BadgeIcon({ type }: { type: (typeof badges)[number]['icon'] }) {
  const className = 'h-5 w-5 text-gs-coral'

  if (type === 'hipaa' || type === 'gdpr') {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    )
  }

  if (type === 'block') {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    )
  }

  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
  )
}

function PrivacyVisual() {
  return (
    <div
      className="relative mx-auto flex max-w-sm items-center justify-center"
      aria-hidden="true"
    >
      <div className="absolute inset-0 rounded-full bg-gs-coral/10 blur-2xl" />
      <div className="relative card-surface w-full overflow-hidden p-6 sm:p-8">
        <div className="flex items-center justify-between gap-3 border-b border-gs-border pb-4">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gs-coral/15">
              <svg className="h-6 w-6 text-gs-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V7.875a4.875 4.875 0 10-9.75 0V10.5m11.25 0H4.125A1.125 1.125 0 003 11.625v7.875A1.125 1.125 0 004.125 20.625h15.75A1.125 1.125 0 0021 19.5v-7.875a1.125 1.125 0 00-1.125-1.125z" />
              </svg>
            </span>
            <div>
              <p className="text-sm font-semibold text-gs-text-primary">Your record</p>
              <p className="text-xs text-gs-text-muted">HIPAA · GDPR · Encrypted</p>
            </div>
          </div>
          <span className="rounded-full bg-gs-green/10 px-2.5 py-1 text-xs font-medium text-gs-green">
            Protected
          </span>
        </div>

        <div className="mt-5 space-y-3">
          {['Symptom logs', 'Visit notes', 'Food experiments'].map((row) => (
            <div
              key={row}
              className="flex items-center justify-between rounded-xl bg-gs-sand-light px-4 py-3"
            >
              <span className="text-sm font-medium text-gs-text-primary">{row}</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gs-card">
                <svg className="h-4 w-4 text-gs-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m9 0H4.5m12 0v6.75a1.5 1.5 0 01-1.5 1.5h-9a1.5 1.5 0 01-1.5-1.5v-6.75" />
                </svg>
              </span>
            </div>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-center gap-2 rounded-xl border border-dashed border-gs-border bg-gs-sand/60 px-4 py-3 text-xs font-medium text-gs-text-secondary">
          <svg className="h-4 w-4 text-gs-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12M12 16.5V3" />
          </svg>
          Export only when you choose
        </div>
      </div>
    </div>
  )
}

export function PrivacySection() {
  return (
    <section id="privacy" className="section-pad bg-gs-sand-light" aria-labelledby="privacy-heading">
      <div className="container-narrow">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-gs-coral">Trust, built in</p>
          <h2 id="privacy-heading" className="section-heading mt-3">
            Your health record stays yours
          </h2>
          <p className="body-lg mt-3 sm:mt-4">
            HIPAA/GDPR-aligned privacy — clear settings, no surprise sharing.
          </p>
        </div>

        <div className="mt-10 grid items-center gap-8 lg:mt-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12">
          <PrivacyVisual />

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 lg:gap-3">
            {pillars.map((item) => (
              <article key={item.title} className="card-surface flex gap-4 p-4 sm:p-5">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gs-coral/10">
                  <PillarIcon type={item.icon} />
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-base font-semibold text-gs-text-primary sm:text-lg">
                    {item.title}
                  </h3>
                  <ul className="mt-2 space-y-1.5">
                    {item.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm text-gs-text-secondary">
                        <CheckIcon />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:mt-10">
          {badges.map((badge) => (
            <span
              key={badge.label}
              className="inline-flex items-center gap-2 rounded-full border border-gs-border bg-gs-card px-4 py-2 text-sm font-medium text-gs-text-primary"
            >
              <BadgeIcon type={badge.icon} />
              {badge.label}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button variant="secondary" href={PRIVACY_URL} className="w-full sm:w-auto">
            Read full privacy policy
          </Button>
          <Button variant="ghost" href={CONTACT_URL} className="w-full sm:w-auto">
            Privacy questions
          </Button>
        </div>
      </div>
    </section>
  )
}
