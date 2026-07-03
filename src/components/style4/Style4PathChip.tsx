type Style4PathChipProps = {
  href: string
  label: string
  active?: boolean
  onSelect?: () => void
}

export function Style4PathChip({ href, label, active = false, onSelect }: Style4PathChipProps) {
  return (
    <span className={`style4-chip-gradient inline-flex ${active ? 'is-active' : ''}`}>
      <a
        href={href}
        onClick={onSelect}
        className={`inline-flex min-h-11 items-center rounded-full bg-white px-4 py-2 text-sm font-semibold transition-colors ${
          active ? 'text-gs-coral' : 'text-gs-text-primary hover:text-gs-coral'
        }`}
      >
        {label}
      </a>
    </span>
  )
}
