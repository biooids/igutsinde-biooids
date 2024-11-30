"use strict";
//@ts-nocheck
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
exports.checkingUserCookie = exports.payWithFlutterWave = void 0;
const flutterwave_node_v3_1 = __importDefault(require("flutterwave-node-v3"));
const auth_model_1 = __importDefault(require("../models/auth.model"));
const errorUtil_1 = require("../utils/errorUtil");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
if (!process.env.FLW_PUBLIC_KEY || !process.env.FLW_SECRET_KEY) {
    throw new Error("FLW_PUBLIC_KEY and FLW_SECRET_KEY must be defined");
}
const flw = new flutterwave_node_v3_1.default(process.env.FLW_PUBLIC_KEY, process.env.FLW_SECRET_KEY);
const payWithFlutterWave = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Extract required payment data from request
        const paymentPayload = {
            tx_ref: req.body.tx_ref || "MC-158523s09v5050e8",
            order_id: req.body.order_id || "USS_URG_893982923s2323",
            amount: req.body.amount || "1500",
            currency: req.body.currency || "RWF",
            email: req.body.email,
            phone_number: req.body.phone_number,
            fullname: req.body.fullname,
        };
        // Call Flutterwave API with validated payment payload
        const response = yield flw.MobileMoney.rwanda(paymentPayload);
        if (response.status === "success") {
            // Get the current date in ISO format
            const currentDate = new Date().toISOString();
            // Update user record using the id
            const updatedUser = yield auth_model_1.default.findOneAndUpdate({ _id: req.body.id }, // Safely use id here
            {
                paid: true,
                datePaid: currentDate, // Set the datePaid field
            }, { new: true });
            if (!updatedUser) {
                next((0, errorUtil_1.errorUtil)(404, "User not found or not registered."));
                return;
            }
            // Remove sensitive data before sending the user data
            const _a = updatedUser.toObject(), { password: pass } = _a, rest = __rest(_a, ["password"]);
            if (!process.env.JWT_SECRET) {
                throw new Error("JWT_SECRET environment variable is missing.");
            }
            const token = jsonwebtoken_1.default.sign({
                id: updatedUser._id,
                isAdmin: updatedUser.isAdmin,
                paid: updatedUser.paid,
            }, process.env.JWT_SECRET, { expiresIn: "365d" });
            res
                .status(200)
                .cookie("access_token", token, {
                httpOnly: true,
                secure: true,
                maxAge: 1000 * 60 * 60 * 24 * 365,
            })
                .json({
                success: true,
                message: "Payment successful",
                paymentData: response,
                user: rest,
            });
        }
        else {
            next((0, errorUtil_1.errorUtil)(400, "Payment failed. Please try again."));
            return;
        }
    }
    catch (error) {
        next(error);
        return;
    }
});
exports.payWithFlutterWave = payWithFlutterWave;
const checkingUserCookie = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.user.paid) {
        next((0, errorUtil_1.errorUtil)(400, "User not paid"));
        return;
    }
    res.status(200).json({
        success: true,
        message: "User already paid",
    });
});
exports.checkingUserCookie = checkingUserCookie;
