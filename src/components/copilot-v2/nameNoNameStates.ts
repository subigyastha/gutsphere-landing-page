import { SIGNUP_URL } from '../../constants'
import { NAME_NO_NAME_IMAGES } from './nameNoNameImages'

export type NameNoNameStateId =
  | 'symptoms-no-name'
  | 'told-normal'
  | 'diagnosis-doesnt-fit'
  | 'diagnosed'

export type NameNoNameAccent = 'coral' | 'lavender' | 'ochre' | 'teal'

export interface NameNoNameOutcomes {
  calm: string
  understand: string
  next: string
}

export interface NameNoNameState {
  id: NameNoNameStateId
  title: string
  description: string
  outcomeHeadline: string
  outcomes: NameNoNameOutcomes
  cta: string
  ctaHref: string
  secondaryHref?: string
  secondaryLabel?: string
  image: string
  imageAlt: string
  accent: NameNoNameAccent
  /** Card surface sampled to match illustration edge for immersive blend */
  blend: string
}

export const NAME_NO_NAME_STATES: readonly NameNoNameState[] = [
  {
    id: 'symptoms-no-name',
    title: 'I have symptoms, but no answers yet',
    description: 'Something feels off, but nothing has connected it into a clear picture.',
    outcomeHeadline: 'Start by connecting what is happening.',
    outcomes: {
      calm: 'Bring scattered symptoms into one place instead of carrying everything in your head.',
      understand: 'See when symptoms overlap and what repeatedly surrounds them.',
      next: 'Know what to monitor and what may be useful to bring into care.',
    },
    cta: 'Help me find the pattern',
    ctaHref: SIGNUP_URL,
    secondaryHref: '/for#finding-answers',
    secondaryLabel: 'See Finding answers situations',
    image: NAME_NO_NAME_IMAGES['symptoms-no-name'].src,
    imageAlt: NAME_NO_NAME_IMAGES['symptoms-no-name'].alt,
    accent: 'coral',
    blend: '#f4e4d6',
  },
  {
    id: 'told-normal',
    title: "I'm waiting—or keep getting dismissed",
    description:
      'Tests, referrals, results, or appointments are taking too long, and the story is not moving forward.',
    outcomeHeadline: 'Keep your story moving while the system moves slowly.',
    outcomes: {
      calm: 'Keep the details together while you wait instead of starting from memory each time.',
      understand: 'Build a dated history of symptoms, tests, changes, and what has already been tried.',
      next: 'Prepare a clearer summary and questions that help you be heard.',
    },
    cta: 'Build my care timeline',
    ctaHref: '/for#finding-answers',
    image: NAME_NO_NAME_IMAGES['told-normal'].src,
    imageAlt: NAME_NO_NAME_IMAGES['told-normal'].alt,
    accent: 'lavender',
    blend: '#f2e9df',
  },
  {
    id: 'diagnosis-doesnt-fit',
    title: "I have a diagnosis, but it doesn't fit",
    description:
      'The label leaves important symptoms unexplained, or the plan built around it is not helping.',
    outcomeHeadline: 'A diagnosis should not erase the parts that remain unexplained.',
    outcomes: {
      calm: 'Keep the current diagnosis without forcing every experience to fit inside it.',
      understand:
        'Compare symptoms, treatment response, tests, and changes to see where the story has gaps.',
      next: 'Prepare what may need to be revisited, clarified, or discussed during care.',
    },
    cta: 'Revisit my full story',
    ctaHref: '/for#finding-answers',
    image: NAME_NO_NAME_IMAGES['diagnosis-doesnt-fit'].src,
    imageAlt: NAME_NO_NAME_IMAGES['diagnosis-doesnt-fit'].alt,
    accent: 'ochre',
    blend: '#f3e7db',
  },
  {
    id: 'diagnosed',
    title: "I have a diagnosis, but it's still hard",
    description:
      'A name exists, but the day-to-day, flares, routines, and treatment are still difficult to manage.',
    outcomeHeadline: 'Turn the diagnosis into support for real life.',
    outcomes: {
      calm: 'Bring routines, symptoms, treatment, and difficult days into one manageable view.',
      understand: 'See what is improving, what is not, and what changes around harder days.',
      next: 'Support daily care and prepare clearer updates for the people involved in your care.',
    },
    cta: 'Support my day-to-day',
    ctaHref: '/for#in-treatment',
    image: NAME_NO_NAME_IMAGES.diagnosed.src,
    imageAlt: NAME_NO_NAME_IMAGES.diagnosed.alt,
    accent: 'teal',
    blend: '#efe8df',
  },
] as const

export const NAME_NO_NAME_DEFAULT_ID: NameNoNameStateId = 'symptoms-no-name'

export const NAME_NO_NAME_CLOSING = {
  heading: 'Whatever the name becomes, your history stays with you.',
  support:
    'Symptoms, tests, treatments, routines, questions, and progress remain connected—even if the diagnosis changes.',
  linkLabel: 'See everyone Gutsphere is for →',
  linkHref: '/for',
} as const
