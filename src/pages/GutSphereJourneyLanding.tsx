import { JourneyProvider } from '../components/journey/JourneyContext'
import { JourneyRail } from '../components/journey/JourneyRail'
import { JourneyScrollContainer } from '../components/journey/JourneyScrollContainer'
import { JourneyCheckpoint } from '../components/journey/JourneyCheckpoint'
import { JourneyHeroIntro } from '../components/journey/JourneyHero'
import { InvestigationSection } from '../components/journey/InvestigationSection'
import { ShiftSection } from '../components/journey/ShiftSection'
import { SelfCareSection } from '../components/journey/SelfCareSection'
import { ClinicalCareSection } from '../components/journey/ClinicalCareSection'
import { ClinicalIntelligenceSection } from '../components/journey/ClinicalIntelligenceSection'
import { ComparisonSection } from '../components/journey/ComparisonSection'
import { FounderTrustSection } from '../components/journey/FounderTrustSection'
import { JourneyMomentsSection } from '../components/journey/JourneyMomentsSection'
import { DailyValueSection } from '../components/journey/DailyValueSection'
import { FinalCTA } from '../components/journey/FinalCTA'
import { JOURNEY_STAGES } from '../components/journey/constants'

export function GutSphereJourneyLanding() {
  return (
    <JourneyProvider>
      <div className="journey-landing">
        <JourneyRail />

        <JourneyScrollContainer>
          <JourneyCheckpoint
            stageIndex={0}
            stage={JOURNEY_STAGES[0]}
            id="journey-hero"
            className="journey-hero"
            hideBanner
          >
            <JourneyHeroIntro />
          </JourneyCheckpoint>

          <JourneyCheckpoint stageIndex={1} stage={JOURNEY_STAGES[1]} className="bg-gs-sand-light">
            <InvestigationSection embedded />
          </JourneyCheckpoint>

          <JourneyCheckpoint stageIndex={2} stage={JOURNEY_STAGES[2]}>
            <ShiftSection embedded />
          </JourneyCheckpoint>

          <JourneyCheckpoint stageIndex={3} stage={JOURNEY_STAGES[3]} className="bg-gs-sand-light" id="self-care">
            <SelfCareSection embedded />
          </JourneyCheckpoint>

          <JourneyCheckpoint stageIndex={4} stage={JOURNEY_STAGES[4]} id="clinical-care">
            <ClinicalCareSection embedded />
          </JourneyCheckpoint>

          <JourneyCheckpoint
            stageIndex={5}
            stage={JOURNEY_STAGES[5]}
            className="bg-gs-sand-light"
            id="clinical-intelligence"
          >
            <ClinicalIntelligenceSection embedded />
          </JourneyCheckpoint>

          <JourneyCheckpoint stageIndex={6} stage={JOURNEY_STAGES[6]}>
            <ComparisonSection embedded />
          </JourneyCheckpoint>

          <JourneyCheckpoint stageIndex={7} stage={JOURNEY_STAGES[7]} className="bg-gs-sand-light">
            <FounderTrustSection embedded />
          </JourneyCheckpoint>

          <JourneyCheckpoint stageIndex={8} stage={JOURNEY_STAGES[8]}>
            <JourneyMomentsSection embedded />
          </JourneyCheckpoint>

          <JourneyCheckpoint stageIndex={9} stage={JOURNEY_STAGES[9]} className="bg-gs-sand-light">
            <DailyValueSection embedded />
          </JourneyCheckpoint>

          <JourneyCheckpoint
            stageIndex={10}
            stage={JOURNEY_STAGES[10]}
            id="journey-stage-11"
            hideScrollHint
          >
            <FinalCTA embedded />
          </JourneyCheckpoint>
        </JourneyScrollContainer>
      </div>
    </JourneyProvider>
  )
}
