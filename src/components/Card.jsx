import React from "react";

export default function Card({ message, rotation }) {
  // pastel gradients instead of flat bg
  const gradients = [
    "bg-gradient-to-br from-pink-100 via-rose-50 to-pink-200",
    "bg-gradient-to-br from-yellow-100 via-orange-50 to-pink-100",
    "bg-gradient-to-br from-purple-100 via-pink-50 to-indigo-100",
    "bg-gradient-to-br from-green-100 via-emerald-50 to-teal-100",
    "bg-gradient-to-br from-blue-100 via-cyan-50 to-sky-100",
  ];
  const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];

  // doodles for decoration (pick different each time)
  const doodles = ["❤️", "🎈", "⭐", "🎂", "✨", "💕", "🌸", "💫", "🌹"];
  const topDoodle = doodles[Math.floor(Math.random() * doodles.length)];
  const bottomDoodle = doodles[Math.floor(Math.random() * doodles.length)];

  // highlight important words
  const formatText = (text) =>
    text.split(" ").map((word, i) => {
      if (
        ["love", "life", "special", "you", "forever", "always"].some((key) =>
          word.toLowerCase().includes(key)
        )
      ) {
        return (
          <span key={i} className="text-pink-600 font-bold drop-shadow-md">
            {word}{" "}
          </span>
        );
      }
      return word + " ";
    });

  return (
    <div
      className={`
        ${randomGradient} 
        relative w-52 h-64 p-5 rounded-2xl shadow-lg
        transition-transform duration-500
        hover:-translate-y-3 hover:rotate-1 hover:shadow-2xl
        flex flex-col justify-between
        border border-pink-200
        overflow-hidden
      `}
      style={{
        transform: `rotate(${rotation}deg)`,
        fontFamily: "'Patrick Hand', cursive",
      }}
    >
      {/* floating doodles (decorative) */}
      <div className="absolute -top-3 -left-3 text-2xl animate-bounce">
        {topDoodle}
      </div>
      <div className="absolute -bottom-3 -right-3 text-2xl animate-pulse">
        {bottomDoodle}
      </div>

      {/* Top accent */}
      <div className="text-2xl text-rose-400 self-start animate-spin-slow">
        {topDoodle}
      </div>

      {/* Main message */}
      <p className="text-center text-lg text-gray-800 leading-snug whitespace-pre-line px-2 break-words">
        {formatText(message)}
      </p>

      {/* Bottom accent */}
      <div className="text-xl text-pink-500 self-end animate-bounce">
        {bottomDoodle}
      </div>

      {/* Shine effect overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/20 to-transparent opacity-40 pointer-events-none"></div>
    </div>
  );
}
