import React, { useEffect } from "react";
import Timer from "./Timer.tsx"; // Asegúrate de que la ruta sea correcta

const TimerInitializer = () => {
  return (
    <div>
      <Timer duration={30000} redirectTo="/Lvl2" /> {/* 30 segundos */}
    </div>
  );
};

export default TimerInitializer;
