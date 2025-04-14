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
        rosa: "#FF7DBD",
        rosaborder: "#ff3787",
        rosatxt: "#FFFFFF",
        rosahover: "#ffb3c6",

        verde: "#9bf06f",
        verdeborder: "#5ac923",
        verdehover: "#C2FFA3",
        verdetxt: "#FFFFFF",

        violeta: "#6a499f",
        violetahover: "#917FAC",

        azul: "#5FC1FE",
        azulborder: "#3485FF",
        azulhover: "#a6e1fa",

        naranja: "#d47534",
        naranjaborder: "#AF602A",
        naranjahover: "#E49762",

        azularea: "#5FC1FE",
        morado: "#2a1059",
        moradohover: "#4e1da5",
        gris: "#181818",
        grismenu: "#d1cccc",
        amarillo: "#d1c050",
        amarillohover: "#dbcc6b",
        amarilloborder: "#bdae48",
        volverlectura: "#B3FF8A",
        volverlecturaborde: "#6FC94E",
      },

      backgroundImage: {
        Logicab: "url(../assets/img/MiniLogica.png)",
        Lectura: "url ('/src/assets/img/Lectura-rbg.png')",
        Analisis: "url ('/src/assets/img/Analisis.jpg')",
      },
    },
  },
  plugins: [],
};
