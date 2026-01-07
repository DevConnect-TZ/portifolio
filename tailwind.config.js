/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#faf7f4',
          100: '#f5ede6',
          200: '#e8d4c4',
          300: '#d4b59a',
          400: '#b8936f',
          500: '#9d6b4f',
          600: '#8b5a3f',
          700: '#6f4632',
          800: '#5a3828',
          900: '#4a2e20',
        },
        purple: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
        'book-open': 'bookOpen 2s ease-in-out infinite',
        'book-page-left': 'bookPageLeft 2s ease-in-out infinite',
        'book-page-right': 'bookPageRight 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bookOpen: {
          '0%, 100%': { transform: 'scale(1) rotateY(0deg)' },
          '50%': { transform: 'scale(1.1) rotateY(5deg)' },
        },
        bookPageLeft: {
          '0%, 100%': { transform: 'rotate(-15deg) scale(0.9) translateX(0)' },
          '50%': { transform: 'rotate(-30deg) scale(1) translateX(-3px)' },
        },
        bookPageRight: {
          '0%, 100%': { transform: 'rotate(15deg) scale(0.9) translateX(0)' },
          '50%': { transform: 'rotate(30deg) scale(1) translateX(3px)' },
        },
      },
    },
  },
  plugins: [],
}

