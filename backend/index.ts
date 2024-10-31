import express, { NextFunction, Request, Response } from "express";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";

import authRouter from "./routes/auth.routes";

import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = 3000;

mongoose
  .connect(process.env.MONGO!)
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

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  const statusCode = error.status || 500;
  const message =
    `action failed due to : ${error.message}` ||
    "action failed due to : internal server error";
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
