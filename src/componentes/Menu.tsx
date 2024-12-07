import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
          <div className="bg-grismenu h-[100vh] flex items-center justify-center relative">
      
            <Link to="/MainMenu">
              <button className="px-6 py-2 bg-naranja text-2xl font-semibold text-white rounded-3xl hover:bg-naranjahover border-naranjaborder border-4 transition-colors absolute top-10 left-8">
                Volver
              </button>
            </Link>

              <div
                  id="botones"
                  className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-8 sm:px-60 py-10 w-full h-full"
              >
        
                <Link to={'/Lectura'}>
                  <button className="bg-verde hover:bg-verdehover border-verdeborder border-8 text-center text-white font-CreamBeige w-full h-64 text-3xl bg-blue-500 rounded-lg overflow-hidden">
                  Lectura
                  </button>
                </Link>

                <Link to={'/Analisis'}>
                  <button className="bg-azularea hover:bg-azulhover border-azulborder border-8 text-center text-white font-CreamBeige w-full h-64 text-3xl rounded-lg overflow-hidden">
                  Analisis
                  </button>
                </Link>

                <Link to={'/Memoria'}>
                  <button className="bg-rosa hover:bg-rosahover border-rosaborder border-8 text-center text-white font-CreamBeige w-full h-64 text-3xl rounded-lg overflow-hidden">
                  Memoria
                  </button>
                </Link>

                <Link to={'/Logica'}>
                  <button className="bg-violeta hover:bg-violetahover border-morado border-8 text-center text-white font-CreamBeige w-full h-64 text-3xl rounded-lg overflow-hidden">
                  Logica
                  </button>
                </Link>

              </div>
          </div>
  );
};

export default Menu;

