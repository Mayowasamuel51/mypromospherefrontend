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
        purple2: '#D60DE8',
        offwhite: '#F6EFEF',
        darkpink: '#FE34E6',
        blue: '#407BFF',
        red: '#E3111E',
        lightGrayishBlue: '#F4F5F4'
      },
      backgroundImage: {
        barber: "url('/src/assests/images/barber.png')"
      }
    },
  },
  plugins: [],
}

