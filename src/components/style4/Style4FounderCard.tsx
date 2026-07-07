import { Button } from '../Button'
import { Style4Section } from './Style4Section'
import { Style4Card } from './Style4Card'
import { Style4Reveal } from './Style4Reveal'
import { ABOUT_URL } from '../../constants'

const BIMAL_PHOTO = '/bimal-maharjan.png'

export function Style4FounderCard() {
  return (
    <Style4Section
      id="credibility"
      eyebrow="Built from lived experience"
      heading="Created to make the digestive health journey clearer"
      headingId="style4-founder-heading"
      intro="Gutsphere was built from patient confusion, hard-won insight, and the desire to make the journey less lonely — through symptoms, diagnosis, treatment, and long-term gut health."
      background="sand-light"
    >
      <Style4Reveal>
        <Style4Card interactive className="mt-8 p-6 sm:mt-10 sm:p-8">
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-8">
            <img
              src={BIMAL_PHOTO}
              alt="Bimal Maharjan, Founder of Gutsphere"
              width={120}
              height={120}
              loading="lazy"
              className="h-24 w-24 shrink-0 rounded-2xl border-4 border-gs-sand object-cover object-top shadow-sm sm:h-28 sm:w-28"
            />
            <div className="flex-1">
              <blockquote className="font-display text-base font-medium leading-relaxed text-gs-text-primary sm:text-lg">
                &ldquo;I built Gutsphere because navigating digestive health should not feel like
                guessing alone. You deserve a copilot for the full journey.&rdquo;
              </blockquote>
              <p className="mt-2 text-sm text-gs-text-muted">Bimal Maharjan, Founder</p>
              <div className="mt-4">
                <Button variant="secondary" href={ABOUT_URL} className="w-full sm:w-auto">
                  Read the full story &rarr;
                </Button>
              </div>
            </div>
          </div>
        </Style4Card>
      </Style4Reveal>
    </Style4Section>
  )
}
