"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className=""
      aria-label="Toggle theme"
    >
      <p>Toggle Theme</p>
    </button>
  );
}
