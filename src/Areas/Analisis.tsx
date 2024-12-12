import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MiniLectura from "../assets/img/Analisis.jpg";

const Analisis = () => {
  const [isRotating, setIsRotating] = useState(true);
  const [highlightedSection, setHighlightedSection] = useState(null);
  const [showInfo, setShowInfo] = useState(false);
  const [shuffledSections, setShuffledSections] = useState([]);

  const sections = [
    { color: "bg-purple-400", text: "Logica" },
    { color: "bg-blue-400", text: "Analisis" },
    { color: "bg-pink-400", text: "Memoria" },
    { color: "bg-green-500", text: "Lectura" }, 
  ];

  useEffect(() => {
    const shuffled = [...sections].sort(() => Math.random() - 0.5);
    setShuffledSections(shuffled);
  }, []);

  useEffect(() => {
    const stopRotation = setTimeout(() => {
      setIsRotating(false);
      const analisisIndex = shuffledSections.findIndex(
        (section) => section.text === "Analisis"
      );
      setHighlightedSection(analisisIndex); // Siempre selecciona "Análisis"
      setTimeout(() => setShowInfo(true), 500);
    }, 2000);

    return () => clearTimeout(stopRotation);
  }, [shuffledSections]);

  const infoContent = {
    Analisis:
      "El análisis es clave para descomponer información compleja en partes más simples, lo que facilita la comprensión y evaluación de diferentes aspectos de un problema o concepto.",
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
        <div className="flex flex-col md:flex-row items-center justify-between bg-blue-300 p-6 w-full md:w-3/4 rounded-lg border-4 border-blue-500 shadow-2xl">
          <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">
              {shuffledSections[highlightedSection]?.text}
            </h2>
            <p className="text-lg text-gray-800">
              {infoContent.Analisis} {/* Aseguramos que siempre se muestre el texto de "Análisis" */}
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
            <button className="px-8 py-2 bg-blue-500 text-xl font-semibold text-white rounded-lg hover:bg-blue-400 border-2 border-blue-600 transition-colors shadow-md">
              Regresar
            </button>
          </Link>

          <Link to="/ILvl3">
            <button className="px-8 py-2 bg-blue-500 text-xl font-semibold text-white rounded-lg hover:bg-blue-400 border-2 border-blue-600 transition-colors shadow-md">
              Continuar
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Analisis;
