// middleware/roleMiddleware.ts
import { Request, Response, NextFunction } from "express";

export const authorizeRole = (allowedRoles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = req.user;
    if (!user) return res.status(401).json({ error: "No autorizado" });

    if (!allowedRoles.includes(user.rol)) {
      return res.status(403).json({ error: "Permiso denegado" });
    }

    next();
  };
};
