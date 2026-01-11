import express from "express";
// no import needed – Node 18+ has fetch built-in


const router = express.Router();

router.post("/", async (req, res) => {
  const { text, targetLang } = req.body;

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: `Translate this into ${targetLang}. Keep news style.`
          },
          {
            role: "user",
            content: text
          }
        ]
      })
    });

    const data = await response.json();
    res.json({ translated: data.choices[0].message.content });

  } catch (err) {
    res.status(500).json({ error: "Translation failed" });
  }
});

export default router;
