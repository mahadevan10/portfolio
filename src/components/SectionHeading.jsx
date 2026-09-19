export default function SectionHeading({ children, id, tag = 'MODULE' }) {
  return (
    <div>
      <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-accent">
        <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_#06b6d4] animate-pulse" aria-hidden="true" />
        <span>{tag}</span>
      </div>
      <h2 id={id} className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {children}
      </h2>
    </div>
  )
}
