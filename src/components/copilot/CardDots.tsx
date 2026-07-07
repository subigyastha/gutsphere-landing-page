import { useCopilot } from './CopilotContext'

interface CardDotsProps {
  count: number
}

export function CardDots({ count }: CardDotsProps) {
  const { cardIndex, goToCard } = useCopilot()

  return (
    <div className="copilot-card-dots" role="tablist" aria-label="Cards in this chapter">
      {Array.from({ length: count }, (_, i) => (
        <button
          key={i}
          type="button"
          role="tab"
          aria-selected={i === cardIndex}
          aria-label={`Card ${i + 1} of ${count}`}
          className={`copilot-card-dot ${i === cardIndex ? 'is-active' : ''}`}
          onClick={() => goToCard(i)}
        />
      ))}
    </div>
  )
}
