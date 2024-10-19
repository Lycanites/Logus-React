import React from "react";
import logo from "./Logo.png"; // Asegúrate de tener tu logotipo en la carpeta 'public'

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="logo" />
      <h1 className="title">INICIO DE SESIÓN</h1>
    </header>
  );
};

export default Header;
