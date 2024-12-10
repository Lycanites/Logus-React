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
import Lectura from "./Areas/Lectura.tsx";
import Logica from "./Areas/Logica.tsx";
import Memoria from "./Areas/Memoria.tsx";
import Analisis from "./Areas/Analisis.tsx";
import MainMenu from "./componentes/MainMenu.tsx";
import Menu from "./componentes/Menu.tsx";
import Configuracion from "./componentes/Configuracion.tsx";
import Perfil from "./componentes/Perfil.tsx";
import Carrusel from "./componentes/Carrusel.tsx";
import Store from "./componentes/Store.tsx";
import ILvl1 from "./Lectura-Lvls/ILvl1.tsx";
import ILvl2 from "./Lectura-Lvls/ILvl2.tsx";
import ILvl3 from "./Lectura-Lvls/ILvl3.tsx";
import ILvl4 from "./Lectura-Lvls/ILvl4.tsx";
import ILvl5 from "./Lectura-Lvls/ILvl5.tsx";
import ILvl6 from "./Lectura-Lvls/ILvl6.tsx"; 
import ILvl7 from "./Lectura-Lvls/ILvl7.tsx";
import ILvl8 from "./Lectura-Lvls/ILvl8.tsx";
import ILvl9 from "./Lectura-Lvls/ILvl9.tsx";
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
import TimerInitializer from "./componentes/TimerInitializer.tsx";

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
    path: "/Memoria",
    element: <Memoria />,
  },
  {
    path: "/Analisis",
    element: <Analisis />,
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
    path: "/Carrusel",
    element: <Carrusel />,
  },
  {
    path: "/Store",
    element: <Store />,
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
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
