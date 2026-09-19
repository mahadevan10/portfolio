import SectionHeading from './SectionHeading'
import { skillGroups } from '../data/skills'
import { Code2, Bot, Database, Layout, ShieldCheck, Cpu } from 'lucide-react'

const groupIcons = {
  Languages: Code2,
  'AI & Agents': Bot,
  'Backend & Data': Database,
  Frontend: Layout,
  'Infrastructure & Tools': ShieldCheck,
}

export default function Skills() {
  return (
    <section id="skills" className="relative border-t border-white/10 bg-paper/90 py-24">
      {/* Ambient background light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-10 top-1/2 -z-10 h-[400px] w-[400px] rounded-full bg-cyan-500/5 blur-[120px]"
      />

      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading id="skills-heading" tag="MISSION_LOG_03">
          Technical Arsenal
        </SectionHeading>

        <p className="mt-2 text-sm text-slate-400">
          Core competencies spanning agentic orchestration, distributed systems, and production reliability.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = groupIcons[group.title] || Cpu
            return (
              <div
                key={group.title}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-surface/60 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/40 hover:bg-surface/80 hover:shadow-[0_8px_30px_rgba(6,182,212,0.1)]"
              >
                <div>
                  <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-500/20 bg-cyan-950/30 text-cyan-400 group-hover:scale-105 group-hover:border-cyan-400/40 transition-all">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-bold text-white tracking-tight">
                        {group.title}
                      </h3>
                      <span className="font-mono text-[10px] text-slate-500">
                        {group.items.length} TECHNOLOGIES
                      </span>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-lg border border-white/10 bg-paper/80 px-2.5 py-1 font-mono text-xs text-slate-300 transition-all duration-200 hover:border-cyan-400/40 hover:bg-cyan-950/30 hover:text-cyan-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-3 font-mono text-[10px] text-slate-600">
                  <span>DEPLOYED IN PRODUCTION</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
