export type SystemFlywheelStageId = 'track' | 'care' | 'navigate' | 'understand'

export type SystemFlywheelAccent = 'coral' | 'teal' | 'lavender' | 'ochre'

export interface SystemFlywheelStage {
  id: SystemFlywheelStageId
  label: string
  shortLabel: string
  stageLabel: string
  headline: string
  description: string
  outcome: string
  signals: readonly string[]
  feedsLabel: string
  feedsCopy: string
  accent: SystemFlywheelAccent
  color: string
}

export const SYSTEM_FLYWHEEL_STAGES: readonly SystemFlywheelStage[] = [
  {
    id: 'track',
    label: 'Track',
    shortLabel: 'your logs',
    stageLabel: 'Track · your logs',
    headline: 'Start with what happened.',
    description:
      'Log symptoms, food, sleep, and stress in seconds—designed for the days when energy and attention are already low.',
    outcome: 'A reliable record of your real day, not a reconstructed memory.',
    signals: ['Symptoms', 'Meals', 'Sleep', 'Stress', 'Medication', 'Stool changes'],
    feedsLabel: 'Feeds Care',
    feedsCopy: 'What you log shapes the support, routines, and suggestions you receive next.',
    accent: 'coral',
    color: '#EF5350',
  },
  {
    id: 'care',
    label: 'Care',
    shortLabel: 'how you respond',
    stageLabel: 'Care · how you respond',
    headline: 'Support that reacts to today.',
    description:
      'Build gentle, responsive self-care around what you logged—not a generic checklist that ignores the day you are actually having.',
    outcome:
      'A practical response for the current moment, with routines and habits that become easier to sustain over time.',
    signals: ['Daily routines', 'Self-care', 'Habits', 'Flare support', 'Nutrition', 'Rest'],
    feedsLabel: 'Feeds Navigate',
    feedsCopy:
      'How you respond helps show when self-care is enough, what is changing, and when it may be time to involve care.',
    accent: 'teal',
    color: '#6E9F8A',
  },
  {
    id: 'navigate',
    label: 'Navigate',
    shortLabel: 'when to act',
    stageLabel: 'Navigate · when to act',
    headline: 'Know what comes next.',
    description:
      'Know when it is worth seeing someone, who may be useful to see, and how to prepare so the conversation begins with context.',
    outcome: 'A clearer next step and a visit that starts from evidence instead of another retelling.',
    signals: [
      'When to seek care',
      'Who to see',
      'Visit preparation',
      'Care summary',
      'Questions',
      'Test follow-up',
    ],
    feedsLabel: 'Feeds Understand',
    feedsCopy:
      'Your history, care response, tests, and clinician conversations become evidence for clearer patterns and better questions.',
    accent: 'lavender',
    color: '#7E6CB5',
  },
  {
    id: 'understand',
    label: 'Understand',
    shortLabel: 'the evidence',
    stageLabel: 'Understand · the evidence',
    headline: 'Turn repetition into clarity.',
    description:
      'Patterns become appointment-ready evidence and the questions worth asking your doctor—so the next decision reflects more than one isolated day.',
    outcome:
      'A connected explanation of what changed, what helped, what did not, and what deserves attention.',
    signals: [
      'Patterns',
      'Treatment response',
      'Visit summary',
      'Changes over time',
      'Better questions',
      'Personal triggers',
    ],
    feedsLabel: 'Feeds Track again',
    feedsCopy:
      'Every new insight sharpens what is worth noticing, recording, and acting on during the next cycle.',
    accent: 'ochre',
    color: '#C58A35',
  },
] as const

export const SYSTEM_FLYWHEEL_DEFAULT_ID: SystemFlywheelStageId = 'track'

export const SYSTEM_FLYWHEEL_PERSPECTIVES = [
  'Gastroenterology',
  'Nutrition',
  'Mental health',
  'Whole-person care',
] as const

export const SYSTEM_FLYWHEEL_COPY = {
  eyebrow: 'One connected system',
  headline: 'An operating system for your gut',
  supporting: 'Not another app. The system that runs the whole journey.',
  coreEyebrow: 'One context',
  coreHeadline: 'It compounds',
  coreSupport: 'Every pass makes the next one more personal.',
  multidisciplinaryHeading: 'Same context',
  closingNote:
    'Not an isolated tracker · not telehealth · not a test kit — the thread that connects them, for as long as you need it.',
  loopNote: 'what you learn loops back into how you track and care',
} as const

export function getNextStageId(id: SystemFlywheelStageId): SystemFlywheelStageId {
  const index = SYSTEM_FLYWHEEL_STAGES.findIndex((stage) => stage.id === id)
  const next = SYSTEM_FLYWHEEL_STAGES[(index + 1) % SYSTEM_FLYWHEEL_STAGES.length]
  return next.id
}

export function getPrevStageId(id: SystemFlywheelStageId): SystemFlywheelStageId {
  const index = SYSTEM_FLYWHEEL_STAGES.findIndex((stage) => stage.id === id)
  const prev =
    SYSTEM_FLYWHEEL_STAGES[(index - 1 + SYSTEM_FLYWHEEL_STAGES.length) % SYSTEM_FLYWHEEL_STAGES.length]
  return prev.id
}
