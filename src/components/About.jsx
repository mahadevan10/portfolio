import SectionHeading from './SectionHeading'
import { about } from '../data/profile'

export default function About() {
  const { degree, university, college, years } = about.education

  return (
    <section id="about" className="border-t border-mist">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <SectionHeading>About</SectionHeading>

        <div className="mt-8 max-w-prose space-y-5">
          {about.paragraphs.map((p, i) => (
            <p key={i} className="leading-relaxed text-faint">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-10 border-l-2 border-accent/30 pl-5">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">Education</p>
          <p className="mt-2 font-medium">{degree}</p>
          <p className="text-sm text-faint">
            {university} <span className="text-mist">·</span> {college}
          </p>
          <p className="mt-1 font-mono text-xs text-faint">{years}</p>
        </div>
      </div>
    </section>
  )
}
