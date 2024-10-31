import express from "express";
import { signUp } from "../controllers/auth.controllers";
const app = express();
const router = express.Router();

router.post("/sign-up", signUp);

export default router;
