import React from "react";
import "./Lvl.css";

const Lvl2 = () => {
  return (
  <div id="Lvlec" className="bg-lime-500 h-[100vh]  content-center text-center" >Lvl1
    <div id="tiempo">
      <p>Tiempo</p>
    </div>
<div id="instruccion" className="bg-white max-h-[50vh] max-w-screen-md content-center">
 <h1 className="text-center">¿Cómo se describiría el camino hacia el éxito?</h1>
</div>
<div id="texto">
  <p>El camino hacia el éxito a veces resulta INASEQUIBLE.</p>
</div>
<div id="botones" className="content-center px-20">
  <button>Fácil</button>
  <button>Inasequible</button>
  <br />
  <button>Sencillo</button>
  <button>Accesible</button>
</div>
</div>
  )
};

export default Lvl2;
