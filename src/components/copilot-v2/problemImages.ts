export type ProblemArtVariant = 'illustration' | 'abstract'
export type ProblemIcon = 'scatter' | 'battery' | 'clock'

export type ProblemImage = {
  src: string
  alt: string
}

export const PROBLEM_ART_VARIANTS: Record<ProblemArtVariant, Record<ProblemIcon, ProblemImage>> = {
  illustration: {
    scatter: {
      src: '/images/problem/scattered.gif',
      alt: 'A person overwhelmed by scattered health trackers, notes, lab results, and symptoms',
    },
    battery: {
      src: '/images/problem/bad-days.png',
      alt: 'A person exhausted on a flare day, struggling to log symptoms on their phone',
    },
    clock: {
      src: '/images/problem/appointments.png',
      alt: 'A patient feeling rushed and unheard during a short doctor appointment',
    },
  },
  abstract: {
    scatter: {
      src: '/images/problem/abstract/scattered.png',
      alt: 'Abstract illustration of scattered health cards, notes, and alerts',
    },
    battery: {
      src: '/images/problem/abstract/bad-days.png',
      alt: 'Abstract illustration of low energy, mood tracking, and symptom logging',
    },
    clock: {
      src: '/images/problem/abstract/appointments.png',
      alt: 'Abstract illustration of a rushed appointment and starting over each visit',
    },
  },
}
