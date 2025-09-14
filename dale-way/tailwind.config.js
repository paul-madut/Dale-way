/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3b82f6',
          dark: '#2563eb',
        },
        accent: '#f59e0b',
        'glass-bg': 'rgba(255, 255, 255, 0.1)',
        'glass-border': 'rgba(255, 255, 255, 0.2)',
        'glass-bg-dark': 'rgba(0, 0, 0, 0.1)',
        'glass-border-dark': 'rgba(255, 255, 255, 0.1)',
        'neumorphic-light': '#f0f0f0',
        'neumorphic-light-2': '#cacaca',
        'neumorphic-shadow-1': '#bebebe',
        'neumorphic-shadow-2': '#ffffff',
        'neumorphic-dark': '#2a2a2a',
        'neumorphic-dark-2': '#1e1e1e',
        'neumorphic-dark-shadow-1': '#151515',
        'neumorphic-dark-shadow-2': '#353535',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeIn: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
      },
      backdropBlur: {
        'glass': '20px',
      },
    },
  },
  plugins: [],
}