import { ClarityHero } from '../components/clarity/ClarityHero'
import { CredibilitySection } from '../components/clarity/CredibilitySection'
import { StakesCompareSection } from '../components/clarity/StakesCompareSection'
import { AppShowcaseSection } from '../components/clarity/AppShowcaseSection'
import { ClarityHowItWorks } from '../components/clarity/ClarityHowItWorks'
import { ConditionHubSection } from '../components/clarity/ConditionHubSection'
import { ProofStatsSection } from '../components/clarity/ProofStatsSection'
import { ContentLibrarySection } from '../components/clarity/ContentLibrarySection'
import { ClarityFAQ } from '../components/clarity/ClarityFAQ'
import { PrivacySection } from '../components/v2/PrivacySection'
import { FinalCTA } from '../components/FinalCTA'

export function ClarityLanding() {
  return (
    <div className="clarity-landing">
      <ClarityHero />
      <CredibilitySection />
      <StakesCompareSection />
      <AppShowcaseSection />
      <ClarityHowItWorks />
      <ConditionHubSection />
      <ProofStatsSection />
      <ContentLibrarySection />
      <PrivacySection />
      <ClarityFAQ />
      <FinalCTA
        headline={'Start with one symptom.\nBuild the record your future self will need.'}
        subtext="You don't need a diagnosis. You don't need to figure it all out today."
      />
    </div>
  )
}
