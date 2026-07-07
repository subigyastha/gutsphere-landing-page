export const FOOD_PIPE_PATH =
  'M510 0C390 155 670 250 506 407C322 583 700 670 486 864C271 1059 720 1162 514 1364C333 1542 690 1646 510 1814C690 1980 320 2120 486 2280C271 2440 720 2580 514 2720C333 2840 690 2960 510 3080C454 3140 451 3200 514 3260C547 3300 560 3340 552 3380'

export const FOOD_PIPE_SHEEN_PATH =
  'M474 8C378 150 610 245 470 394C315 558 638 667 454 838C268 1012 665 1141 486 1340C340 1502 625 1630 482 1788C432 1844 620 1950 470 2100C315 2260 640 2380 454 2540C268 2700 620 2820 482 2980C432 3040 434 3120 498 3220'

export const GUT_MAP_VIEWBOX = '0 0 1000 3600'

export const STOMACH_PATH =
  'M221 3310c9-155 144-254 304-244 180 11 322 96 333 249 11 154-128 268-318 270-198 2-328-101-319-275z'

export const STOMACH_SHEEN_PATH =
  'M238 3294c40-116 161-181 318-169 107 8 197 46 251 111-89-16-182 0-274 45-117 57-211 66-295 13z'

export const SCROLL_GUT_HERO = {
  eyebrow: 'Welcome aboard',
  title: 'Your digestive health copilot — before diagnosis, between visits, and beyond treatment.',
  text: 'Digestive symptoms are hard to navigate when every day brings different clues.',
  safety: 'GutSphere does not diagnose, treat, or replace your doctor.',
  panelLabel: "Today's gut signal",
  panelStat: '13 journey stops',
  panelHint: 'Scroll to reveal checkpoints along the digestive path.',
  moments: [
    { title: 'Before diagnosis', detail: 'Capture clues clearly from day one.' },
    { title: 'Between visits', detail: 'Stay prepared with clean context.' },
    { title: 'Beyond treatment', detail: 'Build long-term gut-health continuity.' },
  ],
} as const

export { SCROLL_GUT_STOPS, SCROLL_GUT_CARD_REVEAL_OFFSET, SCROLL_GUT_STOP_REACH_OFFSET } from './scrollGutFlowCopy'
export type { ScrollGutStop, ScrollGutCard, ScrollGutCardVariant } from './scrollGutFlowCopy'
