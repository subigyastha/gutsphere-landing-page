import { GuidedProvider, useGuided } from '../components/guided/GuidedContext'
import { GuidedHUD } from '../components/guided/GuidedHUD'
import { GuidedProgressRail } from '../components/guided/GuidedProgressRail'
import { GuidedStickyCTA } from '../components/guided/GuidedStickyCTA'
import { GuidedSkipBar } from '../components/guided/GuidedSkipBar'
import { JourneyCard } from '../components/guided/JourneyCard'
import { JOURNEY_CARDS } from '../components/guided/constants'

export function GuidedJourneyLanding() {
  return (
    <GuidedProvider>
      <GuidedLandingInner />
    </GuidedProvider>
  )
}

function GuidedLandingInner() {
  const { showStickyCta } = useGuided()

  return (
    <div className={`guided-landing ${showStickyCta ? 'guided-landing--sticky-cta' : ''}`}>
      <GuidedSkipBar />
      <GuidedHUD />
      <GuidedProgressRail />
      <GuidedStickyCTA />

      <div className="guided-cards">
        {JOURNEY_CARDS.map((card) => (
          <JourneyCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  )
}
