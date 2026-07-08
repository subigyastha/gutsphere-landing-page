function ScatterIcon() {
  const dots = [
    { cx: 5, cy: 6 },
    { cx: 12, cy: 5 },
    { cx: 19, cy: 8 },
    { cx: 7, cy: 14 },
    { cx: 17, cy: 15 },
    { cx: 11, cy: 19 },
  ] as const

  return (
    <svg className="cp2-pain-svg cp2-pain-svg--scatter" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      {dots.map((d, i) => (
        <circle key={i} className={`cp2-scatter-dot cp2-scatter-dot--${i + 1}`} cx={d.cx} cy={d.cy} r="2" />
      ))}
    </svg>
  )
}

function BatteryIcon() {
  return (
    <svg className="cp2-pain-svg cp2-pain-svg--battery" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect className="cp2-battery-shell" x="2" y="8" width="16" height="9" rx="2.5" />
      <path className="cp2-battery-tip" d="M22 11.5v3" strokeLinecap="round" />
      <rect className="cp2-battery-level" x="5" y="10.5" width="7" height="4" rx="1" fill="currentColor" stroke="none" />
      <path className="cp2-battery-strike" d="M6 12.5h2" strokeLinecap="round" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg className="cp2-pain-svg cp2-pain-svg--clock" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <g className="cp2-clock-hand cp2-clock-hand--hour">
        <path d="M12 12V7.5" strokeLinecap="round" />
      </g>
      <g className="cp2-clock-hand cp2-clock-hand--minute">
        <path d="M12 12H16.5" strokeLinecap="round" />
      </g>
    </svg>
  )
}

export const PROBLEM_PAIN_ICONS = {
  scatter: ScatterIcon,
  battery: BatteryIcon,
  clock: ClockIcon,
} as const
