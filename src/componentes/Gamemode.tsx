import React from "react";
import { Link } from "react-router-dom";
import "./Gamemode.css";

const VerticalSections = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Secciones principales */}
      <div className="grid grid-cols-1 md:grid-cols-3 flex-grow gap-4 p-4 ">
        <div className="flex items-center">
          <Link to={"/Fiesta"}>
            <div className="flex items-center justify-center border-b md:border-r md:border-b-0 border-gray-300 p-4 bg-black hover:p-6 hover:bg-white cursor-pointer ">
              🎉 Fiesta 🎉
            </div>
          </Link>
        </div>
        <div className="flex items-center justify-center border-b md:border-r md:border-b-0 border-gray-300 p-4">
          <Link to="/Menu">
            <div className="bg-green-500 text-white text-center py-8 px-6 rounded-lg shadow-lg hover:bg-green-600 transition duration-200 transform hover:scale-105">
              <button className="w-full text-xl font-semibold">Clásico</button>
            </div>
          </Link>
        </div>
        <div className="flex items-center justify-center p-4">
          <Link to={"/Zen"}>
            <button className="shadow-2xl bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 hover:from-green-300 hover:via-yellow-300 hover:to-orange-300 border-gray-300 border-8 text-center text-white font-CreamBeige w-full h-24 text-xl rounded-lg flex items-center justify-center mt-4">
              🌸 Zen 🌸
            </button>
          </Link>
        </div>
      </div>

export default Verticalsections;
