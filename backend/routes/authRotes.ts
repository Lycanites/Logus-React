import express from "express";
import { loginUser, registerUser } from "../controllers/authController"; // Corrige si tu archivo se llama diferente
import { validateRegister } from "../middleware/validateRegister";
import { authenticateUser } from "../middleware/authMiddleware";
import { authorizeAdmin } from "../middleware/adminMiddleware";

const router = express.Router();

// ✅ Ruta para registro con validación
router.post("/registro", validateRegister, registerUser);

// ✅ Ruta para login
router.post("/login", loginUser);

// ✅ Ruta de prueba para admin protegida (opcional)
router.get("/admin-only", authenticateUser, authorizeAdmin, (req, res) => {
  res.json({ message: "Bienvenido, administrador autorizado." });
});

// ✅ Ruta de prueba para cualquier usuario autenticado (opcional)
router.get("/perfil", authenticateUser, (req, res) => {
  res.json({ message: `Bienvenido, ${req.user?.username}` });
});

export default router;
