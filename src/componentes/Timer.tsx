import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Timer.css"; // Asegúrate de crear este archivo CSS

const Timer = ({ duration, redirectTo }) => {
  const [timeLeft, setTimeLeft] = useState(duration);
  const navigate = useNavigate();

  useEffect(() => {
    if (timeLeft <= 0) {
      navigate(redirectTo); // Redirige al nuevo componente
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1000); // Decrementa el tiempo en 1 segundo
    }, 1000);

    return () => clearInterval(interval); // Limpia el intervalo al desmontar
  }, [timeLeft, navigate, redirectTo]);

  const progressPercentage = (timeLeft / duration) * 100;

  return (
    <div className="timer-container">
      <div
        className="progress-bar"
        style={{ width: `${progressPercentage}%` }}
      />
      <h1>Tiempo restante: {Math.floor(timeLeft / 1000)} segundos</h1>
    </div>
  );
};

export default Timer;
