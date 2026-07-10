export type NameNoNameStateId =
  | 'symptoms-no-name'
  | 'told-normal'
  | 'diagnosis-doesnt-fit'
  | 'diagnosed'

export interface NameNoNameState {
  id: NameNoNameStateId
  label: string
  option: string
  title: string
  description: string
  cta: string
  emotion: string
  helps: readonly string[]
  chips: readonly string[]
  feelLike: readonly string[]
  flipHelps: readonly string[]
  /** Swap in final character art when ready */
  image: string
}

export const NAME_NO_NAME_STATES: readonly NameNoNameState[] = [
  {
    id: 'symptoms-no-name',
    label: 'SYMPTOMS, NO NAME YET',
    option: 'I have symptoms but no clear answer.',
    title: 'Symptoms, no clear answer yet',
    description: 'Capture the pattern before it has a name.',
    cta: 'Start with symptoms',
    emotion: 'Confused, searching, unsure',
    helps: [
      'Track symptoms as they happen',
      'Keep food, stool, sleep, and stress in one place',
      'Build a clearer story before your next visit',
    ],
    chips: ['Symptoms', 'Food', 'Stool', 'Sleep', 'Notes'],
    feelLike: ['You know something is off.', 'The pattern is hard to explain.'],
    flipHelps: [
      'Track symptoms as they happen',
      'Keep food, stool, sleep, and notes together',
      'Build a clearer story before your next visit',
    ],
    image: '/images/name-no-name/symptoms-no-name.png',
  },
  {
    id: 'told-normal',
    label: "TOLD IT'S NORMAL",
    option: "I've been told it's normal, but it keeps happening.",
    title: "Told it's normal, but it keeps happening",
    description: 'Keep a dated record of what keeps coming back.',
    cta: 'Build a clearer history',
    emotion: 'Frustrated, dismissed, tired',
    helps: [
      'Log repeated flares without starting from scratch',
      'See what keeps showing up over time',
      'Bring a dated history into appointments',
    ],
    chips: ['Flares', 'Dates', 'Patterns', 'Notes', 'Visit prep'],
    feelLike: [
      'It keeps coming back.',
      'You feel dismissed or unsure what to show.',
    ],
    flipHelps: [
      'Keep dated records of repeated flares',
      'See what keeps showing up over time',
      'Bring a clearer history into appointments',
    ],
    image: '/images/name-no-name/told-normal.png',
  },
  {
    id: 'diagnosis-doesnt-fit',
    label: "DIAGNOSIS DOESN'T FIT",
    option: "I have a diagnosis, but it doesn't explain everything.",
    title: "A diagnosis that doesn't quite fit",
    description: 'Keep your history intact while you revisit the story.',
    cta: 'Revisit the pattern',
    emotion: 'Uncertain, doubtful, questioning',
    helps: [
      'Compare symptoms, triggers, and test history',
      'Track treatment response over time',
      'Keep context together while you explore next steps',
    ],
    chips: ['Symptoms', 'Tests', 'Treatments', 'Triggers', 'Questions'],
    feelLike: [
      'The label does not explain the whole story.',
      'Your symptoms still do not line up.',
    ],
    flipHelps: [
      'Compare symptoms, triggers, and test history',
      'Track treatment response',
      'Keep context together while you revisit the pattern',
    ],
    image: '/images/name-no-name/diagnosis-doesnt-fit.png',
  },
  {
    id: 'diagnosed',
    label: 'DIAGNOSED',
    option: 'I know the diagnosis, but managing it is still hard.',
    title: 'A name, but still a long journey',
    description: "Track triggers, flares, and what's working — day to day.",
    cta: 'Track life with a diagnosis',
    emotion: 'Calmer, supported, grounded',
    helps: [
      'Track what changes between visits',
      'Notice routines, triggers, and treatment response',
      'Prepare better follow-ups with your care team',
    ],
    chips: ['IBS', 'IBD', 'Celiac', 'GERD', 'SIBO', 'Gastroparesis'],
    feelLike: [
      'The name helps, but daily life is still work.',
      'You still manage flares, triggers, and routines.',
    ],
    flipHelps: [
      'Track what changes between visits',
      'Notice routines, triggers, and treatment response',
      'Prepare better follow-ups',
    ],
    image: '/images/name-no-name/diagnosed.png',
  },
] as const

export const NAME_NO_NAME_DEFAULT_ID: NameNoNameStateId = 'symptoms-no-name'
