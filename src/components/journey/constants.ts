export type JourneyZone = 'departure' | 'climb' | 'pillars' | 'cruise' | 'landing'

export type JourneyIconKey =
  | 'turbulence'
  | 'fog'
  | 'compass'
  | 'lighthouse'
  | 'sun'
  | 'tower'
  | 'instruments'
  | 'checklist'
  | 'storm'
  | 'runway'

export interface JourneyStage {
  id: number
  name: string
  title: string
  text: string
  zone: JourneyZone
  zoneLabel: string
  metaphor: string
  icon: JourneyIconKey
  outcome: string
}

export const REEL_SECTION_COUNT = 13

export const COPILOT_ROUTE =
  'Self-Care → Clinical Navigation → Clinical Intelligence → Long-Term Gut Health'

export const JOURNEY_ZONES: Record<
  JourneyZone,
  { label: string; description: string }
> = {
  departure: {
    label: 'Departure',
    description: 'Scattered clues and confusion — where most journeys begin.',
  },
  climb: {
    label: 'Climb',
    description: 'From guessing alone to moving with a copilot.',
  },
  pillars: {
    label: 'Core capabilities',
    description: 'Self-care, clinical navigation, and clinical intelligence.',
  },
  cruise: {
    label: 'Cruise',
    description: 'Every stage of the digestive-health journey.',
  },
  landing: {
    label: 'Landing',
    description: 'One useful next step — long-term digestive health support.',
  },
}

