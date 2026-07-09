export function PlatformFineprint({ className = '' }: { className?: string }) {
  return (
    <a href="#cta" className={`cp2-platform-link ${className}`.trim()}>
      Free to start · no card ·{' '}
      <strong className="cp2-platform-shimmer">web, iOS or Android</strong>
    </a>
  )
}
