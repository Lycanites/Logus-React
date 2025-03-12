// Componente React definitivo para mostrar perfil
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Perfil = () => {
  type Perfil = {
    username: string;
    email: string;
    fecha_registro: string;
  };
  const [perfil, setPerfil] = useState<Perfil | null>(null);
  const [cargando, setCargando] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/Login");  // ✅ Redirige correctamente si no hay token
      return;
    }

    const handleLogout = () => {
      localStorage.removeItem("token");
      navigate("/Login");
    };

    axios
      .get("http://localhost:5000/api/user-profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setPerfil(response.data);
        setCargando(false);
      })
      .catch((error) => {
        console.error(error);
        setCargando(false);
      });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  if (cargando) {
    return <div className="text-center text-xl">Cargando...</div>;
  }

  if (!perfil) {
    return (
      <div className="text-center text-xl">No se pudo cargar el perfil.</div>
    );
  }

  return (
    <div className="container mx-auto bg-gradient-to-r from-teal-400 via-purple-500 to-blue-600 text-white p-8 rounded-lg shadow-2xl w-11/12 md:w-2/3 mt-12">
      <h1 className="text-4xl font-extrabold text-center mb-6">
        Perfil de {perfil.username}
      </h1>
      <div className="text-lg mb-4">
        <p>
          <strong>Email:</strong> {perfil.email}
        </p>
        <p>
          <strong>Fecha de registro:</strong>{" "}
          {new Date(perfil.fecha_registro).toLocaleDateString()}
        </p>
      </div>
      
      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full mt-4"
      >  
        Cerrar sesión
      </button>
    </div>
  );
};

export default Perfil;
