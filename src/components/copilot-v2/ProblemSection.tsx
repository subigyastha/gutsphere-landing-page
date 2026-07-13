import { useEffect, useState } from 'react'
import { PROBLEM_IMAGES, type ProblemImage } from './problemImages'

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

function ProblemMedia({ image }: { image: ProblemImage }) {
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mq.matches)
    const onChange = () => setReducedMotion(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  if (reducedMotion) {
    return (
      <img
        src={image.poster}
        alt={image.alt}
        width={640}
        height={360}
        loading="lazy"
        decoding="async"
      />
    )
  }

  return (
    <video
      muted
      autoPlay
      loop
      playsInline
      poster={image.poster}
      width={640}
      height={360}
      aria-label={image.alt}
    >
      <source src={image.webm} type="video/webm" />
      <source src={image.mp4} type="video/mp4" />
      <img
        src={image.src}
        alt={image.alt}
        width={640}
        height={360}
        loading="lazy"
        decoding="async"
      />
    </video>
  )
}

export function ProblemSection() {
  return (
    <section id="problem" className="cp2-problem">
      <div className="cp2-wrap">
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
            const image = PROBLEM_IMAGES[pain.icon]
            return (
              <div key={pain.title} className="cp2-pain cp2-reveal">
                <div className={`cp2-pain-media cp2-pain-media--${pain.icon}`}>
                  <ProblemMedia image={image} />
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
