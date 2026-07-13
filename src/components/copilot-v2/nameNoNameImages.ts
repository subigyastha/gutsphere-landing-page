import type { NameNoNameStateId } from './nameNoNameStates'

export type NameNoNameImage = {
  src: string
  alt: string
  width: number
  height: number
}

/** Production assets in public/images/no-name/ (source files live in /Images/Name or no name/) */
export const NAME_NO_NAME_IMAGES: Record<NameNoNameStateId, NameNoNameImage> = {
  'symptoms-no-name': {
    src: '/images/no-name/no-answers.png',
    alt: 'A woman connecting scattered symptom clues into a clearer pattern.',
    width: 160,
    height: 160,
  },
  'told-normal': {
    src: '/images/no-name/waiting-dismissed.jpg',
    alt: 'A person preserving their health story while waiting for care.',
    width: 160,
    height: 160,
  },
  'diagnosis-doesnt-fit': {
    src: '/images/no-name/diagnosis-doesnt-fit.jpg',
    alt: 'A woman examining a diagnosis that does not explain the full picture.',
    width: 160,
    height: 160,
  },
  diagnosed: {
    src: '/images/no-name/diagnosed-still-hard.jpg',
    alt: 'A person organizing treatment, routines, and daily life after diagnosis.',
    width: 160,
    height: 160,
  },
}
