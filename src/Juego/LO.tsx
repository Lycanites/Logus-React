import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface LOProps {
  volverAlMenu: () => void; // Indica que volverAlMenu es una función que no recibe argumentos y no devuelve nada
}

const LO: React.FC<LOProps> = ({ volverAlMenu }) => {
  // Estados del juego
  const [indiceActual, setIndiceActual] = useState(0);
  const [marcador, setMarcador] = useState(0);
  const [mensaje, setMensaje] = useState("");
  const [juegoTerminado, setJuegoTerminado] = useState(false);
  const [tiempoRestante, setTiempoRestante] = useState(10); // TIEMPO_MAXIMO

  const preguntas = [
    {
      pregunta: "¿Cuántos huevos duros podría comerse una persona aún con el estómago vacío?",
      opciones: ["Uno", "Ninguno", "Los mas posibles", "Los que quepan en su estomago"],
      correcta: 0,
    },
    {
      pregunta: "¿Cómo un hombre se podría casar con la hermana de su viuda?",
      opciones: ["Por lo civil", "No puede", "Con anillos", "Es la misma persona"],
      correcta: 1,
    },
    {
      pregunta: "¿Cuántos nudillos tiene alguien con todos los dedos en su mano?",
      opciones: ["Cero", "5", "10", "20"],
      correcta: 2,
    },
    {
      pregunta: "Imagina estar en una habitación oscura ¿cuál es la mejor salida?",
      opciones: ["La luz", "La puerta", "La imaginacion", "La oscuridad"],
      correcta: 2,
    },
    {
      pregunta: "Antes de descubrirse que el Monte Everest es la montaña más alta ¿cuál era anteriormente?",
      opciones: ["Monte Everest", "Aun no habia", "La segunda montaña mas alta", "La menos alta"],
      correcta: 0,
    },
    {
      pregunta: "¿Qué ocurre cuando una fuerza incalculable choca con un cuerpo inamovible?",
      opciones: ["El cuerpo corresponde a la fuerza", "Ambos se mueven en direcciones opuestas", "No existe la fuerza", "Nada"],
      correcta: 3,
    },
    {
      pregunta: "¿Por qué un barbero prefiere cortarle el pelo a diez hombres antes que a una sola mujer?",
      opciones: ["Porque solo acepta a hombres", "Porque la mujer no paga", "Porque gana más con los hombres", "Porque la mujer llega tarde"],
      correcta: 2,
    },
    {
      pregunta: "¿Cuál de los días es el más largo que puedes ver?",
      opciones: ["Lunes", "El de 25 horas", "Todos son iguales", "Miercoles"],
      correcta: 3,
    },
    {
      pregunta: "¿Por qué la gente duerme más en marzo que en febrero?",
      opciones: ["Por el clima", "Por el sueño", "Por los dias", "Por la comunidad"],
      correcta: 2,
    },
    {
      pregunta: "¿Cómo debe estar primeramente una vela para encenderla?",
      opciones: ["Sin humedad", "Apagada", "A oscuras", "Comprada"],
      correcta: 2,
    },
    
  ];

  const mezclarPreguntas = () => preguntas.sort(() => Math.random() - 0.5);

  const [preguntasAleatorias, setPreguntasAleatorias] = useState(mezclarPreguntas());

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
        <div className="bg-gradient-to-r from-morado to-violeta h-[100vh] flex flex-col justify-center items-center text-white p-6">
          <h1 className="text-4xl font-CreamBeige text-white mb-6 font-cursive">Logica</h1>

          <div className="w-full bg-morado h-6 rounded-md overflow-hidden mb-6 border-4 border-violetahover">
            <div
              className="h-full bg-violeta transition-all duration-1000 ease-linear"
              style={{ width: `${(tiempoRestante / 10) * 100}%` }}
            ></div>
          </div>


          {juegoTerminado ? (
          <div className="text-center text-white">
            <h2 className="text-3xl mb-4">Puntuación final: {marcador}</h2>
            <div className="flex justify-center gap-4">
              <button
                className="px-12 py-2 bg-naranja text-xl font-semibold text-white rounded-3xl hover:bg-naranjahover border-4 border-naranjaborder transition-colors shadow-2xl"
                onClick={reiniciarJuego}>
                Reiniciar Juego
              </button>

              <Link to ="/Menu">
                <button className="px-12 py-2 bg-naranja text-xl font-semibold text-white rounded-3xl hover:bg-naranjahover border-4 border-naranjaborder transition-colors shadow-2xl">
                  Volver al Menú
                </button>
              </Link>
            </div>
          </div>
            
          ) : (
            <>
              <div className="text-center">
              <h2 className="text-2xl font-sans font-semibold text-black mb-6 bg-white p-6 rounded-lg shadow-lg border-8 border-morado">
              {preguntaActual.pregunta}
              </h2>

              </div>

              <div className="grid grid-cols-2 gap-4">
                {preguntaActual.opciones.map((opcion, index) => (
                  <button
                    key={index}
                    onClick={() => manejarRespuesta(index)}
                    className="bg-white font-sans font-semibold text-black px-6 py-3 rounded-lg hover:bg-violetahover transition border-4 border-morado">
                    {opcion}
                  </button>
                ))}
              </div>

              <div className="text-center mt-4 text-xl font-CreamBeige text-white">
                {mensaje}
              </div>
            </>
          )}
        </div>
      );
};

export default LO;