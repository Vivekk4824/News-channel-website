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
    <div className="bg-red-700 text-white overflow-hidden">
      <div className="animate-marquee-slow whitespace-nowrap py-2 font-semibold">
        {news.map((headline, i) => (
          <span key={i} className="mx-6">
            🔴 {headline}
          </span>
        ))}
      </div>
    </div>
  );
};

export default BreakingNews;
