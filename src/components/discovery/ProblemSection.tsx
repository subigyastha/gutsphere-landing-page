import { SCATTERED_CLUES } from './constants'
import { DiscoveryHeroVisual } from './DiscoveryHeroVisual'

export function ProblemSection() {
  return (
    <div className="discovery-embedded-section">
      <p className="text-xs leading-relaxed text-gs-text-secondary sm:text-sm">
        You are trying to remember what you ate, when symptoms started, how your stool changed,
        what medication you took, whether stress or sleep played a role, what your test results
        said, and what to ask your doctor next.
      </p>
      <p className="mt-2 text-sm font-medium text-gs-text-primary">
        The problem is not that you are not paying attention. The clues are scattered.
      </p>
      <div className="discovery-problem-visual mt-3">
        <DiscoveryHeroVisual />
        <ul className="discovery-scattered-grid mt-2" role="list">
          {SCATTERED_CLUES.map((clue) => (
            <li key={clue} className="discovery-scattered-chip">
              {clue}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
