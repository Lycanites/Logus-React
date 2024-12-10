import React from 'react';
import { useState } from 'react';

const Carrusel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: "http://www.bcu.ac.uk/mediaitem/visual-communication-illustration-02-130585258441045504.jpg?quality=90",
      alt: "Ilustracion",
      title: "Gusti Ilustración",
      description: "Exposición"
    },
    {
      src: "https://ugc.kn3.net/i/origin/http://thisiscolossal.com/wp-content/uploads/2011/02/anthony-2-600x424.jpg",
      alt: "Fotografía",
      title: "Xataka Fotografía",
      description: "Concurso"
    },
    {
      src: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/e86e8b59124321.5a15e4ccd8622.jpg",
      alt: "Pintura",
      title: "DoArt Pintura",
      description: "Curso"
    },
    {
      src: "https://cdn.dribbble.com/users/324248/screenshots/3978513/planet2_800.jpg",
      alt: "Diseño Gráfico",
      title: "UX UI Diseño Gráfico",
      description: "Curso"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Indicadores */}
      <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 z-10">
        <button
          onClick={prevSlide}
          className="bg-black bg-opacity-50 text-white p-2 rounded-full"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="bg-black bg-opacity-50 text-white p-2 rounded-full"
        >
          ›
        </button>
      </div>

      {/* Contenido del Carrusel */}
      <div className="relative overflow-hidden rounded-lg">
        {images.map((image, index) => (
          <div
            key={index}
            className={`transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              className="w-full h-auto mx-auto"
              src={image.src}
              alt={image.alt}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
              <h3 className="text-lg">{image.title}</h3>
              <p>{image.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Indicadores del Carrusel */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2.5 h-2.5 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-500'}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carrusel;