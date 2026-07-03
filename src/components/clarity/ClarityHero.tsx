import { Button } from '../Button'
import { PhoneScreenshot } from './PhoneScreenshot'
import { SectionShell } from './SectionShell'
import { NAVIGATOR_COUNT, PRIMARY_CTA_LABEL, SIGNUP_URL } from '../../constants'

export function ClarityHero() {
  return (
    <SectionShell background="sand" ariaLabelledBy="clarity-hero-heading">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="max-w-xl">
          <p className="mb-4 inline-flex items-center rounded-full border border-gs-insight-border bg-gs-insight-bg px-4 py-2 text-sm font-medium text-gs-coral">
            Your personal GI companion
          </p>

          <h1 id="clarity-hero-heading" className="display-heading mb-4">
            Know what&apos;s wrong.
            <br />
            Know what to do.
          </h1>

          <p className="body-lg mb-8">
            Gutsphere helps you calm the worry between doctor visits — with a clear record
            and simple next steps.
          </p>

          <Button href={SIGNUP_URL} data-cta="primary">
            {PRIMARY_CTA_LABEL}
          </Button>

          <p className="mt-6 clarity-body text-gs-text-muted">
            {NAVIGATOR_COUNT} people &middot; Free to start &middot; No credit card
          </p>
        </div>

        <PhoneScreenshot
          src="/screenshots/hero-home.png"
          alt="Gutsphere app home screen"
          label="Home screen"
        />
      </div>
    </SectionShell>
  )
}
