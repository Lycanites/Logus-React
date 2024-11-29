/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Marykate: ["Marykate", "sans-serif"], // Asegúrate de que el nombre coincida
        CreamBeige: ["CreamBeige", "sans-serif"],
      },
      colors: {
        verde: "#8aa43a",
        verdeborder: "#7b8d43",
        verdehover: "#a5b86a",
        verdetext: "#579e00",
        morado: "#2a1059",
        rosa: "#c25c8d",
        rosaborder: "#af4f7d",
        rosahover: "#e692bb",
        azul: "#588ec6",
        azulborder: "#537aa2",
        azulhover: "#85a8cd",
        gris: "#181818",
        grismenu: "#d1cccc",
        amarillo: "#d1c050",
        amarillohover: "#dbcc6b",
        amarilloborder: "#bdae48",
      },
      backgroundImage: {
        Logicabtn: "url(../assets/img/MiniLogica.jpg)",
        Lectura: "url ('/src/assets/img/MiniLectura.jpg')",
      },
    },
  },
  plugins: [],
};
