import React from "react";
import { Link } from "react-router-dom";

const VerticalSections = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 h-screen gap-4 p-4">
      <div className="flex items-center justify-center border-b md:border-r md:border-b-0 border-gray-300 p-4">
        <Link to="/Fiesta">
          <div className="bg-blue-500 text-white text-center py-4 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-200 transform hover:scale-105">
            <button className="w-full text-lg font-semibold">Fiesta</button>
          </div>
        </Link>
      </div>
      <div className="flex items-center justify-center border-b md:border-r md:border-b-0 border-gray-300 p-4">
        <Link to="/Menu">
          <div className="bg-green-500 text-white text-center py-4 px-6 rounded-lg shadow-lg hover:bg-green-600 transition duration-200 transform hover:scale-105">
            <button className="w-full text-lg font-semibold">Clasico</button>
          </div>
        </Link>
      </div>
      <div className="flex items-center justify-center p-4">
        <Link to="/Zen">
          <div className="bg-red-500 text-white text-center py-4 px-6 rounded-lg shadow-lg hover:bg-red-600 transition duration-200 transform hover:scale-105">
            <button className="w-full text-lg font-semibold">Zen</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default VerticalSections;
