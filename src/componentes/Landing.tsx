import React from "react";
import Imagenes from "../assets/img/Imagenes"; // Asegúrate de que la ruta sea correcta
import "./Landing.css";

// Definición de la interfaz para las tarjetas
interface CardData {
  image: string;
  title: string;
  text: string;
}

const LandingPage: React.FC = () => {
  const cardsData: CardData[] = [
    {
      image: Imagenes.img2, // Usar la imagen importada
      title: "Lectura",
      text: "¿Problemas para escribir una oración, para saber el significado de una palabra que oíste o intentando entender un texto importante? Esta área se dedica a la presentación de nuevas palabras, aumentando el vocabulario; a mejorar la ortografía, mostrando las maneras correctas de escribir y expresarse; y a retener información vital de un texto, mejorando la comprensión lectora. Aquí se pueden encontrar ejercicios relacionados con textos, palabras y reglas ortográficas que permiten al usuario entretenerse mientras atiende lecciones que le permiten mejorar su manera de expresarse cotidianamente.",
    },
    {
      image: Imagenes.img1, // Usar la imagen importada
      title: "Logica",
      text: "¿Siempre quieres encontrar las respuestas más originales, pensar antes de actuar o tener una idea clara sobre lo que es correcto? Esta área se dedica a mantener tu mente pensante con situaciones que, en un primer lugar, parecen no tener soluciones sensatas, mas en cambio te demuestran que muchas veces las respuestas más inesperadas y simples son las más acertadas, además de ayudarte con tu forma de ver los problemas más irreverentes e insólitos. Aquí se encuentran ejercicios orientados a desarrollar tu creatividad, originalidad y mentalidad para desenmarañar acertijos, resolver rompecabezas y tener respuestas únicas para lo que otros no pueden siquiera imaginar.",
    },
    {
      image: Imagenes.img3, // Usar la imagen importada
      title: "Analisis",
      text: "¿Te fascina entender el origen de las cosas, comprender el porqué de un proceso o a demostrar que eres un observador y un detallista? Esta área se especializa en mejorar tu deducción, presentarte situaciones en las que tengas que resolver problemas prácticos y ponerte a prueba en situaciones que requieran de tus habilidad como detective para, a su vez, mejorar tu forma de investigación. Aquí se pueden encontrar ejercicios que demandan ingenio, intuición y atención para resolver problemas misteriosos, encontrar objetos perdidos y tomar decisiones inteligentes.",
    },
    {
      image: Imagenes.img4, // Usar la imagen importada
      title: "Memoria",
      text: "¿Te cuesta recordar las cosas, necesitas repetirte una y otra vez lo que, se supone, debes memorizar o simplemente quieres ejercitar tus recuerdos para nunca olvidarte de nada? Esta área te mantiene bajo la presión necesaria para que practiques lo que acabas de aprender, te impida olvidar a corto plazo y permanecer atento y consciente de tu entorno en todo momento. Aquí se encuentran ejercicios destinados al entrenamiento de tu capacidad para retener datos importantes en una situación estimulante, empezando con juegos entretenidos de memoramas, iconografía y reconocimiento de imágenes.",
    },
  ];

  return (
    <>
      <section
        className="bg-cover bg-center h-[88vh] flex justify-center items-center text-white p-5"
        style={{ backgroundImage: `url(${Imagenes.img1})` }} // Usar una imagen como fondo
      >
        <h1 className="text-3xl m-0">Bienvenido a Nuestra Página</h1>
      </section>
      <section className="flex flex-wrap justify-center p-5">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md m-3 w-80 text-center overflow-hidden"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-40 object-cover"
            />
            <h3 className="my-2">{card.title}</h3>
            <p className="px-2 pb-2 text-gray-600">{card.text}</p>
          </div>
        ))}
      </section>
    </>
  );
};

export default LandingPage;
