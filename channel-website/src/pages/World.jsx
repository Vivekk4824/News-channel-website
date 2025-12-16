import { motion } from "framer-motion";

const World = () => {
  return (
    <main className="flex-1 bg-gray-100">

      {/* 🌍 PAGE HEADER */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-extrabold text-gray-900"
          >
            🌍 World News
          </motion.h1>

          <p className="text-gray-600 mt-2 max-w-3xl">
            Global headlines covering international politics, conflicts,
            economy, technology, climate, and major world events.
          </p>
        </div>
      </section>

      {/* 📰 NEWS GRID */}
      <section className="max-w-7xl mx-auto px-6 py-10 grid gap-8 md:grid-cols-3">

        {/* MAIN STORY */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="md:col-span-2 bg-white rounded-xl shadow p-6"
        >
          <span className="text-xs font-bold text-red-600 uppercase">
            Top World Story
          </span>

          <h2 className="text-2xl font-bold mt-2 mb-3">
            Global Leaders Meet to Discuss Climate Change Action
          </h2>

          <p className="text-gray-700 mb-4">
            World leaders gathered at the international summit to address rising
            global temperatures, carbon emissions, and climate finance for
            developing nations.
          </p>

          <p className="text-gray-600 text-sm">
            Experts say strong commitments are essential to avoid irreversible
            climate damage.
          </p>

          <div className="mt-4 text-sm text-gray-500">
            Source: Geneva • Updated 1 hour ago
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
              US Presidential Campaign Enters Final Phase
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Candidates intensify rallies and debates ahead of elections.
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
              Global Markets React to Interest Rate Decisions
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Asian and European markets show mixed trends amid uncertainty.
            </p>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-xl shadow p-5"
          >
            <span className="text-xs font-semibold text-purple-600 uppercase">
              Conflict
            </span>
            <h3 className="text-lg font-bold mt-2">
              Tensions Rise in Middle East Region
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Diplomatic talks continue as international pressure increases.
            </p>
          </motion.article>

        </div>
      </section>

      {/* 🌐 MORE HEADLINES */}
      <section className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <h2 className="text-2xl font-bold mb-6">
            More World Headlines
          </h2>

          <ul className="space-y-4 text-gray-700">
            <li>• UN calls for immediate humanitarian ceasefire</li>
            <li>• China unveils new space exploration mission</li>
            <li>• Europe faces extreme heatwave conditions</li>
            <li>• Global oil prices fluctuate amid supply concerns</li>
            <li>• International students policy updated in major countries</li>
          </ul>
        </div>
      </section>

    </main>
  );
};

export default World;
