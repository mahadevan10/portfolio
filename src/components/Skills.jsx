import { skillGroups } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="border-t border-mist bg-surface">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">Skills</h2>

        <dl className="mt-10 space-y-8">
          {skillGroups.map((group) => (
            <div key={group.title} className="grid gap-3 sm:grid-cols-[180px_minmax(0,1fr)]">
              <dt className="font-mono text-xs uppercase tracking-widest text-faint">{group.title}</dt>
              <dd className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full border border-mist px-3 py-1 text-sm">
                    {item}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
