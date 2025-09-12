// Navbar.js
import React, { useState, useEffect } from "react";

const MenuIcon = ({ className = "w-7 h-7" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const XIcon = ({ className = "w-7 h-7" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);

export default function Navbar({ resumeHref = process.env.PUBLIC_URL + "/resume.pdf", dp = "" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // change threshold if you want (e.g., 30, 80)
      setScrolled(window.scrollY > 50);
    };

    // check immediately in case page isn't at top on load
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Common classes that change based on scroll
  const navBase = "fixed w-full z-50 top-0 left-0 transition-colors duration-300 ease-in-out";
  const navScrolled = "bg-ash_gray-500/95 border-b border-ash_gray-400 shadow-md";
  const navTop = "bg-ash_gray-500/30 backdrop-blur-sm border-transparent";

  const logoText = scrolled ? "text-dark_slate_gray-500" : "text-white";
  const linkBase = "font-medium transition-colors duration-200";
  const linkTop = "text-white hover:text-cambridge_blue-200";
  const linkScrolled = "text-dark_slate_gray-500 hover:text-cambridge_blue-500";

  // Resume button variations
  const resumeScrolled = "hidden md:inline-flex items-center gap-2 bg-dark_slate_gray-500 text-ash_gray-900 px-4 py-2 rounded-xl shadow hover:bg-hookers_green-500 hover:text-white transition";
  const resumeTop = "hidden md:inline-flex items-center gap-2 border border-white/30 text-white px-4 py-2 rounded-xl hover:bg-white/5 transition";

  return (
    <nav className={`${navBase} ${scrolled ? navScrolled : navTop}`}>
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cambridge_blue-500 to-hookers_green-500 flex items-center justify-center text-white font-semibold overflow-hidden">
            {dp ? (
              <img src={dp} alt="Profile" className="w-10 h-10 rounded-full object-cover" />
            ) : (
              <span className="text-sm">MB</span>
            )}
          </div>
          <span className={`text-lg font-bold ${logoText}`}>Mahadevan</span>
        </a>

        {/* Links */}
        <ul className="hidden md:flex items-center space-x-8 font-medium">
          <li><a href="#about" className={`${linkBase} ${scrolled ? linkScrolled : linkTop}`}>About</a></li>
          <li><a href="#projects" className={`${linkBase} ${scrolled ? linkScrolled : linkTop}`}>Projects</a></li>
          <li><a href="#skills" className={`${linkBase} ${scrolled ? linkScrolled : linkTop}`}>Skills</a></li>
          <li><a href="#contact" className={`${linkBase} ${scrolled ? linkScrolled : linkTop}`}>Contact</a></li>
        </ul>

        {/* Resume Button */}
        <a
          href={resumeHref}
          download
          className={scrolled ? resumeScrolled : resumeTop}
        >
          Download Resume
        </a>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          className={`md:hidden p-2 rounded-md ${scrolled ? "text-dark_slate_gray-500 hover:bg-ash_gray-600" : "text-white hover:bg-white/10"}`}
        >
          {isOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={`md:hidden ${scrolled ? "bg-ash_gray-500/95" : "bg-ash_gray-500/95"} shadow-md transition-all duration-200`}>
          <ul className="flex flex-col space-y-4 px-6 py-4 font-medium">
            <li><a href="#about" className={`${linkBase} ${scrolled ? linkScrolled : linkTop}`} onClick={() => setIsOpen(false)}>About</a></li>
            <li><a href="#projects" className={`${linkBase} ${scrolled ? linkScrolled : linkTop}`} onClick={() => setIsOpen(false)}>Projects</a></li>
            <li><a href="#skills" className={`${linkBase} ${scrolled ? linkScrolled : linkTop}`} onClick={() => setIsOpen(false)}>Skills</a></li>
            <li><a href="#contact" className={`${linkBase} ${scrolled ? linkScrolled : linkTop}`} onClick={() => setIsOpen(false)}>Contact</a></li>

            <a
              href={resumeHref}
              download
              className="bg-dark_slate_gray-500 text-ash_gray-900 px-4 py-2 rounded-xl text-center shadow hover:bg-hookers_green-500 hover:text-white transition"
              onClick={() => setIsOpen(false)}
            >
              Download Resume
            </a>
          </ul>
        </div>
      )}
    </nav>
  );
}
