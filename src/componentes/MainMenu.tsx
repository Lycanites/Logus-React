import React, { useState } from "react";
import Imagenes from "../assets/img/Imagenes"; // Asegúrate de que la ruta sea correcta
import { Link } from "react-router-dom";
import "./MainMenu.css";
import Modal from "./Modal.tsx";

function POPUP() {
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  <div>
    <Modal ModalOpen={isModalOpen} onClose={closeModal}>
      <h2>Contenido del Modal</h2>
      <p>Este es un ejemplo de un modal en React con TypeScript.</p>
    </Modal>
  </div>;
}

const Configuracion: React.FC<{ openModal: () => void }> = ({ openModal }) => {
  return (
    <div>
      <h1>Configuración</h1>
      <button onClick={openModal}>Abrir Modal</button>
    </div>
  );
};

const Menu = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="bg-grismenu min-h-screen flex flex-col">
      {/* Header con imagen */}
      <div
        className="bg-no-repeat bg-[length:1100px_850px] bg-center flex justify-center items-center text-white p-1 w-full h-[50vh]"
        style={{ backgroundImage: `url(${Imagenes.Logo})` }}
      ></div>

      {/* Contenido principal */}
      <div className="flex flex-0 items-center justify-center">
        <div className="flex flex-col space-y-7 bg-grismenu lg rounded-lg p-0 w-70">
          <Link to={"/Gamemode"}>
            <button className="px-14 py-2 bg-rosa text-xl font-semibold text-rosatxt rounded-3xl hover:bg-rosahover transition-colors border-rosaborder border-4 shadow-2xl">
              Jugar
            </button>
          </Link>
          <div className="modal"></div>
          <Link to="/Perfil">
            <button className="px-14 py-2 bg-azul text-xl font-semibold text-white rounded-3xl hover:bg-azulhover border-azulborder border-4 transition-colors shadow-2xl">
              Perfil
            </button>
          </Link>

          <Link to="/Carousel">
            <button className="px-12 py-2 bg-naranja text-xl font-semibold text-white rounded-3xl hover:bg-naranjahover border-naranjaborder border-4 transition-colors shadow-2xl">
              Tienda
            </button>
          </Link>

          <Link to="/">
            <button className="px-12 py-2 bg-naranja text-xl font-semibold text-white rounded-3xl hover:bg-naranjahover border-naranjaborder border-4 transition-colors shadow-2xl">
              Volver
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
