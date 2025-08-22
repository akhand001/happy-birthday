import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

export default function ScratchCard() {
  const [revealed, setRevealed] = useState(false);
  const { width, height } = useWindowSize();
  const [bestMessage, setBestMessage] = useState(null);

  // Surprise messages with levels
  const messages = [
    { text: "💖 I Love You Forever 💖", level: "Diamond 💎" },
    { text: "🎂 Happy Birthday, My Soulmate 🎂", level: "Gold 🏆" },
    { text: "🌹 Ap meri sabse khoobsurat kahani ho 🌹", level: "Silver ⭐" },
    { text: "✨ You’re my today and all of my tomorrows ✨", level: "Diamond 💎" },
    { text: "💞 Mere din ka sabse pyaara hissa = Tum 💞", level: "Gold 🏆" },
  ];

  const surprise = messages[Math.floor(Math.random() * messages.length)];

  // Save best message (Diamond > Gold > Silver)
  useEffect(() => {
    if (revealed) {
      const levels = { Diamond: 3, Gold: 2, Silver: 1 };
      const saved = JSON.parse(localStorage.getItem("bestSurprise")) || null;
      if (
        !saved ||
        levels[surprise.level.split(" ")[0]] >
          levels[saved.level.split(" ")[0]]
      ) {
        setBestMessage(surprise);
        localStorage.setItem("bestSurprise", JSON.stringify(surprise));
      }
    }
  }, [revealed]);

  useEffect(() => {
    const saved = localStorage.getItem("bestSurprise");
    if (saved) setBestMessage(JSON.parse(saved));
  }, []);

  return (
    <div className="flex flex-col items-center my-10">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-extrabold text-4xl mb-6 bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 text-transparent bg-clip-text drop-shadow-lg"
      >
        🎁 Scratch & Win Love
      </motion.h2>

      {/* Best Reward Banner */}
      {bestMessage && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 px-5 py-3 rounded-xl bg-gradient-to-r from-yellow-100 via-pink-100 to-rose-100 text-rose-700 font-bold shadow-lg border border-pink-200 backdrop-blur-lg"
        >
          🏅 Best Surprise Won:{" "}
          <span className="text-lg text-rose-600">{bestMessage.text}</span>{" "}
          <span className="ml-2 text-sm text-yellow-600">
            ({bestMessage.level})
          </span>
        </motion.div>
      )}

      <AnimatePresence>
        {!revealed ? (
          <motion.button
            onClick={() => setRevealed(true)}
            className="relative px-10 py-6 rounded-3xl bg-gradient-to-br from-yellow-400 via-orange-400 to-red-400 text-black font-extrabold text-lg shadow-2xl hover:scale-110 hover:shadow-pink-400/40 transition-all duration-300 animate-pulse"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileTap={{ scale: 0.95 }}
          >
            ✨ Scratch to Reveal ✨
            <motion.div
              className="absolute -top-3 -right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full shadow-md"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 8, -8, 0] }}
              transition={{ repeat: Infinity, duration: 1.3 }}
            >
              NEW
            </motion.div>
          </motion.button>
        ) : (
          <motion.div
            key="surprise-card"
            className="mt-6 w-80 p-8 rounded-3xl bg-gradient-to-br from-pink-100 via-rose-200 to-red-100 text-rose-700 font-bold text-xl shadow-2xl border border-rose-300 backdrop-blur-lg"
            initial={{ rotateY: 90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: -90, opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Surprise message */}
            <p className="text-2xl text-center">{surprise.text}</p>
            <p className="mt-3 text-sm text-rose-500 text-center">
              Reward: {surprise.level}
            </p>
            <div className="mt-3 text-4xl text-center animate-bounce">
              💞 🎂 🎈
            </div>

            {/* Buttons */}
            <motion.button
              onClick={() => setRevealed(false)}
              className="mt-5 px-6 py-3 rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 text-white hover:shadow-lg hover:scale-105 transition-all duration-200 shadow-md"
              whileTap={{ scale: 0.9 }}
            >
              Try Again 🔄
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Confetti */}
      {revealed && (
        <Confetti
          width={width}
          height={height}
          numberOfPieces={250}
          recycle={false}
        />
      )}
    </div>
  );
}
