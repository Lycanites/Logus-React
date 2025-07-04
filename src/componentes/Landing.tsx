import React, { useState } from "react";
import Imagenes from "../assets/img/Imagenes";
import "./Landing.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import * as FaIcons from "react-icons/fa";
import Pinky from "../assets/img/Pinky_(solo).jpg";
import Sunny from "../assets/img/Sunny_(solo).jpg";
import Cultura from "../assets/img/Cultura.png";

// Definición de la interfaz para las tarjetas
interface CardData {
  image: string;
  title: string;
  text: string;
  color: string;
}

const LandingPage: React.FC = () => {
  const cardsData: CardData[] = [
    {
      image: Imagenes.img2,
      title: "Lectura",
      text: "¿Problemas para escribir una oración, para saber el significado de una palabra que oíste o intentando entender un texto importante? Esta área se dedica a la presentación de nuevas palabras, aumentando el vocabulario; a mejorar la ortografía, mostrando las maneras correctas de escribir y expresarse; y a retener información vital de un texto, mejorando la comprensión lectora.",
      color: "bg-C1",
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
      color: "bg-C1",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // solo se anima una vez

  return (
    <>
      {/* Video de presentación queda para una proxima actualizacion
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
      </section> */}

      {/* Nuevo */}
      <section>
        <div className="h-[100vh] bg-gray-700 flex items-center justify-end p-10">
          <div>
            <img src={Cultura} alt="Cultura_img" />
          </div>
          <motion.div
            className="text-right"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-4xl font-bold text-yellow-400 font-CreamBeige">
              ¡NUEVO!
            </p>
            <h2 className="text-3xl font-semibold text-white mt-4">
              Área de Cultura desbloqueada
            </h2>
            <p className="text-white mt-2 max-w-md">
              Explora temas fundamentales del conocimiento general, mejora tu
              capacidad para reconocer el contexto histórico, geográfico, social
              y científico que te rodea. ¿Qué tanto sabes del mundo en el que
              vives?
            </p>
          </motion.div>
        </div>
      </section>

      {/* Carrusel de imágenes */}
      <section className="h-[100vh] flex justify-center items-center">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          showArrows={true}
          interval={6000}
        >
          {cardsData.map((card, index) => (
            <div key={index} className="relative h-[100vh]">
              <img
                src={card.image}
                alt={card.title}
                className="h-full object-cover w-full"
              />

              {/* Texto animado dentro del carrusel */}
              <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-60 text-white px-8 py-6 rounded-xl max-w-2xl text-center"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h3 className="text-4xl font-semibold mb-2 font-CreamBeige">
                  {card.title}
                </h3>
                <p className="text-base">{card.text}</p>
              </motion.div>
            </div>
          ))}
        </Carousel>
      </section>

      {/* 💥 Sección motivacional #1 */}
      <section>
        <div className="h-[80vh] bg-gradient-to-r from-yellow-400 to-pink-800 flex items-center justify-between px-10">
          <img
            src={Sunny}
            alt="Personaje 2"
            className="w-1/4 hidden md:block"
          />

          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="text-center max-w-2xl text-white"
          >
            <h1 className="text-8xl font-bold mb-4">¡APRENDER</h1>
            <h2 className="text-2xl ">nunca fue tan épico!</h2>
            <p className="text-lg">
              En Logus, cada partida te transforma. Reta tu mente, desbloquea
              mundos y únete a la aventura.
            </p>
          </motion.div>
          <img
            src={Pinky}
            alt="Personaje 2"
            className="w-1/4 hidden md:block"
          />
        </div>
      </section>

      {/* 💡 Sección motivacional #2 */}
      <section>
        <div className="h-[80vh] bg-gradient-to-r from-yellow-400 to-red-500 flex flex-col justify-center items-center text-center p-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="text-center max-w-2xl text-white"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              ¡Activa tu mente!
            </h2>
            <p className="text-gray-800 text-lg max-w-xl">
              No es solo un juego... es una aventura para tu cerebro. ¿Estás
              listo para resolver acertijos, memorizar pistas y superar tus
              propios límites? ¡Logus te espera!
            </p>
            <button className="mt-6 px-6 py-3 bg-gray-900 text-white rounded-full text-lg hover:bg-gray-800 transition">
              Jugar ahora
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 mt-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl font-semibold mb-4">
            Síguenos en nuestras redes sociales
          </h2>
          <div className="flex justify-center space-x-6 mb-6 text-2xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-blue-400 transition"
            >
              <FaIcons.FaFacebook />
            </a>
            <a
              href="https://x.com/Denko_SL"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-blue-300 transition"
            >
              <FaIcons.FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-pink-400 transition"
            >
              <FaIcons.FaInstagram />
            </a>
          </div>

          <div className="mt-4">
            <a
              href="/Denko"
              className="inline-flex items-center text-sm hover:underline hover:text-gray-300"
            >
              <FaIcons.FaInfoCircle className="mr-2" /> Acerca de Denko
            </a>
          </div>

          <p className="text-sm mt-6 text-gray-400">
            © 2025 Denko Studios. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </>
  );
};

export default LandingPage;
