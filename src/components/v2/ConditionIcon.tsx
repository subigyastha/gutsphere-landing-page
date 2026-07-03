type IconName = 'wave' | 'shield' | 'flame' | 'pause' | 'circle' | 'bolt'

const paths: Record<IconName, string> = {
  wave: 'M4 12c2-4 4-4 6 0s4 4 6 0 4-4 6 0',
  shield: 'M12 3l8 4v6c0 5-3.5 8-8 8s-8-3-8-8V7l8-4z',
  flame: 'M12 3c2 4 4 6 4 9a4 4 0 01-8 0c0-2 1-4 3-7 1 2 1 4-1 5z',
  pause: 'M9 7h2v10H9V7zm4 0h2v10h-2V7z',
  circle: 'M12 8a4 4 0 100 8 4 4 0 000-8z',
  bolt: 'M13 3L7 14h5l-1 7 6-12h-5l1-6z',
}

export function ConditionIcon({ name, className = 'h-6 w-6' }: { name: string; className?: string }) {
  const d = paths[name as IconName] ?? paths.circle
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  )
}
