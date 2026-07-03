import { Button } from '../../Button'
import { CoralSectionGraphics } from '../../CoralSectionGraphics'
import { PRIMARY_CTA_LABEL, SIGNUP_URL } from '../../../constants'

export function ClarityV2CalmBand() {
  return (
    <section
      id="prepare-visit"
      className="relative overflow-hidden section-pad bg-gs-coral"
      aria-labelledby="clarity-v2-calm-heading"
    >
      <CoralSectionGraphics variant="visit" />
      <div className="container-narrow relative z-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-white">
          Before your visit
        </p>
        <h2 id="clarity-v2-calm-heading" className="section-heading mx-auto mt-2 max-w-3xl !text-white">
          Next appointment in the next few weeks?
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-white sm:mt-4 sm:text-lg">
          Build your visit summary now — calm, organized, and ready when you need it. Walk in
          with the full story instead of reconstructing months from memory.
        </p>
        <div className="mt-6 flex justify-center sm:mt-8">
          <Button
            href={SIGNUP_URL}
            data-cta="primary"
            className="w-full !bg-white !text-gs-coral hover:!opacity-90 sm:w-auto"
          >
            {PRIMARY_CTA_LABEL}
          </Button>
        </div>
        <p className="mt-3 text-sm text-white sm:mt-4">
          No diagnosis required &middot; Free to start &middot; No credit card
        </p>
      </div>
    </section>
  )
}
