import type { FaqItem } from '../marketing/FaqAccordion'

export interface CompareRow {
  dimension: string
  them: string
  gutsphere: string
}

export interface CompareWinWhen {
  title: string
  body: string
}

export interface ComparePageData {
  slug: string
  competitor: string
  eyebrow: string
  title: string
  lead: string
  rows: readonly CompareRow[]
  winWhen: readonly CompareWinWhen[]
  faqs: readonly FaqItem[]
}

export const COMPARE_PAGES: Record<string, ComparePageData> = {
  'symptom-trackers': {
    slug: 'symptom-trackers',
    competitor: 'symptom trackers',
    eyebrow: 'Compare · Symptom trackers',
    title: 'Gutsphere vs symptom trackers',
    lead: 'Trackers collect data. Gutsphere connects tracking to care, navigation, and understanding — so the log becomes a story you can act on.',
    rows: [
      {
        dimension: 'What you get day to day',
        them: 'A growing pile of entries you still have to interpret alone',
        gutsphere: 'Tracking plus calm guidance tied to what you logged',
      },
      {
        dimension: 'Patterns',
        them: 'Charts without a clear next step',
        gutsphere: 'Patterns linked to food, sleep, stress, and visit prep',
      },
      {
        dimension: 'Appointments',
        them: 'You rebuild the story from memory or screenshots',
        gutsphere: 'Timeline-ready context for clinicians',
      },
      {
        dimension: 'Between visits',
        them: 'Silence until the next log reminder',
        gutsphere: 'Support on hard days without replacing your doctor',
      },
      {
        dimension: 'Scope',
        them: 'Often one job: log symptoms',
        gutsphere: 'Track, care, navigate, and understand in one system',
      },
    ],
    winWhen: [
      {
        title: 'A simple tracker may be enough if…',
        body: 'You only need a private diary and already have strong clinical support for interpreting it.',
      },
      {
        title: 'Choose Gutsphere if…',
        body: 'You want the log to connect to guidance, visit prep, and a continuous journey — not another siloed app.',
      },
    ],
    faqs: [
      {
        q: 'Is Gutsphere just another symptom tracker?',
        a: 'No. Tracking is one pillar. Gutsphere also helps with day-to-day care support, clinical navigation, and turning history into appointment-ready context.',
      },
      {
        q: 'Can I switch from a tracker I already use?',
        a: 'Yes. Start fresh in Gutsphere whenever you are ready. You do not need a perfect past history to begin.',
      },
      {
        q: 'Do I need to track every day?',
        a: 'No. Light, sustainable logging is enough. Missed days do not break anything.',
      },
    ],
  },
  'ai-chat': {
    slug: 'ai-chat',
    competitor: 'ChatGPT & AI chat',
    eyebrow: 'Compare · AI chat',
    title: 'Gutsphere vs ChatGPT & AI chat',
    lead: 'General AI chat answers questions. Gutsphere remembers your gut history and stays accountable to your data over time.',
    rows: [
      {
        dimension: 'Memory of you',
        them: 'Starts over unless you paste context every time',
        gutsphere: 'Built around your ongoing symptom and lifestyle history',
      },
      {
        dimension: 'Accountability',
        them: 'Opinions that can contradict each other across chats',
        gutsphere: 'Guidance grounded in what you actually logged',
      },
      {
        dimension: 'Visit prep',
        them: 'You still assemble the clinical story yourself',
        gutsphere: 'Timelines and questions shaped from your record',
      },
      {
        dimension: 'Purpose',
        them: 'General-purpose conversation',
        gutsphere: 'A GI-focused system for tracking, care, and navigation',
      },
    ],
    winWhen: [
      {
        title: 'AI chat may be enough if…',
        body: 'You want quick general explanations and already keep a separate, reliable health record.',
      },
      {
        title: 'Choose Gutsphere if…',
        body: 'You need answers and support that stay tied to your symptoms, meals, and journey — not a blank chat box.',
      },
    ],
    faqs: [
      {
        q: 'Does Gutsphere use AI?',
        a: 'Gutsphere can use AI to personalize guidance and summaries, but the product is built around your tracked history — not one-off chat threads.',
      },
      {
        q: 'Is this medical advice?',
        a: 'No. Gutsphere does not diagnose or replace clinical care. It helps you organize experience and prepare for conversations with professionals.',
      },
      {
        q: 'Can I still use ChatGPT alongside Gutsphere?',
        a: 'Yes. Many people use general AI for education and Gutsphere for the personal record and day-to-day system.',
      },
    ],
  },
  telehealth: {
    slug: 'telehealth',
    competitor: 'telehealth',
    eyebrow: 'Compare · Telehealth',
    title: 'Gutsphere vs telehealth visits',
    lead: 'Telehealth is episodic care. Gutsphere is the daily layer between visits — yours to keep, working with your clinicians rather than replacing them.',
    rows: [
      {
        dimension: 'Cadence',
        them: 'Scheduled visits, then you are on your own again',
        gutsphere: 'Daily support and tracking between appointments',
      },
      {
        dimension: 'Ownership',
        them: 'Often tied to an employer, insurer, or clinic portal',
        gutsphere: 'A record you keep across providers and plans',
      },
      {
        dimension: 'Visit quality',
        them: 'Depends on what you remember in the moment',
        gutsphere: 'Helps you arrive with a clearer timeline',
      },
      {
        dimension: 'Role',
        them: 'Clinical encounter',
        gutsphere: 'Self-care companion that complements clinical care',
      },
    ],
    winWhen: [
      {
        title: 'Telehealth is the right tool when…',
        body: 'You need a clinician to evaluate, diagnose, prescribe, or adjust treatment.',
      },
      {
        title: 'Add Gutsphere when…',
        body: 'You need continuity between visits — tracking, flare-day support, and better prep for the next appointment.',
      },
    ],
    faqs: [
      {
        q: 'Does Gutsphere replace telehealth?',
        a: 'No. It is designed to work alongside clinicians. Use telehealth or in-person care for medical decisions; use Gutsphere for the daily record and support layer.',
      },
      {
        q: 'Can my clinician use what I track?',
        a: 'You decide what to share. Gutsphere helps you prepare summaries and timelines for visits when you choose to bring them.',
      },
      {
        q: 'What if I change doctors?',
        a: 'Your history stays with you, so you are not starting from zero with every new portal.',
      },
    ],
  },
  'test-kits': {
    slug: 'test-kits',
    competitor: 'test kits',
    eyebrow: 'Compare · Test kits',
    title: 'Gutsphere vs microbiome & gut test kits',
    lead: 'A kit gives a snapshot. Gutsphere is a living system for the weeks and years after the PDF — when flares still happen at 2am.',
    rows: [
      {
        dimension: 'Time horizon',
        them: 'One-time or occasional report',
        gutsphere: 'Ongoing tracking and support that compounds',
      },
      {
        dimension: 'When symptoms hit',
        them: 'The report cannot respond in the moment',
        gutsphere: 'Guidance and logging when days get hard',
      },
      {
        dimension: 'Actionability',
        them: 'Insights that can sit unused without a daily system',
        gutsphere: 'A place to act on patterns over time',
      },
      {
        dimension: 'Best use',
        them: 'A data point in your broader care story',
        gutsphere: 'The continuous thread between tests and visits',
      },
    ],
    winWhen: [
      {
        title: 'A test kit can help if…',
        body: 'You and your clinician want a specific lab or microbiome snapshot as part of a care plan.',
      },
      {
        title: 'Choose Gutsphere if…',
        body: 'You need daily continuity — not only a report — to understand patterns and prepare for care.',
      },
    ],
    faqs: [
      {
        q: 'Does Gutsphere include a microbiome test?',
        a: 'Gutsphere is a software companion for tracking, guidance, and visit prep. It is not a lab kit. You can still use tests recommended by your clinician alongside it.',
      },
      {
        q: 'Can I log lab results in Gutsphere?',
        a: 'You can keep test context and history in your journey so results sit next to symptoms and routines — rather than in a forgotten email thread.',
      },
      {
        q: 'Which should I buy first?',
        a: 'If you need a daily system for symptoms and appointments, start with Gutsphere. Pursue kits when a clinician recommends them for your situation.',
      },
    ],
  },
}

export function getComparePage(slug: string | undefined): ComparePageData | undefined {
  if (!slug) return undefined
  return COMPARE_PAGES[slug]
}

export const COMPARE_PAGE_LIST = Object.values(COMPARE_PAGES)
