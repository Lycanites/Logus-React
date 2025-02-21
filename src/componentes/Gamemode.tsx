import React from "react";
import { Link } from "react-router-dom";
import "./Gamemode.css";

const VerticalSections = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Secciones principales */}
      <div className="grid grid-cols-1 md:grid-cols-3 flex-grow gap-4 p-4 bg-verde">

         <div className="flex items-center justify-center border-b md:border-r md:border-b-0 border-gray-300 p-4 hover:bg-[url('C:/Users/Alumno/Logus-React/src/assets/img/Fiesta2.avif')] bg-[url('C:/Users/Alumno/Logus-React/src/assets/img/Fiesta.jpg')] bg-cover bg-center cursor-pointer transition-all duration-300">
            <Link to={"/Fiesta"} className="w-full h-full flex items-center justify-center text-center">
                🎉 Fiesta 🎉
            </Link>
         </div>


        <div className="flex items-center justify-center border-b md:border-r md:border-b-0 border-gray-300 p-4 bg-azul hover:p-6 hover:bg-white cursor-pointer">
          <Link to="/Menu">
              Clásico
          </Link>
        </div>

        <div className="flex items-center justify-center border-b md:border-r md:border-b-0 border-gray-300 p-4 bg-naranja hover:p-6 hover:bg-white cursor-pointer">
          <Link to={"/Zen"}>  
              🌸 Zen 🌸
          </Link>

        </div>
      </div>
    </div>
  );
};

export default VerticalSections;
