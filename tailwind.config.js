/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgPrimary: '#050816',
        bgSecondary: '#0b1020',
        surface: '#101827',
        accentBlue: '#00a8ff',
        electricBlue: '#38bdf8',
        premiumSilver: '#c0c7d1',
        gunmetal: '#6b7280',
        orangeFlame: '#ff6b00',
        goldHighlight: '#fbbf24',
        textMain: '#ffffff',
        textSecondary: '#94a3b8',
      },
      fontFamily: {
        heading: ['"Bebas Neue"', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-glow': 'radial-gradient(circle at center, rgba(56,189,248,0.15) 0%, transparent 70%)',
      },
      boxShadow: {
        'glow-blue': '0 0 30px rgba(0, 168, 255, 0.3)',
        'glow-orange': '0 0 30px rgba(255, 107, 0, 0.3)',
      }
    },
  },
  plugins: [],
}
