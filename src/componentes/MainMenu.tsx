import React, { useState } from "react";
import Imagenes from "../assets/img/Imagenes"; // Asegúrate de que la ruta sea correcta
import { Link } from "react-router-dom";
import "./MainMenu.css";
import Modal from "./Modal";
import SoundManager from "./Configuracion";
import perfilIcon from "../assets/img/Perfil.png"; // Asegúrate de que la imagen esté en la ruta correcta
import tiendaIcon from "../assets/img/Tienda.png"; // Asegúrate de que la imagen esté en la ruta correcta

function POPUP() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div>
      <button
        onClick={openModal}
        className="px-20 py-4 bg-verde text-xl font-semibold text-white rounded-3xl hover:bg-verdehover border-verdeborder border-4 transition-colors shadow-2xl"
      >
        Configuracion
      </button>
      <Modal ModalOpen={isModalOpen} onClose={closeModal}>
        <SoundManager />
      </Modal>
    </div>
  );
}

const Menu = () => {
  return (
    <div className="bg-animated-gradient h-screen flex flex-col text-white">
      {/* Header con imagen */}
      <div
        className="bg-no-repeat bg-[length:1100px_850px] bg-center flex justify-center items-center p-1 w-full h-[40vh]"
        style={{ backgroundImage: `url(${Imagenes.Logo})` }}
      ></div>

      {/* Contenido principal */}
      <div className="flex-1 flex flex-col justify-between p-5">
        {/* Flecha de "Volver" en la parte superior izquierda */}
        <div className="flex justify-start">
          {/* Puedes añadir un botón volver si lo deseas */}
        </div>

        {/* Contenedor de botones */}
        <div className="flex flex-col items-center space-y-5">
          <Link to="/Gamemode">
            <button className="neon-btn-rosa px-20 py-4 bg-rosa text-2xl font-semibold text-rosatxt rounded-3xl hover:bg-rosahover transition-colors border-rosaborder border-4">
              Jugar
            </button>
          </Link>

          <Link to="/Gamemode">
            <button className="neon-btn-rosa px-10 py-4 bg-rosa text-2xl font-semibold text-rosatxt rounded-3xl hover:bg-rosahover transition-colors border-rosaborder border-4">
              Multijugador
            </button>
          </Link>

          <Link to="/Carousel">
            <button className="neon-btn-amarillo px-16 py-4 bg-amarillo text-2xl font-semibold text-rosatxt rounded-3xl hover:bg-rosahover transition-colors border-rosaborder border-4">
              Tienda
            </button>
          </Link>
        </div>

        {/* Íconos de perfil y configuración abajo a la izquierda */}
        <div className="flex justify-start space-x-5">
          <Link to="/Perfil">
            <img
              src={perfilIcon}
              alt="Perfil"
              className="w-16 h-16 cursor-pointer hover:opacity-80 transition-opacity"
            />
          </Link>
          <Link to="/POPUP">
            <img
              src={perfilIcon}
              alt="Configuración"
              className="w-16 h-16 cursor-pointer hover:opacity-80 transition-opacity"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
