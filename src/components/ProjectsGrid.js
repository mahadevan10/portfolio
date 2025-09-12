import React from "react";

// ProjectsGrid.jsx
// Default-exported React component. Tailwind-first styling; uses inline CSS vars for the palette so
// you can keep the same color scheme without editing tailwind.config.js.

export default function ProjectsGrid({ projects = [] }) {
  return (
    <div className="py-8 px-4 md:px-8 lg:px-12" style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      {/* CSS variables for palette (edit hexes to match your palette exactly) */}
      <style>{`
        :root{
          --primary: #cad2c5; /* light */
          --primary-400: #a0af97;
          --primary-600: #778a6a;
          --accent: #4f5c47; /* darker */
          --muted: #282e23; /* darkest */
          --bg: #f6f7f5;
          --card: #ffffff;
          --text: #0f1721;
          --pill-bg: rgba(79,92,71,0.08);
          --pill-border: rgba(79,92,71,0.12);
        }
      `}</style>

      <div id="projects" className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl font-semibold">Projects</h2>
          <p className="text-xs sm:text-sm text-gray-600 text-center sm:text-left px-2 sm:px-0">
            A selection of my work — click the GitHub button to view source.
          </p>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <article
              key={p.id || idx}
              className="relative rounded-2xl shadow-md overflow-hidden border" 
              style={{ backgroundColor: 'var(--card)', borderColor: 'rgba(0,0,0,0.04)' }}
            >
              {/* Under Work Pill */}
              {p.underWork && (
                <span
                  className="absolute top-3 right-3 z-10 px-3 py-1 text-xs font-bold rounded-full"
                  style={{
                    background: 'linear-gradient(90deg, #fbbf24 60%, #f59e42 100%)',
                    color: '#fff',
                    boxShadow: '0 2px 8px rgba(251,191,36,0.15)',
                    letterSpacing: '0.05em'
                  }}
                >
                  Under Work
                </span>
              )}
              <div className="h-44 sm:h-52 w-full bg-gray-100">
                {/* image */}
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.title}
                    className="object-cover object-[center_65%] w-full h-full"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-400">No image</div>
                )}
              </div>

              <div className="p-4 sm:p-5">
                <h3 className="text-lg font-medium mb-1">{p.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{p.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {p.skills?.map((s, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium px-3 py-1 rounded-full border"
                      style={{ backgroundColor: 'var(--pill-bg)', borderColor: 'var(--pill-border)', color: 'var(--muted)' }}
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-500">{p.year || ''}</div>

                  <a
                    href={p.github || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold rounded-full px-3 py-2 shadow-sm"
                    style={{
                      backgroundColor: 'var(--primary-600)',
                      color: 'white',
                      boxShadow: '0 6px 14px rgba(34,41,20,0.06)'
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 10.5 18.1V22" />
                    </svg>
                    View on GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty state */}
        {projects.length === 0 && (
          <div className="mt-8 rounded-lg p-6 text-center border-dashed border-2 text-gray-500">
            No projects yet — add some by passing a <code className="px-1 py-0.5 bg-gray-100 rounded">projects</code> array to the component.
          </div>
        )}
      </div>


    </div>
  );
}
