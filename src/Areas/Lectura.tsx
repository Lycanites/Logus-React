import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MiniLectura from "../assets/img/Lectura-rbg.png";

const Lectura = () => {
  const [isRotating, setIsRotating] = useState(true);
  const [highlightedSection, setHighlightedSection] = useState(null);
  const [showInfo, setShowInfo] = useState(false);
  const [shuffledSections, setShuffledSections] = useState([]);

  const sections = [
    { color: "bg-purple-400", text: "Logica" },
    { color: "bg-blue-400", text: "Analisis" },
    { color: "bg-pink-400", text: "Memoria" },
    { color: "bg-green-400", text: "Lectura" },
  ];

  useEffect(() => {
    const shuffled = [...sections].sort(() => Math.random() - 0.5);
    setShuffledSections(shuffled);
  }, []);

  useEffect(() => {
    const stopRotation = setTimeout(() => {
      setIsRotating(false);
      const lecturaIndex = shuffledSections.findIndex(
        (section) => section.text === "Lectura"
      );
      setHighlightedSection(lecturaIndex); // Siempre selecciona "Lectura"
      setTimeout(() => setShowInfo(true), 500);
    }, 2000);

    return () => clearTimeout(stopRotation);
  }, [shuffledSections]);

  const infoContent = {
    Lectura:
      "La lectura es fundamental para desarrollar habilidades de comprensión y análisis. Ayuda a interpretar información y retener conceptos clave de forma efectiva.",
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
                highlightedSection === index ? "ring-4 ring-lime-500" : ""
              }`}
            >
              {section.text}
            </div>
          ))}
        </div>
      )}

      {/* Pantalla de descripción */}
      {showInfo && (
        <div className="flex flex-col md:flex-row items-center justify-between bg-lime-300 p-6 w-full md:w-3/4 rounded-lg border-4 border-lime-500 shadow-2xl">
          <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-4xl font-bold text-lime-800 mb-4">
              {shuffledSections[highlightedSection]?.text}
            </h2>
            <p className="text-lg text-gray-800">
              {infoContent.Lectura} {/* Aseguramos que siempre se muestre el texto de "Lectura" */}
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src={MiniLectura}
              alt="Imagen de Lectura"
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}

      {/* Botones de navegación */}
      {showInfo && (
        <div className="absolute bottom-8 left-10 right-10 flex justify-between gap-6">
          <Link to="/Menu">
            <button className="px-8 py-2 bg-green-500 text-xl font-semibold text-white rounded-lg hover:bg-green-400 border-2 border-green-600 transition-colors shadow-md">
              Regresar
            </button>
          </Link>

          <Link to="/ILvl2">
            <button className="px-8 py-2 bg-green-500 text-xl font-semibold text-white rounded-lg hover:bg-green-400 border-2 border-green-600 transition-colors shadow-md">
              Continuar
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Lectura;
