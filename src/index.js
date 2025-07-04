import React from "react";
/*import BackgroundMusic from "../componentes/BackgroundMusic.tsx";*/
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./page/Home.tsx";
import Vaca from "./page/Vaca.tsx";
import reportWebVitals from "./reportWebVitals";
import NotFout from "./page/NotFout.tsx";
import Login from "./componentes/Login.tsx";
import Register from "./componentes/Register.tsx";
import Menu from "./componentes/Menu.tsx";
import Configuracion from "./componentes/Configuracion.tsx";
import Perfil from "./componentes/Perfil.tsx";
import MainMenu from "./componentes/MainMenu.tsx";
import LandingPage from "./componentes/Landing";

import Lectura from "./Areas/Lectura.tsx";
import Logica from "./Areas/Logica.tsx";
import Memoria from "./Areas/Memoria.tsx";
import Analisis from "./Areas/Analisis.tsx";

import LE from "./Juego/LE.tsx";
import LO from "./Juego/LO.tsx";
import AN from "./Juego/AN.tsx";
import ME from "./Juego/ME.tsx";

import Gamemode from "./componentes/Gamemode.tsx";
import Fiesta from "./Juego/Fiesta.tsx";
import Zen from "./Juego/Zen.tsx";

import Carousel from "./componentes/Carousel.tsx";

import Modal from "./componentes/Modal.tsx";
import Soporte from "./componentes/Soporte";

import { SoundProvider } from "./context/SoundContext.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Modal",
    element: <Modal />,
  },
  {
    path: "/MainMenu",
    element: <MainMenu />,
  },
  {
    path: "/Menu",
    element: <Menu />,
  },
  {
    path: "/Gamemode",
    element: <Gamemode />,
  },
  {
    path: "/Fiesta",
    element: <Fiesta />,
  },
  {
    path: "/Zen",
    element: <Zen />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Register",
    element: <Register />,
  },

  {
    path: "/Configuracion",
    element: <Configuracion />,
  },
  {
    path: "/Perfil",
    element: <Perfil />,
  },
  {
    path: "/Carousel",
    element: <Carousel />,
  },
  {
    path: "/cow",
    element: <Vaca />,
  },
  {
    path: "*",
    element: <NotFout />,
  },

  {
    path: "/Lectura",
    element: <Lectura />,
  },
  {
    path: "/LE",
    element: <LE />,
  },
  {
    path: "/Logica",
    element: <Logica />,
  },
  {
    path: "/LO",
    element: <LO />,
  },
  {
    path: "/Analisis",
    element: <Analisis />,
  },
  {
    path: "/AN",
    element: <AN />,
  },
  {
    path: "/Memoria",
    element: <Memoria />,
  },
  {
    path: "/ME",
    element: <ME />,
  },
  {
    path: "/Multyplayer",
  },
  {
    path: "Soporte",
    element: <Soporte />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SoundProvider>
      <RouterProvider router={router} />
      {/*<BackgroundMusic />*/}
    </SoundProvider>
  </React.StrictMode>
);

reportWebVitals();
