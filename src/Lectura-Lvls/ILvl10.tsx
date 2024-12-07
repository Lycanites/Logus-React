import React from "react";
import "./ILvl.css";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/img/Lectura.jpg"; // Asegúrate de que esta ruta sea correcta
import Timer from "../componentes/Timer.tsx"; // Asegúrate de que la ruta sea correcta

const ILvl10 = () => {
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

  <div id="tiempo" className="mt-16">
    <Timer duration={30000} redirectTo="/IFin" /> {/* 30 segundos */}
  </div>

  <div
    id="instruccion"
    className="bg-white max-h-[50vh] max-w-screen-md mx-auto p-4 rounded-lg shadow-lg"
  >
    <h1 className="text-center font-CreamBeige">
    ¿Qué buscan desentrañar los astrónomos?
    </h1>
  </div>
  <div id="texto" className="p-4 font-Marykate">
    <p>La Maraña de las Estrellas: En la vastedad del firmamento, entre constelaciones y nebulosas, se entrelazan las historias de las estrellas, cuyos destinos se cruzan en una maraña cósmica. Cada punto de luz, un relato por descifrar, cada titilar una pregunta suspendida en el tiempo. Los astrónomos, navegantes de la noche, tejen sus teorías en el telar del universo, buscando desentrañar los enigmas que ocultan las luces que titilan en la inmensidad del espacio.</p>
  </div>
  <div id="botones" className="grid grid-cols-2 gap-4 px-20 mt-4">
    <Link to={"/IFin"}>
      <button className="bg-verde text-white px-4 py-2 rounded">
      A Los misterios del océano
      </button>
    </Link>
    <Link to="/IFin ">
      <button className="bg-verde text-white px-4 py-2 rounded">
      B Los enigmas de las estrellas
      </button>
    </Link>
    <Link to="/IFin">
      <button className="bg-verde text-white px-4 py-2 rounded">
      C Los secretos de la tierra
      </button>
    </Link>
    <Link to="/IFin">
      <button className="bg-verde text-white px-4 py-2 rounded">
      D Las maravillas del bosque
      </button>
    </Link>
    {/* correcta B */}
  </div>
</div>
</div>
  )
};

export default ILvl10;
