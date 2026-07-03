import { ProductMockup } from './ProductMockup'
import { Button } from './Button'
import { PatternInsightCard } from './v2/PatternInsightCard'
import { SymptomEntryFork } from './v2/SymptomEntryFork'
import { PRIMARY_CTA_LABEL, SIGNUP_URL } from '../constants'

export function Hero() {
  return (
    <section
      className="section-pad bg-gs-sand !py-12 sm:!py-16 lg:!py-20"
      aria-labelledby="hero-heading"
    >
      <div className="container-wide">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 max-w-xl lg:order-1">
            <p className="mb-4 inline-flex items-center rounded-full border border-gs-insight-border bg-gs-insight-bg px-4 py-1.5 text-xs font-medium text-gs-coral">
              For people whose symptoms are no longer background noise
            </p>

            <h1 id="hero-heading" className="display-heading mb-4 sm:mb-6">
              Stop carrying your digestive health story in your head
            </h1>

            <p className="body-lg mb-6 max-w-lg sm:mb-8">
              Log what you notice. Gutsphere builds{' '}
              <span className="font-semibold text-gs-text-primary">
                the missing record between symptoms and answers
              </span>{' '}
              — connecting food, flare-ups, and stool changes so patterns become visible.
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
                Browse free guides &rarr;
              </a>
            </div>

            <p className="mt-4 text-sm text-gs-text-muted sm:mt-6">
              No diagnosis required &middot; No credit card &middot; Cancel anytime
            </p>
          </div>

          <div className="order-1 space-y-4 lg:order-2">
            <ProductMockup variant="hero" />
            <PatternInsightCard />
          </div>
        </div>

        <div className="mt-8 lg:mt-12">
          <SymptomEntryFork intro="Not sure where to start? Pick a symptom:" />
        </div>
      </div>
    </section>
  )
}
