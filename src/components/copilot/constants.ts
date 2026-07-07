export const COPILOT_PRIMARY_CTA = 'Start Your Gut Check-In'
export const COPILOT_SECONDARY_CTA = 'Explore the Journey'
export const COPILOT_EXPLORE_AGAIN_CTA = 'Explore Again'

export const COPILOT_ROUTE =
  'Self-Care → Clinical Navigation → Clinical Intelligence → Long-Term Gut Health'

export const SEO_TITLE =
  'GutSphere | Digestive Health Copilot for Symptoms, Care Navigation & Treatment Support'

export const SEO_DESCRIPTION =
  'GutSphere helps people organize digestive symptoms, stool changes, food reactions, flare-ups, treatment updates, and doctor-visit questions into one guided digestive-health journey.'

export type ChapterTheme =
  | 'boarding'
  | 'confusion'
  | 'self-care'
  | 'clinical-navigation'
  | 'clinical-intelligence'
  | 'trust'
  | 'clarity'

export type VisualType =
  | 'route'
  | 'pilot'
  | 'tracker-diff'
  | 'confusion'
  | 'checkin'
  | 'visit-prep'
  | 'patterns'
  | 'founder'
  | 'clarity'

export type PlanePosition = 'center' | 'bottom' | 'none'

export interface ChapterCard {
  id: string
  eyebrow?: string
  headline: string
  subcopy: string
  visualType?: VisualType
  showPrimaryCta?: boolean
  showSecondaryCta?: boolean
  secondaryCtaLabel?: string
  sectionCta?: string
  safetyNote?: string
}

export interface Chapter {
  id: string
  label: string
  theme: ChapterTheme
  planePosition: PlanePosition
  cards: readonly ChapterCard[]
  chapterCta?: string
  safetyMicrocopy?: string
}

