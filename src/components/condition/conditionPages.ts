import type { FaqItem } from '../marketing/FaqAccordion'

export interface ConditionPageData {
  slug: string
  kind: 'condition' | 'symptom'
  label: string
  eyebrow: string
  title: string
  lead: string
  outcomes: readonly { title: string; body: string }[]
  howItHelps: readonly string[]
  faqs: readonly FaqItem[]
  relatedSlugs?: readonly string[]
}

export const CONDITION_PAGES: Record<string, ConditionPageData> = {
  ibs: {
    slug: 'ibs',
    kind: 'condition',
    label: 'IBS',
    eyebrow: 'Condition · IBS',
    title: 'Track IBS patterns without guessing from memory.',
    lead: 'Symptoms shift day to day. Gutsphere helps you connect food, stress, sleep, and stool changes — so appointments start with evidence, not a fuzzy recap.',
    outcomes: [
      {
        title: 'See what actually moves the needle',
        body: 'Log flares, meals, and routines in seconds. Spot repeats across weeks instead of relying on recall.',
      },
      {
        title: 'Walk in appointment-ready',
        body: 'Bring a timeline of symptoms and triggers so your clinician sees the full picture faster.',
      },
      {
        title: 'Support between visits',
        body: 'Calm, data-aware guidance on hard days — without replacing your doctor or promising a cure.',
      },
    ],
    howItHelps: [
      'Track bowel changes, bloating, pain, and meal reactions in one place',
      'Link stress and sleep to symptom days',
      'Prepare questions from your own history',
      'Keep your story if your diagnosis or plan changes',
    ],
    faqs: [
      {
        q: 'Can I use Gutsphere if I have IBS?',
        a: 'Yes. Gutsphere is built for day-to-day IBS management — tracking symptoms, noticing triggers, and preparing for visits. It works whether your symptoms are constipation-leaning, diarrhea-leaning, or mixed.',
      },
      {
        q: 'Does Gutsphere diagnose IBS?',
        a: 'No. Diagnosis belongs with a qualified clinician. Gutsphere helps you organize what you experience so care conversations are clearer.',
      },
      {
        q: 'Will this replace my dietitian or GI plan?',
        a: 'No. Use it alongside your care plan. Many people use Gutsphere to see how diet changes, meds, and routines show up in their daily symptoms.',
      },
      {
        q: 'What should I track for IBS?',
        a: 'Start light: bowel movements, symptom severity, meals that matter, and stress or sleep on rough days. Consistency beats perfection — nothing breaks if you miss a day.',
      },
      {
        q: 'Does Gutsphere diagnose or treat IBS?',
        a: 'No. Gutsphere does not diagnose or treat conditions. It helps you track, prepare, and stay organized alongside your care team.',
      },
    ],
    relatedSlugs: ['bloating', 'constipation', 'diarrhea'],
  },
  ibd: {
    slug: 'ibd',
    kind: 'condition',
    label: 'IBD',
    eyebrow: 'Condition · IBD',
    title: "Keep Crohn's and UC history clear between specialist visits.",
    lead: 'Flares, meds, and stool changes pile up fast. Gutsphere holds one continuous record so you and your care team can see what changed — and when.',
    outcomes: [
      {
        title: 'Log flares without rebuilding the story',
        body: 'Capture stool changes, pain, energy, and medications in a timeline you can revisit.',
      },
      {
        title: 'Show up prepared for specialists',
        body: 'Export-ready summaries help visits focus on decisions, not reconstructing the last three months from memory.',
      },
      {
        title: 'Stay oriented between appointments',
        body: 'Notice early shifts and keep context handy when something feels off.',
      },
    ],
    howItHelps: [
      'Track flares, stool patterns, and medication adherence',
      'Note labs and visit follow-ups in one place',
      'Prepare focused questions for your GI team',
      'Keep history that compounds over months and years',
    ],
    faqs: [
      {
        q: 'Is Gutsphere for Crohn’s and ulcerative colitis?',
        a: 'Yes. Gutsphere supports people living with IBD by helping track flares, symptoms, and treatment response between visits. It does not replace specialist care.',
      },
      {
        q: 'Can I track medications and flares together?',
        a: 'Yes. Logging meds alongside symptoms helps you and your clinician see patterns over time — without promising that the app interprets treatment for you.',
      },
      {
        q: 'Does this replace my IBD clinic?',
        a: 'No. Gutsphere is a companion for daily life and visit prep. Urgent symptoms still need clinical care.',
      },
      {
        q: 'What if my plan changes?',
        a: 'Your history stays with you. New meds, diets, or routines can be logged without starting over.',
      },
    ],
    relatedSlugs: ['diarrhea', 'bloating', 'ibs'],
  },
  gerd: {
    slug: 'gerd',
    kind: 'condition',
    label: 'GERD',
    eyebrow: 'Condition · GERD',
    title: 'Connect reflux to meals, timing, and sleep — not guesswork.',
    lead: 'Heartburn and reflux often have patterns. Gutsphere helps you track what you ate, when symptoms hit, and what you tried — so follow-ups are specific.',
    outcomes: [
      {
        title: 'Spot meal and timing patterns',
        body: 'Log reflux alongside meals and sleep to see what tends to make nights worse.',
      },
      {
        title: 'Ask better follow-up questions',
        body: 'Bring a clearer history of frequency, severity, and triggers to your clinician.',
      },
      {
        title: 'Stay consistent without guilt',
        body: 'Light tracking still helps. Miss a day and pick back up — no streaks, no penalties.',
      },
    ],
    howItHelps: [
      'Track reflux, heartburn, meals, and timing',
      'Note sleep position and late-night patterns',
      'Prepare visit summaries from your logs',
      'Use alongside — not instead of — medical care',
    ],
    faqs: [
      {
        q: 'Can Gutsphere help with GERD or reflux?',
        a: 'It can help you track reflux symptoms, meals, and timing so patterns are easier to discuss with your clinician. It does not diagnose GERD or prescribe treatment.',
      },
      {
        q: 'What should I log for reflux?',
        a: 'Symptom timing and severity, meals that matter, sleep, and anything you already do for relief. Start simple and add detail only when it helps.',
      },
      {
        q: 'Is this a substitute for seeing a doctor about reflux?',
        a: 'No. Persistent, worsening, or concerning symptoms need clinical evaluation. Gutsphere supports the record-keeping and visit-prep side.',
      },
    ],
    relatedSlugs: ['bloating', 'ibs'],
  },
  constipation: {
    slug: 'constipation',
    kind: 'symptom',
    label: 'Constipation',
    eyebrow: 'Symptom · Constipation',
    title: 'Understand what helps you go — with a record you can trust.',
    lead: 'Hard stools and straining are easier to discuss when you can show stool type, hydration, meals, and routines over time — not just “it’s been bad lately.”',
    outcomes: [
      {
        title: 'Log stool and habits without shame',
        body: 'Track Bristol-style consistency, urgency, hydration, and fiber-related meals in a calm, private space.',
      },
      {
        title: 'Notice what actually helps',
        body: 'See how movement, fluids, and routines show up across days — so you stop guessing from memory.',
      },
      {
        title: 'Bring clarity to care visits',
        body: 'Share a timeline instead of reconstructing weeks of bathroom history on the spot.',
      },
    ],
    howItHelps: [
      'Log stool type, straining, and frequency',
      'Connect hydration, meals, and movement',
      'Prepare questions for your care team',
      'Keep history if symptoms shift or a diagnosis arrives later',
    ],
    faqs: [
      {
        q: 'How does Gutsphere help with constipation?',
        a: 'It helps you track stool patterns, hydration, diet, and related symptoms so you can spot what helps and bring a clearer history to appointments.',
      },
      {
        q: 'Do I need a diagnosis to start?',
        a: 'No. Many people start while still figuring things out. Nothing you track is lost if you later get a named condition.',
      },
      {
        q: 'Is Gutsphere medical advice for constipation?',
        a: 'No. It is a self-help companion for tracking and preparation. Seek clinical care for persistent or severe symptoms.',
      },
    ],
    relatedSlugs: ['bloating', 'ibs', 'diarrhea'],
  },
  bloating: {
    slug: 'bloating',
    kind: 'symptom',
    label: 'Bloating',
    eyebrow: 'Symptom · Bloating',
    title: 'Find bloating patterns across meals, stress, and sleep.',
    lead: 'Gas and distension often feel random until you see them on a timeline. Gutsphere helps you connect the dots without turning every meal into a project.',
    outcomes: [
      {
        title: 'Capture bloating in context',
        body: 'Log severity alongside meals, stress, and sleep so patterns can surface over weeks.',
      },
      {
        title: 'Reduce “was it that lunch?” guessing',
        body: 'A connected record beats scrolling through notes and memory after the fact.',
      },
      {
        title: 'Stay ready for care conversations',
        body: 'Bring specific examples — timing, frequency, and related factors — to your clinician or dietitian.',
      },
    ],
    howItHelps: [
      'Track bloating severity and timing',
      'Link meals, stress, and sleep',
      'Spot repeats without over-logging',
      'Export a clearer story for visits',
    ],
    faqs: [
      {
        q: 'Can I track bloating in Gutsphere?',
        a: 'Yes. Log bloating with related meals, stress, and sleep so you can see what tends to show up together over time.',
      },
      {
        q: 'Will Gutsphere tell me my food intolerances?',
        a: 'No. It helps you organize observations. Identifying intolerances or conditions belongs with qualified clinicians and appropriate testing.',
      },
      {
        q: 'How much do I need to track?',
        a: 'Light tracking is enough to start. Focus on days that feel different, then add detail only when it helps you or your care team.',
      },
    ],
    relatedSlugs: ['ibs', 'constipation', 'diarrhea'],
  },
  diarrhea: {
    slug: 'diarrhea',
    kind: 'symptom',
    label: 'Diarrhea',
    eyebrow: 'Symptom · Diarrhea',
    title: 'Keep urgency and loose-stool days documented — calmly.',
    lead: 'When symptoms are urgent, memory gets messy. Gutsphere helps you log frequency, consistency, and context so patterns and visit prep stay grounded.',
    outcomes: [
      {
        title: 'Log hard days without overthinking',
        body: 'Quick check-ins capture frequency, urgency, and related factors when energy is low.',
      },
      {
        title: 'See clusters and triggers over time',
        body: 'Connect meals, stress, meds, and sleep to days that escalate — without diagnosing yourself.',
      },
      {
        title: 'Arrive with evidence, not fog',
        body: 'A timeline helps clinicians understand severity and change between visits.',
      },
    ],
    howItHelps: [
      'Track frequency, urgency, and stool changes',
      'Note meals, stress, and medications',
      'Flag patterns worth discussing clinically',
      'Keep one history across flares and calm stretches',
    ],
    faqs: [
      {
        q: 'Is Gutsphere useful for diarrhea or urgency?',
        a: 'Yes for tracking and visit prep. Log frequency, urgency, and context so you can discuss changes clearly. Seek urgent care when symptoms are severe or concerning.',
      },
      {
        q: 'Does the app tell me when to go to the ER?',
        a: 'Gutsphere is not emergency care. Use clinical judgment and local urgent/emergency services for red-flag symptoms. The product can help you keep a record for follow-up.',
      },
      {
        q: 'Can I use this with IBS or IBD?',
        a: 'Yes. Symptom tracking works whether you have a diagnosis or are still finding answers.',
      },
    ],
    relatedSlugs: ['ibs', 'ibd', 'bloating'],
  },
}

export function getConditionPage(slug: string | undefined): ConditionPageData | undefined {
  if (!slug) return undefined
  return CONDITION_PAGES[slug]
}

export const CONDITION_PAGE_LIST = Object.values(CONDITION_PAGES)
