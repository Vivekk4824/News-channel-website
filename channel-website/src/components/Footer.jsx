const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">

      <div className="max-w-7xl mx-auto px-6 py-10 grid gap-8 md:grid-cols-4">

        {/* About */}
        <div>
          <h3 className="text-xl font-bold text-white mb-3">
            Star 24 Fast News
          </h3>
          <p className="text-sm text-gray-400">
            Star 24 Fast News is a news channel dedicated to delivering
            fast, accurate, and reliable news from Nashik, Maharashtra, India,
            and beyond.
          </p>
        </div>

        {/* Categories */}
        <div>
          <h4 className="text-white font-semibold mb-3">Categories</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Breaking News</li>
            <li>Politics</li>
            <li>Crime</li>
            <li>Education</li>
            <li>Sports</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-white font-semibold mb-3">Legal</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Disclaimer</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-3">Contact</h4>
          <p className="text-sm text-gray-400">
            Email: support@star24news.com
          </p>
          <p className="text-sm text-gray-400">
            Nashik, Maharashtra
          </p>
        </div>

        {/* Socials */}
        <div>
          <h4 className="text-white font-semibold mb-3">Contact</h4>
          <p className="text-sm text-gray-400">
            
          </p>
          <p className="text-sm text-gray-400">
            Nashik, Maharashtra
          </p>
        </div>

      </div>

      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © 2025 Star 24 Fast News. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
