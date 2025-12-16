import { motion } from "framer-motion";

const Sports = () => {
  return (
    <main className="flex-1 bg-gray-100">

      {/* 🏏 PAGE HEADER */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-extrabold text-gray-900"
          >
            🏏 Sports News
          </motion.h1>

          <p className="text-gray-600 mt-2 max-w-3xl">
            Latest sports updates, match results, player performances, and
            breaking news from cricket, football, Olympics, and more.
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
            Top Sports Story
          </span>

          <h2 className="text-2xl font-bold mt-2 mb-3">
            Team India Clinches Thrilling Victory in Final Over
          </h2>

          <p className="text-gray-700 mb-4">
            In a nail-biting match, Team India secured a dramatic win with a
            last-over boundary, sending fans into celebration across the
            country.
          </p>

          <p className="text-gray-600 text-sm">
            The victory strengthens India’s position in the tournament and
            boosts team morale ahead of the next clash.
          </p>

          <div className="mt-4 text-sm text-gray-500">
            Source: Mumbai • Updated 30 minutes ago
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
              Football
            </span>
            <h3 className="text-lg font-bold mt-2">
              International Football League Kicks Off Today
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Top clubs compete in the opening matches of the season.
            </p>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow p-5"
          >
            <span className="text-xs font-semibold text-green-600 uppercase">
              Cricket
            </span>
            <h3 className="text-lg font-bold mt-2">
              Young Indian Cricketer Scores Maiden Century
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              The rising star impresses selectors with a brilliant knock.
            </p>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-xl shadow p-5"
          >
            <span className="text-xs font-semibold text-purple-600 uppercase">
              Olympics
            </span>
            <h3 className="text-lg font-bold mt-2">
              India Announces Squad for Upcoming Olympic Games
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Several young athletes included alongside experienced players.
            </p>
          </motion.article>

        </div>
      </section>

      {/* 🏅 MORE HEADLINES */}
      <section className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <h2 className="text-2xl font-bold mb-6">
            More Sports Headlines
          </h2>

          <ul className="space-y-4 text-gray-700">
            <li>• IPL schedule released for upcoming season</li>
            <li>• Indian badminton players shine at international tournament</li>
            <li>• Record-breaking performance in national athletics meet</li>
            <li>• Women’s cricket team registers historic win</li>
            <li>• New sports policy aims to support grassroots talent</li>
          </ul>
        </div>
      </section>

    </main>
  );
};

export default Sports;
