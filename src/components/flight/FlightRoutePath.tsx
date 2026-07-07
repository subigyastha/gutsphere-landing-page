/** Decorative vertical flight path connecting journey zones */
export function FlightRoutePath() {
  return (
    <div className="flight-route-path" aria-hidden="true">
      <svg
        className="flight-route-svg"
        viewBox="0 0 40 1200"
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          <linearGradient id="routeGrad" x1="20" y1="0" x2="20" y2="1200">
            <stop offset="0%" stopColor="var(--gs-coral)" stopOpacity="0.5" />
            <stop offset="50%" stopColor="var(--gs-coral)" stopOpacity="0.25" />
            <stop offset="100%" stopColor="var(--gs-coral)" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        <path
          d="M20 0 C 35 80, 5 160, 20 240 C 35 320, 5 400, 20 480 C 35 560, 5 640, 20 720 C 35 800, 5 880, 20 960 C 35 1040, 5 1120, 20 1200"
          stroke="url(#routeGrad)"
          strokeWidth="2"
          strokeDasharray="6 10"
          fill="none"
        />
      </svg>
    </div>
  )
}
