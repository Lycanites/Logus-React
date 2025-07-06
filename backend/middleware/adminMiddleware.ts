import { Request, Response, NextFunction } from "express";

export const authorizeAdmin = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.user?.rol === "admin") {
    next();
  } else {
    return res
      .status(403)
      .json({ message: "Acceso denegado: solo administradores" });
  }
};
