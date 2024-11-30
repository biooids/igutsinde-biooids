"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const payment_controllers_1 = require("../controllers/payment.controllers");
const verify_user_util_1 = require("../utils/verify.user.util");
const router = express_1.default.Router();
router.post("/payWithFlutterWave", payment_controllers_1.payWithFlutterWave);
router.get("/cheCkingUserPaidCookie", verify_user_util_1.verifyToken, payment_controllers_1.checkingUserCookie);
exports.default = router;
