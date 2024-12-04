import React from "react";
import "./ILvl.css";
import { Link } from "react-router-dom";

const ILvl2 = () => {
  return (
  <div id="Lvlec" className="bg-lime-500 h-[100vh]  content-center text-center" >Nivel 2
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
  <Link to= {'/ILvl3'}>
  <button>A Fácil</button>
  </Link>
  <Link to= '/ILvl3'>
  <button>B Dificil</button>
  </Link>
  <br />
  <Link to= '/ILvl3'>
  <button>C Sencillo</button>
  </Link>
  <Link to= '/ILvl3'>
  <button>D Accesible</button>
  </Link>
  {/* correcta B */}
</div>
</div>
  )
};

export default ILvl2;
