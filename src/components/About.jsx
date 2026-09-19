import SectionHeading from './SectionHeading'
import { about } from '../data/profile'
import { GraduationCap, Award, Compass } from 'lucide-react'

export default function About() {
  const { degree, university, college, years } = about.education

  return (
    <section id="about" className="relative border-t border-white/10 bg-paper/90 py-24">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/4 top-0 -z-10 h-[450px] w-[450px] rounded-full bg-cyan-500/5 blur-[120px]"
      />

      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading id="about-heading" tag="IDENTITY_MODULE">
          About & Background
        </SectionHeading>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Engineering Narrative (7 cols) */}
          <div className="space-y-6 lg:col-span-7">
            <div className="rounded-2xl border border-white/10 bg-surface/60 p-6 sm:p-8 backdrop-blur-xl shadow-lg">
              <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-cyan-400">
                <Compass size={14} />
                <span>Engineering Ethos</span>
              </div>

              <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-300">
                {about.paragraphs.map((p, i) => (
                  <p key={i} className="text-slate-300">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Education & Credential Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-white/10 bg-surface/60 p-6 sm:p-8 backdrop-blur-xl shadow-lg transition-all hover:border-cyan-500/40">
              <div className="flex items-center gap-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-cyan-400">
                <GraduationCap size={16} />
                <span>Academic Foundation</span>
              </div>

              <div className="mt-5">
                <span className="rounded-full border border-cyan-500/30 bg-cyan-950/40 px-2.5 py-0.5 font-mono text-[10px] text-cyan-300">
                  {years}
                </span>

                <h3 className="mt-3 font-display text-xl font-bold text-white">
                  {degree}
                </h3>

                <p className="mt-2 text-sm font-medium text-slate-300">
                  {university}
                </p>

                <p className="text-xs text-slate-400 mt-0.5">
                  {college}
                </p>

                <div className="mt-6 border-t border-white/10 pt-4 flex items-center gap-2 text-emerald-400 font-mono text-xs">
                  <Award size={14} />
                  <span>Computer Science Graduate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
