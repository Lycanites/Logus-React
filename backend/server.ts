import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import areasRouter from "./routes/areas";
import authRouter from "./routes/auth";
import userRouter from "./routes/user";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

// 🌐 Lista de dominios permitidos
const allowedOrigins = [
  "http://localhost:3000",
  "https://logus.site",
  "https://logus-react.onrender.com",
];

// ✅ CORS - solo una vez
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true); // Postman, curl, etc.
      if (allowedOrigins.includes(origin)) return callback(null, true);
      return callback(
        new Error(`Origen no permitido por CORS: ${origin}`),
        false
      );
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// ✅ Middleware global
app.use(express.json());

// ✅ Rutas organizadas
app.use("/api/areas", areasRouter);
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

// ✅ Ruta de prueba para comprobar que Render lo detecta
app.get("/", (req, res) => {
  res.send("API funcionando correctamente 🟢");
});

// ✅ Escuchar en 0.0.0.0
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor backend corriendo en puerto ${PORT}`);
});
