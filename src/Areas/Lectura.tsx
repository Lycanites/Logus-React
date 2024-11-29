import React from "react";
import MiniLectura from "../assets/img/MiniLectura.jpg";

const Lectura = () => {
  return (
    <div className="bg-lime-400 h-[100vh] ">
      <div id="titulo">
        <h1 className=" font-CreamBeige text-xl text-center">Lectura</h1>
        <h2>Beta</h2>
      </div>
      <div id="image" className="bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${MiniLectura})`}}>
        
        
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default Lectura;
