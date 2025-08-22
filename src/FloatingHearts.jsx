import React, { useEffect, useState } from "react";

export default function FloatingBalloons() {
  const [balloons, setBalloons] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const colors = ["#FF4B5C", "#FFB400", "#3EC1D3", "#6A4C93", "#FF6F91"];
      const color = colors[Math.floor(Math.random() * colors.length)];

      const newBalloon = {
        id: Date.now(),
        color,
        left: Math.random() * 100, // random horizontal start
        size: Math.floor(Math.random() * 40) + 50, // 50px - 90px
        duration: Math.random() * 5 + 6, // float speed
        zIndex: Math.floor(Math.random() * 3) + 1, // depth layer
      };

      setBalloons((prev) => [...prev, newBalloon]);

      setTimeout(() => {
        setBalloons((prev) => prev.filter((b) => b.id !== newBalloon.id));
      }, (newBalloon.duration + 1) * 1000);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {balloons.map((b) => (
        <div
          key={b.id}
          className="absolute animate-float"
          style={{
            left: `${b.left}%`,
            bottom: "-120px",
            width: `${b.size}px`,
            height: `${b.size * 1.3}px`,
            animationDuration: `${b.duration}s`,
            zIndex: b.zIndex,
          }}
        >
          {/* 🎈 Balloon Body */}
          <div
            className="relative rounded-full animate-wobble"
            style={{
              width: "100%",
              height: "100%",
              background: `radial-gradient(circle at 30% 30%, #fff 15%, ${b.color} 70%)`,
              boxShadow: `inset -8px -8px 16px rgba(0,0,0,0.25),
                          inset 6px 6px 12px rgba(255,255,255,0.5),
                          0 8px 20px rgba(0,0,0,0.2)`,
            }}
          >
            {/* Balloon Shine */}
            <div
              className="absolute rounded-full"
              style={{
                top: "15%",
                left: "25%",
                width: "25%",
                height: "20%",
                background: "rgba(255,255,255,0.6)",
                filter: "blur(2px)",
              }}
            ></div>

            {/* Balloon Tie */}
            <div
              className="absolute left-1/2 -bottom-2 w-2 h-3 bg-gray-700 rounded-sm"
              style={{ transform: "translateX(-50%) rotate(8deg)" }}
            ></div>
          </div>

          {/* 🎈 Curved String */}
          <svg
            className="absolute left-1/2 top-full opacity-70"
            style={{
              transform: "translateX(-50%)",
              height: `${b.size * 1.5}px`,
              width: "30px",
            }}
          >
            <path
              d="M15 0 C 10 20, 20 40, 15 60"
              stroke="gray"
              strokeWidth="1"
              fill="transparent"
            />
          </svg>
        </div>
      ))}

      {/* Floating Animations */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          50% { transform: translateY(-50vh) rotate(3deg); opacity: 0.95; }
          100% { transform: translateY(-110vh) rotate(-3deg); opacity: 0; }
        }
        .animate-float {
          animation-name: float;
          animation-timing-function: ease-in-out;
          position: absolute;
        }

        @keyframes wobble {
          0%, 100% { transform: rotate(-2deg); }
          50% { transform: rotate(2deg); }
        }
        .animate-wobble {
          animation: wobble 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
