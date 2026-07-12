export interface SymptomKB {
  n: string
  s: string
  track: string[]
  connect: string[]
  ask: string
  /** System-preview pillars — mirrors Track → Care → Navigate → Understand */
  care: string
  navigate: string
  understand: string
  /** Which care lenses matter most for this symptom */
  lenses: readonly ('GI' | 'Nutrition' | 'Gut–brain' | 'Holistic')[]
}

export const SYMPTOM_KB: Record<string, SymptomKB> = {
  bloating: {
    n: 'bloating & gas',
    s: 'Bloating',
    track: ['when bloating peaks through the day', 'fizzy, fermented and high-FODMAP foods'],
    connect: ['what you eat', 'meal timing'],
    ask: 'Is this tied to certain foods, or to how my gut moves things along?',
    care: 'A calmer meal routine for hard days — not a long to-do list.',
    navigate: 'When food-first help is enough vs when motility or a GI visit is worth it.',
    understand: 'Is this tied to certain foods, or to how your gut moves things along?',
    lenses: ['Nutrition', 'GI', 'Gut–brain'],
  },
  constipation: {
    n: 'constipation',
    s: 'Constipation',
    track: ['how often you go, and stool form', 'fiber, fluids and movement'],
    connect: ['fiber and hydration', 'medications'],
    ask: 'Is my fiber and fluid balance right, or should we look deeper?',
    care: 'Gentle fiber, fluids, and movement cues matched to what you logged.',
    navigate: 'When lifestyle tweaks are enough vs when to ask about meds or a GI workup.',
    understand: 'Is fiber and fluid balance right — or should we look deeper?',
    lenses: ['Nutrition', 'GI', 'Holistic'],
  },
  diarrhea: {
    n: 'diarrhea',
    s: 'Diarrhea',
    track: ['frequency and urgency', 'the foods in the hours before'],
    connect: ['food', 'stress', 'medications'],
    ask: 'Should we rule out specific triggers or malabsorption?',
    care: 'Simple, low-pressure steps for urgent days — what to try first, what to watch.',
    navigate: 'When to ride it out, when to call, and what to bring to the visit.',
    understand: 'Should we rule out specific triggers or malabsorption?',
    lenses: ['GI', 'Nutrition', 'Gut–brain'],
  },
  pain: {
    n: 'belly pain & cramps',
    s: 'Pain',
    track: ['when the pain hits, and where', 'whether it eases after a bathroom trip'],
    connect: ['meals', 'your bowel pattern'],
    ask: 'Is the pain tied to eating, or to my bowel pattern?',
    care: 'Warm, simple routines that ease a hard day without overloading you.',
    navigate: 'When meal-linked pain can wait vs when location and timing need a clinician.',
    understand: 'Is the pain tied to eating, or to your bowel pattern?',
    lenses: ['GI', 'Gut–brain', 'Nutrition'],
  },
  reflux: {
    n: 'heartburn & reflux',
    s: 'Reflux',
    track: ['timing, especially at night', 'trigger foods and meal size'],
    connect: ['late meals', 'portion size'],
    ask: 'Is this reflux I should treat, or look into further?',
    care: 'Meal timing and portion cues that calm nights without a rigid diet.',
    navigate: 'When lifestyle changes are enough vs when to ask about treatment or further checks.',
    understand: 'Is this reflux to treat now — or look into further?',
    lenses: ['GI', 'Nutrition'],
  },
  nausea: {
    n: 'nausea',
    s: 'Nausea',
    track: ['nausea against meals and fullness', 'how larger meals sit'],
    connect: ['meal size', 'stress'],
    ask: 'Could this be about how slowly my stomach empties?',
    care: 'Smaller, steadier meal cues when fullness and nausea stack up.',
    navigate: 'When stress and meal size explain it vs when emptying or a GI visit matters.',
    understand: 'Could this be about how slowly your stomach empties?',
    lenses: ['GI', 'Gut–brain', 'Nutrition'],
  },
  food: {
    n: 'food reactions',
    s: 'Food',
    track: ['which foods, and how fast you react', 'the kind of reaction each time'],
    connect: ['specific foods', 'patterns over weeks'],
    ask: 'Should we try a structured elimination, or test for intolerances?',
    care: 'A calm “can I eat this?” check — not another guilt-heavy food list.',
    navigate: 'When a structured trial helps vs when intolerance testing or a dietitian is next.',
    understand: 'Structured elimination — or tests for intolerances?',
    lenses: ['Nutrition', 'GI', 'Holistic'],
  },
  fatigue: {
    n: 'fatigue & brain fog',
    s: 'Fatigue',
    track: ['energy against your gut symptoms', 'sleep and meals'],
    connect: ['sleep', 'nutrition', 'symptom flares'],
    ask: 'Could my gut symptoms be driving the fatigue?',
    care: 'Rest and meal timing that respect low-energy days — no streak pressure.',
    navigate: 'When gut flares explain the fog vs when sleep, nutrition, or a visit needs focus.',
    understand: 'Could gut symptoms be driving the fatigue?',
    lenses: ['Holistic', 'Nutrition', 'Gut–brain'],
  },
}

