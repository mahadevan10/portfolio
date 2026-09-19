import SectionHeading from './SectionHeading'
import { skillGroups } from '../data/skills'
import { Bot, Database, Layout, ShieldCheck, LineChart, Server } from 'lucide-react'

const groupIcons = {
  'Agentic AI & Orchestration': Bot,
  'Quantitative & Data Science': LineChart,
  'Backend & Market Services': Database,
  'Infrastructure & Security': ShieldCheck,
  'Dashboards & Interfaces': Layout,
}

export default function Skills() {
  return (
    <section id="skills" className="relative border-t border-white/[0.08] bg-paper/90 py-16 sm:py-24">
      {/* Ambient background light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-10 top-1/2 -z-10 h-[400px] w-[400px] rounded-full bg-gold/5 blur-[160px]"
      />

      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading id="skills-heading" tag="INSTITUTIONAL COMPETENCIES">
          Technical Core & Capabilities
        </SectionHeading>

        <p className="mt-2 text-sm text-slate-400">
          Domain expertise spanning multi-agent orchestration, quantitative modeling, low-latency market backend, and enterprise zero-trust security.
        </p>

        <div className="mt-10 sm:mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = groupIcons[group.title] || Server
            return (
              <div
                key={group.title}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-surface/75 p-5 sm:p-6 backdrop-blur-xl card-institutional-hover"
              >
                <div>
                  <div className="flex items-center gap-3 border-b border-white/[0.08] pb-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-gold/30 bg-gold/10 text-gold-light group-hover:scale-105 group-hover:border-gold transition-all">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-bold text-white tracking-tight">
                        {group.title}
                      </h3>
                      <span className="font-mono text-[10px] text-gold-dim font-semibold">
                        {group.items.length} TECHNOLOGIES
                      </span>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-md border border-white/10 bg-paper/80 px-2.5 py-1 font-mono text-xs text-slate-300 transition-all duration-200 hover:border-gold/40 hover:bg-gold/10 hover:text-gold-light"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-white/[0.06] pt-3 font-mono text-[10px] text-slate-400">
                  <span>ENTERPRISE TESTED</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