export const CHAPTERS: readonly Chapter[] = [
  {
    id: 'boarding',
    label: 'Boarding',
    theme: 'boarding',
    planePosition: 'center',
    cards: [
      {
        id: 'boarding-1',
        eyebrow: 'Welcome aboard.',
        headline:
          'Your digestive health copilot — before diagnosis, between visits, and beyond treatment.',
        subcopy:
          'Digestive symptoms can be hard to navigate alone. GutSphere helps you organize symptoms, stool changes, food reactions, flare-ups, treatment updates, test results, and doctor-visit questions into one guided journey.',
        visualType: 'route',
        showPrimaryCta: true,
        showSecondaryCta: true,
        secondaryCtaLabel: COPILOT_SECONDARY_CTA,
      },
      {
        id: 'boarding-2',
        headline: 'You are the pilot. GutSphere is your copilot.',
        subcopy:
          'You stay in control of your digestive-health journey. GutSphere helps organize the signals, surface patterns worth reviewing, and prepare you for the next step.',
        visualType: 'pilot',
      },
      {
        id: 'boarding-3',
        headline: 'Not a tracker. A guided digestive-health system.',
        subcopy: 'Tracking is the input. Guidance is the product.',
        visualType: 'tracker-diff',
      },
    ],
  },
  {
    id: 'confusion',
    label: 'Confusion',
    theme: 'confusion',
    planePosition: 'bottom',
    cards: [
      {
        id: 'confusion-1',
        headline: 'Digestive health can feel like a full-time investigation.',
        subcopy:
          'You are trying to remember what you ate, when symptoms started, how your stool changed, what medication you took, what your test results said, and what to ask your doctor next.',
        visualType: 'confusion',
      },
      {
        id: 'confusion-2',
        headline: 'The clues are scattered.',
        subcopy:
          'Symptoms, food reactions, stress, sleep, stool changes, flare-ups, test results, and treatment updates often live across memory, notes, apps, and reports.',
        visualType: 'confusion',
      },
      {
        id: 'confusion-3',
        headline: 'The result is uncertainty.',
        subcopy:
          'Was it food? Stress? Medication? Sleep? A flare-up? A disease pattern? Or something else entirely?',
        visualType: 'confusion',
      },
      {
        id: 'confusion-4',
        headline: 'GutSphere gives the journey a flight path.',
        subcopy: 'From confusion to organized context, GutSphere helps you move with more clarity.',
        visualType: 'route',
      },
    ],
  },
  {
    id: 'self-care',
    label: 'Self-Care',
    theme: 'self-care',
    planePosition: 'bottom',
    chapterCta: COPILOT_PRIMARY_CTA,
    cards: [
      {
        id: 'self-care-1',
        headline: 'Self-care starts with what happened today.',
        subcopy:
          'Capture digestive symptoms, stool changes, food reactions, stress, sleep, medication, supplements, and notes in one guided check-in.',
        visualType: 'checkin',
        sectionCta: COPILOT_PRIMARY_CTA,
      },
      {
        id: 'self-care-2',
        headline: 'Your first check-in is the first signal.',
        subcopy:
          'You do not need to remember everything perfectly. Start with one useful check-in and build your digestive-health timeline over time.',
        visualType: 'checkin',
      },
      {
        id: 'self-care-3',
        headline: 'Track the right things, not everything.',
        subcopy:
          'GutSphere focuses on signals that matter in digestive health: symptoms, bowel patterns, food context, lifestyle changes, treatment adherence, and flare-up notes.',
        visualType: 'checkin',
      },
      {
        id: 'self-care-4',
        headline: 'Small daily inputs become useful context.',
        subcopy:
          'Every check-in helps build a clearer picture for future review, care conversations, and long-term gut health.',
        visualType: 'checkin',
        sectionCta: COPILOT_PRIMARY_CTA,
      },
    ],
  },
  {
    id: 'clinical-navigation',
    label: 'Clinical Navigation',
    theme: 'clinical-navigation',
    planePosition: 'bottom',
    cards: [
      {
        id: 'clinical-nav-1',
        headline: 'Clinical navigation for the messy middle of digestive health.',
        subcopy:
          'GutSphere helps you stay oriented before diagnosis, between visits, during treatment changes, and after flare-ups.',
        visualType: 'visit-prep',
      },
      {
        id: 'clinical-nav-2',
        headline: 'Your appointment should not depend only on memory.',
        subcopy:
          'Prepare symptom timelines, stool-change summaries, flare-up history, medication changes, test results, and questions to discuss.',
        visualType: 'visit-prep',
      },
      {
        id: 'clinical-nav-3',
        headline: 'Bring clearer context to your care team.',
        subcopy:
          'GutSphere helps you organize what changed, what you tried, what got worse, and what needs follow-up.',
        visualType: 'visit-prep',
      },
      {
        id: 'clinical-nav-4',
        headline: 'Not medical advice. Better preparation.',
        subcopy:
          'GutSphere does not make clinical decisions. It helps you prepare, organize, and communicate more clearly.',
        visualType: 'visit-prep',
        sectionCta: 'Prepare for Your Next Visit',
        safetyNote:
          'GutSphere helps you prepare for care conversations. It does not make medical decisions or replace clinical advice.',
      },
    ],
  },
  {
    id: 'clinical-intelligence',
    label: 'Clinical Intelligence',
    theme: 'clinical-intelligence',
    planePosition: 'bottom',
    cards: [
      {
        id: 'clinical-intel-1',
        headline: 'Clinical intelligence built from your digestive-health journey.',
        subcopy:
          'GutSphere helps turn daily check-ins, flare-up notes, treatment changes, and care records into a more useful digestive-health picture over time.',
        visualType: 'patterns',
      },
      {
        id: 'clinical-intel-2',
        headline: 'Most trackers show what you entered. GutSphere helps show what may matter.',
        subcopy:
          'Review gut patterns across symptoms, stool changes, food, stress, sleep, medication, treatment response, and flare-ups.',
        visualType: 'patterns',
      },
      {
        id: 'clinical-intel-3',
        headline: 'Pattern review, not self-diagnosis.',
        subcopy:
          'GutSphere helps surface context worth reviewing and discussing with your care team.',
        visualType: 'patterns',
      },
      {
        id: 'clinical-intel-4',
        headline: 'From scattered clues to clearer clinical context.',
        subcopy:
          'Daily check-ins become timelines, summaries, and care-team-ready views.',
        visualType: 'patterns',
        sectionCta: 'See Your Gut Patterns',
      },
    ],
  },
  {
    id: 'trust',
    label: 'Trust',
    theme: 'trust',
    planePosition: 'bottom',
    cards: [
      {
        id: 'trust-1',
        headline: 'Built for people tired of explaining their gut story from memory.',
        subcopy:
          'Digestive symptoms are personal, complex, and hard to summarize in a short appointment.',
        visualType: 'founder',
      },
      {
        id: 'trust-2',
        headline: 'GutSphere is built to complement clinical care.',
        subcopy:
          'The goal is not to replace doctors. The goal is to help patients bring better context to care conversations.',
        visualType: 'founder',
      },
      {
        id: 'trust-3',
        headline: 'Patient-sided. Medically responsible. Built for real digestive-health journeys.',
        subcopy:
          'Designed for the reality of symptoms, diagnosis limbo, treatment uncertainty, flare-ups, and long-term digestive health.',
        visualType: 'founder',
      },
    ],
  },
  {
    id: 'clarity',
    label: 'Check-In',
    theme: 'clarity',
    planePosition: 'bottom',
    safetyMicrocopy:
      'GutSphere helps organize and prepare. It does not diagnose, treat, or replace clinical care.',
    cards: [
      {
        id: 'clarity-1',
        headline: 'Ready for your first gut check-in?',
        subcopy:
          'Start with one simple check-in and begin building a clearer digestive-health journey — before diagnosis, between visits, and beyond treatment.',
        visualType: 'clarity',
        showPrimaryCta: true,
        showSecondaryCta: true,
        secondaryCtaLabel: COPILOT_EXPLORE_AGAIN_CTA,
      },
      {
        id: 'clarity-2',
        headline: 'One check-in. One clearer next step.',
        subcopy:
          'Your first check-in helps GutSphere begin organizing the signals behind your digestive-health journey.',
        visualType: 'clarity',
      },
      {
        id: 'clarity-3',
        headline: 'Digestive health is a journey. You do not have to navigate it alone.',
        subcopy:
          'GutSphere helps you stay oriented through symptoms, care, treatment, flare-ups, and long-term gut health.',
        visualType: 'clarity',
        safetyNote:
          'GutSphere helps organize and prepare. It does not diagnose, treat, or replace clinical care.',
      },
    ],
  },
] as const

export const CONFUSION_OBSTACLES = [
  'Food notes',
  'Stool changes',
  'Symptoms',
  'Medication',
  'Test reports',
  'Flare-ups',
  '?',
] as const

export const CHECKIN_FIELDS = [
  'Symptoms today',
  'Bowel movement / stool changes',
  'Food or possible reaction',
  'Stress and sleep',
  'Medication or supplement taken',
  'Notes',
] as const

export const VISIT_PREP_ITEMS = [
  'Recent symptom trend',
  'Stool-change summary',
  'Flare-up timeline',
  'Treatment changes',
  'Test results added',
  'Questions to discuss',
] as const

export const PATTERN_FLOW = [
  'Daily check-ins',
  'Timeline',
  'Pattern review',
  'Visit summary',
  'Treatment support',
] as const

/** Self-care chapter index — sticky CTA appears from here */
export const STICKY_CTA_CHAPTER_INDEX = 2
