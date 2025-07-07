import express from "express";
import { db } from "../database/db"; // Cambié a "db" para que sea consistente
import { ResultSetHeader } from "mysql2";

const router = express.Router();

// Obtener todas las áreas
router.get("/", (_req, res) => {
  db.query("SELECT * FROM areas", (err, results) => {
    if (err) {
      console.error("Error al obtener áreas:", err);
      return res.status(500).json({ error: "Error al obtener áreas" });
    }
    res.json(results);
  });
});

// Agregar una nueva área
router.post("/", (req, res) => {
  const { area } = req.body;
  if (!area) {
    return res.status(400).json({ error: "El campo 'area' es requerido" });
  }

  db.query<ResultSetHeader>(
    "INSERT INTO areas (area) VALUES (?)",
    [area],
    (err, result) => {
      if (err) {
        console.error("Error al agregar área:", err);
        return res.status(500).json({ error: "Error al agregar área" });
      }
      res.status(201).json({ message: "Área agregada", id: result.insertId });
    }
  );
});

export default router;
