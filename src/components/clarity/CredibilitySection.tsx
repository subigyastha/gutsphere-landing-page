import { Button } from '../Button'
import { SectionShell } from './SectionShell'
import { ABOUT_URL } from '../../constants'

const BIMAL_PHOTO = '/bimal-maharjan.png'

const chips = [
  { label: 'Patient-built', detail: 'By someone who lived it' },
  { label: 'Decades of experience', detail: 'Real GI journey' },
  { label: 'Research-informed', detail: 'Evidence-backed insights' },
]

export function CredibilitySection() {
  return (
    <SectionShell id="credibility" background="card" ariaLabelledBy="credibility-heading">
      <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="relative lg:col-span-5">
          <div className="absolute -left-2 top-0 bottom-0 w-1 rounded-full bg-gs-coral" aria-hidden="true" />
          <img
            src={BIMAL_PHOTO}
            alt="Bimal Maharjan, Founder of Gutsphere"
            width={320}
            height={320}
            loading="eager"
            className="ml-4 h-56 w-56 rounded-3xl border-4 border-gs-sand object-cover object-top shadow-[0_8px_24px_rgba(0,0,0,0.08)] sm:h-64 sm:w-64"
          />
        </div>

        <div className="lg:col-span-7">
          <p className="text-sm font-medium tracking-wide text-gs-coral uppercase">
            Why Gutsphere exists
          </p>
          <h2 id="credibility-heading" className="section-heading mt-2">
            Built by a patient, for patients
          </h2>
          <p className="body-lg mt-4 max-w-xl">
            Bimal built Gutsphere because the gap between visits had no home — symptoms lived in
            your head, not in a record your care could use.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
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

          <figure className="mt-8 rounded-2xl border border-gs-border bg-gs-sand-light px-6 py-5">
            <blockquote className="font-display text-lg font-medium leading-relaxed text-gs-text-primary">
              &ldquo;Gutsphere exists so you don&apos;t have to carry your whole story in your
              head.&rdquo;
            </blockquote>
            <figcaption className="mt-2 text-sm text-gs-text-muted">
              Bimal Maharjan, Founder
            </figcaption>
          </figure>

          <div className="mt-6">
            <Button variant="secondary" href={ABOUT_URL}>
              Read Bimal&apos;s full story &rarr;
            </Button>
          </div>
        </div>
      </div>
    </SectionShell>
  )
}
