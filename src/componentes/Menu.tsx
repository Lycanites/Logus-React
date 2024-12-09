import React from "react";
import { Link } from "react-router-dom";
import MiniLectura from "../assets/img/Lectura-rbg.png";
import MiniLAnalisis from "../assets/img/MiniAnalisis.png";
import MiniMemoria from "../assets/img/MiniMemoria.png";
import MiniLogica from "../assets/img/MiniLogica.png";

const Menu = () => {
  return (
          <div className="bg-grismenu h-[100vh] flex items-center justify-center relative">

            <Link to="/MainMenu">
              <button className="px-6 py-2 bg-naranja text-2xl font-semibold text-white rounded-3xl hover:bg-naranjahover border-naranjaborder border-4 transition-colors absolute top-5 left-5 sm:top-10 sm:left-8 shadow-2xl">
                Volver
              </button>
            </Link>
            
              <div
                id="botones"
                className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-8 sm:px-60 py-10 w-full h-full"
              >
                
                <Link to={'/Lectura'}>
                  <button className="shadow-2xl bg-verde hover:bg-verdehover border-verdeborder border-8 text-center text-white font-CreamBeige w-full h-64 text-xl rounded-lg flex flex-col items-center justify-center overflow-hidden mt-20 sm:mt-0">
                    <img
                      src={MiniLectura}
                      className="w-1/2 h-3/4 mb-2"
                    />
                    Lectura
                  </button>
                </Link>
                
                <Link to={'/Analisis'}>
                  <button className="shadow-2xl bg-azularea hover:bg-azulhover border-azulborder border-8 text-center text-white font-CreamBeige w-full h-64 text-xl rounded-lg flex flex-col items-center justify-center overflow-hidden">
                    <img
                      src={MiniLAnalisis}
                      className="w-2/3 h-3/4 mb-2"
                    />
                    Análisis
                  </button>
                </Link>
               
                <Link to={'/Memoria'}>
                  <button className="shadow-2xl bg-rosa hover:bg-rosahover border-rosaborder border-8 text-center text-white font-CreamBeige w-full h-64 text-xl rounded-lg flex flex-col items-center justify-center overflow-hidden">
                    <img
                      src={MiniMemoria}
                      className="w-2/3 h-3/4 mb-2"
                    />
                    Memoria
                  </button>
                </Link>
                
                <Link to={'/Logica'}>
                  <button className="shadow-2xl bg-violeta hover:bg-violetahover border-morado border-8 text-center text-white font-CreamBeige w-full h-64 text-xl rounded-lg flex flex-col items-center justify-center overflow-hidden">
                    <img
                      src={MiniLogica}
                      className="w-1/2 h-3/4 mb-2"
                    />
                    Lógica
                  </button>
                </Link>
              </div>
          </div>
  );
};

export default Menu;
