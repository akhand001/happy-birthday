import React, { useRef, useState } from "react";

export default function SimpleMusicPlayer({ musicUrl }) {
  const audioRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="p-3 bg-red-100 rounded-lg shadow-md text-center max-w-xs mx-auto">
      <button
        onClick={togglePlay}
        className={`px-5 py-2 rounded-full text-white font-bold transition-all ${
          isPlaying
            ? "bg-red-600 hover:bg-red-700"
            : "bg-green-600 hover:bg-green-700"
        }`}
      >
        {isPlaying ? "⏸ Stop" : "▶ Play"}
      </button>
      <audio ref={audioRef} src={musicUrl} loop />
    </div>
  );
}
