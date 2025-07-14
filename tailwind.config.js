/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      fontFamily: {
        futura: ['Futura', '"Trebuchet MS"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
