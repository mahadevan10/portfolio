import PipelineDiagram from './PipelineDiagram'
import SectionHeading from './SectionHeading'
import { winbold, codecraft } from '../data/experience'
import { ArrowUpRight, GitCommit, GitPullRequest, Server, Bot, Shield, Terminal } from 'lucide-react'

function FactsRail({ isMobile = false }) {
  const statIcons = [GitCommit, GitPullRequest, Bot, Server]

  return (
    <div className={`${isMobile ? '' : 'lg:sticky lg:top-28'} rounded-2xl border border-white/10 bg-surface/70 p-5 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)]`}>
      <div className="border-b border-white/10 pb-4">
        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-cyan-400">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span>OPERATIONAL METRICS</span>
        </div>

        <dl className="mt-4 grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-1 gap-3 font-mono text-xs">
          <div>
            <dt className="text-[10px] uppercase tracking-wider text-slate-500">Role</dt>
            <dd className="mt-0.5 font-semibold text-slate-200">{winbold.role}</dd>
          </div>
          <div>
            <dt className="text-[10px] uppercase tracking-wider text-slate-500">Duration</dt>
            <dd className="mt-0.5 text-slate-300">{winbold.period}</dd>
          </div>
        </dl>
      </div>

      {/* Live metric counters */}
      <div className="mt-5 space-y-3">
        <div className="font-mono text-[10px] uppercase tracking-wider text-slate-500">
          Impact Telemetry
        </div>
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-1 gap-2.5">
          {winbold.stats.map((s, idx) => {
            const Icon = statIcons[idx % statIcons.length]
            return (
              <div
                key={s.label}
                className="flex items-center gap-3 rounded-xl border border-emerald-500/20 bg-emerald-950/20 p-2.5 transition-all hover:border-emerald-500/40"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                  <Icon size={15} />
                </div>
                <div className="min-w-0">
                  <div className="font-mono text-lg font-bold text-emerald-400 leading-none">
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
      <div className="mt-6 border-t border-white/10 pt-5">
        <div className="font-mono text-[10px] uppercase tracking-wider text-slate-500">
          Core Arsenal
        </div>
        <div className="mt-2.5 flex flex-wrap gap-1">
          {winbold.stack.map((item) => (
            <span
              key={item}
              className="rounded border border-white/10 bg-paper/80 px-2 py-0.5 font-mono text-[10px] text-slate-300"
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
    <section id="experience" className="relative border-t border-white/10 bg-paper/90 py-16 sm:py-24">
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[120px]"
      />

      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading id="experience-heading" tag="MISSION_LOG_01">
          Engineering Experience
        </SectionHeading>

        {/* Primary Role: Winbold */}
        <article className="mt-10 sm:mt-12 grid grid-cols-1 gap-8 lg:gap-10 lg:grid-cols-[minmax(0,1fr)_280px]">
          <div className="min-w-0">
            {/* Role Header */}
            <div className="rounded-2xl border border-white/10 bg-surface/50 p-5 sm:p-8 backdrop-blur-sm">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-mono text-xs uppercase tracking-widest text-cyan-400 font-semibold">
                  {winbold.company}
                </span>
                <span className="rounded-full border border-cyan-500/30 bg-cyan-950/40 px-2.5 py-0.5 font-mono text-[10px] text-cyan-300">
                  {winbold.period}
                </span>
              </div>

              <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                {winbold.title}
              </h3>

              <p className="mt-2 font-mono text-xs text-cyan-300/80">
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

            {/* Interactive Architecture DAG */}
            <PipelineDiagram />

            {/* Engineering Problems Breakdown */}
            <div className="mt-10">
              <h4 className="font-display text-xl font-bold text-white">
                {winbold.lead}
              </h4>

              <div className="mt-6 space-y-4">
                {winbold.problems.map((p, idx) => (
                  <div
                    key={p.heading}
                    className="group rounded-xl border border-white/10 bg-surface/60 p-4 sm:p-5 transition-all duration-200 hover:border-cyan-500/40 hover:bg-surface/80"
                  >
                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 font-mono text-xs text-cyan-400">
                      <span className="text-slate-600 font-bold shrink-0">0{idx + 1} //</span>
                      <span className="font-semibold uppercase tracking-wider text-slate-200 group-hover:text-cyan-300 transition-colors">
                        {p.heading}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
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
        <article className="mt-12 sm:mt-16 rounded-2xl border border-white/10 bg-surface/40 p-5 sm:p-8 backdrop-blur-sm transition-all hover:border-white/20">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <h3 className="flex items-center gap-2 font-display text-xl font-bold text-white">
              <span>{codecraft.company}</span>
              <a
                href="https://siyadmohammed.github.io/codecraftventures/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 transition-colors hover:text-cyan-300"
                aria-label="Visit CodeCraft Ventures site"
              >
                <ArrowUpRight size={16} />
              </a>
            </h3>

            <span className="font-mono text-xs text-slate-400">
              {codecraft.role} · {codecraft.period}
            </span>
          </div>

          <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-400">
            {codecraft.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-1.5 border-t border-white/10 pt-4">
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
