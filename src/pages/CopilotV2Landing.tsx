import { useCopilotPicker } from '../components/copilot-v2/useCopilotPicker'
import { useJourneyMap } from '../components/copilot-v2/useJourneyMap'
import { useReveal } from '../components/copilot-v2/useReveal'
import { CopilotNav } from '../components/copilot-v2/CopilotChrome'
import { CopilotBottomBand } from '../components/copilot-v2/CopilotBottomBand'
import { CopilotHero } from '../components/copilot-v2/CopilotHero'
import { ProblemSection } from '../components/copilot-v2/ProblemSection'
import { JourneyMapSection } from '../components/copilot-v2/JourneyMapSection'
import { SystemSection } from '../components/copilot-v2/SystemSection'
import { NameNoNameSection } from '../components/copilot-v2/NameNoNameSection'
import OneFlareStartFinishSection from '../components/sections/one-flare-start-finish-section'
import { CompareSection, DifferenceSection } from '../components/copilot-v2/CompareSections'
import { HonestySection, PricingSection } from '../components/copilot-v2/ClosingSections'
import { ProofSection, TrustSection, FAQSection } from '../components/copilot-v2/ProofTrustFaq'
import { StickyCTA } from '../components/copilot-v2/StickyCTA'
import '../styles/copilot-v2.css'

export function CopilotV2Landing() {
  const picker = useCopilotPicker()
  const journey = useJourneyMap()
  useReveal()

  return (
    <div className="copilot-v2" id="top">
      <CopilotNav />
      <main>
        <CopilotHero picker={picker} />
        <ProofSection />
        <ProblemSection />
        <JourneyMapSection journey={journey} />
        <NameNoNameSection />
        <SystemSection />
        <OneFlareStartFinishSection />
        <CompareSection />
        <DifferenceSection />
        <TrustSection />
        <HonestySection />
        <PricingSection />
        <FAQSection />
      </main>
      <CopilotBottomBand />
      <StickyCTA />
    </div>
  )
}
