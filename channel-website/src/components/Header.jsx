import { Link, NavLink } from "react-router-dom";
import { useLang } from "../context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import { useEffect, useState } from "react";
import BreakingNews from "./BreakingNews";


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

    {/* 🔵 TOP NAVBAR */}
    <div className="news-header">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-start gap-16">


        {/* Logo */}
        <Link to="/" className="news-logo">
          STAR <span>24</span>  FAST NEWS
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8 text-white font-semibold text-sm">
          <NavLink to="/" className={({ isActive }) =>
            isActive ? "text-yellow-400" : "hover:text-yellow-400"
          }>
            {nav.home}
          </NavLink>

          <NavLink to="/india" className={({ isActive }) =>
            isActive ? "text-yellow-400" : "hover:text-yellow-400"
          }>
            {nav.india}
          </NavLink>

          <NavLink to="/world" className={({ isActive }) =>
            isActive ? "text-yellow-400" : "hover:text-yellow-400"
          }>
            {nav.world}
          </NavLink>

          <NavLink to="/sports" className={({ isActive }) =>
            isActive ? "text-yellow-400" : "hover:text-yellow-400"
          }>
            {nav.sports}
          </NavLink>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <LanguageSwitcher />

          <Link to="/sign-in" className="news-btn bg-white text-blue-900">
            {nav.login}
          </Link>

          <Link to="/sign-up" className="news-btn bg-yellow-400 text-black">
            {nav.signup}
          </Link>
        </div>

      </div>
    </div>

    {/* 🔴 BREAKING NEWS BAR */}
    <BreakingNews />


  </header>
);

  
};

export default Header;
