import { Github, Linkedin, Mail, Phone } from 'lucide-react'
import { profile } from '../data/profile'

const channels = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: Linkedin, label: 'LinkedIn', value: 'in/mahadevanmn10', href: profile.linkedin, external: true },
  { icon: Github, label: 'GitHub', value: 'mahadevan10', href: profile.github, external: true },
  { icon: Phone, label: 'Phone', value: profile.phone, href: profile.phoneHref },
]

export default function Contact() {
  return (
    <section id="contact" className="border-t border-mist">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">Get in touch</h2>
        <p className="mt-3 max-w-prose text-faint">
          Open to conversations about agentic AI, trading systems, or interesting engineering problems.
        </p>

        <ul className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-mist bg-mist sm:grid-cols-2">
          {channels.map(({ icon: Icon, label, value, href, external }) => (
            <li key={label}>
              <a
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="flex items-center gap-4 bg-surface p-5 transition-colors hover:bg-paper"
              >
                <Icon size={20} className="shrink-0 text-faint" aria-hidden="true" />
                <span className="min-w-0">
                  <span className="block font-mono text-xs uppercase tracking-widest text-faint">
                    {label}
                  </span>
                  <span className="block truncate text-sm">{value}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>

        <footer className="mt-16 border-t border-mist pt-6 text-xs text-faint">
          © {new Date().getFullYear()} {profile.name}. Built with React, Vite and Tailwind CSS.
        </footer>
      </div>
    </section>
  )
}
