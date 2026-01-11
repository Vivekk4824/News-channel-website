import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import authroute from "./routes/authroute.js";
import translateRoute from "./routes/translate.js";

import User from "./models/usermodel.js";

dotenv.config();

const app = express();

// 🔹 CORS (allow frontend + cookies)
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// 🔹 Parse JSON
app.use(express.json());

// 🔹 Enable cookies
app.use(cookieParser());

// 🔹 Connect MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("Connected to MongoDB");

    // 🟢 FETCH ALL USERS HERE
    const users = await User.find({}, "username email");

    console.log("\n===== Registered Users =====");
    users.forEach((u) => {
      console.log(`Name: ${u.username} | Email: ${u.email}`);
    });
    console.log("===========================\n");
  })
  .catch((error) => console.log("DB Connection Error:", error));

// 🔹 Routes
app.use("/api/auth", authroute);
app.use("/api/translate", translateRoute);


// 🔹 Start Server
app.listen(3100, () => {
  console.log("Server is running on port 3100");
});

// 🔹 Global Error Handler
app.use((err, req, res, next) => {
  const statuscode = err.status || 500;
  const message = err.message || "Something went wrong";

  return res.status(statuscode).json({
    success: false,
    status: statuscode,
    message,
  });
});
