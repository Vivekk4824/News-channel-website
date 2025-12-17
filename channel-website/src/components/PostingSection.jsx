import React, { useEffect, useRef, useState } from "react";

const PostingSection = ({ onSubmit }) => {
  const [text, setText] = useState("");
  const [files, setFiles] = useState([]); // { file, preview, type }
  const fileInputRef = useRef(null);

  useEffect(() => {
    return () => {
      files.forEach((f) => URL.revokeObjectURL(f.preview));
    };
  }, [files]);

  const handleFileChange = (e) => {
    const selected = Array.from(e.target.files || []);
    if (!selected.length) return;

    const mapped = selected.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
      type: file.type,
    }));

    setFiles((prev) => [...prev, ...mapped]);
    e.target.value = null;
  };

  const removeFile = (index) => {
    setFiles((prev) => {
      const copy = [...prev];
      const [removed] = copy.splice(index, 1);
      if (removed) URL.revokeObjectURL(removed.preview);
      return copy;
    });
  };

  const triggerFile = () => fileInputRef.current && fileInputRef.current.click();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim() && files.length === 0) return;

    // Build placeholder FormData and call onSubmit if provided
    const form = new FormData();
    form.append("text", text.trim());
    files.forEach((f, i) => form.append("media", f.file));

    if (onSubmit) onSubmit(form);
    else console.log("Post submitted (placeholder):", { text, files });

    // Reset
    setText("");
    files.forEach((f) => URL.revokeObjectURL(f.preview));
    setFiles([]);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-4">
      <div className="flex space-x-3">
        <div className="flex-1">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Share an update, news, or article..."
            rows={3}
            className="w-full resize-none border rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {files.length > 0 && (
            <div className="mt-3 grid grid-cols-3 gap-2">
              {files.map((f, idx) => (
                <div key={idx} className="relative bg-gray-50 rounded overflow-hidden">
                  {f.type.startsWith("image") ? (
                    <img src={f.preview} alt={f.file.name} className="object-cover w-full h-28" />
                  ) : (
                    <video src={f.preview} className="object-cover w-full h-28" controls />
                  )}
                  <button
                    type="button"
                    onClick={() => removeFile(idx)}
                    className="absolute top-1 right-1 bg-black/60 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs"
                    aria-label="Remove media"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="w-36 flex flex-col items-end justify-between">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*,video/*"
            multiple
            onChange={handleFileChange}
            className="hidden"
          />

          <div className="flex flex-col w-full">
            <button
              type="button"
              onClick={triggerFile}
              className="mb-2 px-3 py-2 bg-gray-100 rounded hover:bg-gray-200 text-sm"
            >
              Add Photo/Video
            </button>

            <button
              type="submit"
              disabled={!text.trim() && files.length === 0}
              className="px-3 py-2 bg-blue-600 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed text-sm"
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PostingSection;
