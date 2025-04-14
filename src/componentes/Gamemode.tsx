import React from "react";
import { Link } from "react-router-dom";
import "./Gamemode.css";
import fiestaImg from "../assets/img/Fiesta.jpg";
import clasicoImg from "../assets/img/Clasico.jpg";
import zenImg from "../assets/img/Zen.jpg";

const GamemodeSelection = () => {
  return (
    <div className="flex flex-col md:flex-row w-full h-screen">
      {/* Panel Fiesta */}
      <Link
        to="/Fiesta"
        className="w-full md:w-1/3 h-1/3 md:h-full relative group"
      >
        <div
          className="w-full h-full flex items-center justify-center cursor-pointer transition-all duration-500"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${fiestaImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay que se ilumina en hover */}
          <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-20 transition-opacity duration-500"></div>

          <div className="flex flex-col items-center relative z-10">
            <div className="mb-3"></div>
            <span className="text-white text-xl font-bold">Fiesta</span>
          </div>
        </div>
      </Link>

      {/* Panel Clásico */}
      <Link to="/Menu" className="w-full md:w-1/3 h-1/3 md:h-full">
        <div
          className="w-full h-full flex items-center justify-center transition-all duration-300 cursor-pointer hover:brightness-110"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${clasicoImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex flex-col items-center">
            <div className="mb-3"></div>
            <span className="text-white text-xl font-bold">Clásico</span>
          </div>
        </div>
      </Link>
      <Link to="/Zen" className="w-full md:w-1/3 h-1/3 md:h-full">
        <div
          className="w-full h-full flex items-center justify-center transition-all duration-300 cursor-pointer hover:brightness-110"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${zenImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex flex-col items-center">
            <div className="mb-3"></div>
            <span className="text-white text-xl font-bold">Zen</span>
          </div>
        </div>
      </Link>

      {/* Panel Zen */}
    </div>
  );
};

export default GamemodeSelection;
