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
import ILvl1 from "./Lectura-Lvls/ILvl1.tsx";
import ILvl2 from "./Lectura-Lvls/ILvl2.tsx";


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
    path: '/ILvl1',
    element: <ILvl1 />,
  },
  {
    path: '/ILvl2',
    element: <ILvl2 />,
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
