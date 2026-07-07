interface PlaneCraftProps {
  variant?: 'hero' | 'enter' | 'takeoff'
  takeoffProgress?: number
  className?: string
}

export function PlaneCraft({ variant = 'enter', takeoffProgress = 0, className = '' }: PlaneCraftProps) {
  const isHero = variant === 'hero'
  const isTakeoff = variant === 'takeoff'
  const lift = isTakeoff ? takeoffProgress * 140 : 0
  const tilt = isTakeoff ? -takeoffProgress * 18 : isHero ? 0 : -6
  const opacity = isTakeoff ? 1 - takeoffProgress * 0.85 : 1
  const scale = isHero ? 1.15 : 1

  return (
    <div
      className={`journey-plane ${isHero ? 'journey-plane--hero' : 'journey-plane--enter'} ${isTakeoff ? 'journey-plane--takeoff' : ''} ${className}`}
      aria-hidden="true"
      style={
        isTakeoff || !isHero
          ? {
              transform: `translateY(${-lift}px) rotate(${tilt}deg) scale(${scale})`,
              opacity,
            }
          : undefined
      }
    >
      <div className="journey-plane-glow" />
      <svg
        width={isHero ? 44 : 36}
        height={isHero ? 44 : 36}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="journey-plane-svg"
      >
        <defs>
          <linearGradient id="journeyPlaneGrad" x1="16" y1="2" x2="16" y2="30">
            <stop offset="0%" stopColor="var(--gs-coral)" />
            <stop offset="100%" stopColor="#ff8a80" />
          </linearGradient>
        </defs>
        <path
          d="M16 3 L20 14 L28 16 L20 18 L16 29 L12 18 L4 16 L12 14 Z"
          fill="url(#journeyPlaneGrad)"
          stroke="var(--gs-card)"
          strokeWidth="1.5"
        />
        <circle cx="16" cy="16" r="2" fill="var(--gs-card)" opacity="0.9" />
      </svg>
    </div>
  )
}
