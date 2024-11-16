import express from "express";
import {
  checkingUserCookie,
  payWithFlutterWave,
} from "../controllers/payment.controllers";
import { verifyToken } from "../utils/verify.user.util";

const router = express.Router();
router.post("/payWithFlutterWave", payWithFlutterWave);
router.get("/cheCkingUserPaidCookie", verifyToken, checkingUserCookie);

export default router;
