const VideoCard = ({ video }) => {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden group">
      <div className="relative">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-44 object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition bg-black bg-opacity-50">
          <span className="text-white text-3xl">▶️</span>
        </div>
      </div>
      <div className="p-3">
        <h4 className="text-lg font-semibold text-gray-900">
          {video.title}
        </h4>
        <p className="text-sm text-gray-600">{video.desc}</p>
      </div>
    </div>
  );
};

export default VideoCard;
