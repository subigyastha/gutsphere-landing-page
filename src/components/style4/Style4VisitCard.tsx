import { Button } from '../Button'
import { Style4Section } from './Style4Section'
import { Style4Card } from './Style4Card'
import { Style4Reveal } from './Style4Reveal'
import { PRIMARY_CTA_LABEL, SIGNUP_URL } from '../../constants'

export function Style4VisitCard() {
  return (
    <Style4Section
      id="prepare-visit"
      eyebrow="Clinical navigation"
      heading="Next appointment in the next few weeks?"
      headingId="style4-visit-heading"
      intro="Walk in with patterns, questions, and context — not a blank mind and scattered notes."
      background="white"
      centered
    >
      <Style4Reveal>
        <Style4Card variant="coral" interactive className="mx-auto mt-8 max-w-3xl p-6 text-center sm:mt-10 sm:p-10">
          <p className="text-base leading-7 text-white sm:text-lg">
            Gutsphere helps you prepare for care — summarizing what changed, what to ask, and what
            your doctor needs to see. You stay the pilot; Gutsphere is your copilot.
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
            Complements clinical care &middot; Free to start &middot; No credit card
          </p>
        </Style4Card>
      </Style4Reveal>
    </Style4Section>
  )
}
