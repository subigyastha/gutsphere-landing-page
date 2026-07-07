import { Button } from '../components/Button'
import { ABOUT_URL, SIGNUP_URL } from '../constants'
import {
  COPILOT_CLINICAL_INTEL_SECTION,
  COPILOT_CLINICAL_INTEL_SLIDES,
  COPILOT_CLINICAL_NAV_SECTION,
  COPILOT_CLINICAL_NAV_SLIDES,
  COPILOT_CONNECTION_SECTION,
  COPILOT_CONNECTION_SLIDES,
  COPILOT_DAILY_VALUE_SECTION,
  COPILOT_DAILY_VALUE_SLIDES,
  COPILOT_DIFFERENTIATION_SECTION,
  COPILOT_DIFFERENTIATION_SLIDES,
  COPILOT_FINAL_SECTION,
  COPILOT_FOUNDER_SECTION,
  COPILOT_FOUNDER_SLIDES,
  COPILOT_JOURNEY_MOMENTS_SECTION,
  COPILOT_JOURNEY_MOMENTS_SLIDES,
  COPILOT_PROBLEM_SECTION,
  COPILOT_PROBLEM_SLIDES,
  COPILOT_SELF_CARE_SECTION,
  COPILOT_SELF_CARE_SLIDES,
  COPILOT_SHIFT_SECTION,
  COPILOT_SHIFT_SLIDES,
} from '../components/reel/copilotOutcomeCopy'
import { ReelProvider, useReel } from '../components/reel/ReelContext'
import { ReelFocusedRowSection } from '../components/reel/ReelFocusedRowSection'
import { ReelScrollySection } from '../components/reel/ReelScrollySection'
import { ReelSection } from '../components/reel/ReelSection'
import { ReelViewport } from '../components/reel/ReelViewport'
import type { BillboardSlideData } from '../components/reel/BillboardSlide'
import { COPILOT_ROUTE } from '../components/journey/constants'

function ExploreAgainButton() {
  const { scrollToReel } = useReel()
  return (
    <Button variant="ghost" onClick={() => scrollToReel(0)} className="!text-white hover:!bg-white/10">
      Explore the Journey Again
    </Button>
  )
}

function HeroActions() {
  const { scrollToReel } = useReel()
  return (
    <div className="billboard-slide-actions">
      <Button href={SIGNUP_URL} data-cta="primary">
        Start Your Gut Check-In
      </Button>
      <Button variant="secondary" onClick={() => scrollToReel(1)}>
        Explore the Journey
      </Button>
    </div>
  )
}

