import React from "react";
import "./Lvl.css";

const Lvl7 = () => {
  return (
  <div id="Lvlec" className="bg-lime-500 h-[100vh]  content-center text-center" >Lvl1
    <div id="tiempo">
      <p>Tiempo</p>
    </div>
<div id="instruccion" className="bg-white max-h-[50vh] max-w-screen-md content-center">
 <h1 className="text-center">¿Cómo se describe al ser que jamás había conocido?</h1>
</div>
<div id="texto">
  <p>Jamás había conocido a un ser tan SUSPICAZ.</p>
</div>
<div id="botones" className="content-center px-20">
  <button>A Confiado</button>
  <button>B Desconfiado</button>
  <button>C Amable</button>
  <button>D Generoso</button>
  {/* Respuesta correcta B */}
</div>
</div>
  )
};

export default Lvl7;