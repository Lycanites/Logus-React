import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";


interface FormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  // Otras propiedades si las hay
}

interface Errors {
  username?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  [key: string]: string | undefined;
}

interface Message {
  text: string;
  type: "success" | "error";
}

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState<FormData>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [message, setMessage] = useState<Message | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors: Errors = {};

    if (formData.username.length < 3) {
      newErrors.username =
        "El nombre de usuario debe tener al menos 3 caracteres";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Por favor ingresa un email válido";
    }

    if (formData.password.length < 6) {
      newErrors.password = "La contraseña debe tener al menos 6 caracteres";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Las contraseñas no coinciden";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Limpiar el error del campo que se está editando
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({
          text: "Registro exitoso. Redirigiendo al inicio de sesión...",
          type: "success",
        });

        // Limpiar el formulario
        setFormData({
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
        });

        // Esperar 2 segundos antes de redirigir para que el usuario pueda ver el mensaje
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        setMessage({
          text: data.message || "Error en el registro",
          type: "error",
        });
      }
    } catch (error) {
      setMessage({
        text: "Error de red o servidor no accesible",
        type: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <div className="flex justify-center items-center mb-6">
          <label className="font-CreamBeige text-6xl">LOGUS</label>
        </div>

        <form onSubmit={handleRegister} className="space-y-6">
          <div>
            <label
              htmlFor="username"
              className="block mb-2 font-medium font-Marykate text-3xl"
            >
              Nombre
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className={`bg-gray-50 border ${
                errors.username ? "border-red-500" : "border-gray-300"
              } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
              placeholder="username"
              value={formData.username}
              onChange={handleChange}
              required
              disabled={isLoading}
            />
            {errors.username && (
              <p className="text-red-500 text-xs mt-1">{errors.username}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-2 font-medium font-Marykate text-3xl"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`bg-gray-50 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
              placeholder="user@email.com"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isLoading}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-2 font-medium font-Marykate text-3xl"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className={`bg-gray-50 border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
              placeholder="•••••••••"
              value={formData.password}
              onChange={handleChange}
              required
              disabled={isLoading}
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block mb-2 font-medium font-Marykate text-3xl"
            >
              Confirmar Contraseña
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className={`bg-gray-50 border ${
                errors.confirmPassword ? "border-red-500" : "border-gray-300"
              } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
              placeholder="•••••••••"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              disabled={isLoading}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          <button
            type="submit"
            className={`w-full bg-violet-950 text-white py-2 rounded-lg font-CreamBeige
              ${
                isLoading
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-blue-600"
              }`}
            disabled={isLoading}
          >
            {isLoading ? "Procesando..." : "Registrarse"}
          </button>
        </form>

        {message && (
          <p
            className={`mt-4 text-center ${
              message.type === "success" ? "text-green-500" : "text-red-500"
            }`}
          >
            {message.text}
          </p>
        )}

        <div className="mt-4 text-center">
          <p className="text-gray-600">
            ¿Ya tienes una cuenta?{" "}
            <button
              onClick={() => navigate("/login")}
              className="text-blue-500 hover:text-blue-700"
              type="button"
              disabled={isLoading}
            >
              Iniciar sesión
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
