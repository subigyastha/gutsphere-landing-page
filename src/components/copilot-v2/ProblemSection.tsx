export function ProblemSection() {
  const pains = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <circle cx="5" cy="6" r="2" />
          <circle cx="12" cy="5" r="2" />
          <circle cx="19" cy="8" r="2" />
          <circle cx="7" cy="14" r="2" />
          <circle cx="17" cy="15" r="2" />
          <circle cx="11" cy="19" r="2" />
        </svg>
      ),
      title: 'Everything is scattered',
      body: 'A tracker here, notes on your phone, a result in an email, the rest in your head. Nothing adds up.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <rect x="2" y="8" width="16" height="9" rx="2.5" />
          <path d="M22 11.5v3" strokeLinecap="round" />
          <path d="M6 12.5h2" strokeLinecap="round" />
        </svg>
      ),
      title: 'The bad days are hardest to track',
      body: 'Logging takes energy right when you have none — so the flares that matter most never get recorded.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7.5V12l3 2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: 'Appointments feel like starting over',
      body: 'Ten minutes, a fuzzy story, no data. You leave without answers, unsure you were heard.',
    },
  ]

  return (
    <section id="problem">
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
          {pains.map((pain) => (
            <div key={pain.title} className="cp2-pain cp2-reveal">
              <span className="cp2-ic">{pain.icon}</span>
              <h3>{pain.title}</h3>
              <p>{pain.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
