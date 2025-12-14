import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FeedbackPopup = () => {
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);

  const handleSubmit = () => {
    // simple JS logic (for now)
    console.log("Feedback submitted:", {
      rating,
    });
    setOpen(false);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-20 right-6 bg-red-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-red-700 transition"
      >
        Feedback
      </button>

      {/* Popup */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-28 right-6 w-80 bg-white rounded-lg shadow-xl z-50"
          >
            {/* Header */}
            <div className="flex justify-between items-center px-4 py-3 border-b">
              <h3 className="font-semibold text-gray-800">
                Send Feedback
              </h3>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            {/* Form */}
            <div className="p-4 space-y-3">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded px-3 py-2 text-sm"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border rounded px-3 py-2 text-sm"
              />

              <textarea
                placeholder="Your suggestion..."
                rows="3"
                className="w-full border rounded px-3 py-2 text-sm"
              />

              {/* Rating */}
              <div>
                <p className="text-sm text-gray-600 mb-1">Rating</p>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      onClick={() => setRating(star)}
                      className={`cursor-pointer text-xl ${
                        star <= rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
              >
                Submit Feedback
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FeedbackPopup;
