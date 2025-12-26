/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          black: 'var(--cyber-black)',
          dark: 'var(--cyber-dark)',
          green: 'var(--cyber-green)',
          greenDim: 'var(--cyber-green-dim)',
          blue: 'var(--cyber-blue)',
          gray: 'var(--cyber-gray)',
          red: 'var(--cyber-red)',
          yellow: 'var(--cyber-yellow)',
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Courier Prime', 'monospace'],
      },
      animation: {
        'cursor-blink': 'blink 1s step-end infinite',
        'scanline': 'scanline 8s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'flicker': 'flicker 0.15s infinite',
        'matrix-fall': 'matrix-fall 20s linear infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        glow: {
          '0%': { textShadow: '0 0 5px #00ff41, 0 0 10px #00ff41' },
          '100%': { textShadow: '0 0 10px #00ff41, 0 0 20px #00ff41, 0 0 30px #00ff41' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        'matrix-fall': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
      boxShadow: {
        'cyber-glow': '0 0 10px #00ff41, 0 0 20px #00ff41',
        'cyber-blue-glow': '0 0 10px #00f3ff, 0 0 20px #00f3ff',
      },
    },
  },
  plugins: [],
}
