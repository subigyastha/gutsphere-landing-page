export type ProblemIcon = 'scatter' | 'battery' | 'clock'

export type ProblemImage = {
  src: string
  webm: string
  mp4: string
  poster: string
  alt: string
}

export const PROBLEM_IMAGES: Record<ProblemIcon, ProblemImage> = {
  scatter: {
    src: '/images/problem/scattered.gif',
    webm: '/images/problem/scattered.webm',
    mp4: '/images/problem/scattered.mp4',
    poster: '/images/problem/scattered-poster.jpg',
    alt: 'A person overwhelmed by scattered health trackers, notes, lab results, and symptoms',
  },
  battery: {
    src: '/images/problem/bad-days.gif',
    webm: '/images/problem/bad-days.webm',
    mp4: '/images/problem/bad-days.mp4',
    poster: '/images/problem/bad-days-poster.jpg',
    alt: 'A person exhausted on a flare day, struggling to log symptoms on their phone',
  },
  clock: {
    src: '/images/problem/appointments.gif',
    webm: '/images/problem/appointments.webm',
    mp4: '/images/problem/appointments.mp4',
    poster: '/images/problem/appointments-poster.jpg',
    alt: 'A patient feeling rushed and unheard during a short doctor appointment',
  },
}
