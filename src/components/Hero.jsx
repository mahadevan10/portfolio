import { profile } from '../data/profile'
import { ArrowDown, Cpu, Sparkles, Terminal, Activity, ShieldCheck, Zap } from 'lucide-react'

export default function Hero() {
  const telemetry = [
    { label: 'Orchestrator', value: 'LangGraph Swarm', icon: Cpu },
    { label: 'Guardrails', value: 'Typed JSON Contracts', icon: ShieldCheck },
    { label: 'Routing', value: 'LiteLLM Proxy Tier', icon: Zap },
    { label: 'Runtime', value: 'k3s · Cloudflare', icon: Terminal },
  ]

  return (
    <section id="top" className="relative mx-auto max-w-5xl px-4 sm:px-6 pt-28 sm:pt-40 lg:pt-44 pb-16 sm:pb-20">
      {/* Ambient background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-10 left-1/2 -z-10 h-[450px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-cyan-500/10 via-violet-500/10 to-emerald-500/10 blur-[120px]"
      />

      <div className="flex flex-col-reverse items-start gap-8 sm:gap-12 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-prose">
          {/* Status Badge */}
          <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/30 px-3 py-1 font-mono text-[11px] font-medium text-emerald-400 backdrop-blur-md shadow-[0_0_12px_rgba(16,185,129,0.2)]">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="tracking-wide uppercase whitespace-nowrap">ACTIVE AGENT SWARM</span>
            <span className="hidden xs:inline text-emerald-500/50">/</span>
            <span className="hidden xs:inline truncate text-slate-400 font-normal">{profile.role}</span>
          </div>

          {/* Headline */}
          <h1 className="mt-5 font-display text-3xl font-bold tracking-tight leading-[1.15] text-white sm:text-5xl lg:text-6xl">
            I build <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-300 bg-clip-text text-transparent">multi-agent LLM systems</span> for trading.
          </h1>

          {/* Intro Narrative */}
          <p className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg leading-relaxed text-slate-400">
            {profile.intro}
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col xs:flex-row flex-wrap items-stretch xs:items-center gap-3 sm:gap-4">
            <a
              href="#experience"
              className="group flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-6 py-3 font-mono text-xs font-semibold text-black shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all duration-300 hover:bg-cyan-400 hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] hover:scale-[1.02]"
            >
              <span>Explore Architecture</span>
              <ArrowDown size={14} className="transition-transform group-hover:translate-y-0.5" />
            </a>

            <a
              href="#projects"
              className="flex items-center justify-center gap-2 rounded-full border border-white/15 bg-surface/70 px-6 py-3 font-mono text-xs font-medium text-slate-300 backdrop-blur-sm transition-all hover:border-cyan-500/50 hover:bg-white/5 hover:text-white"
            >
              <span>View Deployments</span>
            </a>

            <a
              href="#contact"
              className="flex items-center justify-center font-mono text-xs text-slate-400 underline decoration-slate-600 underline-offset-4 transition-colors hover:text-cyan-300 hover:decoration-cyan-400 py-1"
            >
              Contact me →
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
                className="h-36 w-36 rounded-full object-cover object-center shadow-2xl xs:h-44 xs:w-44 sm:h-48 sm:w-48 lg:h-52 lg:w-52 filter contrast-105"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Real-time Agent Telemetry HUD */}
      <div className="mt-12 sm:mt-14 rounded-2xl border border-white/10 bg-surface/60 p-4 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {telemetry.map(({ label, value, icon: Icon }, idx) => (
            <div
              key={label}
              className={`flex items-center gap-2.5 sm:gap-3 ${
                idx % 2 === 0 ? 'border-r border-white/5 pr-2' : ''
              } lg:border-r lg:last:border-r-0 lg:border-white/5 lg:pr-2`}
            >
              <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-lg border border-cyan-500/20 bg-cyan-950/40 text-cyan-400">
                <Icon size={16} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-slate-500 truncate">
                  {label}
                </div>
                <div className="truncate font-mono text-[11px] sm:text-xs font-semibold text-slate-200" title={value}>
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
