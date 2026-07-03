import { Link } from 'react-router-dom'
import { SectionShell } from './SectionShell'
import { SIGNUP_URL, conditionHub } from '../../constants'

const iconMap: Record<string, string> = {
  wave: '〜',
  shield: '◆',
  flame: '△',
  pause: '▮',
  circle: '○',
  bolt: '⚡',
}

export function ConditionHubSection() {
  return (
    <SectionShell id="conditions" background="sand" ariaLabelledBy="conditions-heading">
      <h2 id="conditions-heading" className="section-heading text-center">
        What feels closest to you?
      </h2>
      <p className="body-lg mx-auto mt-4 max-w-2xl text-center">
        You do not need a diagnosis to start. Tap what sounds familiar.
      </p>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {conditionHub.map((item) => (
          <Link
            key={item.slug}
            to={`/conditions/${item.slug}`}
            className="card-surface group flex min-h-[120px] flex-col justify-center p-6 transition-shadow hover:shadow-[0_4px_20px_rgba(239,83,80,0.12)]"
          >
            <span
              className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-gs-insight-bg text-xl text-gs-coral transition-colors group-hover:bg-gs-coral group-hover:text-white"
              aria-hidden="true"
            >
              {iconMap[item.icon] ?? '•'}
            </span>
            <p className="font-display text-xl font-semibold text-gs-text-primary">{item.label}</p>
            <p className="mt-1 text-base text-gs-text-secondary">{item.blurb}</p>
          </Link>
        ))}
      </div>

      <p className="mt-8 text-center">
        <a href={SIGNUP_URL} className="text-lg font-medium text-gs-coral hover:underline">
          Not sure? Start here anyway &rarr;
        </a>
      </p>
    </SectionShell>
  )
}
