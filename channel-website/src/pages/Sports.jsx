import { motion } from "framer-motion";
import { useLang } from "../context/LanguageContext";
import { useEffect, useState } from "react";

const Sports = () => {
  const { lang, translate } = useLang();

  // 🔵 English master content
  const pageDataEN = {
    title: "🏏 Sports News",
    subtitle:
      "Latest sports updates, match results, player performances, and breaking news from cricket, football, Olympics, and more.",

    mainTag: "Top Sports Story",
    mainTitle: "Team India Clinches Thrilling Victory in Final Over",
    mainDesc1:
      "In a nail-biting match, Team India secured a dramatic win with a last-over boundary, sending fans into celebration across the country.",
    mainDesc2:
      "The victory strengthens India’s position in the tournament and boosts team morale ahead of the next clash.",
    mainSource: "Source: Mumbai • Updated 30 minutes ago",

    stories: [
      {
        tag: "Football",
        title: "International Football League Kicks Off Today",
        desc: "Top clubs compete in the opening matches of the season."
      },
      {
        tag: "Cricket",
        title: "Young Indian Cricketer Scores Maiden Century",
        desc: "The rising star impresses selectors with a brilliant knock."
      },
      {
        tag: "Olympics",
        title: "India Announces Squad for Upcoming Olympic Games",
        desc: "Several young athletes included alongside experienced players."
      }
    ],

    moreTitle: "More Sports Headlines",
    more: [
      "IPL schedule released for upcoming season",
      "Indian badminton players shine at international tournament",
      "Record-breaking performance in national athletics meet",
      "Women’s cricket team registers historic win",
      "New sports policy aims to support grassroots talent"
    ]
  };

  const [pageData, setPageData] = useState(pageDataEN);

  // 🔥 Translate when language changes
  useEffect(() => {
    if (lang === "mr") {
      translatePage();
    } else {
      setPageData(pageDataEN);
    }
  }, [lang]);

  async function translatePage() {
    try {
      const res = await fetch("http://localhost:3100/api/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: JSON.stringify(pageDataEN),
          targetLang: "Marathi"
        })
      });

      const data = await res.json();
      const translated = JSON.parse(data.translated);
      setPageData(translated);
    } catch (err) {
      console.error("Sports translation failed", err);
    }
  }

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
            {pageData.title}
          </motion.h1>

          <p className="text-gray-600 mt-2 max-w-3xl">
            {pageData.subtitle}
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
            {pageData.mainTag}
          </span>

          <h2 className="text-2xl font-bold mt-2 mb-3">
            {pageData.mainTitle}
          </h2>

          <p className="text-gray-700 mb-4">
            {pageData.mainDesc1}
          </p>

          <p className="text-gray-600 text-sm">
            {pageData.mainDesc2}
          </p>

          <div className="mt-4 text-sm text-gray-500">
            {pageData.mainSource}
          </div>
        </motion.article>

        {/* SIDE STORIES */}
        <div className="space-y-6">
          {pageData.stories.map((s, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 + i * 0.1 }}
              className="bg-white rounded-xl shadow p-5"
            >
              <span className="text-xs font-semibold uppercase">
                {s.tag}
              </span>
              <h3 className="text-lg font-bold mt-2">
                {s.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                {s.desc}
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* 🏅 MORE HEADLINES */}
      <section className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <h2 className="text-2xl font-bold mb-6">
            {pageData.moreTitle}
          </h2>

          <ul className="space-y-4 text-gray-700">
            {pageData.more.map((m, i) => (
              <li key={i}>• {m}</li>
            ))}
          </ul>
        </div>
      </section>

    </main>
  );
};

export default Sports;
