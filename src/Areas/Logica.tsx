import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MiniLogica from "../assets/img/MiniLogica.png"; // Cambia la imagen si es necesario

const Logica = () => {
  const [isRotating, setIsRotating] = useState(true);
  const [highlightedSection, setHighlightedSection] = useState<number | null>(
    null
  );
  const [showInfo, setShowInfo] = useState(false);
  const [shuffledSections, setShuffledSections] = useState<
    { color: string; text: string }[]
  >([]);

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
      const logicaIndex = shuffledSections.findIndex(
        (section) => section.text === "Logica" // Siempre selecciona "Lógica"
      );
      setHighlightedSection(logicaIndex);
      setTimeout(() => setShowInfo(true), 500);
    }, 500);

    return () => clearTimeout(stopRotation);
  }, [shuffledSections]);

  const infoContent = {
    Logica:
      "La logica es una disciplina que estudia los principios y métodos del razonamiento válido. Es fundamental para resolver problemas y tomar decisiones de manera coherente y estructurada.",
  };

  return (
    <div className="bg-grismenu min-h-screen flex flex-col items-center justify-center p-4 shadow-2xl">
      {/* Animación del cuadro giratorio */}
      {!showInfo && (
        <div
          className={`relative w-96 h-96 rounded-lg ${
            isRotating ? "animate-spin" : ""
          }`}
          style={{
            animationDuration: isRotating ? "2s" : "0s",
          }}
        >
          {shuffledSections.map((section, index) => (
            <div
              key={index}
              className={`absolute w-1/2 h-1/2 ${
                index % 2 === 0 ? "top-0" : "bottom-0"
              } ${index < 2 ? "left-0" : "right-0"} ${
                section.color
              } flex items-center justify-center text-white text-xl font-bold ${
                highlightedSection === index ? "ring-8 ring-morado" : ""
              }`}
            >
              {section.text}
            </div>
          ))}
        </div>
      )}

      {/* Cuadro con info */}
      {showInfo && (
        <div className="flex flex-col md:flex-row items-center justify-between bg-violetahover p-6 w-full md:w-3/4 rounded-lg border-8 border-morado shadow-2xl">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-4xl font-CreamBeige text-black-800 mb-4">
              {highlightedSection !== null &&
                shuffledSections[highlightedSection]?.text}
            </h2>
            <p className="text-4xl text-black font-Marykate mb-4">
              {infoContent.Logica}
            </p>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <img src={MiniLogica} className="max-w-full h-auto rounded-lg" />
          </div>
        </div>
      )}

      {/* Botones */}
      {showInfo && (
        <div className="absolute bottom-8 left-10 right-10 flex justify-between gap-6">
          <Link to="/Menu">
            <button className="px-12 py-2 bg-white text-xl font-CreamBeige text-morado rounded-3xl hover:bg-naranjahover border-4 border-morado transition-colors shadow-2xl">
              Regresar
            </button>
          </Link>

          <Link to="/LO">
            <button className="px-12 py-2 bg-white text-xl font-CreamBeige text-morado rounded-3xl hover:bg-naranjahover border-4 border-morado transition-colors shadow-2xl">
              Continuar
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Logica;
