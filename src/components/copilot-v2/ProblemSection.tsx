import { useState } from 'react'
import { PROBLEM_ART_VARIANTS, type ProblemArtVariant } from './problemImages'

const PAINS = [
  {
    icon: 'scatter' as const,
    title: 'Everything is scattered',
    body: 'A tracker here, notes on your phone, a result in an email, the rest in your head. Nothing adds up.',
  },
  {
    icon: 'battery' as const,
    title: 'The bad days are hardest to track',
    body: 'Logging takes energy right when you have none — so the flares that matter most never get recorded.',
  },
  {
    icon: 'clock' as const,
    title: 'Appointments feel like starting over',
    body: 'Ten minutes, a fuzzy story, no data. You leave without answers, unsure you were heard.',
  },
]

const VARIANT_OPTIONS: { id: ProblemArtVariant; label: string }[] = [
  { id: 'illustration', label: 'Illustration' },
  { id: 'abstract', label: 'Abstract' },
]

export function ProblemSection() {
  const [variant, setVariant] = useState<ProblemArtVariant>('illustration')
  const images = PROBLEM_ART_VARIANTS[variant]

  return (
    <section id="problem" className="cp2-problem">
      <div className="cp2-wrap">
        <div
          className="cp2-problem-art-toggle"
          role="group"
          aria-label="Problem section illustration style"
        >
          <div className="cp2-problem-art-toggle-in">
            {VARIANT_OPTIONS.map((option) => (
              <button
                key={option.id}
                type="button"
                className={variant === option.id ? 'is-active' : ''}
                aria-pressed={variant === option.id}
                onClick={() => setVariant(option.id)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        <div className="cp2-sec-head cp2-reveal">
          <p className="cp2-eyebrow">The real problem</p>
          <h2>Gut stuff is hard to get a handle on — and it&apos;s not your fault.</h2>
          <p>
            The tools exist. They just don&apos;t talk to each other, and none of them were built for the days
            you feel worst.
          </p>
        </div>
        <div className="cp2-pains">
          {PAINS.map((pain) => {
            const image = images[pain.icon]
            return (
              <div key={pain.title} className="cp2-pain cp2-reveal">
                <div
                  className={`cp2-pain-media cp2-pain-media--${pain.icon} cp2-pain-media--${variant}`}
                >
                  <img
                    key={`${variant}-${pain.icon}`}
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <h3>{pain.title}</h3>
                <p>{pain.body}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
