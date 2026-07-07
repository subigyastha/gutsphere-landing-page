import type { ReactNode } from 'react'

interface ReelSlidePanelProps {
  title?: string
  children: ReactNode
  variant?: 'default' | 'accent' | 'mock'
}

export function ReelSlidePanel({ title, children, variant = 'default' }: ReelSlidePanelProps) {
  return (
    <div className={`reel-slide-panel reel-slide-panel--${variant}`}>
      {title && <p className="reel-slide-panel-title">{title}</p>}
      <div className="reel-slide-panel-body">{children}</div>
    </div>
  )
}

interface ReelQuoteSlideProps {
  from?: string
  to: string
}

export function ReelQuoteSlide({ from, to }: ReelQuoteSlideProps) {
  return (
    <div className="reel-quote-slide">
      {from && <p className="reel-quote-from">&ldquo;{from}&rdquo;</p>}
      <p className="reel-quote-to">&ldquo;{to}&rdquo;</p>
    </div>
  )
}

interface ReelListSlideProps {
  items: readonly string[]
}

export function ReelListSlide({ items }: ReelListSlideProps) {
  return (
    <ul className="reel-list-slide" role="list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}
