import express from "express";
import { getAllUsers, logIn, signUp } from "../controllers/auth.controllers";
import { verifyToken } from "../utils/verify.user.util";
const router = express.Router();

router.post("/sign-up", signUp);
router.post("/log-in", logIn);
router.get("/getAllUsers", verifyToken, getAllUsers);

export default router;
