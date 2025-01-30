import React, { useState } from "react";
import Imagenes from "../assets/img/Imagenes"; // Asegúrate de que la ruta sea correcta
import "./Landing.css";

// Definición de la interfaz para las tarjetas
interface CardData {
  image: string;
  title: string;
  text: string;
}

const LandingPage: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const cardsData: CardData[] = [
    {
      image: Imagenes.img2,
      title: "Lectura",
      text: "¿Problemas para escribir una oración, para saber el significado de una palabra que oíste o intentando entender un texto importante? Esta área se dedica a la presentación de nuevas palabras, aumentando el vocabulario; a mejorar la ortografía, mostrando las maneras correctas de escribir y expresarse; y a retener información vital de un texto, mejorando la comprensión lectora.",
    },
    {
      image: Imagenes.img1,
      title: "Lógica",
      text: "¿Siempre quieres encontrar las respuestas más originales, pensar antes de actuar o tener una idea clara sobre lo que es correcto? Esta área se dedica a mantener tu mente pensante con situaciones que, en un primer lugar, parecen no tener soluciones sensatas, mas en cambio te demuestran que muchas veces las respuestas más inesperadas y simples son las más acertadas, además de ayudarte con tu forma de ver los problemas más irreverentes e insólitos.",
    },
    {
      image: Imagenes.img3,
      title: "Análisis",
      text: "¿Te fascina entender el origen de las cosas, comprender el porqué de un proceso o a demostrar que eres un observador y un detallista? Esta área se especializa en mejorar tu deducción, presentarte situaciones en las que tengas que resolver problemas prácticos y ponerte a prueba en situaciones que requieran de tus habilidades como detective para, a su vez, mejorar tu forma de investigación.",
    },
    {
      image: Imagenes.img4,
      title: "Memoria",
      text: "¿Te cuesta recordar las cosas, necesitas repetirte una y otra vez lo que, se supone, debes memorizar o simplemente quieres ejercitar tus recuerdos para nunca olvidarte de nada? Esta área te mantiene bajo la presión necesaria para que practiques lo que acabas de aprender, te impida olvidar a corto plazo y permanecer atento y consciente de tu entorno en todo momento.",
    },
  ];

  return (
    <>
      <section
        className="bg-cover bg-center h-[100vh] flex justify-center items-center text-white p-5"
        style={{ backgroundImage: `url(${Imagenes.Logo})` }}
      >
        <h1 className="text-3xl m-0"></h1>
      </section>

      <section className="flex flex-wrap justify-center p-5 gap-4">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className={`bg-white rounded-lg shadow-md m-3 w-full sm:w-80 md:w-80 text-center overflow-hidden transition-transform duration-300 ${
              activeCard === index ? "transform scale-105" : ""
            }`}
            onClick={() => setActiveCard(activeCard === index ? null : index)}
            onMouseEnter={(e) => e.currentTarget.classList.add("shadow-lg")}
            onMouseLeave={(e) => e.currentTarget.classList.remove("shadow-lg")}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setActiveCard(activeCard === index ? null : index);
              }
            }}
            aria-expanded={activeCard === index}
            aria-label={card.title}
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-40 object-cover"
            />
            <h3 className="my-2">{card.title}</h3>
            {activeCard === index && (
              <p className="px-2 pb-2 text-gray-600">{card.text}</p>
            )}
          </div>
        ))}
      </section>

      <footer className="bg-gris text-white p-5 mt-10">
        <div className="container mx-auto text-center">
          <h2 className="text-lg mb-2">Síguenos en nuestras redes sociales</h2>
          <div className="flex justify-center space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              Facebook
            </a>
            <a
              href="https://x.com/Denko_SL"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              Twitter
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default LandingPage;
