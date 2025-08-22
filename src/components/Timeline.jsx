import React from "react";
import { motion } from "framer-motion";

export default function Timeline({ events }) {
  const formatDate = (dateStr) => {
    if (dateStr.toLowerCase() === "in future") return "In the Future 💍";
    const [day, month, year] = dateStr.split(".");
    const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    return `${day} ${months[parseInt(month, 10) - 1]} ${year}`;
  };

  return (
    <div className="relative p-8 min-h-screen flex flex-col items-center bg-gradient-to-b from-pink-50 via-rose-50 to-pink-100 overflow-hidden">

      {/* Floating background hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-pink-200"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 2 + 1}rem`
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            ❤️
          </motion.div>
        ))}
      </div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-12 text-pink-600 tracking-widest drop-shadow-md relative z-10"
      >
         Our💖Journey
      </motion.h2>

      {/* Timeline */}
      <div className="relative w-full max-w-3xl z-10">
        {events.map((e, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="mb-20 relative flex items-center w-full"
          >
            {/* Heart Marker */}
            <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10">
              <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                animate={{ scale: [1, 1.05, 1], boxShadow: ["0 0 10px rgba(255,105,180,0.6)", "0 0 20px rgba(255,105,180,0.8)", "0 0 10px rgba(255,105,180,0.6)"] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className={`relative group w-16 h-16 rounded-full flex items-center justify-center text-white text-3xl shadow-xl border-4 border-white ${i % 2 === 0
                    ? "bg-gradient-to-r from-pink-500 to-rose-500"
                    : "bg-gradient-to-r from-rose-300 to-pink-400"
                  }`}
              >
                ❤️
                {/* Tooltip */}
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 text-xs rounded-lg bg-rose-200 text-pink-800 opacity-0 group-hover:opacity-100 transition-all shadow-md whitespace-nowrap">
                  {e.details || "A special moment 💕"}
                </span>
              </motion.div>
              <div className="mt-3 text-sm font-semibold text-pink-700 drop-shadow-sm">
                {formatDate(e.date)}
              </div>
            </div>

            {/* Vertical Line */}
            {i < events.length - 1 && (
              <div className="absolute left-1/2 transform -translate-x-1/2 top-16 h-full border-l-4 border-dotted border-rose-300 opacity-70"></div>
            )}

            {/* Event Card */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className={`w-1/2 px-6 ${i % 2 === 0 ? "text-right ml-auto" : "text-left mr-auto"
                }`}
            >
              <div
                className={`rounded-2xl p-4 sm:p-6 shadow-md sm:shadow-lg border text-pink-700 font-semibold transition-all 
              hover:shadow-xl hover:border-pink-400 ${i % 2 === 0
                    ? "bg-rose-50 border-rose-200"
                    : "bg-pink-50 border-pink-200"
                  } hover:bg-white`}
                style={{
                  maxWidth: "100%", // fits any device
                  wordBreak: "break-word", // prevents text overflow
                }}
              >
                <p className="text-sm sm:text-base leading-relaxed">{e.text}</p>

                {e.image && (
                  <img
                    src={e.image}
                    alt="memory"
                    className="rounded-xl mt-3 sm:mt-4 shadow-sm sm:shadow-md hover:shadow-lg transition-all w-full object-cover"
                    style={{
                      maxHeight: "300px", // avoids huge images on desktop
                    }}
                  />
                )}
              </div>

            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
