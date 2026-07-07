const ROWS = [
  {
    job: 'A symptom tracker app',
    stack: "The data just piles up — you're still the one connecting the dots",
    gs: 'Connects symptoms to food, sleep and stress, and finds the pattern for you',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M3 12h4l2-6 4 12 2-6h6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    job: 'A telehealth or virtual GI clinic',
    stack: "Fifteen minutes, then you're alone again — and it's owned by your employer or insurer",
    gs: 'Yours to keep, working with you every day between visits',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="3" y="5" width="13" height="12" rx="2" />
        <path d="M16 9l5-3v10l-5-3z" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    job: 'A microbiome test kit',
    stack: 'A one-time report, and no help at 2am in a flare',
    gs: 'A living system that acts on your data, not a PDF you file away',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M9 3h6M10 3v6l-5 8a2.5 2.5 0 0 0 2.2 3.5h9.6A2.5 2.5 0 0 0 19 17l-5-8V3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    job: 'An app for a single condition',
    stack: "Scoped to one label and one fix — life isn't that tidy",
    gs: "Follows your whole journey, whatever it's called today",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="7" y="2" width="10" height="20" rx="2.5" />
        <path d="M11 18h2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    job: 'ChatGPT, Google or Reddit',
    stack: 'No memory of you, and ten contradictory opinions',
    gs: 'Knows your history and stays accountable over time',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M21 12a8 8 0 0 1-11.5 7.2L4 21l1.8-5.5A8 8 0 1 1 21 12z" strokeLinejoin="round" />
      </svg>
    ),
  },
] as const

export function CompareSection() {
  return (
    <section id="compare">
      <div className="cp2-wrap">
        <div className="cp2-sec-head cp2-reveal">
          <p className="cp2-eyebrow">Replace your stack</p>
          <h2>You&apos;ve probably already tried some of these.</h2>
          <p>
            Each one does a piece. Here&apos;s where each leaves you — and what Gutsphere does instead of
            sending you back to five tools that never talk to each other.
          </p>
        </div>
        <div className="cp2-cmp cp2-reveal">
          <table>
            <thead>
              <tr>
                <th>What you&apos;re using now</th>
                <th>Where it leaves you</th>
                <th className="gs">Gutsphere instead</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr key={row.job}>
                  <td className="job">
                    <span className="cp2-cic">{row.icon}</span>
                    {row.job}
                  </td>
                  <td className="stack">{row.stack}</td>
                  <td className="gs">{row.gs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export function DifferenceSection() {
  const diffs = [
    {
      num: '01',
      title: 'The integration is the product',
      body: 'Everything else is a fragment — a tracker, a visit, a test kit, a forum. Gutsphere is the connective tissue that holds them together. Not a feature. The whole point.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M9 12h6" strokeLinecap="round" />
          <path d="M8.5 7H7a5 5 0 0 0 0 10h1.5" strokeLinecap="round" />
          <path d="M15.5 7H17a5 5 0 0 1 0 10h-1.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      num: '02',
      title: 'Your whole care team, in one view',
      body: "Ask once and hear it back from a GI specialist, a dietitian, a behavioral-health and a holistic view — all sharing your full context. Today that's four appointments and four copays.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <circle cx="8.5" cy="9" r="3" />
          <path d="M2.5 20c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5" strokeLinecap="round" />
          <path d="M16 6.5a3 3 0 0 1 0 6" strokeLinecap="round" />
          <path d="M17 14.7c2.6.3 4.5 2.3 4.5 5.3" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      num: '03',
      title: "It's yours, and it compounds",
      body: 'The other whole-journey options are owned by an insurer or employer — you lose them when you change jobs. Gutsphere is yours, and the more you use it, the more it knows you.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M12 3l7 3v5c0 4.6-3 7-7 9-4-2-7-4.4-7-9V6z" strokeLinejoin="round" />
          <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      num: '04',
      title: "Built by someone who's lived it, not a payer",
      body: "It comes from someone who lived it — years of dismissed symptoms and an unnecessary procedure before finding what worked. Every decision serves you, because here you're the customer, not the product.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path
            d="M12 20s-6.5-4.2-9-8C1.4 9.3 3 5.5 6.5 5.5c2.2 0 3.5 1.5 5.5 3.8 2-2.3 3.3-3.8 5.5-3.8 3.5 0 5.1 3.8 3.5 6.5-2.5 3.8-9 8-9 8z"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ]

  return (
    <section className="cp2-band" id="difference">
      <div className="cp2-wrap">
        <div className="cp2-sec-head cp2-reveal">
          <p className="cp2-eyebrow">The difference</p>
          <h2>Four things nothing else out there can say.</h2>
          <p>Plenty of tools do a piece of this. These are the claims only Gutsphere can make.</p>
        </div>
        <div className="cp2-diff-grid">
          {diffs.map((d) => (
            <div key={d.num} className="cp2-diff cp2-reveal">
              <span className="cp2-ic">{d.icon}</span>
              <span className="cp2-di">{d.num}</span>
              <h3>{d.title}</h3>
              <p>{d.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
