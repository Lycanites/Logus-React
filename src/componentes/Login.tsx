// src/pages/Login.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL_PRUEBA || "http://localhost:3000";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, contrasena }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Credenciales incorrectas");
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("rol", data.rol);

      if (data.rol === "admin") {
        navigate("/admin");
      } else {
        navigate("/MainMenu");
      }
    } catch (err) {
      setError("No se pudo conectar con el servidor");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-3xl font-bold mb-4 text-center">Iniciar Sesión</h2>

        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

        <input
          type="email"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="Contraseña"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
          required
        />

        <button
          type="submit"
          className={`w-full p-2 bg-violet-950 text-white rounded hover:bg-blue-700 ${
            isLoading ? "opacity-50" : ""
          }`}
          disabled={isLoading}
        >
          {isLoading ? "Entrando..." : "Entrar"}
        </button>

        <p className="mt-4 text-center text-sm">
          ¿No tienes cuenta?{" "}
          <button
            type="button"
            onClick={() => navigate("/register")}
            className="text-blue-500 hover:underline"
          >
            Regístrate
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;
