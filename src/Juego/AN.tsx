import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface ANProps {
  volverAlMenu: () => void; // Indica que es una función sin parámetros ni retorno
}

const AN: React.FC<ANProps> = ({ volverAlMenu }) => {
  // Estados del juego
  const [indiceActual, setIndiceActual] = useState(0);
  const [marcador, setMarcador] = useState(0);
  const [mensaje, setMensaje] = useState("");
  const [juegoTerminado, setJuegoTerminado] = useState(false);
  const [tiempoRestante, setTiempoRestante] = useState(10); // TIEMPO_MAXIMO

  const preguntas = [

    {
      pregunta: "Me ves en el agua, pero nunca me mojo.",
      opciones: ["El reflejo", "Un pez", "Un barco", "Las nubes"],
      correcta: 0,
    },
    {
      pregunta: "No es camino, pero anda, no es campana, pero suena.",
      opciones: ["La bicicleta", "El reloj","El tambor","La brujula"],
      correcta: 1,
    },
    {
      pregunta: "Tiene forma de anillo y agua en su interior, todos te lo ofrecen como prenda de amor.",
      opciones: ["La alianza", "Un vaso", "Una pecera", "Las llaves"],
      correcta: 0,
    },
    {
      pregunta: "En medio del mar está y a la orilla no puede llegar.",
      opciones: ["Un barco", "El delfín", "La estrella de mar", "El pez globo"],
      correcta: 2,
    },
    {
      pregunta: "Tiene hojas, pero no es árbol, tiene lomo, pero no es animal.",
      opciones: ["La mochila", "El cuaderno", "El maestro", "El libro"],
      correcta: 3,
    },
    {
      pregunta: "Pasa por ciudades y campos, pero nunca se mueve.",
      opciones: ["El camino", "El río", "El viento", "El tren"],
      correcta: 0,
    },
    {
      pregunta: "Si me miras te miraré, si me tocas te tocaré, pero si te ríes, yo también lo haré.",
      opciones: ["Un perro", "Un cuadro", "El espejo", "La sombra"],
      correcta: 2,
    },
    {
      pregunta: "Lleno de agujeros y aun así guarda agua.",
      opciones: ["El colador","La esponja", "Un cubo","Una red"],
      correcta: 1,
    },
    {
      pregunta: "Es redondo y no es queso, rueda sin ser balón.",
      opciones: ["La moneda", "El plato", "La luna", "El sol"],
      correcta: 3,
    },
    {
      pregunta: "Vuelo sin alas, lloro sin ojos.",
      opciones: ["La cascada", "El rio", "Las olas", "La nube",],
      correcta: 3,
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
    <div className="bg-gradient-to-r from-azulborder to-azularea h-[100vh] flex flex-col justify-center items-center text-white p-6">
      <h1 className="text-4xl font-CreamBeige text-black mb-6 font-cursive">Analisis</h1>

      <div className="w-full bg-azulborder 0 h-6 rounded-md overflow-hidden mb-6 border-4 border-azulhover">
        <div
          className="h-full bg-azularea transition-all duration-1000 ease-linear"
          style={{ width: `${(tiempoRestante / 10) * 100}%` }}
        ></div>
      </div>

      {juegoTerminado ? (
               <div className="text-center text-black">
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
            <h2 className="text-2xl font-sans text-black mb-6 bg-white p-6 rounded-lg shadow-lg border-8 border-azulborder">
              {preguntaActual.pregunta}
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {preguntaActual.opciones.map((opcion, index) => (
              <button
                key={index}
                onClick={() => manejarRespuesta(index)}
                className="bg-white font-sans text-black px-6 py-3 rounded-lg hover:bg-azulhover transition border-4 border-azulborder"
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
    </div>
  );
};

export default AN;
