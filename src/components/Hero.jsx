import { profile } from '../data/profile'
import { ArrowDown, Cpu, ShieldCheck, Zap, Server, Activity } from 'lucide-react'

export default function Hero() {
  const telemetry = [
    { label: '01. Orchestration', value: 'LangGraph StateGraphs', detail: 'Deterministic Subagent Swarms', icon: Cpu },
    { label: '02. Risk Governance', value: 'Pydantic Strict Schemas', detail: 'Zero Schema Drift · Contract Tests', icon: ShieldCheck },
    { label: '03. Capital Economics', value: 'LiteLLM Dynamic Routing', detail: 'Prompt-Cache Cost Attribution', icon: Zap },
    { label: '04. Infrastructure', value: 'FastAPI · k3s · Redis', detail: 'Cloudflare Zero Trust Tunnels', icon: Server },
  ]

  return (
    <section id="top" className="relative mx-auto max-w-5xl px-4 sm:px-6 pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-20">
      {/* Ambient institutional lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-10 left-1/2 -z-10 h-[450px] w-[650px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-gold/10 via-navy/30 to-transparent blur-[160px]"
      />

      <div className="flex flex-col-reverse items-start gap-8 sm:gap-12 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-prose">
          {/* Status Badge */}
          <div className="inline-flex flex-wrap items-center gap-2 rounded-2xl sm:rounded-full border border-gold/35 bg-gold/10 px-3.5 py-1.5 font-mono text-[11px] font-semibold text-gold-light backdrop-blur-md">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold shadow-[0_0_8px_#c5a059]" />
            </span>
            <span className="tracking-wider uppercase">CAPITAL MARKETS AI INFRASTRUCTURE</span>
            <span className="text-gold/40">/</span>
            <span className="text-slate-300 font-normal">{profile.role}</span>
          </div>

          {/* Headline */}
          <h1 className="mt-5 font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.12] text-white">
            Engineering{' '}
            <span className="bg-gradient-to-r from-white via-slate-100 to-gold-light bg-clip-text text-transparent">
              multi-agent AI systems
            </span>{' '}
            for capital markets & trading.
          </h1>

          {/* Intro Narrative */}
          <p className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg leading-relaxed text-slate-300 font-normal">
            {profile.intro}
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col xs:flex-row flex-wrap items-stretch xs:items-center gap-3 sm:gap-4">
            <a
              href="#experience"
              className="group flex items-center justify-center gap-2 rounded-xl bg-gold px-6 py-3 font-mono text-xs font-semibold text-slate-950 shadow-[0_4px_20px_rgba(197,160,89,0.3)] transition-all duration-200 hover:bg-gold-light hover:shadow-[0_6px_25px_rgba(197,160,89,0.45)] hover:-translate-y-0.5"
            >
              <span>Review System Architecture</span>
              <ArrowDown size={14} className="transition-transform group-hover:translate-y-0.5" />
            </a>

            <a
              href="#projects"
              className="flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-surface-elevated/80 px-6 py-3 font-mono text-xs font-medium text-slate-200 backdrop-blur-sm transition-all hover:border-gold/40 hover:bg-surface-subtle hover:text-white"
            >
              <span>Production Deployments</span>
            </a>

            <a
              href="#contact"
              className="flex items-center justify-center font-mono text-xs text-slate-400 underline decoration-slate-600 underline-offset-4 transition-colors hover:text-gold hover:decoration-gold py-2 px-1"
            >
              Direct Inquiries →
            </a>
          </div>
        </div>

        {/* Executive Portrait Frame */}
        <div className="relative shrink-0 self-center sm:self-auto">
          {/* Subtle gold ambient glow */}
          <div
            className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-gold/15 via-navy/30 to-transparent blur-xl"
            aria-hidden="true"
          />

          {/* Clean institutional double frame */}
          <div className="relative rounded-3xl p-2 border border-gold/30 bg-surface/90 backdrop-blur-md shadow-2xl">
            <div className="overflow-hidden rounded-2xl ring-1 ring-white/15">
              <img
                src={profile.photo}
                alt={profile.name}
                width="224"
                height="224"
                className="h-36 w-36 xs:h-44 xs:w-44 sm:h-48 sm:w-48 lg:h-52 lg:w-52 object-cover object-center filter contrast-[1.04]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Production Systems Specifications Bar */}
      <div className="mt-12 sm:mt-14 rounded-2xl border border-white/[0.08] bg-surface/80 p-4 sm:p-5 backdrop-blur-xl card-institutional">
        <div className="flex items-center gap-2 mb-3 pb-2.5 border-b border-white/[0.06] font-mono text-[10px] uppercase tracking-wider text-slate-400">
          <Activity size={13} className="text-gold" />
          <span>Core Production Architecture & Execution Standards</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {telemetry.map(({ label, value, detail, icon: Icon }, idx) => (
            <div
              key={label}
              className="flex items-start gap-3 rounded-xl bg-surface-elevated/40 p-3 sm:p-2 sm:bg-transparent lg:border-r lg:last:border-r-0 lg:border-white/[0.06] lg:pr-3"
            >
              <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-lg border border-gold/25 bg-gold/10 text-gold-light mt-0.5">
                <Icon size={16} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-mono text-[10px] uppercase tracking-wider text-gold font-semibold">
                  {label}
                </div>
                <div className="font-mono text-xs sm:text-xs font-semibold text-slate-100 break-words mt-0.5">
                  {value}
                </div>
                <div className="font-sans text-[11px] sm:text-[10px] text-slate-400 break-words mt-0.5">
                  {detail}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
