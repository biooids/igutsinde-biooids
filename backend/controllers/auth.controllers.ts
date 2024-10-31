import argon2 from "argon2";

import { errorUtil } from "../utils/errorUtil";
import Auth from "../models/auth.model";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const signUp = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("data from req", req.body);
  const { userName, phone, password } = req.body;

  try {
    if (!userName || !phone || !password) {
      next(errorUtil(400, "Empty fields. All fields are required."));
      return;
    }
    const hashedPassword = await argon2.hash(password);
    const newUser = new Auth({
      userName,
      password: hashedPassword,
      phone,
    });

    const savedUser = await newUser.save();
    const { password: pass, ...rest } = savedUser.toObject();

    const token = jwt.sign(
      {
        id: savedUser._id,
        isAdmin: savedUser.isAdmin,
      },
      process.env.JWT_SECRET!
    );

    res
      .status(201)
      .cookie("access_token", token, {
        httpOnly: true,
        secure: true,
      })
      .json({ success: true, message: "user created successfully", rest });
  } catch (error) {
    next(error);
  }
};
