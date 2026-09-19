import SectionHeading from './SectionHeading'
import { about } from '../data/profile'
import { GraduationCap, Award, Compass } from 'lucide-react'

export default function About() {
  const { degree, university, college, years } = about.education

  return (
    <section id="about" className="relative border-t border-white/[0.08] bg-paper/90 py-16 sm:py-24">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/4 top-0 -z-10 h-[450px] w-[450px] rounded-full bg-gold/5 blur-[160px]"
      />

      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading id="about-heading" tag="BACKGROUND & DISCIPLINE">
          Background & Philosophy
        </SectionHeading>

        <div className="mt-10 sm:mt-12 grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-12">
          {/* Engineering Narrative (7 cols) */}
          <div className="space-y-6 lg:col-span-7">
            <div className="rounded-2xl border border-white/[0.08] bg-surface/75 p-5 sm:p-8 backdrop-blur-xl card-institutional">
              <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-gold">
                <Compass size={14} />
                <span>Capital Markets Focus & Engineering Rigor</span>
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
            <div className="rounded-2xl border border-white/[0.08] bg-surface/75 p-5 sm:p-8 backdrop-blur-xl card-institutional transition-all hover:border-gold/40">
              <div className="flex items-center gap-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-gold">
                <GraduationCap size={16} />
                <span>Academic Foundation</span>
              </div>

              <div className="mt-5">
                <span className="rounded-full border border-gold/30 bg-gold/10 px-2.5 py-0.5 font-mono text-[10px] text-gold-light font-semibold">
                  {years}
                </span>

                <h3 className="mt-3 font-serif text-2xl font-bold text-white">
                  {degree}
                </h3>

                <p className="mt-2 text-sm font-medium text-slate-300">
                  {university}
                </p>

                <p className="text-xs text-slate-400 mt-0.5">
                  {college}
                </p>

                <div className="mt-6 border-t border-white/[0.08] pt-4 flex items-center gap-2 text-gold font-mono text-xs">
                  <Award size={14} />
                  <span>Computer Science Engineering</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
