export type DiscoveryIconKey =
  | 'compass'
  | 'fog'
  | 'route'
  | 'sun'
  | 'lighthouse'
  | 'instruments'
  | 'guides'
  | 'trust'
  | 'resources'
  | 'runway'

export interface DiscoveryStage {
  id: number
  name: string
  title: string
  text: string
  zoneLabel: string
  metaphor: string
  icon: DiscoveryIconKey
  outcome: string
}

export const DISCOVERY_ROUTE =
  'Check-In → Self Care → Clinical Navigation → Clinical Intelligence → Long-Term Gut Health'

export const DISCOVERY_STAGES: readonly DiscoveryStage[] = [
  {
    id: 1,
    name: 'Hero',
    title: 'Your copilot for digestive discovery.',
    text: 'For the questions that come before answers.',
    zoneLabel: 'Begin',
    metaphor: 'Takeoff',
    icon: 'compass',
    outcome: 'A guided way to start understanding your gut.',
  },
  {
    id: 2,
    name: 'Journey',
    title: 'Where are you in your digestive-health journey?',
    text: 'Choose what feels closest. GutSphere will show how it can help from there.',
    zoneLabel: 'Personalize',
    metaphor: 'Choose your path',
    icon: 'route',
    outcome: 'No diagnosis needed to begin.',
  },
  {
    id: 3,
    name: 'Problem',
    title: 'Digestive symptoms can feel like a full-time investigation.',
    text: 'The clues are scattered across memory, notes, and daily life.',
    zoneLabel: 'Problem',
    metaphor: 'Scattered clues',
    icon: 'fog',
    outcome: 'The problem is not that you are not paying attention.',
  },
  {
    id: 4,
    name: 'Shift',
    title: 'From scattered clues to guided digestive discovery.',
    text: 'Recording what happened is only the beginning.',
    zoneLabel: 'Shift',
    metaphor: 'Clearing skies',
    icon: 'route',
    outcome: 'Each check-in helps build your digestive-health story.',
  },
  {
    id: 5,
    name: 'Self-Care',
    title: 'Self-care starts with one guided gut check-in.',
    text: 'Capture what happened today and turn it into useful context.',
    zoneLabel: 'Self-care',
    metaphor: 'Today',
    icon: 'sun',
    outcome: 'Your first check-in is the first signal.',
  },
  {
    id: 6,
    name: 'Clinical Navigation',
    title: 'Your appointment should not depend only on memory.',
    text: 'Organize symptoms, flare-ups, treatment updates, and questions before your next visit.',
    zoneLabel: 'Clinical navigation',
    metaphor: 'Visit prep',
    icon: 'lighthouse',
    outcome: 'Less scattered memory. More useful context.',
  },
  {
    id: 7,
    name: 'Clinical Intelligence',
    title: 'Review patterns worth discussing.',
    text: 'Turn daily check-ins into timelines, trends, and summaries over time.',
    zoneLabel: 'Clinical intelligence',
    metaphor: 'Patterns',
    icon: 'instruments',
    outcome: 'Context to discuss with your care team.',
  },
  {
    id: 8,
    name: 'Guidance',
    title: 'Guidance that stays with you between visits.',
    text: 'Personalized support across self-care, clinical preparation, and pattern review.',
    zoneLabel: 'Guidance',
    metaphor: '24/7 support',
    icon: 'guides',
    outcome: 'Multidisciplinary guide perspectives.',
  },
  {
    id: 9,
    name: 'Trust',
    title: 'Built for people tired of explaining their gut story from memory.',
    text: 'Patients need more than scattered logs — they need a guided system.',
    zoneLabel: 'Trust',
    metaphor: 'Founder note',
    icon: 'trust',
    outcome: 'Patient-sided. Medically responsible.',
  },
  {
    id: 10,
    name: 'Resources',
    title: 'Resources for your digestive discovery are coming soon.',
    text: 'Practical guides for symptoms, visits, flare days, and tracking.',
    zoneLabel: 'Resources',
    metaphor: 'Learn',
    icon: 'resources',
    outcome: 'Explore while you begin.',
  },
  {
    id: 11,
    name: 'Begin',
    title: 'Begin with one gut check-in.',
    text: 'You do not need all the answers to begin.',
    zoneLabel: 'Clarity Point',
    metaphor: 'Landing',
    icon: 'runway',
    outcome: DISCOVERY_ROUTE,
  },
] as const

