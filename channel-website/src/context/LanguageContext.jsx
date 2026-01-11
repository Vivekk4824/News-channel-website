import { createContext, useContext, useState } from "react";

const LangContext = createContext();

export const useLang = () => useContext(LangContext);

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState("en");

  async function translate(text) {
    if (lang === "en") return text;

    try {
      const res = await fetch("http://localhost:3100/api/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text,
          targetLang: "Marathi"
        })
      });

      const data = await res.json();
      return data.translated;
    } catch (err) {
      console.error("Translation failed", err);
      return text;
    }
  }

  return (
    <LangContext.Provider value={{ lang, setLang, translate }}>
      {children}
    </LangContext.Provider>
  );
};
