import express from "express";
import {
  cheCkingUserPaidCookie,
  payWithFlutterWave,
} from "../controllers/payment.controllers";
import { verifyToken } from "../utils/verify.user.util";

const router = express.Router();
router.post("/payWithFlutterWave", payWithFlutterWave);
router.get("/cheCkingUserPaidCookie", verifyToken, cheCkingUserPaidCookie);

export default router;
