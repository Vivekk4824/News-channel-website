import { motion } from "framer-motion";
import PostingSection from "../components/PostingSection";

const Homepage = () => {
  return (
    <main className="flex-1 bg-gray-100">
      <section className="posting-section">
        <div className="max-w-7xl mx-auto px-4 py-6 ">
          <PostingSection />
        </div>
      </section>

      {/* 🌟 HERO SECTION */}
      <section className="bg-white border-b border-blue-200">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4"
          >
            Star <span className="text-red-600">24</span> Fast News
          </motion.h1>

          {/* Yellow Accent Line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "140px" }}
            transition={{ duration: 0.6 }}
            className="h-1 bg-yellow-400 mx-auto mb-6 rounded"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-gray-700 max-w-3xl mx-auto mb-6"
          >
            Your trusted local news channel delivering fast, accurate, and
            reliable updates from{" "}
            <span className="font-semibold text-blue-800">Nashik</span>,
            Maharashtra, India, and across the world.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-sm text-gray-600 max-w-2xl mx-auto mb-10"
          >
            Covering breaking news, politics, crime, education, sports,
            technology, and important local events —{" "}
            <span className="text-red-600 font-semibold">
              24×7 journalism
            </span>{" "}
            you can trust.
          </motion.p>

          {/* 📊 STATS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            <div className="bg-blue-50 border-t-4 border-blue-600 rounded-lg py-4">
              <p className="text-2xl font-bold text-blue-900">24×7</p>
              <p className="text-sm text-gray-700">News Coverage</p>
            </div>

            <div className="bg-yellow-50 border-t-4 border-yellow-400 rounded-lg py-4">
              <p className="text-2xl font-bold text-yellow-600">100+</p>
              <p className="text-sm text-gray-700">Local Stories</p>
            </div>

            <div className="bg-red-50 border-t-4 border-red-600 rounded-lg py-4">
              <p className="text-2xl font-bold text-red-700">Trusted</p>
              <p className="text-sm text-gray-700">Journalism</p>
            </div>

            <div className="bg-blue-50 border-t-4 border-blue-600 rounded-lg py-4">
              <p className="text-2xl font-bold text-blue-900">Fast</p>
              <p className="text-sm text-gray-700">Live Updates</p>
            </div>
          </motion.div>

        </div>
      </section> 

      {/* 📰 LATEST HEADLINES */}
      <section className="px-6 py-12 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-blue-900 mb-6">
          Latest Headlines
        </h2>

        <div className="grid gap-6 md:grid-cols-2">

          {/* Breaking */}
          <motion.article
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white p-6 rounded-lg shadow"
          >
            <span className="inline-block mb-2 text-xs font-semibold text-red-700 bg-red-100 px-2 py-1 rounded uppercase">
              Breaking
            </span>
            <h3 className="text-lg font-bold mb-2 text-gray-900">
              Heavy Rainfall Disrupts Traffic in Nashik
            </h3>
            <p className="text-gray-600">
              IMD issues yellow alert as waterlogging reported in low-lying areas.
            </p>
          </motion.article>

          {/* Politics */}
          <motion.article
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-lg shadow"
          >
            <span className="inline-block mb-2 text-xs font-semibold text-blue-700 bg-blue-100 px-2 py-1 rounded uppercase">
              Politics
            </span>
            <h3 className="text-lg font-bold mb-2 text-gray-900">
              Local Leaders Hold Meeting Ahead of Elections
            </h3>
            <p className="text-gray-600">
              Key decisions expected to impact upcoming municipal polls.
            </p>
          </motion.article>

          {/* Education */}
          <motion.article
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-6 rounded-lg shadow"
          >
            <span className="inline-block mb-2 text-xs font-semibold text-yellow-700 bg-yellow-100 px-2 py-1 rounded uppercase">
              Education
            </span>
            <h3 className="text-lg font-bold mb-2 text-gray-900">
              Education Department Releases New Academic Guidelines
            </h3>
            <p className="text-gray-600">
              Schools and colleges to follow revised curriculum rules.
            </p>
          </motion.article>

          {/* Events */}
          <motion.article
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white p-6 rounded-lg shadow"
          >
            <span className="inline-block mb-2 text-xs font-semibold text-green-700 bg-green-100 px-2 py-1 rounded uppercase">
              Events
            </span>
            <h3 className="text-lg font-bold mb-2 text-gray-900">
              Cultural Festival Attracts Large Crowd in Nashik
            </h3>
            <p className="text-gray-600">
              Artists from across Maharashtra perform at the annual event.
            </p>
          </motion.article>

          {/* Technology */}
          <motion.article
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-6 rounded-lg shadow"
          >
            <span className="inline-block mb-2 text-xs font-semibold text-indigo-700 bg-indigo-100 px-2 py-1 rounded uppercase">
              Technology
            </span>
            <h3 className="text-lg font-bold mb-2 text-gray-900">
              Nashik Startup Launches AI-Based Farming App
            </h3>
            <p className="text-gray-600">
              The app aims to help farmers improve crop yield using AI.
            </p>
          </motion.article>

          {/* Sports */}
          <motion.article
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="bg-white p-6 rounded-lg shadow"
          >
            <span className="inline-block mb-2 text-xs font-semibold text-orange-700 bg-orange-100 px-2 py-1 rounded uppercase">
              Sports
            </span>
            <h3 className="text-lg font-bold mb-2 text-gray-900">
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
