/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      "primary-beige":"#FFF4E0",
      "primary-orange":"#FFBF9B",
      "primary-red":"#B46060",
      "primary-gray":"#4D4D4D"
    }
  },
  plugins: [],
}