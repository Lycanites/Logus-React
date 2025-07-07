import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { db } from "../database/db"; // Cambiado a db para consistencia
import { promisify } from "util";

const router = express.Router();
const query = promisify(db.query).bind(db);

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

    // Verificar usuario existente
    const existingUsers: any[] = await query(
      "SELECT * FROM usuarios WHERE username = ? OR email = ?",
      [username, email]
    );

    if (existingUsers.length > 0) {
      return res
        .status(400)
        .json({ error: "El nombre de usuario o correo ya está en uso" });
    }

    const hashedPassword = await bcrypt.hash(contrasena, 10);

    await query(
      "INSERT INTO usuarios (username, email, contrasena, age, rol) VALUES (?, ?, ?, ?, 'jugador')",
      [username, email, hashedPassword, age]
    );

    return res.status(201).json({ message: "Cuenta creada correctamente" });
  } catch (error) {
    console.error("Error en /registro:", error);
    return res.status(500).json({ error: "Error en el servidor" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, contrasena } = req.body;

    if (!email || !contrasena) {
      return res.status(400).json({ error: "Email y contraseña requeridos" });
    }

    const users: any[] = await query("SELECT * FROM usuarios WHERE email = ?", [
      email,
    ]);

    if (users.length === 0) {
      return res.status(401).json({ error: "Credenciales incorrectas" });
    }

    const usuario = users[0];

    const passwordMatch = await bcrypt.compare(contrasena, usuario.contrasena);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Credenciales incorrectas" });
    }

    const token = jwt.sign(
      {
        id: usuario.id,
        username: usuario.username,
        rol: usuario.rol,
      },
      process.env.JWT_SECRET as string,
      { expiresIn: "2h" }
    );

    return res.json({
      message: "Inicio de sesión exitoso",
      token,
      rol: usuario.rol,
    });
  } catch (error) {
    console.error("Error en /login:", error);
    return res.status(500).json({ error: "Error en el servidor" });
  }
});

export default router;
