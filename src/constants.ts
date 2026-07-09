export const SIGNUP_URL = 'https://www.gutsphere.com/'
export const PRIMARY_CTA_LABEL = 'Start your gut health journey'
export const SECONDARY_CTA_LABEL = 'See how Gutsphere works'
export const NAVIGATOR_COUNT = '2,341+'
export const ABOUT_URL = 'https://www.gutsphere.com/about-us'
export const PRIVACY_URL = 'https://www.gutsphere.com/privacy'
export const CONTACT_URL = 'https://www.gutsphere.com/contact-us'

export type LandingVariant = 'style-1' | 'style-2' | 'style-3' | 'style-4' | 'style-5' | 'style-6' | 'style-7' | 'style-8' | 'style-9' | 'style-10' | 'style-11' | 'style-12' | 'style-13'

export function variantVersion(variant: LandingVariant): 'v1' | 'v2' {
  return variant === 'style-3' || variant === 'style-4' || variant === 'style-5' || variant === 'style-6' || variant === 'style-7' || variant === 'style-8' || variant === 'style-9' || variant === 'style-10' || variant === 'style-11' || variant === 'style-12' || variant === 'style-13'
    ? 'v2'
    : 'v1'
}

export function variantFamily(
  variant: LandingVariant,
): 'record' | 'navigators' | 'clarity' {
  if (variant === 'style-1') return 'record'
  if (variant === 'style-2') return 'navigators'
  return 'clarity'
}

export function conditionHubHref(variant?: LandingVariant): string {
  if (variant === 'style-4') return '/clarity-v4#conditions'
  return '/clarity-v2#conditions'
}

export const CONDITION_FROM_KEY = 'gutsphere:condition-from'

export function setConditionFrom(variant: 'style-3' | 'style-4') {
  sessionStorage.setItem(CONDITION_FROM_KEY, variant)
}

export function getConditionFrom(): 'style-3' | 'style-4' {
  const stored = sessionStorage.getItem(CONDITION_FROM_KEY)
  return stored === 'style-4' ? 'style-4' : 'style-3'
}

export interface Testimonial {
  quote: string
  name: string
  detail: string
  initials: string
}

/** Patient stories from gutsphere.com testimonial carousel */
export const testimonials: readonly Testimonial[] = [
  {
    quote:
      'The guidance wasn\u2019t just about symptoms\u2014it helped me monitor my whole life and truly take charge of my journey. It\u2019s more than support; it\u2019s a system that empowers me every day.',
    name: 'Sabina Azzahra',
    detail: 'IBD & constipation, 4 years',
    initials: 'SA',
  },
  {
    quote:
      'Using Gutsphere is easier. It has symptoms, bowel movements, hydration, sleep, and more. It helps me monitor what happened in my life each day.',
    name: 'Emily Jhonson',
    detail: 'IBS & chronic fatigue, 5 years',
    initials: 'EJ',
  },
  {
    quote:
      'I can log how long a symptom lasts. That\u2019s a really nice way to track what\u2019s happening to me that day.',
    name: 'Michael Thompson',
    detail: 'Crohn\u2019s & abdominal pain, 3 years',
    initials: 'MT',
  },
  {
    quote:
      'It helped me monitor my whole life, not just my symptoms\u2014stress, work, and financial pressure too.',
    name: 'Sarah Miller',
    detail: 'Managing IBD, 6 years',
    initials: 'SM',
  },
  {
    quote:
      'I used to think IBD was like GERD. But IBD is more than bowel movements\u2014it\u2019s bloating, constipation, sharp pains, and it\u2019s unpredictable.',
    name: 'David Anderson',
    detail: 'GERD & constipation, 4 years',
    initials: 'DA',
  },
  {
    quote:
      'Sometimes we need support and reassurance, not just reminders. Gutsphere meets me in hard moments with guidance, not guilt.',
    name: 'Jessica Roberts',
    detail: 'Ulcerative colitis & anxiety-linked gut issues, 7 years',
    initials: 'JR',
  },
  {
    quote:
      'Other apps make me tired just looking at the options. Gutsphere feels simple to fill.',
    name: 'Brian Carter',
    detail: 'Chronic gastritis & low energy, 2 years',
    initials: 'BC',
  },
  {
    quote:
      'It\u2019s already structured in the app, so I don\u2019t have to write everything out one by one.',
    name: 'Amanda Lewis',
    detail: 'Gut dysbiosis & constipation, 3 years',
    initials: 'AL',
  },
  {
    quote:
      'When I don\u2019t feel fine, I look back and notice what happened\u2014like coffee in the morning and bloating later. It even helps me track things like steps.',
    name: 'Christopher Hall',
    detail: 'SIBO flare-ups with diet & stress, 5 years',
    initials: 'CH',
  },
  {
    quote:
      'Before my doctor visit, I can tell my doctor what I\u2019ve been through. That\u2019s really helpful, and it helps doctors monitor my condition too.',
    name: 'Rachel Adams',
    detail: 'Diverticulitis & gut inflammation, 8 years',
    initials: 'RA',
  },
  {
    quote:
      'ChatGPT gives general answers. Gutsphere Copilot responds based on my symptoms that day.',
    name: 'Daniel White',
    detail: 'Leaky gut & unpredictable bowel movements, 6 years',
    initials: 'DW',
  },
  {
    quote:
      'I don\u2019t have to switch between a bunch of apps. I can track and get help in one place.',
    name: 'Susan Reeves',
    detail: 'Gut inflammation, 8 years',
    initials: 'SR',
  },
] as const

