import React from "react";
import { Link } from "react-router-dom";
import MiniLectura from "../assets/img/Lectura-rbg.png";
import MiniLAnalisis from "../assets/img/MiniAnalisis.png";
import MiniMemoria from "../assets/img/MiniMemoria.png";
import MiniLogica from "../assets/img/MiniLogica.png";

const Menu = () => {
  const buttonClass =
    "shadow-2xl from-gray-100 border-8 text-center font-CreamBeige w-full h-64 rounded-lg flex flex-col justify-center";

  return (
    <div className="bg-grismenu h-screen flex flex-col items-center justify-start relative sm:h-[100vh] p-5vh">
          <div id="voler" className="w-full sm:h-[10vh] p-10 sm:p-6 md:p-8 lg:p-10">
            <Link to="/MainMenu">
              <button className="px-8 py-2 bg-naranja text-2xl font-MaryKate font-semibold text-white rounded-3xl hover:bg-naranjahover border-naranjaborder border-4 transition-colors absolute top-10 left-8 sm:top-10 sm:left-8 shadow-2xl">
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
                      Analisis
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
                </div>
          </div>
    </div>

    



  );
};

export default Menu;
