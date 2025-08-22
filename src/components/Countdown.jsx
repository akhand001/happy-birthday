import React, { useEffect, useState } from "react";
import { CalendarDays, Clock, Timer, Hourglass } from "lucide-react";

export default function Countdown({ date }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isBirthday, setIsBirthday] = useState(false);

  useEffect(() => {
    const updateTimer = () => {
      const diff = new Date(date) - new Date();
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      } else {
        setIsBirthday(true);
        clearInterval(timer);
      }
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, [date]);

  const timeUnit = (value, label, Icon) => (
    <div className="flex flex-col items-center bg-white border border-pink-300 px-5 py-3 rounded-2xl shadow-lg hover:shadow-pink-200 transition-all transform hover:scale-105">
      <Icon className="w-6 h-6 text-pink-500 mb-1" />
      <span className="text-4xl font-bold text-pink-600">{value}</span>
      <span className="text-xs uppercase tracking-wider text-gray-500">{label}</span>
    </div>
  );

  if (isBirthday) {
    return (
      <div className="text-center mt-10 animate-fadeIn">
        <h1 className="text-4xl font-extrabold text-pink-500 drop-shadow-lg animate-bounce">
          🎉 Happy Birthday to You Merii Jaan ❤️
        </h1>
        <p className="mt-4 text-lg italic text-yellow-600 max-w-xl mx-auto">
          "On your special day, I just want you to know that you are the most
          beautiful part of my life. May your heart be filled with endless joy,
          your smile shine brighter than the stars, and your soul dance to the rhythm of love."
        </p>
        <div className="mt-6 text-3xl animate-pulse">💖🎂🎈🎁✨</div>
      </div>
    );
  }

  return (
    <div className="text-center mt-6">
      <h2
        className="text-5xl md:text-6xl font-extrabold mb-6 
             bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-400 
             bg-clip-text text-transparent 
             animate-gradient bg-[length:200%_200%] 
             drop-shadow-lg"
        style={{
          fontFamily: "'Pacifico', cursive",
          animation: "gradientMove 5s ease infinite",
        }}
      >
        Countdown to Birthday! 
      </h2>

      <style jsx>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      <div className="flex gap-4 justify-center">
        {timeUnit(timeLeft.days, "Days", CalendarDays)}
        {timeUnit(timeLeft.hours, "Hours", Clock)}
        {timeUnit(timeLeft.minutes, "Minutes", Timer)}
        {timeUnit(timeLeft.seconds, "Seconds", Hourglass)}
      </div>
    </div>
  );
}
