import { motion } from 'motion/react'
import { ClipboardList, Heart, Compass, Lightbulb } from 'lucide-react'

const stages = [
  {
    id: 'track',
    title: 'Track',
    icon: ClipboardList,
    description: 'Symptoms, food, sleep & stress in seconds — built for low-energy days.',
  },
  {
    id: 'care',
    title: 'Care',
    icon: Heart,
    description:
      'Gentle, responsive self-care that reacts to what you logged — not a generic checklist.',
  },
  {
    id: 'navigate',
    title: 'Navigate',
    icon: Compass,
    description:
      'Know when it’s worth seeing someone, who to see, and how to prepare for the visit.',
  },
  {
    id: 'understand',
    title: 'Understand',
    icon: Lightbulb,
    description:
      'Patterns become appointment-ready evidence and the questions worth asking your doctor.',
  },
]

function StageCard({
  stage,
  className = '',
}: {
  stage: (typeof stages)[number]
  className?: string
}) {
  const Icon = stage.icon
  return (
    <div
      className={`rounded-2xl border border-gs-border bg-gs-card p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)] ${className}`.trim()}
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gs-sand-light text-gs-text-secondary">
        <Icon className="h-6 w-6" strokeWidth={1.8} />
      </div>
      <h3 className="mb-3 font-display text-2xl font-semibold text-gs-text-primary">{stage.title}</h3>
      <p className="leading-relaxed text-gs-text-secondary">{stage.description}</p>
    </div>
  )
}

/** Version 1: Phone with emerging UI elements */
export function SystemSectionVersion1() {
  return (
    <section className="overflow-hidden bg-gs-sand py-24">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="mb-4 font-display text-5xl font-semibold tracking-tight text-gs-text-primary">
          An operating system for your gut
        </h2>
        <p className="mx-auto mb-16 max-w-3xl text-xl text-gs-text-secondary">
          Not another app. The system that runs the whole journey.
        </p>

        <div className="relative flex justify-center">
          <div className="relative z-10">
            <div className="relative h-[640px] w-[320px] rounded-[52px] border border-gs-border bg-gs-card p-[3px] shadow-[0_24px_64px_-28px_rgba(28,25,23,0.28)]">
              <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[49px] bg-gs-sand">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-gs-border bg-gs-card">
                    <span className="font-display text-sm font-semibold text-gs-coral">GS</span>
                  </div>
                  <p className="text-sm font-medium text-gs-text-primary">Gutsphere</p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute top-1/2 left-[380px] h-[520px] w-[520px] -translate-y-1/2">
            {stages.map((stage, index) => {
              const angle = index * 90 - 45
              return (
                <motion.div
                  key={stage.id}
                  className="absolute w-72"
                  style={{ transformOrigin: 'left center' }}
                  initial={{ opacity: 0, x: -60, rotate: -15 }}
                  whileInView={{
                    opacity: 1,
                    x: Math.cos((angle * Math.PI) / 180) * 180,
                    y: Math.sin((angle * Math.PI) / 180) * 160,
                    rotate: 0,
                  }}
                  transition={{ delay: index * 0.2, duration: 0.8, ease: 'easeOut' }}
                  whileHover={{ scale: 1.05, y: -10 }}
                >
                  <StageCard stage={stage} />
                </motion.div>
              )
            })}
          </div>
        </div>

        <p className="mt-20 font-display text-2xl font-medium text-gs-text-primary">
          You pilot your health. <span className="text-gs-coral">Gutsphere keeps the map.</span>
        </p>
      </div>
    </section>
  )
}

/** Version 2: Central phone + orbiting screens */
export function SystemSectionVersion2() {
  return (
    <section className="bg-gs-sand py-24">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="mb-4 font-display text-5xl font-semibold tracking-tight text-gs-text-primary">
          An operating system for your gut
        </h2>
        <p className="mb-16 text-xl text-gs-text-secondary">
          Four connected stages that feed each other and grow with you.
        </p>

        <div className="relative flex h-[700px] items-center justify-center">
          <div className="relative z-20">
            <div className="h-[600px] w-[300px] rounded-[48px] border border-gs-border bg-gs-card p-[3px] shadow-[0_24px_64px_-28px_rgba(28,25,23,0.28)]">
              <div className="relative flex h-full w-full items-end justify-center overflow-hidden rounded-[45px] bg-gs-sand pb-8">
                <p className="text-xs font-semibold tracking-wide text-gs-text-muted">Gutsphere</p>
              </div>
            </div>
          </div>

          {stages.map((stage, index) => {
            const delay = index * 0.15
            const angle = index * 90 + 45

            return (
              <motion.div
                key={stage.id}
                className="absolute w-80 text-left"
                style={{ top: '50%', left: '50%' }}
                animate={{
                  x: Math.cos((angle * Math.PI) / 180) * 260,
                  y: Math.sin((angle * Math.PI) / 180) * 240,
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay }}
                whileHover={{ scale: 1.05 }}
              >
                <StageCard stage={stage} className="text-center" />
              </motion.div>
            )
          })}
        </div>

        <p className="mt-12 font-display text-2xl font-medium text-gs-text-primary">
          You pilot your health. <span className="text-gs-coral">Gutsphere keeps the map.</span>
        </p>
      </div>
    </section>
  )
}

/** Version 5: premium spread layout */
export function SystemSectionVersion5() {
  return (
    <section className="bg-gs-sand py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-display text-5xl font-semibold tracking-tight text-gs-text-primary">
            An operating system for your gut
          </h2>
          <p className="text-xl text-gs-text-secondary">A living loop that connects everything.</p>
        </div>

        <div className="relative flex h-[720px] items-center justify-center">
          <div className="relative">
            <motion.div className="relative h-[680px] w-[340px] rounded-[60px] border border-gs-border bg-gs-card p-[3px] shadow-[0_24px_64px_-28px_rgba(28,25,23,0.28)]">
              <div className="flex h-full w-full flex-col items-center justify-center gap-4 overflow-hidden rounded-[57px] bg-gs-sand p-8">
                {stages.map((s) => (
                  <div
                    key={s.id}
                    className="rounded-full border border-gs-border bg-gs-card px-4 py-1.5 text-xs font-medium text-gs-text-secondary"
                  >
                    {s.title}
                  </div>
                ))}
              </div>
            </motion.div>

            {stages.map((stage, index) => {
              const xOffset = (index - 1.5) * 260
              const yOffset = index % 2 === 0 ? -80 : 100

              return (
                <motion.div
                  key={stage.id}
                  className="absolute w-72"
                  initial={{ opacity: 0, y: 60, scale: 0.85 }}
                  whileInView={{ opacity: 1, y: yOffset, x: xOffset, scale: 1 }}
                  transition={{ delay: index * 0.12 }}
                  whileHover={{ y: yOffset - 30, transition: { duration: 0.3 } }}
                >
                  <StageCard stage={stage} />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

/** Default — change this to switch versions */
export default SystemSectionVersion1
