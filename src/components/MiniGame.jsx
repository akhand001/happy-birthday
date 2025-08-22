import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import { Gift, Timer, RefreshCw, Lightbulb, Trophy, Heart } from "lucide-react";

export default function LoveLetterPuzzle({
  image = "/assets/heart.png",
  grid = 3,
  size = 340,
  enableTimer = true,
  seconds = 60,
  message = `💌 My forever person 💖

From the very first moment I met you, my world became brighter. 
Every smile of yours feels like sunshine, and every word you speak 
is music to my heart. You are best Patni For me, my partner, my safe place, 
and my greatest adventure.

Ap meri sabse pyaari aadat ho 💕. I never want to unlearn this love.  
You make ordinary days magical and special days unforgettable.  

On your special day, I just want to say — thank you for being YOU.  
Thank you for choosing me, loving me, and making me believe in 
forever.  

Happy Birthday, Meri wife 🎂💖  
I love you endlessly, today and always. 💞
I love You infinity and beyond Meri Duniya`,
}) {
  const { width, height } = useWindowSize();

  const [pieces, setPieces] = useState([]);
  const [shuffled, setShuffled] = useState([]);
  const [complete, setComplete] = useState(false);
  const [timeLeft, setTimeLeft] = useState(seconds);
  const [openGift, setOpenGift] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [bestScore, setBestScore] = useState(null);
  const [failed, setFailed] = useState(false);

  // Create puzzle pieces
  useEffect(() => {
    const arr = [];
    for (let r = 0; r < grid; r++) {
      for (let c = 0; c < grid; c++) {
        arr.push({ id: `${r}-${c}`, row: r, col: c });
      }
    }
    const shuffledArr = [...arr].sort(() => Math.random() - 0.5);
    setPieces(arr);
    setShuffled(shuffledArr);
  }, [grid]);

  // Timer countdown
  useEffect(() => {
    if (!enableTimer || complete || openGift) return;
    if (timeLeft <= 0) {
      setFailed(true);
      return;
    }
    const timer = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, enableTimer, complete, openGift]);

  // Drag & Drop logic
  const onDragStart = (e, fromIndex) => {
    e.dataTransfer.setData("from", fromIndex);
  };

  const onDrop = (e, toIndex) => {
    const fromIndex = e.dataTransfer.getData("from");
    if (fromIndex === "") return;

    const newShuffled = [...shuffled];
    const temp = newShuffled[toIndex];
    newShuffled[toIndex] = newShuffled[fromIndex];
    newShuffled[fromIndex] = temp;

    setShuffled(newShuffled);

    // ✅ Check completion
    const solved = newShuffled.every((p, i) => p.id === pieces[i].id);
    if (solved) {
      setComplete(true);
      setAttempts((a) => a + 1);
      if (bestScore === null || timeLeft > bestScore) {
        setBestScore(timeLeft);
      }
    }
  };

  // Reset puzzle
  const resetPuzzle = () => {
    setComplete(false);
    setOpenGift(false);
    setFailed(false);
    setTimeLeft(seconds);
    const reshuffled = [...pieces].sort(() => Math.random() - 0.5);
    setShuffled(reshuffled);
  };

  // Close gift only (keep puzzle complete)
  const closeGift = () => {
    setOpenGift(false);
  };

  // Show hint for 3 seconds
  const handleHint = () => {
    setShowHint(true);
    setTimeout(() => setShowHint(false), 3000);
  };

  return (
    <div className="flex flex-col items-center my-10">
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="font-extrabold text-2xl mb-4 bg-gradient-to-r from-pink-500 to-rose-500 text-transparent bg-clip-text"
      >
        Puzzle 💖
      </motion.h2>

      {/* Timer & Score */}
      <div className="flex gap-6 mb-4 text-rose-600 font-semibold">
        {enableTimer && !complete && (
          <span className="flex items-center gap-1">
            <Timer size={18} /> {timeLeft}s
          </span>
        )}
        <span className="flex items-center gap-1">
          <RefreshCw size={18} /> Attempts: {attempts}
        </span>
        {bestScore !== null && (
          <span className="flex items-center gap-1">
            <Trophy size={18} /> Best: {bestScore}s
          </span>
        )}
      </div>

      {/* Hint Button */}
      {!complete && !failed && (
        <motion.button
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          onClick={handleHint}
          className="mb-4 px-4 py-2 flex items-center gap-2 rounded-lg bg-gradient-to-r from-rose-400 to-pink-400 text-white shadow-md hover:brightness-110"
        >
          <Lightbulb size={18} /> Show Hint
        </motion.button>
      )}

      {/* Puzzle Grid or Hint */}
      {!complete && !failed && (
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="grid gap-1 bg-white/70 backdrop-blur-lg p-2 rounded-2xl shadow-xl border border-rose-200"
          style={{
            gridTemplateColumns: `repeat(${grid}, 1fr)`,
            width: size,
            height: size,
          }}
        >
          {showHint ? (
            <motion.img
              key="hint"
              src={image}
              alt="hint"
              className="w-full h-full object-cover rounded-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            />
          ) : (
            shuffled.map((p, index) => (
              <motion.div
                key={index}
                draggable
                onDragStart={(e) => onDragStart(e, index)}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => onDrop(e, index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-rose-200 rounded-lg overflow-hidden cursor-grab active:cursor-grabbing shadow-sm"
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: `${grid * 100}% ${grid * 100}%`,
                  backgroundPosition: `${(p.col * 100) / (grid - 1)}% ${(p.row * 100) / (grid - 1)}%`,
                }}
              />
            ))
          )}
        </motion.div>
      )}

      {/* Fail Modal */}
      <AnimatePresence>
        {failed && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 text-center bg-rose-50 p-6 rounded-2xl border border-rose-200 shadow-lg"
          >
            <h3 className="text-xl font-bold text-red-500">💔 Time’s Up!</h3>
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="mt-3 px-5 py-2 rounded-xl bg-rose-500 text-white shadow hover:bg-rose-600"
              onClick={resetPuzzle}
            >
              Try Again 🔄
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Completion Modal */}
      <AnimatePresence>
        {complete && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="mt-8 text-center"
          >
            <h3 className="text-3xl font-extrabold text-rose-600 drop-shadow">
              🎉 Puzzle Complete! 🎉
            </h3>

            {!openGift ? (
              <motion.button
                onClick={() => setOpenGift(true)}
                className="mt-6 relative flex items-center justify-center w-32 h-32 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 shadow-lg text-white"
                initial={{ scale: 0.9 }}
                animate={{ scale: [1, 1.05, 1], rotate: [0, -3, 3, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <Gift size={50} className="drop-shadow-lg" />
              </motion.button>
            ) : (
              <motion.div
                className="mt-6 relative flex flex-col items-center p-6 rounded-2xl bg-gradient-to-br from-rose-50 to-pink-100 border border-rose-200 shadow-xl"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Floating Hearts */}
                <motion.div
                  className="absolute -top-8 left-1/2 transform -translate-x-1/2 flex gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ y: 0, opacity: 0 }}
                      animate={{ y: -40 - i * 10, opacity: 1 }}
                      transition={{ duration: 2 + i * 0.3, repeat: Infinity }}
                    >
                      <Heart size={20} className="text-rose-400 fill-rose-400" />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Message */}
                <motion.pre
                  className="whitespace-pre-wrap font-medium text-md text-rose-700 text-center leading-relaxed relative z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2 }}
                >
                  {message}
                </motion.pre>

                <div className="mt-4 text-3xl">💞 🎂 🎈</div>

                {/* Buttons */}
                <div className="flex gap-3 justify-center mt-5">
                  <button
                    className="px-4 py-2 rounded-lg border border-rose-300 text-rose-600 hover:bg-rose-100"
                    onClick={closeGift}
                  >
                    Close
                  </button>
                  <button
                    className="px-4 py-2 rounded-lg bg-rose-500 text-white hover:bg-rose-600"
                    onClick={resetPuzzle}
                  >
                    Retry 🔄
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Confetti on Complete */}
      {complete && openGift && (
        <Confetti width={width} height={height} numberOfPieces={250} />
      )}
    </div>
  );
}
