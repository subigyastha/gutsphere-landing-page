import { Hero } from '../components/Hero'
import { FounderSection } from '../components/FounderSection'
import { RecordValidationSection } from '../components/record/RecordValidationSection'
import { SocialProofSection } from '../components/SocialProofSection'
import { MissingRecordSection } from '../components/MissingRecordSection'
import { RecordScatteredToolsSection } from '../components/record/RecordScatteredToolsSection'
import { MidPageCTA } from '../components/MidPageCTA'
import { HowItWorksSection } from '../components/HowItWorksSection'
import { ProductProofSection } from '../components/ProductProofSection'
import { HighSeveritySection } from '../components/HighSeveritySection'
import { DailyValueSection } from '../components/DailyValueSection'
import { RecordContentLibrary } from '../components/record/RecordContentLibrary'
import { PrivacySection } from '../components/v2/PrivacySection'
import { FAQSection } from '../components/FAQSection'
import { FinalCTA } from '../components/FinalCTA'
import { StickyMobileCTA } from '../components/v2/StickyMobileCTA'
import { NAVIGATOR_COUNT } from '../constants'

export function RecordLanding() {
  return (
    <div className="record-landing pb-20 md:pb-0">
      <Hero />
      <FounderSection />
      <RecordValidationSection />
      <SocialProofSection />
      <MissingRecordSection />
      <RecordScatteredToolsSection />
      <MidPageCTA
        text={`Join ${NAVIGATOR_COUNT} people building the record between symptoms and answers.`}
      />
      <HowItWorksSection />
      <ProductProofSection />
      <HighSeveritySection />
      <DailyValueSection />
      <RecordContentLibrary />
      <PrivacySection />
      <FAQSection />
      <FinalCTA headline="Stop guessing what triggers your symptoms" />
      <StickyMobileCTA label="Find your patterns" />
    </div>
  )
}
