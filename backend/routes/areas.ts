import express from "express";
import connection from "../database/db";
import { ResultSetHeader } from "mysql2"; // 👈 importa el tipo correcto

const router = express.Router();

// Obtener todas las áreas
router.get("/", (_req, res) => {
  connection.query("SELECT * FROM areas", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// Agregar una nueva área
router.post("/", (req, res) => {
  const { area } = req.body;
  if (!area) return res.status(400).json({ error: "area requerido" });

  connection.query<ResultSetHeader>(
    "INSERT INTO areas (area) VALUES (?)",
    [area],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: "Área agregada", id: result.insertId }); // ✅ ya está tipado correctamente
    }
  );
});

export default router;
