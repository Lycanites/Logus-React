import express from "express";
import { loginUser, registerUser } from "../controllers/auhController";

const router = express.Router();

router.post("/registro", registerUser);
router.post("/login", loginUser);

export default router;
