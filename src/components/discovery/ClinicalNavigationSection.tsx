import { Button } from '../Button'
import { SIGNUP_URL } from '../../constants'
import { CLINICAL_NAV_FEATURES, VISIT_PREP_ITEMS } from './constants'
import { DiscoveryMockShell, SwipeableFeatureCards } from './SwipeableFeatureCards'

export function ClinicalNavigationSection() {
  return (
    <div className="discovery-embedded-section" id="clinical-navigation">
      <p className="text-xs leading-relaxed text-gs-text-secondary sm:text-sm">
        GutSphere helps you organize symptoms, stool changes, flare-up history, treatment updates,
        test results, and questions before your next care conversation.
      </p>
      <div className="discovery-pillar-split mt-3">
        <SwipeableFeatureCards items={CLINICAL_NAV_FEATURES} />
        <DiscoveryMockShell
          label="Visit-prep report preview"
          footer="GutSphere helps you prepare for care conversations. It does not make clinical decisions."
        >
          <ul className="space-y-1.5" role="list">
            {VISIT_PREP_ITEMS.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 rounded-lg border border-gs-border/60 bg-gs-sand-light px-2.5 py-1.5 text-xs text-gs-text-secondary"
              >
                <span className="h-2.5 w-2.5 shrink-0 rounded border border-gs-coral/40" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </DiscoveryMockShell>
      </div>
      <div className="mt-3">
        <Button href={SIGNUP_URL} data-cta="primary" className="w-full sm:w-auto">
          Prepare for Your Next Visit
        </Button>
      </div>
    </div>
  )
}
