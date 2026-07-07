import { ABOUT_URL } from '../../constants'
import { COPILOT_ROUTE } from '../journey/constants'
import {
  COPILOT_CLINICAL_INTEL_SECTION,
  COPILOT_CLINICAL_INTEL_SLIDES,
  COPILOT_CLINICAL_NAV_SECTION,
  COPILOT_CLINICAL_NAV_SLIDES,
  COPILOT_CONNECTION_SECTION,
  COPILOT_CONNECTION_SLIDES,
  COPILOT_DAILY_VALUE_SECTION,
  COPILOT_DAILY_VALUE_SLIDES,
  COPILOT_DIFFERENTIATION_SECTION,
  COPILOT_DIFFERENTIATION_SLIDES,
  COPILOT_FINAL_SECTION,
  COPILOT_FOUNDER_SECTION,
  COPILOT_FOUNDER_SLIDES,
  COPILOT_JOURNEY_MOMENTS_SECTION,
  COPILOT_JOURNEY_MOMENTS_SLIDES,
  COPILOT_PROBLEM_SECTION,
  COPILOT_PROBLEM_SLIDES,
  COPILOT_SELF_CARE_SECTION,
  COPILOT_SELF_CARE_SLIDES,
  COPILOT_SHIFT_SECTION,
  COPILOT_SHIFT_SLIDES,
} from '../reel/copilotOutcomeCopy'

export type ScrollGutCardVariant = 'default' | 'muted' | 'emphasized' | 'mini'

export interface ScrollGutCard {
  id: string
  label?: string
  eyebrow?: string
  title: string
  detail: string
  variant?: ScrollGutCardVariant
  cta?: string
  ctaHref?: string
  ctaVariant?: 'primary' | 'secondary' | 'ghost'
  safetyNote?: string
  routeChip?: string
}

export interface ScrollGutStop {
  id: string
  step: number
  progress: number
  side: 'left' | 'right'
  icon: string
  sectionEyebrow?: string
  sectionTitle?: string
  sectionMicrocopy?: string
  cards: readonly ScrollGutCard[]
  isStomach?: boolean
}

const PRIMARY_CTA = 'Start Your Gut Check-In'

function slideCards(
  slides: readonly { id: string; label?: string; headline: string; tagline?: string }[],
  options?: { ctaOnLast?: string; ctaVariant?: ScrollGutCard['ctaVariant'] },
): ScrollGutCard[] {
  return slides.map((slide, index) => ({
    id: slide.id,
    label: slide.label,
    title: slide.headline,
    detail: slide.tagline ?? '',
    ...(options?.ctaOnLast && index === slides.length - 1
      ? { cta: options.ctaOnLast, ctaVariant: options.ctaVariant ?? 'primary' }
      : {}),
  }))
}

