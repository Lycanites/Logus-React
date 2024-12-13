import React, { useState, useEffect } from "react";

const Logica = ({ volverAlMenu }) => {
  const [indiceActual, setIndiceActual] = useState(0);
  const [marcador, setMarcador] = useState(0);
  const [mensaje, setMensaje] = useState("");
  const [juegoTerminado, setJuegoTerminado] = useState(false);
  const [tiempoRestante, setTiempoRestante] = useState(10); // Tiempo máximo

  const preguntas = [
    {
      pregunta: "¿Cuántos huevos duros podría comerse una persona aún con el estómago vacío?",
      opciones: ["Uno", "Ninguno", "Los más posibles", "Los que quepan en su estómago"],
      correcta: 0,
    },
    {
      pregunta: "¿Cómo un hombre se podría casar con la hermana de su viuda?",
      opciones: ["No puede", "Por lo civil", "Con anillos", "Es la misma persona"],
      correcta: 0,
    },
    {
      pregunta: "¿Cuántos nudillos tiene alguien con todos los dedos en su mano?",
      opciones: ["Cero", "5", "10", "20"],
      correcta: 2,
    },
    {
      pregunta: "Imagina estar en una habitación oscura ¿cuál es la mejor salida?",
      opciones: ["La luz", "La puerta", "La imaginación", "La oscuridad"],
      correcta: 1,
    },
    {
      pregunta: "3 + 3 x 3 + 3 = ? ¿Cuál es el resultado de la operación?",
      opciones: ["21", "36", "15", "12"],
      correcta: 2,
    },
    {
      pregunta: "Antes de descubrirse que el Monte Everest es la montaña más alta ¿cuál era anteriormente?",
      opciones: ["Monte Everest", "Aún no había", "La segunda montaña más alta", "La montaña menos alta"],
      correcta: 0,
    },
    {
      pregunta: "¿Qué ocurre cuando una fuerza incalculable choca con un cuerpo inamovible?",
      opciones: [
        "El cuerpo corresponde a la fuerza",
        "Ambos se mueven en direcciones opuestas",
        "No existe la fuerza",
        "Nada",
      ],
      correcta: 3,
    },
    {
      pregunta: "¿Por qué un barbero prefiere cortarle el pelo a diez hombres antes que a una sola mujer?",
      opciones: [
        "Porque solo acepta a hombres",
        "Porque la mujer no paga",
        "Porque gana más con los hombres",
        "Porque la mujer llega tarde",
      ],
      correcta: 2,
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
    <div className="bg-gradient-to-r from-purple-300 to-purple-500 h-[100vh] flex flex-col justify-center items-center text-white p-6">
      <h1 className="text-4xl font-bold text-purple-900 mb-6 font-cursive">Juego de Lógica</h1>

      <div className="w-full bg-purple-100 h-6 rounded-md overflow-hidden mb-6">
        <div
          className="h-full bg-purple-600 transition-all duration-1000 ease-linear"
          style={{ width: `${(tiempoRestante / 10) * 100}%` }}
        ></div>
      </div>

      {juegoTerminado ? (
        <div className="text-center text-purple-900">
          <h2 className="text-3xl mb-4">Puntuación final: {marcador}</h2>
          <button
            className="px-6 py-3 bg-purple-700 text-white rounded-full hover:bg-purple-600 transition mr-4"
            onClick={reiniciarJuego}
          >
            Reiniciar Juego
          </button>
          <button
            className="px-6 py-3 bg-purple-800 text-white rounded-full hover:bg-purple-700 transition"
            onClick={volverAlMenu}
          >
            Volver al Menú
          </button>
        </div>
      ) : (
        <>
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-purple-900 mb-6 bg-white p-6 rounded-lg shadow-lg font-sans">
              {preguntaActual.pregunta}
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {preguntaActual.opciones.map((opcion, index) => (
              <button
                key={index}
                onClick={() => manejarRespuesta(index)}
                className="bg-white text-purple-800 px-6 py-3 rounded-lg hover:bg-purple-200 transition"
              >
                {opcion}
              </button>
            ))}
          </div>

          <div className="text-center mt-4 text-xl font-bold text-purple-400">
            {mensaje}
          </div>
        </>
      )}
    </div>
  );
};

export default Logica;
