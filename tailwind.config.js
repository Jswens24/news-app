/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-gray': '#272727',
        'dark-gray-div': '#2E2D30',
        'dark-red': '#B33828',
      },
    },
  },
  plugins: [],
}