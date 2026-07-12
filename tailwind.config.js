/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#021A0F',
        'surface': '#063320',
        'secondary-surface': '#0A4A2A',
        'accent-green': '#1F6A3B',
        'gold': '#D4AF37',
        'gold-dark': '#B8860B',
        'gold-highlight': '#F4D03F',
        'text-primary': '#F8F8F8',
        'glass-border': 'rgba(212,175,55,0.15)',
        
        // Aliases to avoid completely breaking unmodified components before migration script runs
        'secondary': '#D4AF37', 
        'accent': '#F8F8F8',
        'supporting': 'rgba(248,248,248,0.7)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01))',
      }
    },
  },
  plugins: [],
}
