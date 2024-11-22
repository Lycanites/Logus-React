import React, { useState } from "react";
import axios from "axios"; // Asegúrate de tener axios instalado
import "./Register.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      const response = await axios.post("http://localhost:5000/api/register", {
        username,
        email,
        password,
      });
      // Check if response and response.data are defined
      if (response && response.data) {
        setMessage(response.data); // Set success message
      } else {
        setMessage("Unexpected response structure");
      }
    } catch (error) {
      // Check if error.response is defined
      if (error.response) {
        setMessage(error.response.data || "Error in registration");
      } else {
        setMessage("Network error or server not reachable");
      }
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <label className="font-CreamBeige text-6xl">LOGUS</label>
        </div>

        <form onSubmit={handleRegister}>
          <div className="mb-6">
            <label
              htmlFor="Nombre"
              className="block mb-2 font-medium font-Marykate text-3xl"
            >
              Nombre
            </label>
            <input
              type="text"
              id="Nombre"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 font-medium font-Marykate text-3xl"
            >
              Email
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
              className="block mb-2 font-medium font-Marykate text-3xl"
            >
              Contraseña
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
          </div>
          <button
            type="submit"
            className="w-full bg-violet-950 text-white py-2 rounded-lg hover:bg-blue-600 font-CreamBeige"
          >
            Registrarse
          </button>
        </form>
        {message && <p className="text-red-500 mt-4">{message}</p>}
      </div>
    </div>
  );
};

export default Register;