export const JOURNEY_STAGES: readonly JourneyStage[] = [
  {
    id: 1,
    name: 'Boarding',
    title: 'Your digestive health copilot — before diagnosis, between visits, and beyond treatment.',
    text: 'Digestive symptoms are hard to navigate when every day brings different clues.',
    zone: 'departure',
    zoneLabel: 'Boarding',
    metaphor: 'Takeoff',
    icon: 'turbulence',
    outcome: 'Organize symptoms, stool changes, food reactions, flare-ups, and care questions in one journey.',
  },
  {
    id: 2,
    name: 'Investigation',
    title: 'Digestive health can feel like a full-time investigation.',
    text: 'You are trying to remember what you ate, when symptoms started, how your stool changed, whether stress or sleep played a role, what medication you took, what your test results said, and what to ask your doctor next.',
    zone: 'departure',
    zoneLabel: 'Problem',
    metaphor: 'Low visibility',
    icon: 'fog',
    outcome: 'The problem is not that you are not paying attention. The clues are scattered.',
  },
  {
    id: 3,
    name: 'Shift',
    title: 'From guessing alone to moving with a copilot.',
    text: 'Most tools stop at logging. GutSphere goes further — from scattered daily records to guided self-care, clearer clinical navigation, and deeper digestive-health intelligence over time.',
    zone: 'climb',
    zoneLabel: 'Shift',
    metaphor: 'Clearing skies',
    icon: 'compass',
    outcome: 'Tracking is the input. Guidance is the product.',
  },
  {
    id: 4,
    name: 'Self-Care',
    title: 'Self-care that starts with what happened today.',
    text: 'Digestive health changes in small daily moments: meals, stress, sleep, stool changes, medications, symptoms, movement, and routines.',
    zone: 'pillars',
    zoneLabel: 'Self-care',
    metaphor: 'Clear air',
    icon: 'sun',
    outcome: 'Your first check-in is the first signal.',
  },
  {
    id: 5,
    name: 'Clinical Navigation',
    title: 'Clinical navigation for the moments between “something is wrong” and “what should I do next?”',
    text: 'Digestive health care can be confusing when you are undiagnosed, waiting for appointments, trying new treatments, or managing changing symptoms.',
    zone: 'pillars',
    zoneLabel: 'Clinical navigation',
    metaphor: 'Lighthouse',
    icon: 'lighthouse',
    outcome: 'Less scattered memory. More useful context.',
  },
  {
    id: 6,
    name: 'Clinical Intelligence',
    title: 'Clinical intelligence built from your digestive-health journey.',
    text: 'GutSphere helps turn daily check-ins, flare-up notes, treatment changes, and care records into a more useful digestive-health picture over time.',
    zone: 'pillars',
    zoneLabel: 'Clinical intelligence',
    metaphor: 'Instruments',
    icon: 'instruments',
    outcome: 'From scattered clues to clearer clinical context.',
  },
  {
    id: 7,
    name: 'Compare',
    title: 'GutSphere is not another symptom tracker.',
    text: 'Most trackers record what happened. GutSphere helps you move through the digestive-health journey.',
    zone: 'climb',
    zoneLabel: 'Differentiation',
    metaphor: 'Route compare',
    icon: 'tower',
    outcome: 'Tracking is where GutSphere begins. Guidance is where it becomes useful.',
  },
  {
    id: 8,
    name: 'Founder',
    title: 'Built for people who are tired of explaining their gut story from memory.',
    text: 'Patients need more than a place to record symptoms. They need a guided system that helps them organize their journey, prepare for care, and stay supported between visits.',
    zone: 'cruise',
    zoneLabel: 'Trust',
    metaphor: 'Founder note',
    icon: 'checklist',
    outcome: 'Patient-sided. Medically responsible. Built for real digestive-health journeys.',
  },
  {
    id: 9,
    name: 'Moments',
    title: 'Built for every stage of the digestive-health journey.',
    text: 'Before diagnosis, between visits, during treatment, during flare-ups, and for long-term gut health.',
    zone: 'cruise',
    zoneLabel: 'Journey moments',
    metaphor: 'Waypoints',
    icon: 'storm',
    outcome: 'A copilot for the journey beyond one appointment.',
  },
  {
    id: 10,
    name: 'Daily Value',
    title: 'Every check-in should move you one step forward.',
    text: 'GutSphere is designed so daily tracking does not feel like empty data entry.',
    zone: 'landing',
    zoneLabel: 'Daily value',
    metaphor: 'Next step',
    icon: 'runway',
    outcome: 'Small check-ins. Clearer context. Better continuity between visits.',
  },
  {
    id: 11,
    name: 'Clarity',
    title: 'Ready for your first gut check-in?',
    text: 'Start with one simple check-in and begin building a clearer digestive-health journey.',
    zone: 'landing',
    zoneLabel: 'Clarity Point',
    metaphor: 'Landing',
    icon: 'runway',
    outcome: COPILOT_ROUTE,
  },
] as const

export const DIGESTIVE_SIGNALS = [
  'Bloating',
  'Reflux',
  'Constipation',
  'Diarrhea',
  'Stool changes',
  'Food reaction',
  'Stress',
  'Sleep',
  'Medication',
  'Test result',
  'Doctor question',
] as const

export interface PillarCapability {
  label: string
  detail: string
}

export const SELF_CARE_CAPABILITIES: readonly PillarCapability[] = [
  { label: 'Guided symptom logging', detail: 'Log digestive symptoms in a guided way' },
  {
    label: 'Stool & food signals',
    detail: 'Record stool changes, urgency, pain, reflux, bloating, and food reactions',
  },
  {
    label: 'Daily context',
    detail: 'Add meals, stress, sleep, movement, medications, supplements, and notes',
  },
  { label: 'Digestive timeline', detail: 'Build a daily digestive-health timeline' },
  { label: 'Review prompts', detail: 'Notice what may be worth reviewing next' },
] as const

export const CLINICAL_CARE_CAPABILITIES: readonly PillarCapability[] = [
  { label: 'Visit preparation', detail: 'Doctor-visit preparation and follow-up notes' },
  { label: 'Symptom timelines', detail: 'Organize symptom trends and flare-up history' },
  { label: 'Treatment & tests', detail: 'Medication, supplement, and test result records' },
  { label: 'Care questions', detail: 'Questions to ask your care team' },
] as const

