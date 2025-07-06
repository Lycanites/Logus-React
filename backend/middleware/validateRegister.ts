import { Request, Response, NextFunction } from "express";

export const validateRegister = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username, email, contrasena } = req.body;

  if (!username || username.length < 3) {
    return res.status(400).json({ message: "Nombre de usuario muy corto" });
  }

  const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: "Email inválido" });
  }

  if (!contrasena || contrasena.length < 6) {
    return res.status(400).json({ message: "Contraseña débil" });
  }

  next();
};
