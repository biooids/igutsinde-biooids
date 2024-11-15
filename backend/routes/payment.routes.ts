import express from "express";
import { payWithFlutterWave } from "../controllers/payment.controllers";

const router = express.Router();
router.post("/payWithFlutterwave", payWithFlutterWave);

export default router;
