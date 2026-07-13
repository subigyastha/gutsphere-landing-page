import { useEffect, useRef, useState } from 'react'
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
  const videoRef = useRef<HTMLVideoElement>(null)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [needsTap, setNeedsTap] = useState(false)
  const [useGifFallback, setUseGifFallback] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mq.matches)
    const onChange = () => setReducedMotion(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    if (reducedMotion || useGifFallback) return

    const video = videoRef.current
    if (!video) return

    const attemptPlay = async () => {
      try {
        await video.play()
        setNeedsTap(false)
      } catch {
        setNeedsTap(true)
      }
    }

    const onCanPlay = () => {
      void attemptPlay()
    }

    if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
      void attemptPlay()
    } else {
      video.addEventListener('canplay', onCanPlay)
    }

    return () => video.removeEventListener('canplay', onCanPlay)
  }, [reducedMotion, useGifFallback, image.mp4])

  const onTapPlay = async () => {
    const video = videoRef.current
    if (!video) return

    try {
      await video.play()
      setNeedsTap(false)
    } catch {
      setUseGifFallback(true)
    }
  }

  if (reducedMotion || useGifFallback) {
    return (
      <img
        src={useGifFallback ? image.src : image.poster}
        alt={image.alt}
        width={640}
        height={360}
        loading="lazy"
        decoding="async"
      />
    )
  }

  return (
    <div className={`cp2-pain-media-player${needsTap ? ' needs-tap' : ''}`}>
      <video
        ref={videoRef}
        className="cp2-pain-media-video"
        muted
        autoPlay
        loop
        playsInline
        preload="auto"
        poster={image.poster}
        width={640}
        height={360}
        aria-label={image.alt}
        onError={() => setUseGifFallback(true)}
      >
        <source src={image.mp4} type="video/mp4" />
        <source src={image.webm} type="video/webm" />
      </video>
      {needsTap ? (
        <button
          type="button"
          className="cp2-pain-media-tap"
          onClick={() => void onTapPlay()}
          aria-label={`Play animation: ${image.alt}`}
        >
          <span className="cp2-pain-media-tap-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      ) : null}
    </div>
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
