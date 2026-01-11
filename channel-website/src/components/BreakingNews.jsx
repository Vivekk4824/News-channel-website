import { useLang } from "../context/LanguageContext";

const BreakingNews = () => {
  const { lang } = useLang();

  const news = lang === "mr"
    ? [
        "नाशिकमध्ये मुसळधार पावसाचा इशारा",
        "शहरातील वाहतूक कोंडी वाढली",
        "पालिका निवडणूक तयारी सुरू",
        "क्रीडा स्पर्धेत युवकांची चमकदार कामगिरी"
      ]
    : [
        "Heavy rainfall alert issued in Nashik",
        "Traffic congestion reported in city",
        "Municipal elections preparation begins",
        "Young athletes shine in sports event"
      ];

  return (
    <div className="breaking-bar">
      <span className="breaking-label">
        {lang === "mr" ? "ब्रेकिंग" : "BREAKING"}
      </span>

      <div className="animate-marquee-slow px-6">
        {news.map((headline, i) => (
          <span key={i} className="mr-12 inline-flex items-center gap-2">
            <span className="text-yellow-300">●</span>
            {headline}
          </span>
        ))}
      </div>
    </div>
  );
};

export default BreakingNews;
