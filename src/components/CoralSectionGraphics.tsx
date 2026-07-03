type CoralGraphicVariant = 'connections' | 'visit' | 'cta'

export function CoralSectionGraphics({ variant }: { variant: CoralGraphicVariant }) {
  const patternId = `coral-dot-grid-${variant}`

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute -top-24 -right-20 h-72 w-72 rounded-full bg-white/12 blur-3xl sm:h-96 sm:w-96" />
      <div className="absolute -bottom-28 -left-16 h-80 w-80 rounded-full bg-white/10 blur-3xl sm:h-[28rem] sm:w-[28rem]" />
      <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-2xl" />

      <svg
        className="absolute inset-0 h-full w-full opacity-[0.14]"
        viewBox="0 0 1440 600"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id={patternId} width="32" height="32" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.25" fill="white" />
          </pattern>
        </defs>
        <rect width="1440" height="600" fill={`url(#${patternId})`} />
      </svg>

      {variant === 'connections' && (
        <svg
          className="absolute inset-0 h-full w-full opacity-25"
          viewBox="0 0 1440 600"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M120 380 C 280 220, 420 420, 560 300 S 860 180, 1040 320 S 1260 460, 1340 260"
            stroke="white"
            strokeWidth="1.5"
            strokeDasharray="6 10"
          />
          <path
            d="M80 180 C 240 320, 400 120, 620 240 S 980 380, 1180 200 S 1320 340, 1380 420"
            stroke="white"
            strokeWidth="1"
            opacity="0.7"
          />
          {[
            [120, 380],
            [280, 260],
            [420, 390],
            [560, 300],
            [720, 220],
            [860, 340],
            [1040, 320],
            [1180, 200],
            [1340, 260],
          ].map(([cx, cy], i) => (
            <g key={i}>
              <circle cx={cx} cy={cy} r="18" fill="white" fillOpacity="0.08" />
              <circle cx={cx} cy={cy} r="6" fill="white" fillOpacity="0.55" />
            </g>
          ))}
        </svg>
      )}

      {variant === 'visit' && (
        <svg
          className="absolute inset-0 h-full w-full opacity-20"
          viewBox="0 0 1440 600"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="980" y="80" width="280" height="220" rx="24" stroke="white" strokeWidth="1.5" />
          <path d="M1020 150 H1220" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M1020 190 H1160" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
          <path d="M1020 230 H1180" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
          <circle cx="1180" cy="120" r="28" stroke="white" strokeWidth="1.5" />
          <path d="M1168 120 L1178 130 L1194 110" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path
            d="M120 420 C 220 300, 360 480, 500 360 S 740 240, 900 380"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {[0, 1, 2, 3, 4].map((i) => (
            <circle
              key={i}
              cx={180 + i * 140}
              cy={400 - (i % 2) * 60}
              r="10"
              fill="white"
              fillOpacity={0.15 + i * 0.05}
              stroke="white"
              strokeWidth="1"
            />
          ))}
        </svg>
      )}

      {variant === 'cta' && (
        <svg
          className="absolute inset-0 h-full w-full opacity-22"
          viewBox="0 0 1440 600"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="720" cy="620" r="280" stroke="white" strokeWidth="1.5" />
          <circle cx="720" cy="620" r="380" stroke="white" strokeWidth="1" opacity="0.7" />
          <circle cx="720" cy="620" r="480" stroke="white" strokeWidth="1" opacity="0.45" />
          <circle cx="720" cy="620" r="580" stroke="white" strokeWidth="1" opacity="0.25" />
          <path
            d="M180 120 L260 120 L260 200"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.8"
          />
          <path
            d="M1260 420 L1180 420 L1180 340"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.8"
          />
          <path
            d="M300 480 C 420 360, 540 520, 660 400 S 900 280, 1020 420"
            stroke="white"
            strokeWidth="1.5"
            strokeDasharray="8 12"
          />
        </svg>
      )}
    </div>
  )
}
