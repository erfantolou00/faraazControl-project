"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<"light" | "dark" | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const initial = saved || (prefersDark ? "dark" : "light");
    setTheme(initial);
  }, []);

  useEffect(() => {
    if (!theme) return;

    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);

    localStorage.setItem("theme", theme);
  }, [theme]);

  if (!theme) return null;

  return (
    <motion.button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      whileTap={{ scale: 0.85 }}
      whileHover={{ scale: 1.1 }}
      className="relative p-2 rounded-xl border border-primary/40 text-primary bg-primary/5
                 hover:bg-primary/10 backdrop-blur-sm transition-all shadow-sm
                 hover:shadow-primary/20 flex items-center justify-center"
      aria-label="Toggle theme"
    >
      <motion.div
        key={theme}
        initial={{ opacity: 0, rotate: -90 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 0.25 }}
      >
        {theme === "light" ? (
          <Sun className="w-5 h-5 text-primary" />
        ) : (
          <Moon className="w-5 h-5 text-primary" />
        )}
      </motion.div>
    </motion.button>
  );
}
