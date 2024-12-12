import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MiniLectura from "../assets/img/MiniMemoria.png"; // Puedes cambiar la imagen por la que desees

const Memoria = () => {
  const [isRotating, setIsRotating] = useState(true);
  const [highlightedSection, setHighlightedSection] = useState(null);
  const [showInfo, setShowInfo] = useState(false);
  const [shuffledSections, setShuffledSections] = useState([]);

  const sections = [
    { color: "bg-purple-400", text: "Logica" },
    { color: "bg-blue-400", text: "Analisis" },
    { color: "bg-rose-400", text: "Memoria" },
    { color: "bg-green-400", text: "Lectura" },
  ];

  useEffect(() => {
    const shuffled = [...sections].sort(() => Math.random() - 0.5);
    setShuffledSections(shuffled);
  }, []);

  useEffect(() => {
    const stopRotation = setTimeout(() => {
      setIsRotating(false);
      const memoriaIndex = shuffledSections.findIndex(
        (section) => section.text === "Memoria" // Siempre selecciona "Memoria"
      );
      setHighlightedSection(memoriaIndex);
      setTimeout(() => setShowInfo(true), 500);
    }, 2000);

    return () => clearTimeout(stopRotation);
  }, [shuffledSections]);

  const infoContent = {
    Memoria:
      "La memoria es clave para aprender y retener información. Ayuda a recordar hechos, imágenes, palabras y más, y juega un papel fundamental en el proceso de aprendizaje.",
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-4">
      {/* Animación del cuadro giratorio */}
      {!showInfo && (
        <div
          className={`relative w-96 h-96 rounded-lg ${isRotating ? "animate-spin" : ""}`}
          style={{
            animationDuration: isRotating ? "2s" : "0s",
          }}
        >
          {shuffledSections.map((section, index) => (
            <div
              key={index}
              className={`absolute w-1/2 h-1/2 ${
                index % 2 === 0 ? "top-0" : "bottom-0"
              } ${index < 2 ? "left-0" : "right-0"} ${section.color} flex items-center justify-center text-white text-xl font-bold ${
                highlightedSection === index ? "ring-4 ring-rose-500" : "" // Cambio a color rosado
              }`}
            >
              {section.text}
            </div>
          ))}
        </div>
      )}

      {/* Pantalla de descripción */}
      {showInfo && (
        <div className="flex flex-col md:flex-row items-center justify-between bg-rose-300 p-6 w-full md:w-3/4 rounded-lg border-4 border-rose-500 shadow-2xl">
          <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-4xl font-bold text-rose-800 mb-4" style={{ fontFamily: "'Arial', 'Verdana', sans-serif" }}>
              {shuffledSections[highlightedSection]?.text}
            </h2>
            <p className="text-lg text-gray-800" style={{ fontFamily: "'Arial', 'Verdana', sans-serif" }}>
              {infoContent.Memoria}
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src={MiniLectura} // Usa la imagen que desees
              alt="Imagen de Memoria"
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}

      {/* Botones de navegación */}
      {showInfo && (
        <div className="absolute bottom-8 left-10 right-10 flex justify-between gap-6">
          <Link to="/Menu">
            <button className="px-8 py-2 bg-rose-500 text-xl font-semibold text-white rounded-lg hover:bg-rose-400 border-2 border-rose-600 transition-colors shadow-md">
              Regresar
            </button>
          </Link>

          <Link to="/ILvl4">
            <button className="px-8 py-2 bg-rose-500 text-xl font-semibold text-white rounded-lg hover:bg-rose-400 border-2 border-rose-600 transition-colors shadow-md">
              Continuar
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Memoria;