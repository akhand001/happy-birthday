import React from "react";

export default function BirthdayCard() {
  const cream = "#FFF5E8";
  const brown = "#6B4A2F";
  const red = "#E66B6B";
  const yellow = "#F8C35E";
  const purple = "#C9A3FF";

  const bottomHearts = [
    { x: 60, color: red },
    { x: 120, color: purple },
    { x: 180, color: red },
    { x: 240, color: purple },
    { x: 300, color: red },
    { x: 420, color: red },
    { x: 480, color: purple },
    { x: 540, color: red },
    { x: 600, color: purple },
    { x: 660, color: red },
  ];

  return (
    <div
      style={{
        width: "min(92vw, 736px)",
        aspectRatio: "1 / 1",
        margin: "0 auto",
        background: cream,
        borderRadius: 4,
        boxShadow: "0 10px 30px rgba(0,0,0,.08)",
        overflow: "hidden",
      }}
    >
      <svg viewBox="0 0 736 736" width="100%" height="100%">
        {/* Background */}
        <rect width="736" height="736" fill={cream} />

        {/* Garland line */}
        <path
          d="M0 70 C 180 140, 420 0, 736 80"
          fill="none"
          stroke={brown}
          strokeWidth="6"
          strokeLinecap="round"
        />
        {/* Garland lights with sticker effect */}
        {[
          { x: 80, y: 97 },
          { x: 160, y: 120 },
          { x: 240, y: 110 },
          { x: 320, y: 80 },
          { x: 400, y: 65 },
          { x: 480, y: 80 },
          { x: 560, y: 105 },
          { x: 640, y: 120 },
        ].map((p, i) => (
          <circle
            key={i}
            cx={p.x}
            cy={p.y}
            r="28"
            fill={i % 2 ? yellow : red}
            stroke="white"
            strokeWidth="6"
            filter="url(#shadow)"
          />
        ))}

        {/* Top text */}
        <text
          x="50%"
          y="280"
          textAnchor="middle"
          fill={brown}
          stroke="white"
          strokeWidth="8"
          paintOrder="stroke"
          style={{
            fontFamily: `'Patrick Hand', 'Comic Sans MS', cursive`,
            fontSize: 74,
            letterSpacing: 4,
          }}
        >
          SOMEONE I LOVE
        </text>

        {/* Big Heart with arrow (sticker style) */}
        <path
          d="M368 420
             C 360 410, 320 380, 300 350
             C 270 300, 340 280, 368 320
             C 396 280, 466 300, 436 350
             C 416 382, 376 410, 368 420 Z"
          fill={red}
          stroke="white"
          strokeWidth="10"
          filter="url(#shadow)"
        />

        {/* Arrow */}
        <path
          d="M160 420 L 540 420"
          stroke={brown}
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M160 420 l 36 -12 M160 420 l 36 12 M160 420 l 28 24"
          stroke={brown}
          strokeWidth="6"
          fill="none"
        />
        <path
          d="M540 420 l -28 -16 M540 420 l -28 16"
          stroke={brown}
          strokeWidth="6"
          fill="none"
        />

        {/* Bottom text */}
        <text
          x="50%"
          y="560"
          textAnchor="middle"
          fill={brown}
          stroke="white"
          strokeWidth="8"
          paintOrder="stroke"
          style={{
            fontFamily: `'Patrick Hand', 'Comic Sans MS', cursive`,
            fontSize: 74,
            letterSpacing: 4,
          }}
        >
          WAS BORN TODAY!
        </text>

        {/* Bottom row hearts */}
        {bottomHearts.map((h, i) => (
          <path
            key={i}
            d={heartPath(h.x, 640, 22)}
            fill={h.color}
            stroke="white"
            strokeWidth="6"
            filter="url(#shadow)"
          />
        ))}

        {/* Emojis with sticker outline */}
        <text
          x="356"
          y="648"
          fontSize="36"
          textAnchor="middle"
          stroke="white"
          strokeWidth="8"
          paintOrder="stroke"
        >
          👑
        </text>
        <text
          x="388"
          y="648"
          fontSize="36"
          textAnchor="middle"
          stroke="white"
          strokeWidth="8"
          paintOrder="stroke"
        >
          ✉️
        </text>

        {/* Shadow filter for sticker look */}
        <defs>
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="2" dy="2" stdDeviation="2" floodColor="rgba(0,0,0,0.25)" />
          </filter>
        </defs>
      </svg>

      {/* Handwritten font */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap"
      />
    </div>
  );
}

/** Proper cartoon heart ♥ */
function heartPath(cx, cy, r) {
  return [
    `M ${cx},${cy}`,
    `C ${cx - r},${cy - r} ${cx - r},${cy - 2 * r} ${cx},${cy - 1.4 * r}`,
    `C ${cx + r},${cy - 2 * r} ${cx + r},${cy - r} ${cx},${cy}`,
    "Z",
  ].join(" ");
}
