"use client";

import { useSyncExternalStore, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);

  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  mediaQuery.addEventListener("change", callback);

  return () => {
    window.removeEventListener("storage", callback);
    mediaQuery.removeEventListener("change", callback);
  };
}

function getSnapshot(): "light" | "dark" {
  const saved = localStorage.getItem("theme") as "light" | "dark" | null;
  if (saved) return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

// Must be stable and the same on every server render
function getServerSnapshot(): "light" | "dark" {
  return "light";
}

export default function ThemeSwitcher() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  // Apply the theme to the document whenever it changes
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    const next = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", next);

    // Notify other tabs + force our own component to update
    window.dispatchEvent(new Event("storage"));
  }, [theme]);

  return (
    <motion.button
      onClick={toggleTheme}
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