import { useState, useMemo } from 'react'
import { ArrowUpRight, Github, Globe, Sparkles, Terminal, Layers } from 'lucide-react'
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
    { id: 'all', label: 'All Systems', count: counts.all },
    { id: 'ai', label: 'AI & Machine Learning', count: counts.ai },
    { id: 'web', label: 'Full Stack & Web', count: counts.web },
  ]

  return (
    <section id="projects" className="relative border-t border-white/10 bg-paper/95 py-24">
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-1/3 -z-10 h-[500px] w-[500px] rounded-full bg-violet-500/5 blur-[120px]"
      />

      <div className="mx-auto max-w-5xl px-6">
        {/* Section Header with Category Filter */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionHeading id="projects-heading" tag="MISSION_LOG_02">
              Featured Projects
            </SectionHeading>
            <p className="mt-2 text-sm text-slate-400">
              Things I built to learn, and a few that stuck.
            </p>
          </div>

          {/* Interactive Filter Pills */}
          <div
            role="tablist"
            aria-label="Filter projects by category"
            className="flex flex-wrap items-center gap-1.5 rounded-2xl border border-white/10 bg-surface/80 p-1.5 backdrop-blur-xl shadow-lg"
          >
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.id
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`flex items-center gap-2 rounded-xl px-3.5 py-1.5 font-mono text-xs transition-all duration-200 ${
                    isActive
                      ? 'bg-cyan-500 text-black font-semibold shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                      : 'text-slate-400 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`rounded-full px-1.5 py-0.5 text-[10px] leading-none ${
                      isActive ? 'bg-black/20 text-black font-bold' : 'bg-white/10 text-slate-400'
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
          <div className="mt-12">
            <article className="group relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-surface/70 shadow-[0_0_40px_rgba(6,182,212,0.06)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_50px_rgba(6,182,212,0.15)]">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Media Preview (5 cols) */}
                <div className="relative border-b border-white/10 bg-slate-900/50 lg:col-span-5 lg:border-b-0 lg:border-r overflow-hidden min-h-[280px] sm:min-h-[320px]">
                  {featuredProject.image && (
                    <img
                      src={featuredProject.image}
                      alt={featuredProject.title}
                      width="800"
                      height="500"
                      loading="lazy"
                      className="h-full w-full object-cover object-[center_20%] transition-transform duration-700 ease-out group-hover:scale-105 filter contrast-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-80 pointer-events-none" />

                  {/* Badges on image */}
                  <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/40 bg-surface/90 px-3 py-1 font-mono text-[11px] font-medium text-cyan-300 backdrop-blur-md shadow-lg">
                      <Sparkles size={12} className="text-cyan-400" />
                      Featured Flagship
                    </span>
                    {featuredProject.website && (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-surface/90 px-2.5 py-1 font-mono text-[11px] font-medium text-emerald-400 backdrop-blur-md shadow-lg">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                        Live Production
                      </span>
                    )}
                  </div>
                </div>

                {/* Content Details (7 cols) */}
                <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-7">
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-xs font-semibold uppercase tracking-widest text-cyan-400">
                        PRODUCTION PWA · {featuredProject.year}
                      </span>
                    </div>

                    <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-white transition-colors sm:text-3xl group-hover:text-cyan-300">
                      {featuredProject.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                      {featuredProject.description}
                    </p>

                    {/* Tech Skills */}
                    <div className="mt-6 flex flex-wrap gap-1.5">
                      {featuredProject.skills?.map((s) => (
                        <span
                          key={s}
                          className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[11px] text-slate-200 transition-colors group-hover:border-cyan-500/30"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-white/10 pt-5">
                    {featuredProject.website && (
                      <a
                        href={featuredProject.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-5 py-2.5 font-mono text-xs font-semibold text-black shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all hover:bg-cyan-400 hover:shadow-[0_0_30px_rgba(6,182,212,0.6)]"
                      >
                        <span>Launch Application</span>
                        <ArrowUpRight size={15} />
                      </a>
                    )}
                    {featuredProject.github && (
                      <a
                        href={featuredProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-surface px-5 py-2.5 font-mono text-xs font-medium text-slate-300 transition-colors hover:border-cyan-500/40 hover:text-white"
                      >
                        <Github size={15} />
                        <span>Inspect Source</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          </div>
        )}

        {/* Regular Deployments Grid */}
        <div className={`grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ${featuredProject ? 'mt-8' : 'mt-10'}`}>
          {regularProjects.map((p) => (
            <article
              key={p.id}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-surface/60 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-500/40 hover:shadow-[0_12px_35px_-10px_rgba(6,182,212,0.2)]"
            >
              {/* Media Thumbnail */}
              <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-white/10 bg-slate-900/60">
                {p.image && (
                  <img
                    src={p.image}
                    alt={p.title}
                    width="600"
                    height="375"
                    loading="lazy"
                    className="h-full w-full object-cover object-[center_35%] transition-transform duration-500 ease-out group-hover:scale-105 filter contrast-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-80 pointer-events-none" />

                {/* Status Badges */}
                <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
                  {p.underWork ? (
                    <span className="flex items-center gap-1.5 rounded-full border border-rose-500/40 bg-surface/90 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-rose-400 backdrop-blur-md shadow-xs">
                      <span className="h-1.5 w-1.5 rounded-full bg-rose-400 animate-ping" aria-hidden="true" />
                      Under work
                    </span>
                  ) : p.website ? (
                    <span className="flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-surface/90 px-2.5 py-0.5 font-mono text-[10px] tracking-wider text-emerald-400 backdrop-blur-md shadow-xs">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      Live
                    </span>
                  ) : null}
                </div>

                {/* Year Pill */}
                <span className="absolute right-3 top-3 rounded-full border border-white/10 bg-surface/90 px-2 py-0.5 font-mono text-[10px] text-slate-400 backdrop-blur-md shadow-xs">
                  {p.year}
                </span>
              </div>

              {/* Content Card Body */}
              <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                <div>
                  <h3 className="font-display text-lg font-bold text-white transition-colors sm:text-xl group-hover:text-cyan-300">
                    {p.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-400">
                    {p.description}
                  </p>
                </div>

                <div>
                  {/* Skill Badges */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {p.skills?.map((s) => (
                      <span
                        key={s}
                        className="rounded border border-white/10 bg-paper/80 px-2 py-0.5 font-mono text-[10px] text-slate-300 transition-colors group-hover:border-cyan-500/30 group-hover:text-cyan-200"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* Actions Footer */}
                  <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 font-mono text-xs">
                    <div className="flex items-center gap-3.5">
                      {p.website && (
                        <a
                          href={p.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link inline-flex items-center gap-1 text-cyan-400 transition-colors hover:text-cyan-300"
                        >
                          <Globe size={13} />
                          <span className="underline decoration-cyan-500/40 underline-offset-4 group-hover/link:decoration-cyan-400">
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
                          className="group/link inline-flex items-center gap-1 text-slate-400 transition-colors hover:text-white"
                        >
                          <Github size={13} />
                          <span className="underline decoration-white/20 underline-offset-4 group-hover/link:decoration-white">
                            Source
                          </span>
                          <ArrowUpRight
                            size={12}
                            className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                          />
                        </a>
                      )}
                    </div>

                    <span className="font-mono text-[10px] text-slate-600">
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
