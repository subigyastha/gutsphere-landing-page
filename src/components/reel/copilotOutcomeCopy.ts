import type { BillboardSlideData } from './BillboardSlide'
import { COPILOT_ROUTE } from '../journey/constants'

/** Outcome-based copy for /copilot — section 3 (The problem) and below. */

export const COPILOT_PROBLEM_SECTION = {
  eyebrow: 'The problem',
  title: 'Stop rebuilding your gut story from memory every time it matters.',
  microcopy: 'GutSphere turns scattered clues into a journey you can act on.',
} as const

export const COPILOT_PROBLEM_SLIDES: BillboardSlideData[] = [
  {
    id: 'problem-memory',
    label: 'Memory',
    visual: 'scatter',
    headline: 'Walk into visits with the full story ready',
    tagline:
      'So you stop losing symptom, food, and stool details in the rush before your appointment.',
  },
  {
    id: 'problem-flare',
    label: 'Flare days',
    visual: 'scatter',
    headline: 'Get through flare days with a plan — not panic',
    tagline: 'So hard days feel less chaotic when symptoms spike without warning.',
  },
  {
    id: 'problem-scatter',
    label: 'Scattered clues',
    visual: 'clarity',
    headline: 'See your health in one place instead of ten',
    tagline: 'So symptoms, meals, stress, meds, and test results connect into one timeline.',
  },
]

export const COPILOT_SHIFT_SECTION = {
  eyebrow: 'The shift',
  title: 'Move from guessing alone to knowing your next step.',
  intro: 'Most tools stop at logging. GutSphere helps you use what you track.',
} as const

export const COPILOT_SHIFT_SLIDES: BillboardSlideData[] = [
  {
    id: 'shift-flare',
    label: 'Flare context',
    visual: 'shift',
    headline: 'See what changed before your last flare-up',
    tagline: 'So you can review context — not wonder what you missed.',
  },
  {
    id: 'shift-visit',
    label: 'Visit ready',
    visual: 'shift',
    headline: 'Bring a doctor-ready summary to every visit',
    tagline: 'So short appointments cover your timeline, patterns, and questions.',
  },
  {
    id: 'shift-next',
    label: 'Next step',
    visual: 'shift',
    headline: 'Know what to review next — not just what you logged',
    tagline: 'So daily tracking points you toward useful self-care or follow-up.',
  },
]

export const COPILOT_SELF_CARE_SECTION = {
  eyebrow: 'Self-care',
  title: 'Feel more in control of everyday gut health — without a spreadsheet.',
  microcopy: 'Small daily actions that add up to a clearer picture.',
} as const

export const COPILOT_SELF_CARE_SLIDES: BillboardSlideData[] = [
  {
    id: 'self-habits',
    label: 'Daily habits',
    visual: 'checkin',
    visualLabel: 'Routines',
    headline: 'Build routines that fit your real life',
    tagline:
      'Personalized habits for meals, hydration, sleep, and stress — so each day moves you forward.',
  },
  {
    id: 'self-flare',
    label: 'Flare support',
    visual: 'next-step',
    visualLabel: 'Flare hub',
    headline: 'Know what to do when symptoms spike',
    tagline:
      'Flare playbooks, what to try first, and when to escalate — so you are not guessing on hard days.',
  },
  {
    id: 'self-plans',
    label: 'Plans & checks',
    visual: 'pattern',
    visualLabel: 'Guided plans',
    headline: 'Test what helps without starting over',
    tagline:
      'Diet plans, food checks, and personal experiments — so you learn what works for your body.',
  },
]

export const COPILOT_CLINICAL_NAV_SECTION = {
  eyebrow: 'Clinical navigation',
  title: 'Walk into every appointment prepared — not panicked.',
  microcopy: 'Less scattered memory. More useful context for your care team.',
} as const

export const COPILOT_CLINICAL_NAV_SLIDES: BillboardSlideData[] = [
  {
    id: 'nav-prep',
    label: 'Visit prep',
    visual: 'visit',
    visualLabel: 'Prep plan',
    headline: 'Walk in with questions already written',
    tagline:
      'AI-suggested doctor questions and prep checklists — so nothing important gets left unsaid.',
  },
  {
    id: 'nav-summary',
    label: 'Doctor summary',
    visual: 'visit',
    visualLabel: 'Summary',
    headline: 'Share a clear story — not a pile of notes',
    tagline:
      'Visit-ready summaries and PDFs from your tracking — so your doctor sees the full picture.',
  },
  {
    id: 'nav-procedures',
    label: 'Tests & follow-ups',
    visual: 'clarity',
    visualLabel: 'Procedures',
    headline: 'Stay ready for tests, procedures, and follow-ups',
    tagline:
      'Procedure prep, test results, and specialist visits — so nothing falls through the cracks.',
  },
]

export const COPILOT_CLINICAL_INTEL_SECTION = {
  eyebrow: 'Clinical intelligence',
  title: 'Understand what your data may be telling you — without drowning in it.',
  microcopy: 'Patterns to review with your care team, not self-diagnosis.',
} as const

