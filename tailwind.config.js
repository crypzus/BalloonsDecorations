/** @type {import('tailwindcss').Config} */
// @ts-ignore
module.exports = {
  content: ["./**/*.html", "./**/*.js"], // Archivos donde se usa Tailwind
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};
