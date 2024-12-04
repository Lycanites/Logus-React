import React from "react";
import MiniLectura from "../assets/img/Lectura-rbg.png";
import { Link } from "react-router-dom";

const Lectura = () => {
  return (
    <Link to={'/ILvl1'}>

    <div className="bg-lime-400 h-[100vh]" >

        Da clic en donde sea para empezar
        
      <div id="titulo">
        <h1 className=" font-CreamBeige text-6xl text-center text-color-verdetext">Lectura</h1>
        <h2>Beta</h2>
      </div>
      <div className="flex items-center justify-center h-screen">
        <div
          id="image"
          className="bg-cover bg-center" // No se especifica el tamaño aquí
          style={{
            backgroundImage: `url(${MiniLectura})`,
            width: "500px", // Establece el ancho en píxeles
            height: "500px", // Establece la altura en píxeles
          }}
        ></div>
      </div>

    </div>
    </Link>
  );
};

export default Lectura;
