"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const authSchema = new mongoose_1.default.Schema({
    userName: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    paid: {
        type: Boolean,
        default: false,
    },
    datePaid: {
        type: String,
        default: "",
    },
    profilePic: {
        type: String,
        default: "https://firebasestorage.googleapis.com/v0/b/soft-biooid.appspot.com/o/xi-biooid.jpg?alt=media&token=cc88392f-090c-4361-a8a5-d5dab8d7d846",
    },
}, { timestamps: true });
const Auth = mongoose_1.default.model("Auth", authSchema);
exports.default = Auth;
