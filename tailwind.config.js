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
        verde: "#9bf06f",
        verdeborder: "#5ac923",
        verdehover: "#C2FFA3",
        verdetxt: "#FFFFFF",
        morado: "#2a1059",
        rosa: "#FF7DBD",
        rosaborder: "#ff3787",
        rosatxt: "#FFFFFF",
        rosahover: "#f7bae4",
        azul: "#5fc1fe",
        azulborder: "#3485FF",
        azulhover: "#C9E4FF",
        gris: "#181818",
        grismenu: "#d1cccc",
        amarillo: "#d1c050",
        amarillohover: "#dbcc6b",
        amarilloborder: "#bdae48",
        volverlectura: "#B3FF8A",
        volverlecturaborde: "#6FC94E"
      },

      
      backgroundImage: {
        Logicabtn: "url(../assets/img/MiniLogica.jpg)",
        Lectura: "url ('/src/assets/img/MiniLectura.jpg')",
      },
    },
  },
  plugins: [],
};
