export const winbold = {
  company: 'Winbold',
  role: 'AI / Backend Engineer',
  period: 'Dec 2025 – Present',
  title: 'AI Trading Strategy Platform',
  subtitle:
    'Multi-agent LLM system that turns market events into executable, risk-gated trading campaigns.',
  intro:
    'Over my time here I built and now operate the core of an AI trading platform: a multi-agent system where a leader agent orchestrates a fleet of parallel research agents — each specializing in fundamentals, technicals, news, or event analysis — and synthesizes their findings into structured trading campaigns a downstream execution engine can run.',
  lead: 'The interesting problems were never "call an LLM." They were everything around it:',
  problems: [
    {
      heading: 'Determinism where it matters',
      body: 'Leader agents propose; sub agents create versioned typed contracts. Every generated strategy is forced through schema-validated subagent nodes and a versioned JSON contract with the execution engine, pinned by contract tests — so a creative model can never emit an unexecutable trade plan, but it\'s creativity is never blocked using a pydantic schema.',
    },
    {
      heading: 'Reliability on an event loop',
      body: 'Streaming responses, detached persistence that survives client disconnects, and a strict hierarchy of nested timeouts — designed from real production incidents, not textbook patterns.',
    },
    {
      heading: 'LLM economics as an engineering discipline',
      body: 'Per-tier model routing through a LiteLLM proxy, prompt-cache-aware session affinity, per-request cost attribution down to the individual strategy.',
    },
    {
      heading: 'The whole stack',
      body: 'FastAPI services, PostgreSQL, a React/TypeScript dashboard with live SSE streams and interactive strategy DAGs, deployed on k3 pods behind outbound-only Cloudflare Zero Trust tunnels.',
    },
  ],
  stack: [
    'Python',
    'LangGraph',
    'FastAPI',
    'PostgreSQL',
    'React',
    'TypeScript',
    'LiteLLM',
    'Opik',
    'Cloudflare Tunnels',
    'Redis'
  ],
  stats: [
    { value: '1050+', label: 'commits' },
    { value: '160+', label: 'pull requests' },
    { value: '2', label: 'Multi-agent systems' },
    { value: '5', label: 'production services' },
  ],
}

export const codecraft = {
  company: 'CodeCraft Ventures',
  role: 'Co-Founder',
  period: 'Jan 2024 – Mar 2025',
  paragraphs: [
    'Before Winbold, I co-founded a three-person software studio delivering machine learning and web projects to clients. It taught me the unglamorous, essential parts of shipping: scoping work with non-technical clients, communicating under deadline pressure, and delivering when requirements move mid-project.',
    'It was also where I experimented across a wide range of stacks — web, backend, data, ML — and worked out what I actually wanted to build. The answer turned out to be AI agents doing real work in the real world, which is what I have been doing since.',
  ],
  stack: ['Python', 'Machine Learning', 'React', 'Node.js', 'Firebase'],
}

export const experience = [winbold, codecraft]
