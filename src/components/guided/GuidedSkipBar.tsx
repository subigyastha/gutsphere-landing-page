import { Button } from '../Button'
import { SIGNUP_URL } from '../../constants'
import { GUIDED_PRIMARY_CTA } from './constants'

export function GuidedSkipBar() {
  return (
    <div className="guided-skip-bar">
        <a href="#guided-card-moments" className="guided-skip-link">
        Skip the journey
      </a>
      <Button href={SIGNUP_URL} variant="ghost" className="guided-skip-cta" data-cta="primary">
        {GUIDED_PRIMARY_CTA}
      </Button>
    </div>
  )
}
