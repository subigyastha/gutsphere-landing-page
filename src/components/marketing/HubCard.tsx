import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export interface HubCardProps {
  href: string
  kind: string
  title: string
  blurb: string
  featured?: boolean
}

export function HubCard({ href, kind, title, blurb, featured = false }: HubCardProps) {
  const isExternal = href.startsWith('http')
  const className = `mp-hub-card${featured ? ' mp-hub-card--featured' : ''}`

  const inner = (
    <>
      <span className="mp-hub-card-kind">{kind}</span>
      <h3 className="mp-hub-card-title">{title}</h3>
      <p className="mp-hub-card-blurb">{blurb}</p>
      <span className="mp-hub-card-arrow">
        Read more <ArrowRight size={16} aria-hidden="true" />
      </span>
    </>
  )

  if (isExternal) {
    return (
      <a href={href} className={className}>
        {inner}
      </a>
    )
  }

  return (
    <Link to={href} className={className}>
      {inner}
    </Link>
  )
}
