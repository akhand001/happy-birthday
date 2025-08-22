import React from "react";
import { motion } from "framer-motion";

export default function BirthdayHugCard() {
  return (
    <div className="flex items-center justify-center -h-screen bg">
      <div className="text-center">
        {/* Top text */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl font-hand text-gray-800"
        >
          here's a <span className="text-red-500">birthday</span> hug
        </motion.h1>

        {/* Stick figure */}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 260"
          width="200"
          height="260"
          className="mx-auto mt-6"
        >
          {/* Head */}
          <circle cx="100" cy="60" r="25" stroke="black" strokeWidth="3" fill="none" />

          {/* Eyes */}
          <circle cx="92" cy="55" r="3" fill="black" />
          <circle cx="108" cy="55" r="3" fill="black" />

          {/* Nose */}
          <line x1="100" y1="58" x2="100" y2="65" stroke="black" strokeWidth="2" />

          {/* Smile */}
          <path d="M88 70 Q100 80 112 70" stroke="black" strokeWidth="2" fill="none" />

          {/* Birthday Hat (cone with stripes + pom-pom) */}
          <polygon points="85,35 115,35 100,0" fill="#3b82f6" stroke="black" strokeWidth="2" />
          {/* Stripes on hat */}
          <line x1="90" y1="25" x2="110" y2="25" stroke="white" strokeWidth="2" />
          <line x1="92" y1="15" x2="108" y2="15" stroke="white" strokeWidth="2" />
          {/* Pom-pom */}
          <circle cx="100" cy="0" r="6" fill="red" />

          {/* Body */}
          <line x1="100" y1="85" x2="100" y2="160" stroke="black" strokeWidth="3" />

          {/* Animated Hugging Arms */}
          <motion.path
            d="M100 100 Q60 130 50 160"
            stroke="black"
            strokeWidth="3"
            fill="none"
            animate={{
              d: [
                "M100 100 Q60 130 50 160", // open arms
                "M100 100 Q80 120 90 150", // closing arms (hug position)
                "M100 100 Q60 130 50 160"  // open again
              ]
            }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
          <motion.path
            d="M100 100 Q140 130 150 160"
            stroke="black"
            strokeWidth="3"
            fill="none"
            animate={{
              d: [
                "M100 100 Q140 130 150 160", // open arms
                "M100 100 Q120 120 110 150", // closing arms
                "M100 100 Q140 130 150 160"  // open again
              ]
            }}
            transition={{ repeat: Infinity, duration: 2 }}
          />

          {/* Legs */}
          <line x1="100" y1="160" x2="80" y2="210" stroke="black" strokeWidth="3" />
          <line x1="100" y1="160" x2="120" y2="210" stroke="black" strokeWidth="3" />
        </motion.svg>

        {/* Bottom text */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-2xl font-hand text-gray-800 mt-4"
        >
          just <span className="text-red-500">for you</span>
        </motion.h2>
      </div>

      {/* Google Font */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap"
      />
      <style>{`.font-hand { font-family: 'Patrick Hand', cursive; }`}</style>
    </div>
  );
}
