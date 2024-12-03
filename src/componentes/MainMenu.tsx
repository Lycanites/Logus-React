import React, { useState } from "react";
import Imagenes from "../assets/img/Imagenes"; // Asegúrate de que la ruta sea correcta
import { Link } from "react-router-dom";
import "./MainMenu.css";

const Menu = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="bg-grismenu min-h-screen flex flex-col">
      {/* Header con imagen */}
      <div
        className="bg-no-repeat bg-cover bg-center flex justify-center items-center text-white p-1 w-full h-[60vh]"
        style={{ backgroundImage: `url(${Imagenes.Logo})` }}
      ></div>

      {/* Contenido principal */}
      <div className="flex flex-1 items-center justify-center">
        <div className="flex flex-col space-y-6 bg-grismenu lg rounded-lg p-8 w-80">
          <Link to={"/Menu"}>
            <button className="px-4 py-2 bg-rosa text-rosatxt rounded-3xl hover:bg-rosahover transition-colors border-rosaborder border-4">
              Jugar
            </button>
          </Link>
          <Link to='/Configuracion'>
          <button className= "px-4 py-2 bg-verde text-verdetxt rounded-3xl hover:bg-verdehover transition-colors border-verdeborder border-4 font-Creambeige">
            Configuracion
          </button>
          </Link>
          <Link to='/Perfil'>
          <button className="px-4 py-2 bg-azul text-white rounded-3xl hover:bg-azulhover border-azulborder border-4 transition-colors">
            Perfil
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
