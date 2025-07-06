// src/components/PruebaAreas.tsx
import React, { useEffect, useState } from "react";

interface Area {
  id: number;
  area: string;
}

const PruebaAreas: React.FC = () => {
  const [areas, setAreas] = useState<Area[]>([]);
  const [nuevaArea, setNuevaArea] = useState("");

  const obtenerAreas = async () => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL_PRUEBA}/api/areas`
      );
      const data = await res.json();
      setAreas(data);
    } catch (error) {
      console.error("Error al obtener áreas:", error);
    }
  };

  const agregarArea = async () => {
    if (!nuevaArea.trim()) return;

    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL_PRUEBA}/api/areas`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ area: nuevaArea }),
        }
      );

      if (res.ok) {
        setNuevaArea("");
        obtenerAreas(); // Recargar áreas
      } else {
        const err = await res.json();
        console.error("Error:", err.error);
      }
    } catch (error) {
      console.error("Error al agregar área:", error);
    }
  };

  useEffect(() => {
    obtenerAreas();
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h2>Prueba de conexión con la tabla Áreas</h2>

      <input
        type="text"
        placeholder="Nombre de nueva área"
        value={nuevaArea}
        onChange={(e) => setNuevaArea(e.target.value)}
      />
      <button onClick={agregarArea} style={{ marginLeft: "10px" }}>
        Agregar Área
      </button>

      <ul>
        {areas.map((area) => (
          <li key={area.id}>{area.area}</li>
        ))}
      </ul>
    </div>
  );
};

export default PruebaAreas;
