import { PatternInsightCard } from '../PatternInsightCard'
import { CoralSectionGraphics } from '../../CoralSectionGraphics'

export function ClarityV2PatternBand() {
  return (
    <section
      className="relative overflow-hidden section-pad bg-gs-coral"
      aria-labelledby="clarity-v2-pattern-heading"
    >
      <CoralSectionGraphics variant="connections" />
      <div className="container-narrow relative z-10">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white">
              See what connects
            </p>
            <h2 id="clarity-v2-pattern-heading" className="section-heading mt-2 max-w-xl !text-white">
              Patterns you couldn&apos;t spot from memory alone
            </h2>
            <p className="mt-3 max-w-xl text-base leading-7 text-white sm:mt-4 sm:text-lg">
              Gutsphere links meals, stress, sleep, and symptoms over time — so trigger guesses
              become evidence you can act on.
            </p>
          </div>
          <PatternInsightCard variant="on-primary" className="w-full" />
        </div>
      </div>
    </section>
  )
}
