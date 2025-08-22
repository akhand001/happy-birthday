import React, { useRef, useEffect } from "react";

export default function Coupons({ coupons }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center p-6">
      {coupons.map((quote, i) => (
        <ScratchCard key={i} text={quote} />
      ))}
    </div>
  );
}

function ScratchCard({ text }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Match canvas size to container
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Foil look
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, "#c0c0c0");
    gradient.addColorStop(1, "#a0a0a0");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Scratch text
    ctx.fillStyle = "#444";
    ctx.font = "bold 18px sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("✨ Scratch Me ✨", canvas.width / 2, canvas.height / 2);
  }, []);

  const scratch = (e) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();

    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const clientY = e.clientY || (e.touches && e.touches[0].clientY);

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2); // smoother, bigger scratch
    ctx.fill();
  };

  return (
    <div className="relative w-[220px] h-[140px] rounded-2xl shadow-lg overflow-hidden backdrop-blur-md bg-white/30 border border-pink-300">
      {/* Hidden quote */}
      <div className="absolute inset-0 flex justify-center items-center p-4 text-center text-base font-semibold text-pink-800 z-0 leading-snug">
        {text}
      </div>

      {/* Scratch layer */}
      <canvas
        ref={canvasRef}
        onMouseMove={(e) => e.buttons === 1 && scratch(e)}
        onTouchMove={scratch}
        className="absolute inset-0 z-10 cursor-pointer"
      />
    </div>
  );
}
