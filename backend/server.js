const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();

// Configuración CORS más específica
app.use(
  cors({
    origin: "http://localhost:3000", // Actualizado para coincidir con el puerto de React
    methods: ["GET", "POST", "OPTIONS"], // Agregado OPTIONS explícitamente
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
    exposedHeaders: ["Access-Control-Allow-Origin"],
  })
);

app.options("*", cors());

app.use(express.json());

// Resto de la configuración de la base de datos y el pool se mantiene igual
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Logus_SL23",
  database: "logusreact",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Variable para almacenar los intentos de inicio de sesión
const loginAttempts = new Map();

// Función para limpiar los intentos después de un tiempo
const clearLoginAttempts = (key) => {
  setTimeout(() => {
    loginAttempts.delete(key);
  }, 30 * 60 * 1000); // 30 minutos
};

// Ruta de registro
app.post("/api/register", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Validaciones básicas
    if (!username || !email || !password) {
      return res
        .status(400)
        .json({ message: "Todos los campos son requeridos" });
    }

    // Verificar si el usuario o email ya existen
    const [existingUsers] = await pool.execute(
      "SELECT * FROM Users WHERE username = ? OR email = ?",
      [username, email]
    );

    if (existingUsers.length > 0) {
      const existingUser = existingUsers[0];
      if (existingUser.username === username) {
        return res
          .status(400)
          .json({ message: "El nombre de usuario ya está en uso" });
      }
      if (existingUser.email === email) {
        return res.status(400).json({ message: "El email ya está registrado" });
      }
    }

    // Hash de la contraseña
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Insertar nuevo usuario
    await pool.execute(
      "INSERT INTO Users (username, email, password) VALUES (?, ?, ?)",
      [username, email, hashedPassword]
    );

    res.status(201).json({ message: "Usuario registrado exitosamente" });
  } catch (error) {
    console.error("Error en el registro:", error);
    res.status(500).json({ message: "Error en el servidor" });
  }
});

// Ruta de login
app.post("/api/login", async (req, res) => {
  const { usernameOrEmail, password } = req.body;

  try {
    if (!usernameOrEmail || !password) {
      return res.status(400).json({
        error: "MISSING_FIELDS",
        message: "Usuario/email y contraseña son requeridos",
      });
    }

    const [users] = await pool.execute(
      "SELECT * FROM Users WHERE username = ? OR email = ?",
      [usernameOrEmail, usernameOrEmail]
    );

    if (users.length === 0) {
      return res.status(401).json({
        error: "USER_NOT_FOUND",
        message: "Usuario no encontrado",
      });
    }

    const user = users[0];
    const attemptKey = `${user.id}-${req.ip}`;
    const attempts = loginAttempts.get(attemptKey) || 0;

    if (attempts >= 3) {
      return res.status(429).json({
        error: "ACCOUNT_LOCKED",
        message: "Cuenta bloqueada temporalmente",
        locked: true,
      });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      loginAttempts.set(attemptKey, attempts + 1);
      clearLoginAttempts(attemptKey);

      return res.status(401).json({
        error: "INVALID_PASSWORD",
        message: "Contraseña incorrecta",
        attempts: attempts + 1,
      });
    }

    loginAttempts.delete(attemptKey);

    const token = jwt.sign(
      {
        userId: user.id,
        username: user.username,
        email: user.email,
      },
      "26d6d0e900425335604fe42b5f80cad22223c0c92b5920d7e7d3e25add516cdb2ea386acb4b8745c278839925a4dd69c9b8748b2572ce2bfb2c67a3ceffbf8bb",
      { expiresIn: "24h" }
    );

    res.json({
      message: "Login exitoso",
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Error en el login:", error);
    res.status(500).json({
      error: "SERVER_ERROR",
      message: "Error en el servidor",
    });
  }
});

// Middleware de autenticación para rutas protegidas
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Token no proporcionado" });
  }

  jwt.verify(
    token,
    "26d6d0e900425335604fe42b5f80cad22223c0c92b5920d7e7d3e25add516cdb2ea386acb4b8745c278839925a4dd69c9b8748b2572ce2bfb2c67a3ceffbf8bb",
    (err, user) => {
      if (err) {
        return res.status(403).json({ message: "Token inválido" });
      }
      req.user = user;
      next();
    }
  );
};

// Ejemplo de ruta protegida
app.get("/api/user-profile", authenticateToken, async (req, res) => {
  try {
    const [user] = await pool.execute(
      "SELECT id, username, email, fecha_registro FROM Users WHERE id = ?",
      [req.user.userId]
    );

    if (user.length === 0) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    res.json(user[0]);
  } catch (error) {
    console.error("Error al obtener perfil:", error);
    res.status(500).json({ message: "Error en el servidor" });
  }
});

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
