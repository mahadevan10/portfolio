# Portfolio

Personal site of Mahadevan Biju Menon — https://mahadevan10.github.io/portfolio/

Built with React + Vite + Tailwind CSS.

## Develop

```bash
npm install
npm run dev      # http://localhost:5173/portfolio/
```

## Build & deploy

```bash
npm run build    # outputs to dist/
npm run preview  # verify the built site at the /portfolio/ base path
npm run deploy   # publishes dist/ to the gh-pages branch
```

## Content

All site content lives in `src/data/` — edit those files rather than the components:

| File | Holds |
| --- | --- |
| `profile.js` | Name, tagline, links, résumé path, about copy, education |
| `experience.js` | Winbold and CodeCraft Ventures entries |
| `projects.js` | Project cards |
| `skills.js` | Skill groups |

The résumé PDF is `public/resume.pdf`.
