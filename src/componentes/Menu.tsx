import React from "react";

const Menu = () => {
  return (
    <div className="bg-grismenu h-[100vh]">
      <div>
        <button className="relative w-48 h-16 bg-blue-500 rounded-lg overflow-hidden">
          <span
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url("../assets/img/MiniLectura.jpg")' }}
          ></span>
          <span className="relative z-10 text-white font-bold">Lectura</span>
        </button>
      </div>
      <div>
        <button className="relative w-48 h-16 bg-blue-500 rounded-lg overflow-hidden">
          <span
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url("../assets/img/MiniLectura.jpg")' }}
          ></span>
          <span className="relative z-10 text-white font-bold">Analisis</span>
        </button>
      </div>
      <div>
        <button className="relative w-48 h-16 bg-blue-500 rounded-lg overflow-hidden">
          <span
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url("../assets/img/MiniLectura.jpg")' }}
          ></span>
          <span className="relative z-10 text-white font-bold">Memoria</span>
        </button>
      </div>
      <div>
        <button className="relative w-48 h-16 bg-blue-500 rounded-lg overflow-hidden">
          <span
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url("../assets/img/MiniLectura.jpg")' }}
          ></span>
          <span className="relative z-10 text-white font-bold">Lectura</span>
        </button>
      </div>
    </div>
  );
};

export default Menu;
