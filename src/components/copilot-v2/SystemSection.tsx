export function BothSection() {
  return (
    <section id="both">
      <div className="cp2-wrap">
        <div className="cp2-sec-head cp2-reveal">
          <p className="cp2-eyebrow">Name or no name</p>
          <h2>Whether or not your gut has a name yet.</h2>
          <p>
            Gutsphere meets you at either place — and the day a hunch turns into a diagnosis, nothing
            you&apos;ve already tracked is lost.
          </p>
        </div>
        <div className="cp2-both-grid">
          <div className="cp2-both-card cp2-reveal">
            <span className="cp2-ic">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4-4" strokeLinecap="round" />
              </svg>
            </span>
            <span className="cp2-both-tag">Still figuring it out</span>
            <p>
              Symptoms, and no clear answer yet. Gutsphere helps you find the pattern, rule things in and out,
              and reach an appointment with evidence instead of a guess.
            </p>
          </div>
          <div className="cp2-both-card dx-card cp2-reveal">
            <span className="cp2-ic">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M3 12V5a2 2 0 0 1 2-2h7l9 9-9 9-9-9z" strokeLinejoin="round" />
                <circle cx="8" cy="8" r="1.4" fill="currentColor" stroke="none" />
              </svg>
            </span>
            <span className="cp2-both-tag alt">Already diagnosed</span>
            <p>
              A diagnosis is a name, not a plan. Gutsphere helps you live with it day to day — catch your
              triggers, prepare for flares, see what&apos;s actually working, and keep every specialist on the
              same page.
            </p>
            <p className="cp2-both-conds">
              Works alongside IBS · IBD (Crohn&apos;s / UC) · celiac · GERD · SIBO · gastroparesis &amp; more
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export function SystemSection() {
  const nodes = [
    {
      title: 'Track',
      body: 'Symptoms, food, sleep & stress in seconds — built for low-energy days.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" strokeLinecap="round" />
          <rect x="9" y="3" width="6" height="4" rx="1" />
          <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      conn: 'your logs',
    },
    {
      title: 'Care',
      body: 'Gentle, responsive self-care that reacts to what you logged — not a generic checklist.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path
            d="M20.8 6.6a5 5 0 0 0-8.8-1.6A5 5 0 0 0 3.2 6.6C1.9 9.3 3.5 12 6 14.3l6 5.7 6-5.7c2.5-2.3 4.1-5 2.8-7.7z"
            strokeLinejoin="round"
          />
        </svg>
      ),
      conn: 'how you respond',
    },
    {
      title: 'Navigate',
      body: 'Know when it\'s worth seeing someone, who to see, and how to prepare for the visit.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <path d="M15.5 8.5l-2 5-5 2 2-5 5-2z" strokeLinejoin="round" />
        </svg>
      ),
      conn: 'when to act',
    },
    {
      title: 'Understand',
      body: 'Patterns become appointment-ready evidence and the questions worth asking your doctor.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M5 20V10M12 20V4M19 20v-7" strokeLinecap="round" />
        </svg>
      ),
      conn: null,
    },
  ]

  return (
    <section id="system">
      <div className="cp2-wrap">
        <div className="cp2-sec-head cp2-reveal">
          <p className="cp2-eyebrow">An operating system for your gut</p>
          <h2>Not another app. The system that runs the whole journey.</h2>
          <p>
            Most tools do one job and stop. Gutsphere runs the whole thing — four connected stages that feed
            each other and grow with you over time, from the first confusing symptom to the long haul of
            managing it day to day. What you log shapes your care; both become the evidence you bring to a
            clinician.
          </p>
          <p className="cp2-sys-preview-bridge cp2-reveal">
            The preview above is the same journey in your words — track, care, navigate, and understand —
            with GI, nutrition, gut–brain, and holistic views sharing one context.
          </p>
          <p className="cp2-sys-note cp2-reveal">
            <strong>
              Not an isolated tracker · not telehealth · not a test kit
            </strong>{' '}
            — the thread that connects them, for as long as you need it.
          </p>
        </div>

        <div className="cp2-flowd">
          {nodes.map((node) => (
            <div key={node.title} className="cp2-flowd-group">
              <div className="cp2-fnode cp2-reveal">
                <span className="cp2-fic">{node.icon}</span>
                <h3>{node.title}</h3>
                <p>{node.body}</p>
              </div>
              {node.conn && (
                <div className="cp2-fconn cp2-reveal">
                  <span>{node.conn}</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M4 12h15M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="cp2-loopnote cp2-reveal">
          <span className="cp2-rule" />
          what you learn loops back into how you track and care
          <span className="cp2-rule" />
        </div>

        <p className="cp2-pilot cp2-reveal">
          You pilot your health. <span>Gutsphere keeps the map.</span>
        </p>
      </div>
    </section>
  )
}
