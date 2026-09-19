import { Github, Linkedin, Mail, Phone, ArrowUpRight, Radio } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { profile } from '../data/profile'

const channels = [
  { icon: Mail, label: 'Direct Email', value: profile.email, href: `mailto:${profile.email}`, detail: 'Primary executive inbox' },
  { icon: Linkedin, label: 'LinkedIn Profile', value: 'in/mahadevanmn10', href: profile.linkedin, external: true, detail: 'Professional network' },
  { icon: Github, label: 'GitHub Codebase', value: 'mahadevan10', href: profile.github, external: true, detail: 'Open source & system repositories' },
  { icon: Phone, label: 'Direct Phone', value: profile.phone, href: profile.phoneHref, detail: 'Voice & WhatsApp' },
]

export default function Contact() {
  return (
    <section id="contact" className="relative border-t border-white/[0.08] bg-paper/95 py-16 sm:py-24">
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-gold/5 blur-[160px]"
      />

      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="max-w-prose">
          <SectionHeading id="contact-heading" tag="COMMUNICATION">
            Direct Inquiries & Contact
          </SectionHeading>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Available for discussions regarding quantitative AI systems, capital markets architecture, and high-concurrency financial backend engineering.
          </p>
        </div>

        {/* Channel Grid */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 gap-3.5 sm:gap-4 sm:grid-cols-2">
          {channels.map(({ icon: Icon, label, value, href, external, detail }) => (
            <a
              key={label}
              href={href}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="group relative flex items-center justify-between overflow-hidden rounded-2xl border border-white/[0.08] bg-surface/75 p-4 sm:p-5 backdrop-blur-xl card-institutional-hover hover:border-gold/40"
            >
              <div className="flex items-center gap-3.5 sm:gap-4 min-w-0 flex-1">
                <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold-light group-hover:scale-105 group-hover:border-gold transition-all">
                  <Icon size={18} />
                </div>
                <div className="min-w-0 flex-1 pr-2">
                  <div className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-gold-dim font-semibold">
                    {label}
                  </div>
                  <div className="font-mono text-xs sm:text-sm font-semibold text-white group-hover:text-gold-light transition-colors break-all">
                    {value}
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-slate-400 break-words mt-0.5">
                    {detail}
                  </div>
                </div>
              </div>

              <div className="ml-2 sm:ml-4 shrink-0 text-slate-500 group-hover:text-gold transition-colors">
                <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </a>
          ))}
        </div>

        {/* Refined Wall Street Footer */}
        <footer className="mt-16 sm:mt-20 flex flex-col items-center justify-between gap-4 border-t border-white/[0.08] pt-8 sm:flex-row text-xs font-mono text-slate-400 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            <span>INSTITUTIONAL ARCHITECTURE · CAPITAL MARKETS AI</span>
          </div>

          <div>
            © {new Date().getFullYear()} {profile.name} · Engineered for Production
          </div>
        </footer>
      </div>
    </section>
  )
}
