import {
  ClipboardList,
  FlaskConical,
  HeartHandshake,
  MessagesSquare,
  Smartphone,
  Sprout,
  UsersRound,
  Video,
  Waypoints,
} from 'lucide-react'
import { ABOUT_URL } from '../../constants'

const ROWS = [
  {
    job: 'A symptom tracker app',
    stack: "The data just piles up — you're still the one connecting the dots",
    gs: 'Connects symptoms to food, sleep and stress, and finds the pattern for you',
    Icon: ClipboardList,
  },
  {
    job: 'A telehealth or virtual GI clinic',
    stack: "Fifteen minutes, then you're alone again — and it's owned by your employer or insurer",
    gs: 'Yours to keep, working with you every day between visits',
    Icon: Video,
  },
  {
    job: 'A microbiome test kit',
    stack: 'A one-time report, and no help at 2am in a flare',
    gs: 'A living system that acts on your data, not a PDF you file away',
    Icon: FlaskConical,
  },
  {
    job: 'An app for a single condition',
    stack: "Scoped to one label and one fix — life isn't that tidy",
    gs: "Follows your whole journey, whatever it's called today",
    Icon: Smartphone,
  },
  {
    job: 'ChatGPT, Google or Reddit',
    stack: 'No memory of you, and ten contradictory opinions',
    gs: 'Knows your history and stays accountable over time',
    Icon: MessagesSquare,
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

        <div className="cp2-cmp cp2-reveal" role="table" aria-label="Gutsphere vs your current stack">
          <div className="cp2-cmp-head" role="row">
            <span role="columnheader">What you&apos;re using now</span>
            <span role="columnheader">Where it leaves you</span>
            <span className="gs" role="columnheader">
              Gutsphere instead
            </span>
          </div>

          <div className="cp2-cmp-list">
            {ROWS.map((row) => {
              const Icon = row.Icon
              return (
                <article key={row.job} className="cp2-cmp-row" role="row">
                  <div className="cp2-cmp-job" role="cell">
                    <span className="cp2-cmp-ic" aria-hidden="true">
                      <Icon strokeWidth={1.75} absoluteStrokeWidth />
                    </span>
                    <h3>{row.job}</h3>
                  </div>

                  <div className="cp2-cmp-stack" role="cell">
                    <p className="cp2-cmp-lbl">Where it leaves you</p>
                    <p>{row.stack}</p>
                  </div>

                  <div className="cp2-cmp-gs" role="cell">
                    <p className="cp2-cmp-lbl">Gutsphere instead</p>
                    <p>
                      <span className="cp2-cmp-check" aria-hidden="true">
                        ✓
                      </span>
                      {row.gs}
                    </p>
                  </div>
                </article>
              )
            })}
          </div>
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
      Icon: Waypoints,
    },
    {
      num: '02',
      title: 'Your whole care team, in one view',
      body: "Ask once and hear it back from a GI specialist, a dietitian, a behavioral-health and a holistic view — all sharing your full context. Today that's four appointments and four copays.",
      Icon: UsersRound,
    },
    {
      num: '03',
      title: "It's yours, and it compounds",
      body: 'The other whole-journey options are owned by an insurer or employer — you lose them when you change jobs. Gutsphere is yours, and the more you use it, the more it knows you.',
      Icon: Sprout,
    },
    {
      num: '04',
      title: "Built by someone who's lived it, not a payer",
      body: "It comes from someone who lived it — years of dismissed symptoms and an unnecessary procedure before finding what worked. Every decision serves you, because here you're the customer, not the product.",
      Icon: HeartHandshake,
    },
  ] as const

  return (
    <section className="cp2-band" id="difference">
      <div className="cp2-wrap">
        <div className="cp2-sec-head cp2-reveal">
          <p className="cp2-eyebrow">The difference</p>
          <h2>Four things nothing else out there can say.</h2>
          <p>Plenty of tools do a piece of this. These are the claims only Gutsphere can make.</p>
        </div>

        <div className="cp2-diff-grid cp2-reveal">
          {diffs.map((d) => {
            const Icon = d.Icon
            return (
              <div key={d.num} className="cp2-diff">
                <div className="cp2-diff-visual" aria-hidden="true">
                  <span className="cp2-diff-ic">
                    <Icon strokeWidth={1.5} absoluteStrokeWidth />
                  </span>
                  <span className="cp2-di">{d.num}</span>
                </div>
                <h3>{d.title}</h3>
                <p>{d.body}</p>
              </div>
            )
          })}
        </div>

        <div className="cp2-diff-founder-note cp2-proof-story cp2-reveal">
          <figure className="cp2-proof-quote">
            <p className="cp2-proof-story-lbl">Founder note</p>
            <blockquote>
              &ldquo;Gut health doesn&apos;t end when you get a diagnosis. You still need to know what changed,
              whether treatment is working, what to try next, and how to prevent the next flare.&rdquo;
            </blockquote>
            <figcaption>
              <span className="cp2-proof-av" aria-hidden="true">
                B
              </span>
              <span>
                <b>Bimal</b>
                <small>Founder of Gutsphere</small>
              </span>
            </figcaption>
            <a href={ABOUT_URL} className="cp2-diff-founder-cta">
              Read full story <span aria-hidden="true">→</span>
            </a>
          </figure>

          <div className="cp2-proof-video">
            <div
              className="cp2-proof-video-ph"
              role="img"
              aria-label="Bimal — founder story video placeholder"
            >
              <span className="cp2-proof-play" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              <span className="cp2-proof-video-badge">
                <span className="cp2-proof-video-dot" aria-hidden="true" />
                Watch story
              </span>
            </div>
            {/* PLACEHOLDER: replace with Bimal's official founder interview embed */}
            <p className="cp2-proof-video-note" aria-hidden="true">
              Video coming soon
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
