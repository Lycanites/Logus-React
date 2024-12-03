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
  <p>La Maraña de las Estrellas: En la vastedad del firmamento, entre constelaciones y nebulosas, se entrelazan las historias de las estrellas, cuyos destinos se cruzan en una maraña cósmica. Cada punto de luz, un relato por descifrar, cada titilar una pregunta suspendida en el tiempo. Los astrónomos, navegantes de la noche, tejen sus teorías en el telar del universo, buscando desentrañar los enigmas que ocultan las luces que titilan en la inmensidad del espacio.</p>
</div>
<div id="botones" className="content-center px-20">
  <button>respuesta uno</button>
  <button>respuesta dos</button>
  <br></br>
  <button>respuesta tres</button>
  <button>respuesta cuatro</button>
</div>
</div>
  )
};

export default Lvl1;
