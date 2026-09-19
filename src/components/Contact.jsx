import { Github, Linkedin, Mail, Phone, ArrowUpRight, Radio } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { profile } from '../data/profile'

const channels = [
  { icon: Mail, label: 'Secure Email', value: profile.email, href: `mailto:${profile.email}`, detail: 'Direct communication' },
  { icon: Linkedin, label: 'LinkedIn Network', value: 'in/mahadevanmn10', href: profile.linkedin, external: true, detail: 'Professional profile' },
  { icon: Github, label: 'GitHub Artifacts', value: 'mahadevan10', href: profile.github, external: true, detail: 'Open source & code' },
  { icon: Phone, label: 'Phone / Signal', value: profile.phone, href: profile.phoneHref, detail: 'Voice communication' },
]

export default function Contact() {
  return (
    <section id="contact" className="relative border-t border-white/10 bg-paper/95 py-16 sm:py-24">
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/5 blur-[140px]"
      />

      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="max-w-prose">
          <SectionHeading id="contact-heading" tag="UPLINK_CONSOLE">
            Establish Uplink
          </SectionHeading>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Open to conversations about agentic AI, quantitative trading systems, or interesting distributed systems engineering problems.
          </p>
        </div>

        {/* Channel Uplink Grid */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 gap-3.5 sm:gap-4 sm:grid-cols-2">
          {channels.map(({ icon: Icon, label, value, href, external, detail }) => (
            <a
              key={label}
              href={href}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="group relative flex items-center justify-between overflow-hidden rounded-2xl border border-white/10 bg-surface/60 p-4 sm:p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:bg-surface/90 hover:shadow-[0_8px_30px_rgba(6,182,212,0.12)]"
            >
              <div className="flex items-center gap-3.5 sm:gap-4 min-w-0 flex-1">
                <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-950/40 text-cyan-400 group-hover:scale-105 group-hover:border-cyan-400/50 transition-all">
                  <Icon size={18} />
                </div>
                <div className="min-w-0 flex-1 pr-2">
                  <div className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-slate-500">
                    {label}
                  </div>
                  <div className="truncate font-mono text-xs sm:text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors" title={value}>
                    {value}
                  </div>
                  <div className="truncate text-[10px] sm:text-[11px] text-slate-400">
                    {detail}
                  </div>
                </div>
              </div>

              <div className="ml-2 sm:ml-4 shrink-0 text-slate-500 group-hover:text-cyan-400 transition-colors">
                <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </a>
          ))}
        </div>

        {/* Futuristic Terminal Footer */}
        <footer className="mt-16 sm:mt-20 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row text-xs font-mono text-slate-500 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>ALL AGENTS & SERVICES OPERATIONAL</span>
          </div>

          <div>
            © {new Date().getFullYear()} {profile.name} · Antigravity Design Edition
          </div>
        </footer>
      </div>
    </section>
  )
}
