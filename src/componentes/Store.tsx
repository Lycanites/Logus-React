import React from "react";
import { useState } from "react";
import Imagenes from "../assets/img/Imagenes"; // Asegúrate de que la ruta sea correcta
import "./Store.css";

// Definición de la interfaz para las tarjetas
interface CardData {
    image: string;
    title: string;
    text: string;
  }

const Store = () => {
    const slides = [
      {
        img: "http://www.bcu.ac.uk/mediaitem/visual-communication-illustration-02-130585258441045504.jpg?quality=90",
        title: "Gusti Ilustración",
        description: "Exposición",
      },
      {
        img: "https://via.placeholder.com/800x400",
        title: "Slide 2",
        description: "Descripción del slide 2",
      },
      {
        img: "https://via.placeholder.com/800x400",
        title: "Slide 3",
        description: "Descripción del slide 3",
      },
      {
        img: "https://via.placeholder.com/800x400",
        title: "Slide 4",
        description: "Descripción del slide 4",
      },
    ];
  
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? slides.length - 1 : prevIndex - 1
      );
    };

    
  
    return (
      <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
        {/* Slides */}
        <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {slides.map((slide, index) => (
            <div key={index} className="min-w-full">
              <img
                src={slide.img}
                alt={slide.title}
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 w-full p-4 text-white bg-black bg-opacity-50">
                <h3 className="text-lg font-bold">{slide.title}</h3>
                <p>{slide.description}</p>
              </div>
            </div>
          ))}
        </div>
  
        {/* Controles */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75"
        >
          &#10095;
        </button>
  
        {/* Indicadores */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-white" : "bg-gray-400"} transition`}
            ></button>
          ))}
        </div>
        <div id="objetos">
            
        </div>
      </div>

      
    );
  };
  
  export default Store;

/*const Store = () => {
  return (
    <div id='Store'>
        <div id="carrucel">

        </div>
        <div id="objetos">
            
        </div>
        <div id="personajes">

        </div>

    </div>
  )
}

export default Store*/