import React from "react";
import "./IILvl.css";
import Timer from "../componentes/Timer.tsx";

const IILvl1 = () => {
  return (
    <div id="Lvlog" className="bg-blue-500 h-[100vh]  content-center text-center" >Lvl1
        <div id="tiempo" className="mt-16">
        <Timer duration={30000} redirectTo="/ILvl2" /> {/* 30 segundos */}
        </div>


        <div id="instruccion" className="bg-white max-h-[50vh] max-w-screen-md content-center">
        <h1 className="text-center">Texto</h1>
        </div>

        <div id="texto">
        <p>Texto</p>
        </div>

        <div id="botones" className="content-center px-20">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        </div>

    </div>
  )
};

export default IILvl1;
