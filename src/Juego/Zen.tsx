import React, { useState } from "react";
import { Link } from "react-router-dom";

const Memoria = ({ volverAlMenu }) => {
  // Estados del juego
  const [indiceActual, setIndiceActual] = useState(0);
  const [marcador, setMarcador] = useState(0);
  const [mensaje, setMensaje] = useState("");
  const [juegoTerminado, setJuegoTerminado] = useState(false);

  const preguntas = [
    // Nuevas preguntas de tipo adivinanza
    {
      pregunta: "Me ves en el agua, pero nunca me mojo.",
      opciones: ["El reflejo", "El sol"],
      correcta: 0,
      esAdivinanza: true, // Indicamos que es una adivinanza
    },
    {
      pregunta: "No es camino, pero anda, no es campana, pero suena.",
      opciones: ["El reloj", "El viento"],
      correcta: 0,
      esAdivinanza: true,
    },
    {
      pregunta:
        "Tiene forma de anillo y agua en su interior, todos te lo ofrecen como prenda de amor.",
      opciones: ["La alianza", "La copa"],
      correcta: 0,
      esAdivinanza: true,
    },
    {
      pregunta: "En medio del mar está y a la orilla no puede llegar.",
      opciones: ["La estrella de mar", "El delfín"],
      correcta: 0,
      esAdivinanza: true,
    },
    {
      pregunta:
        "Es un instrumento musical de cuerdas que se toca con un arco, ¿qué es?",
      opciones: ["Guitarra", "Violín", "Piano", "Arpa"],
      correcta: 1, // Violín
      esAdivinanza: true,
    },
    {
      pregunta:
        "Famoso por su obra surrealista, ¿quién pintó 'La persistencia de la memoria'?",
      opciones: [
        "Pablo Picasso",
        "Salvador Dalí",
        "Francisco Goya",
        "Diego Rivera",
      ],
      correcta: 1, // Salvador Dalí
      esAdivinanza: true,
    },
    {
      pregunta:
        "Una sirena, famosa por su voz, ¿quién es la protagonista de este cuento?",
      opciones: [
        "La sirenita",
        "Ariel",
        "La reina de las olas",
        "La diosa Atenea",
      ],
      correcta: 0, // La sirenita
      esAdivinanza: true,
    },
    {
      pregunta: "El Quijote es una obra de este escritor, ¿quién la escribió?",
      opciones: [
        "Miguel de Cervantes",
        "Gabriel García Márquez",
        "Federico García Lorca",
        "Antonio Machado",
      ],
      correcta: 0, // Miguel de Cervantes
      esAdivinanza: true,
    },
    {
      pregunta:
        "Este instrumento musical de viento se toca con los dedos, ¿qué es?",
      opciones: ["Flauta", "Saxofón", "Trombón", "Clarín"],
      correcta: 0, // Flauta
      esAdivinanza: true,
    },
    {
      pregunta:
        "El monumento con cuerpo de león y cabeza humana es conocido como...",
      opciones: ["La esfinge", "El obelisco", "Las pirámides", "El faraón"],
      correcta: 0, // La esfinge
      esAdivinanza: true,
    },
    {
      pregunta: "Una estructura que permite observar las estrellas, ¿qué es?",
      opciones: ["El telescopio", "El faro", "El observatorio", "La cúpula"],
      correcta: 2, // El observatorio
      esAdivinanza: true,
    },
    {
      pregunta:
        "Este personaje es conocido por su sombrero de copa alta, ¿quién es?",
      opciones: [
        "Charlie Chaplin",
        "Albert Einstein",
        "Napoleón Bonaparte",
        "Abraham Lincoln",
      ],
      correcta: 3, // Abraham Lincoln
      esAdivinanza: true,
    },
    {
      pregunta:
        "El río más famoso de Egipto, conocido por su importancia histórica es...",
      opciones: ["El Nilo", "El Amazonas", "El Yangtsé", "El Ganges"],
      correcta: 0, // El Nilo
      esAdivinanza: true,
    },
    {
      pregunta:
        "Este pueblo antiguo habitó la región de Tenochtitlán, ¿quiénes fueron?",
      opciones: ["Los mayas", "Los aztecas", "Los incas", "Los toltecas"],
      correcta: 1, // Los aztecas
      esAdivinanza: true,
    },
    {
      pregunta: "La obra 'Hamlet' fue escrita por...",
      opciones: [
        "William Shakespeare",
        "Gabriel García Márquez",
        "Federico García Lorca",
        "Jane Austen",
      ],
      correcta: 0, // William Shakespeare
      esAdivinanza: true,
    },
    {
      pregunta:
        "Una estructura construida para celebrar victorias militares, ¿qué es?",
      opciones: [
        "Un puente",
        "Un templo",
        "Un arco de triunfo",
        "Una pirámide",
      ],
      correcta: 2, // Un arco de triunfo
      esAdivinanza: true,
    },
    {
      pregunta: "La gran muralla más famosa del mundo está en...",
      opciones: ["Estados Unidos", "México", "China", "India"],
      correcta: 2, // China
      esAdivinanza: true,
    },
    {
      pregunta:
        "Este físico es famoso por su teoría de la relatividad, ¿quién es?",
      opciones: [
        "Isaac Newton",
        "Nikola Tesla",
        "Albert Einstein",
        "Galileo Galilei",
      ],
      correcta: 2, // Albert Einstein
      esAdivinanza: true,
    },
    {
      pregunta:
        "Este arquitecto italiano diseñó la cúpula de la Basílica de San Pedro, ¿quién fue?",
      opciones: [
        "Miguel Ángel",
        "León Battista Alberti",
        "Filippo Brunelleschi",
        "Giovanni Lorenzo Bernini",
      ],
      correcta: 0, // Miguel Ángel
      esAdivinanza: true,
    },
    {
      pregunta:
        "Un plato tradicional italiano hecho con pasta y carne, ¿qué es?",
      opciones: ["Pizza", "Lasagna", "Paella", "Sushi"],
      correcta: 1, // Lasagna
      esAdivinanza: true,
    },
    {
      pregunta:
        "Este escritor británico creó el mundo de 'Harry Potter', ¿quién es?",
      opciones: [
        "J.R.R. Tolkien",
        "George R.R. Martin",
        "J.K. Rowling",
        "C.S. Lewis",
      ],
      correcta: 2, // J.K. Rowling
      esAdivinanza: true,
    },
    {
      pregunta:
        "Este arquitecto diseñó el Museo Guggenheim en Nueva York, ¿quién es?",
      opciones: [
        "Frank Lloyd Wright",
        "Le Corbusier",
        "Antoni Gaudí",
        "Zaha Hadid",
      ],
      correcta: 0, // Frank Lloyd Wright
      esAdivinanza: true,
    },
    {
      pregunta:
        "Es el continente conocido por su gran diversidad cultural, ¿qué continente es?",
      opciones: ["Asia", "África", "América", "Europa"],
      correcta: 1, // África
      esAdivinanza: true,
    },
    {
      pregunta: "El pintor conocido por 'La noche estrellada' fue...",
      opciones: [
        "Claude Monet",
        "Pablo Picasso",
        "Vincent van Gogh",
        "Salvador Dalí",
      ],
      correcta: 2, // Vincent van Gogh
      esAdivinanza: true,
    },
    {
      pregunta: "Esta famosa pirámide se encuentra en Egipto, ¿cuál es?",
      opciones: [
        "La pirámide de Giza",
        "La pirámide de Teotihuacán",
        "La pirámide de Chichén Itzá",
        "La pirámide de Kukulcán",
      ],
      correcta: 0, // La pirámide de Giza
      esAdivinanza: true,
    },
    {
      pregunta:
        "Este pintor renacentista es conocido por su obra 'La última cena', ¿quién es?",
      opciones: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Donatello"],
      correcta: 0, // Leonardo da Vinci
      esAdivinanza: true,
    },

    // Preguntas anteriores con imágenes
    {
      pregunta:
        "De acuerdo con las posiciones, ¿en qué número se encontraba la fresa?",
      imagen: "/imagenes/m_ej1.png", // Ruta de la imagen
      opciones: ["2", "9", "4", "8"],
      correcta: 1,
    },
    {
      pregunta:
        "De acuerdo con las posiciones, ¿en qué número se encontraba la manzana?",
      imagen: "/imagenes/m_ej2.png", // Ruta de la imagen
      opciones: ["4", "3", "8", "6"],
      correcta: 2,
    },
    {
      pregunta:
        "De acuerdo con las posiciones, ¿en qué número se encontraba el globo?",
      imagen: "/imagenes/m_ej3.png", // Ruta de la imagen
      opciones: ["7", "1", "3", "5"],
      correcta: 0,
    },
    {
      pregunta:
        "De acuerdo con las posiciones, ¿en qué número se encontraba el oso?",
      imagen: "/imagenes/m_ej5.png", // Ruta de la imagen
      opciones: ["1", "4", "9", "6"],
      correcta: 2,
    },
    {
      pregunta:
        "De acuerdo con las posiciones, ¿en qué número se encontraba el perro?",
      imagen: "/imagenes/m_ej6.png", // Ruta de la imagen
      opciones: ["9", "7", "4", "1"],
      correcta: 1,
    },
    {
      pregunta: "¿Qué objeto era pareja con la naranja?",
      imagen: "/imagenes/m_ej7.png", // Ruta de la imagen
      opciones: ["El auto", "El barco", "El camión", "La moto"],
      correcta: 0,
    },
    {
      pregunta: "¿Qué objeto era pareja con la pera?",
      imagen: "/imagenes/m_ej8.png", // Ruta de la imagen
      opciones: ["El barco", "El camión", "El avión", "La moto"],
      correcta: 2,
    },
    {
      pregunta: "¿Qué objeto era pareja con el gato?",
      imagen: "/imagenes/m_ej9.png", // Ruta de la imagen
      opciones: ["Un helado", "La pelota", "Un trébol", "La sombrilla"],
      correcta: 2,
    },
    {
      pregunta: "¿Qué objeto era pareja con la mariposa?",
      imagen: "/imagenes/m_ej10.png", // Ruta de la imagen
      opciones: ["El perro", "El león", "La pelota", "El girasol"],
      correcta: 3,
    },
    {
      pregunta:
        "De acuerdo con las posiciones, ¿en qué número se encontraba el barco?",
      imagen: "/imagenes/m_ej4.png", // Ruta de la imagen
      opciones: ["6", "2", "9", "7"],
      correcta: 3,
    },
  ];

  const mezclarPreguntas = () => {
    return preguntas.sort(() => Math.random() - 0.5);
  };

  const preguntaActual = preguntas[indiceActual];

  const manejarRespuesta = (index) => {
    if (index === preguntaActual.correcta) {
      setMarcador(marcador + 1);
      setMensaje("¡Correcto!");
      setTimeout(() => {
        setMensaje("");
        if (indiceActual < preguntas.length - 1) {
          setIndiceActual(indiceActual + 1);
        } else {
          setJuegoTerminado(true);
        }
      }, 1000);
    } else {
      setMensaje("Respuesta incorrecta. Sigue jugando.");
    }
  };

  const terminarJuego = () => {
    setJuegoTerminado(true);
  };

  return (
    <div className="bg-gradient-to-r from-blue-300 to-pink-300 h-[100vh] flex flex-col justify-center items-center text-white p-6">
      <h1 className="text-4xl font-bold text-white mb-6 font-cursive">
        🌱Zen🌱
      </h1>

      {juegoTerminado ? (
        <div className="text-center">
          <h2 className="text-3xl mb-4">Resolviste: {marcador}</h2>
          <Link to={"/Gamemode"}>
            <button
              className="px-6 py-3 bg-teal-500 text-white rounded-full hover:bg-teal-400 transition mr-4"
              onClick={volverAlMenu}
            >
              Volver al Menú
            </button>
          </Link>
        </div>
      ) : (
        <>
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-white mb-6">
              {preguntaActual.pregunta}
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            {preguntaActual.opciones.map((opcion, index) => (
              <button
                key={index}
                onClick={() => manejarRespuesta(index)}
                className="bg-white text-blue-500 px-6 py-3 rounded-lg hover:bg-blue-100 transition"
              >
                {opcion}
              </button>
            ))}
          </div>

          <div className="text-center text-xl font-bold text-white mb-4">
            {mensaje}
          </div>

          <button
            className="px-6 py-3 bg-red-500 text-white rounded-full hover:bg-red-400 transition mt-4"
            onClick={terminarJuego}
          >
            Terminar Juego
          </button>
        </>
      )}
    </div>
  );
};

export default Memoria;
