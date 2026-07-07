import { useMemo } from 'react'
import { Button } from '../components/Button'
import { ABOUT_URL, SIGNUP_URL } from '../constants'
import { OnboardProvider, useOnboard } from '../components/onboard/OnboardContext'
import { OnboardSection } from '../components/onboard/OnboardSection'
import { OnboardViewport } from '../components/onboard/OnboardViewport'
import type { BillboardSlideData } from '../components/reel/BillboardSlide'
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
import { COPILOT_ROUTE } from '../components/journey/constants'

export const ONBOARD_SECTION_COUNT = 13
const ONBOARD_SECTION_LABELS = [
  'Hero',
  'Journey',
  'Problem',
  'Shift',
  'Self Care',
  'Clinical Navigation',
  'Clinical Intelligence',
  'Why GutSphere',
  'Connected Journey',
  'Trust',
  'Journey Moments',
  'Daily Value',
  'Begin',
] as const

function OnboardLandingContent() {
  const { scrollToSection } = useOnboard()

  const heroSlides = useMemo<BillboardSlideData[]>(
    () => [
      {
        id: 'hero-copilot',
        label: 'Welcome',
        visual: 'copilot',
        headline: 'Your digestive health copilot',
        tagline: 'Before diagnosis. Between visits. Beyond treatment.',
        children: (
          <div className="billboard-slide-actions">
            <Button href={SIGNUP_URL} data-cta="primary">
              Start Your Gut Check-In
            </Button>
            <Button variant="secondary" onClick={() => scrollToSection(1)}>
              Explore the Journey
            </Button>
          </div>
        ),
      },
    ],
    [scrollToSection],
  )

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
            <Button
              variant="ghost"
              className="!text-white hover:!bg-white/10"
              onClick={() => scrollToSection(0)}
            >
              Start over
            </Button>
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
    <div className="onboard-landing">
      <OnboardViewport sectionLabels={ONBOARD_SECTION_LABELS}>
        <OnboardSection
          index={0}
          id="journey-hero"
          eyebrow="For the questions before answers"
          title="Your app copilot for digestive discovery."
          titleAs="h1"
          intro="Track what changed, review what may matter, and prepare clearer next steps."
          microcopy="GutSphere supports your journey. It does not diagnose, treat, or replace clinical care."
          slides={heroSlides}
          background="white"
          isHero
        />

        <OnboardSection
          index={1}
          id="hero-three-things"
          eyebrow="How it helps"
          title="Three moments. One guided flow."
          intro="Start with today, prepare for care, then review patterns over time."
          slides={heroThreeThingsSlides}
          background="sand-light"
        />

        <OnboardSection
          index={2}
          id="the-problem"
          eyebrow={COPILOT_PROBLEM_SECTION.eyebrow}
          title="Digestive symptoms can feel like a full-time investigation."
          microcopy="The clues are not missing. They are scattered."
          slides={COPILOT_PROBLEM_SLIDES}
          background="sand-light"
        />

        <OnboardSection
          index={3}
          id="the-shift"
          eyebrow={COPILOT_SHIFT_SECTION.eyebrow}
          title="From scattered clues to guided next steps."
          intro="Tracking is only the start. GutSphere helps you organize, connect, and prepare."
          slides={COPILOT_SHIFT_SLIDES}
          background="white"
          actions={
            <Button href={SIGNUP_URL} data-cta="primary">
              Start Your Gut Check-In
            </Button>
          }
        />

        <OnboardSection
          index={4}
          id="self-care"
          eyebrow={COPILOT_SELF_CARE_SECTION.eyebrow}
          title="Self-care that starts with one check-in."
          microcopy="Capture today. Build useful context for tomorrow."
          slides={COPILOT_SELF_CARE_SLIDES}
          background="sand"
          actions={
            <Button href={SIGNUP_URL} data-cta="primary">
              Start Your Gut Check-In
            </Button>
          }
        />

        <OnboardSection
          index={5}
          id="clinical-navigation"
          eyebrow={COPILOT_CLINICAL_NAV_SECTION.eyebrow}
          title="Appointments should not depend only on memory."
          microcopy="Bring clear context, questions, and summaries to every visit."
          slides={COPILOT_CLINICAL_NAV_SLIDES}
          background="white"
          actions={
            <Button href={SIGNUP_URL} data-cta="primary">
              Prepare for Your Next Visit
            </Button>
          }
        />

        <OnboardSection
          index={6}
          id="clinical-intelligence"
          eyebrow={COPILOT_CLINICAL_INTEL_SECTION.eyebrow}
          title="Review patterns worth discussing."
          microcopy="Signals to review with your care team, not self-diagnosis."
          slides={COPILOT_CLINICAL_INTEL_SLIDES}
          background="sand-light"
          actions={
            <Button href={SIGNUP_URL} data-cta="primary">
              See Your Gut Patterns
            </Button>
          }
        />

        <OnboardSection
          index={7}
          id="differentiation"
          eyebrow={COPILOT_DIFFERENTIATION_SECTION.eyebrow}
          title="More than logging. Built for guided decisions."
          slides={COPILOT_DIFFERENTIATION_SLIDES}
          background="white"
          actions={
            <Button href={SIGNUP_URL} variant="secondary" data-cta="primary">
              See how GutSphere works
            </Button>
          }
        />

        <OnboardSection
          index={8}
          id="connection"
          eyebrow={COPILOT_CONNECTION_SECTION.eyebrow}
          title="One connected path across your gut journey."
          microcopy={COPILOT_CONNECTION_SECTION.microcopy}
          slides={connectionSlides}
          background="sand-light"
          actions={
            <Button href={SIGNUP_URL} data-cta="primary">
              Start Your Gut Check-In
            </Button>
          }
        />

        <OnboardSection
          index={9}
          id="founder"
          eyebrow={COPILOT_FOUNDER_SECTION.eyebrow}
          title={COPILOT_FOUNDER_SECTION.title}
          microcopy={COPILOT_FOUNDER_SECTION.microcopy}
          slides={founderSlides}
          background="sand"
        />

        <OnboardSection
          index={10}
          id="journey-moments"
          eyebrow={COPILOT_JOURNEY_MOMENTS_SECTION.eyebrow}
          title="Support for each stage that matters."
          slides={COPILOT_JOURNEY_MOMENTS_SLIDES}
          background="white"
          actions={
            <Button href={SIGNUP_URL} data-cta="primary">
              Start Your Gut Check-In
            </Button>
          }
        />

        <OnboardSection
          index={11}
          id="daily-value"
          eyebrow={COPILOT_DAILY_VALUE_SECTION.eyebrow}
          title="Open the app and know your next best step."
          microcopy={COPILOT_DAILY_VALUE_SECTION.microcopy}
          slides={COPILOT_DAILY_VALUE_SLIDES}
          background="sand-light"
          actions={
            <Button href={SIGNUP_URL} data-cta="primary">
              Start Your Gut Check-In
            </Button>
          }
        />

        <OnboardSection
          index={12}
          id="cta"
          eyebrow={COPILOT_FINAL_SECTION.eyebrow}
          title={COPILOT_FINAL_SECTION.title}
          intro={COPILOT_FINAL_SECTION.intro}
          slides={finalSlides}
          background="coral"
        />
      </OnboardViewport>
    </div>
  )
}

export function OnboardLanding() {
  return (
    <OnboardProvider sectionCount={ONBOARD_SECTION_COUNT}>
      <OnboardLandingContent />
    </OnboardProvider>
  )
}
