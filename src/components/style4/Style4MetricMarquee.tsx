import { Style4MetricCard } from './Style4MetricCard'

type Metric = {
  value: string
  label: string
  placeholder?: boolean
}

type Style4MetricMarqueeProps = {
  metrics: Metric[]
}

export function Style4MetricMarquee({ metrics }: Style4MetricMarqueeProps) {
  const track = [...metrics, ...metrics]

  return (
    <div className="style4-marquee relative overflow-hidden" aria-hidden="false">
      <div className="style4-marquee-fade-left" aria-hidden="true" />
      <div className="style4-marquee-fade-right" aria-hidden="true" />
      <div className="style4-marquee-track flex w-max gap-3 sm:gap-4">
        {track.map((metric, i) => (
          <div key={`${metric.label}-${i}`} className="w-[min(72vw,220px)] shrink-0 sm:w-[200px]">
            <Style4MetricCard
              value={metric.value}
              label={metric.label}
              placeholder={metric.placeholder}
            />
          </div>
        ))}
      </div>
      <ul className="sr-only">
        {metrics.map((metric) => (
          <li key={metric.label}>
            {metric.value}: {metric.label}
          </li>
        ))}
      </ul>
    </div>
  )
}
