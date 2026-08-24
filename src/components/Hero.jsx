import { profile } from '../data/profile'

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pb-20 pt-32 sm:pt-40">
      <div className="flex flex-col-reverse items-start gap-12 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-prose">
          <p className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-widest text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-up" aria-hidden="true" />
            {profile.role}
          </p>
          <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.1] sm:text-6xl">
            {profile.tagline}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-faint">{profile.intro}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#experience"
              className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              See my work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-mist px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
            >
              Get in touch
            </a>
          </div>
        </div>

        <div className="relative shrink-0">
          {/* soft accent ground, offset so the portrait sits slightly proud of it */}
          <div
            className="absolute -bottom-3 -right-3 h-full w-full rounded-full bg-accent/10"
            aria-hidden="true"
          />
          <img
            src={profile.photo}
            alt={profile.name}
            width="224"
            height="224"
            className="relative h-44 w-44 rounded-full object-cover ring-1 ring-mist sm:h-56 sm:w-56"
          />
        </div>
      </div>
    </section>
  )
}
