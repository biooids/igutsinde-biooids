//@ts-nocheck
import jwt from "jsonwebtoken";
import { errorUtil } from "./errorUtil";
import { NextFunction, Request, Response } from "express";

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies.access_token;

  if (!token) {
    return next(errorUtil(401, "Unauthorized access"));
  }

  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET environment variable is missing.");
  }

  jwt.verify(token, process.env.JWT_SECRET, (err: any, user: any) => {
    if (err) {
      return next(errorUtil(401, "Unauthorized access"));
    }

    req.user = user;

    next();
  });
};
