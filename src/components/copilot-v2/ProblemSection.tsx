import { PROBLEM_IMAGES } from './problemImages'

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
                  <img
                    src={image.src}
                    alt={image.alt}
                    width={640}
                    height={480}
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
