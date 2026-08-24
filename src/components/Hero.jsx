import { profile } from '../data/profile'

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pb-20 pt-36 sm:pt-44">
      <div className="flex flex-col-reverse items-start gap-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-prose">
          <p className="font-mono text-xs uppercase tracking-widest text-faint">{profile.role}</p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            {profile.tagline}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-faint">{profile.intro}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#experience"
              className="rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-opacity hover:opacity-85"
            >
              See my work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-mist px-5 py-2.5 text-sm font-medium transition-colors hover:border-ink"
            >
              Get in touch
            </a>
          </div>
        </div>

        <img
          src={profile.photo}
          alt={profile.name}
          width="112"
          height="112"
          className="h-24 w-24 shrink-0 rounded-full object-cover sm:h-28 sm:w-28"
        />
      </div>
    </section>
  )
}
