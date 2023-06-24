"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MoonIcon, SunMoon } from "lucide-react";

function ThemeButton() {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button className="h-8 w-8 p-1 hover:bg-gray-300 dark:hover:bg-gray-800 rounded-full">
      {currentTheme === "dark" ? (
        <SunMoon
          className="text-yellow-500"
          onClick={() => setTheme("light")}
        />
      ) : (
        <MoonIcon className="text-gray-700" onClick={() => setTheme("dark")} />
      )}
    </button>
  );
}

export default ThemeButton;
