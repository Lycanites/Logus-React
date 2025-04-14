// JuegoLectura.tsx
import React, { useEffect, useState } from "react";

const ejercicios = [
  {
    pregunta: "Verde es a hierba como amarillo es a:",
    opciones: ["Papel", "Plátano", "Árbol", "Libro"],
    correcta: 1,
  },
  {
    pregunta: "La relación entre sol y luz es como la relación entre:",
    opciones: [
      "Agua y sed",
      "Luna y noche",
      "Fuego y calor",
      "Tierra y plantas",
    ],
    correcta: 2,
  },
  {
    pregunta: "Si correr es a cansancio, entonces estudiar es a:",
    opciones: ["Examen", "Biblioteca", "Aprendizaje", "Profesor"],
    correcta: 2,
  },
];

function JuegoLectura() {
  const [preguntasAleatorias, setPreguntasAleatorias] = useState([
    ...ejercicios,
  ]);
  const [indiceActual, setIndiceActual] = useState(0);
  const [marcador, setMarcador] = useState(0);
  const [mensaje, setMensaje] = useState("");
  const [juegoTerminado, setJuegoTerminado] = useState(false);
  const [tiempoRestante, setTiempoRestante] = useState(10);
  const [vidas, setVidas] = useState(3);

  useEffect(() => {
    const temporizador = setInterval(() => {
      if (tiempoRestante > 0) {
        setTiempoRestante((prev) => prev - 1);
      } else {
        perderVida("Tiempo agotado");
      }
    }, 1000);
    return () => clearInterval(temporizador);
  }, [tiempoRestante]);

  const perderVida = (razon: string) => {
    if (vidas > 1) {
      setVidas((prev) => prev - 1);
      setMensaje(`${razon}. Pierdes una vida.`);
      setTimeout(() => {
        setMensaje("");
        setIndiceActual((prev) => prev + 1);
        setTiempoRestante(10);
      }, 1000);
    } else {
      setVidas(0);
      setMensaje("¡Juego terminado! Sin vidas.");
      setJuegoTerminado(true);
    }
  };

  const manejarRespuesta = (index: number) => {
    const preguntaActual = preguntasAleatorias[indiceActual];
    if (index === preguntaActual.correcta) {
      setMarcador((prev) => prev + 1);
      setMensaje("¡Correcto!");
      setTimeout(() => {
        setMensaje("");
        if (indiceActual + 1 < preguntasAleatorias.length) {
          setIndiceActual((prev) => prev + 1);
          setTiempoRestante(10);
        } else {
          setMensaje("¡Juego terminado!");
          setJuegoTerminado(true);
        }
      }, 1000);
    } else {
      perderVida("Incorrecto");
    }
  };

  const reiniciarJuego = () => {
    setPreguntasAleatorias([...ejercicios]);
    setIndiceActual(0);
    setMarcador(0);
    setMensaje("");
    setJuegoTerminado(false);
    setTiempoRestante(10);
    setVidas(3);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-4">
      <h1 className="text-3xl font-bold mb-6">Juego de Lectura</h1>
      {!juegoTerminado ? (
        <>
          <p className="text-xl mb-4">Tiempo restante: {tiempoRestante}s</p>
          <p className="text-xl mb-4">Vidas restantes: {vidas}</p>
          <p className="text-lg mb-4">
            {preguntasAleatorias[indiceActual].pregunta}
          </p>
          <div className="grid grid-cols-2 gap-4 mb-4">
            {preguntasAleatorias[indiceActual].opciones.map((opcion, index) => (
              <button
                key={index}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 transition duration-300"
                onClick={() => manejarRespuesta(index)}
              >
                {opcion}
              </button>
            ))}
          </div>
          <p className="text-yellow-400">{mensaje}</p>
          <p className="mt-4">Marcador: {marcador}</p>
        </>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl mb-4">Juego Terminado</h2>
          <p className="mb-4">Puntaje final: {marcador}</p>
          <button
            className="bg-green-600 px-4 py-2 rounded hover:bg-green-800 transition duration-300"
            onClick={reiniciarJuego}
          >
            Reiniciar Juego
          </button>
        </div>
      )}
    </div>
  );
}

export default JuegoLectura;
