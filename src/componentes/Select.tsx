import React, { useRef } from "react";

const Select = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0; // Reinicia el sonido para que se reproduzca desde el principio
      audioRef.current.play();
    }
  };
  return (
    <div>
      <audio ref={audioRef} src="../assets/sounds/select.mp3" preload="auto" />
    </div>
  );
};

export default Select;
