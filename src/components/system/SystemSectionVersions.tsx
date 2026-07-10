import { motion } from 'motion/react'
import { ClipboardList, Heart, Compass, Lightbulb } from 'lucide-react'

const stages = [
  {
    id: 'track',
    title: 'Track',
    icon: ClipboardList,
    description: 'Symptoms, food, sleep & stress in seconds — built for low-energy days.',
    color: 'bg-pink-500',
  },
  {
    id: 'care',
    title: 'Care',
    icon: Heart,
    description: 'Gentle, responsive self-care that reacts to what you logged — not a generic checklist.',
    color: 'bg-rose-500',
  },
  {
    id: 'navigate',
    title: 'Navigate',
    icon: Compass,
    description: 'Know when it’s worth seeing someone, who to see, and how to prepare for the visit.',
    color: 'bg-teal-500',
  },
  {
    id: 'understand',
    title: 'Understand',
    icon: Lightbulb,
    description: 'Patterns become appointment-ready evidence and the questions worth asking your doctor.',
    color: 'bg-amber-500',
  },
]

/** Version 1: Phone with emerging UI elements */
export function SystemSectionVersion1() {
  return (
    <section className="overflow-hidden bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="mb-4 text-5xl font-bold tracking-tight">An Operating System for Your Gut</h2>
        <p className="mx-auto mb-16 max-w-3xl text-xl text-gray-600">
          Not another app. The system that runs the whole journey.
        </p>

        <div className="relative flex justify-center">
          <div className="relative z-10">
            <div className="relative h-[640px] w-[320px] rounded-[52px] bg-black p-3 shadow-2xl">
              <div className="relative h-full w-full overflow-hidden rounded-[40px] bg-zinc-950">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-pink-50 to-teal-50">
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow">
                      <span className="text-3xl">🦠</span>
                    </div>
                    <p className="text-sm font-medium">Gutsphere</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute top-1/2 left-[380px] h-[520px] w-[520px] -translate-y-1/2">
            {stages.map((stage, index) => {
              const Icon = stage.icon
              const angle = index * 90 - 45
              return (
                <motion.div
                  key={stage.id}
                  className="absolute w-72 rounded-3xl border border-gray-100 bg-white p-6 shadow-xl"
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
                  <div
                    className={`${stage.color} mb-5 flex h-12 w-12 items-center justify-center rounded-2xl`}
                  >
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="mb-3 text-2xl font-semibold">{stage.title}</h3>
                  <p className="leading-relaxed text-gray-600">{stage.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>

        <p className="mt-20 text-2xl font-medium text-gray-800">
          You pilot your health. <span className="text-pink-600">Gutsphere keeps the map.</span>
        </p>
      </div>
    </section>
  )
}

/** Version 2: Central phone + orbiting screens */
export function SystemSectionVersion2() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="mb-4 text-5xl font-bold tracking-tight">An Operating System for Your Gut</h2>
        <p className="mb-16 text-xl text-gray-600">
          Four connected stages that feed each other and grow with you.
        </p>

        <div className="relative flex h-[700px] items-center justify-center">
          <div className="relative z-20">
            <div className="h-[600px] w-[300px] rounded-[48px] bg-black p-2 shadow-2xl">
              <div className="relative h-full w-full overflow-hidden rounded-[40px] bg-zinc-900">
                <div className="absolute inset-0 bg-gradient-to-b from-teal-400/10 to-pink-500/10" />
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs tracking-widest text-white">
                  GUTSPHERE
                </div>
              </div>
            </div>
          </div>

          {stages.map((stage, index) => {
            const Icon = stage.icon
            const delay = index * 0.15
            const angle = index * 90 + 45

            return (
              <motion.div
                key={stage.id}
                className="absolute w-80 rounded-3xl border border-gray-100 bg-white p-6 shadow-xl"
                style={{ top: '50%', left: '50%' }}
                animate={{
                  x: Math.cos((angle * Math.PI) / 180) * 260,
                  y: Math.sin((angle * Math.PI) / 180) * 240,
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay }}
                whileHover={{ scale: 1.08 }}
              >
                <div
                  className={`${stage.color} mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl`}
                >
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="mb-3 text-center text-2xl font-semibold">{stage.title}</h3>
                <p className="text-center text-sm leading-relaxed text-gray-600">{stage.description}</p>
              </motion.div>
            )
          })}
        </div>

        <p className="mt-12 text-2xl font-medium">
          You pilot your health. <span className="text-pink-600">Gutsphere keeps the map.</span>
        </p>
      </div>
    </section>
  )
}

/** Version 5: 3D / premium isometric style */
export function SystemSectionVersion5() {
  return (
    <section className="bg-gradient-to-b from-zinc-50 to-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-5xl font-bold tracking-tight">An Operating System for Your Gut</h2>
          <p className="text-xl text-gray-600">A living loop that connects everything.</p>
        </div>

        <div className="relative flex h-[720px] items-center justify-center">
          <div className="relative">
            <motion.div
              className="relative h-[680px] w-[340px] rounded-[60px] bg-black p-4 shadow-2xl"
              whileInView={{ rotateX: 12, rotateY: -18 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="h-full w-full overflow-hidden rounded-[48px] bg-zinc-950">
                <div className="flex h-full flex-col items-center justify-center gap-6 bg-gradient-to-br from-pink-100 via-white to-teal-50 p-8">
                  {stages.map((s) => (
                    <div key={s.id} className="text-xs opacity-70">
                      {s.title}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {stages.map((stage, index) => {
              const Icon = stage.icon
              const xOffset = (index - 1.5) * 260
              const yOffset = index % 2 === 0 ? -80 : 100

              return (
                <motion.div
                  key={stage.id}
                  className="absolute w-72 rounded-3xl border border-gray-100 bg-white p-7 shadow-2xl"
                  initial={{ opacity: 0, y: 60, scale: 0.85 }}
                  whileInView={{ opacity: 1, y: yOffset, x: xOffset, scale: 1 }}
                  transition={{ delay: index * 0.12 }}
                  whileHover={{ y: yOffset - 30, transition: { duration: 0.3 } }}
                >
                  <div
                    className={`${stage.color} mb-6 flex h-12 w-12 items-center justify-center rounded-2xl`}
                  >
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="mb-3 text-2xl font-semibold">{stage.title}</h3>
                  <p className="text-[15px] leading-tight text-gray-600">{stage.description}</p>
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
// export default SystemSectionVersion2
// export default SystemSectionVersion5
