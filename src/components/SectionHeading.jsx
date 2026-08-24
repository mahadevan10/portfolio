// Section headings carry a short accent rule so each section start reads at a glance
// while scanning, without adding another line of text.
export default function SectionHeading({ children, id }) {
  return (
    <div>
      <div className="h-0.5 w-10 rounded-full bg-accent" aria-hidden="true" />
      <h2 id={id} className="mt-4 font-display text-3xl font-semibold sm:text-4xl">
        {children}
      </h2>
    </div>
  )
}
