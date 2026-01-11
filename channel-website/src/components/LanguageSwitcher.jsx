import { useLang } from "../context/LanguageContext";

const LanguageSwitcher = () => {
  const { lang, setLang } = useLang();

  return (
    <div className="lang-switch">
      <button
        className={lang === "en" ? "lang-btn active" : "lang-btn"}
        onClick={() => setLang("en")}
      >
        EN
      </button>

      <button
        className={lang === "mr" ? "lang-btn active" : "lang-btn"}
        onClick={() => setLang("mr")}
      >
        मराठी
      </button>
    </div>
  );
};

export default LanguageSwitcher;
