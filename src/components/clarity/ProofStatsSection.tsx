import { StatBlock } from './StatBlock'
import { SectionShell } from './SectionShell'
import { NAVIGATOR_COUNT, testimonials } from '../../constants'

const heroTestimonial = testimonials[0]

export function ProofStatsSection() {
  return (
    <SectionShell background="card" ariaLabelledBy="proof-stats-heading">
      <h2 id="proof-stats-heading" className="section-heading text-center">
        Trusted by real patients
      </h2>

      <div className="mt-12 grid gap-4 sm:grid-cols-3">
        <StatBlock value={NAVIGATOR_COUNT} label="People building their record" />
        <StatBlock value="60–70M" label="Americans with a digestive disease" />
        <StatBlock value="1 app" label="Replaces scattered notes & tools" />
      </div>

      <figure className="card-surface mx-auto mt-12 max-w-2xl p-8 text-center">
        <blockquote className="text-xl leading-relaxed text-gs-text-primary">
          &ldquo;{heroTestimonial.quote}&rdquo;
        </blockquote>
        <figcaption className="mt-5">
          <p className="text-lg font-semibold text-gs-text-primary">{heroTestimonial.name}</p>
          <p className="mt-1 text-base text-gs-text-muted">{heroTestimonial.detail}</p>
        </figcaption>
      </figure>
    </SectionShell>
  )
}
