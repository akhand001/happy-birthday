import React, { useState } from "react";
import Countdown from "./components/Countdown";
import ConfettiEffect from "./components/ConfettiEffect";
import MemoriesGallery from "./components/MemoriesGallery";
import Timeline from "./components/Timeline";
import LoveLetter from "./components/LoveLetter";
import SurpriseVideoModal from "./components/SurpriseVideoModal";
import ScratchCard from "./components/ScratchCard";
import BirthdayCake from "./components/BirthdayCake";
import MiniGame from "./components/MiniGame";
import ThemeSwitcher from "./components/ThemeSwitcher";
import MusicPlayer from "./components/MusicPlayer";
import FloatingHearts from "./FloatingHearts";
import Coupons from "./components/Coupons";
import Footer from "./components/Footer";
import BirthdayHugCard from "./components/BirthdayHugCard";
import BirthdayCakeCard from "./components/BirthdayCakeCard";
import StarBirthdayCard from "./components/StarBirthdayCard";
import Card from "./components/Card"; // <-- Sticky note Card component
import BirthdayCalendar from "./components/BirthdayCalendar";
import BirthdayBanner from "./components/BirthdayBanner";
import MovieCredits from "./MovieCredits";



export default function App() {
  const [theme, setTheme] = useState("light");

  const quotes = [
    "Happy Birthday my love ❤️",
    "Aap meri zindagi ka sabse khoobsurat hissa ho 💖",
    "You are my reason to smile every day 😊",
    "Aap meri har dua ka sabse khoobsurat jawaab ho 🌸",
    "You make my life brighter than the sun ☀️",
    "Aap meri rooh ka sukoon ho 🕊️",
    "You are the love of my life 💍",
    "Aap meri zindagi ka geet ho 🎶",
    "My heart beats only for you 💓",
    "Aap meri muskaan ki wajah ho 💞",
    "You are my dream come true ✨",
    "Aap meri mohabbat ki sabse pyari tasveer ho 🖼️",
    "Happy Birthday to my forever queen 👑",
    "Aap meri har subah ka ujala ho 🌅",
    "You make every moment magical ✨",
    "Aap meri khushi ka sabab ho 💫",
    "You are my sweetest blessing 🎁",
    "Aap meri zindagi ka sabse khoobsurat sapna ho 💭",
    "I am lucky to be yours forever 💕",
    "Aap meri har kahani ka hero ho 💌",
    "You complete me in every way 💖",
    "Aap meri rooh ke humsafar ho ❤️",
    "You are my forever and always 🌹",
    "Aap meri saari mohabbat ka armaan ho 💗",
    "I love you more than words can say 💞",
  ];

  const messages = [
    "Hey Jaan ❤️🎈",
    "September 3 ❤️\nSpecial Day",
    "So\nToday is your\nSpecial Day 💕",
    "Happy Birthday\nTo You 🎂🎈",
    "I just wanted to tell you something ❤️❤️",
    "You are the most Special Person\nin my life ❤️",
    "You make my World complete ✨",
    "I wanted to ❤️🎈",
    "Be there with you Forever 💕",
    "Dear Everything,\nYou are such a gift to me ❤️😊",
    "I wish you lots of\nHappiness, Success, Love ❤️⭐",
    "Having you in my life\nis such a blessing ❤️",
    "I ❤️ U",
  ];

  return (
    <div
      className={
        theme === "dark"
          ? "bg-gray-900 text-white"
          : theme === "romantic"
            ? "bg-pink-50 text-pink-900"
            : "bg-white text-gray-900"
      }
    >
      {/* Theme & Music */}
      <ThemeSwitcher theme={theme} setTheme={setTheme} />
      <MusicPlayer musicUrl="/hbd.mp3" />
      <BirthdayBanner />
      <ConfettiEffect />

      {/* Countdown */}
      <Countdown date="2025-09-03T00:00:00" />

      {/* Memories & Timeline */}
      <MemoriesGallery
        images={[
          { src: "/images/memory1.png", caption: "Our first trip together" },
          { src: "/images/memory2.png", caption: "Our first trip together" },
        ]}
      />

      <Timeline
        events={[
          { date: "27.08.2023", text: "The day our paths crossed for the first time" },
          { date: "03.09.2023", text: "Your first birthday with me in your life" },
          { date: "20.10.2023", text: "Our magical first date" },
          { date: "29.10.2023", text: "The day I asked you to be mine forever" },
          { date: "28.08.2024", text: "Our unforgettable first kiss" },
          { date: "28.08.2024", text: "The moment I placed the ring on your finger" },
          { date: "27.08.2025", text: "Two Years Complete" },
          { date: "in Future", text: "Our beautiful wedding day" },
        ]}
      />

      {/* Love Letter & Surprise */}
      <LoveLetter letter="
meri jaan,
Today is not just your birthday, it’s a divine day for me — the day Bhagwan sent his most precious blessing into this world, YOU 🙏💫.
You are my love, my life, my zindagi. You are the aarti 🪔 that lights up my heart, the shakti that keeps me strong, and the prarthana that I never stop whispering to the universe.
Every morning when I open my eyes, I thank Mahadev 🕉 for giving me someone as pure and beautiful as you. You are my sunshine ☀ in the darkest clouds, my mandir ki ghanti that fills my soul with peace, and my endless mohabbat.
On your janamdin, I bow in prayer 🤲 — may Bhagwan always protect you, bless you with health, wisdom, and all the happiness of this universe. May your life be as radiant as Diwali diyas 🪔, as pure as Ganga jal, and as strong as Shiv ji’s trishul.
You are my soulmate, my karmic bond, my ardhangini  written by destiny itself. With you, I feel I have found my own little Vaikunth, my own Kailash.
I promise to always stand by you like Ram stood by Sita, like Shiv stood by Parvati, like Krishna stood by Radha. In every yug, in every janam, my soul will keep finding you — because you are not just my today, you are my anant prem.
So on this sacred day of your birth 🌸, I just want to tell you…
You are my prayer answered, my dream fulfilled, my life’s most divine gift.
Happy Birthday once again, meri zindagi 🤍.
You are my blessing, my aashirvaad, my eternal love.

" />


      {/* Scratch Card Game */}
      <h1
        className="text-4xl font-bold text-pink-600 my-6 text-center"
        style={{ fontFamily: "'Dancing Script', cursive" }}
      >
        Scratch to Reveal
      </h1>
      <Coupons coupons={quotes} />
      <div>
        <BirthdayCalendar
          year={2025}
          month={8}          // September (0-indexed)
          highlightDay={3}   // 3rd
        />
      </div>

      {/* Cake & Cute Cards */}
      <BirthdayCake />
      <BirthdayHugCard />
      <br />
      <br />
      <br />
      <br />
      <BirthdayCakeCard />
      <StarBirthdayCard />

      <div className="min-h-screen bg-[url('/images/paper-texture.png')] bg-cover  flex items-center justify-center p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {messages.map((msg, i) => {
            // random pastel sticky note colors with gradient
            const colors = [
              "from-yellow-100 to-yellow-200",
              "from-pink-100 to-pink-200",
              "from-green-100 to-green-200",
              "from-blue-100 to-blue-200",
              "from-purple-100 to-purple-200",
            ];
            const color = colors[i % colors.length];

            // small doodles (randomly assigned)
            const doodles = ["❤️", "🎈", "⭐", "🎂", "✨", "💕"];
            const doodle = doodles[Math.floor(Math.random() * doodles.length)];

            // random rotations for casual look
            const rotation = Math.floor(Math.random() * 12 - 6);

            return (
              <div
                key={i}
                className={`
                relative 
                bg-gradient-to-br ${color} 
                shadow-lg rounded-xl p-5 
                font-[Patrick_Hand] text-lg
                transform hover:rotate-0 hover:-translate-y-3 hover:shadow-2xl
                transition-all duration-300 ease-in-out
                before:content-[''] before:absolute before:top-[-12px] before:left-1/2 
                before:-translate-x-1/2 before:w-12 before:h-4 
                before:bg-yellow-200 before:rounded-sm before:rotate-[-3deg] before:shadow-md
              `}
                style={{
                  rotate: `${rotation}deg`,
                  minHeight: "160px",
                  backgroundImage: "url('/images/paper-texture.png')",
                  backgroundBlendMode: "multiply",
                  backgroundSize: "cover",
                  whiteSpace: "pre-line",
                }}
              >
                <p className="text-gray-800 text-center leading-snug">
                  {msg}
                </p>
                {/* Random doodle placed casually */}
                <span
                  className={`absolute text-xl ${Math.random() > 0.5
                    ? "bottom-2 right-3 text-red-500"
                    : "top-2 left-3 text-pink-500"
                    }`}
                >
                  {doodle}
                </span>
              </div>
            );
          })}
        </div>

        {/* Handwritten Font Import */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap"
        />
      </div>

      {/* Mini Game & Scratch */}
      <MiniGame />
      <ScratchCard />
      <FloatingHearts />
      {/* Credits section at end */}
      <div style={{ marginTop: "5rem" }}>
        <MovieCredits />
      </div>

      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}
