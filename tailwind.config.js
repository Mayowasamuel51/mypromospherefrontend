/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: '#3D217A',
        pink: '#EC6A87',
        purple2: '#D60DE8'
      }
    },
  },
  plugins: [],
}

