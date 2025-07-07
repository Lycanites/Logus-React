import express from "express";
import { loginUser, registerUser } from "../controllers/authController";
import { validateRegister } from "../middleware/validateRegister";
import { authenticateUser } from "../middleware/authMiddleware";
import { authorizeAdmin } from "../middleware/roleMiddleware";

const router = express.Router();

// Registro con validación de datos
router.post("/registro", validateRegister, registerUser);

// Login
router.post("/login", loginUser);

// Ruta para admins (protegida)
router.get("/admin-only", authenticateUser, authorizeAdmin, (_req, res) => {
  res.status(200).json({ message: "Bienvenido, administrador autorizado." });
});

// Ruta para usuarios autenticados
router.get("/perfil", authenticateUser, (req, res) => {
  // Si usas TypeScript, puedes necesitar un cast o una interface para req.user
  const username = (req as any).user?.username || "Usuario";
  res.status(200).json({ message: `Bienvenido, ${username}` });
});

export default router;
