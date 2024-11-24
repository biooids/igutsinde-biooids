// @ts-nocheck
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
      phone: `${25 + phone}`,
    });

    const savedUser = await newUser.save();
    const { password: pass, ...rest } = savedUser.toObject();

    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET environment variable is missing.");
    }

    const token = jwt.sign(
      {
        id: savedUser._id,
        isAdmin: savedUser.isAdmin,
        paid: savedUser.paid,
      },
      process.env.JWT_SECRET,
      { expiresIn: "360d" }
    );

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
  } catch (error) {
    next(error);
  }
};

export const logIn = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { phone, password } = req.body;
  try {
    if (!phone || !password) {
      next(errorUtil(400, "Empty fields. All fields are required."));
      return;
    }
    const user = await Auth.findOne({ phone: `${25 + phone}` });
    if (!user) {
      next(errorUtil(404, "User not found"));
      return;
    }
    const isValidPassword = await argon2.verify(user.password, password);
    if (!isValidPassword) {
      next(errorUtil(400, "Invalid password"));
      return;
    }
    const { password: pass, ...rest } = user.toObject();

    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET environment variable is missing.");
    }

    const token = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
        paid: user.paid,
      },
      process.env.JWT_SECRET,
      { expiresIn: "360d" }
    );
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
  } catch (error) {
    next(error);
  }
};

export const getAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.user.isAdmin) {
      next(errorUtil(401, "Unauthorized access"));
      return;
    }
    const users = await Auth.find();

    res.status(200).json({
      success: true,
      message: "users fetched successfully",
      users,
    });
  } catch (error) {
    next(error);
  }
};

export const logOut = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
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
  } catch (error) {
    next(errorUtil(500, "An error occurred during logout"));
  }
};
