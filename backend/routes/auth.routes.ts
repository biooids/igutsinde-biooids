import express from "express";
import { logIn, signUp } from "../controllers/auth.controllers";
const router = express.Router();

router.post("/sign-up", signUp);
router.post("/log-in", logIn);

export default router;
