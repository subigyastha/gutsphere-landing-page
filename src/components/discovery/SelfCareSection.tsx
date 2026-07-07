import { Button } from '../Button'
import { SIGNUP_URL } from '../../constants'
import { SELF_CARE_FEATURES, TODAY_MOCK_ITEMS } from './constants'
import { DiscoveryMockShell, SwipeableFeatureCards } from './SwipeableFeatureCards'

export function SelfCareSection() {
  return (
    <div className="discovery-embedded-section" id="self-care">
      <p className="text-xs leading-relaxed text-gs-text-secondary sm:text-sm">
        GutSphere helps you capture what happened today and turn it into useful context for your
        digestive-health journey.
      </p>
      <div className="discovery-pillar-split mt-3">
        <SwipeableFeatureCards items={SELF_CARE_FEATURES} />
        <DiscoveryMockShell label="Today">
          <ul className="space-y-1.5" role="list">
            {TODAY_MOCK_ITEMS.map((item) => (
              <li
                key={item.label}
                className="rounded-lg border border-gs-border/60 bg-gs-sand-light px-2.5 py-1.5"
              >
                <p className="text-[10px] font-medium uppercase tracking-wide text-gs-text-muted">
                  {item.label}
                </p>
                <p className="text-xs text-gs-text-primary">{item.value}</p>
              </li>
            ))}
          </ul>
        </DiscoveryMockShell>
      </div>
      <div className="mt-3">
        <Button href={SIGNUP_URL} data-cta="primary" className="w-full sm:w-auto">
          Start Your Gut Check-In
        </Button>
      </div>
    </div>
  )
}
