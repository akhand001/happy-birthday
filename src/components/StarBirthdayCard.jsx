import React from "react";

export default function StarBirthdayCard() {
  return (
    <div style={page}>
      {/* Google handwriting font */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap"
      />

      <div style={card}>
        {/* irregular hand-drawn star (SVG) */}
        <svg
          viewBox="0 0 200 190"
          width="110"
          height="160"
          style={{ display: "block", margin: "0 auto 10px" }}
          aria-hidden
        >
          <path
            d="M100 8
               L120 64
               L178 72
               L132 106
               L148 160
               L100 132
               L52 160
               L68 106
               L22 72
               L80 64
               Z"
            fill="#64B5FF"
            stroke="#1F3A57"
            strokeWidth="4"
            strokeLinejoin="round"
            strokeLinecap="round"
            transform="rotate(-6 100 95)"
          />
          <path
            d="M100 22 L118 68 L170 74 L132 100 L148 148 L100 126 L56 148 L72 102 L32 74 L82 68 Z"
            fill="#83CBFF"
            opacity="0.28"
            transform="rotate(-6 100 95)"
          />
        </svg>

        {/* playful handwritten text */}
        <div style={textWrap}>
          <p style={textLine}>I hope your birthdays always</p>
          <p style={textLine}>are lit up with dreams and stars.</p>
        </div>

        {/* small twinkles around (CSS animated) */}
        <div style={twinkleContainer} aria-hidden>
          <span style={{ ...twinkle, left: "18%", top: "12%", animationDelay: "0s" }} />
          <span style={{ ...twinkle, left: "82%", top: "18%", animationDelay: "0.4s" }} />
          <span style={{ ...twinkle, left: "68%", top: "46%", animationDelay: "0.9s" }} />
          <span style={{ ...twinkle, left: "30%", top: "55%", animationDelay: "1.2s" }} />
        </div>
      </div>

      <style>{`
        @keyframes twinkle {
          0%   { transform: scale(0.6); opacity: 0.1; }
          40%  { transform: scale(1.2); opacity: 1; }
          100% { transform: scale(0.8); opacity: 0.2; }
        }
      `}</style>
    </div>
  );
}

/* Inline style objects */
const page = {
  minHeight: "4vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "transparent",
  padding: "2px",
  boxSizing: "border-box",
};

const card = {
  width: "min(720px, 82vw)",
  maxWidth: 480,
  padding: "10px 18px",
  borderRadius: 16,
  position: "relative",
  textAlign: "center",
  fontFamily: "'Patrick Hand', 'Comic Sans MS', cursive",
  color: "#2e2e2e",
};

const textWrap = {
  marginTop: 0, // ✅ removed top margin
  lineHeight: 1.6,
};

const textLine = {
  margin: 0,
  fontSize: 22,
  color: "#3b3b3b",
  letterSpacing: 0.6,
};

const twinkleContainer = {
  position: "absolute",
  inset: 0,
  pointerEvents: "none",
};

const twinkle = {
  position: "absolute",
  width: 10,
  height: 10,
  background: "linear-gradient(180deg,#fff, #ffd)",
  borderRadius: 2,
  boxShadow: "0 0 8px rgba(255,255,200,0.9)",
  transformOrigin: "center",
  animationName: "twinkle",
  animationDuration: "2.4s",
  animationIterationCount: "infinite",
  mixBlendMode: "screen",
};
