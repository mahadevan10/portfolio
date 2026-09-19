import { profile } from '../data/profile'
import { ArrowDown, Cpu, Sparkles, Terminal, Activity, ShieldCheck, Zap } from 'lucide-react'

export default function Hero() {
  const telemetry = [
    { label: 'Orchestrator', value: 'LangGraph Swarm', icon: Cpu },
    { label: 'Guardrails', value: 'Typed JSON Contracts', icon: ShieldCheck },
    { label: 'Routing', value: 'LiteLLM Proxy Tier', icon: Zap },
    { label: 'Runtime', value: 'k3s · Zero Trust', icon: Terminal },
  ]

  return (
    <section id="top" className="relative mx-auto max-w-5xl px-6 pt-32 pb-20 sm:pt-40 lg:pt-44">
      {/* Ambient background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-10 left-1/2 -z-10 h-[450px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-cyan-500/10 via-violet-500/10 to-emerald-500/10 blur-[120px]"
      />

      <div className="flex flex-col-reverse items-start gap-12 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-prose">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/30 px-3 py-1 font-mono text-[11px] font-medium text-emerald-400 backdrop-blur-md shadow-[0_0_12px_rgba(16,185,129,0.2)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="tracking-wide uppercase">ACTIVE AGENT SWARM</span>
            <span className="text-emerald-500/50">/</span>
            <span className="text-slate-400 font-normal">{profile.role}</span>
          </div>

          {/* Headline */}
          <h1 className="mt-5 font-display text-4xl font-bold tracking-tight leading-[1.1] text-white sm:text-5xl lg:text-6xl">
            I build <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-300 bg-clip-text text-transparent">multi-agent LLM systems</span> for trading.
          </h1>

          {/* Intro Narrative */}
          <p className="mt-6 text-base leading-relaxed text-slate-400 sm:text-lg">
            {profile.intro}
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#experience"
              className="group flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-3 font-mono text-xs font-semibold text-black shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all duration-300 hover:bg-cyan-400 hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] hover:scale-[1.02]"
            >
              <span>Explore Architecture</span>
              <ArrowDown size={14} className="transition-transform group-hover:translate-y-0.5" />
            </a>

            <a
              href="#projects"
              className="flex items-center gap-2 rounded-full border border-white/15 bg-surface/70 px-6 py-3 font-mono text-xs font-medium text-slate-300 backdrop-blur-sm transition-all hover:border-cyan-500/50 hover:bg-white/5 hover:text-white"
            >
              <span>View Deployments</span>
            </a>

            <a
              href="#contact"
              className="font-mono text-xs text-slate-400 underline decoration-slate-600 underline-offset-4 transition-colors hover:text-cyan-300 hover:decoration-cyan-400"
            >
              Initiate Uplink →
            </a>
          </div>
        </div>

        {/* Holographic Avatar Display */}
        <div className="relative shrink-0 self-center sm:self-auto">
          {/* Cyber aura glow */}
          <div
            className="absolute -inset-4 rounded-full bg-gradient-to-tr from-cyan-500/20 via-violet-500/20 to-emerald-500/20 blur-xl"
            aria-hidden="true"
          />

          {/* Holographic framing rings */}
          <div className="relative rounded-full p-2 ring-1 ring-cyan-500/30">
            <div className="rounded-full p-1 ring-1 ring-white/20">
              <img
                src={profile.photo}
                alt={profile.name}
                width="224"
                height="224"
                className="h-44 w-44 rounded-full object-cover object-center shadow-2xl sm:h-52 sm:w-52 filter contrast-105"
              />
            </div>

            {/* Corner HUD accent ticks */}
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 rounded bg-cyan-400 px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest text-black shadow-xs font-semibold">
              AGY-NODE 01
            </div>
          </div>
        </div>
      </div>

      {/* Real-time Agent Telemetry HUD */}
      <div className="mt-14 rounded-2xl border border-white/10 bg-surface/60 p-4 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {telemetry.map(({ label, value, icon: Icon }) => (
            <div key={label} className="flex items-center gap-3 border-r last:border-r-0 border-white/5 pr-2">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-cyan-500/20 bg-cyan-950/40 text-cyan-400">
                <Icon size={16} />
              </div>
              <div className="min-w-0">
                <div className="font-mono text-[10px] uppercase tracking-wider text-slate-500">
                  {label}
                </div>
                <div className="truncate font-mono text-xs font-semibold text-slate-200">
                  {value}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
