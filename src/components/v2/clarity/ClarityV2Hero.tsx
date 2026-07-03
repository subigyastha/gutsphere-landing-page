import { Button } from '../../Button'
import { PhoneScreenshot } from '../../clarity/PhoneScreenshot'
import { NAVIGATOR_COUNT, PRIMARY_CTA_LABEL, SIGNUP_URL } from '../../../constants'

export function ClarityV2Hero() {
  return (
    <section
      className="section-pad bg-gs-sand !py-12 sm:!py-16 lg:!py-20"
      aria-labelledby="clarity-v2-hero-heading"
    >
      <div className="container-wide">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 max-w-xl lg:order-1">
            <p className="mb-4 inline-flex items-center rounded-full border border-gs-insight-border bg-gs-insight-bg px-4 py-1.5 text-xs font-medium text-gs-coral">
              Your personal GI companion
            </p>

            <h1 id="clarity-v2-hero-heading" className="display-heading mb-4 sm:mb-6">
              Start understanding your symptoms
            </h1>

            <p className="body-lg mb-6 max-w-lg sm:mb-8">
              Know what&apos;s wrong. Know what to do. Connect meals, stress, and symptoms over
              time — so you can spot patterns and walk into visits prepared.{' '}
              <span className="text-gs-text-primary">No diagnosis required.</span>
            </p>

            <Button href={SIGNUP_URL} data-cta="primary" className="w-full sm:w-auto">
              {PRIMARY_CTA_LABEL}
            </Button>

            <p className="mt-4">
              <a
                href="#conditions"
                className="inline-flex min-h-12 items-center text-sm font-medium text-gs-coral hover:underline"
              >
                Find your starting point &rarr;
              </a>
            </p>

            <p className="mt-4 text-sm text-gs-text-muted sm:mt-6">
              {NAVIGATOR_COUNT} people &middot; Free to start &middot; No credit card
            </p>
          </div>

          <div className="order-1 mx-auto w-full max-w-[240px] sm:max-w-[260px] lg:order-2 lg:max-w-none">
            <PhoneScreenshot
              src="/screenshots/hero-home.png"
              alt="Gutsphere app home screen showing daily guidance and symptom tracking"
              label="Home screen"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
