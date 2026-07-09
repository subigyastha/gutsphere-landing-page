import { SIGNUP_URL } from '../../constants'

export function HonestySection() {
  return (
    <section className="cp2-band" id="honest">
      <div className="cp2-wrap cp2-honest">
        <span className="cp2-badge cp2-reveal">Radical honesty</span>
        <h2 className="cp2-reveal">We&apos;re early, and we won&apos;t pretend otherwise.</h2>
        <p className="cp2-reveal cp2-honest-lead">
          No fake testimonials. No &ldquo;heal your gut in 30 days.&rdquo; If you&apos;ve been let down by
          health products that overpromised, you already know why that matters. Here&apos;s exactly what we are
          — and what we&apos;re not.
        </p>
        <div className="cp2-twocol">
          <div className="cp2-card-h is cp2-reveal">
            <span className="cp2-ic">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path d="M8.5 12.5l2.5 2.5 4.5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <h3>What Gutsphere is</h3>
            <ul>
              <li>A copilot that helps you make sense of your own gut</li>
              <li>One connected place for tracking, care and navigation</li>
              <li>A way to turn scattered symptoms into evidence you own</li>
              <li>A companion to your diagnosis and care team — IBS, IBD, celiac, GERD, SIBO &amp; more</li>
              <li>Built openly with founding members, in the honest early days</li>
            </ul>
          </div>
          <div className="cp2-card-h isnt cp2-reveal">
            <span className="cp2-ic mut">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path d="M8 12h8" strokeLinecap="round" />
              </svg>
            </span>
            <h3>What it isn&apos;t</h3>
            <ul>
              <li>A diagnosis, or a substitute for your doctor</li>
              <li>A promise to cure or fix your gut</li>
              <li>A test kit, a microbiome report or a telehealth service</li>
              <li>One more isolated tracker to add to the pile</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export function PricingSection() {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      small: '',
      desc: 'Everything you need to start making sense of things.',
      features: ['Fast daily tracking', 'Core patterns & history', 'Appointment prep basics'],
      cta: 'Start free',
      ghost: true,
      rec: false,
    },
    {
      name: 'Founding Monthly',
      price: '$9',
      small: '/ month',
      desc: 'The full connected system, month to month.',
      features: [
        'Everything in Free',
        'Responsive care & navigation',
        'Full clinical-ready timeline',
        'Founding-member input on what we build',
      ],
      cta: 'Choose monthly',
      ghost: true,
      rec: false,
    },
    {
      name: 'Founding Annual',
      price: '$69',
      small: '/ year',
      desc: 'Two months free, and the founding rate locked in.',
      features: [
        'Everything in Monthly',
        'Two months free vs. monthly',
        'Founding price, locked for good',
        'Early access to new stages',
      ],
      cta: 'Start free, then go annual',
      ghost: false,
      rec: true,
    },
  ]

  return (
    <section id="pricing">
      <div className="cp2-wrap">
        <div className="cp2-sec-head cp2-reveal">
          <p className="cp2-eyebrow">Founding pricing</p>
          <h2>Start free. Grow with us as a founding member.</h2>
        </div>
        <div className="cp2-plans">
          {plans.map((plan) => (
            <div key={plan.name} className={`cp2-plan${plan.rec ? ' rec' : ''} cp2-reveal`}>
              {plan.rec && <span className="cp2-tag">Best value</span>}
              <h3>{plan.name}</h3>
              <div className="cp2-price">
                {plan.price}
                {plan.small && <small>{plan.small}</small>}
              </div>
              <p className="cp2-desc">{plan.desc}</p>
              <ul>
                {plan.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <a
                href={SIGNUP_URL}
                className={`cp2-btn${plan.ghost ? ' ghost' : ''}`}
                data-cta="primary"
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FinalCTASection() {
  return (
    <section className="cp2-final" id="cta" aria-labelledby="cp2-final-heading">
      <div className="cp2-wrap">
        <p className="cp2-final-eyebrow cp2-reveal">Ready when you are</p>
        <h2 id="cp2-final-heading" className="cp2-final-title cp2-reveal">
          Stop managing your gut in five places.
        </h2>
        <p className="cp2-final-lead cp2-reveal">
          Start free on web, iOS, or Android — one copilot for tracking, care, and visit prep.
        </p>
        <a href={SIGNUP_URL} className="cp2-btn cp2-final-btn cp2-reveal" data-cta="primary">
          Start free
        </a>
        <p className="cp2-final-trust cp2-reveal">No card required · cancel anytime · not medical advice</p>
        <div className="cp2-app cp2-reveal">
          <p className="cp2-lbl">Prefer the app?</p>
          <div className="cp2-badges">
            <a className="cp2-store" href={SIGNUP_URL}>
              <span aria-hidden="true">&#63743;</span>
              <span>
                Download on the <b>App Store</b>
              </span>
            </a>
            <a className="cp2-store" href={SIGNUP_URL}>
              <span aria-hidden="true">&#9654;</span>
              <span>
                Get it on <b>Google Play</b>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
