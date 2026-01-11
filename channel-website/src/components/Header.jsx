import { Link, NavLink } from "react-router-dom";
import { useLang } from "../context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import { useEffect, useState } from "react";

const Header = () => {
  const { lang } = useLang();

  // English Navbar
  const navEN = {
    home: "Home",
    india: "India",
    world: "World",
    sports: "Sports",
    login: "Login",
    signup: "Sign Up",
    breaking:
      "🔴 Breaking News: Nashik rain alert • City traffic update • Local elections • Sports highlights • Education news"
  };

  // Marathi Navbar
  const navMR = {
    home: "मुख्यपृष्ठ",
    india: "भारत",
    world: "जग",
    sports: "क्रीडा",
    login: "लॉगिन",
    signup: "साइन अप",
    breaking:
      "🔴 ब्रेकिंग न्यूज: नाशिक पावसाचा इशारा • शहरातील वाहतूक अपडेट • स्थानिक निवडणुका • क्रीडा बातम्या • शिक्षण अपडेट"
  };

  const [nav, setNav] = useState(navEN);

  // Switch nav when language changes
  useEffect(() => {
    if (lang === "mr") setNav(navMR);
    else setNav(navEN);
  }, [lang]);

  return (
    <header className="w-full">

      {/* Navbar */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <Link to="/">
            <img
              src="/assets/logo.png"
              alt="News Channel Logo"
              className="h-10 cursor-pointer md:h-15 md:w-30"
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
            <NavLink to="/" className={({ isActive }) =>
              isActive ? "text-red-600 font-semibold" : "hover:text-red-600"
            }>
              {nav.home}
            </NavLink>

            <NavLink to="/india" className={({ isActive }) =>
              isActive ? "text-red-600 font-semibold" : "hover:text-red-600"
            }>
              {nav.india}
            </NavLink>

            <NavLink to="/world" className={({ isActive }) =>
              isActive ? "text-red-600 font-semibold" : "hover:text-red-600"
            }>
              {nav.world}
            </NavLink>

            <NavLink to="/sports" className={({ isActive }) =>
              isActive ? "text-red-600 font-semibold" : "hover:text-red-600"
            }>
              {nav.sports}
            </NavLink>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <LanguageSwitcher />

            <Link
              to="/sign-in"
              className="px-4 py-1.5 border border-red-600 text-red-600 rounded hover:bg-red-600 hover:text-white transition"
            >
              {nav.login}
            </Link>

            <Link
              to="/sign-up"
              className="px-4 py-1.5 bg-red-600 text-white rounded font-semibold hover:bg-red-700 transition"
            >
              {nav.signup}
            </Link>
          </div>

        </div>
      </div>

      {/* Breaking News */}
      <div className="bg-red-700 text-white overflow-hidden">
        <div className="animate-marquee-slow whitespace-nowrap py-2 font-semibold">
          {nav.breaking}
        </div>
      </div>

    </header>
  );
};

export default Header;
