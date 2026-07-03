import { Button } from '../../Button'
import { PRIMARY_CTA_LABEL, SIGNUP_URL } from '../../../constants'

export function RecordV2MidCTA() {
  return (
    <div className="border-y border-gs-border bg-gs-insight-bg py-10">
      <div className="container-narrow flex flex-col items-center gap-4 px-4 text-center sm:px-8 lg:px-12">
        <p className="max-w-md font-display text-lg font-semibold text-gs-text-primary">
          Find your patterns — start free
        </p>
        <Button href={SIGNUP_URL} data-cta="primary" className="w-full sm:w-auto">
          {PRIMARY_CTA_LABEL}
        </Button>
      </div>
    </div>
  )
}
