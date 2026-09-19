import SectionHeading from './SectionHeading'
import { winbold, codecraft } from '../data/experience'
import { ArrowUpRight, GitCommit, GitPullRequest, Server, Bot, Shield, Terminal, CheckCircle2, Lock, Cpu, Database, Network } from 'lucide-react'

function FactsRail({ isMobile = false }) {
  const statIcons = [GitCommit, GitPullRequest, Bot, Server]

  return (
    <div className={`${isMobile ? '' : 'lg:sticky lg:top-28'} rounded-2xl border border-white/[0.08] bg-surface/80 p-5 backdrop-blur-xl card-institutional`}>
      <div className="border-b border-white/[0.08] pb-4">
        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-gold font-semibold">
          <span className="h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_6px_#c5a059]" />
          <span>PRODUCTION AUDIT METRICS</span>
        </div>

        <dl className="mt-4 grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-1 gap-3 font-mono text-xs">
          <div>
            <dt className="text-[10px] uppercase tracking-wider text-slate-400">Role</dt>
            <dd className="mt-0.5 font-semibold text-slate-200">{winbold.role}</dd>
          </div>
          <div>
            <dt className="text-[10px] uppercase tracking-wider text-slate-400">Duration</dt>
            <dd className="mt-0.5 text-slate-300">{winbold.period}</dd>
          </div>
        </dl>
      </div>

      {/* Live metric counters */}
      <div className="mt-5 space-y-3">
        <div className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
          Delivery Velocity & Scale
        </div>
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-1 gap-2.5">
          {winbold.stats.map((s, idx) => {
            const Icon = statIcons[idx % statIcons.length]
            return (
              <div
                key={s.label}
                className="flex items-center gap-3 rounded-xl border border-gold/20 bg-gold/5 p-2.5 transition-all hover:border-gold/40 hover:bg-gold/10"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gold/15 text-gold-light">
                  <Icon size={15} />
                </div>
                <div className="min-w-0">
                  <div className="font-mono text-lg font-bold text-gold-light leading-none">
                    {s.value}
                  </div>
                  <div className="mt-0.5 font-mono text-[10px] text-slate-400 leading-tight">
                    {s.label}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Stack list */}
      <div className="mt-6 border-t border-white/[0.08] pt-5">
        <div className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
          Technology Stack
        </div>
        <div className="mt-2.5 flex flex-wrap gap-1.5">
          {winbold.stack.map((item) => (
            <span
              key={item}
              className="rounded-md border border-white/10 bg-paper/80 px-2 py-0.5 font-mono text-[10px] text-slate-300 transition-colors hover:border-gold/30 hover:text-gold-light"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="relative border-t border-white/[0.08] bg-paper/90 py-16 sm:py-24">
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-gold/5 blur-[160px]"
      />

      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading id="experience-heading" tag="TRACK RECORD">
          Production Experience
        </SectionHeading>

        {/* Primary Role: Winbold */}
        <article className="mt-10 sm:mt-12 grid grid-cols-1 gap-8 lg:gap-10 lg:grid-cols-[minmax(0,1fr)_280px]">
          <div className="min-w-0">
            {/* Role Header */}
            <div className="rounded-2xl border border-white/[0.08] bg-surface/75 p-5 sm:p-8 backdrop-blur-sm card-institutional">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-mono text-xs uppercase tracking-widest text-gold font-semibold">
                  {winbold.company}
                </span>
                <span className="rounded-full border border-gold/30 bg-gold/10 px-2.5 py-0.5 font-mono text-[10px] text-gold-light">
                  {winbold.period}
                </span>
              </div>

              <h3 className="mt-3 font-serif text-2xl font-bold tracking-tight text-white sm:text-3xl">
                {winbold.title}
              </h3>

              <p className="mt-2 font-mono text-xs text-gold-light/90">
                {winbold.subtitle}
              </p>

              <p className="mt-5 text-sm sm:text-base leading-relaxed text-slate-300">
                {winbold.intro}
              </p>
            </div>

            {/* Mobile Telemetry HUD (Shown under role header on screens < lg) */}
            <div className="mt-6 lg:hidden">
              <FactsRail isMobile />
            </div>

            {/* Quantitative Architecture Specifications & Technical Deep-Dive */}
            <div className="my-8 sm:my-10 rounded-2xl border border-white/[0.08] bg-surface-elevated/70 p-5 sm:p-7 backdrop-blur-xl card-institutional">
              <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-2 border-b border-white/[0.08] pb-4">
                <div className="flex items-center gap-2">
                  <Cpu size={16} className="text-gold shrink-0" />
                  <span className="font-mono text-xs uppercase tracking-wider text-gold-light font-semibold">
                    Quantitative Architecture & Technical Rigor
                  </span>
                </div>
                <span className="font-mono text-[10px] text-slate-400">
                  Production Multi-Agent Rigor
                </span>
              </div>

              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-xl border border-white/[0.06] bg-surface/90 p-4">
                  <div className="flex items-center gap-2 font-mono text-xs font-semibold text-white">
                    <Shield size={14} className="text-gold" />
                    <span>Deterministic Risk Gates</span>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-slate-400">
                    Leader orchestrators generate trade candidates, but cannot directly execute orders. Every strategy is forced through strict Pydantic v2 schemas and contract tests to prevent invalid tick sizes or unhedged exposure.
                  </p>
                </div>

                <div className="rounded-xl border border-white/[0.06] bg-surface/90 p-4">
                  <div className="flex items-center gap-2 font-mono text-xs font-semibold text-white">
                    <Network size={14} className="text-gold" />
                    <span>State Recovery & Resilience</span>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-slate-400">
                    Decoupled background persistence layer with Redis checkpointing survives client disconnects. Enforces hierarchical timeouts per tool, subagent, and overall strategy DAG.
                  </p>
                </div>

                <div className="rounded-xl border border-white/[0.06] bg-surface/90 p-4">
                  <div className="flex items-center gap-2 font-mono text-xs font-semibold text-white">
                    <Database size={14} className="text-gold" />
                    <span>Sub-Penny Cost Accounting</span>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-slate-400">
                    LiteLLM proxy tier dynamically routes requests based on cognitive complexity, enforcing prompt-cache session affinity and attributing inference cost directly down to individual strategy P&Ls.
                  </p>
                </div>

                <div className="rounded-xl border border-white/[0.06] bg-surface/90 p-4">
                  <div className="flex items-center gap-2 font-mono text-xs font-semibold text-white">
                    <Lock size={14} className="text-gold" />
                    <span>Zero-Trust Enterprise Runtime</span>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-slate-400">
                    FastAPI microservices streaming real-time Server-Sent Events (SSE) to a live TypeScript execution console, running on k3s behind outbound-only Cloudflare Zero Trust tunnels with zero exposed ingress ports.
                  </p>
                </div>
              </div>
            </div>

            {/* Engineering Problems Breakdown */}
            <div className="mt-10">
              <h4 className="font-serif text-2xl font-bold text-white">
                {winbold.lead}
              </h4>

              <div className="mt-6 space-y-4">
                {winbold.problems.map((p, idx) => (
                  <div
                    key={p.heading}
                    className="group rounded-xl border border-white/[0.08] bg-surface/70 p-4 sm:p-5 transition-all duration-200 hover:border-gold/40 hover:bg-surface/90 card-institutional"
                  >
                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 font-mono text-xs text-gold">
                      <span className="text-gold-dim font-bold shrink-0">0{idx + 1} —</span>
                      <span className="font-semibold uppercase tracking-wider text-slate-200 group-hover:text-gold-light transition-colors">
                        {p.heading}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-slate-300">
                      {p.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky Telemetry HUD (Desktop only) */}
          <aside className="hidden lg:block self-start">
            <FactsRail />
          </aside>
        </article>

        {/* Co-Founder Role: CodeCraft Ventures */}
        <article className="mt-12 sm:mt-16 rounded-2xl border border-white/[0.08] bg-surface/50 p-5 sm:p-8 backdrop-blur-sm transition-all hover:border-white/20 card-institutional">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <h3 className="flex items-center gap-2 font-serif text-2xl font-bold text-white">
              <span>{codecraft.company}</span>
              <a
                href="https://siyadmohammed.github.io/codecraftventures/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold transition-colors hover:text-gold-light"
                aria-label="Visit CodeCraft Ventures site"
              >
                <ArrowUpRight size={16} />
              </a>
            </h3>

            <span className="font-mono text-xs text-slate-400">
              {codecraft.role} · {codecraft.period}
            </span>
          </div>

          <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-300">
            {codecraft.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-1.5 border-t border-white/[0.08] pt-4">
            {codecraft.stack.map((s) => (
              <span
                key={s}
                className="rounded-md border border-white/10 bg-paper/60 px-2.5 py-1 font-mono text-[11px] text-slate-300"
              >
                {s}
              </span>
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}
