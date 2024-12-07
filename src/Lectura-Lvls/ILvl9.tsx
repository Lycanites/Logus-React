import React from "react";
import "./ILvl.css";

const ILvl9 = () => {
  return (
  <div id="Lvlec" className="bg-lime-500 h-[100vh]  content-center text-center" >Lvl1
    <div id="tiempo">
      <p>Tiempo</p>
    </div>
<div id="instruccion" className="bg-white max-h-[50vh] max-w-screen-md content-center">
 <h1 className="text-center">¿Dónde se congregaban los arlequines?</h1>
</div>
<div id="texto">
  <p>El Éxodo de los Arlequines: En los recónditos confines del bosque, bajo la luna plateada, se congregaban los arlequines, seres mágicos cuyas vestimentas tejían historias olvidadas. Un cortejo multicolor se desplegaba al amparo de la noche, danzando al compás de melodías ancestrales. Sus pasos, un enigma para los mortales, trazaban un mapa de éxodo hacia la utopía, donde el tiempo se detiene y los sueños se entrelazan en un festín de realidad y fantasía.</p>
</div>
<div id="botones" className="content-center px-20">
  <button>A En la ciudad</button>
  <button>B En el bosque</button>
  <br />
  <button>C En la playa</button>
  <button>D En la montaña</button>
  {/* Respuesta correcta B */}
</div>
</div>
  )
};

export default ILvl9;