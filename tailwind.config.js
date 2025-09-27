/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'cairo': ['Cairo', 'sans-serif'],
        'tajawal': ['Tajawal', 'sans-serif']
      },
      colors: {
        'main': '#45dc5e',
        'alt-main': '#ea0e5f',
        'main-dark': '#38b849',
        'alt-main-dark': '#c10851',
        'main-light': '#6ee374',
        'alt-main-light': '#f23971'
      }
    },
  },
  plugins: [],
}