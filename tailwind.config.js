/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'Consolas', 'monospace'],
      },
      colors: {
        green: {
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
        },
        dark: {
          950: '#0a0a0f',
          900: '#0f0f1a',
          800: '#13131f',
          700: '#1a1a2e',
          600: '#1e1e35',
          500: '#252540',
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out both',
        'blink': 'blink 1s step-end infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeInUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
        glow: {
          '0%':   { boxShadow: '0 0 5px #22c55e33' },
          '100%': { boxShadow: '0 0 20px #22c55e66, 0 0 40px #22c55e22' },
        },
      },
      backgroundImage: {
        'grid-pattern': `linear-gradient(rgba(34,197,94,0.03) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(34,197,94,0.03) 1px, transparent 1px)`,
      },
      backgroundSize: {
        'grid': '40px 40px',
      },
    },
  },
  plugins: [],
}
