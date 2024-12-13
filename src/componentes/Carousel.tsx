import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

const Carousel = () => {
  // Estado para manejar el índice de la imagen activa
  const [activeIndex, setActiveIndex] = useState(0);

  // Datos de las imágenes
  const slides = [
    {
      imgSrc: "http://www.bcu.ac.uk/mediaitem/visual-communication-illustration-02-130585258441045504.jpg?quality=90",
      alt: "Ilustracion",
      caption: "Gusti Ilustración",
      description: "Exposición",
    },
    {
      imgSrc: "https://ugc.kn3.net/i/origin/http://thisiscolossal.com/wp-content/uploads/2011/02/anthony-2-600x424.jpg",
      alt: "Fotografía",
      caption: "Xataka Fotografía",
      description: "Concurso",
    },
    {
      imgSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/e86e8b59124321.5a15e4ccd8622.jpg",
      alt: "Pintura",
      caption: "DoArt Pintura",
      description: "Curso",
    },
    {
      imgSrc: "https://cdn.dribbble.com/users/324248/screenshots/3978513/planet2_800.jpg",
      alt: "Diseño",
      caption: "UX UI Diseño Gráfico",
      description: "Curso",
    },
  ];

  // Función para cambiar de imagen
  const goToNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div id="Tienda" className="bg-yellow-200">
          <div id="voler">

<Link to="/MainMenu">
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Volver
      </button>
    </Link>

</div>
    <div className="max-w-4xl mx-auto my-8">
  
      <div className="relative">
        <div className="relative overflow-hidden">
          <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
            {slides.map((slide, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <img
                  src={slide.imgSrc}
                  alt={slide.alt}
                  className="w-full object-cover"
                />
                <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-4 w-full">
                  <h3 className="text-lg font-semibold">{slide.caption}</h3>
                  <p>{slide.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Botones de control */}
        <button
          onClick={goToPrev}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-2xl"
        >
          &lt;
        </button>
        <button
          onClick={goToNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-2xl"
        >
          &gt;
        </button>

        {/* Indicadores */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full ${activeIndex === index ? "bg-white" : "bg-gray-400"}`}
            ></button>
          ))}
        </div>
      </div>
      

    </div>
    <div id="compras" className="flex justify-center bg-blue-300 max-w-4xl mx-auto my-8">         
          <div id="botones1">
          <Link>
          <button className="
          flex
          m-10
          w-40
          justify-center
          px-6 py-3 
          bg-gradient-to-r 
          from-indigo-500 
          via-purple-500 
          to-pink-500 
          text-white 
          font-semibold 
          rounded-full 
          shadow-lg 
          transform 
          transition 
          duration-300 
          hover:scale-105 
          hover:shadow-2xl 
          focus:outline-none 
          focus:ring-2 
          focus:ring-offset-2 
          focus:ring-indigo-500">
            LoguCoins
          </button>
          </Link>
          <Link>
          <button className="
          flex
          m-10
          w-40
          justify-center
          space-y-20
          space-x-50
          px-6 py-3 
          bg-gradient-to-r 
          from-indigo-500 
          via-purple-500 
          to-pink-500 
          text-white 
          font-semibold 
          rounded-full 
          shadow-lg 
          transform 
          transition 
          duration-300 
          hover:scale-105 
          hover:shadow-2xl 
          focus:outline-none 
          focus:ring-2 
          focus:ring-offset-2 
          focus:ring-indigo-500">
              Skins
          </button>
          </Link>
          </div>
          <div id="botones2">
          <Link>
          <button className="
          flex
          m-10
          w-40
          justify-center
          px-6 py-3 
          bg-gradient-to-r 
          from-indigo-500 
          via-purple-500 
          to-pink-500 
          text-white 
          font-semibold 
          rounded-full 
          shadow-lg 
          transform 
          transition 
          duration-300 
          hover:scale-105 
          hover:shadow-2xl 
          focus:outline-none 
          focus:ring-2 
          focus:ring-offset-2 
          focus:ring-indigo-500">
            Objetos
          </button>
          </Link>
          <Link>
          <button className="
          flex
          m-10
          w-40
          justify-center
          space-y-20
          space-x-50
          px-6 py-3 
          bg-gradient-to-r 
          from-indigo-500 
          via-purple-500 
          to-pink-500 
          text-white 
          font-semibold 
          rounded-full 
          shadow-lg 
          transform 
          transition 
          duration-300 
          hover:scale-105 
          hover:shadow-2xl 
          focus:outline-none 
          focus:ring-2 
          focus:ring-offset-2 
          focus:ring-indigo-500">
              Temas
          </button>
          </Link>
          </div>
      </div>
      <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">© 2024 Mi Empresa. Todos los derechos reservados.</p>
        <div className="mt-4">
          <a href="/privacy-policy" className="text-gray-400 hover:text-white mx-4">
            Política de privacidad
          </a>
          <a href="/terms-of-service" className="text-gray-400 hover:text-white mx-4">
            Términos de servicio
          </a>
          <a href="/contact" className="text-gray-400 hover:text-white mx-4">
            Contacto
          </a>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Carousel;