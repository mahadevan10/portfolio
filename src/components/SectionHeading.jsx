export default function SectionHeading({ children, id, tag = 'PORTFOLIO DISCLOSURE' }) {
  return (
    <div>
      <div className="flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-widest text-gold">
        <span className="h-px w-5 bg-gold/60" aria-hidden="true" />
        <span>{tag}</span>
      </div>
      <h2 id={id} className="mt-3 font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {children}
      </h2>
    </div>
  )
}
