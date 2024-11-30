"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorUtil = void 0;
// @ts-nocheck
const errorUtil = (statusCode, message) => {
    const error = new Error();
    error.status = statusCode;
    error.message = message;
    return error;
};
exports.errorUtil = errorUtil;
