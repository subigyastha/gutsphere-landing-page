import { Button } from '../Button'
import { DISCOVERY_ROUTE } from './constants'
import { SIGNUP_URL } from '../../constants'
import { useDiscovery } from './DiscoveryContext'

export function DiscoveryFinalCTA() {
  const { goToStage } = useDiscovery()

  return (
    <div
      id="cta"
      className="relative shrink-0 overflow-hidden rounded-xl bg-gs-coral px-4 py-4 text-center sm:px-5"
      aria-labelledby="discovery-final-cta-heading"
    >
      <div className="discovery-final-route mb-3 text-[10px] font-medium text-white/75" aria-hidden="true">
        {DISCOVERY_ROUTE}
      </div>
      <h2
        id="discovery-final-cta-heading"
        className="font-display text-base font-semibold leading-snug text-white sm:text-lg"
      >
        Begin with one gut check-in.
      </h2>
      <p className="mt-2 text-xs leading-relaxed text-white/85">
        You do not need all the answers to begin. Start with one guided check-in and build a clearer
        digestive-health journey over time.
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
          onClick={() => goToStage(0)}
          className="w-full !text-white hover:!bg-white/10 sm:w-auto"
        >
          Explore the Journey Again
        </Button>
      </div>
      <p className="mt-2 text-[10px] text-white/70">
        GutSphere supports self-care, clinical navigation, and pattern review. It does not diagnose,
        treat, or replace clinical care.
      </p>
    </div>
  )
}
