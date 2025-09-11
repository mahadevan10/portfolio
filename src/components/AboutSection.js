import React from 'react';

/**
 * AboutSection.jsx
 * Updated version: fixes vertical timeline line visibility and ensures mobile dots align correctly.
 */

const timeline = [
  {
    title: "B.Tech — Computer Science",
    subtitle: "Vidya Academy of Science & Technology",
    description:
      "Completed B.Tech in Computer Science. Built a foundation in algorithms, systems and software development.",
  },
  {
    title: "Sign Language Recognition (LSTM)",
    subtitle: "Personal / Academic Project",
    description:
      "Developed an LSTM-based model to recognise sign language gestures — end-to-end data pipeline, training and evaluation.",
  },
  {
    title: "Equity Trading & Quant Experimentation",
    subtitle: "Independent / Freelance",
    description:
      "Experience in equity trading, backtesting simple strategies and building data-driven decision tools using Python and SQL.",
  },
  {
    title: "Skills & Tooling",
    subtitle: "Python • SQL • Excel • ML • LLMs",
    description:
      "Working knowledge of Python, SQL, Excel; comfortable with ML workflows, data cleaning, model training and deployment.",
  },
  {
    title: "Building Products",
    subtitle: "Portfolio & Side Projects",
    description:
      "Designing portfolio projects (web apps, ML demos) to showcase practical skills — focused on clarity, reproducibility and deployment.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-16 px-6 md:px-12 lg:px-24 bg-[var(--ash-500)]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-12 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--ash-100)] leading-tight">
              About
            </h2>
            <p className="mt-3 text-[var(--ash-100)]/90 max-w-xl">
              Hey — I'm Mahadevan. I build clean, well-documented ML and web projects that solve
              practical problems. I enjoy turning data into insights and ideas into reproducible
              code.
            </p>
          </div>
          <div className="text-right">
            <a
              href="#projects"
              className="inline-block px-4 py-2 rounded-2xl bg-[var(--ash-200)] text-[var(--ash-100)] font-semibold shadow-md hover:scale-[1.02] transition-transform"
            >
              View Projects
            </a>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line visible on all screens */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-[var(--ash-300)]/70" />

          {/*
            Note: Use larger left padding on the list so the absolute dots don't overlap text on small screens.
            li is not forced into flex on mobile — this prevents the dot from sitting above the content.
          */}
          <ol className="space-y-10 pl-14 md:pl-16">
            {timeline.map((item, idx) => (
              <li key={idx} className="relative md:flex md:items-start">
                {/* Dot: position vertically aligned with the first line using top-2 on mobile and top-1 on md+ */}
                <div className="absolute -left-[0.9rem] md:-left-[0.25rem] top-2 md:top-1">
                  <div className="w-4 h-4 rounded-full ring-4 ring-[var(--ash-500)] bg-[var(--ash-100)] shadow" />
                </div>

                <div className="ml-6">
                  <h3 className="text-lg font-semibold text-[var(--ash-100)]">{item.title}</h3>
                  <p className="text-sm text-[var(--ash-100)]/80 font-medium mt-1">{item.subtitle}</p>
                  <p className="mt-3 text-[var(--ash-100)]/85 max-w-2xl">{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Skills / chips styled as pills (circle option below) */}
        <div className="mt-12 flex flex-wrap gap-3">
          {['Python', 'SQL', 'Machine Learning', 'LSTM', 'Data Engineering', 'React', 'Excel'].map(
            (skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full bg-[var(--ash-300)]/30 text-[var(--ash-100)] text-sm font-medium border border-[var(--ash-300)]/50 shadow-sm"
              >
                {skill}
              </span>
            )
          )}
        </div>
      </div>

      {/* Inline style for palette */}
      <style jsx>{`
        :root {
          --ash-100: #282e23;
          --ash-200: #4f5c47;
          --ash-300: #778a6a;
          --ash-400: #a0af97;
          --ash-500: #cad2c5;
        }
        section {
          background: linear-gradient(180deg, var(--ash-500), #e6ece3);
        }
      `}</style>
    </section>
  );
}
