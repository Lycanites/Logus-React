import React from "react";
import "./landing.css";

const LandingPage: React.FC = () => {
  return (
    <div>
      <header>
        <div className="container">
          <p className="logo">Logus</p>
          <nav>
            <a href="#somos-proya">Que es Logus</a>
            <a href="#nuestros-programas">Nuestras Areas</a>
            <a href="#caracteristicas">Características</a>
          </nav>
        </div>
      </header>

      <section id="hero">
        <h1>
          Ejercita tu <br />
          Mente
        </h1>
        <button>JUEGA YA!</button>
      </section>

      <section id="somos-proya">
        <div className="container">
          <div className="img-container"></div>
          <div className="texto">
            <h2>
              ¿Qué es <span className="color-acento">Logus</span>?
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              veritatis a autem sed dignissimos commodi, voluptas incidunt
              voluptatibus cum, quia neque nulla consequatur laborum accusamus,
              perspiciatis odio nemo minus vel!
            </p>
          </div>
        </div>
      </section>

      <section id="nuestros-programas">
        <div className="container">
          <h2>Nuestras Areas</h2>
          <div className="programas">
            <div className="carta">
              <h3>Lectura</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt vero corporis incidunt saepe qui commodi quasi neque
                veniam quam, aspernatur est beatae maxime animi sed reiciendis
                mollitia ducimus veritatis repellendus?
              </p>
            </div>
            <div className="carta">
              <h3>Logica</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt vero corporis incidunt saepe qui commodi quasi neque
                veniam quam, aspernatur est beatae maxime animi sed reiciendis
                mollitia ducimus veritatis repellendus?
              </p>
            </div>
            <div className="carta">
              <h3>Memoria</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt vero corporis incidunt saepe qui commodi quasi neque
                veniam quam, aspernatur est beatae maxime animi sed reiciendis
                mollitia ducimus veritatis repellendus?
              </p>
            </div>
            <div className="carta">
              <h3>Analisis</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt vero corporis incidunt saepe qui commodi quasi neque
                veniam quam, aspernatur est beatae maxime animi sed reiciendis
                mollitia ducimus veritatis repellendus?
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="caracteristicas">
        <div className="container">
          <ul>
            <li>✔️ 100% </li>
            <li>✔️ </li>
            <li>✔️ Soporte 1:1</li>
            <li>✔️ Competitividad en un Multijugador</li>
          </ul>
        </div>
      </section>

      <section id="final">
        <h2>Listo para JUGAR</h2>
        <button>JUGAR YA!</button>
      </section>

      <footer>
        <div className="container">
          <p>&copy; Denko 2024</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
