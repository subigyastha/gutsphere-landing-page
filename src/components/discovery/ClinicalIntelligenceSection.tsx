import { Button } from '../Button'
import { SIGNUP_URL } from '../../constants'
import { CLINICAL_INTEL_FEATURES, PATTERN_INSIGHTS } from './constants'
import { DiscoveryMockShell, SwipeableFeatureCards } from './SwipeableFeatureCards'

export function ClinicalIntelligenceSection() {
  return (
    <div className="discovery-embedded-section" id="clinical-intelligence">
      <p className="text-xs leading-relaxed text-gs-text-secondary sm:text-sm">
        GutSphere helps turn daily check-ins, flare-up notes, treatment changes, and test results
        into timelines, trends, and summaries you can review over time.
      </p>
      <div className="discovery-pillar-split mt-3">
        <SwipeableFeatureCards items={CLINICAL_INTEL_FEATURES} />
        <DiscoveryMockShell label="Pattern Intelligence dashboard">
          <ul className="space-y-1.5" role="list">
            {PATTERN_INSIGHTS.map((insight) => (
              <li
                key={insight.text}
                className="rounded-lg border border-gs-border bg-gs-card px-2.5 py-2"
              >
                <p className="text-xs text-gs-text-primary">{insight.text}</p>
                <p className="mt-1 text-[10px] font-medium text-gs-coral">{insight.label}</p>
              </li>
            ))}
          </ul>
        </DiscoveryMockShell>
      </div>
      <div className="mt-3">
        <Button href={SIGNUP_URL} data-cta="primary" className="w-full sm:w-auto">
          See Your Gut Patterns
        </Button>
      </div>
    </div>
  )
}
