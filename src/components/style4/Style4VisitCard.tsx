import { Button } from '../Button'
import { Style4Section } from './Style4Section'
import { Style4Card } from './Style4Card'
import { Style4Reveal } from './Style4Reveal'
import { PRIMARY_CTA_LABEL, SIGNUP_URL } from '../../constants'

export function Style4VisitCard() {
  return (
    <Style4Section
      id="prepare-visit"
      eyebrow="Before your visit"
      heading="Next appointment in the next few weeks?"
      headingId="style4-visit-heading"
      background="sand-light"
      centered
    >
      <Style4Reveal>
        <Style4Card variant="coral" interactive className="mx-auto mt-8 max-w-3xl p-6 text-center sm:mt-10 sm:p-10">
        <p className="text-base leading-7 text-white sm:text-lg">
          Build your visit summary now — calm, organized, and ready when you need it. Walk in with
          the full story instead of reconstructing months from memory.
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
        </Style4Card>
      </Style4Reveal>
    </Style4Section>
  )
}
