// src/components/Header.tsx
import React from "react";
import Button from "./Button";

const Header: React.FC = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar-logo">LOGUS</div>
        <ul className="navbar-links">
          <li>
            <a href="#home">Inicio</a>
          </li>
          <li>
            <a href="#about">Areas</a>
          </li>
          <li>
            <button className="btn">Registrarse</button>
          </li>
          <li>
            <button className="btn">Iniciar Sesion</button>
          </li>
          <li>
            <button />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
