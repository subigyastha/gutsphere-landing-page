import { YouV2Hero } from '../components/v2/you/YouV2Hero'
import { YouV2ValidationSection } from '../components/v2/you/YouV2ValidationSection'
import { PeerStoriesV2Section } from '../components/v2/you/PeerStoriesV2Section'
import { YouV2ContentLibrary } from '../components/v2/you/YouV2ContentLibrary'
import { YourRecordV2Section } from '../components/v2/you/YourRecordV2Section'
import { CommunityHowItWorks } from '../components/community/CommunityHowItWorks'
import { YouV2FAQ } from '../components/v2/you/YouV2FAQ'
import { PrivacySection } from '../components/v2/PrivacySection'
import { FounderCapsule } from '../components/community/FounderCapsule'
import { FinalCTA } from '../components/FinalCTA'
import { StickyMobileCTA } from '../components/v2/StickyMobileCTA'

export function NavigatorsLandingV2() {
  return (
    <div className="you-v2-landing pb-20 md:pb-0">
      <YouV2Hero />
      <YouV2ValidationSection />
      <PeerStoriesV2Section />
      <YouV2ContentLibrary />
      <YourRecordV2Section />
      <CommunityHowItWorks />
      <PrivacySection />
      <YouV2FAQ />
      <FounderCapsule />
      <FinalCTA
        headline="Prepare for your next visit — start free"
        subtext="No diagnosis required. No card to start."
      />
      <StickyMobileCTA label="Prepare for your visit" />
    </div>
  )
}
