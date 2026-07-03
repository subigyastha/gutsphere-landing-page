import { PatternInsightCard } from '../v2/PatternInsightCard'
import { Style4Section } from './Style4Section'
import { Style4Card } from './Style4Card'
import { Style4Reveal } from './Style4Reveal'

export function Style4PatternCard() {
  return (
    <Style4Section
      id="pattern"
      eyebrow="See what connects"
      heading="Patterns you couldn&apos;t spot from memory alone"
      headingId="style4-pattern-heading"
      intro="Gutsphere links meals, stress, sleep, and symptoms over time — so trigger guesses become evidence you can act on."
      background="white"
    >
      <Style4Reveal>
        <Style4Card variant="coral" interactive className="mt-8 p-6 sm:mt-10 sm:p-8 lg:p-10">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white">
              Pattern insight
            </p>
            <p className="mt-3 text-base leading-7 text-white sm:text-lg">
              When symptoms feel random, a connected record shows what repeats — timing, meals,
              stress, and what changed before a flare.
            </p>
          </div>
          <PatternInsightCard variant="on-primary" className="w-full" />
        </div>
        </Style4Card>
      </Style4Reveal>
    </Style4Section>
  )
}
