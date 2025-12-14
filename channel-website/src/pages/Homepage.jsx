import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <main className="flex-1 bg-gray-100">

      {/* 🌟 HERO / CHANNEL INTRO (CENTERED & STRONG) */}
      <section className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4"
          >
            Star 24 Fast News
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto mb-6"
          >
            Your trusted local news channel delivering fast, accurate, and
            reliable updates from <span className="font-semibold">Nashik</span>,
            Maharashtra, India, and across the world.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-sm text-gray-500 max-w-2xl mx-auto mb-10"
          >
            Covering breaking news, politics, crime, education, sports,
            technology, and important local events — 24×7 journalism you can trust.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            <div className="bg-gray-100 rounded-lg py-4">
              <p className="text-2xl font-bold text-red-600">24×7</p>
              <p className="text-sm text-gray-600">News Coverage</p>
            </div>

            <div className="bg-gray-100 rounded-lg py-4">
              <p className="text-2xl font-bold text-red-600">100+</p>
              <p className="text-sm text-gray-600">Local Stories</p>
            </div>

            <div className="bg-gray-100 rounded-lg py-4">
              <p className="text-2xl font-bold text-red-600">Trusted</p>
              <p className="text-sm text-gray-600">Journalism</p>
            </div>

            <div className="bg-gray-100 rounded-lg py-4">
              <p className="text-2xl font-bold text-red-600">Fast</p>
              <p className="text-sm text-gray-600">Live Updates</p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 📰 HEADLINES */}
      <section className="px-6 py-10 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">
          Latest Headlines
        </h2>

        <div className="grid gap-6 md:grid-cols-2">

          {/* Headline 1 */}
          <motion.article
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white p-6 rounded-lg shadow"
          >
            <span className="inline-block mb-2 text-xs font-semibold text-red-600 uppercase">
              Breaking
            </span>
            <h3 className="text-lg font-bold mb-2">
              Heavy Rainfall Disrupts Traffic in Nashik
            </h3>
            <p className="text-gray-600">
              IMD issues yellow alert as waterlogging reported in low-lying areas.
            </p>
          </motion.article>

          {/* Headline 2 */}
          <motion.article
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-lg shadow"
          >
            <span className="inline-block mb-2 text-xs font-semibold text-purple-600 uppercase">
              Politics
            </span>
            <h3 className="text-lg font-bold mb-2">
              Local Leaders Hold Meeting Ahead of Elections
            </h3>
            <p className="text-gray-600">
              Key decisions expected to impact upcoming municipal polls.
            </p>
          </motion.article>

          {/* Headline 3 */}
          <motion.article
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-6 rounded-lg shadow"
          >
            <span className="inline-block mb-2 text-xs font-semibold text-blue-600 uppercase">
              Education
            </span>
            <h3 className="text-lg font-bold mb-2">
              Education Department Releases New Academic Guidelines
            </h3>
            <p className="text-gray-600">
              Schools and colleges to follow revised curriculum rules.
            </p>
          </motion.article>

          {/* Headline 4 */}
          <motion.article
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white p-6 rounded-lg shadow"
          >
            <span className="inline-block mb-2 text-xs font-semibold text-green-600 uppercase">
              Events
            </span>
            <h3 className="text-lg font-bold mb-2">
              Cultural Festival Attracts Large Crowd in Nashik
            </h3>
            <p className="text-gray-600">
              Artists from across Maharashtra perform at the annual event.
            </p>
          </motion.article>

          {/* Headline 5 */}
          <motion.article
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-6 rounded-lg shadow"
          >
            <span className="inline-block mb-2 text-xs font-semibold text-indigo-600 uppercase">
              Technology
            </span>
            <h3 className="text-lg font-bold mb-2">
              Nashik Startup Launches AI-Based Farming App
            </h3>
            <p className="text-gray-600">
              The app aims to help farmers improve crop yield using AI.
            </p>
          </motion.article>

          {/* Headline 6 */}
          <motion.article
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="bg-white p-6 rounded-lg shadow"
          >
            <span className="inline-block mb-2 text-xs font-semibold text-orange-600 uppercase">
              Sports
            </span>
            <h3 className="text-lg font-bold mb-2">
              District-Level Cricket Tournament Begins Today
            </h3>
            <p className="text-gray-600">
              Young talents compete in the opening matches.
            </p>
          </motion.article>

        </div>
      </section>

    </main>
  );
};

export default Homepage;
