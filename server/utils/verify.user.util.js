"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
//@ts-nocheck
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const errorUtil_1 = require("./errorUtil");
const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) {
        return next((0, errorUtil_1.errorUtil)(401, "Unauthorized access"));
    }
    if (!process.env.JWT_SECRET) {
        throw new Error("JWT_SECRET environment variable is missing.");
    }
    jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return next((0, errorUtil_1.errorUtil)(401, "Unauthorized access"));
        }
        req.user = user;
        next();
    });
};
exports.verifyToken = verifyToken;
