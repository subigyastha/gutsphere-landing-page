import { CommunityHero } from '../components/community/CommunityHero'
import { FounderCapsule } from '../components/community/FounderCapsule'
import { ValidationSection } from '../components/community/ValidationSection'
import { PeerStoriesSection } from '../components/community/PeerStoriesSection'
import { YourRecordSection } from '../components/community/YourRecordSection'
import { CommunityHowItWorks } from '../components/community/CommunityHowItWorks'
import { YouContentLibrary } from '../components/community/YouContentLibrary'
import { PrivacySection } from '../components/v2/PrivacySection'
import { CommunityFAQ } from '../components/community/CommunityFAQ'
import { FinalCTA } from '../components/FinalCTA'
import { StickyMobileCTA } from '../components/v2/StickyMobileCTA'

export function NavigatorsLanding() {
  return (
    <div className="you-landing pb-20 md:pb-0">
      <CommunityHero />
      <FounderCapsule />
      <ValidationSection />
      <PeerStoriesSection />
      <YourRecordSection />
      <CommunityHowItWorks />
      <YouContentLibrary />
      <PrivacySection />
      <CommunityFAQ />
      <FinalCTA
        headline="Prepare for your next visit — start free"
        subtext="No diagnosis required. No card to start."
      />
      <StickyMobileCTA label="Prepare for your visit" />
    </div>
  )
}
