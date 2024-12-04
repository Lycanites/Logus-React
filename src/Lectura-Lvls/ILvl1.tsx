import React from "react";
import "./ILvl.css";
import { Link } from "react-router-dom";

const ILvl1 = () => {
  return (
  <div id="Lvlec" className="bg-lime-500 h-[100vh]  content-center text-center" >Nivel 1
    <div id="tiempo">
      <p>Tiempo</p>
    </div>
<div id="instruccion" className="bg-white max-h-[50vh] max-w-screen-md content-center">
 <h1 className="text-center">¿De qué color es Millie?</h1>
</div>
<div id="texto">
  <p>Noa y Hugo tienen una nueva mascota, se llama Millie, es un dálmata, es de color blanco con manchas negras, al perrito le gusta jugar con un hueso.</p>
</div>
<div id="botones" className="content-center px-20">
  <Link to={'/ILvl2'}>
  <button className="bg-azul">A Blanco</button>
  </Link>
  <Link to="/ILvl2">
  <button>B Negro</button>
  </Link>
  <br />
  <Link to="/ILvl2">
  <button>C Blanco con manchas negras</button>
  </Link>
  <Link to="/ILvl2">
  <button>D Café</button>
  </Link>
</div>
</div>
  )
};

export default ILvl1;
