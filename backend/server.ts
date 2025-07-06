import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import areasRouter from "./routes/areas";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Configuración CORS para permitir localhost:3000 y también el dominio del frontend en producción
const allowedOrigins = ["http://localhost:3000", "https://logus.site"];

app.use(
  cors({
    origin: function (origin, callback) {
      // Permitir requests sin origin (como herramientas tipo Postman)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg = `La política CORS no permite acceso desde el origen: ${origin}`;
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.use("/api/areas", areasRouter);

// Opciones para preflight requests (OPTIONS)
app.options(
  "*",
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en puerto ${PORT}`);
});
