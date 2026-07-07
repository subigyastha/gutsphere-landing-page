import { Button } from '../Button'
import { SIGNUP_URL } from '../../constants'
import { GUIDED_PRIMARY_CTA } from './constants'
import { useGuided } from './GuidedContext'

export function GuidedStickyCTA() {
  const { showStickyCta } = useGuided()

  if (!showStickyCta) return null

  return (
    <div className="guided-sticky-cta" role="complementary" aria-label="Quick check-in">
      <Button href={SIGNUP_URL} className="guided-sticky-cta-btn" data-cta="primary">
        {GUIDED_PRIMARY_CTA}
      </Button>
    </div>
  )
}
