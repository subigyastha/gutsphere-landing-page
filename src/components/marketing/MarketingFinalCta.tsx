import { SIGNUP_URL } from '../../constants'

interface MarketingFinalCtaProps {
  title: string
  lead?: string
  primaryHref?: string
  primaryLabel?: string
  secondaryHref?: string
  secondaryLabel?: string
}

export function MarketingFinalCta({
  title,
  lead = 'Free to start · no card · web, iOS or Android',
  primaryHref = '/#start',
  primaryLabel = 'Start free',
  secondaryHref = SIGNUP_URL,
  secondaryLabel = 'Log in',
}: MarketingFinalCtaProps) {
  return (
    <section className="mp-final">
      <div className="cp2-wrap cp2-reveal">
        <h2>{title}</h2>
        {lead ? <p>{lead}</p> : null}
        <div className="mp-hero-actions">
          <a href={primaryHref} className="cp2-btn">
            {primaryLabel}
          </a>
          <a href={secondaryHref} className="cp2-btn ghost">
            {secondaryLabel}
          </a>
        </div>
      </div>
    </section>
  )
}
