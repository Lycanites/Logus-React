import React from "react";
import "./ILvl.css";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/img/Lectura.jpg"; // Asegúrate de que esta ruta sea correcta
import Timer from "../componentes/Timer.tsx"; // Asegúrate de que la ruta sea correcta

const ILvl1 = () => {
  return (
    <div
      id="Lvlec"
      className="bg-lime-500 h-[100vh] content-center text-center relative overflow-hidden space-y-0"
    >
      {/* Imagen de fondo con saturación */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          filter: "saturate(50%)",
        }}
      />

      <div className="relative z-10 h-[100vh]">
        {/* Botón de volver en la esquina superior izquierda */}
        <Link to="/">
          <button className="absolute top-5 left-4 bg-volverlectura border-4 border-volverlecturaborde text-black px-4 py-2 rounded">
            Volver
          </button>
        </Link>

        {/* Texto de nivel en la esquina superior derecha */}
        <h1 className="absolute top-1 right-10 text-white font-bold text-lg md:text-xl lg:text-2xl">
          Nivel 1
        </h1>

        {/* Línea temporal */}
        <div id="tiempo" className="mt-16 top-30">
          <Timer duration={100000000000000000} redirectTo="/ILvl2" /> {/* 30 segundos */}
        </div>

        {/* Pregunta */}
        <div
          id="instruccion"
          className="relative top-20 right-15 w-[50vw] bg-white max-h-[50vh] max-w-screen-md mx-auto p-4 rounded-lg shadow-lg border-4 border-volverlecturaborde"
        >
          <h1 className="text-center font-CreamBeige">
            ¿De qué color es Millie?
          </h1>
        </div>

        {/* Ejercicio */}
        <div id="texto" className="relative top-40 right-15 p-4 font-Marykate">
          <p>
            Noa y Hugo tienen una nueva mascota, se llama Millie, es un dálmata,
            es de color blanco con manchas negras, al perrito le gusta jugar con
            un hueso.
          </p>
        </div>

        {/* Botones */}
        <div id="botones" className="relative top-60 right-15 grid grid-cols-2 gap-4 px-20 mt-4">
          <Link to={"/ILvl2"}>
            <button className="bg-verde text-white px-4 py-2 rounded">
              A Blanco
            </button>
          </Link>
          <Link to="/ILvl2">
            <button className="bg-verde text-white px-4 py-2 rounded">
              B Negro
            </button>
          </Link>
          <Link to="/ILvl2">
            <button className="bg-verde text-white px-4 py-2 rounded">
              C Blanco con manchas negras
            </button>
          </Link>
          <Link to="/ILvl2">
            <button className="bg-verde text-white px-4 py-2 rounded">
              D Café
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ILvl1;
