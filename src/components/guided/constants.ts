export const GUIDED_PRIMARY_CTA = 'Start Your Gut Check-In'
export const GUIDED_SECONDARY_CTA = 'Explore the Journey'
export const GUIDED_EXPLORE_AGAIN_CTA = 'Explore the Journey Again'

export const COPILOT_ROUTE =
  'Self-Care → Clinical Navigation → Clinical Intelligence → Long-Term Gut Health'

export type CardTheme =
  | 'boarding'
  | 'turbulence'
  | 'shift'
  | 'self-care'
  | 'clinical-navigation'
  | 'clinical-intelligence'
  | 'comparison'
  | 'founder'
  | 'moments'
  | 'daily-value'
  | 'clarity'

export type CardType = 'hero' | 'problem' | 'transition' | 'solution' | 'trust' | 'cta'
export type PlanePosition = 'center' | 'bottom' | 'none'

export interface ShiftPair {
  from: string
  to: string
}

export interface JourneyMoment {
  title: string
  heading: string
  copy: string
  micro: string
}

export interface JourneyCardData {
  id: string
  index: number
  eyebrow: string
  heading: string
  supporting: string
  hudMessage: string
  productMeaning: string
  theme: CardTheme
  cardType: CardType
  planePosition: PlanePosition
  obstacles?: readonly string[]
  bullets?: readonly string[]
  shiftPairs?: readonly ShiftPair[]
  sectionCta?: string
  safetyNote?: string
  showPrimaryCta?: boolean
  showMidCta?: boolean
}

