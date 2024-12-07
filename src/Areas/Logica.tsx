import React from "react";
import MiniLogica from "../assets/img/MiniLogica.png";
import { Link } from "react-router-dom";

const Logica = () => {
  return (
        <Link to={'/IILvl1'}>

        <div className="bg-purple-400 h-[100vh]" >

            Dar clic 
        
            <div id="titulo">

            <h1 className=" font-CreamBeige text-6xl text-center text-color-verdetext">Logica</h1>
            <h2>Beta</h2>
            </div>

            <div className="flex items-center justify-center h-screen">
            <div
                id="image"
                className="bg-cover bg-center" // No se especifica el tamaño aquí
                style={{
                backgroundImage: `url(${MiniLogica})`,
                width: "500px", // Establece el ancho en píxeles
                height: "500px", // Establece la altura en píxeles
                      }}
            ></div>
            </div>

      </div>
    </Link>
  );
};

export default Logica;