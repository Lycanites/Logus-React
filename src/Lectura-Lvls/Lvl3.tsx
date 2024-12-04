import React from "react";
import "./Lvl.css";

const Lvl3 = () => {
  return (
  <div id="Lvlec" className="bg-lime-500 h-[100vh]  content-center text-center" >Lvl1
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
  <button>A Cobarde</button>
  <button>B Valiente</button>
  <br />
  <button>C Refinado</button>
  <button>D Reservado</button>
  {/* correcta B */}
</div>
</div>
  )
};

export default Lvl3;
