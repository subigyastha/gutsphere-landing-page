import { Style4Hero } from '../components/style4/Style4Hero'
import { Style4ConditionGrid } from '../components/style4/Style4ConditionGrid'
import { Style4WhyCards } from '../components/style4/Style4WhyCards'
import { Style4StakesCards } from '../components/style4/Style4StakesCards'
import { Style4PatternCard } from '../components/style4/Style4PatternCard'
import { Style4CapabilityCards } from '../components/style4/Style4CapabilityCards'
import { Style4VisitCard } from '../components/style4/Style4VisitCard'
import { Style4StepCards } from '../components/style4/Style4StepCards'
import { Style4ContentGrid } from '../components/style4/Style4ContentGrid'
import { Style4ProofBand } from '../components/style4/Style4ProofBand'
import { Style4FounderCard } from '../components/style4/Style4FounderCard'
import { Style4PrivacyGrid } from '../components/style4/Style4PrivacyGrid'
import { Style4FAQ } from '../components/style4/Style4FAQ'
import { FinalCTA } from '../components/FinalCTA'
import { StickyMobileCTA } from '../components/v2/StickyMobileCTA'

export function ClarityLandingV4() {
  return (
    <div className="clarity-landing style-4-landing pb-20 md:pb-0">
      <Style4Hero />
      <Style4ConditionGrid />
      <Style4WhyCards />
      <Style4StakesCards />
      <Style4PatternCard />
      <Style4CapabilityCards />
      <Style4VisitCard />
      <Style4StepCards />
      <Style4ContentGrid />
      <Style4ProofBand />
      <Style4FounderCard />
      <Style4PrivacyGrid />
      <Style4FAQ />
      <FinalCTA
        headline={'Start with one symptom.\nBuild the record your future self will need.'}
        subtext="You don't need a diagnosis. You don't need to figure it all out today."
      />
      <StickyMobileCTA />
    </div>
  )
}
