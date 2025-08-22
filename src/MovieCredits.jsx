import React from "react";

export default function MovieCredits() {
  const credits = [
    { role: "Starring", name: "My Love " },
    { role: "Directed by", name: "Destiny " },
    { role: "Produced by", name: "Our Hearts " },
    { role: "Screenplay by", name: "Every Moment We Shared " },
    { role: "Cinematography", name: "Your Beautiful Smile " },
    { role: "Music by", name: "Our Heartbeats " },
    { role: "Edited by", name: "Time & Memories " },
    { role: "Special Appearance", name: "Endless Laughter " },
    { role: "Special Thanks", name: "You, for being mine " },
    { role: "Dedicated to", name: "Forever Us ♾️" },
  ];

  return (
    <div className="credits-container">
      <div className="credits-scroll">
        <h2 className="title">✨ The End ✨</h2>
        {credits.map((item, i) => (
          <div key={i} className="credit-line">
            <span className="role">{item.role}</span>
            <span className="name">{item.name}</span>
          </div>
        ))}

        {/* Duplicate for infinite loop */}
        <h2 className="title">✨ The End ✨</h2>
        {credits.map((item, i) => (
          <div key={`dup-${i}`} className="credit-line">
            <span className="role">{item.role}</span>
            <span className="name">{item.name}</span>
          </div>
        ))}
      </div>

      <style>{`
        .credits-container {
          position: relative;
          width: 100%;
          height: 420px;
          overflow: hidden;
          background: transparent;
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: 'Playfair Display', serif;
        }

        .credits-scroll {
          position: absolute;
          bottom: -100%;
          animation: scroll-up 40s ease-in-out infinite;
          text-align: center;
        }

        .title {
          font-size: 2.3rem;
          margin-bottom: 2rem;
          font-weight: bold;
          background: linear-gradient(90deg, #ff6b6b, #f9a826, #9b5de5);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: glow 3s ease-in-out infinite alternate;
        }

        .credit-line {
          margin: 25px 0;
          font-size: 1.5rem;
          opacity: 0;
          animation: fade-in 2s ease-in-out forwards;
          animation-delay: 0.5s;
        }

        .credit-line:nth-child(even) {
          animation: fade-in 2s ease-in-out forwards, floaty 6s ease-in-out infinite;
        }

        .role {
          display: block;
          font-weight: 600;
          font-size: 1.1rem;
          color: #9b5de5;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        .name {
          display: block;
          font-size: 1.3rem;
          font-style: italic;
          background: linear-gradient(90deg, #ff758c, #ff7eb3, #ff9a8b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: glow-soft 4s ease-in-out infinite alternate;
        }

        /* Animations */
        @keyframes scroll-up {
          0% { bottom: -100%; }
          100% { bottom: 100%; }
        }

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes floaty {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        @keyframes glow {
          from { text-shadow: 0 0 5px rgba(255,105,180,0.6); }
          to { text-shadow: 0 0 15px rgba(255,20,147,0.9); }
        }

        @keyframes glow-soft {
          from { text-shadow: 0 0 5px rgba(255,182,193,0.5); }
          to { text-shadow: 0 0 12px rgba(255,105,180,0.8); }
        }
      `}</style>
    </div>
  );
}
