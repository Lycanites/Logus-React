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
import ILvl1 from "./Lectura-Lvls/ILvl1.tsx";
import ILvl2 from "./Lectura-Lvls/ILvl2.tsx";
import ILvl3 from "./Lectura-Lvls/ILvl3.tsx";
import ILvl4 from "./Lectura-Lvls/ILvl4.tsx";
import ILvl5 from "./Lectura-Lvls/ILvl6.tsx";
import ILvl6 from "./Lectura-Lvls/ILvl7.tsx";
import ILvl7 from "./Lectura-Lvls/ILvl8.tsx";
import ILvl8 from "./Lectura-Lvls/ILvl9.tsx";
import ILvl9 from "./Lectura-Lvls/ILvl10.tsx";
import ILvl10 from "./Lectura-Lvls/ILvl10.tsx";
import IFin from "./Lectura-Lvls/IFin.tsx";
import IIILvl1 from "./Anal-Lvls/IIILvl1.tsx";
import IIILvl2 from "./Anal-Lvls/IIILvl2.tsx";
import IIILvl3 from "./Anal-Lvls/IIILvl3.tsx";
import IIILvl4 from "./Anal-Lvls/IIILvl4.tsx";
import IIILvl5 from "./Anal-Lvls/IIILvl5.tsx";
import IIILvl6 from "./Anal-Lvls/IIILvl6.tsx";
import IIILvl7 from "./Anal-Lvls/IIILvl7.tsx";
import IIILvl8 from "./Anal-Lvls/IIILvl8.tsx";
import IIILvl9 from "./Anal-Lvls/IIILvl9.tsx";
import IIILvl10 from "./Anal-Lvls/IIILvl10.tsx";
import IIIFin from "./Anal-Lvls/IIIFin.tsx";

import Logica from "./Areas/Logica.tsx";
import IILvl1 from "./Logica-levels/IILvl1.tsx";
import IILvl2 from "./Logica-levels/IILvl2.tsx";
import IILvl3 from "./Logica-levels/IILvl3.tsx";
import IILvl4 from "./Logica-levels/IILvl4.tsx";
import IILvl5 from "./Logica-levels/IILvl5.tsx";
import IILvl6 from "./Logica-levels/IILvl6.tsx";
import IILvl7 from "./Logica-levels/IILvl7.tsx";
import IILvl8 from "./Logica-levels/IILvl8.tsx";
import IILvl9 from "./Logica-levels/IILvl9.tsx";
import IILvl10 from "./Logica-levels/IILvl10.tsx";
import IIFin from "./Logica-levels/IIFin.tsx";

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
    path: "/ILvl1",
    element: <ILvl1 />,
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
    path: "/ILvl5",
    element: <ILvl5 />,
  },
  {
    path: "/ILvl6",
    element: <ILvl6 />,
  },
  {
    path: "/ILvl7",
    element: <ILvl7 />,
  },
  {
    path: "/ILvl8",
    element: <ILvl8 />,
  },
  {
    path: "/ILvl9",
    element: <ILvl9 />,
  },
  {
    path: "/ILvl10",
    element: <ILvl10 />,
  },
  {
    path: "/IFin",
    element: <IFin />,
  },

  {
    path: "/Logica",
    element: <Logica />,
  },
  {
    path: "/IILvl1",
    element: <IILvl1 />,
  },
  {
    path: "/IILvl2",
    element: <IILvl2 />,
  },
  {
    path: "/IILvl3",
    element: <IILvl3 />,
  },
  {
    path: "/IIILvl1",
    element: <IIILvl1 />,
  },
  {
    path: "/IIILvl2",
    element: <IIILvl2 />,
  },
  {
    path: "/IIILvl3",
    element: <IIILvl3 />,
  },
  {
    path: "/IIILvl4",
    element: <IIILvl4 />,
  },
  {
    path: "/IIILvl5",
    element: <IIILvl5 />,
  },
  {
    path: "/IIILvl6",
    element: <IIILvl6 />,
  },
  {
    path: "/IIILvl7",
    element: <IIILvl7 />,
  },
  {
    path: "/IIILvl8",
    element: <IIILvl8 />,
  },
  {
    path: "/IIILvl9",
    element: <IIILvl9 />,
  },
  {
    path: "/IIILvl10",
    element: <IIILvl10 />,
  },
  {
    path: "/IIIFin",
    element: <IIIFin />,
  },
  {
    path: "/IILvl4",
    element: <IILvl4 />,
  },
  {
    path: "/IILvl5",
    element: <IILvl5 />,
  },
  {
    path: "/IILvl6",
    element: <IILvl6 />,
  },
  {
    path: "/IILvl7",
    element: <IILvl7 />,
  },
  {
    path: "/IILvl8",
    element: <IILvl8 />,
  },
  {
    path: "/IILvl9",
    element: <IILvl9 />,
  },
  {
    path: "/IILvl10",
    element: <IILvl10 />,
  },
  {
    path: "/IIFin",
    element: <IIFin />,
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
