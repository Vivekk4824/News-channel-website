import { motion } from "framer-motion";
import { useLang } from "../context/LanguageContext";
import { useEffect, useState } from "react";

const India = () => {
  const { lang } = useLang();

  // 🔵 English master content
  const indiaEN = {
    title: "India News",
    subtitle:
      "Latest national headlines, politics, economy, government decisions, and major developments from across India.",

    topStory: {
      tag: "Top Story",
      title: "Union Budget 2025 Focuses on Infrastructure and Employment",
      desc1:
        "The Finance Minister presented the Union Budget announcing major investments in infrastructure, startups, and job creation.",
      desc2:
        "Analysts believe the budget will boost long-term economic growth.",
      source: "Source: New Delhi • Updated 2 hours ago"
    },

    side: [
      {
        tag: "Politics",
        title: "Parliament Session Witnesses Heated Debate",
        desc: "Opposition raises concerns over recent policy changes."
      },
      {
        tag: "Economy",
        title: "Sensex Hits New All-Time High",
        desc: "Markets surge as banking and IT stocks lead the rally."
      },
      {
        tag: "Government",
        title: "New Digital Education Policy Announced",
        desc: "Government aims to improve digital access for rural students."
      }
    ],

    moreTitle: "More India Headlines",
    list: [
      "Supreme Court issues key ruling on electoral bonds",
      "Railways announces new Vande Bharat routes",
      "Monsoon likely to arrive early in southern states",
      "Government launches new employment scheme",
      "Major highway projects approved across states"
    ]
  };

  const [page, setPage] = useState(indiaEN);

  // 🔥 Translate when language changes
  useEffect(() => {
    if (lang === "mr") translatePage();
    else setPage(indiaEN);
  }, [lang]);

  async function translatePage() {
    try {
      const res = await fetch("http://localhost:3100/api/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: JSON.stringify(indiaEN),
          targetLang: "Marathi"
        })
      });

      const data = await res.json();
      setPage(JSON.parse(data.translated));
    } catch (err) {
      console.error("India translation failed", err);
    }
  }

  return (
    <main className="flex-1 bg-gray-100">

      {/* Header */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <motion.h1 className="text-3xl md:text-4xl font-extrabold">
            🇮🇳 {page.title}
          </motion.h1>
          <p className="text-gray-600 mt-2 max-w-3xl">
            {page.subtitle}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-6 py-10 grid gap-8 md:grid-cols-3">

        <article className="md:col-span-2 bg-white p-6 rounded-xl shadow">
          <span className="text-xs font-bold text-red-600 uppercase">
            {page.topStory.tag}
          </span>
          <h2 className="text-2xl font-bold mt-2 mb-3">
            {page.topStory.title}
          </h2>
          <p className="text-gray-700 mb-4">
            {page.topStory.desc1}
          </p>
          <p className="text-gray-600 text-sm">
            {page.topStory.desc2}
          </p>
          <div className="mt-4 text-sm text-gray-500">
            {page.topStory.source}
          </div>
        </article>

        <div className="space-y-6">
          {page.side.map((s, i) => (
            <article key={i} className="bg-white p-5 rounded-xl shadow">
              <span className="text-xs font-semibold uppercase">{s.tag}</span>
              <h3 className="text-lg font-bold mt-2">{s.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{s.desc}</p>
            </article>
          ))}
        </div>

      </section>

      {/* More */}
      <section className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <h2 className="text-2xl font-bold mb-6">{page.moreTitle}</h2>
          <ul className="space-y-4 text-gray-700">
            {page.list.map((item, i) => (
              <li key={i}>• {item}</li>
            ))}
          </ul>
        </div>
      </section>

    </main>
  );
};

export default India;
