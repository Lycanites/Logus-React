/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Marykate: ["Marykate", "sans-serif"], // Asegúrate de que el nombre coincida
        CreamBeige: ["CreamBeige", "sans-serif"],
      },
    },
  },
  plugins: [],
};
