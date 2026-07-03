import { Button } from './Button'
import { PRIMARY_CTA_LABEL, SIGNUP_URL } from '../constants'

interface MidPageCTAProps {
  text?: string
}

export function MidPageCTA({
  text = 'Ready to stop carrying everything in your head?',
}: MidPageCTAProps) {
  return (
    <div className="border-y border-gs-border bg-gs-insight-bg py-8 sm:py-10">
      <div className="container-narrow flex flex-col items-stretch justify-center gap-4 px-4 sm:flex-row sm:items-center sm:px-8 lg:px-12">
        <p className="text-center font-display text-base font-semibold text-gs-text-primary sm:text-left sm:text-lg">
          {text}
        </p>
        <Button href={SIGNUP_URL} data-cta="primary" className="w-full shrink-0 sm:w-auto">
          {PRIMARY_CTA_LABEL}
        </Button>
      </div>
    </div>
  )
}
