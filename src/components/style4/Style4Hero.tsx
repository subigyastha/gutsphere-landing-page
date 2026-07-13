import { useState } from 'react'
import { Button } from '../Button'
import { Style4Card } from './Style4Card'
import { Style4CopilotVisual } from './Style4CopilotVisual'
import { Style4PathChip } from './Style4PathChip'
import { Style4Reveal } from './Style4Reveal'
import {
  NAVIGATOR_COUNT,
  PRIMARY_CTA_LABEL,
  SECONDARY_CTA_LABEL,
  SIGNUP_URL,
} from '../../constants'

const pathChips = [
  { href: '#the-problem', label: 'Diagnosis limbo' },
  { href: '#prepare-visit', label: 'Upcoming visit' },
  { href: '#pillars', label: 'Treatment support' },
  { href: '#conditions', label: 'Your condition' },
] as const

export function Style4Hero() {
  const [activeChip, setActiveChip] = useState<string | null>(null)

  return (
    <section
      data-landing-hero
      className="section-pad relative overflow-hidden bg-gs-card style4-mesh-bg"
      aria-labelledby="style4-hero-heading"
    >
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gs-coral/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-gs-sand blur-2xl"
        aria-hidden="true"
      />

      <div className="container-wide relative">
        <div className="style4-hero-grid">
          <Style4Reveal className="style4-hero-copy">
            <Style4Card
              variant="gradient"
              className="flex h-full flex-col justify-center p-6 sm:p-8 lg:p-10"
            >
              <p className="relative z-[1] mb-4 inline-flex w-fit items-center rounded-full border border-gs-insight-border bg-gs-card/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gs-coral backdrop-blur-sm">
                GI health copilot
              </p>
              <h1
                id="style4-hero-heading"
                className="relative z-[1] display-heading style4-gradient-text mb-4 sm:mb-6"
              >
                Your GI health copilot — from symptom confusion to lifelong control
              </h1>
              <p className="relative z-[1] body-lg mb-6 max-w-lg">
                You are the pilot of your digestive health. Gutsphere is your copilot — helping you
                understand symptoms, uncover patterns, prepare for care, follow treatment, and build
                your personal operating system for digestive health.
              </p>
              <div className="relative z-[1] flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button href={SIGNUP_URL} data-cta="primary" className="w-full sm:w-auto">
                  {PRIMARY_CTA_LABEL}
                </Button>
                <Button
                  variant="secondary"
                  href="#how-it-works"
                  className="w-full sm:w-auto"
                >
                  {SECONDARY_CTA_LABEL}
                </Button>
              </div>
              <p className="relative z-[1] mt-4 text-sm text-gs-text-muted">
                {NAVIGATOR_COUNT} people &middot; Free to start &middot; No credit card
              </p>
            </Style4Card>
          </Style4Reveal>

          <Style4Reveal className="style4-hero-visual" delay={120}>
            <Style4Card className="flex h-full min-h-[300px] items-center justify-center bg-gradient-to-b from-white to-gs-sand-light p-6 sm:p-8 lg:min-h-[380px]">
              <Style4CopilotVisual />
            </Style4Card>
          </Style4Reveal>
        </div>

        <Style4Reveal className="mt-6 sm:mt-8" delay={200}>
          <p className="text-sm font-semibold uppercase tracking-widest text-gs-text-muted">
            Where are you in your journey?
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
        </Style4Reveal>
      </div>
    </section>
  )
}
