import { Button } from '../Button'
import { CoralSectionGraphics } from '../CoralSectionGraphics'
import { SIGNUP_URL } from '../../constants'
import { COPILOT_ROUTE } from './constants'

interface FinalCTAProps {
  embedded?: boolean
}

export function FinalCTA({ embedded = false }: FinalCTAProps) {
  if (embedded) {
    return (
      <div
        id="cta"
        className="relative shrink-0 overflow-hidden rounded-xl bg-gs-coral px-4 py-4 text-center sm:px-5"
        aria-labelledby="journey-final-cta-heading"
      >
        <h2
          id="journey-final-cta-heading"
          className="font-display text-base font-semibold leading-snug text-white sm:text-lg"
        >
          Ready for your first gut check-in?
        </h2>
        <p className="mt-2 text-xs leading-relaxed text-white/85">
          Start with one simple check-in — before diagnosis, between visits, and beyond treatment.
        </p>
        <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:justify-center">
          <Button
            href={SIGNUP_URL}
            className="w-full !bg-white !text-gs-coral hover:!opacity-90 sm:w-auto"
            data-cta="primary"
          >
            Start Your Gut Check-In
          </Button>
          <Button
            variant="ghost"
            href="#journey-hero"
            className="w-full !text-white hover:!bg-white/10 sm:w-auto"
          >
            Explore the Journey Again
          </Button>
        </div>
        <p className="mt-2 text-[10px] text-white/70">
          GutSphere helps you organize and understand your digestive-health journey. It does not
          diagnose, treat, or replace clinical care.
        </p>
      </div>
    )
  }

  return (
    <section
      id="cta"
      className="relative overflow-hidden section-pad bg-gs-coral"
      aria-labelledby="journey-final-cta-heading"
    >
      <CoralSectionGraphics variant="cta" />
      <div className="container-narrow relative z-10 text-center">
        <h2
          id="journey-final-cta-heading"
          className="font-display text-2xl leading-8 font-semibold text-white sm:text-[32px] sm:leading-9"
        >
          Ready for your first gut check-in?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-white/85">
          Start with one simple check-in and begin building a clearer digestive-health journey —
          before diagnosis, between visits, and beyond treatment.
        </p>

        <p className="mx-auto mt-3 max-w-lg text-sm text-white/75">{COPILOT_ROUTE}</p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
          <Button
            href={SIGNUP_URL}
            className="w-full !bg-white !text-gs-coral hover:!opacity-90 sm:w-auto"
            data-cta="primary"
          >
            Start Your Gut Check-In
          </Button>
          <Button
            variant="ghost"
            href="#journey-hero"
            className="w-full !text-white hover:!bg-white/10 sm:w-auto"
          >
            Explore the Journey Again
          </Button>
        </div>

        <p className="mt-6 text-sm text-white/70">
          GutSphere helps you organize and understand your digestive-health journey. It does not
          diagnose, treat, or replace clinical care.
        </p>
      </div>
    </section>
  )
}
