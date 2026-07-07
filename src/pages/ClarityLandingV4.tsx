import { Style4Hero } from '../components/style4/Style4Hero'
import { Style4WhyCards } from '../components/style4/Style4WhyCards'
import { Style4ShiftSection } from '../components/style4/Style4ShiftSection'
import { Style4PillarsSection } from '../components/style4/Style4PillarsSection'
import { Style4DifferentiationSection } from '../components/style4/Style4DifferentiationSection'
import { Style4FounderCard } from '../components/style4/Style4FounderCard'
import { Style4ConditionGrid } from '../components/style4/Style4ConditionGrid'
import { Style4VisitCard } from '../components/style4/Style4VisitCard'
import { Style4StepCards } from '../components/style4/Style4StepCards'
import { Style4ContentGrid } from '../components/style4/Style4ContentGrid'
import { Style4ProofBand } from '../components/style4/Style4ProofBand'
import { Style4PrivacyGrid } from '../components/style4/Style4PrivacyGrid'
import { Style4FAQ } from '../components/style4/Style4FAQ'
import { FinalCTA } from '../components/FinalCTA'
import { StickyMobileCTA } from '../components/v2/StickyMobileCTA'

export function ClarityLandingV4() {
  return (
    <div className="clarity-landing style-4-landing pb-20 md:pb-0">
      <Style4Hero />
      <Style4WhyCards />
      <Style4ShiftSection />
      <Style4PillarsSection />
      <Style4DifferentiationSection />
      <Style4FounderCard />
      <Style4ConditionGrid />
      <Style4VisitCard />
      <Style4StepCards />
      <Style4ContentGrid />
      <Style4ProofBand />
      <Style4PrivacyGrid />
      <Style4FAQ />
      <FinalCTA
        headline={'Stop guessing your way through gut health.\nStart moving with a copilot.'}
        subtext="Free to start. No diagnosis required. Your personal GI health operating system begins here."
      />
      <StickyMobileCTA />
    </div>
  )
}
