/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    container: { center: true, screens: { '2xl': 'auto' } },
    extend: { colors: { dark: '#0d0d0d' } }
  },
  plugins: []
};
