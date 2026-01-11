import { motion } from "framer-motion";
import { useLang } from "../context/LanguageContext";
import VideoCard from "../components/VideoCard";

const Homepage = () => {

  const { t, lang } = useLang();

  // Headlines differ based on language
  const headlines = lang === "mr"
    ? [
        { tag: "ब्रेकिंग", title: "नाशिकमध्ये मुसळधार पावसामुळे वाहतूक ठप्प", desc: "खोल भागात पाणी साचल्याने IMD कडून यलो अलर्ट जारी." },
        { tag: "राजकारण", title: "निवडणुकीपूर्वी स्थानिक नेत्यांची महत्त्वपूर्ण बैठक", desc: "पालिका निवडणुकीवर परिणाम होण्याची शक्यता." },
        { tag: "शिक्षण", title: "शिक्षण विभागाने नवीन अभ्यासक्रम मार्गदर्शक सूचना जाहीर केल्या", desc: "शाळा व महाविद्यालयांना नियम लागू." },
        { tag: "इव्हेंट्स", title: "नाशिकमध्ये सांस्कृतिक महोत्सवाला मोठी उत्स्फूर्त प्रतिसाद", desc: "महाराष्ट्रभरातील कलाकारांची सहभागिता." },
        { tag: "तंत्रज्ञान", title: "नाशिक स्टार्टअपने सादर केले AI आधारित शेती अ‍ॅप", desc: "शेतकऱ्यांना उत्पन्न वाढीस मदत." },
        { tag: "क्रीडा", title: "जिल्हास्तरीय क्रिकेट स्पर्धेला प्रारंभ", desc: "युवा खेळाडूंकडून दमदार कामगिरी." }
      ]
    : [
        { tag: "Breaking", title: "Heavy Rainfall Disrupts Traffic in Nashik", desc: "IMD issues yellow alert as waterlogging reported in low-lying areas." },
        { tag: "Politics", title: "Local Leaders Hold Meeting Ahead of Elections", desc: "Key decisions expected to impact upcoming municipal polls." },
        { tag: "Education", title: "Education Department Releases New Academic Guidelines", desc: "Schools and colleges to follow revised curriculum rules." },
        { tag: "Events", title: "Cultural Festival Attracts Large Crowd in Nashik", desc: "Artists from across Maharashtra perform at the annual event." },
        { tag: "Technology", title: "Nashik Startup Launches AI-Based Farming App", desc: "The app aims to help farmers improve crop yield using AI." },
        { tag: "Sports", title: "District-Level Cricket Tournament Begins Today", desc: "Young talents compete in the opening matches." }
      ];

  // 🎥 VIDEO NEWS (bilingual)
  const videos = lang === "mr"
  ? [
      {
        thumbnail: "https://img.youtube.com/vi/kS_c_KxWE8Y/maxresdefault.jpg",
        title: "स्टार 24 फास्ट न्यूज – खास रिपोर्ट",
        desc: "नाशिक आणि महाराष्ट्रातील महत्त्वाच्या घडामोडींचा आढावा.",
        url: "https://youtu.be/kS_c_KxWE8Y"
      },
      {
        thumbnail: "https://img.youtube.com/vi/mQwolKZUviY/maxresdefault.jpg",
        title: "नाशिक शहरातील महत्वाच्या स्थानिक बातम्या",
        desc: "घडामोडी, अपडेट्स आणि नागरिकांचा प्रतिसाद.",
        url: "https://youtu.be/mQwolKZUviY"
      },
      {
        thumbnail: "https://img.youtube.com/vi/orO2xCusQEM/maxresdefault.jpg",
        title: "ताज्या घडामोडींचा सविस्तर आढावा",
        desc: "स्टार 24 फास्ट न्यूज कडून विशेष रिपोर्ट.",
        url: "https://youtu.be/orO2xCusQEM"
      },
      {
        thumbnail: "https://img.youtube.com/vi/ltm-btPZ6xI/maxresdefault.jpg",
        title: "महाराष्ट्रातील प्रमुख बातम्यांवर विश्लेषण",
        desc: "घटनांमागील महत्वाचे पैलू समजून घ्या.",
        url: "https://youtu.be/ltm-btPZ6xI"
      }
    ]
  : [
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


  return (
    <main className="flex-1 bg-gray-100">

      

      {/* 🌟 HERO SECTION */}
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
            {t("hero_desc1")}
            <span className="font-semibold text-blue-800">{t("nashik")}</span>,
            {t("maharashtra_india")}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-sm text-gray-600 max-w-2xl mx-auto mb-10"
          >
            {t("hero_desc2")}{" "}
            <span className="text-red-600 font-semibold">24×7</span>{" "}
            {t("trusted_journalism")}
          </motion.p>

        </div>
      </section>

      {/* 📰 LATEST HEADLINES */}
      <section className="px-6 py-12 max-w-6xl mx-auto">

        <h2 className="text-2xl font-bold text-blue-900 mb-6">
          {t("latest_headlines")}
        </h2>

        <div className="grid gap-6 md:grid-cols-2">

          {headlines.map((news, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 + i * 0.1 }}
              className="bg-white p-6 rounded-lg shadow"
            >
              <span className="inline-block mb-2 text-xs font-semibold bg-gray-100 px-2 py-1 rounded uppercase">
                {news.tag}
              </span>

              <h3 className="text-lg font-bold mb-2 text-gray-900">
                {news.title}
              </h3>

              <p className="text-gray-600">
                {news.desc}
              </p>
            </motion.article>
          ))}

        </div>
      </section>

      {/* 🎥 VIDEO NEWS SECTION */}
      <section className="px-6 py-12 max-w-6xl mx-auto">

        <h2 className="text-2xl font-bold text-blue-900 mb-6">
          {lang === "mr" ? "व्हिडिओ बातम्या" : "Video News"}
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {videos.map((video, i) => (
            <motion.a
              key={i}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 + i * 0.1 }}
            >
              <VideoCard video={video} />
            </motion.a>
          ))}

        </div>

      </section>

    </main>
  );
};

export default Homepage;
