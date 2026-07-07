const JOURNEY_STAGES = [
  'Symptoms',
  'Patterns',
  'Questions',
  'Diagnosis prep',
  'Treatment',
  'Routines',
  'Long-term control',
] as const

export function Style4CopilotVisual() {
  return (
    <div
      className="relative mx-auto w-full max-w-[300px] sm:max-w-[340px]"
      role="img"
      aria-label="Gutsphere copilot journey: symptoms through patterns, clinical preparation, treatment, routines, and long-term digestive health control"
    >
      <div className="relative aspect-square">
        <div
          className="absolute inset-[12%] rounded-full border border-dashed border-gs-coral/30"
          aria-hidden="true"
        />
        <div
          className="absolute inset-[28%] flex flex-col items-center justify-center rounded-full border-2 border-gs-coral/35 bg-gradient-to-br from-white to-gs-coral/10 shadow-[0_8px_32px_rgba(239,83,80,0.12)]"
          aria-hidden="true"
        >
          <p className="text-[10px] font-semibold uppercase tracking-widest text-gs-coral sm:text-xs">
            You
          </p>
          <p className="font-display text-sm font-semibold text-gs-text-primary sm:text-base">
            Pilot
          </p>
        </div>

        {JOURNEY_STAGES.map((stage, i) => {
          const angle = (i / JOURNEY_STAGES.length) * 360 - 90
          const rad = (angle * Math.PI) / 180
          const x = 50 + 44 * Math.cos(rad)
          const y = 50 + 44 * Math.sin(rad)
          return (
            <span
              key={stage}
              className="absolute max-w-[5.5rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gs-border bg-white px-2 py-1 text-center text-[9px] font-semibold leading-tight text-gs-text-secondary shadow-sm sm:max-w-none sm:px-2.5 sm:text-[10px]"
              style={{ left: `${x}%`, top: `${y}%` }}
              aria-hidden="true"
            >
              {stage}
            </span>
          )
        })}

        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full bg-gs-coral px-4 py-1.5 text-xs font-semibold text-white shadow-md"
          aria-hidden="true"
        >
          Gutsphere copilot
        </div>
      </div>
    </div>
  )
}
