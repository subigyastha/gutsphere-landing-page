import { RecordV2Hero } from '../components/v2/record/RecordV2Hero'
import { RecordV2SocialProof } from '../components/v2/record/RecordV2SocialProof'
import { RecordV2ProblemSection } from '../components/v2/record/RecordV2ProblemSection'
import { RecordV2MidCTA } from '../components/v2/record/RecordV2MidCTA'
import { RecordV2ProductProof } from '../components/v2/record/RecordV2ProductProof'
import { RecordV2DailyValue } from '../components/v2/record/RecordV2DailyValue'
import { RecordV2HowItWorks } from '../components/v2/record/RecordV2HowItWorks'
import { HighSeveritySection } from '../components/HighSeveritySection'
import { RecordV2FAQ } from '../components/v2/record/RecordV2FAQ'
import { PrivacySection } from '../components/v2/PrivacySection'
import { FounderCapsule } from '../components/community/FounderCapsule'
import { FinalCTA } from '../components/FinalCTA'
import { StickyMobileCTA } from '../components/v2/StickyMobileCTA'

export function RecordLandingV2() {
  return (
    <div className="record-v2-landing pb-20 md:pb-0">
      <RecordV2Hero />
      <RecordV2SocialProof />
      <RecordV2ProblemSection />
      <RecordV2MidCTA />
      <RecordV2ProductProof />
      <RecordV2DailyValue />
      <RecordV2HowItWorks />
      <HighSeveritySection />
      <PrivacySection />
      <RecordV2FAQ />
      <FounderCapsule />
      <FinalCTA headline="Stop guessing what triggers your symptoms" />
      <StickyMobileCTA label="Find your patterns" />
    </div>
  )
}
