export type DifferenceCard = {
  num: string
  title: string
  body: string
  src: string
  alt: string
}

export const DIFFERENCE_CARDS: DifferenceCard[] = [
  {
    num: '01',
    title: 'The integration is the product',
    body: 'Everything else is a fragment — a tracker, a visit, a test kit, a forum. Gutsphere is the connective tissue that holds them together. Not a feature. The whole point.',
    src: '/images/difference/integration.jpg',
    alt: 'A person connected to floating health panels for tracking, nutrition, sleep, meds, and care',
  },
  {
    num: '02',
    title: 'Your whole care team, in one view',
    body: "Ask once and hear it back from a GI specialist, a dietitian, a behavioral-health and a holistic view — all sharing your full context. Today that's four appointments and four copays.",
    src: '/images/difference/multidisciplinary.jpg',
    alt: 'A patient profile card surrounded by a multidisciplinary care team connected in one view',
  },
  {
    num: '03',
    title: "It's yours, and it compounds",
    body: 'The other whole-journey options are owned by an insurer or employer — you lose them when you change jobs. Gutsphere is yours, and the more you use it, the more it knows you.',
    src: '/images/difference/compounds.jpg',
    alt: 'A person holding an open book of their health journey with notes about a new job and new plan',
  },
  {
    num: '04',
    title: "Built by someone who's lived it, not a payer",
    body: "It comes from someone who lived it — years of dismissed symptoms and an unnecessary procedure before finding what worked. Every decision serves you, because here you're the customer, not the product.",
    src: '/images/difference/built-by-someone.jpg',
    alt: 'A person walking from a cluttered medical paperwork office into an open sunny landscape',
  },
]
