export interface FaqItem {
  q: string
  a: string
}

interface FaqAccordionProps {
  items: readonly FaqItem[]
  className?: string
}

export function FaqAccordion({ items, className = '' }: FaqAccordionProps) {
  return (
    <div className={`cp2-faq-list ${className}`.trim()}>
      {items.map((item) => (
        <details key={item.q} className="cp2-faq-item">
          <summary>
            {item.q}
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </summary>
          <p>{item.a}</p>
        </details>
      ))}
    </div>
  )
}
