/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{jsx, js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        lexenda: ['"Lexend"', ...defaultTheme.fontFamily.sans],
        Oswald: ['"Oswald"', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}
