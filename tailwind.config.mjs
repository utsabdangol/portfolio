/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
        display: ['"Syne"', 'sans-serif'],
      },
      colors: {
        bg: '#0a0a0a',
        surface: '#111111',
        border: '#1f1f1f',
        muted: '#3a3a3a',
        dim: '#6b6b6b',
        text: '#e8e8e8',
        accent: '#e8ff6b',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.4s ease forwards',
        blink: 'blink 1.1s step-end infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
