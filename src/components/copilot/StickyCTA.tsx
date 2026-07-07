import { Button } from '../Button'
import { SIGNUP_URL } from '../../constants'
import { COPILOT_PRIMARY_CTA } from './constants'
import { useCopilot } from './CopilotContext'

export function StickyCTA() {
  const { showStickyCta } = useCopilot()

  if (!showStickyCta) return null

  return (
    <div className="copilot-sticky-cta" role="complementary" aria-label="Quick check-in">
      <Button href={SIGNUP_URL} className="copilot-sticky-cta-btn" data-cta="primary">
        {COPILOT_PRIMARY_CTA}
      </Button>
    </div>
  )
}
