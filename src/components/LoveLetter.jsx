import React from "react";

export default function LoveLetter({ letter }) {
  return (
    <div className="w-full flex justify-center py-10 px-4">
      <div className="relative [perspective:1400px] max-w-2xl w-full sm:max-w-xl md:max-w-3xl">
        {/* Hanging String */}
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 h-12 w-[2px] bg-yellow-500/80 shadow-[0_0_6px_rgba(0,0,0,0.2)] z-20" />
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-yellow-600 shadow-inner z-20 border border-yellow-800" />

        {/* Outer shadow */}
        <div className="absolute inset-0 blur-2xl rounded-xl bg-black/30 translate-y-4 scale-95" />

        {/* Scroll */}
        <div
          className="relative z-10 rounded-xl overflow-visible transition-transform duration-700 ease-out hover:scale-[1.02] sm:hover:rotate-x-4 sm:hover:-rotate-y-2"
          style={{ transformStyle: "preserve-3d" }}
        >
          <Rod position="top" />
          <Rod position="bottom" />

          {/* Parchment */}
          <div
            className="relative mx-4 sm:mx-6 my-6 sm:my-[30px] rounded-[14px] px-4 sm:px-10 py-6 sm:py-12 border border-red-800/40"
            style={{
              background: `
                url('https://www.transparenttextures.com/patterns/paper-fibers.png'),
                radial-gradient(circle at 50% 0%, rgba(255,255,240,0.98), rgba(245,230,200,0.96) 70%, rgba(230,210,180,0.95)),
                repeating-linear-gradient(0deg, rgba(120,85,50,0.05) 0 2px, transparent 2px 6px)
              `,
              backgroundBlendMode: "multiply",
              boxShadow: "inset 0 2px 3px rgba(255,255,255,0.8), inset 0 -12px 50px rgba(0,0,0,0.12)"
            }}
          >
            {/* Ornamental border */}
            <div className="p-4 sm:p-6 border-[4px] border-red-800/70 rounded-[10px] shadow-inner">
              {/* Heading */}
              <h2
                className="text-center mb-4"
                style={{
                  fontFamily: "'Great Vibes', cursive, 'Segoe Script', sans-serif",
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  color: "#8b0000",
                  textShadow: "0 1px 0 #fff, 0 0 15px rgba(139,0,0,0.3)"
                }}
              >
                Happy Birthday My Love
              </h2>

              {/* Letter text */}
              <p
                className="mx-auto max-w-3xl text-center leading-relaxed"
                style={{
                  fontFamily: "'Dancing Script', cursive, 'Pacifico', 'Segoe Script', sans-serif",
                  fontSize: "clamp(1rem, 2.5vw, 1.35rem)",
                  lineHeight: "2",
                  color: "#5b0f0f",
                  letterSpacing: "0.8px",
                  wordSpacing: "1.2px",
                  fontWeight: "500",
                  textShadow: "0.5px 0.5px 1px rgba(0,0,0,0.07)",
                  textAlign: "center",
                  padding: "0 1rem"
                }}
              >
                {letter}
              </p>

              {/* Signature */}
              <div
                className="mt-6 sm:mt-8 text-right"
                style={{
                  fontFamily: "'Dancing Script', cursive, 'Segoe Script', sans-serif",
                  fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
                  color: "#8b0000"
                }}
              >
                — Akhand Pratap ❤️
              </div>
            </div>

            {/* Decorative roses */}
            <div className="flex justify-center gap-3 sm:gap-8 my-4 text-2xl sm:text-3xl">
              <span role="img" aria-label="rose">🌹</span>
              <span role="img" aria-label="rose">🌹</span>
              <span role="img" aria-label="rose">🌹</span>
            </div>

            {/* Curl shading */}
            <div className="pointer-events-none absolute inset-0 rounded-[14px] [box-shadow:inset_0_40px_40px_-30px_rgba(0,0,0,0.25),inset_0_-40px_40px_-30px_rgba(0,0,0,0.2)]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Rod({ position = "top" }) {
  const isTop = position === "top";
  return (
    <div
      className={`absolute left-1/2 -translate-x-1/2 w-[92%] h-6 ${isTop ? "-top-4" : "-bottom-4"
        }`}
      style={{ transform: "translateZ(35px)" }}
    >
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "linear-gradient(180deg, #6b0f0f, #991b1b 30%, #6b0f0f 70%, #4b0a0a)",
          boxShadow:
            "0 4px 10px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.5)"
        }}
      />
      <div
        className="absolute -left-4 top-1/2 -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, #fcd34d, #d97706 60%, #92400e)",
          boxShadow:
            "0 4px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.7)"
        }}
      />
      <div
        className="absolute -right-4 top-1/2 -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, #fcd34d, #d97706 60%, #92400e)",
          boxShadow:
            "0 4px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.7)"
        }}
      />
    </div>
  );
}
