/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      screens: {
        xs: '480px',
      },
      colors: {
        paper: '#030712',
        surface: '#09101f',
        'surface-elevated': '#0f1a30',
        'surface-subtle': '#15223e',
        ink: '#f8fafc',
        mist: '#1e293b',
        'mist-light': '#334155',
        faint: '#94a3b8',
        gold: '#c5a059',
        'gold-light': '#dfbe7e',
        'gold-dim': '#8b6e36',
        navy: '#0c2340',
        'navy-dark': '#061324',
        accent: '#c5a059',
        'accent-hover': '#dfbe7e',
        'accent-dim': '#8b6e36',
        up: '#10b981',
        down: '#f43f5e',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
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