export interface JourneyOption {
  id: string
  title: string
  description: string
  message: string
  sectionId: string
}

export const JOURNEY_OPTIONS: readonly JourneyOption[] = [
  {
    id: 'understand',
    title: 'I\u2019m trying to understand my symptoms',
    description:
      'For bloating, reflux, pain, stool changes, food reactions, or flare-ups that do not make sense yet.',
    message:
      'Start with a guided check-in to capture today\u2019s symptoms and begin organizing your story.',
    sectionId: 'self-care',
  },
  {
    id: 'visit',
    title: 'I\u2019m preparing for a doctor visit',
    description:
      'Organize what happened, what changed, test results, and questions to discuss.',
    message:
      'GutSphere helps you build a visit-ready summary from your recent tracking and notes.',
    sectionId: 'clinical-navigation',
  },
  {
    id: 'flare',
    title: 'I\u2019m managing a flare-up',
    description:
      'Review recent food, stress, sleep, stool changes, treatment updates, and symptom context.',
    message:
      'Look back at recent signals to understand flare context and what may be worth reviewing.',
    sectionId: 'self-care',
  },
  {
    id: 'treatment',
    title: 'I\u2019m starting or changing treatment',
    description:
      'Track medication, supplements, adherence, lifestyle changes, and symptom response.',
    message:
      'Connect treatment updates with daily symptoms so you can review response over time.',
    sectionId: 'clinical-intelligence',
  },
  {
    id: 'longterm',
    title: 'I want long-term gut support',
    description:
      'Build routines, reminders, patterns, summaries, and care continuity over time.',
    message:
      'Small daily check-ins build a clearer digestive-health journey you can review anytime.',
    sectionId: 'guidance',
  },
] as const

export const SCATTERED_CLUES = [
  'Bloating',
  'Reflux',
  'Constipation',
  'Diarrhea',
  'Stool changes',
  'Food reactions',
  'Flare-ups',
  'Medication changes',
  'Stress',
  'Sleep',
  'Test results',
  'Doctor questions',
] as const

export const SHIFT_STEPS = [
  { label: 'Capture', detail: 'Start with symptoms, stool changes, food reactions, flare-ups, and treatment updates.' },
  { label: 'Connect', detail: 'See how daily signals may relate across food, stress, sleep, medication, and routines.' },
  { label: 'Prepare', detail: 'Turn your digestive-health story into clearer questions, summaries, and care conversations.' },
] as const

export const SHIFT_ROUTE = ['Check-In', 'Timeline', 'Patterns', 'Care Prep', 'Next Step'] as const

export const SELF_CARE_FEATURES = [
  { title: 'Today\u2019s Gut Check-In', detail: 'Log symptoms, stool changes, meals, stress, sleep, medication, supplements, and notes.' },
  { title: 'Personalized Daily Habits', detail: 'Get small, tailored actions based on your symptoms, routines, and recent health data.' },
  { title: 'Guided Routines', detail: 'Follow morning bowel routines, hydration support, meal timing, stress reduction, sleep wind-down, and gentle gut movement.' },
  { title: 'Flare Support', detail: 'Use flare-day guidance, what to try first, what to watch, and when to seek medical help.' },
  { title: 'Food & Product Checks', detail: 'Ask \u201cCan I eat this?\u201d or \u201cShould I buy this?\u201d and build personal food lists over time.' },
] as const

