import express, { NextFunction, Request, Response } from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";

import authRouter from "./routes/auth.routes";
import paymentRouter from "./routes/payment.routes";

const app = express();
const PORT = 3000;

if (!process.env.MONGO) {
  throw new Error("MONGO environment variable is missing.");
}
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDB Atlas connected");
  })
  .catch((error) => {
    console.log(
      "MongoDB Atlas failed to connect due to error :",
      error.message || error
    );
  });

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/payment", paymentRouter);

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  const statusCode = error.status || 500;
  const message =
    `Iki gikorwa cyanze bitewe nuko: ${error.message}` ||
    "Iki gikorwa cyanze bitewe nuko: internal server error";
  res.status(statusCode).json({ success: false, statusCode, message });
});

const server = app.listen(PORT, () => {
  const addressInfo = server.address();

  if (addressInfo && typeof addressInfo === "object") {
    const host = addressInfo.address;
    const port = addressInfo.port;
    console.log(`Server is running at http://${host}:${port}`);
  } else {
    console.error("Could not retrieve server address information.");
  }
});
