// Geometry for the pipeline: event → leader → parallel workers → synthesis → campaign.
// All coordinates live in one viewBox so the whole figure scales as a unit.
const MID_Y = 216
const NODE_H = 44

const EVENT = { x: 24, w: 124 }
const LEADER = { x: 200, w: 128, h: 56 }
const WORKER = { x: 420, w: 150 }
const SYNTH = { x: 660, w: 128, h: 56 }
const CAMPAIGN = { x: 830, w: 120, h: 60 }

// Worker centres, spaced evenly and symmetric about MID_Y.
const workers = [
  { center: MID_Y - 120, label: 'fundamentals' },
  { center: MID_Y - 40, label: 'technicals' },
  { center: MID_Y + 40, label: 'news' },
  { center: MID_Y + 120, label: 'events' },
]

// Flat S-curve between two points, easing horizontally out of each node's face.
const curve = (x1, y1, x2, y2) => {
  const mid = (x1 + x2) / 2
  return `M${x1},${y1} C${mid},${y1} ${mid},${y2} ${x2},${y2}`
}

export default function PipelineDiagram() {
  return (
    <figure className="my-10">
      <div className="overflow-x-auto pb-2">
        <svg
          viewBox="0 0 960 470"
          role="img"
          aria-labelledby="pipeline-title"
          className="h-auto w-full min-w-[720px]"
        >
          <title id="pipeline-title">
            Agent pipeline: a market event fans out from a leader agent to parallel research agents,
            which converge into a synthesis step that emits a risk-gated executable campaign.
          </title>

          <defs>
            <marker
              id="arrow"
              viewBox="0 0 10 10"
              refX="9"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M0,0 L10,5 L0,10 z" className="fill-ink" />
            </marker>
          </defs>

          {/* edges */}
          <g className="stroke-ink" fill="none" strokeWidth="1.2" markerEnd="url(#arrow)" opacity="0.5">
            <path d={`M${EVENT.x + EVENT.w},${MID_Y} L${LEADER.x},${MID_Y}`} />
            {workers.map((w) => (
              <path key={`out-${w.label}`} d={curve(LEADER.x + LEADER.w, MID_Y, WORKER.x, w.center)} />
            ))}
            {workers.map((w) => (
              <path key={`in-${w.label}`} d={curve(WORKER.x + WORKER.w, w.center, SYNTH.x, MID_Y)} />
            ))}
            <path d={`M${SYNTH.x + SYNTH.w},${MID_Y} L${CAMPAIGN.x},${MID_Y}`} />
          </g>

          {/* market event */}
          <g>
            <rect
              x={EVENT.x}
              y={MID_Y - NODE_H / 2}
              width={EVENT.w}
              height={NODE_H}
              rx="8"
              className="fill-surface stroke-ink"
              strokeWidth="1.4"
            />
            <text x={EVENT.x + EVENT.w / 2} y={MID_Y + 5} textAnchor="middle" className="fill-ink font-mono" fontSize="13">
              market event
            </text>
          </g>

          {/* leader agent */}
          <g>
            <rect
              x={LEADER.x}
              y={MID_Y - LEADER.h / 2}
              width={LEADER.w}
              height={LEADER.h}
              rx="8"
              className="fill-surface stroke-ink"
              strokeWidth="1.8"
            />
            <text x={LEADER.x + LEADER.w / 2} y={MID_Y - 5} textAnchor="middle" className="fill-ink font-sans" fontSize="14" fontWeight="600">
              leader agent
            </text>
            <text x={LEADER.x + LEADER.w / 2} y={MID_Y + 13} textAnchor="middle" className="fill-faint font-mono" fontSize="11">
              orchestrates
            </text>
          </g>

          {/* parallel research agents */}
          {workers.map((w) => (
            <g key={w.label}>
              <rect
                x={WORKER.x}
                y={w.center - NODE_H / 2}
                width={WORKER.w}
                height={NODE_H}
                rx="8"
                className="fill-surface stroke-ink"
                strokeWidth="1.2"
              />
              <text x={WORKER.x + WORKER.w / 2} y={w.center + 4} textAnchor="middle" className="fill-ink font-mono" fontSize="12">
                {w.label}
              </text>
            </g>
          ))}

          {/* synthesis */}
          <g>
            <rect
              x={SYNTH.x}
              y={MID_Y - SYNTH.h / 2}
              width={SYNTH.w}
              height={SYNTH.h}
              rx="8"
              className="fill-surface stroke-ink"
              strokeWidth="1.8"
            />
            <text x={SYNTH.x + SYNTH.w / 2} y={MID_Y - 5} textAnchor="middle" className="fill-ink font-sans" fontSize="14" fontWeight="600">
              synthesis
            </text>
            <text x={SYNTH.x + SYNTH.w / 2} y={MID_Y + 13} textAnchor="middle" className="fill-faint font-mono" fontSize="11">
              schema-validated
            </text>
          </g>

          {/* executable campaign */}
          <g>
            <rect
              x={CAMPAIGN.x}
              y={MID_Y - CAMPAIGN.h / 2}
              width={CAMPAIGN.w}
              height={CAMPAIGN.h}
              rx="8"
              className="fill-surface stroke-ink"
              strokeWidth="1.8"
            />
            <text x={CAMPAIGN.x + CAMPAIGN.w / 2} y={MID_Y - 6} textAnchor="middle" className="fill-ink font-sans" fontSize="13" fontWeight="600">
              campaign
            </text>
            {/* candlesticks — the one place colour carries meaning */}
            <g strokeLinecap="round">
              <line x1="874" y1={MID_Y + 6} x2="874" y2={MID_Y + 22} className="stroke-up" strokeWidth="2" />
              <line x1="874" y1={MID_Y + 10} x2="874" y2={MID_Y + 18} className="stroke-up" strokeWidth="6" />
              <line x1="890" y1={MID_Y + 4} x2="890" y2={MID_Y + 24} className="stroke-down" strokeWidth="2" />
              <line x1="890" y1={MID_Y + 9} x2="890" y2={MID_Y + 20} className="stroke-down" strokeWidth="6" />
              <line x1="906" y1={MID_Y + 6} x2="906" y2={MID_Y + 22} className="stroke-up" strokeWidth="2" />
              <line x1="906" y1={MID_Y + 11} x2="906" y2={MID_Y + 18} className="stroke-up" strokeWidth="6" />
            </g>
          </g>

          {/* annotations — the four engineering problems, pointing at where they live */}
          <g className="stroke-faint" fill="none" strokeWidth="1" strokeDasharray="4 3" opacity="0.7">
            <path d="M86,166 L86,192" />
            <path d="M264,120 L264,186" />
            <path d="M495,366 L495,400" />
            <path d="M724,150 L724,186" />
          </g>
          <g className="fill-faint font-mono" fontSize="11">
            <text x="86" y="154" textAnchor="middle">event-loop reliability</text>
            <text x="264" y="108" textAnchor="middle">deterministic fan-out</text>
            <text x="495" y="418" textAnchor="middle">per-tier routing · cost attribution</text>
            <text x="724" y="138" textAnchor="middle">typed contract · risk gates</text>
          </g>
        </svg>
      </div>
      <figcaption className="mt-2 font-mono text-xs text-faint">
        Abstracted view of the orchestration pipeline.
      </figcaption>
    </figure>
  )
}
