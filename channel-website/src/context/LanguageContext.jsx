import { createContext, useState, useContext } from "react";
import en from "../i18n/en.json";
import mr from "../i18n/mr.json";

const LanguageContext = createContext();

const translations = { en, mr };

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("en");

  const t = (key) => translations[lang][key] || key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => useContext(LanguageContext);
