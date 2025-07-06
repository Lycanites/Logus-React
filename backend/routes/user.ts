// routes/users.ts
import express from "express";
import connection from "../database/db";
import bcrypt from "bcrypt";
import { authenticateToken } from "../middleware/authMiddleware";
import { RowDataPacket, ResultSetHeader } from "mysql2";
import { authorizeRole } from "../middleware/roleMiddleware";

const router = express.Router();

// Obtener datos del usuario (solo él mismo o admin)
router.get("/:id", authenticateToken, async (req, res) => {
  const userId = parseInt(req.params.id);
  const requester = req.user!;

  // Solo puede consultar su propio usuario o admin
  if (requester.id !== userId && requester.rol !== "admin") {
    return res.status(403).json({ error: "Permiso denegado" });
  }

  connection.query(
    "SELECT id, username, age, email, rol, fecha_registro FROM usuarios WHERE id = ?",
    [userId],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });

      // Hacemos cast a RowDataPacket[] para que TS entienda que es un array
      const rows = results as RowDataPacket[];

      if (rows.length === 0)
        return res.status(404).json({ error: "Usuario no encontrado" });
      res.json(rows[0]);
    }
  );
});

// Modificar datos del usuario (solo él mismo o admin)
router.put("/:id", authenticateToken, async (req, res) => {
  const userId = parseInt(req.params.id);
  const requester = req.user!;
  const { username, email, age, contrasena } = req.body;

  if (requester.id !== userId && requester.rol !== "admin") {
    return res.status(403).json({ error: "Permiso denegado" });
  }

  // Validaciones mínimas (puedes agregar más)
  if (!username || !email) {
    return res.status(400).json({ error: "Username y email son requeridos" });
  }

  // Si envía contraseña, la ciframos
  const updateUser = async () => {
    let hashedPassword: string | null = null;
    if (contrasena) {
      hashedPassword = await bcrypt.hash(contrasena, 10);
    }

    const queryParams = [username, email, age || null];
    let sql = "UPDATE usuarios SET username = ?, email = ?, age = ?";
    if (hashedPassword) {
      sql += ", contrasena = ?";
      queryParams.push(hashedPassword);
    }
    sql += " WHERE id = ?";
    queryParams.push(userId);

    connection.query(sql, queryParams, (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: "Usuario actualizado correctamente" });
    });
  };

  updateUser();
});

// Borrar usuario (solo él mismo o admin)
router.delete("/:id", authenticateToken, (req, res) => {
  const userId = parseInt(req.params.id);
  const requester = req.user!;

  if (requester.id !== userId && requester.rol !== "admin") {
    return res.status(403).json({ error: "Permiso denegado" });
  }

  connection.query(
    "DELETE FROM usuarios WHERE id = ?",
    [userId],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });

      // Hacemos cast a ResultSetHeader para acceder a affectedRows
      const result = results as ResultSetHeader;

      if (result.affectedRows === 0)
        return res.status(404).json({ error: "Usuario no encontrado" });
      res.json({ message: "Usuario eliminado correctamente" });
    }
  );
});

export default router;
