import { forwardRef, type RefObject } from 'react'
import type { PlaneState } from './useScrollGutJourney'
import {
  FOOD_PIPE_PATH,
  FOOD_PIPE_SHEEN_PATH,
  GUT_MAP_VIEWBOX,
  STOMACH_PATH,
  STOMACH_SHEEN_PATH,
} from './constants'

interface GutMapSvgProps {
  plane: PlaneState
  pathRef: RefObject<SVGPathElement | null>
}

export const GutMapSvg = forwardRef<SVGSVGElement, GutMapSvgProps>(function GutMapSvg(
  { plane, pathRef },
  ref,
) {
  return (
    <svg
      ref={ref}
      className="scroll-gut-map"
      viewBox={GUT_MAP_VIEWBOX}
      preserveAspectRatio="none"
      role="img"
      aria-labelledby="scroll-gut-map-title scroll-gut-map-desc"
    >
      <title id="scroll-gut-map-title">Extended S-shaped digestive path ending in a glowing stomach</title>
      <desc id="scroll-gut-map-desc">
        A stylized food pipe ending in a colorful glowing stomach. A plane cursor travels along the
        path as you scroll through thirteen journey stops.
      </desc>

      <defs>
        <filter id="scrollGutSoftShadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="20" stdDeviation="18" floodColor="#94412f" floodOpacity="0.18" />
          <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#ffffff" floodOpacity="0.55" />
        </filter>

        <filter id="scrollGutStomachGlow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="24" result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="1 0 0 0 0.05  0 1 0 0 0.52  0 0 1 0 0.32  0 0 0 .85 0"
            result="glow"
          />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <linearGradient id="scrollGutPipeGradient" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#ffd5c7" />
          <stop offset="28%" stopColor="#f89d85" />
          <stop offset="54%" stopColor="#f0735f" />
          <stop offset="78%" stopColor="#ffc2a7" />
          <stop offset="100%" stopColor="#fa9077" />
        </linearGradient>

        <linearGradient id="scrollGutLumenGradient" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#fff1e8" stopOpacity="0.88" />
          <stop offset="44%" stopColor="#e97d64" stopOpacity="0.68" />
          <stop offset="100%" stopColor="#b84234" stopOpacity="0.52" />
        </linearGradient>

        <radialGradient id="scrollGutStomachGradient" cx="42%" cy="42%" r="72%">
          <stop offset="0%" stopColor="#fff9c7" />
          <stop offset="28%" stopColor="#f7b84c" />
          <stop offset="57%" stopColor="#3db486" />
          <stop offset="100%" stopColor="#0d7058" />
        </radialGradient>

        <radialGradient id="scrollGutStomachSheen" cx="30%" cy="25%" r="70%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.78" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>

        <linearGradient id="scrollGutPlaneGradient" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="48%" stopColor="#2e7d32" />
          <stop offset="100%" stopColor="#0f7d5a" />
        </linearGradient>
      </defs>

      <g className="scroll-gut-stomach" filter="url(#scrollGutStomachGlow)">
        <path d={STOMACH_PATH} fill="url(#scrollGutStomachGradient)" />
        <path d={STOMACH_SHEEN_PATH} fill="url(#scrollGutStomachSheen)" opacity="0.74" />
        <g className="scroll-gut-microbes" opacity="0.48">
          <circle cx="356" cy="3324" r="10" />
          <circle cx="410" cy="3388" r="7" />
          <circle cx="496" cy="3298" r="8" />
          <circle cx="600" cy="3360" r="11" />
          <circle cx="682" cy="3314" r="7" />
          <path
            d="M450 3428c38-26 70-27 100-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="10"
            strokeLinecap="round"
          />
          <path
            d="M631 3440c23-37 53-43 91-18"
            fill="none"
            stroke="currentColor"
            strokeWidth="10"
            strokeLinecap="round"
          />
          <path
            d="M322 3434c36 12 66 7 90-16"
            fill="none"
            stroke="currentColor"
            strokeWidth="10"
            strokeLinecap="round"
          />
        </g>
      </g>

      <path className="scroll-gut-pipe-shadow" d={FOOD_PIPE_PATH} />
      <path className="scroll-gut-pipe-outer" d={FOOD_PIPE_PATH} />
      <path className="scroll-gut-pipe-inner" d={FOOD_PIPE_PATH} />
      <path className="scroll-gut-pipe-sheen" d={FOOD_PIPE_SHEEN_PATH} />
      <path
        ref={pathRef}
        id="scrollGutFoodPipePath"
        className="scroll-gut-pipe-guide"
        d={FOOD_PIPE_PATH}
      />

      <g
        className="scroll-gut-plane"
        transform={`translate(${plane.x} ${plane.y}) rotate(${plane.angle})`}
        aria-hidden="true"
      >
        <circle className="scroll-gut-plane-halo" cx="0" cy="0" r="42" />
        <path
          className="scroll-gut-plane-body"
          d="M-15-24 31 0-15 24-5 4-32 0-5-4z"
          fill="url(#scrollGutPlaneGradient)"
        />
        <path
          className="scroll-gut-plane-fold"
          d="M-5 4 31 0-5-4"
          fill="none"
          stroke="#ffffff"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </g>
    </svg>
  )
})
