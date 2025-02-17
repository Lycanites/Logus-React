// Servidor definitivo con Express, MySQL y JWT
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const app = express();

// Configuración CORS
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(express.json());

// Configuración de la base de datos
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Logus_SL23",
  database: "logusreact",
  waitForConnections: true,
  connectionLimit: 10,
});

const jwtSecret = process.env.JWT_SECRET || "jwt_default_secret";

// Rutas de usuario
app.post("/api/register", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    if (!username || !email || !password) {
      return res
        .status(400)
        .json({ message: "Todos los campos son requeridos" });
    }

    const [existingUsers] = await pool.execute(
      "SELECT * FROM Users WHERE username = ? OR email = ?",
      [username, email]
    );
    if (existingUsers.length > 0) {
      return res
        .status(400)
        .json({ message: "El nombre de usuario o email ya está en uso" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await pool.execute(
      "INSERT INTO Users (username, email, password, fecha_registro) VALUES (?, ?, ?, NOW())",
      [username, email, hashedPassword]
    );

    res.status(201).json({ message: "Usuario registrado exitosamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error en el servidor" });
  }
});

app.post("/api/login", async (req, res) => {
  const { usernameOrEmail, password } = req.body;
  try {
    const [users] = await pool.execute(
      "SELECT * FROM Users WHERE username = ? OR email = ?",
      [usernameOrEmail, usernameOrEmail]
    );

    if (users.length === 0) {
      return res.status(401).json({ message: "Usuario no encontrado" });
    }

    const user = users[0];
    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return res.status(401).json({ message: "Contraseña incorrecta" });
    }

    const token = jwt.sign(
      { userId: user.Id, username: user.username, email: user.email },
      jwtSecret,
      { expiresIn: "24h" }
    );

    res.json({
      message: "Login exitoso",
      token,
      user: {
        id: user.Id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error en el servidor" });
  }
});

app.get("/api/user-profile", async (req, res) => {
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token)
    return res.status(401).json({ message: "Token no proporcionado" });

  try {
    const decoded = jwt.verify(token, jwtSecret);
    const [user] = await pool.execute(
      "SELECT id, username, email, fecha_registro FROM Users WHERE id = ?",
      [decoded.userId]
    );

    if (user.length === 0) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    res.json(user[0]);
  } catch (error) {
    console.error(error);
    res.status(403).json({ message: "Token inválido" });
  }
});

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

/* WEB SOCKETS */

const WebSocket = require("ws");

const server = new WebSocket.Server({ port: 8080 });

let clients = [];

server.on("connection", (ws) => {
  clients.push(ws);

  ws.on("message", (message) => {
    console.log(`Mensaje recibido: ${message}`);

    // Reenvía el mensaje a todos los clientes
    clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  ws.on("close", () => {
    clients = clients.filter((client) => client !== ws);
  });
});

console.log("Servidor WebSocket en ejecución en el puerto 8080");
