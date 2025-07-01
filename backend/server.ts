import express from "express";
import cors from "cors";
import mysql from "mysql2/promise";
import dotenv from "dotenv";

// 1. Cargar variables de entorno
dotenv.config();

// 2. Crear la app de Express
const app = express();
app.use(cors()); // 3. Habilitar CORS para que React pueda acceder
app.use(express.json()); // 4. Permitir enviar/recibir JSON

const PORT = process.env.PORT || 3001;

// 5. Conectarse a la base de datos MySQL
const db = await mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

// 6. Ruta simple para probar si funciona
app.get("/usuarios", async (req, res) => {
  try {
    const [rows] = await db.execute("SELECT * FROM usuarios");
    res.json(rows);
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    res.status(500).send("Error del servidor");
  }
});

// 7. Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
