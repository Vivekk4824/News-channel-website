import { motion } from "framer-motion";
import { useLang } from "../context/LanguageContext";
import VideoCard from "../components/VideoCard";
import { useEffect, useState } from "react";

const Homepage = () => {
  const { lang, translate } = useLang();

  // Master English content
  const contentEN = {
    heroTitle: "Star 24 Fast News",
    heroDesc1: "Your trusted local news channel from Nashik, Maharashtra, India.",
    heroDesc2: "Delivering fast, accurate and reliable journalism 24×7.",
    latestHeadlines: "Latest Headlines",
    videoNews: "Video News",

    headlines: [
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
        tag: "Technology",
        title: "Nashik Startup Launches AI-Based Farming App",
        desc: "The app aims to help farmers improve crop yield using AI."
      }
    ],

    videos: [
      {
        thumbnail: "https://img.youtube.com/vi/kS_c_KxWE8Y/maxresdefault.jpg",
        title: "Star 24 Fast News – Special Report",
        desc: "Key updates and major developments from Nashik & Maharashtra.",
        url: "https://youtu.be/kS_c_KxWE8Y"
      }
    ]
  };

  const [content, setContent] = useState(contentEN);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (lang === "mr") {
      translatePage();
    } else {
      setContent(contentEN);
    }
  }, [lang]);

  async function translatePage() {
    try {
      setLoading(true);
      const translated = await translate(JSON.stringify(contentEN));
      setContent(JSON.parse(translated));
    } catch (err) {
      console.error("Translation failed", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex-1 bg-gray-100">

      {/* HERO */}
      <section className="bg-white border-b border-blue-200">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <motion.h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">
            {content.heroTitle}
          </motion.h1>

          <p className="text-lg text-gray-700">{content.heroDesc1}</p>
          <p className="text-sm text-gray-600 mt-2">{content.heroDesc2}</p>
        </div>
      </section>

      {/* HEADLINES */}
      <section className="px-6 py-12 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-blue-900 mb-6">
          {content.latestHeadlines}
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {content.headlines.map((n, i) => (
            <div key={i} className="bg-white p-6 rounded shadow">
              <span className="text-xs uppercase font-bold">{n.tag}</span>
              <h3 className="text-lg font-bold">{n.title}</h3>
              <p>{n.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VIDEOS */}
      <section className="px-6 py-12 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-blue-900 mb-6">
          {content.videoNews}
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {content.videos.map((v, i) => (
            <a key={i} href={v.url} target="_blank" rel="noreferrer">
              <VideoCard video={v} />
            </a>
          ))}
        </div>
      </section>

      {loading && (
        <div className="fixed bottom-4 right-4 bg-black text-white px-4 py-2 rounded">
          Translating with AI…
        </div>
      )}

    </main>
  );
};

export default Homepage;
