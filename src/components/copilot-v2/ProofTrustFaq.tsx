import { LockKeyhole, ShieldCheck, TriangleAlert } from 'lucide-react'
import { testimonials } from '../../constants'

/** Featured quote — shorter pull from Sabina's full testimonial on gutsphere.com */
const SABINA_STORY = {
  ...testimonials[0],
  quote:
    'The guidance wasn\u2019t just about symptoms\u2014it helped me monitor my whole life and truly take charge of my journey.',
  videoDuration: '2:45',
}

export function ProofSection() {
  const sabina = SABINA_STORY

  return (
    <section className="cp2-band cp2-proof" id="proof">
      <div className="cp2-wrap">
        <div className="cp2-proof-story cp2-reveal">
          <figure className="cp2-proof-quote">
            <p className="cp2-proof-story-lbl">A lived experience</p>
            <blockquote>&ldquo;{sabina.quote}&rdquo;</blockquote>
            <figcaption>
              <span className="cp2-proof-av" aria-hidden="true">
                {sabina.initials}
              </span>
              <span>
                <b>{sabina.name}</b>
                <small>{sabina.detail}</small>
              </span>
            </figcaption>
          </figure>

          <div className="cp2-proof-video">
            <div
              className="cp2-proof-video-ph"
              role="img"
              aria-label={`${sabina.name} — interview clip placeholder`}
            >
              <span className="cp2-proof-play" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              <span className="cp2-proof-video-badge">
                <span className="cp2-proof-video-dot" aria-hidden="true" />
                Watch story ({sabina.videoDuration})
              </span>
            </div>
            {/* PLACEHOLDER: replace cp2-proof-video-ph with Sabina's official interview embed */}
            <p className="cp2-proof-video-note" aria-hidden="true">
              Video coming soon
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export function TrustSection() {
  const pillars = [
    {
      title: 'Clinician validation',
      lead: 'Unlike apps that guess, Gutsphere is shaped with clinician input so the system stays grounded.',
      points: [
        'Guidance reviewed with GI-focused experts',
        'Informed by peer-reviewed digestive-health research',
        'Designed to help you show up with a clear, clinician-ready story',
        'Built to complement care — not replace it',
      ],
      Icon: ShieldCheck,
    },
    {
      title: 'Privacy',
      lead: 'Unlike platforms built on sharing, Gutsphere is built around your control.',
      points: [
        'Your logs stay private by default',
        'You decide what to export or share',
        'Clear settings that are easy to understand',
      ],
      Icon: LockKeyhole,
    },
    {
      title: 'Safety language',
      lead: 'Unlike “confidence theater,” Gutsphere uses plain, careful safety guardrails.',
      points: [
        'Clear red-flag guidance when symptoms may need urgent care',
        'No judgment, no fear-mongering — just clarity',
        'Support between visits, with boundaries that keep you safe',
      ],
      Icon: TriangleAlert,
    },
  ]

  return (
    <section id="trust">
      <div className="cp2-wrap">
        <div className="cp2-sec-head cp2-reveal">
          <p className="cp2-eyebrow">Trust, built in</p>
          <h2>Guided by expertise. Protected with privacy. Centered on your safety.</h2>
          <p>
            Gutsphere is designed for real symptoms and real decisions. We keep it simple, but we
            don&apos;t treat it lightly.
          </p>
        </div>
        <div className="cp2-trust-grid">
          {pillars.map((p) => {
            const Icon = p.Icon
            return (
              <article key={p.title} className="cp2-trust-card cp2-reveal">
                <div className="cp2-trust-visual" aria-hidden="true">
                  <span className="cp2-trust-ic">
                    <Icon strokeWidth={1.5} absoluteStrokeWidth />
                  </span>
                </div>
                <h3>{p.title}</h3>
                <p>{p.lead}</p>
                <ul>
                  {p.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export const FAQ_ITEMS = [
  {
    q: 'Is this medical advice?',
    a: 'No. Gutsphere isn\u2019t a doctor and doesn\u2019t replace medical care. It\u2019s a daily system that helps you track what\u2019s happening, learn what affects you, and show up to appointments with clearer context and evidence.',
  },
  {
    q: 'Do I need to track every day for this to work?',
    a: 'No. Gutsphere is built for low-energy, real-life use. Light tracking still helps, and \u201Cnothing happened\u201D days can still be meaningful. The goal is consistency that\u2019s sustainable — no streaks, no guilt, no penalties.',
  },
  {
    q: 'How is my data handled?',
    a: 'Your health story is private by default. You decide what to log, and you decide what to export or share. Your data isn\u2019t treated like content for a feed, and sharing with a clinician or caregiver is always intentional — never automatic.',
  },
  {
    q: 'Can I use this alongside my doctor or treatment plan?',
    a: 'Yes — that\u2019s the point. Gutsphere is built to complement care by helping you keep a clearer symptom history, notice patterns earlier, and bring a cleaner story into appointments, tests, and procedures.',
  },
  {
    q: 'What conditions is this for?',
    a: 'Gutsphere is built for the full GI journey — whether you\u2019re dealing with constipation, bloating, reflux, IBS, IBD, or an unclear mix of symptoms. You don\u2019t need a diagnosis to start, and nothing you track is lost if you get one later.',
  },
  {
    q: 'Will reminders be pushy or guilt-inducing?',
    a: 'No. Reminders are meant to feel like calm check-ins, not discipline. If you miss a day, nothing breaks. You can slow down and pick back up anytime.',
  },
  {
    q: 'Do I need a credit card to start? Can I cancel anytime?',
    a: 'No card needed — the Free plan is free to start on web, iOS or Android. Paid plans are cancel-anytime; the founding annual rate of $69/year stays locked in for as long as you keep it.',
  },
] as const

export function FAQSection() {
  return (
    <section className="cp2-band" id="faq">
      <div className="cp2-wrap cp2-faq-wrap">
        <div className="cp2-sec-head cp2-reveal">
          <p className="cp2-eyebrow">Questions, answered plainly</p>
          <h2>Frequently asked questions</h2>
        </div>
        <div className="cp2-faq-list cp2-reveal">
          {FAQ_ITEMS.map((item) => (
            <details key={item.q} className="cp2-faq-item">
              <summary>
                {item.q}
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>

        <div className="cp2-faq-hub cp2-reveal">
          <p className="cp2-faq-hub-lead">Need more answers?</p>
          <a href="/faq" className="cp2-faq-hub-link">
            <span>
              Open the full FAQ hub
              <small>Searchable categories · IBS, IBD, GERD, bloating &amp; more</small>
            </span>
            <span className="cp2-faq-hub-arrow" aria-hidden="true">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
