import React from "react";
import "./IIILvl.css";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/img/Analisis.jpg"; 

const IIIFin = () => {
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
          <Link to="/Menu">
            <button className="absolute top-4 left-4 bg-blue-500 text-white px-4 py-2 rounded">
              Volver
            </button>
          </Link>

          {/* Texto que diga, fin del Area centrado */}
        <h1 className="absolute top-4 right-4 text-white font-bold text-lg md:text-xl lg:text-2xl">
          Finalizaste el Area ANALISIS!!!
        </h1>
        </div>
    </div>
  );
};

export default IIIFin;
