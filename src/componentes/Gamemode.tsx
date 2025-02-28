import React from "react";
import { Link } from "react-router-dom";
import "./Gamemode.css";

const VerticalSections = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Secciones principales */}
      <div className="grid grid-cols-1 md:grid-cols-3 flex-grow gap-4 p-4 bg-verde">

      <div className="flex items-center justify-center border-b md:border-r md:border-b-0 border-gray-300 p-4 hover:bg-[url('/public/Fiesta2.jpg')] bg-[url('/public/Muestra.jpg')] bg-cover bg-center cursor-pointer transition-all duration-300">
            <Link to={"/Fiesta"} className="w-full h-full flex items-center justify-center text-center">
                🎉 Fiesta 🎉
            </Link>
      </div>

      <div className="flex items-center justify-center border-b md:border-r md:border-b-0 border-gray-300 p-4 hover:bg-[url('/public/Fiesta2.jpg')] bg-[url('/public/Prueba.jpg')] bg-cover bg-center cursor-pointer transition-all duration-300">
            <Link to={"/Menu"} className="w-full h-full flex items-center justify-center text-center">
                Clásico
            </Link>
      </div>

       <div className="flex items-center justify-center border-b md:border-r md:border-b-0 border-gray-300 p-4 hover:bg-[url('/public/Fiesta2.jpg')] bg-[url('/public/Prueba.jpg')] bg-cover bg-center cursor-pointer transition-all duration-300">
            <Link to={"/Menu"} className="w-full h-full flex items-center justify-center text-center">
              🌸 Zen 🌸
            </Link>
      </div>

      </div>
    </div>
  );
};

export default VerticalSections;