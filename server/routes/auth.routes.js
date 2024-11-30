"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_controllers_1 = require("../controllers/auth.controllers");
const verify_user_util_1 = require("../utils/verify.user.util");
const router = express_1.default.Router();
router.post("/sign-up", auth_controllers_1.signUp);
router.post("/log-in", auth_controllers_1.logIn);
router.post("/log-out", auth_controllers_1.logOut);
router.get("/getAllUsers", verify_user_util_1.verifyToken, auth_controllers_1.getAllUsers);
exports.default = router;
