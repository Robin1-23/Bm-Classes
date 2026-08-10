/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          primary: '#6366f1',
          dark: '#4f46e5',
          light: '#818cf8',
          deep: '#3730a3',
        },
        amber: {
          gold: '#f59e0b',
          bright: '#fbbf24',
        },
        obsidian: {
          DEFAULT: '#090d16',
          slate: '#0f172a',
          surface: '#1e293b',
        },
      },
      fontFamily: {
        heading: ['Geist', '"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Geist', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Geist', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        logo: ['Syne', '"Space Grotesk"', 'Geist', 'sans-serif'],
      },
      boxShadow: {
        'glow-purple': '0 0 50px rgba(99, 102, 241, 0.25)',
        'glow-gold': '0 0 50px rgba(245, 158, 11, 0.3)',
        'premium': '0 20px 40px -15px rgba(15, 23, 42, 0.08)',
        'card-hover': '0 25px 50px -12px rgba(99, 102, 241, 0.18)',
      }
    },
  },
  plugins: [],
};

