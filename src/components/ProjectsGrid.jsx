import SectionHeading from './SectionHeading'

const GlobeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 0 20M12 2a15.3 15.3 0 0 0 0 20" />
  </svg>
)

const GithubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 10.5 18.1V22" />
  </svg>
)

export default function ProjectsGrid({ projects = [] }) {
  return (
    <section id="projects" className="border-t border-mist">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <div className="flex flex-wrap items-end justify-between gap-2">
          <SectionHeading>Projects</SectionHeading>
          <p className="text-sm text-faint">Things I built to learn, and a few that stuck.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.id}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-mist bg-surface transition-colors hover:border-accent/40"
            >
              {p.underWork && (
                <span className="absolute right-3 top-3 z-10 flex items-center gap-1.5 rounded-full border border-down/25 bg-paper px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-down">
                  <span className="h-1.5 w-1.5 rounded-full bg-down" aria-hidden="true" />
                  Under work
                </span>
              )}

              <div className="h-40 w-full bg-mist/40">
                {p.image && (
                  <img
                    src={p.image}
                    alt={p.title}
                    width="600"
                    height="320"
                    loading="lazy"
                    className="h-full w-full object-cover object-[center_35%]"
                  />
                )}
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-faint">{p.description}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.skills?.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-mist px-2.5 py-0.5 font-mono text-[10px] text-faint"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between pt-1">
                  <span className="font-mono text-xs text-faint">{p.year}</span>
                  <a
                    href={p.website || p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
                  >
                    {p.website ? <GlobeIcon /> : <GithubIcon />}
                    {p.website ? 'Visit' : 'Source'}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
