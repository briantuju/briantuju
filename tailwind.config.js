/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      colors: {
        brand: { light: '#38bdf8', DEFAULT: '#0369a1', dark: '#0c4a6e' },

        text: { DEFAULT: '#1f2937' },

        dark: { DEFAULT: '#222831' },

        light: { DEFAULT: '#f3f4f6' },
      },
    },
  },
  plugins: [],
}
