import React, { useMemo, useState } from "react";

/**
 * BirthdayCalendar
 * - Exact calendar for September 2025
 * - Highlights 3rd with heart + glow
 * - Tooltip on hover
 */
export default function BirthdayCalendar({
  year = 2025,
  month = 8, // September
  highlightDay = 3,
}) {
  const [hoveredDay, setHoveredDay] = useState(null);

  // --- Calendar math (Monday-first grid) ---
  const { days, offsetMonFirst, monthName } = useMemo(() => {
    const monthNames = [
      "January","February","March","April","May","June",
      "July","August","September","October","November","December"
    ];
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDowSun0 = new Date(year, month, 1).getDay(); // 0=Sun..6=Sat
    const offset = (firstDowSun0 + 6) % 7; // Monday-first offset
    return {
      days: daysInMonth,
      offsetMonFirst: offset,
      monthName: monthNames[month],
    };
  }, [year, month]);

  // --- Layout constants ---
  const size = 800;
  const cx = size / 2;
  const cy = size / 2;
  const r = 340;

  const gridTop = 250;
  const gridLeft = 160;
  const colW = 80;
  const rowH = 70;

  const cells = [];
  for (let d = 1; d <= days; d++) {
    const idx = offsetMonFirst + (d - 1);
    const col = idx % 7;
    const row = Math.floor(idx / 7);
    const x = gridLeft + col * colW + colW / 2;
    const y = gridTop + row * rowH + rowH / 2 + 10;
    cells.push({ d, x, y });
  }

  return (
    <div
      style={{
        width: "min(92vw, 720px)",
        aspectRatio: "1 / 1",
        margin: "24px auto",
        position: "relative",
        borderRadius: 24,
        overflow: "hidden",
        background:
          "radial-gradient(circle at top left, #ffe4e6 0, transparent 40%)," +
          "radial-gradient(circle at bottom right, #dbeafe 0, transparent 50%)," +
          "#fefce8",
      }}
    >
      <ConfettiBalloons />

      <svg viewBox={`0 0 ${size} ${size}`} width="100%" height="100%">
        <circle cx={cx} cy={cy} r={r} fill="#34D399" filter="url(#softShadow)" />

        <defs>
          <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#000" floodOpacity="0.2" />
          </filter>
          <radialGradient id="glow">
            <stop offset="0%" stopColor="#ef4444" stopOpacity="0.8" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Month title */}
        <text
          x={cx}
          y={165}
          textAnchor="middle"
          fill="#0f172a"
          style={{ fontFamily: "Great Vibes, cursive", fontSize: 64 }}
        >
          {monthName} {year}
        </text>

        {/* Weekdays */}
        {["MO","TU","WE","TH","FR","SA","SU"].map((w, i) => (
          <text
            key={w}
            x={gridLeft + i * colW + colW / 2}
            y={210}
            textAnchor="middle"
            fill="#0f172a"
            style={{ fontFamily: "Poppins", fontWeight: 600, fontSize: 20 }}
          >
            {w}
          </text>
        ))}

        {/* Dates */}
        {cells.map(({ d, x, y }) => {
          const isHighlight = d === highlightDay;
          const isHovered = hoveredDay === d;
          return (
            <g
              key={d}
              style={{ cursor: "pointer" }}
              onMouseEnter={() => setHoveredDay(d)}
              onMouseLeave={() => setHoveredDay(null)}
            >
              {isHighlight && (
                <circle cx={x} cy={y} r="40" fill="url(#glow)">
                  <animate
                    attributeName="r"
                    values="36;42;36"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </circle>
              )}

              {isHighlight && (
                <path
                  d={heartPath(x, y + 4, 18)}
                  fill="#ef4444"
                  stroke="#991b1b"
                  strokeWidth="2"
                />
              )}

              <text
                x={x}
                y={y}
                textAnchor="middle"
                style={{
                  fontFamily: "Patrick Hand, cursive",
                  fontSize: 28,
                  fontWeight: 700,
                  transition: "transform 0.2s",
                }}
                fill="#fff"
              >
                {d}
              </text>

              {/* Tooltip only for highlight day */}
              {isHighlight && isHovered && (
                <g>
                  <rect
                    x={x - 90}
                    y={y - 85}
                    rx="12"
                    ry="12"
                    width="180"
                    height="40"
                    fill="#fff"
                    stroke="#ef4444"
                    strokeWidth="2"
                    filter="url(#softShadow)"
                  />
                  <text
                    x={x}
                    y={y - 60}
                    textAnchor="middle"
                    style={{
                      fontFamily: "Poppins",
                      fontSize: 18,
                      fontWeight: 600,
                      fill: "#ef4444",
                    }}
                  >
                    🎉 Happy Birthday Jaan ❤️
                  </text>
                </g>
              )}
            </g>
          );
        })}

        {/* Bottom caption */}
        <text
          x={cx}
          y={cx + r - 55}
          textAnchor="middle"
          style={{
            fontFamily: "Poppins, system-ui",
            fontSize: 28,
            fontWeight: 500,
            fill: "#0f172a",
          }}
        >
          Happy Birthday{" "}
          <tspan fill="#ef4444" fontFamily="Great Vibes, cursive" fontSize="42">
            Love
          </tspan>{" "}
          ❤️
        </text>
      </svg>

      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Patrick+Hand&family=Great+Vibes&family=Poppins:wght@400;600&display=swap"
      />
    </div>
  );
}

/** Floating confetti balloons */
function ConfettiBalloons() {
  const pieces = Array.from({ length: 35 }).map((_, i) => {
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    const size = 6 + Math.random() * 14;
    const colors = ["#60a5fa", "#f472b6", "#f59e0b", "#34d399", "#a78bfa"];
    const color = colors[i % colors.length];
    const delay = Math.random() * 3;
    return (
      <span
        key={i}
        style={{
          position: "absolute",
          left: `${left}%`,
          top: `${top}%`,
          width: size,
          height: size,
          background: color,
          borderRadius: "50%",
          opacity: 0.5,
          transform: "translate(-50%, -50%)",
          animation: `floatUp 6s ${delay}s infinite ease-in-out`,
          pointerEvents: "none",
        }}
      />
    );
  });

  return (
    <>
      {pieces}
      <style>{`
        @keyframes floatUp {
          0%   { transform: translate(-50%, -50%) translateY(0); }
          50%  { transform: translate(-50%, -50%) translateY(-15px); }
          100% { transform: translate(-50%, -50%) translateY(0); }
        }
      `}</style>
    </>
  );
}

/** Cute heart path */
function heartPath(cx, cy, r) {
  return [
    `M ${cx} ${cy + r * 0.2}`,
    `C ${cx - r} ${cy - r * 0.4}, ${cx - r} ${cy - r}, ${cx} ${cy - r * 0.4}`,
    `C ${cx + r} ${cy - r}, ${cx + r} ${cy - r * 0.4}, ${cx} ${cy + r * 0.2}`,
    "Z",
  ].join(" ");
}
