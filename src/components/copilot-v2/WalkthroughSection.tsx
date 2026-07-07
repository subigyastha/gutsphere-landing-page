const TIMELINE = [
  {
    warm: true,
    when: 'Tuesday · 9:14pm',
    copy: (
      <>
        A rough flare hits. You&apos;re wiped, but logging it takes <b>fifteen seconds</b> — a tap, a slider,
        done.
      </>
    ),
    thumb: (
      <>
        <div className="cp2-th-top">
          <span>Log · Tue 9:14pm</span>
          <span>severity</span>
        </div>
        <div className="cp2-sev">
          <span className="on" />
          <span className="on" />
          <span className="on" />
          <span className="on" />
          <span />
        </div>
        <div className="cp2-th-row">
          <span className="cp2-dotm" />
          Bloating · cramps
        </div>
        <span className="cp2-th-chip">Saved · 15s</span>
      </>
    ),
  },
  {
    warm: false,
    when: 'Quietly, in the background',
    copy: (
      <>
        Gutsphere links it to the takeout you logged at lunch and <b>three short nights of sleep</b> in a row.
      </>
    ),
    thumb: (
      <>
        <div className="cp2-th-top">
          <span>Connected</span>
          <span>pattern</span>
        </div>
        <div className="cp2-th-link">
          <span className="cp2-th-chip soft">late meal</span>
          <span className="cp2-th-chip soft">short sleep ×2</span>
        </div>
        <div className="cp2-th-row">
          <span className="cp2-dotm" />
          Possible thread found
        </div>
      </>
    ),
  },
  {
    warm: false,
    when: 'Wednesday morning',
    copy: (
      <>
        On a hard day it doesn&apos;t hand you a to-do list — it surfaces <b>a calmer routine</b> and one small
        thing to try.
      </>
    ),
    thumb: (
      <>
        <div className="cp2-th-top">
          <span>Today · gentle</span>
          <span>care</span>
        </div>
        <div className="cp2-th-row">
          <span className="cp2-dotm" />
          Warm, simple breakfast
        </div>
        <div className="cp2-th-row">
          <span className="cp2-dotm" />
          10-min walk, no pressure
        </div>
        <span className="cp2-th-chip">One small thing</span>
      </>
    ),
  },
  {
    warm: false,
    when: 'Six weeks in',
    copy: (
      <>
        A pattern you couldn&apos;t see on your own becomes clear: <b>dairy plus poor sleep</b>, again and again.
      </>
    ),
    thumb: (
      <>
        <div className="cp2-th-top">
          <span>6-week pattern</span>
          <span>insight</span>
        </div>
        <div className="cp2-mbars">
          <i style={{ height: '38%' }} />
          <i className="hi" style={{ height: '86%' }} />
          <i style={{ height: '30%' }} />
          <i className="hi" style={{ height: '74%' }} />
          <i style={{ height: '46%' }} />
        </div>
        <div className="cp2-th-row">
          <span className="cp2-dotm" />
          dairy + poor sleep
        </div>
      </>
    ),
  },
  {
    warm: true,
    when: 'Your next GI appointment',
    copy: (
      <>
        You walk in with a clean timeline and <b>three questions worth asking</b> — and you&apos;re taken
        seriously.
      </>
    ),
    thumb: (
      <>
        <div className="cp2-th-top">
          <span>Visit summary</span>
          <span>ready</span>
        </div>
        <div className="cp2-th-line">
          <b style={{ left: 0 }} />
          <b style={{ left: '33%' }} />
          <b style={{ left: '66%' }} />
          <b style={{ left: '100%', marginLeft: -8 }} />
        </div>
        <div className="cp2-th-row">
          <span className="cp2-dotm" />
          Clean timeline
        </div>
        <span className="cp2-th-chip">3 questions to ask</span>
      </>
    ),
  },
] as const

export function WalkthroughSection() {
  return (
    <section className="cp2-band" id="walkthrough">
      <div className="cp2-wrap">
        <div className="cp2-sec-head cp2-reveal">
          <p className="cp2-eyebrow">One flare, start to finish</p>
          <h2>Here&apos;s what &ldquo;connected&rdquo; actually looks like.</h2>
        </div>
        <div className="cp2-tl">
          {TIMELINE.map((item) => (
            <div key={item.when} className={`cp2-tl-item${item.warm ? ' warm' : ''} cp2-reveal`}>
              <div className="cp2-tl-row">
                <div className="cp2-tl-copy">
                  <p className="cp2-when">{item.when}</p>
                  <p>{item.copy}</p>
                </div>
                <div className="cp2-thumb">{item.thumb}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
