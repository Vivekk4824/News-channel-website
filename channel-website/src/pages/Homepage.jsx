import { motion } from "framer-motion";
import { useLang } from "../context/LanguageContext";
import VideoCard from "../components/VideoCard";
import { useEffect, useState } from "react";

const Homepage = () => {
  const { t, lang } = useLang();

  // 🔵 English Master Data
  const headlinesEN = [
    {
      tag: "Breaking",
      title: "Heavy Rainfall Disrupts Traffic in Nashik",
      desc: "IMD issues yellow alert as waterlogging reported in low-lying areas."
    },
    {
      tag: "Politics",
      title: "Local Leaders Hold Meeting Ahead of Elections",
      desc: "Key decisions expected to impact upcoming municipal polls."
    },
    {
      tag: "Education",
      title: "Education Department Releases New Academic Guidelines",
      desc: "Schools and colleges to follow revised curriculum rules."
    },
    {
      tag: "Events",
      title: "Cultural Festival Attracts Large Crowd in Nashik",
      desc: "Artists from across Maharashtra perform at the annual event."
    },
    {
      tag: "Technology",
      title: "Nashik Startup Launches AI-Based Farming App",
      desc: "The app aims to help farmers improve crop yield using AI."
    },
    {
      tag: "Sports",
      title: "District-Level Cricket Tournament Begins Today",
      desc: "Young talents compete in the opening matches."
    }
  ];

  const videosEN = [
    {
      thumbnail: "https://img.youtube.com/vi/kS_c_KxWE8Y/maxresdefault.jpg",
      title: "Star 24 Fast News – Special Report",
      desc: "Key updates and major developments from Nashik & Maharashtra.",
      url: "https://youtu.be/kS_c_KxWE8Y"
    },
    {
      thumbnail: "https://img.youtube.com/vi/orO2xCusQEM/maxresdefault.jpg",
      title: "Detailed Coverage of Latest Developments",
      desc: "Exclusive news update from Star 24 Fast News.",
      url: "https://youtu.be/orO2xCusQEM"
    },
    {
      thumbnail: "https://img.youtube.com/vi/ltm-btPZ6xI/maxresdefault.jpg",
      title: "Key Headlines & Major State-Level Updates",
      desc: "In-depth analysis and important insights.",
      url: "https://youtu.be/ltm-btPZ6xI"
    }
  ];

  const [headlines, setHeadlines] = useState(headlinesEN);
  const [videos, setVideos] = useState(videosEN);

  // 🔥 Translate when language changes
  useEffect(() => {
    if (lang === "mr") {
      translateData();
    } else {
      setHeadlines(headlinesEN);
      setVideos(videosEN);
    }
  }, [lang]);

  async function translateData() {
    try {
      const res = await fetch("http://localhost:3100/api/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: JSON.stringify({ headlines: headlinesEN, videos: videosEN }),
          targetLang: "Marathi"
        })
      });

      const data = await res.json();
      const translated = JSON.parse(data.translated);

      setHeadlines(translated.headlines);
      setVideos(translated.videos);
    } catch (err) {
      console.error("Translation failed", err);
    }
  }

  return (
    <main className="flex-1 bg-gray-100">

      {/* 🌟 HERO / ABOUT SECTION */}
      <section className="bg-white border-b border-blue-200">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4"
          >
            {t("Star")} <span className="text-red-600">24</span> {t("fast_news")}
          </motion.h1>

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
            {t("hero_desc1")}{" "}
            <span className="font-semibold text-blue-800">{t("nashik")}</span>,{" "}
            {t("maharashtra_india")}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-sm text-gray-600 max-w-2xl mx-auto"
          >
            {t("hero_desc2")}{" "}
            <span className="text-red-600 font-semibold">24×7</span>{" "}
            {t("trusted_journalism")}
          </motion.p>

        </div>
      </section>

      {/* 📰 HEADLINES */}
      <section className="px-6 py-12 max-w-6xl mx-auto">
        <div className="grid gap-6 md:grid-cols-2">
          {headlines.map((news, i) => (
            <div key={i} className="bg-white p-6 rounded shadow">
              <span className="text-xs font-bold uppercase">{news.tag}</span>
              <h3 className="text-lg font-bold">{news.title}</h3>
              <p>{news.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🎥 VIDEOS */}
      <section className="px-6 py-12 max-w-6xl mx-auto">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((video, i) => (
            <a key={i} href={video.url} target="_blank" rel="noreferrer">
              <VideoCard video={video} />
            </a>
          ))}
        </div>
      </section>

    </main>
  );
};

export default Homepage;
