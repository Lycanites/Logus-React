import React, { useState } from "react";
import Modal from "./Modal";
import "./Navbar.css";
import { Link } from "react-router-dom";

function POPUP() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  return (
    <div>
      <button className="btn" onClick={openModal}>
        Jugar
      </button>
      <Modal ModalOpen={isModalOpen} onClose={closeModal}>
        <br />
        <h2 className="Title">JUEGA AHORA</h2>
        <div className="modal">
          <p>No tengo una cuenta</p>
          <Link to={"Register"}>
            <button className="SignUp">CREAR CUENTA</button>
          </Link>
          <p>Tengo una cuenta</p>
          <Link to={"Login"}>
            <button className="SignIn">INICIAR SESION</button>
          </Link>
        </div>
      </Modal>
    </div>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log("Menu is now: ", !isOpen); // Verifica el estado
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      toggleMenu();
    }
  };

  return (
    <nav className="navbar" role="navigation" aria-label="Main Navigation">
      <div className="navbar-logo" tabIndex={0} role="heading" aria-level={1}>
        LOGUS
      </div>

      <div
        className="navbar-toggle"
        onClick={toggleMenu}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        aria-expanded={isOpen}
        aria-controls="navbar-links"
      >
        ☰
      </div>

      <ul
        className={`navbar-links ${isOpen ? "active" : ""}`}
        id="navbar-links"
        role="menu"
      >
        <li role="none">
          <Link to="/MainMenu" className="enlace" role="menuitem">
            Inicio
          </Link>
        </li>
        <li role="none">
          <Link to="#about" className="enlace" role="menuitem">
            Areas
          </Link>
        </li>

        <li role="none">
          <Link to="/Soporte" className="enlace" role="menuitem">
            Soporte
          </Link>
        </li>
        <div className="modal">
          <POPUP />
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
