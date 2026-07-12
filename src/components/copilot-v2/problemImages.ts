export type ProblemIcon = 'scatter' | 'battery' | 'clock'

export type ProblemImage = {
  src: string
  alt: string
}

export const PROBLEM_IMAGES: Record<ProblemIcon, ProblemImage> = {
  scatter: {
    src: '/images/problem/scattered.gif',
    alt: 'A person overwhelmed by scattered health trackers, notes, lab results, and symptoms',
  },
  battery: {
    src: '/images/problem/bad-days.gif',
    alt: 'A person exhausted on a flare day, struggling to log symptoms on their phone',
  },
  clock: {
    src: '/images/problem/appointments.gif',
    alt: 'A patient feeling rushed and unheard during a short doctor appointment',
  },
}
