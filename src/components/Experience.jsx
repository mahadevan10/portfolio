import React from 'react';
import { winbold } from '../../data/experience';

function FactsRail() {
  return (
    <aside className="order-first self-start lg:order-none">
      {/* Mobile: compact stat band. Desktop: sticky vertical rail. */}
      <div className="lg:sticky lg:top-24 lg:border-l lg:border-mist lg:pl-6">
        <div className="hidden lg:block">
          <dl className="space-y-4 text-sm">
            <div>
              <dt className="font-mono text-xs uppercase tracking-widest text-accent">Role</dt>
              <dd className="mt-1">{winbold.role}</dd>
            </div>
            {/* Add new section for CodeCraft Ventures */}
            <div>
              <dt className="font-mono text-xs uppercase tracking-widest text-accent">CodeCraft Ventures</dt>
              <dd className="mt-1">
                <a href="https://siyadmohammed.github.io/codecraftventures/" target="_blank" rel="noopener noreferrer">
                  <span className="text-accent">CodeCraft Ventures</span> <span className="slanted-arrow">→</span>
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </aside>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="border-t border-mist bg-surface">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <SectionHeading>Experience</SectionHeading>

        {/* Winbold */}
        <article className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_260px]">
          <div className="min-w-0">
            <p className="font-mono text-xs uppercase tracking-widest text-accent">{winbold.company}</p>
            <h3 className="mt-2 font-display text-2xl font-semibold leading-[1.1] sm:text-3xl">
              {winbold.title}
            </h3>
            <p className="mt-2 text-lg font-medium text-faint">
              {winbold.date}
            </p>
            <p className="mt-4 text-base font-medium text-faint">
              {winbold.description}
            </p>
          </div>
          <div className="hidden lg:block">
            <FactsRail />
          </div>
        </article>
      </div>
    </section>
  );
}
