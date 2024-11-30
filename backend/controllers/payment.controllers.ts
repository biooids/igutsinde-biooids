//@ts-nocheck

import { NextFunction, Request, Response } from "express";
import Flutterwave from "flutterwave-node-v3";
import Auth from "../models/auth.model";
import { errorUtil } from "../utils/errorUtil";
import jwt from "jsonwebtoken";

if (!process.env.FLW_PUBLIC_KEY || !process.env.FLW_SECRET_KEY) {
  throw new Error("FLW_PUBLIC_KEY and FLW_SECRET_KEY must be defined");
}

const flw = new Flutterwave(
  process.env.FLW_PUBLIC_KEY,
  process.env.FLW_SECRET_KEY
);

export const payWithFlutterWave = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log("Data from body:", req.body);

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
    const response = await flw.MobileMoney.rwanda(paymentPayload);
    console.log("Flutterwave Response:", response);

    if (response.status === "success") {
      // Get the current date in ISO format
      const currentDate = new Date().toISOString();

      // Update user record using the id
      const updatedUser = await Auth.findOneAndUpdate(
        { _id: req.body.id }, // Safely use id here
        {
          paid: true,
          datePaid: currentDate, // Set the datePaid field
        },
        { new: true }
      );

      if (!updatedUser) {
        next(errorUtil(404, "User not found or not registered."));
        return;
      }

      // Remove sensitive data before sending the user data
      const { password: pass, ...rest } = updatedUser.toObject();

      if (!process.env.JWT_SECRET) {
        throw new Error("JWT_SECRET environment variable is missing.");
      }

      const token = jwt.sign(
        {
          id: updatedUser._id,
          isAdmin: updatedUser.isAdmin,
          paid: updatedUser.paid,
        },
        process.env.JWT_SECRET,
        { expiresIn: "365d" }
      );

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
    } else {
      next(errorUtil(400, "Payment failed. Please try again."));
      return;
    }
  } catch (error) {
    next(error);
    return;
  }
};

export const checkingUserCookie = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.user.paid) {
    next(errorUtil(400, "User not paid"));
    return;
  }
  res.status(200).json({
    success: true,
    message: "User already paid",
  });
};
