import { useState, useEffect } from 'react'
import { profile } from '../data/profile'
import { FileDown, Menu, X, Terminal, Radio } from 'lucide-react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false)
    }
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize, { passive: true })
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const close = () => setIsOpen(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-3 sm:py-4 transition-all duration-300">
      <nav
        className={`w-full max-w-5xl rounded-2xl border transition-all duration-300 ${
          scrolled
            ? 'border-white/15 bg-surface/85 shadow-[0_12px_40px_rgba(0,0,0,0.6)] backdrop-blur-xl'
            : 'border-white/10 bg-surface/60 backdrop-blur-lg'
        }`}
      >
        <div className="flex items-center justify-between px-4 py-2.5 sm:px-6">
          {/* Identity & Status Beacon */}
          <a href="#top" className="flex items-center gap-3 group" onClick={close}>
            <div className="relative">
              <img
                src={profile.photo}
                alt=""
                width="36"
                height="36"
                className="h-9 w-9 rounded-full object-cover ring-1 ring-cyan-500/40 transition-transform group-hover:scale-105"
              />
              <span className="absolute -bottom-0.5 -right-0.5 flex h-3 w-3 items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display text-sm font-bold tracking-tight text-white group-hover:text-accent transition-colors sm:text-base">
                  {profile.shortName}
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden items-center gap-8 md:flex">
            <ul className="flex items-center gap-6 font-mono text-xs tracking-wide">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-faint transition-all hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="h-4 w-px bg-white/10" aria-hidden="true" />

            {/* Resume Button */}
            <a
              href={profile.resume}
              download
              className="flex items-center gap-2 rounded-full border border-cyan-500/40 bg-cyan-950/30 px-4 py-1.5 font-mono text-xs font-medium text-cyan-300 shadow-[0_0_15px_-3px_rgba(6,182,212,0.25)] transition-all hover:border-cyan-400 hover:bg-cyan-500 hover:text-black hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]"
            >
              <FileDown size={13} />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-faint hover:bg-white/5 hover:text-white md:hidden"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile Dropdown Panel */}
        {isOpen && (
          <div className="border-t border-white/10 px-5 py-4 sm:px-6 sm:py-5 md:hidden">
            <ul className="flex flex-col gap-3 font-mono text-sm">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={close}
                    className="block py-1 text-faint transition-colors hover:text-cyan-300 active:text-cyan-300"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={profile.resume}
                  download
                  onClick={close}
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-cyan-500/40 bg-cyan-950/40 py-2.5 font-mono text-xs font-medium text-cyan-300 transition-colors hover:bg-cyan-500 hover:text-black"
                >
                  <FileDown size={14} />
                  <span>Download Resume</span>
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}
