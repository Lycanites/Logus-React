import React, { useState, useEffect } from "react";

const Analisis = ({ volverAlMenu }) => {
  // Estados del juego
  const [indiceActual, setIndiceActual] = useState(0);
  const [marcador, setMarcador] = useState(0);
  const [mensaje, setMensaje] = useState("");
  const [juegoTerminado, setJuegoTerminado] = useState(false);
  const [tiempoRestante, setTiempoRestante] = useState(10); // TIEMPO_MAXIMO

  const preguntas = [
    {
      pregunta: "Me ves en el agua, pero nunca me mojo.",
      opciones: ["El reflejo", "El sol"],
      correcta: 0,
    },
    {
      pregunta: "No es camino, pero anda, no es campana, pero suena.",
      opciones: ["El reloj", "El viento"],
      correcta: 0,
    },
    {
      pregunta: "Tiene forma de anillo y agua en su interior, todos te lo ofrecen como prenda de amor.",
      opciones: ["La alianza", "La copa"],
      correcta: 0,
    },
    {
      pregunta: "En medio del mar está y a la orilla no puede llegar.",
      opciones: ["La estrella de mar", "El delfín"],
      correcta: 0,
    },
    {
      pregunta: "Tiene hojas, pero no es árbol, tiene lomo, pero no es animal.",
      opciones: ["El libro", "El cuaderno"],
      correcta: 0,
    },
    {
      pregunta: "Pasa por ciudades y campos, pero nunca se mueve.",
      opciones: ["El camino", "El río"],
      correcta: 0,
    },
    {
      pregunta: "Si me miras te miraré, si me tocas te tocaré, pero si te ríes, yo también lo haré.",
      opciones: ["El espejo", "La sombra"],
      correcta: 0,
    },
    {
      pregunta: "Lleno de agujeros y aun así guarda agua.",
      opciones: ["La esponja", "El colador"],
      correcta: 0,
    },
    {
      pregunta: "Es redondo y no es queso, rueda sin ser balón.",
      opciones: ["El sol", "La luna"],
      correcta: 0,
    },
    {
      pregunta: "Vuelo sin alas, lloro sin ojos.",
      opciones: ["La nube", "El viento"],
      correcta: 0,
    },
  ];

  const mezclarPreguntas = () => preguntas.sort(() => Math.random() - 0.5);

  const [preguntasAleatorias, setPreguntasAleatorias] = useState(mezclarPreguntas());

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
  };

  return (
    <div className="bg-gradient-to-r from-blue-200 to-blue-300 h-[100vh] flex flex-col justify-center items-center text-white p-6">
      <h1 className="text-4xl font-bold text-blue-900 mb-6 font-cursive">Juego de Análisis</h1>

      <div className="w-full bg-blue-100 h-6 rounded-md overflow-hidden mb-6">
        <div
          className="h-full bg-blue-400 transition-all duration-1000 ease-linear"
          style={{ width: `${(tiempoRestante / 10) * 100}%` }}
        ></div>
      </div>

      {juegoTerminado ? (
        <div className="text-center text-blue-900">
          <h2 className="text-3xl mb-4">Puntuación final: {marcador}</h2>
          <button
            className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-400 transition mr-4"
            onClick={reiniciarJuego}
          >
            Reiniciar Juego
          </button>
          <button
            className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition"
            onClick={volverAlMenu}
          >
            Volver al Menú
          </button>
        </div>
      ) : (
        <>
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-blue-800 mb-6 bg-white p-6 rounded-lg shadow-lg font-sans">
              {preguntaActual.pregunta}
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {preguntaActual.opciones.map((opcion, index) => (
              <button
                key={index}
                onClick={() => manejarRespuesta(index)}
                className="bg-white text-blue-800 px-6 py-3 rounded-lg hover:bg-blue-100 transition"
              >
                {opcion}
              </button>
            ))}
          </div>

          <div className="text-center mt-4 text-xl font-bold text-blue-400">
            {mensaje}
          </div>
        </>
      )}
    </div>
  );
};

export default Analisis;
