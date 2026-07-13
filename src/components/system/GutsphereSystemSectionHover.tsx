import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ClipboardList, Heart, Compass, Lightbulb } from 'lucide-react'

const stages = [
  {
    id: 'track',
    title: 'Track',
    icon: ClipboardList,
    description: 'Log symptoms, food, sleep & stress effortlessly',
    screen: (
      <div className="h-full overflow-hidden bg-gs-sand p-6">
        <div className="mb-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-display font-semibold text-gs-text-primary">Today&apos;s log</h3>
            <span className="text-xs font-semibold text-gs-coral">+ Add entry</span>
          </div>
        </div>
        <div className="space-y-3">
          {[
            { label: 'Bloating', value: 'Moderate', time: '9:12 AM' },
            { label: 'Energy', value: 'Low', time: '11:45 AM' },
            { label: 'Lunch', value: 'Pasta + Salad', time: '2:30 PM' },
          ].map((entry, i) => (
            <motion.div
              key={entry.label}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center justify-between rounded-2xl border border-gs-border bg-gs-card p-4"
            >
              <div>
                <p className="font-medium text-gs-text-primary">{entry.label}</p>
                <p className="text-xs text-gs-text-muted">{entry.time}</p>
              </div>
              <div className="text-right text-sm font-medium text-gs-coral">{entry.value}</div>
            </motion.div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 'care',
    title: 'Care',
    icon: Heart,
    description: 'Personalized, gentle self-care recommendations',
    screen: (
      <div className="flex h-full flex-col items-center justify-center bg-gs-sand p-8 text-center">
        <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ repeat: Infinity, duration: 3 }}>
          <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gs-sand-light text-gs-coral">
            <Heart className="h-8 w-8" strokeWidth={1.8} />
          </div>
        </motion.div>
        <h3 className="mb-3 font-display text-2xl font-semibold text-gs-text-primary">
          Today&apos;s care plan
        </h3>
        <p className="max-w-[200px] text-gs-text-secondary">
          Based on your logs, try a 15-minute warm compress + herbal tea.
        </p>
      </div>
    ),
  },
  {
    id: 'navigate',
    title: 'Navigate',
    icon: Compass,
    description: 'Know when to seek help and prepare for visits',
    screen: (
      <div className="h-full bg-gs-sand p-6">
        <div className="mb-8 rounded-2xl border border-gs-border bg-gs-card p-6">
          <div className="mb-4 flex items-center gap-3">
            <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-gs-coral" />
            <span className="font-medium text-gs-text-primary">Recommended action</span>
          </div>
          <p className="text-lg font-semibold text-gs-text-primary">Schedule GI appointment</p>
          <p className="mt-1 text-sm text-gs-text-secondary">
            Your symptoms suggest it&apos;s worth checking
          </p>
        </div>
        <div className="space-y-4 pl-2 text-sm text-gs-text-secondary">
          <div>Prepared symptom timeline</div>
          <div>Smart questions for your doctor</div>
        </div>
      </div>
    ),
  },
  {
    id: 'understand',
    title: 'Understand',
    icon: Lightbulb,
    description: 'Discover meaningful patterns in your data',
    screen: (
      <div className="flex h-full flex-col bg-gs-sand p-6">
        <div className="mb-6 text-center">
          <h3 className="font-display text-xl font-semibold text-gs-text-primary">Your patterns</h3>
        </div>
        <div className="rounded-2xl border border-gs-insight-border bg-gs-insight-bg p-5">
          <p className="mb-2 font-medium text-gs-coral">Possible thread</p>
          <p className="text-sm text-gs-text-secondary">
            Dairy consumption appears to correlate with flare-ups (78% confidence)
          </p>
        </div>
      </div>
    ),
  },
]

export function GutsphereSystemSectionHover() {
  const [hoveredStage, setHoveredStage] = useState<string | null>(null)
  const [autoIndex, setAutoIndex] = useState(0)

  useEffect(() => {
    if (hoveredStage) return

    const timer = setInterval(() => {
      setAutoIndex((prev) => (prev + 1) % stages.length)
    }, 3200)

    return () => clearInterval(timer)
  }, [hoveredStage])

  const activeStage = hoveredStage
    ? stages.find((s) => s.id === hoveredStage)
    : stages[autoIndex]

  return (
    <section className="bg-gs-sand py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-display text-5xl font-semibold tracking-tight text-gs-text-primary">
            An operating system for your gut
          </h2>
          <p className="text-xl text-gs-text-secondary">
            Hover to see how each part works inside the app
          </p>
        </div>

        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="space-y-6">
            {stages.map((stage) => {
              const Icon = stage.icon
              const isActive = hoveredStage === stage.id

              return (
                <motion.div
                  key={stage.id}
                  onHoverStart={() => setHoveredStage(stage.id)}
                  onHoverEnd={() => setHoveredStage(null)}
                  className={`group flex cursor-pointer items-start gap-6 rounded-2xl border p-6 transition-all ${
                    isActive
                      ? 'border-gs-coral bg-gs-coral/5 shadow-[0_1px_3px_rgba(0,0,0,0.04)]'
                      : 'border-transparent hover:bg-gs-sand-light'
                  }`}
                  whileHover={{ x: 10 }}
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gs-sand-light text-gs-text-secondary">
                    <Icon className="h-7 w-7" strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 className="mb-2 font-display text-3xl font-semibold text-gs-text-primary">
                      {stage.title}
                    </h3>
                    <p className="leading-relaxed text-gs-text-secondary">{stage.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="h-[680px] w-[340px] rounded-[60px] border border-gs-border bg-gs-card p-[3px] shadow-[0_24px_64px_-28px_rgba(28,25,23,0.28)]">
                <div className="relative h-full w-full overflow-hidden rounded-[57px] bg-gs-sand">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeStage?.id}
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0"
                    >
                      {activeStage?.screen}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-20 text-center font-display text-2xl font-medium text-gs-text-primary">
          You pilot your health. <span className="text-gs-coral">Gutsphere keeps the map.</span>
        </p>
      </div>
    </section>
  )
}

export default GutsphereSystemSectionHover
