import { ProductMockup } from '../ProductMockup'

interface VisitBriefMockupProps {
  compact?: boolean
  className?: string
}

export function VisitBriefMockup({ compact = false, className = '' }: VisitBriefMockupProps) {
  return (
    <div className={className} aria-label="Visit brief preview">
      <ProductMockup variant="doctor" compact={compact} />
    </div>
  )
}
