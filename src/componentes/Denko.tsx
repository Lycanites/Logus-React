import React from "react";

const Denko = () => {
  return (
    <div>
      {" "}
      <section>
        <div className="h-[80vh] bg-slate-500 flex items-center justify-start p-10">
          <div className="text-left max-w-xl">
            <h1 className="text-4xl font-bold text-white mb-4">
              Nuestra Misión
            </h1>
            <p className="text-white">
              Logus busca fomentar el aprendizaje significativo a través de
              desafíos interactivos que desarrollen las habilidades cognitivas
              de los jugadores. Nos comprometemos a crear una experiencia
              educativa atractiva y accesible para todos, impulsando el
              pensamiento crítico, la curiosidad y el amor por el conocimiento.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="h-[80vh] bg-slate-600 flex items-center justify-end p-10">
          <div className="text-right max-w-xl">
            <h1 className="text-4xl font-bold text-white mb-4">
              Nuestra Visión
            </h1>
            <p className="text-white">
              Ser una plataforma educativa reconocida por su innovación y
              efectividad en el desarrollo de habilidades mentales, ofreciendo
              un espacio donde aprender sea tan emocionante como jugar.
              Aspiramos a transformar la forma en que las personas acceden al
              conocimiento en la era digital.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Denko;
