import React from "react";
import Navbar from "../componentes/Navbar.tsx";
import LandingPage from "../componentes/Landing.tsx";
import BackgroundMusic from "../componentes/BackgroundMusic.tsx";

export default function Home() {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <BackgroundMusic />
    </div>
  );
}
