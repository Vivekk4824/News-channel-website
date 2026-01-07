import { useLang } from "../context/LanguageContext";

const LanguageSwitcher = () => {
  const { lang, setLang } = useLang();

  return (
    <div className="flex gap-2">
      <button
        className={`px-3 py-1 rounded border ${
          lang === "en" ? "bg-red-600 text-white" : "text-gray-700"
        }`}
        onClick={() => setLang("en")}
      >
        EN
      </button>
      <button
        className={`px-3 py-1 rounded border ${
          lang === "mr" ? "bg-red-600 text-white" : "text-gray-700"
        }`}
        onClick={() => setLang("mr")}
      >
        MR
      </button>
    </div>
  );
};

export default LanguageSwitcher;
