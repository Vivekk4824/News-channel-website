import { createContext, useContext, useState } from "react";

const LangContext = createContext();

export const useLang = () => useContext(LangContext);

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState("en");

  const translate = async (text) => {
    if (lang === "en") return text;

    const res = await fetch("/api/translate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, targetLang: "Marathi" })
    });

    const data = await res.json();
    return data.translated;
  };

  return (
    <LangContext.Provider value={{ lang, setLang, translate }}>
      {children}
    </LangContext.Provider>
  );
};
