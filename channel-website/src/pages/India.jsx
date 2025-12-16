import { motion } from "framer-motion";

const India = () => {
  return (
    <main className="flex-1 bg-gray-100">

      {/* 🔹 PAGE HEADER */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-extrabold text-gray-900"
          >
            🇮🇳 India News
          </motion.h1>

          <p className="text-gray-600 mt-2 max-w-3xl">
            Latest national headlines, politics, economy, government decisions,
            and major developments from across India.
          </p>
        </div>
      </section>

      {/* 🔹 NEWS GRID */}
      <section className="max-w-7xl mx-auto px-6 py-10 grid gap-8 md:grid-cols-3">

        {/* MAIN STORY */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="md:col-span-2 bg-white rounded-xl shadow p-6"
        >
          <span className="text-xs font-bold text-red-600 uppercase">
            Top Story
          </span>

          <h2 className="text-2xl font-bold mt-2 mb-3">
            Union Budget 2025 Focuses on Infrastructure and Employment
          </h2>

          <p className="text-gray-700 mb-4">
            The Finance Minister presented the Union Budget in Parliament,
            announcing major investments in infrastructure, startups, and job
            creation while keeping fiscal discipline in focus.
          </p>

          <p className="text-gray-600 text-sm">
            Analysts believe the budget will boost long-term economic growth and
            attract global investors to Indian markets.
          </p>

          <div className="mt-4 text-sm text-gray-500">
            Source: New Delhi • Updated 2 hours ago
          </div>
        </motion.article>

        {/* SIDE STORIES */}
        <div className="space-y-6">

          <motion.article
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow p-5"
          >
            <span className="text-xs font-semibold text-blue-600 uppercase">
              Politics
            </span>
            <h3 className="text-lg font-bold mt-2">
              Parliament Session Witnesses Heated Debate
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Opposition raises concerns over recent policy changes during the
              ongoing session.
            </p>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow p-5"
          >
            <span className="text-xs font-semibold text-green-600 uppercase">
              Economy
            </span>
            <h3 className="text-lg font-bold mt-2">
              Sensex Hits New All-Time High
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Markets surge as banking and IT stocks lead the rally.
            </p>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-xl shadow p-5"
          >
            <span className="text-xs font-semibold text-purple-600 uppercase">
              Government
            </span>
            <h3 className="text-lg font-bold mt-2">
              New Digital Education Policy Announced
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Government aims to improve digital access for rural students.
            </p>
          </motion.article>

        </div>
      </section>

      {/* 🔹 MORE HEADLINES */}
      <section className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <h2 className="text-2xl font-bold mb-6">
            More India Headlines
          </h2>

          <ul className="space-y-4 text-gray-700">
            <li>• Supreme Court issues key ruling on electoral bonds</li>
            <li>• Railways announces new Vande Bharat routes</li>
            <li>• Monsoon likely to arrive early in southern states</li>
            <li>• केंद्र सरकारकडून नवीन रोजगार योजना जाहीर</li>
            <li>• Major highway projects approved across states</li>
          </ul>
        </div>
      </section>

    </main>
  );
};

export default India;
