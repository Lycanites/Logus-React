import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import connection from "../database/db";

const router = express.Router();

//Ruta para hacer los Registros, FUNCIONA NO TOCAR

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

//Ruta para Login

router.post("/login", (req, res) => {
  const { email, contrasena } = req.body;

  console.log("Datos recibidos:", email, contrasena); // ✅

  if (!email || !contrasena) {
    return res.status(400).json({ error: "Email y contraseña requeridos" });
  }

  const query = "SELECT * FROM usuarios WHERE email = ?";
  connection.query(query, [email], async (err, results: any[]) => {
    if (err) {
      console.error("Error en query:", err); // ✅
      return res.status(500).json({ error: "Error en el servidor" });
    }

    if (results.length === 0) {
      console.warn("No se encontró el usuario con ese correo"); // ✅
      return res.status(401).json({ error: "Credenciales incorrectas" });
    }

    const usuario = results[0];
    const passwordMatch = await bcrypt.compare(contrasena, usuario.contrasena);

    if (!passwordMatch) {
      console.warn("Contraseña incorrecta"); // ✅
      return res.status(401).json({ error: "Credenciales incorrectas" });
    }

    const token = jwt.sign(
      {
        id: usuario.id,
        email: usuario.email,
        username: usuario.username,
        rol: usuario.rol,
      },
      process.env.JWT_SECRET as string,
      { expiresIn: "2h" }
    );

    res.json({
      message: "Inicio de sesión exitoso",
      token,
      rol: usuario.rol,
    });
  });
});

export default router;
