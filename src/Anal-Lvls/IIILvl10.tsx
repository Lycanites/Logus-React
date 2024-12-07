import React from "react";
import "./IIILvl.css";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/img/Analisis.jpg"; // Asegúrate de que esta ruta sea correcta
import Timer from "../componentes/Timer.tsx"; // Asegúrate de que la ruta sea correcta

const IIILvl10 = () => {
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
          Nivel 10
        </h1>

        <div id="tiempo" className="mt-16 ">
          <Timer duration={30000} redirectTo="/IIIFin" /> {/* 30 segundos */}
        </div>

        <div
          id="instruccion"
          className="bg-white max-h-[50vh] max-w-screen-md mx-auto p-4 rounded-lg shadow-lg"
        >
          <h1 className="text-center font-CreamBeige">
          En el vaso grande hay dos pinturas más que en el vaso pequeño. En el vaso pequeño hay catorce pinturas. ¿Cuantas pinturas hay en el vaso grande?          </h1>
        </div>
        <div id="botones" className="grid grid-cols-2 gap-4 px-20 mt-4">
          <Link to={"/IIIFin"}>
            <button className="bg-azul text-white px-4 py-2 rounded">
              A 16
            </button>
          </Link>
          <Link to="/IIILvl10">
            <button className="bg-azul text-white px-4 py-2 rounded">
              B 14
            </button>
          </Link>
          <Link to="/IIIFin">
            <button className="bg-azul text-white px-4 py-2 rounded">
              C 26
            </button>
          </Link>
          <Link to="/IIIFin">
            <button className="bg-azul text-white px-4 py-2 rounded">
              D 6	
            </button>
          </Link>
          {/* Correcta A */}
        </div>
      </div>
    </div>
  );
};

export default IIILvl10;