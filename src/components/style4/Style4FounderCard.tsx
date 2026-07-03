import { Button } from '../Button'
import { Style4Section } from './Style4Section'
import { Style4Card } from './Style4Card'
import { Style4Reveal } from './Style4Reveal'
import { ABOUT_URL } from '../../constants'

const BIMAL_PHOTO = '/bimal-maharjan.png'

const chips = [
  { label: 'Patient-built', detail: 'By someone who lived it' },
  { label: 'Decades of experience', detail: 'Real GI journey' },
  { label: 'Research-informed', detail: 'Evidence-backed insights' },
]

export function Style4FounderCard() {
  return (
    <Style4Section
      id="credibility"
      eyebrow="Why Gutsphere exists"
      heading="Built by a patient, for patients"
      headingId="style4-founder-heading"
      background="sand-light"
    >
      <Style4Reveal>
        <Style4Card interactive className="mt-8 p-6 sm:mt-10 sm:p-8 lg:p-10">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="mx-auto lg:col-span-4 lg:mx-0">
            <img
              src={BIMAL_PHOTO}
              alt="Bimal Maharjan, Founder of Gutsphere"
              width={320}
              height={320}
              loading="lazy"
              className="mx-auto h-48 w-48 rounded-2xl border-4 border-gs-sand object-cover object-top shadow-[0_8px_24px_rgba(0,0,0,0.08)] sm:h-56 sm:w-56"
            />
          </div>
          <div className="lg:col-span-8">
            <p className="body-lg max-w-xl">
              Bimal built Gutsphere because the gap between visits had no home — symptoms lived in
              your head, not in a record your care could use.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {chips.map((chip) => (
                <div
                  key={chip.label}
                  className="rounded-2xl border border-gs-border bg-gs-sand-light px-4 py-4 text-center"
                >
                  <p className="font-display text-base font-semibold text-gs-text-primary">
                    {chip.label}
                  </p>
                  <p className="mt-1 text-sm text-gs-text-muted">{chip.detail}</p>
                </div>
              ))}
            </div>
            <figure className="mt-6 rounded-2xl border border-gs-border bg-gs-sand-light p-5 sm:p-6">
              <blockquote className="font-display text-base font-medium leading-relaxed text-gs-text-primary sm:text-lg">
                &ldquo;Gutsphere exists so you don&apos;t have to carry your whole story in your
                head.&rdquo;
              </blockquote>
              <figcaption className="mt-2 text-sm text-gs-text-muted">
                Bimal Maharjan, Founder
              </figcaption>
            </figure>
            <div className="mt-6">
              <Button variant="secondary" href={ABOUT_URL} className="w-full sm:w-auto">
                Read Bimal&apos;s full story &rarr;
              </Button>
            </div>
          </div>
        </div>
        </Style4Card>
      </Style4Reveal>
    </Style4Section>
  )
}
