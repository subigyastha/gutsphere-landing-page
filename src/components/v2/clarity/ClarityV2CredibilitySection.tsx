import { Button } from '../../Button'
import { SectionShell } from '../../clarity/SectionShell'
import { ABOUT_URL } from '../../../constants'

const BIMAL_PHOTO = '/bimal-maharjan.png'

const chips = [
  { label: 'Patient-built', detail: 'By someone who lived it' },
  { label: 'Decades of experience', detail: 'Real GI journey' },
  { label: 'Research-informed', detail: 'Evidence-backed insights' },
]

export function ClarityV2CredibilitySection() {
  return (
    <SectionShell id="credibility" background="card" ariaLabelledBy="clarity-v2-credibility-heading">
      <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
        <div className="relative mx-auto lg:col-span-5 lg:mx-0">
          <div
            className="absolute -left-2 top-0 bottom-0 w-1 rounded-full bg-gs-coral"
            aria-hidden="true"
          />
          <img
            src={BIMAL_PHOTO}
            alt="Bimal Maharjan, Founder of Gutsphere"
            width={320}
            height={320}
            loading="lazy"
            className="ml-4 h-48 w-48 rounded-2xl border-4 border-gs-sand object-cover object-top shadow-[0_8px_24px_rgba(0,0,0,0.08)] sm:h-64 sm:w-64"
          />
        </div>

        <div className="lg:col-span-7">
          <p className="text-sm font-medium text-gs-coral">Why Gutsphere exists</p>
          <h2 id="clarity-v2-credibility-heading" className="section-heading mt-2">
            Built by a patient, for patients
          </h2>
          <p className="body-lg mt-4 max-w-xl">
            Bimal built Gutsphere because the gap between visits had no home — symptoms lived in
            your head, not in a record your care could use.
          </p>

          <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-3">
            {chips.map((chip) => (
              <div key={chip.label} className="card-surface px-4 py-4 text-center">
                <p className="font-display text-base font-semibold text-gs-text-primary">
                  {chip.label}
                </p>
                <p className="mt-1 text-sm text-gs-text-muted">{chip.detail}</p>
              </div>
            ))}
          </div>

          <figure className="card-surface mt-6 px-5 py-5 sm:mt-8 sm:px-6">
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
    </SectionShell>
  )
}