export const COPILOT_CLINICAL_INTEL_SLIDES: BillboardSlideData[] = [
  {
    id: 'intel-patterns',
    label: 'Patterns',
    visual: 'pattern',
    visualLabel: 'Weekly feed',
    headline: 'Spot patterns you might miss on your own',
    tagline:
      'Weekly highlights, connections, and trends — so you see what may be worth reviewing next.',
  },
  {
    id: 'intel-treatment',
    label: 'Treatment',
    visual: 'pattern',
    visualLabel: 'Treatment',
    headline: 'See whether your plan is moving in the right direction',
    tagline:
      'Treatment timeline, adherence, and insights — so follow-ups focus on progress, not guesswork.',
  },
  {
    id: 'intel-guides',
    label: 'AI guides',
    visual: 'copilot',
    visualLabel: 'GI Copilot',
    headline: 'Get answers without sorting through raw logs',
    tagline:
      'GI Copilot and specialist guides — so you understand what your entries may mean over time.',
  },
]

export const COPILOT_DIFFERENTIATION_SECTION = {
  eyebrow: 'Why GutSphere',
  title: 'More than a log — guidance that moves you forward.',
} as const

export const COPILOT_DIFFERENTIATION_SLIDES: BillboardSlideData[] = [
  {
    id: 'compare-log',
    label: 'Trackers',
    visual: 'compare-bad',
    headline: 'Recording symptoms alone does not change your care',
    tagline: 'So logging without guidance leaves you with data — not direction.',
  },
  {
    id: 'compare-guide',
    label: 'GutSphere',
    visual: 'compare-good',
    headline: 'Get self-care, visit prep, and pattern insight in one place',
    tagline: 'So every check-in helps you prepare, act, or review — not just store.',
  },
]

export const COPILOT_CONNECTION_SECTION = {
  eyebrow: 'Connected journey',
  title: 'One continuous path from daily care to clinical clarity.',
  microcopy: COPILOT_ROUTE,
} as const

export const COPILOT_CONNECTION_SLIDES: BillboardSlideData[] = [
  {
    id: 'connection-route',
    label: 'Your route',
    visual: 'route',
    visualLabel: 'Copilot route',
    headline: 'Every step builds on the last',
    tagline: 'Track today, prepare for visits, and review patterns — in one guided journey.',
  },
]

export const COPILOT_FOUNDER_SECTION = {
  eyebrow: 'Why we built this',
  title: 'Built for people who are tired of explaining their gut story from memory.',
  microcopy: 'Patient-sided. Medically responsible. Built for real digestive-health journeys.',
} as const

export const COPILOT_FOUNDER_SLIDES: BillboardSlideData[] = [
  {
    id: 'founder-belief',
    label: 'Belief',
    visual: 'founder',
    headline: 'Bring clearer context to every appointment',
    tagline: 'So you feel less alone between visits — and more prepared when they matter.',
  },
  {
    id: 'founder-note',
    label: 'Founder',
    visual: 'founder',
    headline: 'Built to complement your care team',
    tagline: 'GutSphere organizes your journey. It does not diagnose, treat, or replace clinical advice.',
  },
]

export const COPILOT_JOURNEY_MOMENTS_SECTION = {
  eyebrow: 'Journey moments',
  title: 'Support for the moments that matter most in your gut journey.',
} as const

export const COPILOT_JOURNEY_MOMENTS_SLIDES: BillboardSlideData[] = [
  {
    id: 'moment-before',
    label: 'Before diagnosis',
    visual: 'moment',
    visualLabel: 'Before diagnosis',
    headline: 'Explain your story clearly — even before you have answers',
    tagline: 'So symptoms, food reactions, and flare-ups become easier to describe.',
  },
  {
    id: 'moment-between',
    label: 'Between visits',
    visual: 'moment',
    visualLabel: 'Between visits',
    headline: 'Keep momentum after the appointment ends',
    tagline: 'So you track what changed, what you tried, and what needs follow-up.',
  },
  {
    id: 'moment-treatment',
    label: 'During treatment',
    visual: 'moment',
    visualLabel: 'During treatment',
    headline: 'See whether your plan is helping over time',
    tagline: 'So medication, adherence, and symptoms stay connected in one view.',
  },
]

export const COPILOT_DAILY_VALUE_SECTION = {
  eyebrow: 'Daily value',
  title: 'Start each day knowing your one best next step.',
  microcopy: 'Small check-ins. Clearer context. Better continuity between visits.',
} as const

export const COPILOT_DAILY_VALUE_SLIDES: BillboardSlideData[] = [
  {
    id: 'daily-priority',
    label: 'Today',
    visual: 'next-step',
    visualLabel: 'Priority',
    headline: 'Know what matters most today',
    tagline:
      'A personalized priority action — flare support, visit prep, or habits — so you are not deciding from scratch.',
  },
  {
    id: 'daily-track',
    label: 'Track',
    visual: 'checkin',
    visualLabel: 'Quick add',
    headline: 'Log once and use it everywhere',
    tagline:
      'Bowel, diet, sleep, stress, and meds in one hub — so visit prep and patterns draw from the same story.',
  },
  {
    id: 'daily-forward',
    label: 'Momentum',
    visual: 'clarity',
    visualLabel: 'Care feed',
    headline: 'Turn consistency into clearer context',
    tagline:
      'Reminders, streaks, and smart recaps — so regular check-ins build a timeline worth reviewing.',
  },
]

export const COPILOT_FINAL_SECTION = {
  eyebrow: 'Clarity Point',
  title: 'Ready to feel more in control of your gut journey?',
  intro: 'Start with one check-in and build toward clearer self-care, visit prep, and pattern review.',
} as const
