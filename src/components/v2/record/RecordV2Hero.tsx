import { ProductMockup } from '../../ProductMockup'
import { Button } from '../../Button'
import { PatternInsightCard } from '../PatternInsightCard'
import { SymptomEntryFork } from '../SymptomEntryFork'
import { PRIMARY_CTA_LABEL, SIGNUP_URL } from '../../../constants'

export function RecordV2Hero() {
  return (
    <section className="section-pad bg-gs-sand" aria-labelledby="record-v2-hero-heading">
      <div className="container-wide">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 max-w-xl lg:order-1">
            <p className="mb-4 inline-flex items-center rounded-full border border-gs-insight-border bg-gs-insight-bg px-4 py-1.5 text-xs font-medium text-gs-coral">
              Symptoms are data — not background noise
            </p>

            <h1 id="record-v2-hero-heading" className="display-heading mb-6">
              Find the patterns in your digestive symptoms
            </h1>

            <p className="body-lg mb-8 max-w-lg">
              Log what you notice. See what connects —{' '}
              <strong className="font-semibold text-gs-text-primary">
                so your next visit has the full story.
              </strong>
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <Button href={SIGNUP_URL} data-cta="primary" className="w-full sm:w-auto">
                {PRIMARY_CTA_LABEL}
              </Button>
              <Button variant="secondary" href="#how-it-works" className="w-full sm:w-auto">
                See how it works
              </Button>
            </div>

            <p className="mt-6 text-sm text-gs-text-muted">
              No diagnosis required &middot; No credit card &middot; Cancel anytime
            </p>
          </div>

          <div className="order-1 space-y-4 lg:order-2">
            <ProductMockup variant="hero" />
            <PatternInsightCard />
          </div>
        </div>

        <div className="mt-10 lg:mt-12">
          <SymptomEntryFork />
        </div>
      </div>
    </section>
  )
}