export const JOURNEY_CARDS: readonly JourneyCardData[] = [
  {
    id: 'boarding',
    index: 0,
    eyebrow: 'Welcome aboard.',
    heading: 'Your digestive health copilot — before diagnosis, between visits, and beyond treatment.',
    supporting:
      'Digestive symptoms are hard to navigate when every day brings different clues. GutSphere helps you organize symptoms, stool changes, food reactions, flare-ups, treatment updates, test results, and doctor-visit questions into one guided digestive-health journey.',
    hudMessage: COPILOT_ROUTE,
    productMeaning:
      'GutSphere does not diagnose, treat, or replace your doctor. It helps you organize your journey, understand patterns, and prepare for better care conversations.',
    theme: 'boarding',
    cardType: 'hero',
    planePosition: 'center',
    showPrimaryCta: true,
  },
  {
    id: 'investigation',
    index: 1,
    eyebrow: 'The problem',
    heading: 'Digestive health can feel like a full-time investigation.',
    supporting:
      'You are trying to remember what you ate, when symptoms started, how your stool changed, whether stress or sleep played a role, what medication you took, what your test results said, and what to ask your doctor next.',
    hudMessage: 'GutSphere helps turn scattered digestive clues into a clearer journey.',
    productMeaning: 'The problem is not that you are not paying attention. The clues are scattered.',
    theme: 'turbulence',
    cardType: 'problem',
    planePosition: 'bottom',
    bullets: [
      'Symptoms change day by day',
      'Food reactions are hard to confirm',
      'Stool changes are difficult to summarize',
      'Flare-ups seem to come out of nowhere',
      'Medication and supplement changes are hard to evaluate',
      'Doctor visits feel too short for the full story',
      'Test results, notes, and symptoms live in different places',
    ],
    obstacles: ['Food notes', 'Stool changes', 'Symptoms', 'Medication changes', 'Test reports', '?'],
  },
  {
    id: 'shift',
    index: 2,
    eyebrow: 'The shift',
    heading: 'From guessing alone to moving with a copilot.',
    supporting:
      'Most tools stop at logging. GutSphere goes further. It helps you move from scattered daily records to guided self-care, clearer clinical navigation, and deeper digestive-health intelligence over time.',
    hudMessage: COPILOT_ROUTE,
    productMeaning: 'Tracking is the input. Guidance is the product.',
    theme: 'shift',
    cardType: 'transition',
    planePosition: 'bottom',
    shiftPairs: [
      { from: 'I do not know what changed.', to: 'Here is what happened before this flare-up.' },
      {
        from: 'I forgot what to tell my doctor.',
        to: 'Here is my symptom timeline, stool pattern, treatment response, and questions.',
      },
      {
        from: 'I am tracking, but I do not know what it means.',
        to: 'I can review patterns and prepare my next step.',
      },
    ],
  },
  {
    id: 'self-care',
    index: 3,
    eyebrow: 'Self-care',
    heading: 'Self-care that starts with what happened today.',
    supporting:
      'Digestive health changes in small daily moments: meals, stress, sleep, stool changes, medications, symptoms, movement, and routines. GutSphere helps you capture those signals without turning your life into a spreadsheet.',
    hudMessage: 'Your first check-in is the first signal.',
    productMeaning:
      'You do not need to remember everything perfectly. Start with one useful check-in and let your digestive-health story build over time.',
    theme: 'self-care',
    cardType: 'solution',
    planePosition: 'bottom',
    bullets: [
      'Log digestive symptoms in a guided way',
      'Record stool changes, urgency, constipation, diarrhea, pain, reflux, bloating, and food reactions',
      'Add meals, stress, sleep, movement, medications, supplements, and notes',
      'Build a daily digestive-health timeline',
      'Notice what may be worth reviewing next',
    ],
    sectionCta: GUIDED_PRIMARY_CTA,
  },
  {
    id: 'clinical-navigation',
    index: 4,
    eyebrow: 'Clinical navigation',
    heading:
      'Clinical navigation for the moments between “something is wrong” and “what should I do next?”',
    supporting:
      'Digestive health care can be confusing, especially when you are undiagnosed, waiting for appointments, trying new treatments, or managing changing symptoms. GutSphere helps you stay oriented before, during, and after clinical care.',
    hudMessage: 'Less scattered memory. More useful context.',
    productMeaning:
      'When your appointment arrives, you should not have to explain weeks or months of symptoms from memory. GutSphere helps you prepare a clearer story: what changed, what you noticed, what you tried, and what you want to discuss next.',
    theme: 'clinical-navigation',
    cardType: 'solution',
    planePosition: 'bottom',
    bullets: [
      'Doctor-visit preparation',
      'Symptom timelines',
      'Flare-up history',
      'Medication and supplement changes',
      'Test results and reports',
      'Questions to ask your care team',
      'Follow-up notes and next steps',
    ],
    sectionCta: 'Prepare for Your Next Visit',
    safetyNote:
      'GutSphere helps you prepare for care conversations. It does not make medical decisions or replace clinical advice.',
  },
  {
    id: 'clinical-intelligence',
    index: 5,
    eyebrow: 'Clinical intelligence',
    heading: 'Clinical intelligence built from your digestive-health journey.',
    supporting:
      'GutSphere helps turn daily check-ins, flare-up notes, treatment changes, and care records into a more useful digestive-health picture over time. This is not about overwhelming you with charts. It is about helping you see what may matter, what may be changing, and what may be useful to discuss with your care team.',
    hudMessage: 'From scattered clues to clearer clinical context.',
    productMeaning:
      'Most trackers show you what you entered. GutSphere helps you understand the story your entries are beginning to tell.',
    theme: 'clinical-intelligence',
    cardType: 'solution',
    planePosition: 'bottom',
    bullets: [
      'Gut patterns across symptoms, food, stool, stress, sleep, and treatment',
      'Context around flare-ups',
      'Treatment adherence and symptom response',
      'Possible patterns to review, not self-diagnose',
      'Timeline summaries for care conversations',
      'Long-term changes in digestive-health behavior',
    ],
    sectionCta: 'See Your Gut Patterns',
  },
  {
    id: 'comparison',
    index: 6,
    eyebrow: 'Why GutSphere',
    heading: 'GutSphere is not another symptom tracker.',
    supporting:
      'Most trackers record what happened. GutSphere helps you move through the digestive-health journey: daily self-care, clinical navigation, treatment support, flare-up review, and long-term pattern understanding.',
    hudMessage: 'Tracking is where GutSphere begins. Guidance is where it becomes useful.',
    productMeaning: 'Not another tracker. A guided system for your digestive-health journey.',
    theme: 'comparison',
    cardType: 'solution',
    planePosition: 'bottom',
  },
  {
    id: 'founder',
    index: 7,
    eyebrow: 'Why we built this',
    heading: 'Built for people who are tired of explaining their gut story from memory.',
    supporting:
      'Digestive symptoms are personal, complex, and often difficult to summarize in a short appointment. GutSphere was built around a simple belief: patients need more than a place to record symptoms. They need a guided system that helps them organize their journey, prepare for care, and stay supported between visits.',
    hudMessage:
      'We are building GutSphere to complement clinical care, not replace it. The goal is to help patients bring clearer context to their care team and feel less alone while navigating digestive symptoms, treatment changes, and long-term gut health.',
    productMeaning: 'Patient-sided. Medically responsible. Built for real digestive-health journeys.',
    theme: 'founder',
    cardType: 'trust',
    planePosition: 'bottom',
  },
  {
    id: 'moments',
    index: 8,
    eyebrow: 'Journey moments',
    heading: 'Built for every stage of the digestive-health journey.',
    supporting:
      'Digestive health is not one moment. It is a journey through symptoms, appointments, treatment changes, flare-ups, and long-term management.',
    hudMessage: COPILOT_ROUTE,
    productMeaning: 'A copilot for the journey beyond one appointment.',
    theme: 'moments',
    cardType: 'solution',
    planePosition: 'bottom',
    showMidCta: true,
  },
  {
    id: 'daily-value',
    index: 9,
    eyebrow: 'Daily value',
    heading: 'Every check-in should move you one step forward.',
    supporting:
      'GutSphere is designed so daily tracking does not feel like empty data entry. Each check-in helps build a clearer digestive-health picture and points you toward what may be useful to review next.',
    hudMessage: 'Symptoms logged → Context connected → Next step suggested',
    productMeaning: 'Small check-ins. Clearer context. Better continuity between visits.',
    theme: 'daily-value',
    cardType: 'solution',
    planePosition: 'bottom',
  },
  {
    id: 'clarity-point',
    index: 10,
    eyebrow: 'Clarity Point',
    heading: 'Ready for your first gut check-in?',
    supporting:
      'Start with one simple check-in and begin building a clearer digestive-health journey — before diagnosis, between visits, and beyond treatment.',
    hudMessage: COPILOT_ROUTE,
    productMeaning:
      'GutSphere helps you organize and understand your digestive-health journey. It does not diagnose, treat, or replace clinical care.',
    theme: 'clarity',
    cardType: 'cta',
    planePosition: 'bottom',
    showPrimaryCta: true,
  },
] as const

