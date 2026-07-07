/** Gut-shaped journey map — viewBox 0 0 88 400. Journey starts at TOP (stage 1), flows DOWN. */

export const GUT_MAP_VIEWBOX = { width: 88, height: 400 } as const

const H = GUT_MAP_VIEWBOX.height

/** Serpentine path — drawn bottom-to-top in data space, flipped visually to top-to-bottom */
export const GUT_PATH_D =
  'M 44 385 C 44 368, 16 360, 20 345 C 24 330, 72 318, 68 300 C 64 282, 18 272, 22 255 C 26 238, 74 226, 70 208 C 66 190, 20 178, 24 160 C 28 142, 76 130, 72 112 C 68 94, 22 82, 26 64 C 30 46, 58 34, 44 22'

/** Stage nodes — index 0 at top after flip, index 9 at bottom */
export const GUT_MAP_NODES: readonly { x: number; y: number }[] = [
  { x: 44, y: 385 },
  { x: 20, y: 345 },
  { x: 68, y: 300 },
  { x: 22, y: 255 },
  { x: 70, y: 208 },
  { x: 24, y: 160 },
  { x: 72, y: 112 },
  { x: 26, y: 64 },
  { x: 60, y: 38 },
  { x: 44, y: 22 },
]

/** SVG transform: flip path so stage 0 renders at top */
export const GUT_MAP_FLIP = `translate(0, ${H}) scale(1, -1)`

export const GUT_PATH_MOBILE_D =
  'M 8 12 C 40 12, 48 28, 72 28 C 96 28, 104 12, 128 12 C 152 12, 160 28, 184 28 C 208 28, 216 12, 240 12 C 264 12, 272 28, 296 28 C 320 28, 328 12, 352 12'

export const GUT_MAP_NODES_MOBILE: readonly { x: number; y: number }[] = [
  { x: 8, y: 12 },
  { x: 48, y: 20 },
  { x: 88, y: 12 },
  { x: 128, y: 20 },
  { x: 168, y: 12 },
  { x: 208, y: 20 },
  { x: 248, y: 12 },
  { x: 288, y: 20 },
  { x: 328, y: 12 },
  { x: 352, y: 20 },
]
