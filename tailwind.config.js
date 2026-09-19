/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      screens: {
        xs: '480px',
      },
      colors: {
        paper: '#07090e',
        surface: '#0d121c',
        'surface-elevated': '#121824',
        ink: '#f1f5f9',
        mist: '#1e293b',
        'mist-light': '#334155',
        faint: '#94a3b8',
        accent: '#06b6d4',
        'accent-hover': '#22d3ee',
        'accent-dim': '#083344',
        up: '#10b981',
        down: '#f43f5e',
        violet: '#8b5cf6',
      },
      fontFamily: {
        display: ['"Space Grotesk"', '"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        sans: ['"IBM Plex Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: {
        prose: '68ch',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-flow': 'glow 8s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { opacity: '0.4' },
          '100%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
}
