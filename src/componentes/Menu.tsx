import React from "react";
import { Link } from "react-router-dom";
import MiniLectura from "../assets/img/Lectura-rbg.png";
import MiniAnalisis from "../assets/img/MiniAnalisis.png";
import MiniMemoria from "../assets/img/MiniMemoria.png";
import MiniLogica from "../assets/img/MiniLogica.png";
import MiniCultura from "../assets/img/MiniCultura.jpg";

const Menu = () => {
  const categories = [
    {
      id: "lectura",
      name: "Lectura",
      image: MiniLectura,
      to: "/Lectura",
      bgColor: "bg-green-400",
      hoverColor: "hover:bg-green-500",
      borderColor: "border-green-600",
    },
    {
      id: "analisis",
      name: "Análisis",
      image: MiniAnalisis,
      to: "/Analisis",
      bgColor: "bg-blue-400",
      hoverColor: "hover:bg-blue-500",
      borderColor: "border-blue-600",
    },
    {
      id: "memoria",
      name: "Memoria",
      image: MiniMemoria,
      to: "/Memoria",
      bgColor: "bg-pink-400",
      hoverColor: "hover:bg-pink-500",
      borderColor: "border-pink-600",
    },
    {
      id: "logica",
      name: "Lógica",
      image: MiniLogica,
      to: "/Logica",
      bgColor: "bg-purple-500",
      hoverColor: "hover:bg-purple-600",
      borderColor: "border-purple-700",
    },
    {
      id: "cultura",
      name: "Cultura",
      image: MiniCultura, // Asumiendo que estás usando la misma imagen temporalmente
      to: "/Cultura", // Asumiendo que tendrías una ruta para Cultura
      bgColor: "bg-purple-500",
      hoverColor: "hover:bg-purple-600",
      borderColor: "border-purple-700",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col">
      {/* Header con botón de retorno y controles de zoom */}
      <div className="p-6 flex justify-between items-center">
        <Link to="/MainMenu">
          <button className="px-8 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 border-orange-700 border-4 transition-all shadow-lg font-bold">
            Volver
          </button>
        </Link>

        <div className="flex items-center space-x-2 bg-amber-900/80 text-white px-4 py-2 rounded-lg">
          <button className="font-bold text-xl">−</button>
          <span className="mx-2">80%</span>
          <button className="font-bold text-xl">+</button>
          <button className="ml-4 px-3 py-1 bg-amber-700 hover:bg-amber-800 rounded">
            Reset
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
          {categories.map((category) => (
            <Link
              to={category.to}
              key={category.id}
              className="transform transition-all hover:scale-105"
            >
              <div
                className={`${category.bgColor} ${category.hoverColor} ${category.borderColor} border-8 rounded-lg shadow-xl overflow-hidden transition-all h-72 flex flex-col items-center justify-center`}
              >
                <div className="relative w-full h-3/4 flex items-center justify-center">
                  <img
                    src={category.image}
                    className="h-48 w-48 object-contain"
                    alt={category.name}
                  />
                </div>
                <div className="text-center w-full font-bold text-lg text-black pb-4">
                  {category.name.toUpperCase()}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
