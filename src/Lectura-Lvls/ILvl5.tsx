import React from "react";
import "./ILvl.css";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/img/Lectura.jpg"; // Asegúrate de que esta ruta sea correcta
import Timer from "../componentes/Timer.tsx"; // Asegúrate de que la ruta sea correcta

const ILvl5 = () => {
  return (
    <div
      id="Lvlec"
      className="bg-lime-500 h-[100vh] content-center text-center relative overflow-hidden"
    >
      {/* Imagen de fondo con saturación */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          filter: "saturate(50%)",
        }}
      />

      <div className="relative z-10">
        {/* Botón de volver en la esquina superior izquierda */}
        <Link to="/">
          <button className="absolute top-4 left-4 bg-blue-500 text-white px-4 py-2 rounded">
            Volver
          </button>
        </Link>

        {/* Texto de nivel en la esquina superior derecha */}
        <h1 className="absolute top-4 right-4 text-white font-bold text-lg md:text-xl lg:text-2xl">
          Nivel 5
        </h1>

        <div id="tiempo" className="mt-16">
          <Timer duration={30000} redirectTo="/ILvl6" /> {/* 30 segundos */}
        </div>

        <div
          id="instruccion"
          className="bg-white max-h-[50vh] max-w-screen-md mx-auto p-4 rounded-lg shadow-lg"
        >
          <h1 className="text-center font-CreamBeige">
          ¿Qué debemos hacer hasta el final?
          </h1>
        </div>
        <div id="texto" className="p-4 font-Marykate">
          <p>Debemos REBATIR hasta el final.</p>
        </div>
        <div id="botones" className="grid grid-cols-2 gap-4 px-20 mt-4">
          <Link to={"/ILvl6"}>
            <button className="bg-verde text-white px-4 py-2 rounded">
            A Rendirse
            </button>
          </Link>
          <Link to="/ILvl6 ">
            <button className="bg-verde text-white px-4 py-2 rounded">
            B Resistir
            </button>
          </Link>
          <Link to="/ILvl6">
            <button className="bg-verde text-white px-4 py-2 rounded">
            C Abandonar
            </button>
          </Link>
          <Link to="/ILvl6">
            <button className="bg-verde text-white px-4 py-2 rounded">
            D Retroceder
            </button>
          </Link>
          {/* correcta B */}
        </div>
      </div>
    </div>
  );
};

export default ILvl5;
