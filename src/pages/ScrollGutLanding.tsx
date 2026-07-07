import { ScrollGutHero } from '../components/scroll-gut/ScrollGutHero'
import { ScrollGutJourney } from '../components/scroll-gut/ScrollGutJourney'
import { ScrollGutFinalCta } from '../components/scroll-gut/ScrollGutFinalCta'

export function ScrollGutLanding() {
  return (
    <div className="scroll-gut-landing gutsphere-scroll-landing">
      <ScrollGutHero />
      <ScrollGutJourney />
      <ScrollGutFinalCta />
    </div>
  )
}
