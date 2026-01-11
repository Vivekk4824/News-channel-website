import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FeedbackPopup = () => {
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);

  const handleSubmit = () => {
    console.log("Feedback submitted:", { rating });
    setOpen(false);
    setRating(0);
  };

  return (
    <>
      {/* Floating Feedback Button */}
      <button
        onClick={() => setOpen(true)}
        className="feedback-btn"
      >
        💬 Feedback
      </button>

      {/* Popup */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ duration: 0.3 }}
            className="feedback-popup z-50"
          >
            {/* Header */}
            <div className="feedback-header">
              <span>Send Feedback</span>
              <button
                onClick={() => setOpen(false)}
                className="text-white hover:text-yellow-300 text-lg"
              >
                ✕
              </button>
            </div>

            {/* Body */}
            <div className="feedback-body p-5 space-y-4">

              <input
                type="text"
                placeholder="Your Name"
              />

              <input
                type="email"
                placeholder="Your Email"
              />

              <textarea
                placeholder="Your suggestion..."
                rows="3"
              />

              {/* Rating */}
              <div>
                <p className="text-sm text-gray-600 mb-2 font-semibold">
                  Rate our news quality
                </p>

                <div className="feedback-stars flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      onClick={() => setRating(star)}
                      className={star <= rating ? "text-yellow-400" : "text-gray-300"}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={handleSubmit}
                className="feedback-submit"
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
