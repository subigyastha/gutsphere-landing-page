export interface SymptomKB {
  n: string
  s: string
  track: string[]
  connect: string[]
  ask: string
}

export const SYMPTOM_KB: Record<string, SymptomKB> = {
  bloating: {
    n: 'bloating & gas',
    s: 'Bloating',
    track: ['when bloating peaks through the day', 'fizzy, fermented and high-FODMAP foods'],
    connect: ['what you eat', 'meal timing'],
    ask: 'Is this tied to certain foods, or to how my gut moves things along?',
  },
  constipation: {
    n: 'constipation',
    s: 'Constipation',
    track: ['how often you go, and stool form', 'fiber, fluids and movement'],
    connect: ['fiber and hydration', 'medications'],
    ask: 'Is my fiber and fluid balance right, or should we look deeper?',
  },
  diarrhea: {
    n: 'diarrhea',
    s: 'Diarrhea',
    track: ['frequency and urgency', 'the foods in the hours before'],
    connect: ['food', 'stress', 'medications'],
    ask: 'Should we rule out specific triggers or malabsorption?',
  },
  pain: {
    n: 'belly pain & cramps',
    s: 'Pain',
    track: ['when the pain hits, and where', 'whether it eases after a bathroom trip'],
    connect: ['meals', 'your bowel pattern'],
    ask: 'Is the pain tied to eating, or to my bowel pattern?',
  },
  reflux: {
    n: 'heartburn & reflux',
    s: 'Reflux',
    track: ['timing, especially at night', 'trigger foods and meal size'],
    connect: ['late meals', 'portion size'],
    ask: 'Is this reflux I should treat, or look into further?',
  },
  nausea: {
    n: 'nausea',
    s: 'Nausea',
    track: ['nausea against meals and fullness', 'how larger meals sit'],
    connect: ['meal size', 'stress'],
    ask: 'Could this be about how slowly my stomach empties?',
  },
  food: {
    n: 'food reactions',
    s: 'Food',
    track: ['which foods, and how fast you react', 'the kind of reaction each time'],
    connect: ['specific foods', 'patterns over weeks'],
    ask: 'Should we try a structured elimination, or test for intolerances?',
  },
  fatigue: {
    n: 'fatigue & brain fog',
    s: 'Fatigue',
    track: ['energy against your gut symptoms', 'sleep and meals'],
    connect: ['sleep', 'nutrition', 'symptom flares'],
    ask: 'Could my gut symptoms be driving the fatigue?',
  },
}

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
