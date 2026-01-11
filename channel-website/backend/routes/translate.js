import dotenv from "dotenv";
dotenv.config(); // Load .env here

import express from "express";
import { GoogleGenerativeAI } from "@google/generative-ai";

const router = express.Router();

// Check if API key is loaded
console.log("Gemini Key Loaded:", process.env.GEMINI_API_KEY ? "YES" : "NO");

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

router.post("/", async (req, res) => {
  const { text, targetLang } = req.body;

  if (!text || !targetLang) {
    return res.status(400).json({ error: "Text and targetLang are required" });
  }

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
You are a professional news translator.
Translate the following news into ${targetLang}.
Keep tone formal and suitable for a news channel.

News:
${text}
`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const translated = response.text();

    res.json({ translated });

  } catch (error) {
    console.error("Gemini Error:", error);
    res.status(500).json({ error: "Translation failed" });
  }
});

export default router;
