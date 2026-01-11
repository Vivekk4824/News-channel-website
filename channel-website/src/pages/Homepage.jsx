import { motion } from "framer-motion";
import { useLang } from "../context/LanguageContext";
import VideoCard from "../components/VideoCard";

const Homepage = () => {

const { lang, translate } = useLang();

const hero =
  lang === "mr"
    ? {
        title: "स्टार 24 फास्ट न्यूज",
        desc1:
          "नाशिक, महाराष्ट्र, भारत येथील जलद, विश्वासार्ह आणि जबाबदार डिजिटल बातम्यांचे तुमचे व्यासपीठ.",
        desc2:
          "ब्रेकिंग न्यूज, राजकारण, प्रशासन, शिक्षण, तंत्रज्ञान आणि सांस्कृतिक घडामोडी — लोकांसाठी काम करणारी पत्रकारिता."
      }
    : {
        title: "Star 24 Fast News",
        desc1:
          "Your trusted and independent digital news channel — fast, truthful and responsible journalism from Nashik, Maharashtra, India.",
        desc2:
          "Breaking news, politics, administration, education, technology, culture and major developments — trusted journalism that works for the people."
      };


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
   <main className="flex-1 bg-(--bg-main)">



      

{/* 🌟 HERO SECTION */}
<section className="hero-section">
  <div className="hero-overlay"></div>

  <div className="hero-content">
    <motion.h1
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="hero-title"
    >
      {hero.title}
    </motion.h1>

    <div className="hero-divider"></div>

    <p className="hero-desc">{hero.desc1}</p>
    <p className="hero-desc mt-3">{hero.desc2}</p>

    <div className="hero-actions">
  <button className="news-btn latest-btn">
    📰 Latest News
  </button>

  <button className="news-btn live-btn">
    🔴 Watch Live
  </button>
</div>


    <div className="hero-headlines">
  <div>🌧 Heavy rain alert in Nashik</div>
  <div>🗳 Municipal elections preparation</div>
  <div>🏏 Youth sports championship today</div>
</div>


<div className="hero-featured">

  <div className="featured-card">
    <span>FEATURED</span>
    <h3>IMD issues Yellow Alert for Nashik</h3>
    <p>Continuous rainfall expected for next 48 hours. Authorities advise citizens to stay alert.</p>
  </div>

  <div className="featured-card">
    <span>POLITICS</span>
    <h3>Municipal elections preparation begins</h3>
    <p>Local leaders meet as city prepares for upcoming civic body elections.</p>
  </div>

  <div className="featured-card">
    <span>SPORTS</span>
    <h3>Youth cricket tournament kicks off</h3>
    <p>Young athletes from across Maharashtra participate in opening matches.</p>
  </div>

</div>


  </div>
</section>







      {/* 📰 LATEST HEADLINES */}
      <section className="px-6 py-12 max-w-6xl mx-auto">

        <h2 className="text-2xl font-bold text-blue-900 mb-6">
          {lang === "mr" ? "ताज्या बातम्या" : "Latest Headlines"}

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
