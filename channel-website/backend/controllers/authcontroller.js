import bcryptjs from "bcryptjs";
import User from "../models/usermodel.js";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

// ================= SIGNUP =================
export const signup = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    // 1️⃣ Validation
    if (!username || !email || !password) {
      return next(errorHandler(400, "All fields are required"));
    }

    // 2️⃣ Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return next(errorHandler(409, "Email already registered"));
    }

    // 3️⃣ Hash password
    const hashedPassword = bcryptjs.hashSync(password, 10);

    // 4️⃣ Create user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    // 5️⃣ Response
    res.status(201).json({
      success: true,
      message: "Signup successful",
    });

  } catch (error) {
    next(error);
  }
};

// ================= LOGIN =================
export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // 1️⃣ Validation
    if (!email || !password) {
      return next(errorHandler(400, "All fields are required"));
    }

    // 2️⃣ Find user
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(errorHandler(401, "Invalid email or password"));
    }

    // 3️⃣ Compare password
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(401, "Invalid email or password"));
    }

    // 4️⃣ Generate JWT
    const token = jwt.sign(
      { id: validUser._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    // 5️⃣ Remove password from response
    const { password: pass, ...userData } = validUser._doc;

    // 6️⃣ Send cookie + response
    res
      .status(200)
      .cookie("access_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
      })
      .json({
        success: true,
        message: "Login successful",
        user: userData,
      });

  } catch (error) {
    next(error);
  }
};


