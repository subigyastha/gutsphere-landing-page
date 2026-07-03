import { Button } from './Button'
import { CoralSectionGraphics } from './CoralSectionGraphics'
import { PRIMARY_CTA_LABEL, SIGNUP_URL } from '../constants'

interface FinalCTAProps {
  headline?: string
  subtext?: string
}

export function FinalCTA({
  headline = 'Start with one symptom.\nBuild the record your future self will need.',
  subtext = "You don't need a diagnosis to start building clarity.",
}: FinalCTAProps) {
  const headlineLines = headline.split('\n')

  return (
    <section id="cta" className="relative overflow-hidden section-pad bg-gs-coral" aria-labelledby="final-cta-heading">
      <CoralSectionGraphics variant="cta" />
      <div className="container-narrow relative z-10 text-center">
        <h2
          id="final-cta-heading"
          className="font-display text-2xl leading-7 font-semibold text-white sm:text-[28px] sm:leading-8"
        >
          {headlineLines.map((line, i) => (
            <span key={i}>
              {line}
              {i < headlineLines.length - 1 && <br />}
            </span>
          ))}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-6 text-white/90">{subtext}</p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
          <Button
            href={SIGNUP_URL}
            className="w-full !bg-white !text-gs-coral hover:!opacity-90 sm:w-auto"
            data-cta="primary"
          >
            {PRIMARY_CTA_LABEL}
          </Button>
          <Button
            variant="ghost"
            href="#how-it-works"
            className="w-full !text-white hover:!bg-white/10 sm:w-auto"
          >
            See how it works
          </Button>
        </div>

        <p className="mt-6 text-sm text-white/70">
          Free to start &middot; No credit card &middot; Cancel anytime
        </p>
      </div>
    </section>
  )
}
