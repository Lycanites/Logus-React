import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MiniLogica from "../assets/img/MiniLogica.png";

        const Logica = () => {
              const [isRotating, setIsRotating] = useState(true);
              const [highlightedSection, setHighlightedSection] = useState(null);
              const [showInfo, setShowInfo] = useState(false);
              const [shuffledSections, setShuffledSections] = useState([]);

              const sections = [
                { color: "bg-violeta", text: "Logica" },
                { color: "bg-azularea", text: "Análisis" },
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
                  const logicIndex = shuffledSections.findIndex(
                    (section) => section.text === "Logica"
                  );
                  setHighlightedSection(logicIndex); // Siempre selecciona "Lógica"
                  setTimeout(() => setShowInfo(true), 500);
                }, 500);

                return () => clearTimeout(stopRotation);
              }, [shuffledSections]);

              const infoContent = {
                Logica:
                  "La lógica se enfoca en resolver problemas mediante el razonamiento lógico y matemático. Ayuda a desarrollar habilidades de análisis y pensamiento crítico.",
              };

              return (
                <div className="bg-grismenu min-h-screen flex flex-col items-center justify-center p-4 shadow-2xl">

                  {/* cuadro giratorio */}
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
                            highlightedSection === index ? "ring-4 ring-morado" : ""
                          }`}
                        >
                          {section.text}
                        </div>
                      ))}
                    </div>
                  )}
                  

                  {/* cuadro con info */}
                  {showInfo && (
                    <div className="flex flex-col md:flex-row items-center justify-between bg-violetahover p-4 w-full h-100 rounded-lg border-morado border-8 shadow-2xl mb-8 md:mb-16">
                      
                      <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
                        <h2 className="text-4xl font-CreamBeige text-black-800 mb-4">
                          {shuffledSections[highlightedSection]?.text}
                        </h2>
                        <p className="font-Marykate text-5xl text-black-600 mb-4">
                          {infoContent[shuffledSections[highlightedSection]?.text]}
                        </p>
                      </div>

                      <div className="md:w-1/2 flex justify-center">
                        <img src={MiniLogica} className="max-w-full h-auto rounded-lg" />
                      </div>
                    </div>



                  )}

                  {/* div de botones */}
                  {showInfo && (
                    
                      <div className="absolute bottom-8 left-20 right-20 flex justify-center gap-10 flex-row mt-10 md:mt-10 sm:flex-row">
                          <Link to="/Menu">
                            <button className="px-12 py-2 bg-naranja text-xl font-semibold text-white rounded-3xl hover:bg-naranjahover border-naranjaborder border-4 transition-colors shadow-2xl">
                              Regresar
                            </button>
                          </Link>
                        
                          <Link to="/IILvl1">
                            <button className="px-12 py-2 bg-naranja text-xl font-semibold text-white rounded-3xl hover:bg-naranjahover border-naranjaborder border-4 transition-colors shadow-2xl">
                              Continuar
                            </button>
                          </Link>
                        </div>

                  )}
                </div>
              );
            };

export default Logica;
