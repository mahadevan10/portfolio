// Resolves a file in public/ against Vite's base path ('/portfolio/').
// Paths must NOT start with a slash — BASE_URL already ends with one.
export const asset = (path) => import.meta.env.BASE_URL + path

export const profile = {
  name: 'Mahadevan Biju Menon',
  shortName: 'Mahadevan',
  role: 'AI / Backend Engineer',
  tagline: 'I build multi-agent LLM systems for trading.',
  intro:
    'AI/Backend engineer at Winbold. I work on LangGraph agents, FastAPI services, and the engineering that keeps language models honest when there is money on the line.',
  photo: asset('images/dp.jpeg'),
  resume: asset('resume.pdf'),
  email: 'mahadevanmn10@gmail.com',
  phone: '+91 8848570115',
  phoneHref: 'tel:+918848570115',
  github: 'https://github.com/mahadevan10',
  linkedin: 'https://linkedin.com/in/mahadevanmn10',
}

export const about = {
  paragraphs: [
    'I am an agentic AI engineer working in FinTech. Most of my time goes into multi-agent systems: getting language models to do useful research, then wrapping them in enough typed structure, timeouts, and cost controls that the output can be trusted by something downstream that actually places trades.',
    'I am drawn to markets — equities, options, and the mechanics underneath them — and I think AI-powered financial products are barely getting started. The interesting work is rarely the model call; it is everything built around it.',
  ],
  education: {
    degree: 'B.Tech, Computer Science',
    university: 'APJ Abdul Kalam Technological University',
    college: 'Vidya Academy of Science & Technology',
    years: '2019 – 2023',
  },
}
