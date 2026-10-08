/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        parivara: {
          50: '#f2f9f3',
          100: '#e1f2e4',
          200: '#c4e5ca',
          300: '#97d1a2',
          400: '#63b473',
          500: '#3f9751',
          600: '#2d7a3d', // Primary Deep Leaf Green
          700: '#256133', // Deep Natural Forest Green
          800: '#204e2b',
          900: '#1a4125', // Dark Evergreen
          950: '#0c2413',
        },
        earth: {
          50: '#faf6f0',
          100: '#f3eade',
          200: '#e5d3be',
          300: '#d4b798',
          400: '#c19672',
          500: '#b17c54', // Natural Soil Brown
          600: '#a26747',
          700: '#87513b',
          800: '#6f4334',
          900: '#5a382c',
        },
        amberGold: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(26, 65, 37, 0.08)',
        'card': '0 2px 10px rgba(0, 0, 0, 0.04), 0 10px 25px -5px rgba(45, 122, 61, 0.06)',
        'elevated': '0 20px 40px -15px rgba(26, 65, 37, 0.15)',
      }
    },
  },
  plugins: [],
}
