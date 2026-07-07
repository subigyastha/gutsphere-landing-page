import type { useJourneyMap } from './useJourneyMap'

type Journey = ReturnType<typeof useJourneyMap>

function IcoAlert() {
  return (
    <svg className="cp2-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
      <path
        d="M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Dots({ state, count }: { state: number; count: number }) {
  return (
    <div className="cp2-dots" aria-hidden="true">
      {Array.from({ length: count }, (_, i) => {
        let cls = ''
        if (i === state) cls = 'on'
        else if (state > i || state === 4) cls = 'past'
        return <i key={i} className={cls} />
      })}
    </div>
  )
}

export function JourneyMapSection({ journey }: { journey: Journey }) {
  const {
    routeRef,
    contrailRef,
    planeRef,
    fxRef,
    points,
    journey: j,
    pingIndex,
    go,
    primary,
    back,
    replay,
    cohorts,
    stages,
    shortLabels,
  } = journey

  const { state, mapShown } = j

  return (
    <section id="journey">
      <div className="cp2-wrap">
        <div className="cp2-sec-head cp2-reveal">
          <p className="cp2-eyebrow">Pilot your journey</p>
          <h2>You fly it. Gutsphere maps the route.</h2>
          <p>
            Digestive health isn&apos;t one moment — it&apos;s a whole journey, with a different challenge at
            each stage. Drop in where you are and see how your copilot clears each one.
          </p>
        </div>

        <div className="cp2-sky cp2-reveal">
          <svg className="cp2-jmap" viewBox="0 0 1000 300" role="img" aria-label="A flight path across four stages of the digestive-health journey">
            <ellipse className="cp2-cloud c1" cx="180" cy="70" rx="46" ry="16" />
            <ellipse className="cp2-cloud c1" cx="150" cy="82" rx="30" ry="12" />
            <ellipse className="cp2-cloud c2" cx="720" cy="58" rx="54" ry="18" />
            <ellipse className="cp2-cloud c2" cx="690" cy="70" rx="34" ry="12" />
            <ellipse className="cp2-cloud c3" cx="470" cy="245" rx="40" ry="13" />
            <path
              ref={routeRef}
              id="cp2-route"
              d="M70,205 C230,110 360,110 500,168 S780,112 930,152"
            />
            <path
              ref={contrailRef}
              id="cp2-contrail"
              d="M70,205 C230,110 360,110 500,168 S780,112 930,152"
            />
            <g>
              {points.map((p, i) => {
                const nodeCls = [
                  'cp2-node',
                  state === i ? 'active' : '',
                  state > i || state === 4 ? 'done' : '',
                  pingIndex === i ? 'ping' : '',
                ]
                  .filter(Boolean)
                  .join(' ')
                return (
                  <g
                    key={i}
                    className={nodeCls}
                    data-i={i}
                    tabIndex={0}
                    role="button"
                    aria-label={`Stage ${i + 1}: ${stages[i].name}`}
                    onClick={() => go(i, false)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        go(i, false)
                      }
                    }}
                  >
                    <text className="cp2-lbl" x={p.x} y={p.y - 30}>
                      {shortLabels[i]}
                    </text>
                    <circle className="cp2-ring" cx={p.x} cy={p.y} r="15" />
                    <text className="cp2-num" x={p.x} y={p.y}>
                      {i + 1}
                    </text>
                  </g>
                )
              })}
            </g>
            <g ref={planeRef}>
              <g className="cp2-plane-bob">
                <path d="M22 2 L15 22 L11 13 L2 9 Z" />
              </g>
            </g>
            <g ref={fxRef} />
          </svg>
        </div>

        <div className={`cp2-jcard${state === 4 ? ' end' : ''}`}>
          {state === -1 && (
            <>
              <p className="cp2-stage-tag">Preflight</p>
              <p className="cp2-stage-name">Where are you right now?</p>
              <p className="cp2-lead">
                Drop in at your stage of the journey — or start at the beginning and fly the whole route.
              </p>
              <div className="cp2-cohorts">
                {cohorts.map((c) => (
                  <button key={c.i} type="button" className="cp2-co" onClick={() => go(c.i, false)}>
                    <b>{c.title}</b>
                    <span>{c.sub}</span>
                  </button>
                ))}
              </div>
            </>
          )}

          {state >= 0 && state < 4 && (
            <>
              <p className="cp2-stage-tag">
                Stage {state + 1} of {stages.length}
              </p>
              <p className="cp2-stage-name">{stages[state].name}</p>
              <div className="cp2-block chal">
                <span className="cp2-k">
                  <IcoAlert />
                  The challenge
                </span>
                <p>{stages[state].challenge}</p>
              </div>
              <div className={`cp2-block map${mapShown ? '' : ' hidden'}`}>
                <span className="cp2-k">
                  <span className="cp2-cop" />
                  Your copilot&apos;s map
                </span>
                <p>{stages[state].map}</p>
              </div>
              <div className="cp2-controls">
                <button type="button" className="cp2-jbtn" onClick={primary}>
                  {mapShown
                    ? state === stages.length - 1
                      ? 'Land the plane ✈'
                      : 'Fly on →'
                    : 'Show me the map'}
                </button>
                <button type="button" className="cp2-jbtn ghost" onClick={back}>
                  Back
                </button>
                <Dots state={state} count={stages.length} />
              </div>
            </>
          )}

          {state === 4 && (
            <>
              <p className="cp2-stage-tag">You made it</p>
              <p className="cp2-stage-name">You flew the whole route.</p>
              <p className="cp2-big">
                You were the pilot the entire time — Gutsphere just kept the map.
              </p>
              <div className="cp2-controls">
                <a className="cp2-jbtn" href="#start">
                  Start free →
                </a>
                <button type="button" className="cp2-jbtn ghost" onClick={replay}>
                  Fly it again
                </button>
                <Dots state={state} count={stages.length} />
              </div>
            </>
          )}
        </div>

        <p className="cp2-jnote">
          The plane is you; the map is your copilot. Stages are drawn from Gutsphere&apos;s real journey model.
        </p>
      </div>
    </section>
  )
}
