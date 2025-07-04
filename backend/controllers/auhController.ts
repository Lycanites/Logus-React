import { Request, Response } from "express";
import { db } from "../database/db";
import jwt from "jsonwebtoken";
import { hashPassword, comparePasswords } from "../utils/hash";

const JWT_SECRET = process.env.JWT_SECRET!;

// REGISTRO
export const registerUser = async (req: Request, res: Response) => {
  const { username, email, contrasena, age } = req.body;

  try {
    const [existing] = await db.query(
      "SELECT id FROM usuarios WHERE email = ?",
      [email]
    );
    if ((existing as any[]).length > 0) {
      return res
        .status(400)
        .json({ error: "Ya existe un usuario con ese email" });
    }

    const hashed = await hashPassword(contrasena);
    const [result] = await db.query(
      "INSERT INTO usuarios (username, email, contrasena, age, rol) VALUES (?, ?, ?, ?, 'jugador')",
      [username, email, hashed, age]
    );

    return res
      .status(201)
      .json({ message: "Usuario registrado correctamente" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error del servidor" });
  }
};

// LOGIN
export const loginUser = async (req: Request, res: Response) => {
  const { email, contrasena } = req.body;

  try {
    const [rows] = await db.query("SELECT * FROM usuarios WHERE email = ?", [
      email,
    ]);
    const users = rows as any[];

    if (users.length === 0) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    const user = users[0];
    const isMatch = await comparePasswords(contrasena, user.contrasena);

    if (!isMatch) {
      return res.status(401).json({ error: "Contraseña incorrecta" });
    }

    const token = jwt.sign({ id: user.id, rol: user.rol }, JWT_SECRET, {
      expiresIn: "2h",
    });

    res.status(200).json({
      message: "Login exitoso",
      token,
      usuario: {
        id: user.id,
        username: user.username,
        rol: user.rol,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error del servidor" });
  }
};
