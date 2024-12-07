import React from "react";
import "./ILvl.css";
import { Link } from "react-router-dom";

const ILvl3 = () => {
  return (
  <div id="Lvlec" className="bg-lime-500 h-[100vh]  content-center text-center" >Nivel 3
    <div id="tiempo">
      <p>Tiempo</p>
    </div>
<div id="instruccion" className="bg-white max-h-[50vh] max-w-screen-md content-center">
 <h1 className="text-center">¿Qué actitud sorprendió a todos?</h1>
</div>
<div id="texto">
  <p>Sorprendió a todos la actitud de aquel hombre OSADO.</p>
</div>
<div id="botones" className="content-center px-20">
  <Link to= '/ILvl4'>
  <button>A Cobarde</button>
  </Link>
  <Link to= '/ILvl4'>
  <button>B Valiente</button>
  </Link>
  <br />
  <Link to= '/ILvl4'>
  <button>C Refinado</button>
  </Link>
  <Link to= '/ILvl4'>
  <button>D Reservado</button>
  </Link>
  {/* correcta B */}
</div>
</div>
  )
};

export default ILvl3;
