import { useEffect } from 'react'
import { DiscoveryProvider, useDiscovery } from '../components/discovery/DiscoveryContext'
import { DiscoveryRail } from '../components/discovery/DiscoveryRail'
import { DiscoveryScrollContainer } from '../components/discovery/DiscoveryScrollContainer'
import { DiscoveryCheckpoint } from '../components/discovery/DiscoveryCheckpoint'
import { DiscoveryHero } from '../components/discovery/DiscoveryHero'
import { JourneySelector } from '../components/discovery/JourneySelector'
import { ProblemSection } from '../components/discovery/ProblemSection'
import { ShiftSection } from '../components/discovery/ShiftSection'
import { SelfCareSection } from '../components/discovery/SelfCareSection'
import { ClinicalNavigationSection } from '../components/discovery/ClinicalNavigationSection'
import { ClinicalIntelligenceSection } from '../components/discovery/ClinicalIntelligenceSection'
import { GuidanceSection } from '../components/discovery/GuidanceSection'
import { FounderSection } from '../components/discovery/FounderSection'
import { ResourcesSection } from '../components/discovery/ResourcesSection'
import { DiscoveryFinalCTA } from '../components/discovery/DiscoveryFinalCTA'
import { DiscoveryStickyCTA } from '../components/discovery/DiscoveryStickyCTA'
import { DISCOVERY_STAGES } from '../components/discovery/constants'

const HASH_TO_STAGE: Record<string, number> = {
  'discovery-hero': 0,
  'journey-selector': 1,
  'the-problem': 2,
  'the-shift': 3,
  'how-it-helps': 4,
  'self-care': 4,
  'clinical-navigation': 5,
  'clinical-intelligence': 6,
  guidance: 7,
  founder: 8,
  resources: 9,
  cta: 10,
}

function DiscoveryHashSync() {
  const { goToStage } = useDiscovery()

  useEffect(() => {
    const sync = () => {
      const hash = window.location.hash.replace('#', '')
      if (!hash) return
      const stage = HASH_TO_STAGE[hash]
      if (stage != null) goToStage(stage)
    }
    sync()
    window.addEventListener('hashchange', sync)
    return () => window.removeEventListener('hashchange', sync)
  }, [goToStage])

  return null
}

export function DiscoveryLanding() {
  return (
    <DiscoveryProvider>
      <DiscoveryHashSync />
      <div className="journey-landing discovery-landing">
        <DiscoveryRail />
        <DiscoveryStickyCTA />

        <DiscoveryScrollContainer>
          <DiscoveryCheckpoint
            stageIndex={0}
            stage={DISCOVERY_STAGES[0]}
            id="discovery-hero"
            hideBanner
          >
            <DiscoveryHero />
          </DiscoveryCheckpoint>

          <DiscoveryCheckpoint
            stageIndex={1}
            stage={DISCOVERY_STAGES[1]}
            id="journey-selector"
            className="bg-gs-sand-light"
          >
            <JourneySelector />
          </DiscoveryCheckpoint>

          <DiscoveryCheckpoint stageIndex={2} stage={DISCOVERY_STAGES[2]} id="the-problem">
            <ProblemSection />
          </DiscoveryCheckpoint>

          <DiscoveryCheckpoint
            stageIndex={3}
            stage={DISCOVERY_STAGES[3]}
            className="bg-gs-sand-light"
            id="the-shift"
          >
            <ShiftSection />
          </DiscoveryCheckpoint>

          <DiscoveryCheckpoint stageIndex={4} stage={DISCOVERY_STAGES[4]} id="how-it-helps">
            <SelfCareSection />
          </DiscoveryCheckpoint>

          <DiscoveryCheckpoint
            stageIndex={5}
            stage={DISCOVERY_STAGES[5]}
            className="bg-gs-sand-light"
          >
            <ClinicalNavigationSection />
          </DiscoveryCheckpoint>

          <DiscoveryCheckpoint stageIndex={6} stage={DISCOVERY_STAGES[6]}>
            <ClinicalIntelligenceSection />
          </DiscoveryCheckpoint>

          <DiscoveryCheckpoint
            stageIndex={7}
            stage={DISCOVERY_STAGES[7]}
            className="bg-gs-sand-light"
          >
            <GuidanceSection />
          </DiscoveryCheckpoint>

          <DiscoveryCheckpoint stageIndex={8} stage={DISCOVERY_STAGES[8]}>
            <FounderSection />
          </DiscoveryCheckpoint>

          <DiscoveryCheckpoint
            stageIndex={9}
            stage={DISCOVERY_STAGES[9]}
            className="bg-gs-sand-light"
          >
            <ResourcesSection />
          </DiscoveryCheckpoint>

          <DiscoveryCheckpoint
            stageIndex={10}
            stage={DISCOVERY_STAGES[10]}
            hideScrollHint
          >
            <DiscoveryFinalCTA />
          </DiscoveryCheckpoint>
        </DiscoveryScrollContainer>
      </div>
    </DiscoveryProvider>
  )
}
