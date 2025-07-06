import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface MEProps {
  volverAlMenu: () => void;
}

interface Pregunta {
  id: number;
  pregunta: string;
  imagen: string;
  opciones: string[];
  correcta: number;
}

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3000";

const ME: React.FC<MEProps> = ({ volverAlMenu }) => {
  const [preguntas, setPreguntas] = useState<Pregunta[]>([]);
  const [preguntasAleatorias, setPreguntasAleatorias] = useState<Pregunta[]>(
    []
  );
  const [indiceActual, setIndiceActual] = useState(0);
  const [marcador, setMarcador] = useState(0);
  const [mensaje, setMensaje] = useState("");
  const [juegoTerminado, setJuegoTerminado] = useState(false);
  const [tiempoRestante, setTiempoRestante] = useState(10);
  const [mostrandoImagen, setMostrandoImagen] = useState(true);

  const preguntaActual = preguntasAleatorias[indiceActual];

  // 🚀 Obtener preguntas desde el backend
  useEffect(() => {
    fetch(`${API_URL}/preguntas/area/3`) // Memoria
      .then((res) => res.json())
      .then((data) => {
        const mezcladas = data.sort(() => Math.random() - 0.5);
        setPreguntas(mezcladas);
        setPreguntasAleatorias(mezcladas);
      })
      .catch((err) => {
        console.error("Error al cargar preguntas:", err);
      });
  }, []);

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
      }, 5000);
    }
  }, [mostrandoImagen]);

  const manejarRespuesta = (index: number) => {
    if (juegoTerminado || !preguntaActual) return;

    if (index === preguntaActual.correcta) {
      setMarcador(marcador + 1);
      setMensaje("¡Correcto!");
      setTimeout(() => {
        setMensaje("");
        if (indiceActual < preguntasAleatorias.length - 1) {
          setIndiceActual(indiceActual + 1);
          setTiempoRestante(10);
          setMostrandoImagen(true);
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
    const nuevas = preguntas.sort(() => Math.random() - 0.5);
    setPreguntasAleatorias(nuevas);
    setIndiceActual(0);
    setMarcador(0);
    setMensaje("");
    setJuegoTerminado(false);
    setTiempoRestante(10);
    setMostrandoImagen(true);
  };

  // ⏳ Mostrar carga si no se han cargado preguntas
  if (!preguntaActual) {
    return (
      <div className="text-white text-2xl text-center mt-10">
        Cargando preguntas...
      </div>
    );
  }

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
