//@ts-nocheck

import { NextFunction, Request, Response } from "express";
import Flutterwave from "flutterwave-node-v3";

const flw = new Flutterwave(
  process.env.FLW_PUBLIC_KEY,
  process.env.FLW_SECRET_KEY
);

export const payWithFlutterWave = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // console.log("data from body", req.body);
  try {
    const payload = {
      tx_ref: "MC-158523s09v5050e8",
      order_id: "USS_URG_893982923s2323",
      amount: "1300",
      currency: "RWF",
      email: "olufemi@flw.com",
      phone_number: "054709929220",
      fullname: "John Madakin",
    };
    // const response = await flw.MobileMoney.rwanda(req.body);
    const response = await flw.MobileMoney.rwanda(payload);
    console.log(response);
    res.json({
      success: true,
      message: "Payment successful",
      paymentData: response,
    });
  } catch (error) {
    next(error);
  }
};
