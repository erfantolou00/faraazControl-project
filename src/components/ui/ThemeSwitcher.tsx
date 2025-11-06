"use client";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // فقط در سمت کلاینت اجرا بشه
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = saved || (prefersDark ? "dark" : "light");
    
    setTheme(initialTheme);
  }, []);

  useEffect(() => {
    if (theme) {
      // ست کردن data-theme و کلاس‌ها
      document.documentElement.setAttribute("data-theme", theme);
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(theme);
      
      // ذخیره در localStorage
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded border border-primary text-primary hover:bg-primary/20 transition"
    >
      {theme === "light" ? "🌞" : "🌙"}
    </button>
  );
}