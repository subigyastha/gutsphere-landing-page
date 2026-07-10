import type { FaqItem } from '../marketing/FaqAccordion'
import { FAQ_ITEMS } from '../copilot-v2/ProofTrustFaq'

export interface FaqCategory {
  id: string
  label: string
  description: string
  items: readonly FaqItem[]
}

export const FAQ_CATEGORIES: readonly FaqCategory[] = [
  {
    id: 'product',
    label: 'Product & getting started',
    description: 'What Gutsphere is, how to begin, and what to expect day to day.',
    items: FAQ_ITEMS,
  },
  {
    id: 'care',
    label: 'Care & clinical use',
    description: 'How Gutsphere fits alongside doctors, dietitians, and treatment plans.',
    items: [
      {
        q: 'Can my doctor use what I track?',
        a: 'You decide what to share. Gutsphere helps you prepare timelines and summaries for visits — sharing is intentional, never automatic.',
      },
      {
        q: 'What if I do not have a diagnosis yet?',
        a: 'You can start without one. Gutsphere is built for the full journey — finding answers, treatment, living with it, and staying ahead.',
      },
      {
        q: 'Does Gutsphere replace my clinician?',
        a: 'No. It is a self-help companion for tracking, day-to-day support, and visit prep. Diagnosis and treatment stay with qualified professionals.',
      },
      {
        q: 'What about urgent or emergency symptoms?',
        a: 'Seek urgent or emergency care when symptoms are severe or concerning. Gutsphere is not an emergency service.',
      },
    ],
  },
  {
    id: 'privacy',
    label: 'Privacy & data',
    description: 'How your health story is handled.',
    items: [
      {
        q: 'Who can see my data?',
        a: 'Your health story is private by default. You choose what to log and what to export or share with a clinician or caregiver.',
      },
      {
        q: 'Is my data sold or used as feed content?',
        a: 'Your data is not treated like content for a social feed. Sharing is always intentional on your part.',
      },
      {
        q: 'Can I export or leave later?',
        a: 'You should be able to take your story with you. Paid plans are cancel-anytime; start free without a card.',
      },
    ],
  },
  {
    id: 'company',
    label: 'Company & mission',
    description: 'Why Gutsphere exists and how we think about GI care.',
    items: [
      {
        q: 'Why focus on GI?',
        a: 'Gastrointestinal health is foundational, often stigmatized, and hard to navigate. Gutsphere exists to make the journey clearer — from first confusing symptoms to long-term confidence.',
      },
      {
        q: 'What is a copilot in this context?',
        a: 'A supportive guide for your GI journey: personalized reminders, insights, and visit prep that complement clinical care — not a replacement for it.',
      },
      {
        q: 'Who built Gutsphere?',
        a: 'Gutsphere was founded by Bimal Maharjan, who has lived with GI challenges since infancy. Read the founder story on the About page.',
      },
    ],
  },
]

export const FAQ_TOPIC_LINKS = {
  conditions: [
    { slug: 'ibs', label: 'IBS', blurb: 'Changing symptoms, unclear triggers' },
    { slug: 'ibd', label: 'IBD', blurb: "Crohn's & ulcerative colitis" },
    { slug: 'gerd', label: 'GERD', blurb: 'Reflux & heartburn' },
  ],
  symptoms: [
    { slug: 'constipation', label: 'Constipation', blurb: 'Hard stools & straining' },
    { slug: 'bloating', label: 'Bloating', blurb: 'Gas & distension' },
    { slug: 'diarrhea', label: 'Diarrhea', blurb: 'Urgency & loose stools' },
  ],
} as const
