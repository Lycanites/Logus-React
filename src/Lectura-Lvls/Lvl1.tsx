import React from "react";
import "./Lvl.css";

const Lvl1 = () => {
  return (
  <div id="Lvlec" className="bg-lime-500 h-[100vh]  content-center text-center" >Lvl1
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
  <button>Blanco</button>
  <button>Negro</button>
  <button>Blanco con manchas negras</button>
  <button>Café</button>
</div>
</div>
  )
};

export default Lvl1;
