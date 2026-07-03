import { useState } from 'react'
import { Button } from '../Button'
import { PhoneScreenshot } from '../clarity/PhoneScreenshot'
import { Style4Card } from './Style4Card'
import { Style4PathChip } from './Style4PathChip'
import { Style4Reveal } from './Style4Reveal'
import { NAVIGATOR_COUNT, PRIMARY_CTA_LABEL, SIGNUP_URL } from '../../constants'

const pathChips = [
  { href: '#validation', label: 'Undiagnosed' },
  { href: '#prepare-visit', label: 'Upcoming visit' },
  { href: '#pattern', label: 'Pattern-finder' },
  { href: '#conditions', label: 'Your condition' },
] as const

export function Style4Hero() {
  const [activeChip, setActiveChip] = useState<string | null>(null)

  return (
    <section
      className="section-pad relative overflow-hidden bg-white style4-mesh-bg"
      aria-labelledby="style4-hero-heading"
    >
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gs-coral/10 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-gs-sand blur-2xl" aria-hidden="true" />

      <div className="container-wide relative">
        <div className="style4-hero-grid">
          <Style4Reveal className="style4-hero-copy">
            <Style4Card variant="gradient" className="flex h-full flex-col justify-center p-6 sm:p-8 lg:p-10">
              <p className="relative z-[1] mb-4 inline-flex w-fit items-center rounded-full border border-gs-insight-border bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gs-coral backdrop-blur-sm">
                Your personal GI companion
              </p>
              <h1
                id="style4-hero-heading"
                className="relative z-[1] display-heading style4-gradient-text mb-4 sm:mb-6"
              >
                Start understanding your symptoms
              </h1>
              <p className="relative z-[1] body-lg mb-6 max-w-lg">
                Know what&apos;s wrong. Know what to do. Connect meals, stress, and symptoms over
                time — so you can spot patterns and walk into visits prepared.{' '}
                <span className="font-medium text-gs-text-primary">No diagnosis required.</span>
              </p>
              <div className="relative z-[1]">
                <Button href={SIGNUP_URL} data-cta="primary" className="w-full sm:w-auto">
                  {PRIMARY_CTA_LABEL}
                </Button>
              </div>
              <p className="relative z-[1] mt-4 text-sm text-gs-text-muted">
                {NAVIGATOR_COUNT} people &middot; Free to start &middot; No credit card
              </p>
            </Style4Card>
          </Style4Reveal>

          <Style4Reveal className="style4-hero-visual" delay={120}>
            <Style4Card className="flex h-full min-h-[280px] items-center justify-center bg-gradient-to-b from-white to-gs-sand-light p-6 sm:p-8 lg:min-h-[360px]">
              <div className="style4-phone-float">
                <PhoneScreenshot
                  src="/screenshots/hero-home.png"
                  alt="Gutsphere app home screen showing daily guidance and symptom tracking"
                  label="Home screen"
                  fetchPriority="high"
                  className="max-w-[220px] sm:max-w-[260px]"
                />
              </div>
            </Style4Card>
          </Style4Reveal>
        </div>

        <Style4Reveal className="mt-6 sm:mt-8" delay={200}>
          <p className="text-sm font-semibold uppercase tracking-widest text-gs-text-muted">
            Find your starting point
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {pathChips.map((chip) => (
              <Style4PathChip
                key={chip.href}
                href={chip.href}
                label={chip.label}
                active={activeChip === chip.href}
                onSelect={() => setActiveChip(chip.href)}
              />
            ))}
          </div>
          <p className="mt-4">
            <a
              href="#conditions"
              className="inline-flex min-h-12 items-center text-sm font-semibold text-gs-coral transition-colors hover:underline"
            >
              Browse all conditions &rarr;
            </a>
          </p>
        </Style4Reveal>
      </div>
    </section>
  )
}