export const SYSTEM_LENSES = ['GI', 'Nutrition', 'Gut–brain', 'Holistic'] as const
export type SystemLens = (typeof SYSTEM_LENSES)[number]

export const SYSTEM_PILLARS = [
  { id: 'track', label: 'Track' },
  { id: 'understand', label: 'Understand' },
  { id: 'care', label: 'Care' },
  { id: 'navigate', label: 'Navigate' },
] as const

/** Compact multidisciplinary chips — professional titles relevant to gut health. */
export const EXPERT_PERSPECTIVES = [
  { id: 'gi', label: 'Gastroenterologist', tone: 'coral' },
  { id: 'nutrition', label: 'Dietitian', tone: 'olive' },
  { id: 'gut-brain', label: 'Psychologist', tone: 'sage' },
  { id: 'whole-person', label: 'Family physician', tone: 'blush' },
  { id: 'sleep', label: 'Sleep specialist', tone: 'slate' },
  { id: 'movement', label: 'Physical therapist', tone: 'olive' },
  { id: 'pharmacy', label: 'Pharmacist', tone: 'amber' },
  { id: 'pelvic', label: 'Pelvic therapist', tone: 'rose' },
] as const

export type ExpertPerspectiveId = (typeof EXPERT_PERSPECTIVES)[number]['id']

export type SystemPillarId = (typeof SYSTEM_PILLARS)[number]['id']

export interface JourneyStage {
  name: string
  challenge: string
  map: string
}

export const JOURNEY_STAGES: JourneyStage[] = [
  {
    name: 'Finding answers',
    challenge:
      'Scattered symptoms and no name yet. Tests, referrals, and the sinking feeling that no one is really listening.',
    map: 'I connect your symptoms to food, sleep and stress, surface the pattern underneath, and hand you an appointment-ready timeline — so you walk in with proof, not a guess.',
  },
  {
    name: 'In treatment',
    challenge:
      'You finally have a plan — but is it working? Good days and bad days blur together, and it’s hard to tell what’s actually helping.',
    map: 'I track how you respond over time and show what moves the needle and what doesn’t — so every visit starts from evidence instead of memory.',
  },
  {
    name: 'Living with it',
    challenge:
      'The daily reality: staying ahead of flares, managing triggers, and not letting your gut quietly run your life.',
    map: 'I keep watch with you — catching triggers early, easing the hard days, and turning management into something you drive instead of dread.',
  },
  {
    name: 'Getting ahead of it',
    challenge:
      'The long haul: prevention, monitoring, and building a gut that supports the life you actually want to live.',
    map: 'I hold your whole history and keep steering forward — surveillance, prevention, and the long-game moves most tools never think about.',
  },
]

export const JOURNEY_SHORT_LABELS = ['Answers', 'Treatment', 'Living', 'Ahead'] as const
export const JOURNEY_FRAC = [0.08, 0.37, 0.66, 0.95] as const

export const SYMPTOM_CHIPS = [
  { key: 'bloating', label: 'Bloating & gas' },
  { key: 'constipation', label: 'Constipation' },
  { key: 'diarrhea', label: 'Diarrhea' },
  { key: 'pain', label: 'Belly pain & cramps' },
  { key: 'reflux', label: 'Heartburn & reflux' },
  { key: 'nausea', label: 'Nausea' },
  { key: 'food', label: 'Food reactions' },
  { key: 'fatigue', label: 'Fatigue & brain fog' },
] as const

export const DX_CHIPS = [
  'IBS',
  'IBD · Crohn\'s / UC',
  'Celiac',
  'GERD / reflux',
  'SIBO',
  'Gastroparesis',
  'Functional dyspepsia',
  'Something else',
] as const

export const FLAG_CHIPS = [
  'Blood in stool',
  'Black or tarry stools',
  'Vomiting blood',
  'Unexplained weight loss',
  'Trouble swallowing',
] as const
