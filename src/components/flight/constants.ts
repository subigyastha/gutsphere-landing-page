export interface FlightZone {
  id: string
  index: number
  eyebrow: string
  heading: string
  supporting: string
  obstacles: readonly string[]
  hudMessage: string
  theme: FlightZoneTheme
}

export type FlightZoneTheme =
  | 'boarding'
  | 'turbulence'
  | 'fog'
  | 'storm'
  | 'sleep'
  | 'treatment'
  | 'flare'
  | 'copilot'
  | 'pattern'
  | 'care'
  | 'clarity'

export const FLIGHT_PRIMARY_CTA = 'Start Your Gut Check-In'
export const FLIGHT_SECONDARY_CTA = 'Explore the Journey'
export const FLIGHT_EXPLORE_AGAIN_CTA = 'Explore the Journey Again'

export const COPILOT_ROUTE =
  'Self-Care → Clinical Navigation → Clinical Intelligence → Long-Term Gut Health'

export const FLIGHT_ZONES: readonly FlightZone[] = [
  {
    id: 'boarding',
    index: 0,
    eyebrow: 'Welcome aboard',
    heading: 'Your digestive health copilot — before diagnosis, between visits, and beyond treatment.',
    supporting:
      'Digestive symptoms are hard to navigate when every day brings different clues. GutSphere helps you organize symptoms, stool changes, food reactions, flare-ups, treatment updates, test results, and doctor-visit questions into one guided digestive-health journey.',
    obstacles: [],
    hudMessage: COPILOT_ROUTE,
    theme: 'boarding',
  },
  {
    id: 'symptom-turbulence',
    index: 1,
    eyebrow: 'The problem',
    heading: 'Digestive health can feel like a full-time investigation.',
    supporting:
      'You are trying to remember what you ate, when symptoms started, how your stool changed, whether stress or sleep played a role, what medication you took, what your test results said, and what to ask your doctor next. The problem is not that you are not paying attention. The clues are scattered.',
    obstacles: ['Bloating', 'Reflux', 'Urgency', 'Pain', 'Stool changes', 'Fatigue'],
    hudMessage: 'GutSphere helps turn scattered digestive clues into a clearer journey.',
    theme: 'turbulence',
  },
  {
    id: 'food-fog',
    index: 2,
    eyebrow: 'The shift',
    heading: 'From guessing alone to moving with a copilot.',
    supporting:
      'Most tools stop at logging. GutSphere goes further. It helps you move from scattered daily records to guided self-care, clearer clinical navigation, and deeper digestive-health intelligence over time.',
    obstacles: ['Scattered logs', 'Unclear patterns', 'Forgotten context', 'Short visits', 'Guesswork'],
    hudMessage: 'Tracking is the input. Guidance is the product.',
    theme: 'fog',
  },
  {
    id: 'stress-storm',
    index: 3,
    eyebrow: 'Self-care',
    heading: 'Self-care that starts with what happened today.',
    supporting:
      'Digestive health changes in small daily moments: meals, stress, sleep, stool changes, medications, symptoms, movement, and routines. GutSphere helps you capture those signals without turning your life into a spreadsheet.',
    obstacles: ['Symptoms today', 'Bowel movement / stool changes', 'Food or reaction', 'Stress and sleep', 'Medication', 'Notes'],
    hudMessage: 'Your first check-in is the first signal.',
    theme: 'storm',
  },
  {
    id: 'sleep-drift',
    index: 4,
    eyebrow: 'Clinical navigation',
    heading:
      'Clinical navigation for the moments between “something is wrong” and “what should I do next?”',
    supporting:
      'When your appointment arrives, you should not have to explain weeks or months of symptoms from memory. GutSphere helps you prepare a clearer story: what changed, what you noticed, what you tried, and what you want to discuss next.',
    obstacles: ['Symptom timeline', 'Flare-up history', 'Treatment changes', 'Test results', 'Questions to discuss'],
    hudMessage: 'Less scattered memory. More useful context.',
    theme: 'sleep',
  },
  {
    id: 'treatment-gaps',
    index: 5,
    eyebrow: 'Clinical intelligence',
    heading: 'Clinical intelligence built from your digestive-health journey.',
    supporting:
      'GutSphere helps turn daily check-ins, flare-up notes, treatment changes, and care records into a more useful digestive-health picture over time — patterns worth reviewing, not self-diagnosing.',
    obstacles: [
      'Pattern review',
      'Flare-up context',
      'Treatment response',
      'Timeline summary',
      'Care-team ready',
    ],
    hudMessage: 'From scattered clues to clearer clinical context.',
    theme: 'treatment',
  },
  {
    id: 'flare-up',
    index: 6,
    eyebrow: 'Why GutSphere',
    heading: 'GutSphere is not another symptom tracker.',
    supporting:
      'Most trackers record what happened. GutSphere helps you move through the digestive-health journey: daily self-care, clinical navigation, treatment support, flare-up review, and long-term pattern understanding.',
    obstacles: ['Record symptoms', 'Store logs', 'Show dashboards', 'Track habits', 'End at data entry'],
    hudMessage: 'Tracking is where GutSphere begins. Guidance is where it becomes useful.',
    theme: 'flare',
  },
  {
    id: 'copilot',
    index: 7,
    eyebrow: 'Why we built this',
    heading: 'Built for people who are tired of explaining their gut story from memory.',
    supporting:
      'Digestive symptoms are personal, complex, and often difficult to summarize in a short appointment. GutSphere was built around a simple belief: patients need more than a place to record symptoms. They need a guided system that helps them organize their journey, prepare for care, and stay supported between visits.',
    obstacles: [],
    hudMessage:
      'We are building GutSphere to complement clinical care, not replace it.',
    theme: 'copilot',
  },
  {
    id: 'pattern-map',
    index: 8,
    eyebrow: 'Journey moments',
    heading: 'Built for every stage of the digestive-health journey.',
    supporting:
      'Before diagnosis, between visits, during treatment, during flare-ups, and for long-term gut health — GutSphere helps you stay oriented at each stage.',
    obstacles: [],
    hudMessage: COPILOT_ROUTE,
    theme: 'pattern',
  },
  {
    id: 'care-team',
    index: 9,
    eyebrow: 'Daily value',
    heading: 'Every check-in should move you one step forward.',
    supporting:
      'GutSphere is designed so daily tracking does not feel like empty data entry. Each check-in helps build a clearer digestive-health picture and points you toward what may be useful to review next.',
    obstacles: [],
    hudMessage: 'Small check-ins. Clearer context. Better continuity between visits.',
    theme: 'care',
  },
  {
    id: 'clarity-point',
    index: 10,
    eyebrow: 'Clarity Point',
    heading: 'Ready for your first gut check-in?',
    supporting:
      'Start with one simple check-in and begin building a clearer digestive-health journey — before diagnosis, between visits, and beyond treatment.',
    obstacles: [],
    hudMessage: COPILOT_ROUTE,
    theme: 'clarity',
  },
] as const

export const DASHBOARD_PANELS = [
  'Symptoms',
  'Food',
  'Stress',
  'Sleep',
  'Bowel movement',
  'Medication',
  'Treatment adherence',
  'Weekly insight',
] as const

export const PATTERN_FLOW_STEPS = [
  'Daily check-ins',
  'Timeline',
  'Pattern review',
  'Visit summary',
  'Treatment support',
] as const

export const CARE_REPORT_ITEMS = [
  'Recent symptom trend',
  'Stool-change summary',
  'Flare-up timeline',
  'Treatment changes',
  'Test results added',
  'Questions to discuss',
] as const
