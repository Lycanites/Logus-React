import React from "react";
import "./Lvl.css";
import TimerInitializer from "../componentes/TimerInitializer";

const Lvl1 = () => {
  return (
    <div
      id="Lvlec"
      className="bg-lime-500 h-[100vh]  content-center text-center"
    >
      Lvl1
      <div id="tiempo">
        <TimerInitializer />
      </div>
      <div
        id="instruccion"
        className="bg-white max-h-[50vh] max-w-screen-md content-center"
      >
        <h1 className="text-center">Pregunta</h1>
      </div>
      <div id="texto"></div>
      <div id="botones" className="content-center px-20">
        <button>respuesta uno</button>
        <button>respuesta dos</button>
        <br></br>
        <button>respuesta tres</button>
        <button>respuesta cuatro</button>
      </div>
    </div>
  );
};

export default Lvl1;
