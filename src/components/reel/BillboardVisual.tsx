export type BillboardVisualKind =
  | 'copilot'
  | 'route'
  | 'scatter'
  | 'shift'
  | 'checkin'
  | 'visit'
  | 'pattern'
  | 'compare-bad'
  | 'compare-good'
  | 'founder'
  | 'moment'
  | 'next-step'
  | 'clarity'

interface BillboardVisualProps {
  kind: BillboardVisualKind
  label?: string
}

export function BillboardVisual({ kind, label }: BillboardVisualProps) {
  return (
    <div className={`billboard-visual billboard-visual--${kind}`} aria-hidden="true">
      {label && <span className="billboard-visual-label">{label}</span>}
      {kind === 'copilot' && <span className="billboard-visual-glyph">G</span>}
      {kind === 'route' && (
        <div className="billboard-visual-route">
          <span />
          <span />
          <span />
          <span />
        </div>
      )}
      {kind === 'scatter' && (
        <div className="billboard-visual-scatter">
          {['?', '!', '…'].map((m) => (
            <span key={m}>{m}</span>
          ))}
        </div>
      )}
      {kind === 'shift' && <span className="billboard-visual-arrow">→</span>}
      {kind === 'checkin' && (
        <div className="billboard-visual-checkin">
          <span className="billboard-visual-checkin-dot" />
          <span className="billboard-visual-checkin-line" />
        </div>
      )}
      {kind === 'visit' && (
        <div className="billboard-visual-visit">
          <span />
          <span />
          <span />
        </div>
      )}
      {kind === 'pattern' && (
        <div className="billboard-visual-pattern">
          {[40, 65, 50, 80, 55].map((h, i) => (
            <span key={i} style={{ height: `${h}%` }} />
          ))}
        </div>
      )}
      {kind === 'compare-bad' && <span className="billboard-visual-compare">LOG</span>}
      {kind === 'compare-good' && <span className="billboard-visual-compare billboard-visual-compare--good">GUIDE</span>}
      {kind === 'founder' && <span className="billboard-visual-glyph">♥</span>}
      {kind === 'moment' && <span className="billboard-visual-glyph">◎</span>}
      {kind === 'next-step' && <span className="billboard-visual-glyph">+</span>}
      {kind === 'clarity' && <span className="billboard-visual-glyph">✓</span>}
    </div>
  )
}
