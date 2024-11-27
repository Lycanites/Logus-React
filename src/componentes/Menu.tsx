import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="bg-grismenu h-[100vh]">
      <div>
        <Link to={'/Lectura'}>
        <button className="relative w-48 h-16 bg-blue-500 rounded-lg overflow-hidden">
          <span
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url("../assets/img/MiniLectura.jpg")' }}
          ></span>
          <span className="relative z-10 text-white font-bold">Lectura</span>
        </button>
        </Link>
      </div>

      <div>
        <Link to={'/Analisis'}>
        <button className="relative w-48 h-16 bg-blue-500 rounded-lg overflow-hidden">
          <span
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url("../assets/img/MiniAnalisis.jpg")' }}
          ></span>
          <span className="relative z-10 text-white font-bold">Analisis</span>
        </button>
        </Link>
      </div>
      <div>
        <Link to={'/Memoria'}>
        <button className="relative w-48 h-16 bg-blue-500 rounded-lg overflow-hidden">
          <span
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url("../assets/img/MiniMemoria.jpg")' }}
          ></span>
          <span className="relative z-10 text-white font-bold">Memoria</span>
        </button>
        </Link>
      </div>

      <div>
        <Link to={'/Logica'}>
        <button className="relative w-48 h-16 bg-blue-500 rounded-lg overflow-hidden">
          <span
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url("../assets/img/MiniLogica.jpg")' }}
          ></span>
          <span className="relative z-10 text-white font-bold">Logica</span>
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
