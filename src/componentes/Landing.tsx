import React, { useState } from "react";
import Imagenes from "../assets/img/Imagenes";
import "./Landing.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Definición de la interfaz para las tarjetas
interface CardData {
  image: string;
  title: string;
  text: string;
  color: string;
}

const LandingPage: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const cardsData: CardData[] = [
    {
      image: Imagenes.img2,
      title: "Lectura",
      text: "¿Problemas para escribir una oración, para saber el significado de una palabra que oíste o intentando entender un texto importante? Esta área se dedica a la presentación de nuevas palabras, aumentando el vocabulario; a mejorar la ortografía, mostrando las maneras correctas de escribir y expresarse; y a retener información vital de un texto, mejorando la comprensión lectora.",
      color: "verde",
    },
    {
      image: Imagenes.img1,
      title: "Lógica",
      text: "¿Siempre quieres encontrar las respuestas más originales, pensar antes de actuar o tener una idea clara sobre lo que es correcto? Esta área se dedica a mantener tu mente pensante con situaciones que, en un primer lugar, parecen no tener soluciones sensatas, mas en cambio te demuestran que muchas veces las respuestas más inesperadas y simples son las más acertadas, además de ayudarte con tu forma de ver los problemas más irreverentes e insólitos.",
      color: "bg-red-500",
    },
    {
      image: Imagenes.img3,
      title: "Análisis",
      text: "¿Te fascina entender el origen de las cosas, comprender el porqué de un proceso o a demostrar que eres un observador y un detallista? Esta área se especializa en mejorar tu deducción, presentarte situaciones en las que tengas que resolver problemas prácticos y ponerte a prueba en situaciones que requieran de tus habilidades como detective para, a su vez, mejorar tu forma de investigación.",
      color: "bg-green-500",
    },
    {
      image: Imagenes.img4,
      title: "Memoria",
      text: "¿Te cuesta recordar las cosas, necesitas repetirte una y otra vez lo que, se supone, debes memorizar o simplemente quieres ejercitar tus recuerdos para nunca olvidarte de nada? Esta área te mantiene bajo la presión necesaria para que practiques lo que acabas de aprender, te impida olvidar a corto plazo y permanecer atento y consciente de tu entorno en todo momento.",
      color: "bg-yellow-500",
    },
    {
      image: Imagenes.img5,
      title: "Cultura",
      text: "¿Te cuesta recordar las cosas, necesitas repetirte una y otra vez lo que, se supone, debes memorizar o simplemente quieres ejercitar tus recuerdos para nunca olvidarte de nada? Esta área te mantiene bajo la presión necesaria para que practiques lo que acabas de aprender, te impida olvidar a corto plazo y permanecer atento y consciente de tu entorno en todo momento.",
      color: "bg-yellow-500",
    },
  ];

  return (
    <>
      {/* Video de presentación */}
      <section className="relative h-[90vh] flex justify-center items-center">
        <video
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover"
        >
          <source src="/assets/videos/gameplay.mp4" type="video/mp4" />
        </video>
        <div className="relative bg-black bg-opacity-50 p-5 rounded-lg text-white text-center">
          <h1 className="text-4xl font-bold">¡Explora el mundo de LOGUS!</h1>
          <p className="mt-2 text-lg">
            Desafía tu mente con juegos estimulantes.
          </p>
        </div>
      </section>

      {/* Carrusel de imágenes */}
      <section className="h-[100vh] flex justify-center items-center">
        <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
          {cardsData.map((card, index) => (
            <div key={index}>
              <img
                src={card.image}
                alt={card.title}
                className="h-[100vh] object-cover w-full"
              />
              <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-0 text-white px-4 py-2 rounded-lg text-6xl font-semibold font-CreamBeige">
                {card.title}
              </div>
            </div>
          ))}
        </Carousel>
      </section>

      {/* Tarjetas de información */}
      <section className="flex flex-wrap justify-center p-5 gap-4">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className={`rounded-lg shadow-md m-3 w-full sm:w-80 md:w-80 text-center overflow-hidden transition-transform duration-300 ${card.color} text-white`}
            onClick={() => setActiveCard(activeCard === index ? null : index)}
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
            <h3 className="my-2 text-lg font-bold">{card.title}</h3>
            {activeCard === index && <p className="px-2 pb-2">{card.text}</p>}
          </div>
        ))}
      </section>

      <section>
        <div className="h-[80vh] bg-slate-500">
          <h1 className="font-4xl">Nuestra Mision</h1>
          <p></p>
        </div>
      </section>
      <section>
        <div className="h-[80vh] bg-slate-600">
          <h1>Nuestra Vision</h1>
          <p></p>
        </div>
      </section>
      <section>
        <div className="h-[80vh] bg-slate-700">
          <p></p>
        </div>
      </section>
      <section></section>
      <section></section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-5 mt-10">
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
