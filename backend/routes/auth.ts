import express from "express";
import bcrypt from "bcrypt";
import connection from "../database/db";

const router = express.Router();

router.post("/registro", async (req, res) => {
  try {
    const { username, email, contrasena, age } = req.body;

    if (!username || !email || !contrasena || !age) {
      return res
        .status(400)
        .json({ error: "Todos los campos son obligatorios" });
    }

    if (contrasena.length < 6) {
      return res
        .status(400)
        .json({ error: "La contraseña debe tener al menos 6 caracteres" });
    }

    connection.query(
      "SELECT * FROM usuarios WHERE username = ? OR email = ?",
      [username, email],
      async (err, results: any[]) => {
        if (err) return res.status(500).json({ error: err.message });

        if (results.length > 0) {
          return res
            .status(400)
            .json({ error: "El nombre de usuario o correo ya está en uso" });
        }

        const hashedPassword = await bcrypt.hash(contrasena, 10);

        connection.query(
          "INSERT INTO usuarios (username, email, contrasena, age, rol) VALUES (?, ?, ?, ?, 'jugador')",
          [username, email, hashedPassword, age],
          (insertErr) => {
            if (insertErr) {
              return res.status(500).json({ error: insertErr.message });
            }

            return res
              .status(201)
              .json({ message: "Cuenta creada correctamente" });
          }
        );
      }
    );
  } catch (error) {
    return res.status(500).json({ error: "Error en el servidor" });
  }
});

export default router;
