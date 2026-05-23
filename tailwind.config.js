/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#F97316', // orange-500
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#FBBF24', // amber-400
          foreground: '#1e293b',
        },
        navy: {
          DEFAULT: '#0B1E36', // Deep Navy Blue
          light: '#1e3a5f',
        },
        accent: {
          DEFAULT: '#F97316',
          foreground: '#FFFFFF',
        },
        muted: {
          DEFAULT: '#f1f5f9',
          foreground: '#64748b',
        },
        background: '#ffffff',
        foreground: '#0f172a',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'fade-up': 'fadeUp 0.6s ease-out',
        'slide-in-up': 'slideInUp 0.6s ease-in-out',
        'slide-in-down': 'slideInDown 0.6s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
