import React from "react";
import MiniLectura from "../assets/img/MiniAnalisis.jpg";
import { Link } from "react-router-dom";

const Lectura = () => {
  return (
    <Link to={'/IIILvl1'}>

    <div className="bg-blue-400 h-[100vh]" >

        
        
      <div id="titulo">
        <h1 className=" font-CreamBeige text-6xl text-center text-color-verdetext">ANALISIS</h1>
        <h2>Beta</h2>
      </div>
      Da clic en donde sea para empezar
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
