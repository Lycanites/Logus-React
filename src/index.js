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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
