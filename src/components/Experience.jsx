import PipelineDiagram from './PipelineDiagram'
import SectionHeading from './SectionHeading'
import { winbold, codecraft } from '../data/experience'

function FactsRail() {
  return (
    <aside className="order-first self-start lg:order-none">
      {/* Mobile: compact stat band. Desktop: sticky vertical rail. */}
      <div className="lg:sticky lg:top-24 lg:border-l lg:border-mist lg:pl-6">
        <div className="hidden lg:block">
          <dl className="space-y-4 text-sm">
            <div>
              <dt className="font-mono text-xs uppercase tracking-widest text-accent">Role</dt>
              <dd className="mt-1">{winbold.role}</dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-widest text-accent">Duration</dt>
              <dd className="mt-1 font-mono text-xs">{winbold.period}</dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-widest text-accent">Stack</dt>
              <dd className="mt-1 font-mono text-xs leading-relaxed text-faint">
                {winbold.stack.join(' · ')}
              </dd>
            </div>
          </dl>

          <ul className="mt-6 space-y-3 border-t border-mist pt-6">
            {winbold.stats.map((s) => (
              <li key={s.label}>
                <span className="font-mono text-lg font-medium text-up">{s.value}</span>{' '}
                <span className="text-xs text-faint">{s.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-3 border-y border-mist py-4 lg:hidden">
          {winbold.stats.map((s) => (
            <div key={s.label}>
              <div className="font-mono text-base font-medium text-up">{s.value}</div>
              <div className="text-xs text-faint">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="border-t border-mist bg-surface">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <SectionHeading>Experience</SectionHeading>

        {/* Winbold */}
        <article className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_260px]">
          <div className="min-w-0">
            <p className="font-mono text-xs uppercase tracking-widest text-accent">{winbold.company}</p>
            <h3 className="mt-2 font-display text-2xl font-semibold sm:text-3xl">
              {winbold.title}
            </h3>
            <p className="mt-2 max-w-prose text-sm italic text-faint">{winbold.subtitle}</p>
            <p className="mt-1 font-mono text-xs text-faint lg:hidden">
              {winbold.role} · {winbold.period}
            </p>

            <p className="mt-6 max-w-prose leading-relaxed">{winbold.intro}</p>

            <PipelineDiagram />

            <p className="max-w-prose leading-relaxed">{winbold.lead}</p>

            <div className="mt-6 space-y-6">
              {winbold.problems.map((p) => (
                <div key={p.heading} className="max-w-prose border-l-2 border-accent/25 pl-4">
                  <h4 className="font-display text-lg font-semibold">{p.heading}</h4>
                  <p className="mt-1.5 leading-relaxed text-faint">{p.body}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 font-mono text-xs leading-relaxed text-faint lg:hidden">
              {winbold.stack.join(' · ')}
            </p>
          </div>

          <FactsRail />
        </article>

        {/* CodeCraft Ventures */}
        <article className="mt-16 border-l-2 border-accent/30 pl-6">
          <h3 className="font-display text-xl font-semibold">
            {codecraft.company}
            <a href="https://siyadmohammed.github.io/codecraftventures/" className="ml-2 text-accent hover:text-accent-hover">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
              </svg>
            </a>
          </h3>
          <p className="mt-1 font-mono text-xs text-faint">
            {codecraft.role} · {codecraft.period}
          </p>
          <div className="mt-4 max-w-prose space-y-4">
            {codecraft.paragraphs.map((p, i) => (
              <p key={i} className="leading-relaxed text-faint">
                {p}
              </p>
            ))}
          </div>
          <p className="mt-4 font-mono text-xs text-faint">{codecraft.stack.join(' · ')}</p>
        </article>
      </div>
    </section>
  )
}
