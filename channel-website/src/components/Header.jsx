import { Link, NavLink } from "react-router-dom";
import { useLang } from "../context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const { t, lang } = useLang();

  // 🔹 Example bilingual breaking news headlines
  const breakingNews =
    lang === "mr"
      ? "🔴 ब्रेकिंग न्यूज: नाशिक पावसाचा इशारा • शहरातील वाहतूक अपडेट • स्थानिक निवडणुका • क्रीडा बातम्या • शिक्षण क्षेत्रातील अपडेट"
      : "🔴 Breaking News: Nashik rain alert • City traffic update • Local elections • Sports highlights • Education news";

  return (
    <header className="w-full">

      {/* Navbar */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Left: Logo */}
          <Link to="/">
            <img
              src="/assets/logo.png"
              alt="News Channel Logo"
              className="h-10 cursor-pointer md:h-15 md:w-30"
            />
          </Link>

          {/* Center: Navigation */}
          <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700">

            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-red-600 font-semibold" : "hover:text-red-600"
              }
            >
              {t("home")}
            </NavLink>

            <NavLink
              to="/india"
              className={({ isActive }) =>
                isActive ? "text-red-600 font-semibold" : "hover:text-red-600"
              }
            >
              {t("india")}
            </NavLink>

            <NavLink
              to="/world"
              className={({ isActive }) =>
                isActive ? "text-red-600 font-semibold" : "hover:text-red-600"
              }
            >
              {t("world")}
            </NavLink>

            <NavLink
              to="/sports"
              className={({ isActive }) =>
                isActive ? "text-red-600 font-semibold" : "hover:text-red-600"
              }
            >
              {t("sports")}
            </NavLink>

          </nav>

          {/* Right side — Language + Auth buttons */}
          <div className="flex items-center gap-3">

            {/* 🌍 Language Switch */}
            <LanguageSwitcher />

            {/* Login */}
            <Link
              to="/sign-in"
              className="px-4 py-1.5 border border-red-600 text-red-600 rounded hover:bg-red-600 hover:text-white transition"
            >
              {t("login") || "Login"}
            </Link>

            {/* Sign Up */}
            <Link
              to="/sign-up"
              className="px-4 py-1.5 bg-red-600 text-white rounded font-semibold hover:bg-red-700 transition"
            >
              {t("sign_up") || "Sign Up"}
            </Link>
          </div>

        </div>
      </div>

      {/* 🔴 Breaking News Bar */}
      <div className="bg-red-700 text-white overflow-hidden">
        <div className="animate-marquee-slow whitespace-nowrap py-2 font-semibold">
          {breakingNews}
        </div>
      </div>

    </header>
  );
};

export default Header;
