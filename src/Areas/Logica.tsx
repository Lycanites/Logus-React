import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MiniLectura from "../assets/img/MiniLogica.png"; // Cambia la imagen si es necesario

const Logica = () => {
  const [isRotating, setIsRotating] = useState(true);
  const [highlightedSection, setHighlightedSection] = useState(null);
  const [showInfo, setShowInfo] = useState(false);
  const [shuffledSections, setShuffledSections] = useState([]);

  const sections = [
    { color: "bg-purple-400", text: "Logica" }, // Sección de Lógica con color púrpura
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
      const logicaIndex = shuffledSections.findIndex(
        (section) => section.text === "Logica" // Siempre selecciona "Lógica"
      );
      setHighlightedSection(logicaIndex);
      setTimeout(() => setShowInfo(true), 500);
    }, 2000);

    return () => clearTimeout(stopRotation);
  }, [shuffledSections]);

  const infoContent = {
    Logica:
      "La lógica es una disciplina que estudia los principios y métodos del razonamiento válido. Es fundamental para resolver problemas y tomar decisiones de manera coherente y estructurada.",
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
                highlightedSection === index ? "ring-4 ring-purple-500" : "" // Cambio a color púrpura
              }`}
            >
              {section.text}
            </div>
          ))}
        </div>
      )}

      {/* Pantalla de descripción */}
      {showInfo && (
        <div className="flex flex-col md:flex-row items-center justify-between bg-purple-300 p-6 w-full md:w-3/4 rounded-lg border-4 border-purple-500 shadow-2xl">
          <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-4xl font-bold text-purple-800 mb-4" style={{ fontFamily: "'Arial', 'Verdana', sans-serif" }}>
              {shuffledSections[highlightedSection]?.text}
            </h2>
            <p className="text-lg text-gray-800" style={{ fontFamily: "'Arial', 'Verdana', sans-serif" }}>
              {infoContent.Logica}
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src={MiniLectura} // Cambia la imagen si lo deseas
              alt="Imagen de Lógica"
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}

      {/* Botones de navegación */}
      {showInfo && (
        <div className="absolute bottom-8 left-10 right-10 flex justify-between gap-6">
          <Link to="/Menu">
            <button className="px-8 py-2 bg-purple-500 text-xl font-semibold text-white rounded-lg hover:bg-purple-400 border-2 border-purple-600 transition-colors shadow-md">
              Regresar
            </button>
          </Link>

          <Link to="/ILvl2">
            <button className="px-8 py-2 bg-purple-500 text-xl font-semibold text-white rounded-lg hover:bg-purple-400 border-2 border-purple-600 transition-colors shadow-md">
              Continuar
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Logica;
