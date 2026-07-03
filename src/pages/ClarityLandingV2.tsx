import { ClarityV2Hero } from '../components/v2/clarity/ClarityV2Hero'
import { ClarityV2ConditionHub } from '../components/v2/clarity/ClarityV2ConditionHub'
import { ClarityV2ValidationSection } from '../components/v2/clarity/ClarityV2ValidationSection'
import { ClarityV2StakesCompare } from '../components/v2/clarity/ClarityV2StakesCompare'
import { ClarityV2PatternBand } from '../components/v2/clarity/ClarityV2PatternBand'
import { ClarityV2AppShowcase } from '../components/v2/clarity/ClarityV2AppShowcase'
import { ClarityV2CalmBand } from '../components/v2/clarity/ClarityV2CalmBand'
import { ClarityV2HowItWorks } from '../components/v2/clarity/ClarityV2HowItWorks'
import { ClarityV2ContentLibrary } from '../components/v2/clarity/ClarityV2ContentLibrary'
import { ClarityV2ProofSection } from '../components/v2/clarity/ClarityV2ProofSection'
import { ClarityV2CredibilitySection } from '../components/v2/clarity/ClarityV2CredibilitySection'
import { PrivacySection } from '../components/v2/PrivacySection'
import { ClarityV2FAQ } from '../components/v2/clarity/ClarityV2FAQ'
import { FinalCTA } from '../components/FinalCTA'
import { StickyMobileCTA } from '../components/v2/StickyMobileCTA'

export function ClarityLandingV2() {
  return (
    <div className="clarity-landing clarity-v2-landing pb-20 md:pb-0">
      <ClarityV2Hero />
      <ClarityV2ConditionHub />
      <ClarityV2ValidationSection />
      <ClarityV2StakesCompare />
      <ClarityV2PatternBand />
      <ClarityV2AppShowcase />
      <ClarityV2CalmBand />
      <ClarityV2HowItWorks />
      <ClarityV2ContentLibrary />
      <ClarityV2ProofSection />
      <ClarityV2CredibilitySection />
      <PrivacySection />
      <ClarityV2FAQ />
      <FinalCTA
        headline={'Start with one symptom.\nBuild the record your future self will need.'}
        subtext="You don't need a diagnosis. You don't need to figure it all out today."
      />
      <StickyMobileCTA />
    </div>
  )
}
