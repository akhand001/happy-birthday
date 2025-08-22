import React from "react";

export default function BirthdayBanner() {
  const text = "HAPPY BIRTHDAY";
  const colors = [
    "url(#grad1)", "url(#grad2)", "url(#grad3)", "url(#grad4)", "url(#grad5)",
    "url(#grad6)", "url(#grad7)", "url(#grad8)", "url(#grad9)", "url(#grad10)",
    "url(#grad11)", "url(#grad12)", "url(#grad13)"
  ];

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        padding: "20px 0"
      }}
    >
      {/* Floating confetti */}
      <Confetti />
      {/* Sparkles */}
      <Sparkles />

      <svg
        viewBox="0 0 1200 300"
        width="100%"
        height="260"
        style={{ display: "block", margin: "0 auto" }}
      >
        {/* Wavy rope */}
        <path
          d="M 50 60 Q 600 140, 1150 60"
          stroke="#444"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />

        {text.split("").map((letter, i) => {
          if (letter === " ") return null;
          const flagWidth = 70;
          const flagHeight = 120;
          const x = 80 + i * 80;
          const y = 60;

          return (
            <g
              key={i}
              style={{ transformOrigin: `${x + flagWidth / 2}px ${y}px` }}
              className="flag"
            >
              {/* Flag shape with gradient */}
              <path
                d={`M${x} ${y}
                    L${x + flagWidth} ${y}
                    L${x + flagWidth / 2} ${y + flagHeight} Z`}
                fill={colors[i % colors.length]}
                stroke="#fff"
                strokeWidth="3"
                filter="url(#shadow)"
              />

              {/* Letter */}
              <text
                x={x + flagWidth / 2}
                y={y + flagHeight / 2}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="34"
                fontWeight="bold"
                fontFamily="Poppins, sans-serif"
                fill="#fff"
                style={{
                  filter: "drop-shadow(0px 0px 6px rgba(255,255,255,0.9))"
                }}
              >
                {letter}
              </text>
            </g>
          );
        })}

        {/* Filters & Gradients */}
        <defs>
          <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow
              dx="2"
              dy="4"
              stdDeviation="4"
              floodColor="rgba(0,0,0,0.35)"
            />
          </filter>

          {/* 13 gradients */}
          <linearGradient id="grad1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#34d399" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
          <linearGradient id="grad2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </linearGradient>
          <linearGradient id="grad3" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#6d28d9" />
          </linearGradient>
          <linearGradient id="grad4" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#db2777" />
          </linearGradient>
          <linearGradient id="grad5" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f43f5e" />
            <stop offset="100%" stopColor="#b91c1c" />
          </linearGradient>
          <linearGradient id="grad6" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>
          <linearGradient id="grad7" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#84cc16" />
            <stop offset="100%" stopColor="#4d7c0f" />
          </linearGradient>
          <linearGradient id="grad8" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#0e7490" />
          </linearGradient>
          <linearGradient id="grad9" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#7e22ce" />
          </linearGradient>
          <linearGradient id="grad10" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="100%" stopColor="#991b1b" />
          </linearGradient>
          <linearGradient id="grad11" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#15803d" />
          </linearGradient>
          <linearGradient id="grad12" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#eab308" />
            <stop offset="100%" stopColor="#b45309" />
          </linearGradient>
          <linearGradient id="grad13" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#4338ca" />
          </linearGradient>
        </defs>
      </svg>

      {/* Animations */}
      <style>{`
        .flag {
          animation: wave 3s ease-in-out infinite;
        }
        .flag:nth-child(even) {
          animation-delay: 1s;
        }
        @keyframes wave {
          0% { transform: rotate(3deg) translateY(0); }
          50% { transform: rotate(-3deg) translateY(5px); }
          100% { transform: rotate(3deg) translateY(0); }
        }
      `}</style>
    </div>
  );
}

/** Floating Confetti component */
function Confetti() {
  const shapes = ["circle", "square", "triangle"];
  const colors = ["#f87171", "#34d399", "#60a5fa", "#fbbf24", "#a78bfa"];

  const pieces = Array.from({ length: 50 }).map((_, i) => {
    const left = Math.random() * 100;
    const delay = Math.random() * 5;
    const size = 6 + Math.random() * 10;
    const color = colors[i % colors.length];
    const shape = shapes[i % shapes.length];

    let style = {
      position: "absolute",
      top: "-20px",
      left: `${left}%`,
      width: size,
      height: size,
      background: color,
      opacity: 0.9,
      animation: `fall 6s ${delay}s infinite linear`
    };

    if (shape === "circle") style.borderRadius = "50%";
    if (shape === "triangle") {
      style = {
        ...style,
        width: 0,
        height: 0,
        borderLeft: `${size / 2}px solid transparent`,
        borderRight: `${size / 2}px solid transparent`,
        borderBottom: `${size}px solid ${color}`,
        background: "none"
      };
    }

    return <span key={i} style={style} />;
  });

  return (
    <>
      {pieces}
      <style>{`
        @keyframes fall {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(350px) rotate(360deg); opacity: 0; }
        }
      `}</style>
    </>
  );
}

/** Sparkles effect */
function Sparkles() {
  const sparkles = Array.from({ length: 20 }).map((_, i) => {
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    const delay = Math.random() * 3;
    return (
      <span
        key={i}
        style={{
          position: "absolute",
          top: `${top}%`,
          left: `${left}%`,
          width: "6px",
          height: "6px",
          background: "white",
          borderRadius: "50%",
          boxShadow: "0 0 8px white",
          animation: `sparkle 2s ${delay}s infinite`
        }}
      />
    );
  });

  return (
    <>
      {sparkles}
      <style>{`
        @keyframes sparkle {
          0%, 100% { transform: scale(0); opacity: 0; }
          50% { transform: scale(1.5); opacity: 1; }
        }
      `}</style>
    </>
  );
}
