import React from "react";
import { Link } from "react-router-dom";
import MiniLectura from "../assets/img/Lectura-rbg.png";
import MiniLAnalisis from "../assets/img/MiniAnalisis.png";
import MiniMemoria from "../assets/img/MiniMemoria.png";
import MiniLogica from "../assets/img/MiniLogica.png";

const Menu = () => {
  const buttonClass =
    "shadow-2xl bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-300 hover:to-gray-400 border-gray-300 border-8 text-center text-gray-700 font-CreamBeige w-full h-64 text-xl rounded-lg flex flex-col items-center justify-center";

  return (
    <div className="bg-grismenu h-screen flex flex-col items-center justify-start relative sm:h-[100vh] p-5vh">
      <div id="voler" className="w-full sm:h-[10vh] p-10 sm:p-6 md:p-8 lg:p-10">
        <Link to="/MainMenu">
          <button className="px-8 py-2 bg-naranja text-2xl font-MaryKate text-white rounded-3xl hover:bg-naranjahover border-naranjaborder border-4 transition-colors absolute top-10 left-8 sm:top-10 sm:left-8 shadow-2xl">
            Volver
          </button>
        </Link>
      </div>

      <div
        id="botones"
        className="grid grid-cols-2 sm:grid-cols-2 gap-8 px-4 sm:h-[40vh] md:px-20 lg:px-60 py-20 w-full h-full"
      >
        <div id="bt-lectura" className="flex flex-col items-center">
          <Link to={"/Lectura"}>
            <button
              className={`${buttonClass} bg-verde hover:bg-verdehover border-verdeborder w-full flex flex-col items-center`}
            >
              <img
                src={MiniLectura}
                className="w-[300px] h-[300px] object-cover mb-2"
                alt="Lectura"
              />
              Lectura
            </button>
          </Link>
        </div>

        <div id="bt-anal" className="flex flex-col items-center">
          <Link to={"/Analisis"}>
            <button
              className={`${buttonClass} bg-azularea hover:bg-azulhover border-azulborder w-full flex flex-col items-center`}
            >
              <img
                src={MiniLAnalisis}
                className="w-[300px] h-[300px] object-cover mb-2"
                alt="Análisis"
              />
              Análisis
            </button>
          </Link>
        </div>

        <div id="bt-memory" className="flex flex-col items-center">
          <Link to={"/Memoria"}>
            <button
              className={`${buttonClass} bg-rosa hover:bg-rosahover border-rosaborder w-full flex flex-col items-center`}
            >
              <img
                src={MiniMemoria}
                className="w-[300px] h-[300px] object-cover mb-2"
                alt="Memoria"
              />
              Memoria
            </button>
          </Link>
          {/* Botón Fiesta debajo de Memoria, con más horizontalidad */}
          <Link to={"/ILvl5"}>
            <button
              className="shadow-2xl bg-gradient-to-r from-red-400 via-yellow-400 to-blue-500 hover:from-pink-400 hover:via-green-400 hover:to-purple-500 border-gray-300 border-8 text-center text-white font-CreamBeige w-full h-24 text-xl rounded-lg flex items-center justify-center mt-4"
            >
              🎉 Fiesta 🎉
            </button>
          </Link>
        </div>

        <div id="bt-logica" className="flex flex-col items-center">
          <Link to={"/Logica"}>
            <button
              className={`${buttonClass} bg-violeta hover:bg-violetahover border-morado w-full flex flex-col items-center`}
            >
              <img
                src={MiniLogica}
                className="w-[300px] h-[300px] object-cover mb-2"
                alt="Lógica"
              />
              Lógica
            </button>
          </Link>
          {/* Botón Zen debajo de Lógica, con más horizontalidad */}
          <Link to={"/ILvl7"}>
            <button
              className="shadow-2xl bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 hover:from-green-300 hover:via-yellow-300 hover:to-orange-300 border-gray-300 border-8 text-center text-white font-CreamBeige w-full h-24 text-xl rounded-lg flex items-center justify-center mt-4"
            >
              🌸 Zen 🌸
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
