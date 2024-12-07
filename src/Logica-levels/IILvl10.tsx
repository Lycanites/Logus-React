import React from "react";
import "./IILvl.css";
import Timer from "../componentes/Timer.tsx";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/img/Logica.jpg";


const IILvl10 = () => {
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
                    <Timer duration={30000} redirectTo="/ILvl2" /> {/* 30 segundos */}
                    </div>
                    
                    <div id="instruccion" className="bg-white max-h-[50vh] max-w-screen-md mx-auto p-4 rounded-lg shadow-lg">
                    <h1 className="text-center font-CreamBeige">¿Cómo debe estar primeramente una vela para encenderla?</h1>
                    </div>


                <div id="botones" className="grid grid-cols-2 gap-4 px-20 mt-4">
                    <Link to={"/IIFin"}>
                    <button className="bg-verde text-white px-4 py-2 rounded">
                    A. Sin humedad
                    </button>
                    </Link>

                    <Link to={"/IIFin"}>
                    <button className="bg-verde text-white px-4 py-2 rounded">
                    B. Apagada  {/* correcta */}
                    </button>
                    </Link>

                    <Link to={"/IIFin"}>
                    <button className="bg-verde text-white px-4 py-2 rounded">
                    C. A oscuras
                    </button>
                    </Link>

                    <Link to={"/IIFin"}>
                    <button className="bg-verde text-white px-4 py-2 rounded">
                    D. Comprada
                    </button>
                    </Link>
        
                </div>
            </div>
        </div>
  )
};

export default IILvl10;