export const conditionHubConditions = [
  { slug: 'ibs', label: 'IBS', blurb: 'Changing symptoms, unclear triggers', icon: 'wave' },
  { slug: 'ibd', label: 'IBD', blurb: "Crohn\u2019s & ulcerative colitis", icon: 'shield' },
  { slug: 'gerd', label: 'GERD', blurb: 'Reflux & heartburn', icon: 'flame' },
] as const

export const conditionHubSymptoms = [
  { slug: 'constipation', label: 'Constipation', blurb: 'Hard stools & straining', icon: 'pause' },
  { slug: 'bloating', label: 'Bloating', blurb: 'Gas & distension', icon: 'circle' },
  { slug: 'diarrhea', label: 'Diarrhea', blurb: 'Urgency & loose stools', icon: 'bolt' },
] as const

export const conditionHub = [...conditionHubConditions, ...conditionHubSymptoms] as const

export const footerIntegrations = [
  'Apple Health',
  'Google Fit',
  'Oura & wearables',
  'Lab results import',
  'Clinician export (EHR)',
] as const

export const conditionStubs: Record<
  string,
  { label: string; bullets: [string, string, string] }
> = {
  ibs: {
    label: 'IBS',
    bullets: [
      'Track symptoms that change day to day',
      'Spot your personal food and stress triggers',
      'Bring a clear timeline to your doctor',
    ],
  },
  ibd: {
    label: 'IBD',
    bullets: [
      'Log flares, stool changes, and medications',
      'Prepare for specialist visits with summaries',
      'Monitor patterns between appointments',
    ],
  },
  gerd: {
    label: 'GERD',
    bullets: [
      'Track reflux, meals, and timing',
      'See what makes symptoms worse or better',
      'Ask better questions at follow-ups',
    ],
  },
  constipation: {
    label: 'Constipation',
    bullets: [
      'Log stool type, hydration, and diet',
      'Notice what helps you go more easily',
      'Share a clear history with your care team',
    ],
  },
  bloating: {
    label: 'Bloating',
    bullets: [
      'Connect meals, stress, and bloating',
      'Run simple food experiments',
      'Stop guessing what caused a bad day',
    ],
  },
  diarrhea: {
    label: 'Diarrhea',
    bullets: [
      'Track urgency, stool, and flare timing',
      'See patterns before appointments',
      'Know what to tell your doctor',
    ],
  },
}

export const NEWSLETTER_URL = 'https://newsletter.gutsphere.com/'
export const NEWSLETTER_ARCHIVE_URL = 'https://newsletter.gutsphere.com/archive'
export const YOUTUBE_CHANNEL_URL = 'https://www.youtube.com/@gutsphere'
export const INSTAGRAM_URL = 'https://www.instagram.com/gutsphere/'

export type ContentFormat = 'guide' | 'video' | 'tip'

export interface CuratedContentItem {
  id: string
  title: string
  url: string
  duration: string
  format: ContentFormat
  /** YouTube thumbnail URL when available */
  thumbnail?: string
}

/** Real Gutsphere content — titles and links from newsletter, YouTube, and Instagram */
export const curatedContent: CuratedContentItem[] = [
  {
    id: 'stool-color',
    title: 'What your stool color actually means',
    url: 'https://newsletter.gutsphere.com/p/what-your-stool-color-actually-means',
    duration: '17 min',
    format: 'guide',
  },
  {
    id: 'gut-inflamed',
    title: 'Why your gut is inflamed — and how to reverse it',
    url: 'https://newsletter.gutsphere.com/p/why-your-gut-is-inflamed-what-is',
    duration: '16 min',
    format: 'guide',
  },
  {
    id: 'mucus-stool',
    title: 'Mucus in stool: IBS, infection, or something else?',
    url: 'https://newsletter.gutsphere.com/p/mucus-in-stool-ibs-infection-or-something',
    duration: '11 min',
    format: 'guide',
  },
  {
    id: 'yellow-poop',
    title: 'Yellow poop: what people get wrong',
    url: 'https://newsletter.gutsphere.com/p/yellow-poop-what-it-means-what-people',
    duration: '9 min',
    format: 'guide',
  },
  {
    id: 'rectal-signal',
    title: "Why your body doesn't warn you when it's time to go",
    url: 'https://www.youtube.com/watch?v=nb7zra5_Cnk',
    duration: '2 min',
    format: 'video',
    thumbnail: 'https://img.youtube.com/vi/nb7zra5_Cnk/hqdefault.jpg',
  },
  {
    id: 'daily-tips',
    title: 'Quick gut health tips you can use today',
    url: INSTAGRAM_URL,
    duration: '1 min',
    format: 'tip',
  },
]

/** Featured prepare content for Clarity v2 */
export const prepareContent: CuratedContentItem = {
  id: 'prepare-visit',
  title: 'Questions to ask your GI — and how to prep for colonoscopy',
  url: NEWSLETTER_ARCHIVE_URL,
  duration: '5 min',
  format: 'guide',
}
