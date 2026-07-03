import { Button } from '../Button'
import { ABOUT_URL } from '../../constants'

const BIMAL_PHOTO = '/bimal-maharjan.png'

export function FounderCapsule() {
  return (
    <section id="founder" className="section-pad bg-gs-card" aria-labelledby="founder-capsule-heading">
      <div className="container-narrow">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="relative mx-auto lg:col-span-4 lg:mx-0">
            <img
              src={BIMAL_PHOTO}
              alt="Bimal Maharjan, Founder and CEO of Gutsphere"
              width={240}
              height={240}
              loading="lazy"
              className="h-40 w-40 rounded-2xl border border-gs-border object-cover object-top shadow-[0_1px_3px_rgba(0,0,0,0.04)] sm:h-48 sm:w-48"
            />
          </div>

          <div className="lg:col-span-8">
            <p className="text-xs font-medium text-gs-coral">
              Built for you by someone who lived it
            </p>
            <h2 id="founder-capsule-heading" className="section-heading mt-3">
              Bimal built this because he needed it between visits — and so might you.
            </h2>
            <p className="body-lg mt-4 max-w-2xl">
              After decades of GI issues, rushed appointments, and unexpected bills, he learned to
              take charge of his own health. Gutsphere exists so you don&apos;t have to carry that
              whole story in your head — or explain it from scratch every time.
            </p>

            <figure className="mt-8 rounded-2xl border border-gs-border bg-gs-sand-light p-6">
              <blockquote className="font-display text-base leading-relaxed font-medium text-gs-text-primary sm:text-lg">
                &ldquo;I couldn&apos;t depend on the healthcare system alone. Gutsphere exists so
                you don&apos;t have to carry that whole story in your head.&rdquo;
              </blockquote>
              <figcaption className="mt-3 text-sm text-gs-text-muted">
                Bimal Maharjan, Founder of Gutsphere
              </figcaption>
            </figure>

            <div className="mt-6">
              <Button variant="secondary" href={ABOUT_URL} className="w-full sm:w-auto">
                Read Bimal&apos;s full story &rarr;
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
