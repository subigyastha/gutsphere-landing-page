import { Button } from '../Button'
import { SIGNUP_URL } from '../../constants'
import { COPILOT_ROUTE } from '../journey/constants'
import { COPILOT_FINAL_SECTION } from '../reel/copilotOutcomeCopy'

export function ScrollGutFinalCta() {
  return (
    <section className="scroll-gut-final-cta" id="scroll-gut-cta" aria-labelledby="scroll-gut-final-title">
      <div className="scroll-gut-final-cta-inner">
        <p className="scroll-gut-final-eyebrow">{COPILOT_FINAL_SECTION.eyebrow}</p>
        <h2 id="scroll-gut-final-title" className="scroll-gut-final-title">
          {COPILOT_FINAL_SECTION.title}
        </h2>
        <p className="scroll-gut-final-intro">{COPILOT_FINAL_SECTION.intro}</p>
        <p className="scroll-gut-final-route">{COPILOT_ROUTE}</p>
        <div className="scroll-gut-final-actions">
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
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Back to top
          </Button>
        </div>
        <p className="scroll-gut-final-trust">
          GutSphere helps you organize your journey. It does not diagnose, treat, or replace clinical
          care.
        </p>
      </div>
    </section>
  )
}