export const CLINICAL_NAV_FEATURES = [
  { title: 'Visit Prep Plans', detail: 'Prepare for appointments, new specialists, follow-ups, and procedures.' },
  { title: 'Questions for Your Doctor', detail: 'Generate and save care questions based on your symptoms, history, and concerns.' },
  { title: 'Doctor Summary', detail: 'Create a clear summary of recent tracking, flare-ups, treatment changes, and patterns.' },
  { title: 'Test Results', detail: 'Add and review labs, imaging, and reports in one place.' },
  { title: 'Procedure & Specialist Prep', detail: 'Prepare for colonoscopy, EGD, sigmoidoscopy, referrals, and specialist visits.' },
] as const

export const CLINICAL_INTEL_FEATURES = [
  { title: 'Weekly Patterns Feed', detail: 'AI highlights from your recent tracking.' },
  { title: 'Connections', detail: 'Explore how symptoms may relate to food, stool, stress, sleep, treatment, and routines.' },
  { title: 'Trends & History', detail: 'See how symptoms, bowel health, nutrition, and lifestyle foundations change over weeks and months.' },
  { title: 'Treatment Insights', detail: 'Review medications, adherence, treatment phases, and symptom response together.' },
  { title: 'Clinical Summary', detail: 'Create care-ready summaries from your digestive-health timeline.' },
  { title: 'Red-Flag Awareness', detail: 'Surface important concerns when relevant, with guidance to seek appropriate care.' },
] as const

export const PATTERN_INSIGHTS = [
  { text: 'Reflux appeared more often after late meals', label: 'Worth reviewing' },
  { text: 'Bloating increased on low-sleep days', label: 'Worth reviewing' },
  { text: 'Treatment adherence improved this week', label: 'Worth reviewing' },
  { text: 'Flare-up context ready to review', label: 'Context to discuss' },
] as const

export const GUIDE_CARDS = [
  { title: 'GI Copilot', detail: 'For symptoms, getting started, and routing you to the right support.' },
  { title: 'Self Care Guide', detail: 'For habits, routines, food checks, flare support, and experiments.' },
  { title: 'Clinical Navigation Guide', detail: 'For visit prep, test results, procedures, referrals, and doctor questions.' },
  { title: 'Patterns Guide', detail: 'For trends, correlations, weekly summaries, and what your data may be showing.' },
  { title: 'Clinical Care Guide', detail: 'For treatment tracking, medications, follow-up, and monitoring.' },
  { title: 'Specialist Perspectives', detail: 'Gastroenterology, nutrition, pelvic floor, gut-brain connection, pharmacy, and other relevant perspectives.' },
] as const

export const GUIDANCE_CHIPS = [
  '24/7 digestive-health support',
  'Personalized to your history',
  'Multidisciplinary perspectives',
  'Available in 11 languages',
  'Reminders for tracking, habits, medication, and visits',
] as const

export const RESOURCE_PLACEHOLDERS = [
  { title: 'Before Your First GI Visit', detail: 'What to track and bring to your appointment.' },
  { title: 'What to Notice During a Flare-Up', detail: 'Signals worth capturing when symptoms worsen.' },
  { title: 'How to Track Stool Changes', detail: 'A practical guide to organizing bowel health notes.' },
] as const

export const HERO_VALUE_CHIPS = [
  '24/7 support between visits',
  'Personalized to your symptoms and history',
  'Multidisciplinary digestive-health guidance',
] as const

export const TODAY_MOCK_ITEMS = [
  { label: 'Priority action', value: 'Complete today\u2019s gut check-in' },
  { label: 'Smart recap', value: 'Bloating noted after dinner yesterday' },
  { label: 'Guided check-in', value: 'Symptoms, stool, meals, stress' },
  { label: 'Habit suggestion', value: 'Try a 10-minute wind-down tonight' },
  { label: 'Flare support', value: 'What to watch today' },
] as const

export const VISIT_PREP_ITEMS = [
  'Recent symptoms',
  'Stool-change summary',
  'Flare-up timeline',
  'Treatment updates',
  'Test results added',
  'Questions to discuss',
] as const
