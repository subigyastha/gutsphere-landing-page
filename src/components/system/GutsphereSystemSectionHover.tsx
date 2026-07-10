import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ClipboardList, Heart, Compass, Lightbulb } from 'lucide-react'

const stages = [
  {
    id: 'track',
    title: 'Track',
    icon: ClipboardList,
    color: 'bg-pink-500',
    description: 'Log symptoms, food, sleep & stress effortlessly',
    screen: (
      <div className="h-full overflow-hidden bg-gradient-to-br from-pink-50 to-white p-6">
        <div className="mb-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-semibold">Today&apos;s Log</h3>
            <span className="text-xs text-pink-600">+ Add Entry</span>
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
              className="flex items-center justify-between rounded-2xl bg-white p-4 shadow"
            >
              <div>
                <p className="font-medium">{entry.label}</p>
                <p className="text-xs text-gray-500">{entry.time}</p>
              </div>
              <div className="text-right text-sm font-medium text-pink-600">{entry.value}</div>
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
    color: 'bg-rose-500',
    description: 'Personalized, gentle self-care recommendations',
    screen: (
      <div className="flex h-full flex-col items-center justify-center bg-gradient-to-br from-rose-50 to-white p-8 text-center">
        <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 3 }}>
          <Heart className="mb-8 h-20 w-20 text-rose-500" />
        </motion.div>
        <h3 className="mb-3 text-2xl font-semibold">Today&apos;s Care Plan</h3>
        <p className="max-w-[200px] text-gray-600">
          Based on your logs, try a 15-minute warm compress + herbal tea.
        </p>
      </div>
    ),
  },
  {
    id: 'navigate',
    title: 'Navigate',
    icon: Compass,
    color: 'bg-teal-500',
    description: 'Know when to seek help and prepare for visits',
    screen: (
      <div className="h-full bg-gradient-to-br from-teal-50 to-white p-6">
        <div className="mb-8 rounded-3xl bg-white p-6 shadow">
          <div className="mb-4 flex items-center gap-3">
            <div className="h-3 w-3 animate-pulse rounded-full bg-teal-500" />
            <span className="font-medium">Recommended Action</span>
          </div>
          <p className="text-lg font-semibold">Schedule GI Appointment</p>
          <p className="mt-1 text-sm text-teal-600">Your symptoms suggest it’s worth checking</p>
        </div>
        <div className="space-y-4 pl-2 text-xs text-gray-600">
          <div className="flex gap-3">
            📋 <span>Prepared symptom timeline</span>
          </div>
          <div className="flex gap-3">
            ❓ <span>Smart questions for your doctor</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'understand',
    title: 'Understand',
    icon: Lightbulb,
    color: 'bg-amber-500',
    description: 'Discover meaningful patterns in your data',
    screen: (
      <div className="flex h-full flex-col bg-gradient-to-br from-amber-50 to-white p-6">
        <div className="mb-8 text-center">
          <div className="mb-4 text-6xl">📊</div>
          <h3 className="text-xl font-semibold">Your Patterns</h3>
        </div>
        <div className="rounded-2xl bg-white p-5 shadow">
          <p className="mb-2 font-medium text-amber-600">Trigger Identified</p>
          <p className="text-sm">Dairy consumption strongly correlates with flare-ups (78%)</p>
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
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-5xl font-bold tracking-tight">An Operating System for Your Gut</h2>
          <p className="text-xl text-gray-600">Hover to see how each part works inside the app</p>
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
                  className={`group flex cursor-pointer items-start gap-6 rounded-3xl border p-6 transition-all ${
                    isActive
                      ? 'border-pink-500 bg-pink-50 shadow-md'
                      : 'border-transparent hover:bg-gray-50'
                  }`}
                  whileHover={{ x: 10 }}
                >
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${stage.color}`}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-3xl font-semibold">{stage.title}</h3>
                    <p className="leading-relaxed text-gray-600">{stage.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="h-[680px] w-[340px] rounded-[60px] bg-black p-4 shadow-2xl">
                <div className="relative h-full w-full overflow-hidden rounded-[48px] border border-zinc-800 bg-zinc-950">
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

                  <div className="absolute top-4 left-1/2 z-10 h-6 w-36 -translate-x-1/2 rounded-full bg-black" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-20 text-center text-2xl font-medium">
          You pilot your health. <span className="text-pink-600">Gutsphere keeps the map.</span>
        </p>
      </div>
    </section>
  )
}

export default GutsphereSystemSectionHover
