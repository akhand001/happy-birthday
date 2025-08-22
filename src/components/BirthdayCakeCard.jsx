import React from "react";
import { motion } from "framer-motion";

export default function BirthdayCakeCard() {
  return (
    <div className="flex items-center justify-center -h-screen bg">
      <div className="text-center">
        {/* Top Text */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-hand text-gray-800 m-0 p-0"
        >
          Happy birthday <span className="text-pink-500">&lt;3</span>
        </motion.h1>

        {/* SVG Drawing */}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 300 250"
          width="800"
          height="250"
          className="mx-auto"
        >
          {/* Left Person */}
          <circle cx="70" cy="80" r="20" stroke="black" strokeWidth="3" fill="none" />
          <circle cx="63" cy="80" r="2" fill="black" />
          <circle cx="77" cy="80" r="2" fill="black" />
          <path d="M63 88 Q70 95 77 88" stroke="black" strokeWidth="2" fill="none" />

          {/* Body */}
          <line x1="70" y1="100" x2="70" y2="160" stroke="black" strokeWidth="3" />
          <line x1="70" y1="120" x2="100" y2="140" stroke="black" strokeWidth="3" />
          <line x1="70" y1="160" x2="60" y2="200" stroke="black" strokeWidth="3" />
          <line x1="70" y1="160" x2="80" y2="200" stroke="black" strokeWidth="3" />

          {/* Right Person */}
          <circle cx="230" cy="80" r="20" stroke="black" strokeWidth="3" fill="none" />
          <circle cx="223" cy="80" r="2" fill="black" />
          <circle cx="237" cy="80" r="2" fill="black" />
          <path d="M223 88 Q230 95 237 88" stroke="black" strokeWidth="2" fill="none" />

          {/* Body */}
          <line x1="230" y1="100" x2="230" y2="160" stroke="black" strokeWidth="3" />
          <line x1="230" y1="120" x2="200" y2="140" stroke="black" strokeWidth="3" />
          <line x1="230" y1="160" x2="220" y2="200" stroke="black" strokeWidth="3" />
          <line x1="230" y1="160" x2="240" y2="200" stroke="black" strokeWidth="3" />

          {/* Cake */}
          <ellipse cx="150" cy="140" rx="50" ry="20" fill="white" stroke="black" strokeWidth="3" />
          <rect x="100" y="140" width="100" height="40" fill="white" stroke="black" strokeWidth="3" />
          <ellipse cx="150" cy="180" rx="50" ry="20" fill="white" stroke="black" strokeWidth="3" />

          {/* Cake decoration */}
          <path
            d="M110 150 Q120 160 130 150 Q140 160 150 150 Q160 160 170 150 Q180 160 190 150"
            stroke="black"
            strokeWidth="2"
            fill="none"
          />

          {/* Candles with animated flames */}
          {[130, 150, 170].map((x, i) => (
            <g key={i}>
              <rect x={x - 2} y="120" width="4" height="20" fill="black" />
              <motion.circle
                cx={x}
                cy="115"
                r="5"
                fill="orange"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 0.6, delay: i * 0.2 }}
              />
            </g>
          ))}
        </motion.svg>

        {/* Bottom Hearts & Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="p-0 m-0"
        >
          <div className="flex justify-center space-x-4">
            {["❤️", "💖", "💕"].map((heart, i) => (
              <motion.span
                key={i}
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.3 }}
                className="text-pink-400 text-2xl"
              >
                {heart}
              </motion.span>
            ))}
          </div>
          <h2 className="text-xl font-hand text-gray-800">ily</h2>
        </motion.div>
      </div>

      {/* Font */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap"
      />
      <style>{`.font-hand { font-family: 'Patrick Hand', cursive; }`}</style>
    </div>
  );
}
