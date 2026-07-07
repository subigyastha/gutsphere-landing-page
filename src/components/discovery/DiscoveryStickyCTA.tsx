import { SIGNUP_URL } from '../../constants'
import { useDiscovery } from './DiscoveryContext'

export function DiscoveryStickyCTA() {
  const { activeStage } = useDiscovery()

  if (activeStage <= 0) return null

  return (
    <div
      className="discovery-sticky-cta fixed inset-x-0 bottom-0 z-40 border-t border-gs-border bg-gs-card/95 p-4 backdrop-blur-md lg:hidden"
      role="region"
      aria-label="Quick action"
    >
      <a
        href={SIGNUP_URL}
        className="flex min-h-12 w-full items-center justify-center rounded-xl bg-gs-coral px-4 text-sm font-semibold text-white"
        data-cta="primary"
      >
        Start Your Gut Check-In
      </a>
    </div>
  )
}
