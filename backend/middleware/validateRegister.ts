import { check, validationResult } from "express-validator";

export const validateRegister = [
  check("username")
    .isLength({ min: 3 })
    .withMessage("Username mínimo 3 caracteres"),
  check("email").isEmail().withMessage("Email inválido"),
  check("contrasena")
    .isLength({ min: 6 })
    .withMessage("Contraseña mínimo 6 caracteres"),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    next();
  },
];
