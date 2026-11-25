/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#073B5C',
          deep: '#032C47',
          light: '#0a4f7b',
          dark: '#021f33',
        },
        dental: {
          blue: '#1678A5',
          light: '#e1f2f9',
          pale: '#f0f8fc',
        },
        orange: {
          DEFAULT: '#F36B13',
          light: '#FF8A24',
          dark: '#E85B08',
          hover: '#e05800',
        },
        warm: {
          ivory: '#FFF9F2',
          cream: '#F7EBDD',
          beige: '#EEDBC8',
          dark: '#10243E',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '"Inter"', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(7, 59, 92, 0.08), 0 2px 6px -1px rgba(7, 59, 92, 0.04)',
        'premium': '0 12px 32px -4px rgba(7, 59, 92, 0.12), 0 4px 12px -2px rgba(7, 59, 92, 0.06)',
        'glow': '0 0 25px rgba(243, 107, 19, 0.25)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
}
