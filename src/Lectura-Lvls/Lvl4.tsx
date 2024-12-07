import React from "react";
import "./Lvl.css";

const Lvl4 = () => {
  return (
  <div id="Lvlec" className="bg-lime-500 h-[100vh]  content-center text-center" >Lvl1
    <div id="tiempo">
      <p>Tiempo</p>
    </div>
<div id="instruccion" className="bg-white max-h-[50vh] max-w-screen-md content-center">
 <h1 className="text-center">¿Cómo resultó el tiempo?</h1>
</div>
<div id="texto">
  <p>El tiempo resulto demasiado RAQUITICO para concluir la tarea.</p>
</div>
<div id="botones" className="content-center px-20">
  <button>A Demasiado corto</button>
  <button>B Demasiado estrecho</button>
  <br></br>
  <button>C Suficiente</button>
  <button>D Demasiado Corto</button>
  {/* correcta B */}
</div>
</div>
  )
};

export default Lvl4;
