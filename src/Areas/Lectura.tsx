import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MiniLectura from "../assets/img/Lectura-rbg.png";

const Lectura = () => {
  const [isRotating, setIsRotating] = useState(true);
  const [highlightedSection, setHighlightedSection] = useState(null);
  const [showInfo, setShowInfo] = useState(false);
  const [shuffledSections, setShuffledSections] = useState([]);

  const sections = [
    { color: "bg-violeta", text: "Logica" },
    { color: "bg-azularea", text: "Analisis" },
    { color: "bg-rosa", text: "Memoria" },
    { color: "bg-verde", text: "Lectura" },
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
    }, 500);

    return () => clearTimeout(stopRotation);
  }, [shuffledSections]);

  const infoContent = {
    Lectura:
      "La lectura es fundamental para desarrollar habilidades de comprensión y análisis. Ayuda a interpretar información y retener conceptos clave de forma efectiva.",
  };

  return (
    <div className="bg-grismenu min-h-screen flex flex-col items-center justify-center p-4">
     
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
                highlightedSection === index ? "ring-8 ring-verdeborder" : ""
              }`}
            >
              {section.text}
            </div>
          ))}
        </div>
      )}

      {/* cuadro con info */}
      {showInfo && (
              <div className="flex flex-col md:flex-row items-center justify-between bg-verde p-6 w-full md:w-3/4 rounded-lg border-8 border-verdeborder shadow-2xl">
                
                <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
                  <h2 className="text-4xl font-CreamBeige text-black-800 mb-4">
                    {shuffledSections[highlightedSection]?.text}
                  </h2>
                  <p className="text-4xl text-black font-sans text-justify mb-4">
                    {infoContent.Lectura}
                  </p>
                </div>
      
                <div className="md:w-1/2 flex justify-center">
                  <img src={MiniLectura} className="max-w-full h-auto rounded-lg"/>
                </div>
              </div>
            )}

      {/* Botones de navegación */}
      {showInfo && (
        <div className="absolute bottom-8 left-10 right-10 flex justify-between gap-6">
          <Link to="/Menu">
            <button className="px-12 py-2 bg-naranja text-xl font-semibold text-white rounded-3xl hover:bg-naranjahover border-4 border-naranjaborder transition-colors shadow-2xl">
              Regresar
            </button>
          </Link>

          <Link to="/LE">
            <button className="px-12 py-2 bg-naranja text-xl font-semibold text-white rounded-3xl hover:bg-naranjahover border-4 border-naranjaborder transition-colors shadow-2xl">
              Continuar
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Lectura;
