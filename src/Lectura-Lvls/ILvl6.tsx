import React from "react";
import "./ILvl.css";

const ILvl6 = () => {
  return (
  <div id="Lvlec" className="bg-lime-500 h-[100vh]  content-center text-center" >Lvl1
    <div id="tiempo">
      <p>Tiempo</p>
    </div>
<div id="instruccion" className="bg-white max-h-[50vh] max-w-screen-md content-center">
 <h1 className="text-center">¿Para qué se realizó la perforación?</h1>
</div>
<div id="texto">
  <p>La PERFORACION se realizó con el fin de probar si existía petróleo.</p>
</div>
<div id="botones" className="content-center px-20">
  <button>A Encontrar agua</button>
  <button>B Probar si existía petróleo</button>
  <br />
  <button>C Buscar oro</button>
  <button>D Construir un pozo</button>
  {/* Correcta B */}
</div>
</div>
  )
};

export default ILvl6;