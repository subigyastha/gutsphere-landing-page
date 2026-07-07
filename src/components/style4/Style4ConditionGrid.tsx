import { Link } from 'react-router-dom'
import { Style4Section } from './Style4Section'
import { Style4ConditionStack } from './Style4ConditionStack'
import { Style4Reveal } from './Style4Reveal'
import { ConditionIcon } from '../v2/ConditionIcon'
import { SIGNUP_URL, conditionHub, setConditionFrom } from '../../constants'

export function Style4ConditionGrid() {
  return (
    <Style4Section
      id="conditions"
      eyebrow="Your journey"
      heading="Support for every stage of digestive health"
      headingId="style4-conditions-heading"
      intro="Whether you are undiagnosed, in limbo, on treatment, or rebuilding long-term — start from what sounds familiar."
      background="white"
    >
      <div className="mt-8 sm:mt-10">
        <Style4ConditionStack />
      </div>

      <Style4Reveal className="mt-10 sm:mt-12" delay={100}>
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gs-text-muted">
          All conditions
        </p>
        <div className="grid style4-cell-gap sm:grid-cols-2 lg:grid-cols-3">
          {conditionHub.map((item, index) => (
            <Style4Reveal key={item.slug} delay={index * 60} as="article">
              <Link
                to={`/conditions/${item.slug}`}
                onClick={() => setConditionFrom('style-4')}
                className="style4-card style4-card-interactive group flex min-h-[140px] flex-col p-5 sm:p-6"
              >
                <span
                  className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-gs-sand-light to-white text-gs-text-secondary transition-all duration-300 group-hover:from-gs-coral/15 group-hover:text-gs-coral sm:h-12 sm:w-12"
                  aria-hidden="true"
                >
                  <ConditionIcon name={item.icon} className="h-6 w-6" />
                </span>
                <p className="font-display text-lg font-semibold text-gs-text-primary sm:text-xl">
                  {item.label}
                </p>
                <p className="mt-1 flex-1 text-sm text-gs-text-secondary sm:text-base">
                  {item.blurb}
                </p>
                <span className="mt-4 inline-flex min-h-10 items-center text-sm font-semibold text-gs-coral">
                  Learn more &rarr;
                </span>
              </Link>
            </Style4Reveal>
          ))}
        </div>
      </Style4Reveal>

      <Style4Reveal delay={120}>
        <p className="mt-6 sm:mt-8">
          <a
            href={SIGNUP_URL}
            className="inline-flex min-h-12 items-center rounded-full border-2 border-gs-coral px-5 text-base font-semibold text-gs-coral transition-colors hover:bg-gs-coral hover:text-white"
          >
            Not sure? Start with one symptom anyway &rarr;
          </a>
        </p>
      </Style4Reveal>
    </Style4Section>
  )
}
