import React, { useState } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import { motion, AnimatePresence } from "framer-motion";

export default function BirthdayCelebration() {
  const { width, height } = useWindowSize();
  const [flameOut, setFlameOut] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [cutCake, setCutCake] = useState(false);

  const startCelebration = () => {
    setFlameOut(true);

    // Show confetti
    setTimeout(() => {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 2 * 60 * 1000);
    }, 800);

    // Cake cut animation
    setTimeout(() => setCutCake(true), 1500);
  };

  return (
    <div className="flex flex-col items-center mt-12 relative">
      {/* Cake + Candle */}
      <motion.div
        className="relative flex flex-col items-center"
        whileHover={{ rotateY: 5, rotateX: -5, scale: 1.03 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        {/* Candle */}
        <div className="w-6 h-20 bg-gradient-to-b from-rose-100 to-pink-300 rounded-md relative flex justify-center z-20 shadow-md">
          {/* Wax drip effect */}
          {!flameOut && (
            <motion.div
              className="absolute bottom-0 w-2 h-4 bg-rose-200 rounded-full"
              animate={{ y: [0, 2, 0], opacity: [0.7, 1, 0.7] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          )}

          {/* Flame */}
          <motion.div
            onClick={startCelebration}
            initial={{ opacity: 1, scale: 1 }}
            animate={
              flameOut
                ? { opacity: 0, scale: 0.3 }
                : {
                    scale: [1, 1.3, 1],
                    y: [0, -2, 0],
                    opacity: [0.9, 1, 0.9],
                    filter: ["blur(1px)", "blur(3px)", "blur(1px)"],
                  }
            }
            transition={{ repeat: flameOut ? 0 : Infinity, duration: 0.6 }}
            className="w-8 h-10 rounded-full bg-gradient-to-b from-yellow-200 via-orange-400 to-red-600 cursor-pointer shadow-2xl"
            style={{
              position: "absolute",
              top: "-2rem",
              boxShadow:
                "0 0 30px rgba(255,200,50,0.9), 0 0 50px rgba(255,100,0,0.6)",
            }}
            title="Blow the candle 🎂"
          />
        </div>

        {/* Cake Body */}
        <div className="relative flex flex-col items-center mt-2">
          {/* Top Cream with Text */}
          <div className="w-56 h-14 bg-gradient-to-b from-pink-100 to-pink-300 rounded-t-full shadow-inner border border-pink-200 relative flex items-center justify-center">
            {/* Cream Border */}
            <div className="absolute -bottom-3 left-0 w-full flex justify-around">
              {[...Array(9)].map((_, i) => (
                <div
                  key={i}
                  className="w-5 h-7 bg-pink-200 rounded-b-full shadow-sm"
                ></div>
              ))}
            </div>

            {/* Text on Cake */}
            <motion.p
              className="text-red-600 font-extrabold text-lg drop-shadow-md"
              style={{
                textShadow:
                  "2px 2px 5px white, -1px -1px 2px #fcdcdc, 0 0 10px red",
                fontFamily: "'Brush Script MT', cursive",
              }}
              animate={{ scale: [1, 1.08, 1], rotate: [0, -2, 2, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              🎂 HBD Jaan 🎂
            </motion.p>
          </div>

          {/* Middle Cake Layer */}
          <div className="w-60 h-20 bg-gradient-to-b from-rose-400 to-rose-600 shadow-xl border-x border-rose-300 relative">
            {/* Cherries */}
            <div className="absolute -top-3 left-0 w-full flex justify-around">
              {[...Array(7)].map((_, i) => (
                <div
                  key={i}
                  className="w-5 h-5 bg-red-500 rounded-full border-2 border-white shadow-md"
                ></div>
              ))}
            </div>
          </div>

          {/* Bottom Cake Layer */}
          <div className="w-72 h-16 bg-gradient-to-b from-pink-600 to-rose-700 shadow-2xl border-x border-rose-500 rounded-b-2xl relative overflow-hidden">
            {/* Slice Cut Animation */}
            <AnimatePresence>
              {cutCake && (
                <motion.div
                  initial={{ x: 0, rotate: 0 }}
                  animate={{ x: 160, rotate: 25, opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.2 }}
                  className="absolute left-6 top-0 w-20 h-full bg-gradient-to-b from-pink-400 to-rose-600 border-l-2 border-rose-700 shadow-2xl rounded-b-xl"
                >
                  <p className="text-sm text-center text-white mt-6">🍰</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Instruction */}
        {!flameOut && (
          <p className="text-pink-600 mt-6 font-semibold animate-pulse">
            Tap the flame to blow out! 🎉
          </p>
        )}
      </motion.div>

      {/* Confetti */}
      {showConfetti && (
        <Confetti
          width={width}
          height={height}
          numberOfPieces={400}
          recycle={true}
          gravity={0.08}
          wind={0.02}
        />
      )}
    </div>
  );
}
