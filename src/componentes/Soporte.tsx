import React, { useState } from "react";
import Imagenes from "../assets/img/Imagenes";

const Soporte: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí podrías enviar los datos a un backend o a un servicio de correo
    console.log("Mensaje enviado:", formData);
    setSuccessMessage(
      "Tu mensaje ha sido enviado. Nos pondremos en contacto contigo pronto."
    );
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="flex flex-col items-center p-5 min-h-screen">
      <h2 className="text-6xl font-CreamBeige mb-4">Soporte de LOGUS</h2>
      <p className="mb-12 text-white  text-2xl">
        ¿Tienes alguna duda o problema? Envíanos un mensaje.
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-null border-moradohover border-4 shadow-md rounded-lg p-6 w-full max-w-md"
      >
        <label className="block mb-2">
          Nombre:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1"
            required
          />
        </label>
        <label className="block mb-2">
          Correo electrónico:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1"
            required
          />
        </label>
        <label className="block mb-4">
          Mensaje:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1 h-28"
            required
          />
        </label>
        <button
          type="submit"
          className="w-full bg-morado text-white py-2 rounded font-CreamBeige hover:bg-moradohover transition"
        >
          Enviar Mensaje
        </button>
        {successMessage && (
          <p className="text-green-500 mt-4">{successMessage}</p>
        )}
      </form>
    </div>
  );
};

export default Soporte;
