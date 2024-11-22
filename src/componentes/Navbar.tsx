import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

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
          <Link to="/" className="btn">
            Inicio
          </Link>
        </li>
        <li>
          <Link to="#about" className="btn">
            Areas
          </Link>
        </li>
        <li>
          <Link to="/Register" className="btn">
            Registrarse
          </Link>
        </li>
        <li>
          <Link to="/Login" className="btn">
            Iniciar Sesion
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
