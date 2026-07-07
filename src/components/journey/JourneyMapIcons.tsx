import type { ComponentType, ReactNode } from 'react'
import type { JourneyIconKey } from './constants'

interface IconProps {
  size?: number
  className?: string
}

function IconShell({
  size = 16,
  className = '',
  children,
}: IconProps & { children: ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  )
}

export function IconTurbulence({ size, className }: IconProps) {
  return (
    <IconShell size={size} className={className}>
      <path d="M4 14c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
      <path d="M6 10c1.5-1.5 3-1.5 4.5 0s3 1.5 4.5 0" opacity="0.6" />
    </IconShell>
  )
}

export function IconFog({ size, className }: IconProps) {
  return (
    <IconShell size={size} className={className}>
      <path d="M5 15h14M7 11h10M6 19h12" opacity="0.5" />
      <ellipse cx="12" cy="8" rx="7" ry="3" fill="currentColor" fillOpacity="0.12" stroke="none" />
    </IconShell>
  )
}

export function IconCompass({ size, className }: IconProps) {
  return (
    <IconShell size={size} className={className}>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 4v2M12 18v2M4 12h2M18 12h2" opacity="0.4" />
      <path d="m14.5 9.5-2 5-5 2 2-5 5-2z" fill="currentColor" fillOpacity="0.2" />
    </IconShell>
  )
}

export function IconLighthouse({ size, className }: IconProps) {
  return (
    <IconShell size={size} className={className}>
      <path d="M10 20V10l2-4 2 4v10" />
      <path d="M8 20h8" />
      <path d="M18 8l3-2M18 12l4 1" stroke="var(--gs-coral)" opacity="0.7" />
    </IconShell>
  )
}

export function IconSun({ size, className }: IconProps) {
  return (
    <IconShell size={size} className={className}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4l1.4-1.4M17 7l1.4-1.4" opacity="0.5" />
    </IconShell>
  )
}

export function IconTower({ size, className }: IconProps) {
  return (
    <IconShell size={size} className={className}>
      <path d="M8 20V8l4-3 4 3v12" />
      <path d="M6 20h12" />
      <rect x="11" y="6" width="2" height="2" fill="currentColor" stroke="none" opacity="0.5" />
    </IconShell>
  )
}

export function IconInstruments({ size, className }: IconProps) {
  return (
    <IconShell size={size} className={className}>
      <circle cx="8" cy="14" r="5" />
      <circle cx="16" cy="10" r="4" />
      <path d="M8 11v3l2 2" />
      <path d="M16 8v1.5" />
    </IconShell>
  )
}

export function IconChecklist({ size, className }: IconProps) {
  return (
    <IconShell size={size} className={className}>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M9 8l2 2 4-4M9 14h6M9 17h4" />
    </IconShell>
  )
}

export function IconStorm({ size, className }: IconProps) {
  return (
    <IconShell size={size} className={className}>
      <path d="M6 10a4 4 0 0 1 7.5-1.5A3.5 3.5 0 0 1 18 12H7a2 2 0 0 0 0 4h9" />
      <path d="M13 16l-2 4 3-2-2 4" fill="currentColor" stroke="none" opacity="0.85" />
    </IconShell>
  )
}

export function IconRunway({ size, className }: IconProps) {
  return (
    <IconShell size={size} className={className}>
      <path d="M4 18h16" />
      <path d="M12 18V8M9 14l3-6 3 6" />
      <path d="M6 18v-1M10 18v-1M14 18v-1M18 18v-1" opacity="0.4" />
    </IconShell>
  )
}

export function IconCloud({ size = 20, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size * 0.6}
      viewBox="0 0 40 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <ellipse cx="14" cy="14" rx="10" ry="7" opacity="0.35" />
      <ellipse cx="24" cy="12" rx="12" ry="8" opacity="0.25" />
      <ellipse cx="30" cy="15" rx="8" ry="6" opacity="0.2" />
    </svg>
  )
}

export function IconPlane({ size = 20, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="var(--gs-coral)"
      stroke="var(--gs-card)"
      strokeWidth="1.25"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 3 8 11h8L12 3z" />
      <path d="M12 11v10" stroke="var(--gs-coral)" fill="none" />
      <path d="M7 14h10" stroke="var(--gs-coral)" fill="none" />
    </svg>
  )
}

const ICON_MAP: Record<JourneyIconKey, ComponentType<IconProps>> = {
  turbulence: IconTurbulence,
  fog: IconFog,
  compass: IconCompass,
  lighthouse: IconLighthouse,
  sun: IconSun,
  tower: IconTower,
  instruments: IconInstruments,
  checklist: IconChecklist,
  storm: IconStorm,
  runway: IconRunway,
}

export function JourneyStageIcon({
  icon,
  size = 16,
  className = '',
}: {
  icon: JourneyIconKey
  size?: number
  className?: string
}) {
  const Component = ICON_MAP[icon]
  return <Component size={size} className={className} />
}
