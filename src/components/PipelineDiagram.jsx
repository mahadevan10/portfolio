import { Activity, ShieldCheck, Zap } from 'lucide-react'

// Geometry for the pipeline: event → leader → parallel workers → synthesis → campaign.
const MID_Y = 216
const NODE_H = 46

const EVENT = { x: 24, w: 128 }
const LEADER = { x: 204, w: 132, h: 58 }
const WORKER = { x: 424, w: 154 }
const SYNTH = { x: 664, w: 132, h: 58 }
const CAMPAIGN = { x: 836, w: 124, h: 62 }

// Worker centres, spaced evenly and symmetric about MID_Y.
const workers = [
  { center: MID_Y - 120, label: 'fundamentals', role: 'Financial metrics' },
  { center: MID_Y - 40, label: 'technicals', role: 'Momentum & charts' },
  { center: MID_Y + 40, label: 'news', role: 'Real-time sentiment' },
  { center: MID_Y + 120, label: 'events', role: 'Catalyst analysis' },
]

// Flat S-curve between two points, easing horizontally out of each node's face.
const curve = (x1, y1, x2, y2) => {
  const mid = (x1 + x2) / 2
  return `M${x1},${y1} C${mid},${y1} ${mid},${y2} ${x2},${y2}`
}

export default function PipelineDiagram() {
  return (
    <figure className="my-10 overflow-hidden rounded-2xl border border-cyan-500/20 bg-surface/80 p-4 sm:p-6 shadow-[0_0_35px_rgba(6,182,212,0.08)] backdrop-blur-xl">
      {/* Console Top Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-500" />
          </span>
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-cyan-400">
            LangGraph Swarm StateGraph
          </span>
          <span className="text-slate-600">/</span>
          <span className="font-mono text-[11px] text-slate-400">Deterministic Multi-Agent DAG</span>
        </div>

        <div className="flex items-center gap-3 font-mono text-[11px] text-slate-400">
          <span className="flex items-center gap-1.5 text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            4 Workers Parallel
          </span>
          <span className="hidden sm:inline text-slate-600">·</span>
          <span className="hidden sm:inline text-slate-400">Risk-Gated</span>
        </div>
      </div>

      {/* SVG Diagram Canvas */}
      <div className="overflow-x-auto pt-4 pb-2">
        <svg
          viewBox="0 0 980 470"
          role="img"
          aria-labelledby="pipeline-title"
          className="h-auto w-full min-w-[760px]"
        >
          <title id="pipeline-title">
            Agent pipeline: a market event fans out from a leader agent to parallel research agents,
            which converge into a synthesis step that emits a risk-gated executable campaign.
          </title>

          <defs>
            {/* Arrowhead markers */}
            <marker
              id="arrow-cyan"
              viewBox="0 0 10 10"
              refX="9"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M0,0 L10,5 L0,10 z" fill="#06b6d4" />
            </marker>

            <marker
              id="arrow-emerald"
              viewBox="0 0 10 10"
              refX="9"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M0,0 L10,5 L0,10 z" fill="#10b981" />
            </marker>

            {/* Glowing filter for nodes */}
            <filter id="glow-filter" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#06b6d4" floodOpacity="0.3" />
            </filter>
          </defs>

          {/* Background DAG Connection Edges */}
          <g className="stroke-slate-700/70" fill="none" strokeWidth="1.6" opacity="0.6">
            <path d={`M${EVENT.x + EVENT.w},${MID_Y} L${LEADER.x},${MID_Y}`} markerEnd="url(#arrow-cyan)" />
            {workers.map((w) => (
              <path key={`out-${w.label}`} d={curve(LEADER.x + LEADER.w, MID_Y, WORKER.x, w.center)} markerEnd="url(#arrow-cyan)" />
            ))}
            {workers.map((w) => (
              <path key={`in-${w.label}`} d={curve(WORKER.x + WORKER.w, w.center, SYNTH.x, MID_Y)} markerEnd="url(#arrow-cyan)" />
            ))}
            <path d={`M${SYNTH.x + SYNTH.w},${MID_Y} L${CAMPAIGN.x},${MID_Y}`} markerEnd="url(#arrow-emerald)" />
          </g>

          {/* Animated Quantum Pulses traversing edges */}
          <circle r="3.5" fill="#22d3ee" className="shadow-[0_0_10px_#22d3ee]">
            <animateMotion
              path={`M${EVENT.x + EVENT.w},${MID_Y} L${LEADER.x},${MID_Y}`}
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>

          {workers.map((w, idx) => (
            <circle key={`pulse-out-${w.label}`} r="3" fill="#38bdf8">
              <animateMotion
                path={curve(LEADER.x + LEADER.w, MID_Y, WORKER.x, w.center)}
                dur="2.4s"
                begin={`${0.3 + idx * 0.25}s`}
                repeatCount="indefinite"
              />
            </circle>
          ))}

          {workers.map((w, idx) => (
            <circle key={`pulse-in-${w.label}`} r="3" fill="#a78bfa">
              <animateMotion
                path={curve(WORKER.x + WORKER.w, w.center, SYNTH.x, MID_Y)}
                dur="2.4s"
                begin={`${1.2 + idx * 0.25}s`}
                repeatCount="indefinite"
              />
            </circle>
          ))}

          <circle r="3.5" fill="#10b981" className="shadow-[0_0_10px_#10b981]">
            <animateMotion
              path={`M${SYNTH.x + SYNTH.w},${MID_Y} L${CAMPAIGN.x},${MID_Y}`}
              dur="2s"
              begin="2.1s"
              repeatCount="indefinite"
            />
          </circle>

          {/* NODE 1: Market Event */}
          <g>
            <rect
              x={EVENT.x}
              y={MID_Y - NODE_H / 2}
              width={EVENT.w}
              height={NODE_H}
              rx="10"
              fill="#0f172a"
              stroke="#38bdf8"
              strokeWidth="1.5"
              className="drop-shadow-[0_4px_12px_rgba(56,189,248,0.15)]"
            />
            <circle cx={EVENT.x + 18} cy={MID_Y} r="4" fill="#38bdf8" className="animate-pulse" />
            <text x={EVENT.x + EVENT.w / 2 + 6} y={MID_Y + 4} textAnchor="middle" fill="#e2e8f0" className="font-mono font-medium" fontSize="12">
              market event
            </text>
          </g>

          {/* NODE 2: Leader Agent */}
          <g filter="url(#glow-filter)">
            <rect
              x={LEADER.x}
              y={MID_Y - LEADER.h / 2}
              width={LEADER.w}
              height={LEADER.h}
              rx="12"
              fill="#083344"
              stroke="#06b6d4"
              strokeWidth="2"
            />
            <text x={LEADER.x + LEADER.w / 2} y={MID_Y - 6} textAnchor="middle" fill="#38bdf8" className="font-display" fontSize="14" fontWeight="700">
              leader agent
            </text>
            <text x={LEADER.x + LEADER.w / 2} y={MID_Y + 14} textAnchor="middle" fill="#94a3b8" className="font-mono" fontSize="10">
              [orchestrator]
            </text>
          </g>

          {/* NODES 3: Parallel Research Workers */}
          {workers.map((w) => (
            <g key={w.label}>
              <rect
                x={WORKER.x}
                y={w.center - NODE_H / 2}
                width={WORKER.w}
                height={NODE_H}
                rx="10"
                fill="#0f172a"
                stroke="#475569"
                strokeWidth="1.4"
                className="transition-all hover:stroke-cyan-400"
              />
              <circle cx={WORKER.x + 16} cy={w.center} r="3" fill="#818cf8" />
              <text x={WORKER.x + WORKER.w / 2 + 4} y={w.center - 2} textAnchor="middle" fill="#f8fafc" className="font-mono font-semibold" fontSize="12">
                {w.label}
              </text>
              <text x={WORKER.x + WORKER.w / 2 + 4} y={w.center + 12} textAnchor="middle" fill="#64748b" className="font-mono" fontSize="9">
                {w.role}
              </text>
            </g>
          ))}

          {/* NODE 4: Synthesis */}
          <g>
            <rect
              x={SYNTH.x}
              y={MID_Y - SYNTH.h / 2}
              width={SYNTH.w}
              height={SYNTH.h}
              rx="12"
              fill="#1e1b4b"
              stroke="#818cf8"
              strokeWidth="2"
              className="drop-shadow-[0_4px_16px_rgba(129,140,248,0.2)]"
            />
            <text x={SYNTH.x + SYNTH.w / 2} y={MID_Y - 6} textAnchor="middle" fill="#c7d2fe" className="font-display" fontSize="14" fontWeight="700">
              synthesis
            </text>
            <text x={SYNTH.x + SYNTH.w / 2} y={MID_Y + 14} textAnchor="middle" fill="#a5b4fc" className="font-mono" fontSize="10">
              schema-validated
            </text>
          </g>

          {/* NODE 5: Executable Campaign */}
          <g>
            <rect
              x={CAMPAIGN.x}
              y={MID_Y - CAMPAIGN.h / 2}
              width={CAMPAIGN.w}
              height={CAMPAIGN.h}
              rx="12"
              fill="#064e3b"
              stroke="#10b981"
              strokeWidth="2"
              className="drop-shadow-[0_4px_20px_rgba(16,185,129,0.25)]"
            />
            <text x={CAMPAIGN.x + CAMPAIGN.w / 2} y={MID_Y - 8} textAnchor="middle" fill="#6ee7b7" className="font-display" fontSize="13" fontWeight="700">
              campaign
            </text>
            {/* Live Candlesticks */}
            <g strokeLinecap="round">
              <line x1="880" y1={MID_Y + 5} x2="880" y2={MID_Y + 22} stroke="#34d399" strokeWidth="2" />
              <line x1="880" y1={MID_Y + 9} x2="880" y2={MID_Y + 18} stroke="#34d399" strokeWidth="6" />
              <line x1="896" y1={MID_Y + 3} x2="896" y2={MID_Y + 24} stroke="#f87171" strokeWidth="2" />
              <line x1="896" y1={MID_Y + 8} x2="896" y2={MID_Y + 19} stroke="#f87171" strokeWidth="6" />
              <line x1="912" y1={MID_Y + 5} x2="912" y2={MID_Y + 22} stroke="#34d399" strokeWidth="2" />
              <line x1="912" y1={MID_Y + 10} x2="912" y2={MID_Y + 17} stroke="#34d399" strokeWidth="6" />
            </g>
          </g>

          {/* Architectural Annotations */}
          <g stroke="#38bdf8" fill="none" strokeWidth="1" strokeDasharray="3 3" opacity="0.45">
            <path d="M88,166 L88,192" />
            <path d="M270,120 L270,186" />
            <path d="M501,366 L501,400" />
            <path d="M730,150 L730,186" />
          </g>
          <g fill="#94a3b8" className="font-mono" fontSize="10">
            <text x="88" y="154" textAnchor="middle">event-loop reliability</text>
            <text x="270" y="108" textAnchor="middle">deterministic fan-out</text>
            <text x="501" y="418" textAnchor="middle">per-tier routing · cost attribution</text>
            <text x="730" y="138" textAnchor="middle">typed contract · risk gates</text>
          </g>
        </svg>
      </div>

      <figcaption className="mt-3 flex items-center justify-between border-t border-white/5 pt-3 font-mono text-[11px] text-slate-500">
        <span>Figure 1: Production Multi-Agent Execution DAG</span>
        <span className="text-cyan-400/80">LangGraph · FastAPI · LiteLLM</span>
      </figcaption>
    </figure>
  )
}
