import { useState, useMemo } from 'react'
import { ArrowUpRight, Github, Globe, Sparkles } from 'lucide-react'
import SectionHeading from './SectionHeading'

const isAiProject = (p) => {
  const aiKeywords = [
    'lstm',
    'scikit-learn',
    'rag',
    'playwright',
    'pdfplumber',
    'huggingface',
    'roberta',
    'nlp',
    'opencv',
    'openai',
    'pandas',
  ]
  const text = (p.skills.join(' ') + ' ' + p.title + ' ' + p.description).toLowerCase()
  return aiKeywords.some((kw) => text.includes(kw))
}

const isWebProject = (p) => {
  const webKeywords = [
    'react',
    'next.js',
    'node.js',
    'express',
    'firebase',
    'vercel',
    'render',
    'fastapi',
    'websockets',
    'mongodb',
    'flask',
  ]
  const text = (p.skills.join(' ') + ' ' + p.title + ' ' + p.description).toLowerCase()
  return webKeywords.some((kw) => text.includes(kw))
}

export default function ProjectsGrid({ projects = [] }) {
  const [activeFilter, setActiveFilter] = useState('all')

  const counts = useMemo(
    () => ({
      all: projects.length,
      ai: projects.filter(isAiProject).length,
      web: projects.filter(isWebProject).length,
    }),
    [projects]
  )

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'ai') return projects.filter(isAiProject)
    if (activeFilter === 'web') return projects.filter(isWebProject)
    return projects
  }, [projects, activeFilter])

  // In 'all' view, feature the flagship project on top
  const featuredProject = activeFilter === 'all' ? filteredProjects.find((p) => p.id === 'proj-1') : null
  const regularProjects = featuredProject
    ? filteredProjects.filter((p) => p.id !== featuredProject.id)
    : filteredProjects

  const filterTabs = [
    { id: 'all', label: 'All Projects', count: counts.all },
    { id: 'ai', label: 'AI & Machine Learning', count: counts.ai },
    { id: 'web', label: 'Full Stack & Web', count: counts.web },
  ]

  return (
    <section id="projects" className="border-t border-mist bg-paper/60">
      <div className="mx-auto max-w-5xl px-6 py-20">
        {/* Section Header with Category Filter */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionHeading>Personal Projects</SectionHeading>
            <p className="mt-2 text-sm text-faint">
              Things I built to learn, and a few that stuck.
            </p>
          </div>

          {/* Interactive Filter Pills */}
          <div
            role="tablist"
            aria-label="Filter projects by category"
            className="flex flex-wrap items-center gap-1.5 rounded-xl border border-mist bg-surface p-1.5 shadow-xs"
          >
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.id
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-mono text-xs transition-all duration-200 ${
                    isActive
                      ? 'bg-accent text-white font-medium shadow-xs'
                      : 'text-faint hover:bg-mist/40 hover:text-ink'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`rounded-full px-1.5 py-0.5 text-[10px] leading-none transition-colors ${
                      isActive ? 'bg-white/20 text-white' : 'bg-mist/60 text-faint'
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Featured Flagship Project (Shown in "All" view) */}
        {featuredProject && (
          <div className="mt-10">
            <article className="group relative overflow-hidden rounded-2xl border border-mist bg-surface shadow-xs transition-all duration-300 hover:border-accent/40 hover:shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Media Preview (5 cols) */}
                <div className="relative border-b border-mist bg-mist/20 lg:col-span-5 lg:border-b-0 lg:border-r overflow-hidden min-h-[260px] sm:min-h-[300px]">
                  {featuredProject.image && (
                    <img
                      src={featuredProject.image}
                      alt={featuredProject.title}
                      width="800"
                      height="500"
                      loading="lazy"
                      className="h-full w-full object-cover object-[center_20%] transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-transparent opacity-60 pointer-events-none" />

                  {/* Badges on image */}
                  <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-surface/95 px-3 py-1 font-mono text-[11px] font-medium text-accent shadow-xs backdrop-blur-sm">
                      <Sparkles size={12} className="text-accent" />
                      Featured Project
                    </span>
                    {featuredProject.website && (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-up/30 bg-surface/95 px-2.5 py-1 font-mono text-[11px] font-medium text-up shadow-xs backdrop-blur-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-up animate-pulse" aria-hidden="true" />
                        Live Production
                      </span>
                    )}
                  </div>
                </div>

                {/* Content Details (7 cols) */}
                <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-7">
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-xs font-medium uppercase tracking-wider text-accent">
                        Flagship · {featuredProject.year}
                      </span>
                    </div>

                    <h3 className="mt-2 font-display text-2xl font-semibold text-ink transition-colors sm:text-3xl group-hover:text-accent">
                      {featuredProject.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-faint sm:text-base">
                      {featuredProject.description}
                    </p>

                    {/* Tech Skills */}
                    <div className="mt-6 flex flex-wrap gap-1.5">
                      {featuredProject.skills?.map((s) => (
                        <span
                          key={s}
                          className="rounded-md border border-mist bg-paper px-2.5 py-1 font-mono text-[11px] text-ink/80 transition-colors group-hover:border-accent/30"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-mist/80 pt-5">
                    {featuredProject.website && (
                      <a
                        href={featuredProject.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2 text-sm font-medium text-white shadow-xs transition-all hover:bg-accent/90 hover:shadow-sm"
                      >
                        <span>Visit Application</span>
                        <ArrowUpRight size={15} />
                      </a>
                    )}
                    {featuredProject.github && (
                      <a
                        href={featuredProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-mist bg-surface px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
                      >
                        <Github size={15} />
                        <span>Source Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          </div>
        )}

        {/* Noteworthy Projects Grid */}
        <div className={`grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ${featuredProject ? 'mt-8' : 'mt-10'}`}>
          {regularProjects.map((p) => (
            <article
              key={p.id}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-mist bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-md"
            >
              {/* Media Thumbnail */}
              <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-mist/70 bg-mist/25">
                {p.image && (
                  <img
                    src={p.image}
                    alt={p.title}
                    width="600"
                    height="375"
                    loading="lazy"
                    className="h-full w-full object-cover object-[center_35%] transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/10 via-transparent to-transparent pointer-events-none" />

                {/* Status Badges */}
                <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
                  {p.underWork ? (
                    <span className="flex items-center gap-1.5 rounded-full border border-down/30 bg-surface/95 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-down shadow-xs backdrop-blur-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-down animate-pulse" aria-hidden="true" />
                      Under work
                    </span>
                  ) : p.website ? (
                    <span className="flex items-center gap-1.5 rounded-full border border-up/30 bg-surface/95 px-2.5 py-0.5 font-mono text-[10px] tracking-wider text-up shadow-xs backdrop-blur-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-up" aria-hidden="true" />
                      Live
                    </span>
                  ) : null}
                </div>

                {/* Year Pill */}
                <span className="absolute right-3 top-3 rounded-full border border-mist/80 bg-surface/95 px-2 py-0.5 font-mono text-[10px] text-faint shadow-xs backdrop-blur-sm">
                  {p.year}
                </span>
              </div>

              {/* Content Card Body */}
              <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink transition-colors sm:text-xl group-hover:text-accent">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-faint">
                    {p.description}
                  </p>
                </div>

                <div>
                  {/* Skill Badges */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {p.skills?.map((s) => (
                      <span
                        key={s}
                        className="rounded-md border border-mist bg-paper/80 px-2 py-0.5 font-mono text-[10px] text-ink/75 transition-colors group-hover:border-accent/25"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* Actions Footer */}
                  <div className="mt-6 flex items-center justify-between border-t border-mist/70 pt-4 text-xs">
                    <div className="flex items-center gap-3.5">
                      {p.website && (
                        <a
                          href={p.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link inline-flex items-center gap-1 font-medium text-accent transition-colors hover:text-accent/80"
                        >
                          <Globe size={13} />
                          <span className="underline decoration-accent/30 underline-offset-4 group-hover/link:decoration-accent">
                            Live Demo
                          </span>
                          <ArrowUpRight
                            size={12}
                            className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                          />
                        </a>
                      )}
                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link inline-flex items-center gap-1 font-medium text-ink/80 transition-colors hover:text-accent"
                        >
                          <Github size={13} />
                          <span className="underline decoration-mist underline-offset-4 group-hover/link:decoration-accent">
                            Source
                          </span>
                          <ArrowUpRight
                            size={12}
                            className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                          />
                        </a>
                      )}
                    </div>

                    <span className="font-mono text-[10px] text-faint/60">
                      0{p.id.replace('proj-', '')}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