export const SCROLL_GUT_STOPS: readonly ScrollGutStop[] = [
  {
    id: 'welcome',
    step: 1,
    progress: 0.05,
    side: 'right',
    icon: '✦',
    sectionEyebrow: 'Welcome aboard',
    cards: [
      {
        id: 'welcome-copilot',
        eyebrow: 'Welcome',
        title: 'Your digestive health copilot',
        detail: 'Before diagnosis. Between visits. Beyond treatment.',
        routeChip: COPILOT_ROUTE,
      },
    ],
  },
  {
    id: 'three-moments',
    step: 2,
    progress: 0.1,
    side: 'left',
    icon: '◎',
    sectionEyebrow: 'How GutSphere supports you',
    sectionTitle: 'Three moments. One continuous copilot.',
    cards: [
      {
        id: 'moment-before',
        label: 'Stage 1',
        title: 'Before diagnosis',
        detail: 'Capture clues clearly from day one.',
        variant: 'mini',
      },
      {
        id: 'moment-between',
        label: 'Stage 2',
        title: 'Between visits',
        detail: 'Stay prepared with clean context.',
        variant: 'mini',
      },
      {
        id: 'moment-beyond',
        label: 'Stage 3',
        title: 'Beyond treatment',
        detail: 'Build long-term gut-health continuity.',
        variant: 'mini',
      },
    ],
  },
  {
    id: 'problem',
    step: 3,
    progress: 0.17,
    side: 'right',
    icon: '◌',
    sectionEyebrow: COPILOT_PROBLEM_SECTION.eyebrow,
    sectionTitle: COPILOT_PROBLEM_SECTION.title,
    sectionMicrocopy: COPILOT_PROBLEM_SECTION.microcopy,
    cards: slideCards(COPILOT_PROBLEM_SLIDES),
  },
  {
    id: 'shift',
    step: 4,
    progress: 0.25,
    side: 'left',
    icon: '↗',
    sectionEyebrow: COPILOT_SHIFT_SECTION.eyebrow,
    sectionTitle: COPILOT_SHIFT_SECTION.title,
    sectionMicrocopy: COPILOT_SHIFT_SECTION.intro,
    cards: slideCards(COPILOT_SHIFT_SLIDES, { ctaOnLast: PRIMARY_CTA }),
  },
  {
    id: 'self-care',
    step: 5,
    progress: 0.34,
    side: 'right',
    icon: '📝',
    sectionEyebrow: COPILOT_SELF_CARE_SECTION.eyebrow,
    sectionTitle: COPILOT_SELF_CARE_SECTION.title,
    sectionMicrocopy: COPILOT_SELF_CARE_SECTION.microcopy,
    cards: slideCards(COPILOT_SELF_CARE_SLIDES, { ctaOnLast: PRIMARY_CTA }),
  },
  {
    id: 'clinical-navigation',
    step: 6,
    progress: 0.43,
    side: 'left',
    icon: '🧭',
    sectionEyebrow: COPILOT_CLINICAL_NAV_SECTION.eyebrow,
    sectionTitle: COPILOT_CLINICAL_NAV_SECTION.title,
    sectionMicrocopy: COPILOT_CLINICAL_NAV_SECTION.microcopy,
    cards: slideCards(COPILOT_CLINICAL_NAV_SLIDES, { ctaOnLast: 'Prepare for Your Next Visit' }),
  },
  {
    id: 'clinical-intelligence',
    step: 7,
    progress: 0.52,
    side: 'right',
    icon: '📊',
    sectionEyebrow: COPILOT_CLINICAL_INTEL_SECTION.eyebrow,
    sectionTitle: COPILOT_CLINICAL_INTEL_SECTION.title,
    sectionMicrocopy: COPILOT_CLINICAL_INTEL_SECTION.microcopy,
    cards: [
      ...slideCards(COPILOT_CLINICAL_INTEL_SLIDES.slice(0, 2)),
      {
        id: COPILOT_CLINICAL_INTEL_SLIDES[2].id,
        label: COPILOT_CLINICAL_INTEL_SLIDES[2].label,
        title: COPILOT_CLINICAL_INTEL_SLIDES[2].headline,
        detail: COPILOT_CLINICAL_INTEL_SLIDES[2].tagline ?? '',
        safetyNote: 'Patterns to review with your care team, not self-diagnosis.',
        cta: 'See Your Gut Patterns',
      },
    ],
  },
  {
    id: 'differentiation',
    step: 8,
    progress: 0.6,
    side: 'left',
    icon: '⚖',
    sectionEyebrow: COPILOT_DIFFERENTIATION_SECTION.eyebrow,
    sectionTitle: COPILOT_DIFFERENTIATION_SECTION.title,
    cards: [
      {
        id: COPILOT_DIFFERENTIATION_SLIDES[0].id,
        label: COPILOT_DIFFERENTIATION_SLIDES[0].label,
        title: COPILOT_DIFFERENTIATION_SLIDES[0].headline,
        detail: COPILOT_DIFFERENTIATION_SLIDES[0].tagline ?? '',
        variant: 'muted',
      },
      {
        id: COPILOT_DIFFERENTIATION_SLIDES[1].id,
        label: COPILOT_DIFFERENTIATION_SLIDES[1].label,
        title: COPILOT_DIFFERENTIATION_SLIDES[1].headline,
        detail: COPILOT_DIFFERENTIATION_SLIDES[1].tagline ?? '',
        variant: 'emphasized',
        cta: 'See how GutSphere works',
        ctaVariant: 'secondary',
      },
    ],
  },
  {
    id: 'connection',
    step: 9,
    progress: 0.66,
    side: 'right',
    icon: '⟿',
    sectionEyebrow: COPILOT_CONNECTION_SECTION.eyebrow,
    sectionTitle: COPILOT_CONNECTION_SECTION.title,
    sectionMicrocopy: COPILOT_CONNECTION_SECTION.microcopy,
    cards: [
      {
        id: COPILOT_CONNECTION_SLIDES[0].id,
        title: COPILOT_CONNECTION_SLIDES[0].headline,
        detail: COPILOT_CONNECTION_SLIDES[0].tagline ?? '',
        routeChip: COPILOT_ROUTE,
      },
    ],
  },
  {
    id: 'founder',
    step: 10,
    progress: 0.72,
    side: 'left',
    icon: '♥',
    sectionEyebrow: COPILOT_FOUNDER_SECTION.eyebrow,
    sectionTitle: COPILOT_FOUNDER_SECTION.title,
    sectionMicrocopy: COPILOT_FOUNDER_SECTION.microcopy,
    cards: [
      {
        id: COPILOT_FOUNDER_SLIDES[0].id,
        label: COPILOT_FOUNDER_SLIDES[0].label,
        title: COPILOT_FOUNDER_SLIDES[0].headline,
        detail: COPILOT_FOUNDER_SLIDES[0].tagline ?? '',
      },
      {
        id: COPILOT_FOUNDER_SLIDES[1].id,
        label: COPILOT_FOUNDER_SLIDES[1].label,
        title: COPILOT_FOUNDER_SLIDES[1].headline,
        detail: COPILOT_FOUNDER_SLIDES[1].tagline ?? '',
        cta: 'Why We Built GutSphere',
        ctaHref: ABOUT_URL,
        ctaVariant: 'secondary',
      },
    ],
  },
  {
    id: 'journey-moments',
    step: 11,
    progress: 0.78,
    side: 'right',
    icon: '◎',
    sectionEyebrow: COPILOT_JOURNEY_MOMENTS_SECTION.eyebrow,
    sectionTitle: COPILOT_JOURNEY_MOMENTS_SECTION.title,
    cards: slideCards(COPILOT_JOURNEY_MOMENTS_SLIDES, { ctaOnLast: PRIMARY_CTA }),
  },
  {
    id: 'daily-value',
    step: 12,
    progress: 0.86,
    side: 'left',
    icon: '✓',
    sectionEyebrow: COPILOT_DAILY_VALUE_SECTION.eyebrow,
    sectionTitle: COPILOT_DAILY_VALUE_SECTION.title,
    sectionMicrocopy: COPILOT_DAILY_VALUE_SECTION.microcopy,
    cards: slideCards(COPILOT_DAILY_VALUE_SLIDES, { ctaOnLast: PRIMARY_CTA }),
  },
  {
    id: 'clarity-point',
    step: 13,
    progress: 0.94,
    side: 'right',
    icon: '→',
    isStomach: true,
    sectionEyebrow: COPILOT_FINAL_SECTION.eyebrow,
    sectionTitle: COPILOT_FINAL_SECTION.title,
    sectionMicrocopy: COPILOT_FINAL_SECTION.intro,
    cards: [
      {
        id: 'final-clarity',
        title: 'Ready to feel more in control of your gut journey?',
        detail: COPILOT_FINAL_SECTION.intro,
        routeChip: COPILOT_ROUTE,
        cta: PRIMARY_CTA,
        safetyNote:
          'GutSphere helps you organize your journey. It does not diagnose, treat, or replace clinical care.',
      },
    ],
  },
] as const

export const SCROLL_GUT_CARD_REVEAL_OFFSET = 0.0035
export const SCROLL_GUT_STOP_REACH_OFFSET = 0.022
