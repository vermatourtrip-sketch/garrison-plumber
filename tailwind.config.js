/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4f8',
          100: '#dae5f0',
          200: '#b6cce0',
          300: '#88a8c9',
          400: '#5a7fae',
          500: '#3a5d8e',
          600: '#2c4a73',
          700: '#233c5e',
          800: '#1d3149',
          900: '#152437',
          950: '#0d1726',
        },
        accent: {
          50: '#eff8ff',
          100: '#dbeefe',
          200: '#bfe1fe',
          300: '#92cefd',
          400: '#5fb1fa',
          500: '#3a92f4',
          600: '#2374e8',
          700: '#1c5ed0',
          800: '#1d4da8',
          900: '#1e4386',
          950: '#172b54',
        },
        charcoal: {
          50: '#f7f7f7',
          100: '#e9e9ea',
          200: '#d3d4d5',
          300: '#b1b3b6',
          400: '#878a8e',
          500: '#6c6f74',
          600: '#565a5f',
          700: '#46494d',
          800: '#3a3d40',
          900: '#2a2c2e',
          950: '#1a1b1d',
        },
        success: {
          50: '#f0fdf4',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
        },
        warning: {
          50: '#fffbeb',
          500: '#f59e0b',
          600: '#d97706',
        },
        error: {
          50: '#fef2f2',
          500: '#ef4444',
          600: '#dc2626',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      borderRadius: {
        'xl2': '1.25rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'soft': '0 1px 2px rgba(15, 36, 55, 0.04), 0 8px 24px rgba(15, 36, 55, 0.06)',
        'card': '0 1px 3px rgba(15, 36, 55, 0.08), 0 12px 32px rgba(15, 36, 55, 0.08)',
        'nav': '0 1px 2px rgba(15, 36, 55, 0.06), 0 6px 18px rgba(15, 36, 55, 0.08)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-down': {
          '0%': { opacity: '0', transform: 'translateY(-8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.5s ease-out both',
        'fade-in': 'fade-in 0.4s ease-out both',
        'slide-down': 'slide-down 0.25s ease-out both',
        'scale-in': 'scale-in 0.2s ease-out both',
      },
    },
  },
  plugins: [],
};
