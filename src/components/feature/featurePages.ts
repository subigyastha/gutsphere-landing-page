import type { FaqItem } from '../marketing/FaqAccordion'

export interface FeatureCapability {
  title: string
  body: string
}

export interface FeaturePageData {
  slug: string
  label: string
  eyebrow: string
  title: string
  lead: string
  outcomes: readonly { title: string; body: string }[]
  capabilities: readonly FeatureCapability[]
  systemFit: readonly string[]
  faqs: readonly FaqItem[]
  relatedSlugs?: readonly string[]
  ctaTitle: string
}

export const FEATURE_PAGES: Record<string, FeaturePageData> = {
  trackers: {
    slug: 'trackers',
    label: 'Trackers',
    eyebrow: 'Feature · Trackers',
    title: 'Log the day in seconds — built for low-energy gut days.',
    lead: 'Symptoms, meals, sleep, stress, and meds in one calm place. No streak guilt. Just a record that compounds into patterns you can actually use.',
    outcomes: [
      {
        title: 'Capture what matters without the chore',
        body: 'Quick check-ins when energy is low. Deeper detail when you have it. Missed days do not break anything.',
      },
      {
        title: 'One timeline instead of scattered notes',
        body: 'Bowel, food, sleep, mood, and meds sit together — so you stop reconstructing the week from memory.',
      },
      {
        title: 'Feeds the rest of the system',
        body: 'What you track shapes guidance, visit prep, and insights. Logging is the foundation, not the whole product.',
      },
    ],
    capabilities: [
      {
        title: 'Daily gut check-in',
        body: 'Quick or detailed — designed for flare days when a long form is the last thing you need.',
      },
      {
        title: 'Symptom & bowel tracking',
        body: 'Severity, duration, consistency, urgency, and flare context in one flow.',
      },
      {
        title: 'Food, sleep & lifestyle',
        body: 'Meals, rest, hydration, movement, stress, and mood linked to how your gut felt.',
      },
      {
        title: 'Medication & supplements',
        body: 'Doses and adherence next to symptoms — so response over time is visible, not guessed.',
      },
    ],
    systemFit: [
      'Logs become the input for Copilot guidance on hard days',
      'Patterns surface in Insights without a separate spreadsheet',
      'Visit prep pulls from the same history you already kept',
    ],
    faqs: [
      {
        q: 'Do I have to track every day?',
        a: 'No. Light, sustainable logging is enough. Consistency beats perfection — nothing breaks if you miss a day.',
      },
      {
        q: 'Is this just another symptom diary?',
        a: 'Tracking is one pillar. Gutsphere also connects your logs to guidance, patterns, and appointment-ready context.',
      },
      {
        q: 'What should I start with?',
        a: 'Start with bowel and symptom severity, then add meals or stress on rough days. You can deepen later without starting over.',
      },
      {
        q: 'Can I track without a diagnosis?',
        a: 'Yes. Tracking works whether you are still figuring it out or already managing a named condition.',
      },
    ],
    relatedSlugs: ['insights', 'guidance', 'care'],
    ctaTitle: 'Start tracking without the guilt.',
  },
  insights: {
    slug: 'insights',
    label: 'Insights',
    eyebrow: 'Feature · Insights',
    title: 'See the pattern — not just another chart.',
    lead: 'Your logs turn into a connected timeline: what repeats, what changed, and what is worth bringing to a clinician. Clarity without spreadsheet homework.',
    outcomes: [
      {
        title: 'Spot repeats across weeks',
        body: 'Food, sleep, stress, and meds linked to symptom days — so “maybe dairy” becomes something you can check.',
      },
      {
        title: 'One flare, start to finish',
        body: 'A connected timeline of what happened before, during, and after — useful for you and for visits.',
      },
      {
        title: 'History that compounds',
        body: 'Trends and treatment response over time, not a forgotten PDF or a chat you cannot find.',
      },
    ],
    capabilities: [
      {
        title: 'Connected timeline',
        body: 'Follow one flare from first signal through recovery — with context, not isolated entries.',
      },
      {
        title: 'Pattern & weekly highlights',
        body: 'See what repeats across weeks and what stood out in recent tracking.',
      },
      {
        title: 'Symptom connections',
        body: 'Food, sleep, stress, and meds linked so correlations are easier to notice.',
      },
      {
        title: 'Trends & treatment insights',
        body: 'Bowel, nutrition, lifestyle, and adherence over time — including how you responded.',
      },
    ],
    systemFit: [
      'Insights only work because Trackers keep a continuous record',
      'Patterns inform Copilot suggestions without generic advice dumps',
      'Timelines and questions feed Care / visit prep',
    ],
    faqs: [
      {
        q: 'Will insights diagnose me?',
        a: 'No. Insights help you notice patterns and prepare better questions. Diagnosis belongs with a qualified clinician.',
      },
      {
        q: 'How much data do I need before insights appear?',
        a: 'Useful signals can show up with light logging over a couple of weeks. More consistent tracking makes patterns clearer — without requiring perfection.',
      },
      {
        q: 'Can I share insights with my doctor?',
        a: 'Yes. Use timelines and summaries in visit prep when you choose to share them. You control what leaves the app.',
      },
      {
        q: 'Is this the same as a microbiome report?',
        a: 'No. Insights are built from your ongoing day-to-day history — the living layer after a one-time test PDF.',
      },
    ],
    relatedSlugs: ['trackers', 'care', 'guidance'],
    ctaTitle: 'Turn logs into patterns you can act on.',
  },
  guidance: {
    slug: 'guidance',
    label: 'Copilot',
    eyebrow: 'Feature · Copilot',
    title: 'Calm support that reacts to your day — not a generic checklist.',
    lead: 'GI Copilot is the guidance layer: flare-day support, gentle habits, and answers grounded in what you logged — without replacing your clinician.',
    outcomes: [
      {
        title: 'Help when energy is low',
        body: 'Open the app and get something useful for today — a tip, a small action, or flare-day orientation.',
      },
      {
        title: 'Guidance tied to your history',
        body: 'Suggestions stay accountable to what you tracked, instead of a blank chat that forgets you tomorrow.',
      },
      {
        title: 'No streak pressure',
        body: 'Gentle reminders and habits that respect hard days. Support without guilt.',
      },
    ],
    capabilities: [
      {
        title: 'GI Copilot',
        body: 'Day-to-day support based on your symptoms and routines — available when you need it.',
      },
      {
        title: 'Flare-day & self-care guidance',
        body: 'What to try first, what to watch, and calmer routines when symptoms spike.',
      },
      {
        title: 'Personalized habits',
        body: 'Small actions shaped by your data — not a one-size-fits-all wellness plan.',
      },
      {
        title: 'Food & product checks',
        body: 'Quick “can I eat this?” / “should I buy this?” style checks in context of your journey.',
      },
    ],
    systemFit: [
      'Copilot reads from Trackers so advice is not generic',
      'Hard days still contribute to Insights over time',
      'When it is time to see someone, Care helps you prepare',
    ],
    faqs: [
      {
        q: 'Is Copilot medical advice?',
        a: 'No. Gutsphere does not diagnose or replace clinical care. Copilot helps you organize experience and stay oriented between visits.',
      },
      {
        q: 'How is this different from ChatGPT?',
        a: 'General AI chat starts over unless you paste context. Copilot is built around your ongoing gut history and the rest of the Gutsphere system.',
      },
      {
        q: 'What if I am having a bad flare?',
        a: 'Use flare-day support for orientation, keep logging lightly if you can, and follow red-flag guidance when symptoms need urgent care. Copilot does not replace emergency services.',
      },
      {
        q: 'Do I need Premium for Copilot?',
        a: 'Core support is part of the product experience. Advanced analytics or deeper features may sit on paid plans — start free and see what fits.',
      },
    ],
    relatedSlugs: ['trackers', 'insights', 'care'],
    ctaTitle: 'Get support that knows your gut story.',
  },
  care: {
    slug: 'care',
    label: 'Care',
    eyebrow: 'Feature · Care',
    title: 'Walk into appointments with a timeline — not a fuzzy recap.',
    lead: 'Visit prep, doctor-ready summaries, questions from your history, and a place for labs — so clinicians see the story you lived between visits.',
    outcomes: [
      {
        title: 'Appointment-ready in minutes',
        body: 'Plans for visits and follow-ups, plus summaries built from what you already tracked.',
      },
      {
        title: 'Better questions, less blanking',
        body: 'Prompts shaped by your history so the visit covers what actually mattered this month.',
      },
      {
        title: 'Your record across providers',
        body: 'Keep context when you change clinics or specialists — instead of starting from zero in every portal.',
      },
    ],
    capabilities: [
      {
        title: 'Visit prep plans',
        body: 'Appointments, specialists, and follow-ups with a clear checklist of what to bring.',
      },
      {
        title: 'Procedure prep',
        body: 'Colonoscopy and endoscopy prep steps — diet, timing, and day-before orientation.',
      },
      {
        title: 'Doctor-ready summary & questions',
        body: 'A timeline instead of memory, plus questions generated from your own history.',
      },
      {
        title: 'Labs, sharing & red flags',
        body: 'Test results in one place, export-ready summaries when you choose to share, and guidance on when to seek urgent care.',
      },
    ],
    systemFit: [
      'Care is strongest when Trackers and Insights already hold your history',
      'Copilot helps between visits; Care helps you show up prepared',
      'Sharing is always your choice — nothing leaves without you',
    ],
    faqs: [
      {
        q: 'Does Gutsphere replace my doctor?',
        a: 'No. Care is built to complement clinicians — better prep and clearer history, not diagnosis or prescriptions.',
      },
      {
        q: 'Can my clinician see my data automatically?',
        a: 'Only what you choose to share. Export-ready summaries and visit materials stay under your control.',
      },
      {
        q: 'What if I change doctors?',
        a: 'Your journey stays with you, so you are not rebuilding the story from scratch in a new portal.',
      },
      {
        q: 'Does Care include telehealth visits?',
        a: 'Gutsphere is the daily layer between visits. Use your clinician or telehealth for medical decisions; use Care to arrive prepared.',
      },
    ],
    relatedSlugs: ['trackers', 'insights', 'guidance'],
    ctaTitle: 'Bring a clearer story to your next visit.',
  },
}

export function getFeaturePage(slug: string | undefined): FeaturePageData | undefined {
  if (!slug) return undefined
  return FEATURE_PAGES[slug]
}

export const FEATURE_PAGE_LIST = Object.values(FEATURE_PAGES)
