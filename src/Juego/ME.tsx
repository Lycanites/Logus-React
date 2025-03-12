import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface MEProps {
  volverAlMenu: () => void; // Indica que volverAlMenu es una función que no recibe argumentos y no devuelve nada
}

const ME: React.FC<MEProps> = ({ volverAlMenu }) => {
  // Estados del juego
  const [indiceActual, setIndiceActual] = useState(0);
  const [marcador, setMarcador] = useState(0);
  const [mensaje, setMensaje] = useState("");
  const [juegoTerminado, setJuegoTerminado] = useState(false);
  const [tiempoRestante, setTiempoRestante] = useState(10); // TIEMPO_MAXIMO
  const [mostrandoImagen, setMostrandoImagen] = useState(true); // Nuevo estado para mostrar la imagen

  const preguntas = [
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
    let intervalo: ReturnType<typeof setInterval>;
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

  const manejarRespuesta = (index: number) => {
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
    <div className="bg-gradient-to-r from-rosa to-rosahover h-[100vh] flex flex-col justify-center items-center text-white p-6">
      <h1 className="text-4xl font-CreamBeige text-black mb-6 font-cursive">
        Memoria
      </h1>

      <div className="w-full bg-rosa h-6 rounded-md overflow-hidden mb-6 border-4 border-rosaborder">
        <div
          className="h-full bg-rosahover transition-all duration-1000 ease-linear"
          style={{ width: `${(tiempoRestante / 10) * 100}%` }}
        ></div>
      </div>

      {juegoTerminado ? (
        <div className="text-center text-white">
          <h2 className="text-3xl mb-4">Puntuación final: {marcador}</h2>
          <div className="flex justify-center gap-4">
            <button
              className="px-12 py-2 bg-naranja text-xl font-semibold text-white rounded-3xl hover:bg-naranjahover border-4 border-naranjaborder transition-colors shadow-2xl"
              onClick={reiniciarJuego}
            >
              Reiniciar Juego
            </button>

            <Link to="/Menu">
              <button className="px-12 py-2 bg-naranja text-xl font-semibold text-white rounded-3xl hover:bg-naranjahover border-4 border-naranjaborder transition-colors shadow-2xl">
                Volver al Menú
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <>
          {mostrandoImagen ? (
            <div className="text-center mb-6">
              <img
                src={preguntaActual.imagen}
                alt="Imagen"
                className="w-96 h-96 object-contain border-8 border-rosaborder rounded-lg shadow-lg"
              />
            </div>
          ) : (
            <>
              <div className="text-center">
                <h2 className="text-2xl font-sans text-black mb-6 bg-white p-6 rounded-lg shadow-lg border-8 border-rosaborder">
                  {preguntaActual.pregunta}
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {preguntaActual.opciones.map((opcion, index) => (
                  <button
                    key={index}
                    onClick={() => manejarRespuesta(index)}
                    className="bg-white text-black font-sans font-semibold px-6 py-3 rounded-lg hover:bg-rosahover border-4 border-rosaborder transition"
                  >
                    {opcion}
                  </button>
                ))}
              </div>

              <div className="text-center mt-4 text-xl font-CreamBeige text-black">
                {mensaje}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default ME;
