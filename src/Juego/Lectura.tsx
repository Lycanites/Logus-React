import React, { useState, useEffect } from "react";

const Lectura = ({ volverAlMenu }) => {
  // Estados del juego
  const [indiceActual, setIndiceActual] = useState(0);
  const [marcador, setMarcador] = useState(0);
  const [mensaje, setMensaje] = useState("");
  const [juegoTerminado, setJuegoTerminado] = useState(false);
  const [tiempoRestante, setTiempoRestante] = useState(10); // TIEMPO_MAXIMO

  const preguntas = [
    {
      pregunta: "Verde es a hierba como amarillo es a:",
      opciones: ["Papel", "Plátano", "Árbol", "Libro"],
      correcta: 1,
    },
    {
      pregunta: "Bisturí es a cirujano como:",
      opciones: ["Foco a alumbrado", "Martillo a carpintero", "Estola a sacerdote", "Mineral a minero"],
      correcta: 1,
    },
    {
      pregunta: "Lima es a Perú como:",
      opciones: ["Ciudad a país", "Chile a Santiago", "Madrid a España", "España a Madrid"],
      correcta: 2,
    },
    {
      pregunta: "Vaso es a copa como agua a:",
      opciones: ["Jarabe", "Líquido", "Vino", "Vaso"],
      correcta: 1,
    },
    {
      pregunta: "Alto es a deporte como bajo es a:",
      opciones: ["Natación", "Inactividad", "Actividad", "Tranquilidad"],
      correcta: 1,
    },
    {
      pregunta: "Mucho es a poco como:",
      opciones: ["Cuaderno a libreta", "Suficiente a bastante", "Oriente a occidente", "Harina a pastel"],
      correcta: 1,
    },
    {
      pregunta: "Arena es a vidrio como:",
      opciones: ["Algodón a tela", "Miel a abeja", "Ácido a limón", "Página a libro"],
      correcta: 0,
    },
    {
      pregunta: "Ahorro es a gasto como:",
      opciones: ["Arrogante a soberbio", "Terso a suave", "Compra a venta", "Romper a fracturar"],
      correcta: 2,
    },
    {
      pregunta: "El hombre que no lee es como un _____ que la corriente de la ignorancia arrastra al abismo del_____.",
      opciones: ["Letrado-vacío", "Viajero-ahogo", "Náufrago-frasco", "Asilado-pesar"],
      correcta: 2,
    },
    {
      pregunta: "El moderno microscopio ha revelado una sorprendente_____ de estructuras y _____ de las células.",
      opciones: ["Forma-mutaciones", "Cantidad-semejanzas", "Variedad-funciones", "Definición-multiplicidades"],
      correcta: 2,
    },
    {
      pregunta: "El Enigma del Relojero: En un rincón oscuro de la ciudad, el Sr. Aldebarán, un experto relojero, recibe un reloj detenido con un tic-tac melancólico. Repararlo será un reto supremo, lleno de misterios y significados ocultos, que lo llevará a buscar la armonía temporal.",
      opciones: ["La causa del tic-tac melancólico del reloj y cómo restaurarlo a su ritmo normal", "El origen del reloj y la identidad de su dueño original", "El significado de los símbolos y grabados que adornan el reloj", "La clave para viajar en el tiempo a través del uso del reloj"],
      correcta: 0,
    },
    {
      pregunta: "La Maraña de las Estrellas: En el vasto cosmos, las estrellas tejen historias interconectadas. Cada luz y su titilar plantean preguntas sobre el universo. Los astrónomos exploran estos enigmas, buscando comprender la inmensidad del espacio.",
      opciones: ["La dedicación de los astrónomos en su búsqueda del conocimiento", "La vastedad y el misterio del cosmos que inspiran asombro", "La interconexión de todas las cosas en el universo", "La belleza y fragilidad de las estrellas"],
      correcta: 1,
    },
    {
      pregunta: "El Éxodo de los Arlequines: Bajo la luz de la luna, los arlequines bailan melodías ancestrales, guiándose hacia un reino oculto donde los sueños y la realidad convergen, deteniendo el tiempo.",
      opciones: ["Un bosquejo secreto en las profundidades del bosque", "Un gran baile de máscaras", "Un reino oculto donde el tiempo se detiene y los sueños se entrelazan", "Una ciudad olvidada enterrada bajo la tierra"],
      correcta: 2,
    },
    {
      pregunta: "La Ciudad Invisible: Cuenta la leyenda que en un punto lejano del horizonte se oculta una ciudad invisible, revelada solo a quienes poseen un corazón puro. La ciudad es un reflejo de los sueños más profundos de quienes la encuentran, construida con luz y esperanza.",
      opciones: ["Un lugar de redención para los perdidos", "Un castillo de cristal lleno de secretos", "Los sueños y aspiraciones más puros del ser humano", "Una ciudad construida por un pasado olvidado"],
      correcta: 2,
    },
    {
      pregunta: "El Guardián del Faro: En una isla aislada, un viejo farero mantiene viva la luz que guía a los barcos. Aunque la tecnología ha avanzado, el guardián cree que su labor es crucial, pues no es solo la luz la que guía, sino la fe que infunde en los navegantes.",
      opciones: ["La tradición frente al progreso tecnológico", "La importancia de la esperanza y la fe en tiempos difíciles", "La resistencia a los cambios modernos", "La conexión entre lo humano y lo mecánico"],
      correcta: 1,
    },
    {
      pregunta: "El Jardín Eterno: En un valle oculto, un jardín florece en toda época del año. Quienes lo visitan sienten una paz indescriptible, como si las flores capturaran y reflejaran los anhelos de sus visitantes, creando un paraíso único para cada persona.",
      opciones: ["Sus flores cambian según la temporada", "Solo florece para quienes tienen un propósito claro", "Refleja los deseos y emociones más profundos de quienes lo visitan", "Está cuidado por seres mágicos que lo preservan"],
      correcta: 2,
    }
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
    <div className="bg-gradient-to-r from-green-200 to-green-300 h-[100vh] flex flex-col justify-center items-center text-white p-6">
      <h1 className="text-4xl font-bold text-green-900 mb-6 font-cursive">Juego de Lectura</h1>

      <div className="w-full bg-green-100 h-6 rounded-md overflow-hidden mb-6">
        <div
          className="h-full bg-green-400 transition-all duration-1000 ease-linear"
          style={{ width: `${(tiempoRestante / 10) * 100}%` }}
        ></div>
      </div>

      {juegoTerminado ? (
        <div className="text-center text-green-900">
          <h2 className="text-3xl mb-4">Puntuación final: {marcador}</h2>
          <button
            className="px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-400 transition mr-4"
            onClick={reiniciarJuego}
          >
            Reiniciar Juego
          </button>
          <button
            className="px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-500 transition"
            onClick={volverAlMenu}
          >
            Volver al Menú
          </button>
        </div>
      ) : (
        <>
          <div className="text-center">
          <h2 className="text-2xl font-semibold text-green-800 mb-6 bg-white p-6 rounded-lg shadow-lg font-sans">
  {preguntaActual.pregunta}
</h2>

          </div>

          <div className="grid grid-cols-2 gap-4">
            {preguntaActual.opciones.map((opcion, index) => (
              <button
                key={index}
                onClick={() => manejarRespuesta(index)}
                className="bg-white text-green-800 px-6 py-3 rounded-lg hover:bg-green-100 transition"
              >
                {opcion}
              </button>
            ))}
          </div>

          <div className="text-center mt-4 text-xl font-bold text-green-400">
            {mensaje}
          </div>
        </>
      )}
    </div>
  );
};

export default Lectura;
