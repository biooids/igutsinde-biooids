"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logOut = exports.getAllUsers = exports.logIn = exports.signUp = void 0;
// @ts-nocheck
const argon2_1 = __importDefault(require("argon2"));
const errorUtil_1 = require("../utils/errorUtil");
const auth_model_1 = __importDefault(require("../models/auth.model"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const signUp = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { userName, phone, password } = req.body;
    try {
        if (!userName || !phone || !password) {
            next((0, errorUtil_1.errorUtil)(400, "Empty fields. All fields are required."));
            return;
        }
        const hashedPassword = yield argon2_1.default.hash(password);
        const newUser = new auth_model_1.default({
            userName,
            password: hashedPassword,
            phone: `${25 + phone}`,
        });
        const savedUser = yield newUser.save();
        const _a = savedUser.toObject(), { password: pass } = _a, rest = __rest(_a, ["password"]);
        if (!process.env.JWT_SECRET) {
            throw new Error("JWT_SECRET environment variable is missing.");
        }
        const token = jsonwebtoken_1.default.sign({
            id: savedUser._id,
            isAdmin: savedUser.isAdmin,
            paid: savedUser.paid,
        }, process.env.JWT_SECRET, { expiresIn: "360d" });
        res
            .status(201)
            .cookie("access_token", token, {
            httpOnly: true,
            secure: true,
            maxAge: 365 * 24 * 60 * 60 * 1000,
        })
            .json({
            success: true,
            message: "user created successfully",
            user: rest,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.signUp = signUp;
const logIn = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { phone, password } = req.body;
    try {
        if (!phone || !password) {
            next((0, errorUtil_1.errorUtil)(400, "Empty fields. All fields are required."));
            return;
        }
        const user = yield auth_model_1.default.findOne({ phone: `${25 + phone}` });
        if (!user) {
            next((0, errorUtil_1.errorUtil)(404, "User not found"));
            return;
        }
        const isValidPassword = yield argon2_1.default.verify(user.password, password);
        if (!isValidPassword) {
            next((0, errorUtil_1.errorUtil)(400, "Invalid password"));
            return;
        }
        const _a = user.toObject(), { password: pass } = _a, rest = __rest(_a, ["password"]);
        if (!process.env.JWT_SECRET) {
            throw new Error("JWT_SECRET environment variable is missing.");
        }
        const token = jsonwebtoken_1.default.sign({
            id: user._id,
            isAdmin: user.isAdmin,
            paid: user.paid,
        }, process.env.JWT_SECRET, { expiresIn: "360d" });
        res
            .status(200)
            .cookie("access_token", token, {
            httpOnly: true,
            secure: true,
            maxAge: 365 * 24 * 60 * 60 * 1000,
        })
            .json({
            success: true,
            message: "user logged in successfully",
            user: rest,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.logIn = logIn;
const getAllUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.user.isAdmin) {
            next((0, errorUtil_1.errorUtil)(401, "Unauthorized access"));
            return;
        }
        const users = yield auth_model_1.default.find();
        res.status(200).json({
            success: true,
            message: "users fetched successfully",
            users,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.getAllUsers = getAllUsers;
const logOut = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res
            .status(200)
            .clearCookie("access_token", {
            httpOnly: true,
            secure: true,
        })
            .json({
            success: true,
            message: "User logged out successfully",
        });
    }
    catch (error) {
        next((0, errorUtil_1.errorUtil)(500, "An error occurred during logout"));
    }
});
exports.logOut = logOut;
