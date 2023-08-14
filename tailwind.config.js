/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      "primary-beige":"#D5FFE4",
      "primary-orange":"#0AA1DD",
      "primary-red":"#B46060",
      "primary-gray":"#4D4D4D"
    }
  },
  plugins: [],
}