import { NAVIGATOR_COUNT } from '../constants'
import { TestimonialCarousel } from './TestimonialCarousel'

type TestimonialsSectionProps = {
  id?: string
  eyebrow?: string
  heading?: string
  subtitle?: string
  className?: string
}

export function TestimonialsSection({
  id = 'proof-heading',
  eyebrow = `Trusted by ${NAVIGATOR_COUNT} people`,
  heading = 'Loved by people living with real symptoms',
  subtitle = 'What it feels like to have a system, not scattered tools.',
  className = '',
}: TestimonialsSectionProps) {
  return (
    <section className={`section-pad bg-gs-card ${className}`} aria-labelledby={id}>
      <div className="container-narrow">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-gs-coral">{eyebrow}</p>
          <h2 id={id} className="section-heading mt-3">
            {heading}
          </h2>
          <p className="body-lg mt-3 sm:mt-4">{subtitle}</p>
        </div>

        <div className="mx-auto mt-8 max-w-4xl sm:mt-10">
          <TestimonialCarousel />
        </div>
      </div>
    </section>
  )
}