function ReelLandingContent() {
  const heroSlides: BillboardSlideData[] = [
    {
      id: 'hero-copilot',
      label: 'Welcome',
      visual: 'copilot',
      headline: 'Your digestive health copilot',
      tagline: 'Before diagnosis. Between visits. Beyond treatment.',
      children: <HeroActions />,
    },
  ]

  const heroThreeThingsSlides: BillboardSlideData[] = [
    {
      id: 'hero-three-before',
      label: 'Before diagnosis',
      visual: 'route',
      visualLabel: 'Stage 1',
      headline: 'Before diagnosis',
      tagline: 'Capture clues clearly from day one.',
    },
    {
      id: 'hero-three-between',
      label: 'Between visits',
      visual: 'visit',
      visualLabel: 'Stage 2',
      headline: 'Between visits',
      tagline: 'Stay prepared with clean context.',
    },
    {
      id: 'hero-three-beyond',
      label: 'Beyond treatment',
      visual: 'clarity',
      visualLabel: 'Stage 3',
      headline: 'Beyond treatment',
      tagline: 'Build long-term gut-health continuity.',
    },
  ]

  const connectionSlides: BillboardSlideData[] = COPILOT_CONNECTION_SLIDES.map((slide) => ({
    ...slide,
    children: <p className="billboard-slide-route">{COPILOT_ROUTE}</p>,
  }))

  const founderSlides: BillboardSlideData[] = COPILOT_FOUNDER_SLIDES.map((slide, i) =>
    i === 1
      ? {
          ...slide,
          children: (
            <Button variant="secondary" href={ABOUT_URL}>
              Why We Built GutSphere
            </Button>
          ),
        }
      : slide,
  )

  const finalSlides: BillboardSlideData[] = [
    {
      id: 'final-clarity',
      label: 'Clarity',
      visual: 'clarity',
      visualLabel: 'Clarity Point',
      headline: 'Ready to feel more in control of your gut journey?',
      tagline: COPILOT_ROUTE,
      children: (
        <>
          <div className="billboard-slide-actions billboard-slide-actions--center">
            <Button
              href={SIGNUP_URL}
              className="!bg-white !text-gs-coral hover:!opacity-90"
              data-cta="primary"
            >
              Start Your Gut Check-In
            </Button>
            <ExploreAgainButton />
          </div>
          <p className="billboard-slide-trust">
            GutSphere helps you organize your journey. It does not diagnose, treat, or replace
            clinical care.
          </p>
        </>
      ),
    },
  ]

  return (
    <ReelViewport>
      <ReelSection
        index={0}
        id="journey-hero"
        eyebrow="Welcome aboard"
        title="Your digestive health copilot — before diagnosis, between visits, and beyond treatment."
        titleAs="h1"
        intro="Digestive symptoms are hard to navigate when every day brings different clues."
        microcopy="GutSphere does not diagnose, treat, or replace your doctor."
        slides={heroSlides}
        carouselLabel="Hero"
        background="white"
        isHero
      />

      <ReelFocusedRowSection
        index={1}
        id="hero-three-things"
        eyebrow="How GutSphere supports you"
        title="Three moments. One continuous copilot."
        intro="A quick view of where the product helps most."
        slides={heroThreeThingsSlides}
        background="sand-light"
      />

      <ReelScrollySection
        index={2}
        id="the-problem"
        eyebrow={COPILOT_PROBLEM_SECTION.eyebrow}
        title={COPILOT_PROBLEM_SECTION.title}
        microcopy={COPILOT_PROBLEM_SECTION.microcopy}
        slides={COPILOT_PROBLEM_SLIDES}
        background="sand-light"
      />

      <ReelScrollySection
        index={3}
        id="the-shift"
        eyebrow={COPILOT_SHIFT_SECTION.eyebrow}
        title={COPILOT_SHIFT_SECTION.title}
        intro={COPILOT_SHIFT_SECTION.intro}
        slides={COPILOT_SHIFT_SLIDES}
        background="white"
      />

      <ReelScrollySection
        index={4}
        id="self-care"
        eyebrow={COPILOT_SELF_CARE_SECTION.eyebrow}
        title={COPILOT_SELF_CARE_SECTION.title}
        microcopy={COPILOT_SELF_CARE_SECTION.microcopy}
        slides={COPILOT_SELF_CARE_SLIDES}
        background="sand"
        actions={
          <Button href={SIGNUP_URL} data-cta="primary">
            Start Your Gut Check-In
          </Button>
        }
      />

      <ReelScrollySection
        index={5}
        id="clinical-navigation"
        eyebrow={COPILOT_CLINICAL_NAV_SECTION.eyebrow}
        title={COPILOT_CLINICAL_NAV_SECTION.title}
        microcopy={COPILOT_CLINICAL_NAV_SECTION.microcopy}
        slides={COPILOT_CLINICAL_NAV_SLIDES}
        background="white"
        actions={
          <Button href={SIGNUP_URL} data-cta="primary">
            Prepare for Your Next Visit
          </Button>
        }
      />

      <ReelScrollySection
        index={6}
        id="clinical-intelligence"
        eyebrow={COPILOT_CLINICAL_INTEL_SECTION.eyebrow}
        title={COPILOT_CLINICAL_INTEL_SECTION.title}
        microcopy={COPILOT_CLINICAL_INTEL_SECTION.microcopy}
        slides={COPILOT_CLINICAL_INTEL_SLIDES}
        background="sand-light"
        actions={
          <Button href={SIGNUP_URL} data-cta="primary">
            See Your Gut Patterns
          </Button>
        }
      />

      <ReelScrollySection
        index={7}
        id="differentiation"
        eyebrow={COPILOT_DIFFERENTIATION_SECTION.eyebrow}
        title={COPILOT_DIFFERENTIATION_SECTION.title}
        slides={COPILOT_DIFFERENTIATION_SLIDES}
        background="white"
      />

      <ReelSection
        index={8}
        id="connection"
        eyebrow={COPILOT_CONNECTION_SECTION.eyebrow}
        title={COPILOT_CONNECTION_SECTION.title}
        microcopy={COPILOT_CONNECTION_SECTION.microcopy}
        slides={connectionSlides}
        carouselLabel="Connection section"
        background="sand-light"
      />

      <ReelScrollySection
        index={9}
        id="founder"
        eyebrow={COPILOT_FOUNDER_SECTION.eyebrow}
        title={COPILOT_FOUNDER_SECTION.title}
        microcopy={COPILOT_FOUNDER_SECTION.microcopy}
        slides={founderSlides}
        background="sand"
      />

      <ReelScrollySection
        index={10}
        id="journey-moments"
        eyebrow={COPILOT_JOURNEY_MOMENTS_SECTION.eyebrow}
        title={COPILOT_JOURNEY_MOMENTS_SECTION.title}
        slides={COPILOT_JOURNEY_MOMENTS_SLIDES}
        background="white"
      />

      <ReelScrollySection
        index={11}
        id="daily-value"
        eyebrow={COPILOT_DAILY_VALUE_SECTION.eyebrow}
        title={COPILOT_DAILY_VALUE_SECTION.title}
        microcopy={COPILOT_DAILY_VALUE_SECTION.microcopy}
        slides={COPILOT_DAILY_VALUE_SLIDES}
        background="sand-light"
      />

      <ReelSection
        index={12}
        id="cta"
        eyebrow={COPILOT_FINAL_SECTION.eyebrow}
        title={COPILOT_FINAL_SECTION.title}
        intro={COPILOT_FINAL_SECTION.intro}
        slides={finalSlides}
        carouselLabel="Final call to action"
        background="coral"
        isLast
      />
    </ReelViewport>
  )
}

export function GutSphereReelLanding() {
  return (
    <ReelProvider>
      <div className="reel-landing">
        <ReelLandingContent />
      </div>
    </ReelProvider>
  )
}
