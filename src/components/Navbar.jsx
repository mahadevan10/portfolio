import { useState, useEffect } from 'react'
import { profile } from '../data/profile'

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

const MenuIcon = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
)

const XIcon = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
)

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const close = () => setIsOpen(false)

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full bg-paper/90 backdrop-blur-sm transition-colors duration-300 ${
        scrolled ? 'border-b border-mist' : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-3" onClick={close}>
          <img
            src={profile.photo}
            alt=""
            width="32"
            height="32"
            className="h-8 w-8 rounded-full object-cover"
          />
          <span className="font-display text-base font-bold tracking-tight">{profile.shortName}</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-6 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-faint transition-colors hover:text-ink">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={profile.resume}
            download
            className="rounded-full border border-ink px-4 py-1.5 text-sm font-medium transition-colors hover:bg-ink hover:text-paper"
          >
            Résumé
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle menu"
          className="rounded-md p-1.5 text-ink transition-colors hover:bg-mist md:hidden"
        >
          {isOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-mist bg-paper transition-all duration-300 md:hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 border-transparent opacity-0'
        }`}
        style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
      >
        <ul className="flex flex-col gap-4 px-6 py-5 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-faint transition-colors hover:text-ink" onClick={close}>
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={profile.resume}
              download
              onClick={close}
              className="inline-block rounded-full border border-ink px-4 py-1.5 font-medium"
            >
              Résumé
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
