import React, { useState } from "react";
import axios from "axios"; // Asegúrate de tener axios instalado
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault(); // Evitar el comportamiento por defecto del formulario
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });
      setMessage("Login exitoso, token: " + response.data.token); // Mensaje de éxito
      // Aquí puedes guardar el token en el localStorage o en el estado global
    } catch (error) {
      setMessage(error.response.data || "Error en el login");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md bg-violet-950 shadow-md rounded-lg p-6">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <label className="font-CreamBeige text-6xl">LOGUS</label>
        </div>

        <form onSubmit={handleLogin}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 font-medium font-Marykate text-gray-900 dark:text-white text-xl"
            >
              Inserta tu correo electronico/usuario
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="user@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 font-medium font-Marykate text-gray-900 dark:text-white text-xl"
            >
              Inserta tu contraseña
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="•••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div>
              <label htmlFor="registerLink">
                ¿No tienes una cuenta aun?
                <br />
                <Link to="/Register">
                  <button>Crear cuenta</button>
                </Link>
              </label>
            </div>
          </div>
          <div>
            <Link to="/Lectura">
              <button
                type="submit"
                className="w-full bg-violet-950 text-white py-2 rounded-lg hover:bg-blue-600 font-CreamBeige"
              >
                Iniciar sesion
              </button>
            </Link>
          </div>
        </form>
        {message && <p className="text-red-500 mt-4">{message}</p>}
      </div>
    </div>
  );
}

export default Login;
