const Header = () => {
  return (
    <header className="w-full">

      {/* Navbar */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Left: Logo */}
          <h1 className="text-2xl font-bold text-red-600">
            Star 24 Fast News
          </h1>

          {/* Center: Navigation */}
          <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
            <span className="cursor-pointer hover:text-red-600">Home</span>
            <span className="cursor-pointer hover:text-red-600">India</span>
            <span className="cursor-pointer hover:text-red-600">World</span>
            <span className="cursor-pointer hover:text-red-600">Sports</span>
          </nav>

          {/* Right: Login / Sign Up (ALWAYS visible) */}
          <div className="flex gap-3">
            <button className="px-4 py-1.5 border border-red-600 text-red-600 rounded hover:bg-red-600 hover:text-white transition">
              Login
            </button>
            <button className="px-4 py-1.5 bg-red-600 text-white rounded font-semibold hover:bg-red-700 transition">
              Sign Up
            </button>
          </div>

        </div>
      </div>

      {/* 🔴 Moving Breaking News Bar */}
      <div className="bg-red-600 text-white overflow-hidden">
        <div className="animate-marquee-slow whitespace-nowrap py-2 font-semibold">
          🔴 Breaking News: Nashik rain alert • City traffic update • Local elections • Sports highlights • Education news
        </div>
      </div>

    </header>
  );
};

export default Header;
