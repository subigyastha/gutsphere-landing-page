import { SectionShell } from '../../clarity/SectionShell'
import { NAVIGATOR_COUNT } from '../../../constants'
import { TestimonialCarousel } from '../../TestimonialCarousel'

export function ClarityV2ProofSection() {
  return (
    <SectionShell background="card" ariaLabelledBy="clarity-v2-proof-heading">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-gs-coral">
          Trusted by {NAVIGATOR_COUNT} people
        </p>
        <h2 id="clarity-v2-proof-heading" className="section-heading mt-3">
          Loved by people living with real symptoms
        </h2>
        <p className="body-lg mt-3 sm:mt-4">
          What it feels like to have a system, not scattered tools.
        </p>
      </div>

      <div className="mx-auto mt-8 max-w-4xl sm:mt-10">
        <TestimonialCarousel />
      </div>
    </SectionShell>
  )
}