export const CLINICAL_INTELLIGENCE_CAPABILITIES: readonly PillarCapability[] = [
  {
    label: 'Connected patterns',
    detail: 'Gut patterns across symptoms, food, stool, stress, sleep, and treatment',
  },
  { label: 'Flare-up context', detail: 'Context around flare-ups worth reviewing' },
  { label: 'Treatment response', detail: 'Treatment adherence and symptom response' },
  { label: 'Care-ready summaries', detail: 'Timeline summaries for care conversations' },
] as const

export const DEPARTURE_PAINS = [
  {
    title: 'Symptoms change day by day',
    text: 'Bloating one day, reflux the next — hard to explain the pattern.',
  },
  {
    title: 'Food reactions are hard to confirm',
    text: 'Was it the meal, timing, stress, or something else?',
  },
  {
    title: 'Stool changes are difficult to summarize',
    text: 'Constipation, diarrhea, urgency — scattered across memory.',
  },
] as const

export const SHIFT_PAIRS = [
  { from: 'I do not know what changed.', to: 'Here is what happened before this flare-up.' },
  {
    from: 'I forgot what to tell my doctor.',
    to: 'Here is my symptom timeline, stool pattern, treatment response, and questions.',
  },
  {
    from: 'I am tracking, but I do not know what it means.',
    to: 'I can review patterns and prepare my next step.',
  },
] as const

export interface JourneyMoment {
  title: string
  heading: string
  copy: string
}

export const JOURNEY_MOMENTS: readonly JourneyMoment[] = [
  {
    title: 'Before Diagnosis',
    heading: 'When you do not yet know what is going on.',
    copy: 'Organize symptoms, stool changes, food reactions, flare-ups, and daily context so your story becomes easier to explain.',
  },
  {
    title: 'Between Visits',
    heading: 'When your symptoms continue after the appointment ends.',
    copy: 'Keep track of what changed, what you tried, what got worse, and what needs follow-up.',
  },
  {
    title: 'During Treatment',
    heading: 'When you are trying to understand if the plan is helping.',
    copy: 'Track medication, supplements, lifestyle changes, adherence, symptoms, and flare-ups together.',
  },
  {
    title: 'During Flare-Ups',
    heading: 'When symptoms suddenly get worse.',
    copy: 'Look back at recent food, stress, sleep, stool changes, treatment, and notes to understand the context around the flare-up.',
  },
  {
    title: 'Long-Term Gut Health',
    heading: 'When you want to stay aware over time.',
    copy: 'Build a digestive-health timeline that supports follow-ups, care routines, and long-term digestive-health awareness.',
  },
] as const

/** Daily value cards — landing zone */
export const LANDING_VALUE_CARDS = [
  {
    label: 'Review',
    text: 'Review what changed before your last flare-up.',
  },
  {
    label: 'Prepare',
    text: 'Prepare questions for your next doctor visit.',
  },
  {
    label: 'Connect',
    text: 'Compare symptoms with sleep and stress from the past few days.',
  },
  {
    label: 'Summarize',
    text: 'Summarize recent stool changes and abdominal pain patterns.',
  },
  {
    label: 'Adherence',
    text: 'Review treatment adherence before your follow-up.',
  },
  {
    label: 'Update',
    text: 'Add your medication update to this week\'s timeline.',
  },
] as const

/** Normalized positions along straight route (0–1), top to bottom */
export const STAGE_PATH_POSITIONS: readonly { x: number; y: number }[] = [
  { x: 0.5, y: 0.04 },
  { x: 0.5, y: 0.13 },
  { x: 0.5, y: 0.22 },
  { x: 0.5, y: 0.31 },
  { x: 0.5, y: 0.40 },
  { x: 0.5, y: 0.49 },
  { x: 0.5, y: 0.58 },
  { x: 0.5, y: 0.67 },
  { x: 0.5, y: 0.76 },
  { x: 0.5, y: 0.85 },
  { x: 0.5, y: 0.94 },
]
