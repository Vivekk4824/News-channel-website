import { Link, NavLink } from "react-router-dom";

const Header = () => {
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
              Home
            </NavLink>

            <NavLink
              to="/india"
              className={({ isActive }) =>
                isActive ? "text-red-600 font-semibold" : "hover:text-red-600"
              }
            >
              India
            </NavLink>

            <NavLink
              to="/world"
              className={({ isActive }) =>
                isActive ? "text-red-600 font-semibold" : "hover:text-red-600"
              }
            >
              World
            </NavLink>

            <NavLink
              to="/sports"
              className={({ isActive }) =>
                isActive ? "text-red-600 font-semibold" : "hover:text-red-600"
              }
            >
              Sports
            </NavLink>

          </nav>

          {/* Right: Login / Sign Up */}
          <div className="flex gap-3">
            <Link
              to="/sign-in"
              className="px-4 py-1.5 border border-red-600 text-red-600 rounded hover:bg-red-600 hover:text-white transition"
            >
              Login
            </Link>

            <Link
              to="/sign-up"
              className="px-4 py-1.5 bg-red-600 text-white rounded font-semibold hover:bg-red-700 transition"
            >
              Sign Up
            </Link>
          </div>

        </div>
      </div>

      {/* 🔴 Breaking News Bar */}
      <div className="bg-red-700 text-white overflow-hidden">
        <div className="animate-marquee-slow whitespace-nowrap py-2 font-semibold">
          🔴 Breaking News: Nashik rain alert • City traffic update • Local elections • Sports highlights • Education news
        </div>
      </div>

    </header>
  );
};

export default Header;
