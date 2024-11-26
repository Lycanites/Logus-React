import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

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
          <Link to="/MainMenu" className="btn" role="menuitem">
            Inicio
          </Link>
        </li>
        <li role="none">
          <Link to="#about" className="btn" role="menuitem">
            Areas
          </Link>
        </li>
        <li role="none">
          <Link to="/Register" className="btn" role="menuitem">
            Registrarse
          </Link>
        </li>
        <li role="none">
          <Link to="/Login" className="btn" role="menuitem">
            Iniciar Sesion
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
