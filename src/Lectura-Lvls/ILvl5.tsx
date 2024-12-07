import React from "react";
import "./ILvl.css";

const ILvl5 = () => {
  return (
  <div id="Lvlec" className="bg-lime-500 h-[100vh]  content-center text-center" >Lvl1
    <div id="tiempo">
      <p>Tiempo</p>
    </div>
<div id="instruccion" className="bg-white max-h-[50vh] max-w-screen-md content-center">
 <h1 className="text-center">¿Qué debemos hacer hasta el final?</h1>
</div>
<div id="texto">
  <p>Debemos REBATIR hasta el final.</p>
</div>
<div id="botones" className="content-center px-20">
  <button>A Rendirse</button>
  <button>B Resistir</button>
  <button>C Abandonar</button>
  <button>D Retroceder</button>
  {/* Respuesta Correcta B */}
</div>
</div>
  )
};

export default ILvl5;