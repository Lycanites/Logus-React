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

import Lectura from "./Areas/Lectura.tsx";
import ILvl2 from "./Lectura-Lvls/Logica.tsx";
import ILvl3 from "./Lectura-Lvls/Analisis.tsx";
import ILvl4 from "./Lectura-Lvls/Memoria.tsx";

import Memoria from "./Areas/Memoria.tsx";
import Analisis from "./Areas/Analisis.tsx";
import MainMenu from "./componentes/MainMenu.tsx";

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
    path: "/ILvl2",
    element: <ILvl2 />,
  },
  {
    path: "/ILvl3",
    element: <ILvl3 />,
  },
  {
    path: "/ILvl4",
    element: <ILvl4 />,
  },
  {
    path: "/Memoria",
    element: <Memoria />,
  },

  {
    path: "/Analisis",
    element: <Analisis />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
