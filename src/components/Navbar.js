import React, { useState } from "react";

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

export default function Navbar({ resumeHref = "/resume.pdf" }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-ash_gray-500/90 backdrop-blur-sm border-b border-ash_gray-400 fixed w-full z-50 top-0 left-0">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cambridge_blue-500 to-hookers_green-500 flex items-center justify-center text-white font-semibold">
            MB
          </div>
          <span className="text-lg font-bold text-dark_slate_gray-500">Mahadevan</span>
        </a>

        {/* Links */}
        <ul className="hidden md:flex items-center space-x-8 text-dark_slate_gray-500 font-medium">
          <li><a href="#about" className="hover:text-cambridge_blue-500 transition">About</a></li>
          <li><a href="#projects" className="hover:text-cambridge_blue-500 transition">Projects</a></li>
          <li><a href="#skills" className="hover:text-cambridge_blue-500 transition">Skills</a></li>
          <li><a href="#contact" className="hover:text-cambridge_blue-500 transition">Contact</a></li>
        </ul>

        {/* Resume Button */}
        <a
          href={resumeHref}
          download
          className="hidden md:inline-flex items-center gap-2 bg-dark_slate_gray-500 text-ash_gray-900 px-4 py-2 rounded-xl shadow hover:bg-hookers_green-500 hover:text-white transition"
        >
          Download Resume
        </a>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-md text-dark_slate_gray-500 hover:bg-ash_gray-600"
        >
          {isOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-ash_gray-500/95 shadow-md">
          <ul className="flex flex-col space-y-4 px-6 py-4 text-dark_slate_gray-500 font-medium">
            <li><a href="#about" className="hover:text-cambridge_blue-500 transition">About</a></li>
            <li><a href="#projects" className="hover:text-cambridge_blue-500 transition">Projects</a></li>
            <li><a href="#skills" className="hover:text-cambridge_blue-500 transition">Skills</a></li>
            <li><a href="#contact" className="hover:text-cambridge_blue-500 transition">Contact</a></li>
            <a
              href={resumeHref}
              download
              className="bg-dark_slate_gray-500 text-ash_gray-900 px-4 py-2 rounded-xl text-center shadow hover:bg-hookers_green-500 hover:text-white transition"
            >
              Download Resume
            </a>
          </ul>
        </div>
      )}
    </nav>
  );
}
