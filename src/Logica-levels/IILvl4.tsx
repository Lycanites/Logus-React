import React from "react";
import "./IILvl.css";
import Timer from "../componentes/Timer.tsx";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/img/Logica.jpg";


const IILvl4 = () => {
  return (
    <div id="Lvlog" className="bg-blue-500 h-[100vh]  content-center text-center" >Lvl1

        <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
                    backgroundImage: `url(${backgroundImage})`,
                    filter: "saturate(50%)",
                   }}
        />
        
            <div className="relative z-10"> {/* Botón de volver en la esquina superior izquierda */}
            
                    <Link to="/">
                    <button className="absolute top-4 left-4 bg-lime-500 text-white px-4 py-2 rounded">
                        Volver
                    </button>
                    </Link>

                    <div id="tiempo" className="mt-16">
                    <Timer duration={30000} redirectTo="/IILvl5" /> {/* 30 segundos */}
                    </div>
                    
                    <div id="instruccion" className="bg-white max-h-[50vh] max-w-screen-md mx-auto p-4 rounded-lg shadow-lg">
                    <h1 className="text-center font-CreamBeige">Imagina estar en una habitación oscura ¿cuál es la mejor salida?</h1>
                    </div>


                <div id="botones" className="grid grid-cols-2 gap-4 px-20 mt-4">
                    <Link to={"/IILvl4"}>
                    <button className="bg-verde text-white px-4 py-2 rounded">
                    A. La luz
                    </button>
                    </Link>

                    <Link to={"/IILvl5"}>
                    <button className="bg-verde text-white px-4 py-2 rounded">
                    B. La puerta
                    </button>
                    </Link>

                    <Link to={"/IILvl5"}>
                    <button className="bg-verde text-white px-4 py-2 rounded">
                    C. La imaginacion  {/* correcta */}
                    </button>
                    </Link>

                    <Link to={"/IILvl5"}>
                    <button className="bg-verde text-white px-4 py-2 rounded">
                    D. La oscuridad
                    </button>
                    </Link>
        
                </div>
            </div>
        </div>
  )
};

export default IILvl4;