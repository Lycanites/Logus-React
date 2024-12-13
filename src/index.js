import React from "react";
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
import TimerInitializer from "./componentes/TimerInitializer.tsx";
import MainMenu from "./componentes/MainMenu.tsx";

import Lectura from "./Areas/Lectura.tsx";
import Logica from "./Areas/Logica.tsx";
import Memoria from "./Areas/Memoria.tsx";
import Analisis from "./Areas/Analisis.tsx";

import LE from "./Juego/LE.tsx";
import LO from "./Juego/LO.tsx";
import AN from "./Juego/AN.tsx";
import ME from "./Juego/ME.tsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
    path: "/TimerInitializer",
    element: <TimerInitializer />,
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
  },{
    path: "/Memoria",
    element: <Memoria />,
  },
  {
    path: "/ME",
    element: <ME />,
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
