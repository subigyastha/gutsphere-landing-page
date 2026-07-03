import { PhoneScreenshot } from '../clarity/PhoneScreenshot'
import { SymptomEntryFork } from '../v2/SymptomEntryFork'
import { Button } from '../Button'
import { NAVIGATOR_COUNT, PRIMARY_CTA_LABEL, SIGNUP_URL } from '../../constants'

export function CommunityHero() {
  return (
    <section
      className="section-pad bg-gs-sand !py-12 sm:!py-16 lg:!py-20"
      aria-labelledby="community-hero-heading"
    >
      <div className="container-wide">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 max-w-xl lg:order-1">
            <p className="mb-4 inline-flex items-center rounded-full border border-gs-insight-border bg-gs-insight-bg px-4 py-1.5 text-xs font-medium text-gs-coral">
              For you — when symptoms are no longer background noise
            </p>

            <h1 id="community-hero-heading" className="display-heading mb-4 sm:mb-6">
              You shouldn&apos;t have to rebuild your story before every appointment
            </h1>

            <p className="body-lg mb-6 max-w-lg sm:mb-8">
              Connect meals, stress, and symptoms — see what keeps repeating.{' '}
              <span className="font-semibold text-gs-text-primary">
                Walk into visits with the full story, not scattered notes.
              </span>
            </p>

            <Button href={SIGNUP_URL} data-cta="primary" className="w-full sm:w-auto">
              {PRIMARY_CTA_LABEL}
            </Button>

            <div className="mt-4 flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:gap-x-6">
              <a
                href="#how-it-works"
                className="inline-flex min-h-12 items-center text-sm font-medium text-gs-coral hover:underline"
              >
                See how it works &rarr;
              </a>
              <a
                href="#content"
                className="inline-flex min-h-12 items-center text-sm font-medium text-gs-text-secondary hover:text-gs-coral"
              >
                Browse free guides first &rarr;
              </a>
            </div>

            <p className="mt-4 text-sm text-gs-text-muted sm:mt-6">
              No diagnosis required &middot; No credit card &middot; Cancel anytime
            </p>
            <p className="mt-2 text-sm text-gs-text-secondary">
              {NAVIGATOR_COUNT} people like you are already building their record.
            </p>
          </div>

          <div className="order-1 mx-auto w-full max-w-[240px] sm:max-w-[260px] lg:order-2 lg:max-w-none">
            <PhoneScreenshot
              src="/screenshots/visit-brief.png"
              alt="Gutsphere visit brief screen with timeline and questions for your doctor"
              label="Visit brief"
              fetchPriority="high"
            />
          </div>
        </div>

        <div className="mt-8 lg:mt-12">
          <SymptomEntryFork intro="Something feels off? Start here:" />
        </div>
      </div>
    </section>
  )
}
