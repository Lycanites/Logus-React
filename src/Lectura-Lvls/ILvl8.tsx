import React from "react";
import "./Lvl.css";

const Lvl8 = () => {
  return (
  <div id="Lvlec" className="bg-lime-500 h-[100vh]  content-center text-center" >Lvl1
    <div id="tiempo">
      <p>Tiempo</p>
    </div>
<div id="instruccion" className="bg-white max-h-[50vh] max-w-screen-md content-center">
 <h1 className="text-center">¿Qué llegó a manos del Sr. Aldebarán?</h1>
</div>
<div id="texto">
  <p>El Enigma del Relojero: En un rincón oscuro de la ciudad yacía la modesta relojería del Sr. Aldebarán, un hombre cuya sapiencia mecánica rivalizaba con el mismísimo tiempo. Su taller, repleto de artilugios y misterios, era el enclave perfecto para la resolución de enigmas cronometrados. Una mañana, un reloj llegó a sus manos, tocado por la fatalidad yace estancado en un tic-tac melancólico. Su reparación, desafío supremo para cualquier relojero, se convertiría en el peregrinaje de un maestro en búsqueda de la elusiva armonía temporal.</p>
</div>
<div id="botones" className="content-center px-20">
  <button>A Un reloj</button>
  <button>B Un mapa</button>
  <br />
  <button>C Un libro</button>
  <button>D Una brújula</button>
  {/* Respuesta correcta A */}
</div>
</div>
  )
};

export default Lvl8;