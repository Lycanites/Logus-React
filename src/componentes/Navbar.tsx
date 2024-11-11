import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">LOGUS</div>

      <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
        <li>
          <a href="#home" className="btn">
            Inicio
          </a>
        </li>
        <li>
          <a href="#about" className="btn">
            Areas
          </a>
        </li>
        <li>
          <a href="#about" className="btn">
            Registrarse
          </a>
        </li>
        <li>
          <a href="#about" className="btn">
            Iniciar Sesion
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