export const TRACKER_COMPARISON = [
  { tracker: 'Record symptoms', gutsphere: 'Guides digestive-health check-ins' },
  { tracker: 'Store logs', gutsphere: 'Builds a digestive-health timeline' },
  { tracker: 'Show dashboards', gutsphere: 'Helps prepare for care conversations' },
  {
    tracker: 'Track isolated habits',
    gutsphere: 'Connects symptoms, stool, food, stress, sleep, medication, and flare-ups',
  },
  {
    tracker: 'End at data entry',
    gutsphere: 'Supports self-care, clinical navigation, and clinical intelligence',
  },
] as const

export const JOURNEY_MOMENTS: readonly JourneyMoment[] = [
  {
    title: 'Before Diagnosis',
    heading: 'When you do not yet know what is going on.',
    copy: 'Organize symptoms, stool changes, food reactions, flare-ups, and daily context so your story becomes easier to explain.',
    micro: 'Helpful for diagnosis limbo and early care conversations.',
  },
  {
    title: 'Between Visits',
    heading: 'When your symptoms continue after the appointment ends.',
    copy: 'Keep track of what changed, what you tried, what got worse, and what needs follow-up.',
    micro: 'Continuity when care happens in gaps.',
  },
  {
    title: 'During Treatment',
    heading: 'When you are trying to understand if the plan is helping.',
    copy: 'Track medication, supplements, lifestyle changes, adherence, symptoms, and flare-ups together.',
    micro: 'See the journey around treatment, not just isolated logs.',
  },
  {
    title: 'During Flare-Ups',
    heading: 'When symptoms suddenly get worse.',
    copy: 'Look back at recent food, stress, sleep, stool changes, treatment, and notes to understand the context around the flare-up.',
    micro: 'Not panic. Pattern review.',
  },
  {
    title: 'Long-Term Gut Health',
    heading: 'When you want to stay aware over time.',
    copy: 'Build a digestive-health timeline that supports follow-ups, care routines, and long-term digestive-health awareness.',
    micro: 'A copilot for the journey beyond one appointment.',
  },
] as const

export const DAILY_NEXT_STEPS = [
  'Review what changed before your last flare-up',
  'Add your medication update to this week\'s timeline',
  'Prepare questions for your next doctor visit',
  'Compare symptoms with sleep and stress from the past few days',
  'Summarize recent stool changes and abdominal pain patterns',
  'Review treatment adherence before your follow-up',
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

export const PATTERN_INTELLIGENCE_FLOW = [
  'Daily check-ins',
  'Timeline',
  'Pattern review',
  'Visit summary',
  'Treatment support',
] as const

export const CARD_NAV_LABELS = [
  'Boarding',
  'Problem',
  'Shift',
  'Self-Care',
  'Navigation',
  'Intelligence',
  'Compare',
  'Founder',
  'Moments',
  'Daily',
  'Clarity',
] as const
