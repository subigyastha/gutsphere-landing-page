export interface WhoForAudience {
  id: string
  stage: string
  title: string
  tagline: string
  intro: string
  bullets: readonly [string, string, string, string]
  exploreLabel: string
  exploreHref: string
}

export const WHO_FOR_HERO = {
  eyebrow: 'Who is it for',
  title: 'For anyone navigating gut health — at every stage.',
  lead: 'Most tools pick one moment: a tracker, a telehealth visit, a test kit. Gutsphere is built for the whole journey — whether you have a diagnosis or not.',
  trust: 'Trusted by 2,341+ navigators',
} as const

export const WHO_FOR_AUDIENCES: readonly WhoForAudience[] = [
  {
    id: 'finding-answers',
    stage: 'Stage 1',
    title: 'Still finding answers',
    tagline: 'Symptoms without a clear name yet.',
    intro:
      'You are piecing together clues — tests, referrals, food logs — and still not sure anyone is seeing the full picture.',
    bullets: [
      'Track symptoms, food, sleep and stress in seconds — even on low-energy days',
      'Surface patterns you might miss when everything lives in your head',
      'Walk into appointments with a timeline, not a fuzzy story from memory',
      'No diagnosis required — start where you are',
    ],
    exploreLabel: 'Explore finding answers',
    exploreHref: '/for#finding-answers',
  },
  {
    id: 'in-treatment',
    stage: 'Stage 2',
    title: 'Newly diagnosed · in treatment',
    tagline: 'You have a plan — is it working?',
    intro:
      'Good days and bad days blur together. You need to know what is actually helping before the next specialist visit.',
    bullets: [
      'See how you respond to meds, diet changes and routines over weeks',
      'Separate real progress from noise in your symptom history',
      'Prepare focused questions for your care team with evidence in hand',
      'Works alongside IBS, IBD, celiac, GERD, SIBO and more',
    ],
    exploreLabel: 'Explore in treatment',
    exploreHref: '/for#in-treatment',
  },
  {
    id: 'living-with-it',
    stage: 'Stage 3',
    title: 'Living with it',
    tagline: 'Managing flares and triggers day to day.',
    intro:
      'Your gut does not pause for convenience. You need support that reacts to what you logged — not a generic checklist.',
    bullets: [
      'Catch triggers early before a rough day becomes a rough week',
      'Get calm, responsive guidance on hard days — not guilt or streaks',
      'Keep one connected story across food, symptoms, sleep and stress',
      'Built for the reality of unpredictable flares',
    ],
    exploreLabel: 'Explore living with it',
    exploreHref: '/for#living-with-it',
  },
  {
    id: 'staying-ahead',
    stage: 'Stage 4',
    title: 'Staying ahead',
    tagline: 'Prevention, monitoring, the long game.',
    intro:
      'Diagnosis is not the finish line. You want to prevent the next flare and build a gut that supports the life you want.',
    bullets: [
      'Hold your full history in one place that compounds over time',
      'Monitor trends and early signals before they become crises',
      'Stay appointment-ready without rebuilding your story each visit',
      'Your data stays yours — not tied to an employer or insurer',
    ],
    exploreLabel: 'Explore staying ahead',
    exploreHref: '/for#staying-ahead',
  },
] as const

export const WHO_FOR_ALSO = {
  title: 'Also a fit if you…',
  items: [
    'Tried symptom trackers that never connected to care',
    'Use ChatGPT for gut questions but want answers tied to your data',
    'Juggle notes, apps and emails before every doctor visit',
    'Need something that works on web, iOS or Android',
    'Want support between visits — not a replacement for your doctor',
  ],
} as const

export const WHO_FOR_NOT = {
  title: 'Probably not for you if…',
  items: [
    'You need an urgent diagnosis or emergency care right now',
    'You want a one-time test kit or microbiome report',
    'You are looking for a cure promise or 30-day heal-your-gut program',
    'You only need a single-purpose tracker with no care or navigation',
  ],
} as const
