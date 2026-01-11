const NewsCard = ({ tag, title, desc, color }) => {
  return (
    <article className="bg-white p-6 rounded-lg shadow">
      <span className={`inline-block mb-2 text-xs font-semibold px-2 py-1 rounded uppercase ${color}`}>
        {tag}
      </span>

      <h3 className="text-lg font-bold mb-2 text-gray-900">
        {title}
      </h3>

      <p className="text-gray-600">
        {desc}
      </p>
    </article>
  );
};

export default NewsCard;
