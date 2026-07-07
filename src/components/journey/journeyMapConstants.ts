/** Straight vertical route map — viewBox 0 0 56 400. Journey starts at TOP. */

export const ROUTE_MAP_VIEWBOX = { width: 56, height: 400 } as const

export const ROUTE_CENTER_X = 28

/** Straight vertical flight path */
export const ROUTE_PATH_D = 'M 28 24 L 28 376'

const TOP = 24
const BOTTOM = 376
const COUNT = 10

/** Evenly spaced waypoint Y positions (stage 0 at top) */
export const ROUTE_WAYPOINTS: readonly { x: number; y: number }[] = Array.from(
  { length: COUNT },
  (_, i) => ({
    x: ROUTE_CENTER_X,
    y: TOP + (i * (BOTTOM - TOP)) / (COUNT - 1),
  }),
)

/** Mobile horizontal route */
export const ROUTE_MOBILE_VIEWBOX = { width: 360, height: 48 } as const
export const ROUTE_MOBILE_PATH_D = 'M 16 24 L 344 24'

export const ROUTE_MOBILE_WAYPOINTS: readonly { x: number; y: number }[] = Array.from(
  { length: COUNT },
  (_, i) => ({
    x: 16 + (i * (344 - 16)) / (COUNT - 1),
    y: 24,
  }),
)

/** Decorative cloud positions (rail map, aria-hidden) */
export const ROUTE_DECOR_CLOUDS: readonly { x: number; y: number; scale: number }[] = [
  { x: 6, y: 52, scale: 0.85 },
  { x: 42, y: 108, scale: 0.7 },
  { x: 8, y: 188, scale: 0.9 },
  { x: 40, y: 268, scale: 0.75 },
  { x: 10, y: 340, scale: 0.8 },
]
