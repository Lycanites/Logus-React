import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Fiesta = ({ volverAlMenu }) => {
  // Estados del juego
  const [indiceActual, setIndiceActual] = useState(0);
  const [marcador, setMarcador] = useState(0);
  const [mensaje, setMensaje] = useState("");
  const [juegoTerminado, setJuegoTerminado] = useState(false);
  const [tiempoRestante, setTiempoRestante] = useState(10); // TIEMPO_MAXIMO
  const [mostrandoImagen, setMostrandoImagen] = useState(true); // Nuevo estado para mostrar la imagen

  const preguntas = [
    // Nuevas preguntas de tipo ad
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

  const mezclarPreguntas = () => preguntas.sort(() => Math.random() - 0.5);

  const [preguntasAleatorias, setPreguntasAleatorias] = useState(
    mezclarPreguntas()
  );

  const preguntaActual = preguntasAleatorias[indiceActual];

  useEffect(() => {
    let intervalo;
    if (!juegoTerminado) {
      intervalo = setInterval(() => {
        setTiempoRestante((prev) => {
          if (prev > 0) return prev - 1;
          clearInterval(intervalo);
          setJuegoTerminado(true);
          setMensaje("¡Se acabó el tiempo! Juego terminado.");
          return 0;
        });
      }, 1000);
    }
    return () => clearInterval(intervalo);
  }, [juegoTerminado]);

  useEffect(() => {
    if (mostrandoImagen) {
      setTimeout(() => {
        setMostrandoImagen(false);
      }, 5000); // Después de 5 segundos, muestra la pregunta
    }
  }, [mostrandoImagen]);

  const manejarRespuesta = (index) => {
    if (juegoTerminado) return;

    if (index === preguntaActual.correcta) {
      setMarcador(marcador + 1);
      setMensaje("¡Correcto!");
      setTimeout(() => {
        setMensaje("");
        if (indiceActual < preguntasAleatorias.length - 1) {
          setIndiceActual(indiceActual + 1);
          setTiempoRestante(10); // Reiniciar el tiempo
          setMostrandoImagen(true); // Mostrar nueva imagen
        } else {
          setJuegoTerminado(true);
        }
      }, 1000);
    } else {
      setMensaje("Respuesta incorrecta. Juego terminado.");
      setJuegoTerminado(true);
    }
  };

  const reiniciarJuego = () => {
    setPreguntasAleatorias(mezclarPreguntas());
    setIndiceActual(0);
    setMarcador(0);
    setMensaje("");
    setJuegoTerminado(false);
    setTiempoRestante(10); // Reiniciar tiempo
    setMostrandoImagen(true); // Mostrar imagen al reiniciar
  };

  return (
    <div className="bg-gradient-to-r from-pink-200 to-pink-300 h-[100vh] flex flex-col justify-center items-center text-white p-6">
      <h1 className="text-4xl font-bold text-pink-900 mb-6 font-cursive">
        Juego de Memoria
      </h1>

      <div className="w-full bg-pink-100 h-6 rounded-md overflow-hidden mb-6">
        <div
          className="h-full bg-pink-400 transition-all duration-1000 ease-linear"
          style={{ width: `${(tiempoRestante / 10) * 100}%` }}
        ></div>
      </div>

      {juegoTerminado ? (
        <div className="text-center text-pink-900">
          <h2 className="text-3xl mb-4">Puntuación final: {marcador}</h2>
          <button
            className="px-6 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-400 transition mr-4"
            onClick={reiniciarJuego}
          >
            Reiniciar Juego
          </button>
          
          <Link to={'/Gamemode'}> 
          <button
            className="px-6 py-3 bg-pink-600 text-white rounded-full hover:bg-pink-500 transition"
            onClick={volverAlMenu}
          >
            Volver al Menú
          </button>
          </Link>
        </div>
      ) : (
        <>
          {mostrandoImagen && !preguntaActual.esAdivinanza ? (
            <div className="text-center mb-6">
              <img
                src={preguntaActual.imagen}
                alt="Imagen"
                className="w-96 h-96 object-contain border-4 border-pink-500 rounded-lg shadow-lg"
              />
            </div>
          ) : (
            <>
              <div className="text-center">
                <h2 className="text-2xl font-semibold text-pink-800 mb-6 bg-white p-6 rounded-lg shadow-lg font-sans">
                  {preguntaActual.pregunta}
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {preguntaActual.opciones.map((opcion, index) => (
                  <button
                    key={index}
                    onClick={() => manejarRespuesta(index)}
                    className="bg-white text-pink-800 px-6 py-3 rounded-lg hover:bg-pink-100 transition"
                  >
                    {opcion}
                  </button>
                ))}
              </div>
            </>
          )}

          <div className="text-center mt-4 text-xl font-bold text-pink-400">
            {mensaje}
          </div>
        </>
      )}
    </div>
  );
};

export default Fiesta;
