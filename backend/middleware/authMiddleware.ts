// middleware/authMiddleware.ts
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const jwtSecret = process.env.JWT_SECRET || "secretkey";

interface JwtPayload {
  id: number;
  rol: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload;
    }
  }
}

export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: "Token requerido" });

  const token = authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Token inválido" });

  jwt.verify(token, jwtSecret, (err, decoded) => {
    if (err)
      return res.status(403).json({ error: "Token inválido o expirado" });
    req.user = decoded as JwtPayload;
    next();
  });
};
