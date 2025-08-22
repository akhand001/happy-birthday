import React from "react";
import { Sun, Moon, Heart } from "lucide-react";

export default function ThemeSwitcher({ theme, setTheme }) {
  const themes = [
    { value: "light", label: "Light", icon: <Sun className="w-5 h-5" /> },
    { value: "dark", label: "Dark", icon: <Moon className="w-5 h-5" /> },
    { value: "romantic", label: "Romantic", icon: <Heart className="w-5 h-5 text-pink-500" /> }
  ];

  return (
    <div className="p-4 text-right flex gap-2 justify-end">
      {themes.map((t) => (
        <button
          key={t.value}
          onClick={() => setTheme(t.value)}
          className={`p-2 rounded-full shadow-md transition-transform transform hover:scale-110 ${
            theme === t.value
              ? "bg-pink-100 border-2 border-pink-400"
              : "bg-white border border-gray-300 hover:bg-gray-100"
          }`}
          title={t.label}
        >
          {t.icon}
        </button>
      ))}
    </div>
  );
}
